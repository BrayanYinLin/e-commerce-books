import { type ReactNode } from 'react'

export function Overlay({ children }: { children: ReactNode }) {
  return (
    <div className="fixed inset-0 z-40 bg-black/50  flex items-center justify-center">
      {children}
    </div>
  )
}
