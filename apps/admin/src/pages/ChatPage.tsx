import { useState, type FormEvent } from 'react'
import { ChatBox } from '../components/ChatBox'
import { ChatInput } from '../components/ChatInput'
import type { Message } from '../types'

export function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([])

  const handleSendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const message = data.get('message') as string
    setMessages((prev) => [...prev, { isSender: true, message }])
  }

  return (
    <main className="col-span-10 min-h-dvh">
      <div className="h-dvh grid grid-rows-10 w-2/6 mx-auto">
        <ChatBox messages={messages} />
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </main>
  )
}
