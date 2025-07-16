import { useRef, useState, type FormEvent } from 'react'
import { useProductStore } from '../contexts/productStore'
import { SearchIcon } from './Icons'
import { useLocation } from 'react-router'

export function SearchProduct() {
  const input = useRef<HTMLInputElement | null>(null)
  const location = useLocation()
  const { fetchByName, fetchProducts } = useProductStore()
  const [needsReset, setNeedsReset] = useState<boolean>(false)

  const handleSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const searchTerm = formData.get('search') as string
    if (searchTerm) {
      await fetchByName(searchTerm)
      setNeedsReset(true)
    }
  }

  const clear = async () => {
    if (input.current) {
      input.current.value = ''
    }
    await fetchProducts()
    setNeedsReset(false)
  }

  return (
    <>
      {!location.pathname.includes('chat') &&
        !location.pathname.includes('products') && (
          <>
            {needsReset && (
              <button className="btn btn-outline" onClick={clear}>
                Limpiar
              </button>
            )}
            <form onSubmit={handleSearch} className="flex gap-3 mx-3">
              <label className="input">
                <button className="cursor-pointer">
                  <SearchIcon />
                </button>
                <input
                  ref={input}
                  type="text"
                  name="search"
                  className="grow"
                  placeholder="Search"
                />
                {/* <kbd className="kbd kbd-sm">⌘</kbd>
        <kbd className="kbd kbd-sm">K</kbd> */}
              </label>
            </form>
          </>
        )}
    </>
  )
}
