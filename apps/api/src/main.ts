import express, { Request, Response } from 'express'
import { createServer } from 'node:http'
import { STATIC_PATH } from './lib/constants'
import cors from 'cors'
import { setupSocket } from './sockets'

const app = express()
const server = createServer(app)

setupSocket(server)

app.use(express.json())
app.use(cors())
app.use(express.static(STATIC_PATH))

app.get('/{*splat}', (_: Request, res: Response) => {
  res.sendFile('index.html', { root: STATIC_PATH })
})

export { server }
