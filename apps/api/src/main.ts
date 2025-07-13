import express, { Request, Response } from 'express'
import { createServer } from 'node:http'
import { STATIC_PATH } from './lib/constants'
import cors, { CorsOptions } from 'cors'
import { setupSocket } from './sockets'
import { productRouter } from './routes/product.router'

const app = express()
const server = createServer(app)

setupSocket(server)

const whitelist = ['http://localhost:4200', 'http://localhost:5173']

// const corsOptions: CorsOptions = {
//   origin: function (origin, callback) {
//     if (!origin || whitelist.includes(origin)) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   },
//   credentials: true // si necesitas enviar cookies o headers de autenticación
// }

app.use(express.json())
app.use(cors({origin:"*"}))
app.use(express.static(STATIC_PATH))
app.use('/api/products', productRouter)

app.get('/{*splat}', (_: Request, res: Response) => {
  res.sendFile('index.html', { root: STATIC_PATH })
})

export { server }
