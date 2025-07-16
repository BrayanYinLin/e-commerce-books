import { Request, Response } from 'express'
import { ProductCtrl } from '../types'
import { ProductEntity } from '../schemas/product.schema'

class ProductController implements ProductCtrl {
  product!: ProductEntity

  constructor(product: ProductEntity) {
    this.product = product
  }

  async findAll(_: Request, res: Response): Promise<Response> {
    const products = await this.product.find()

    return res.status(200).json(products)
  }

  async findByName(req: Request, res: Response): Promise<Response> {
    const { name } = req.params
    const foundProducts = await this.product.find({
      name: new RegExp(name, 'i')
    })

    return res.status(200).json(foundProducts)
  }

  async buy(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const foundProduct = await this.product.findOne({
      id
    })

    if (!foundProduct) {
      return res.status(404).json({ error: 'Product not found' })
    }

    if (foundProduct.stock <= 0) {
      return res.status(400).json({ error: 'Product out of stock' })
    }

    await this.product.findOneAndUpdate(
      { id },
      { $inc: { stock: -1 } },
      { new: true }
    )

    return res.status(200).json({ message: `Product ${id} purchased` })
  }

  async create(req: Request, res: Response): Promise<Response> {
    const { name, price, stock, image } = req.body

    const newProduct = await this.product.create({ name, price, stock, image })
    return res.status(201).json(newProduct)
  }

  async edit(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const { name, price, stock, image } = req.body
    const foundProduct = await this.product.findOne({
      id
    })

    if (!foundProduct) {
      return res.status(404).json({ error: 'Product not found' })
    }

    const product = await this.product.findByIdAndUpdate(
      foundProduct._id,
      { name, price, stock, image },
      { new: true }
    )

    return res.status(201).json(product)
  }
}

export { ProductController }
