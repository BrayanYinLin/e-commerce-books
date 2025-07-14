import type { Product } from '../types'

export const editProducts = async ({
  id,
  name,
  price,
  stock,
  image
}: Product) => {
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
    const data = await response.json()

    return data
  } catch (e) {
    console.error(e)
  }
}
