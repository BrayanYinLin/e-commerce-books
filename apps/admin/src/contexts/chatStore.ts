import { io, type Socket } from 'socket.io-client'
import { create } from 'zustand'
import { getTime } from '../lib/utils'

export interface Message {
  from: 'user' | 'admin'
  message: string
  time: string
}

export interface Chat {
  userId: string
  messages: Message[]
}

interface ChatStore {
  socket: Socket | null
  chats: Record<string, Chat>
  currentChat: Chat | null

  connect: () => void
  recieveMessage: (userId: string, message: string) => void
  sendMessageToUser: (userId: string, message: string) => void
  getChat(userId: string): Chat | undefined
  // getAllChats: () => Chat[]
}

export const useChatStore = create<ChatStore>((set, get) => ({
  socket: null,
  chats: {},
  currentChat: null,
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
            messages: [
              ...existingChat.messages,
              { from: 'user', message, time: getTime() }
            ]
          }
        }
      }
    })

    const currentUserActive = get().currentChat?.userId

    if (currentUserActive) {
      get().getChat(currentUserActive)
    }
  },
  sendMessageToUser: (userId, message) => {
    const socket = get().socket

    if (socket) {
      socket.emit('admin:reply', JSON.stringify({ id: userId, message }))
      set((state) => {
        const existingChat = state.chats[userId] || { userId, messages: [] }

        return {
          chats: {
            ...state.chats,
            [userId]: {
              ...existingChat,
              messages: [
                ...existingChat.messages,
                { from: 'admin', message, time: getTime() }
              ]
            }
          }
        }
      })
      get().getChat(userId)
    }
  },
  getChat: (userId) => {
    const chats = get().chats
    set({
      currentChat: chats[userId] || { userId, messages: [] }
    })
    return chats[userId]
  }
}))
