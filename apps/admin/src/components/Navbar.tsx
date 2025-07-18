import { Link } from 'react-router'
import { SearchProduct } from './SearchProduct'
//[&>*]:p-3
export function Navbar() {
  return (
    <>
      <div className="drawer sticky top-0 z-50">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar bg-base-300 w-full">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="mx-2 flex-1 px-2">Admin Panel</div>
            <div className="hidden flex-none lg:block">
              <ul className="menu menu-horizontal">
                <SearchProduct />
                <li>
                  <Link
                    to="/"
                    className="text-base text-black dark:text-white hover:underline"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/chat"
                    className="text-base text-black dark:text-white hover:underline"
                  >
                    Chat
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="text-base text-black dark:text-white hover:underline"
                  >
                    Nuevo Producto
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-4">
            <SearchProduct />
            <li>
              <Link
                to="/"
                className="text-base text-black dark:text-white hover:underline"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/chat"
                className="text-base text-black dark:text-white hover:underline"
              >
                Chat
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="text-base text-black dark:text-white hover:underline"
              >
                Nuevo Producto
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* <nav className="col-span-2 bg-gray-800 text-white">
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
            <Link
              to="/products"
              className="text-base text-white hover:underline"
            >
              Nuevo Producto
            </Link>
          </li>
        </ul>
      </nav> */}
    </>
  )
}
