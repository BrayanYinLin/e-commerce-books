import { useChatStore } from '../contexts/chatStore'
import type { ChatItem } from '../types'

export function Chat({ userId, lastMessage }: ChatItem) {
  const { getChat } = useChatStore()

  return (
    <button
      className="cursor-pointer filter transition hover:backdrop-brightness-50"
      onClick={() => getChat(userId)}
    >
      <li className="list-row">
        <div>
          <div className="text-start">Guest{userId}</div>
          <div className="text-start text-xs uppercase opacity-60 truncate">
            {lastMessage}
          </div>
        </div>
      </li>
    </button>
  )
}
