import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatStateService {
  messages = signal<{ text: string, from: string }[]>([]);

  addMessage(message: { text: string, from: string }) {
    this.messages.update(msgs => [...msgs, message]);
  }
}
