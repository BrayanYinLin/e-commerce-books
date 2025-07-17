import express, { Request, Response } from 'express'
import { createServer } from 'node:http'
import { STATIC_ADMIN_PATH, STATIC_CLIENT_PATH } from './lib/constants'
import cors from 'cors'
import { setupSocket } from './sockets'
import { productRouter } from './routes/product.router'

const app = express()
const server = createServer(app)

setupSocket(server)

app.use(express.json())
app.use(cors({ origin: '*' }))

app.use('/api/products', productRouter)

app.use('/admin', express.static(STATIC_ADMIN_PATH))
app.get('/admin/{*splat}', (_: Request, res: Response) => {
  res.sendFile('index.html', { root: STATIC_ADMIN_PATH })
})

app.use('/', express.static(STATIC_CLIENT_PATH))
app.get('/{*splat}', (_: Request, res: Response) => {
  res.sendFile('index.html', { root: STATIC_CLIENT_PATH })
})

// app.get('/{*splat}', (_: Request, res: Response) => {
//   res.sendFile('index.html', { root: STATIC_PATH })
// })

export { server }
