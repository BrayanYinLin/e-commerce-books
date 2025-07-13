import { useEffect, useRef } from 'react'
import { ChatMassage } from './ChatMassage'

type ChatMessage = { isSender: boolean; message: string }

export function ChatBox({ messages }: { messages: ChatMessage[] }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight
    }
  }, [messages])

  return (
    <section
      ref={ref}
      className="row-span-9 overflow-y-scroll scrollbar-hide py-3"
    >
      {messages.map((msg, index) => (
        <ChatMassage
          key={index}
          isSender={msg.isSender}
          message={msg.message}
        />
      ))}
    </section>
  )
}
