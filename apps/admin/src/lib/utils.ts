import type { Chat } from '../contexts/chatStore'
import type { ChatItem } from '../types'

export const parseChatData = (chats: Record<string, Chat>): ChatItem[] => {
  return Object.entries(chats).map((chat) => ({
    userId: chat[0],
    lastMessage: chat[1].messages[chat[1].messages.length - 1]?.message || ''
  }))
}

export const getTime = () => {
  const date = new Date()
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')
  return `${hours}:${minutes}:${seconds}`
}
