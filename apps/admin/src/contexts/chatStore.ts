import { io, type Socket } from 'socket.io-client'
import { create } from 'zustand'

interface Message {
  from: 'user' | 'admin'
  message: string
}

interface Chat {
  userId: string
  messages: Message[]
}

interface ChatStore {
  socket: Socket | null
  chats: Record<string, Chat>

  connect: () => void
  recieveMessage: (userId: string, message: string) => void
  // sendMessageToUser: (userId: string, message: string) => void
  // getChat(userId: string): Chat | undefined
  // getAllChats: () => Chat[]
}

export const useChatStore = create<ChatStore>((set, get) => ({
  socket: null,
  chats: {},
  connect: () => {
    const socket = io('http://localhost:3000')

    socket.emit(
      'register',
      JSON.stringify({ role: 'admin', id: crypto.randomUUID() })
    )

    socket.on('admin:receive', ({ id, message }) => {
      get().recieveMessage(id, message)
    })

    set({ socket })
  },
  recieveMessage: (userId, message) => {
    set((state) => {
      const existingChat = state.chats[userId] || { userId, messages: [] }

      return {
        chats: {
          ...state.chats,
          [userId]: {
            ...existingChat,
            messages: [...existingChat.messages, { from: 'user', message }]
          }
        }
      }
    })
  }
}))
