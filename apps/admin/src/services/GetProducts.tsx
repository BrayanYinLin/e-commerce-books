import type { Product } from '../types'

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch('http://localhost:3000/api/products')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data as Product[]
  } catch (error) {
    console.error('Failed to fetch products:', error)
    throw error
  }
}
