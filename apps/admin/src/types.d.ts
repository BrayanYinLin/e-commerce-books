export interface Product {
  id: string
  name: string
  price: number
  stock: number
  image: string
}

export type Message = {
  message: string
  isSender: boolean
}
