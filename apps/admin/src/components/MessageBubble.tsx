import type { Message } from '../contexts/chatStore'

export function MessageBubble({ from, message }: Message) {
  const style = from === 'admin' ? 'chat chat-end' : 'chat chat-start'

  return (
    <div className={style}>
      <div className="chat-header">
        {/* <time className="text-xs opacity-50">{time}</time> */}
      </div>
      <div className="chat-bubble">{message}</div>
    </div>
  )
}
