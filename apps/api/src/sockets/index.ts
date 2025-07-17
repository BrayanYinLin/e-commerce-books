import { Server as SocketIOServer } from 'socket.io'
import { Server as HTTPServer } from 'node:http'
import { EVENTS } from '../lib/constants'

export const setupSocket = (server: HTTPServer) => {
  const io = new SocketIOServer(server, {
    cors: {
      // origin: ['http://localhost:5173', 'http://localhost:4200'],
      origin: '*',
      methods: ['GET', 'POST']
    }
  })

  io.on('connection', (socket) => {
    socket.on(EVENTS.REGISTER, (data) => {
      const { role, id, origin } = JSON.parse(data)

      console.log({ role, id, origin })
      if (role === 'user') {
        console.log(`Usuario registrado con ID: ${id}`)
        socket.join(`user:${id}`)
      } else if (role === 'admin') {
        console.log(`Admin registrado con ID: ${id}`)
        socket.join('admins')
      }
    })

    // Cliente envía mensaje al admin
    socket.on(EVENTS.USER_MESSAGE, (data) => {
      const { id, message } = JSON.parse(data)
      io.to('admins').emit(EVENTS.ADMIN_RECEIVE, { id, message })
    })

    // Admin responde a un cliente específico
    socket.on(EVENTS.ADMIN_REPLY, (data) => {
      const { id, message } = JSON.parse(data)
      io.to(`user:${id}`).emit(EVENTS.USER_RECEIVE, { message })
    })

    socket.on('disconnect', () => {
      console.log(`Cliente desconectado: ${socket.id}`)
    })
  })
}
