import { createBrowserRouter } from 'react-router'
import { DashboardPage } from './pages/DashboardPage'
import { ChatPage } from './pages/ChatPage'
import { RootPage } from './pages/RootPage'
import { ProductPage } from './pages/ProductPage'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    children: [
      {
        index: true,
        element: <DashboardPage />
      },
      {
        path: 'chat',
        element: <ChatPage />
      },
      {
        path: 'products',
        element: <ProductPage />
      }
    ]
  }
])
