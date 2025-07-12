import { Router } from 'express'
import { ProductCtrl } from '../types'
import { ProductController } from '../controllers/product.controller'
import { ProductModel } from '../schemas/product.schema'

export const injectController = (controller: ProductCtrl) => {
  const productRouter = Router()

  productRouter.get('/', controller.findAll.bind(controller))
  productRouter.get('/:name', controller.findByName.bind(controller))
  productRouter.post('/', controller.create.bind(controller))
  productRouter.put('/:id', controller.edit.bind(controller))
  productRouter.post('/buy/:id', controller.buy.bind(controller))

  return productRouter
}

const controller = new ProductController(ProductModel)
const productRouter = injectController(controller)
export { productRouter }
