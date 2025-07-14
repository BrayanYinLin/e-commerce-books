import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatStateService } from '../../../../service/chat-state-service/chat-state-service';

@Component({
  selector: 'app-chat-messages',
  imports: [CommonModule],
  templateUrl: './chat-messages.html',
  styles: ``,
})
export class ChatMessages {
  constructor(public chatState: ChatStateService) {}
}
