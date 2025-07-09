import { createRoot } from 'react-dom/client'
import { Dashboard } from './products/pages/Dashboard'

const root = document.getElementById('root')!
createRoot(root).render(
  <>
    <Dashboard />
  </>
)
