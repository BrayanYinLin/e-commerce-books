import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatStateService {
  messages = signal<{ text: string, from: string, time: string }[]>([]);

  getDate() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const time = `${hours}:${minutes}:${seconds}`;

    return time
  }
  
  addMessage(message: { text: string, from: string }) {
    this.messages.update(msgs => [...msgs, {
      from: message.from,
      text: message.text,
      time: this.getDate()
    }]);
  }
}
