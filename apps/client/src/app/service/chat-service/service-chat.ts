import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { io, Socket } from 'socket.io-client'

type OriginMessage = 'admin' | 'user'

interface Message {
  from: OriginMessage
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class ServiceChat {
  public connectionState: boolean = false
  private socket: Socket | null = null
  private identifier: string
  private messageSubject: Subject<Message> = new Subject<Message>();
  message$ = this.messageSubject.asObservable()


  constructor() {
    this.identifier = crypto.randomUUID().replace('-', '').slice(0, 10)

    const userData = { role: 'user', id: this.identifier, origin: 'angular' }

    const prevSocket = this.socket

    if (prevSocket) {
      prevSocket.off('admin:receive')
      prevSocket.disconnect()
    }

    this.socket = io('http://localhost:3000')

    this.socket.on('connect', () => {
      this.connectionState = true
      this.socket?.emit('register', JSON.stringify(userData))
    })

    this.socket.on('disconnect', () => {
      this.connectionState = false
    })

    this.socket.on('connect_error', (err) => {
      this.connectionState = false
    })

    
    this.socket.on('user:receive', ({ message }) => {
      this.messageSubject.next({ from: 'admin', message })
    })
  }

  sendMessage(message: string) {
    this.socket!.emit('user:message', JSON.stringify({
      id: this.identifier,
      message
    }))
  }
}
