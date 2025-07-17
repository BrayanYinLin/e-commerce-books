import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatStateService } from '../../../../service/chat-state-service/chat-state-service';
import { ServiceChat } from '../../../../service/chat-service/service-chat';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'

@Component({
  selector: 'app-chat-messages',
  imports: [CommonModule],
  templateUrl: './chat-messages.html',
  styles: ``,
})
export class ChatMessages {
  constructor(public chatState: ChatStateService, public serviceChat: ServiceChat) {
    this.serviceChat.message$
      .pipe(takeUntilDestroyed())
      .subscribe(msg => {
        this.chatState.addMessage({
          from: msg.from,
          text: msg.message
        });
      });
  }
}
