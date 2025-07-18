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
  isConnected: boolean
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
  isConnected: false,
  socket: null,
  chats: {},
  currentChat: null,
  connect: () => {
    const storedId = localStorage.getItem('admin_id') || crypto.randomUUID()
    localStorage.setItem('admin_id', storedId)

    const userData = {
      role: 'admin',
      id: storedId,
      origin: 'react'
    }

    const prevSocket = get().socket
    if (prevSocket) {
      prevSocket.off('admin:receive')
      prevSocket.disconnect()
    }
    const socket = io('http://localhost:3000', {
      autoConnect: true
    })

    const recoveredChats = localStorage.getItem('chats')

    if (recoveredChats) {
      set({
        chats: JSON.parse(recoveredChats) ?? {}
      })
    }

    // Primero configuras los eventos
    socket.on('connect', () => {
      set({ isConnected: true })
      socket.emit('register', JSON.stringify(userData))
    })

    socket.on('disconnect', () => {
      set({ isConnected: false })
    })

    socket.on('connect_error', (err) => {
      console.error('🚫 Error al conectar:', err.message)
      set({ isConnected: false })
    })

    socket.on('admin:receive', ({ id, message }) => {
      get().recieveMessage(id, message)
    })

    // Y recién aquí lo guardas en el estado global
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

    localStorage.setItem('chats', JSON.stringify(get().chats))

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
      localStorage.setItem('chats', JSON.stringify(get().chats))
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
