import { model, Schema } from 'mongoose'
import { randomUUID } from 'node:crypto'

const productSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    default: () => randomUUID()
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: false
  }
})

export const ProductModel = model('Product', productSchema)
export type ProductEntity = typeof ProductModel
