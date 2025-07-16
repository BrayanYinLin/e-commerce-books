import type { FormEvent } from 'react'

type ChatInputProps = {
  onSendMessage: (event: FormEvent<HTMLFormElement>) => void
}

export function ChatInput({ onSendMessage }: ChatInputProps) {
  const resetInput = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const input = form.elements.namedItem('message') as HTMLInputElement
    onSendMessage(event)
    if (input) {
      input.value = ''
    }
  }

  return (
    <form className="w-full flex gap-2 p-2" onSubmit={resetInput}>
      <input
        type="text"
        placeholder="Type here"
        name="message"
        className="input grow"
      />
      <button type="submit" className="btn">
        Enviar
      </button>
    </form>
  )
}
