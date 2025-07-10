import express, { Request, Response } from 'express'
import { createServer } from 'node:http'
import { Server } from 'socket.io'
import { STATIC_PATH } from './lib/constants'
import cors from 'cors'

const app = express()
const server = createServer(app)
const io = new Server(server)

app.use(express.json())
app.use(cors())
app.use(express.static(STATIC_PATH))

app.get('/{*splat}', (_: Request, res: Response) => {
  res.sendFile('index.html', { root: STATIC_PATH })
})

export { server, io }
