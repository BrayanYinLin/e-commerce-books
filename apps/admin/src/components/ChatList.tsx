import type { ChatItem } from '../types'
import { Chat } from './Chat'

export function ChatList({ chats, connectionState }: { chats: ChatItem[], connectionState: boolean }) {
  return (
    <ul className="list w-xs bg-base-100 rounded-box shadow-md">
      <li className="p-4 pb-2 opacity-60 tracking-wide flex justify-between">
        <span>Chats</span>
        <div className={`badge ${connectionState ? 'badge-accent' : 'badge-error'}`}>{connectionState ? 'Conectado' : 'Desconectado'}</div>
      </li>

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
