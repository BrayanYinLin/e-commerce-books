import { Server as SocketIOServer } from 'socket.io'
import { Server as HTTPServer } from 'node:http'

export const setupSocket = (server: HTTPServer) => {
  const io = new SocketIOServer(server, {
    cors: {
      origin: ['http://localhost:5173', 'http://localhost:4200'],
      methods: ['GET', 'POST']
    }
  })

  io.on('connection', (socket) => {
    console.log('A user connected:', socket.id)

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id)
    })
  })
}
