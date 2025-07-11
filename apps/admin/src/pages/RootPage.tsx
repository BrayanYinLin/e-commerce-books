import { Outlet } from 'react-router'
import { Navbar } from '../components/Navbar'

export const RootPage = () => {
  return (
    <main className="min-h-dvh grid grid-cols-12 gap-2">
      <Navbar />
      <Outlet />
    </main>
  )
}
