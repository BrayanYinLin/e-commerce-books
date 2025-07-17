import { useEffect, type FormEvent } from 'react'
import { ChatBox } from '../components/ChatBox'
import { ChatInput } from '../components/ChatInput'
import { ChatList } from '../components/ChatList'
import { useChatStore } from '../contexts/chatStore'
import { parseChatData } from '../lib/utils'

export function ChatPage() {
  const { chats, currentChat, sendMessageToUser, connect, isConnected } = useChatStore()

  const handleSendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const message = data.get('message') as string
    if (currentChat) {
      sendMessageToUser(currentChat.userId, message)
    }
  }

  useEffect(() => {
    connect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main className="h-full grid grid-cols-[0.6fr_2fr] overflow-hidden gap-4 p-4">
      <ChatList chats={parseChatData(chats)} connectionState={isConnected} />
      <div className="grid grid-rows-[1fr_auto] overflow-hidden">
        {currentChat ? (
          <ChatBox messages={currentChat.messages} />
        ) : (
          <div className="text-center text-gray-500">Select a chat</div>
        )}
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </main>
  )
}
