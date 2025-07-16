import { Outlet } from 'react-router'
import { Navbar } from '../components/Navbar'

export const RootPage = () => {
  return (
    <main className="max-h-dvh grid grid-rows-[auto_1fr]">
      <Navbar />
      <Outlet />
    </main>
  )
}
