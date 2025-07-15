import type { Chat } from '../contexts/chatStore'
import type { ChatItem } from '../types'

export const parseChatData = (chats: Record<string, Chat>): ChatItem[] => {
  return Object.entries(chats).map((chat) => ({
    userId: chat[0],
    lastMessage: chat[1].messages[chat[1].messages.length - 1]?.message || ''
  }))
}
