import { Outlet } from 'react-router'
import { Navbar } from '../components/Navbar'

export const RootPage = () => {
  return (
    <main className="min-h-dvh flex flex-col">
      <Navbar />
      <Outlet />
    </main>
  )
}
