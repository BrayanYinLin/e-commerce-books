import { Link } from 'react-router'

export function Navbar() {
  return (
    <nav className="col-span-2 bg-gray-800 text-white p-4">
      <h1>Admin Navbar</h1>
      <div className="flex flex-col space-y-2 mt-4">
        <Link to="/" className="text-white hover:underline">
          Dashboard
        </Link>
        <Link to="/chat" className="text-white hover:underline">
          Chat
        </Link>
      </div>
    </nav>
  )
}
