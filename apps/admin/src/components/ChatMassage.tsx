import type { Message } from '../types'

export function ChatMassage({ isSender, message }: Message) {
  const style = isSender ? 'chat chat-end' : 'chat chat-start'

  return (
    <div className={style}>
      <div className="chat-bubble">{message}</div>
    </div>
  )
}
