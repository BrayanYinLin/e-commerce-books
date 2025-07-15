import { useEffect, type FormEvent } from 'react'
import { ChatBox } from '../components/ChatBox'
import { ChatInput } from '../components/ChatInput'
import { ChatList } from '../components/ChatList'
import { useChatStore } from '../contexts/chatStore'
import { parseChatData } from '../lib/utils'

export function ChatPage() {
  const { chats, currentChat, sendMessageToUser, connect } = useChatStore()

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
    <main className="p-4 flex grow">
      <ChatList chats={parseChatData(chats)} />
      <div className="grid grid-rows-10 w-2/6 mx-auto">
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
