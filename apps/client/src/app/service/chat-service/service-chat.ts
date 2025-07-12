import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client'

@Injectable({
  providedIn: 'root'
})
export class ServiceChat {
  private socket: Socket

  constructor() {
    this.socket = io('http://localhost:3000')
    this.socket.emit('register', JSON.stringify({ role: 'user', id: crypto.randomUUID() }))
  }
}
