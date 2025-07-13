export interface Product {
  name: string
  price: number
  stock: number
  image: string
}

export const createProduct = async (product: Product) => {
  try {
    const response = await fetch('http://localhost:3000/api/products/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
    const data = await response.json() as Product

    return data
  } catch (e) {
    console.error(e)
  }
}