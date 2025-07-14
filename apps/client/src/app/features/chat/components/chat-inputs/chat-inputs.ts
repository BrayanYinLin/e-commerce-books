import { Component } from '@angular/core';
import { ChatStateService } from '../../../../service/chat-state-service/chat-state-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-inputs',
  imports: [FormsModule],
  templateUrl: './chat-inputs.html',
  styles: ``
})
export class ChatInputs {
  message: string = '';

  constructor(private chatStateService: ChatStateService) {}

  send() {
    if (this.message.trim()) {
      this.chatStateService.addMessage({ text: this.message, from: 'user' });
      this.message = '';
    }
  }
}
