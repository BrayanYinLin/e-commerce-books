import { useEffect, useRef } from 'react'
import { MessageBubble } from './MessageBubble'
import type { Message } from '../contexts/chatStore'

export function ChatBox({ messages }: { messages: Message[] }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight
    }
  }, [messages])

  return (
    <section ref={ref} className="overflow-y-scroll scrollbar-hide py-3">
      {messages?.map((msg, index) => (
        <MessageBubble
          key={index}
          from={msg.from}
          message={msg.message}
          time={msg.time}
        />
      ))}
    </section>
  )
}
