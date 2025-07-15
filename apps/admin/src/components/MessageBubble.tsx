import type { Message } from '../contexts/chatStore'

export function MessageBubble({ from, message }: Message) {
  const style = from === 'admin' ? 'chat chat-end' : 'chat chat-start'

  return (
    <div className={style}>
      <div className="chat-bubble">{message}</div>
    </div>
  )
}
