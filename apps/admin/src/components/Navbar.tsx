import { Link } from 'react-router'
//[&>*]:p-3
export function Navbar() {
  return (
    <nav className="col-span-2 bg-gray-800 text-white">
      <h1 className="p-3">Admin Navbar</h1>
      <ul className="menu w-full [&_li>*]:rounded-none p-0">
        <li>
          <Link to="/" className="text-base text-white hover:underline">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/chat" className="text-base text-white hover:underline">
            Chat
          </Link>
        </li>
        <li>
          <Link to="/products" className="text-base text-white hover:underline">
            Nuevo Producto
          </Link>
        </li>
      </ul>
    </nav>
  )
}
