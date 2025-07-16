import { create } from 'zustand'
import type { Product } from '../types'

interface ProductStore {
  products: Product[]
  loading: boolean
  error: Error | null
  fetchProducts: () => Promise<void>
  fetchByName: (name: string) => Promise<void>
  createProduct: (product: Omit<Product, 'id'>) => Promise<Product | null>
  updateProduct: (product: Product) => Promise<Product | null>
  deleteProduct: (id: string) => Promise<void>
}

export const useProductStore = create<ProductStore>((set, get) => ({
  products: [],
  loading: true,
  error: null,

  fetchProducts: async () => {
    set({ loading: true, error: null })
    try {
      const response = await fetch('http://localhost:3000/api/products')
      const data = await response.json()
      set({ products: data, loading: false })
    } catch (error) {
      console.error('Error fetching products:', error)
      set({
        error:
          error instanceof Error
            ? error
            : new Error('Hubo un errore inesperado'),
        loading: false
      })
    }
  },
  createProduct: async (product: Omit<Product, 'id'>) => {
    try {
      const response = await fetch('http://localhost:3000/api/products/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      })
      const data = (await response.json()) as Product

      await get().fetchProducts()
      return data
    } catch (e) {
      set({
        error: e instanceof Error ? e : new Error('An error occurred')
      })
      return null
    }
  },
  updateProduct: async ({ id, name, price, stock, image }: Product) => {
    try {
      const response = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          price,
          stock,
          image
        })
      })
      const data = (await response.json()) as Product

      await get().fetchProducts()
      return data
    } catch (e) {
      console.error(e)
      set({
        error: e instanceof Error ? e : new Error('An error occurred')
      })
      return null
    }
  },
  deleteProduct: async (id: string) => {
    try {
      await fetch(`http://localhost:3000/api/products/${id}`, {
        method: 'DELETE'
      })

      await get().fetchProducts()
    } catch (e) {
      set({
        error: e instanceof Error ? e : new Error('An error occurred')
      })
    }
  },
  fetchByName: async (name: string) => {
    set({ loading: true, error: null })
    try {
      const response = await fetch(`http://localhost:3000/api/products/${name}`)
      const data = await response.json()
      set({ products: data, loading: false })
    } catch (error) {
      console.error('Error fetching products by name:', error)
      set({
        error:
          error instanceof Error
            ? error
            : new Error('Hubo un errore inesperado'),
        loading: false
      })
    }
  }
}))
