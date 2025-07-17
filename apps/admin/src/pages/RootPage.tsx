import { Outlet } from 'react-router'
import { Navbar } from '../components/Navbar'
import { useEffect } from 'react'
import { useChatStore } from '../contexts/chatStore'

export const RootPage = () => {
  const { connect } = useChatStore()

  useEffect(() => {
    connect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main className="h-dvh grid grid-rows-[auto_1fr]">
      <Navbar />
      <Outlet />
    </main>
  )
}
