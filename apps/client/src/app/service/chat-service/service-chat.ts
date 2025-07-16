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
  private socket: Socket
  private identifier: string
  private messageSubject: Subject<Message> = new Subject<Message>();
  message$ = this.messageSubject.asObservable()


  constructor() {
    this.identifier = crypto.randomUUID().replace('-', '').slice(0, 10)
    this.socket = io('http://localhost:3000')
    this.socket.emit('register', JSON.stringify({ role: 'user', id: this.identifier }))
    this.socket.on('user:receive', ({ message }) => {
      this.messageSubject.next({ from: 'admin', message })
    })
  }

  sendMessage(message: string) {
    this.socket.emit('user:message', JSON.stringify({
      id: this.identifier,
      message
    }))
  }
}
