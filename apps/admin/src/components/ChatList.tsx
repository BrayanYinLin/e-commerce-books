import type { ChatItem } from '../types'
import { Chat } from './Chat'

export function ChatList({ chats }: { chats: ChatItem[] }) {
  return (
    <ul className="list w-xs bg-base-100 rounded-box shadow-md">
      <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Chats</li>

      {chats.map((chat) => (
        <Chat
          key={chat.userId}
          userId={chat.userId}
          lastMessage={chat.lastMessage}
        />
      ))}
    </ul>
  )
}
