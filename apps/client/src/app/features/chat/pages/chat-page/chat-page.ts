import { Component } from '@angular/core';
import { ChatMessages } from "../../components/chat-messages/chat-messages";
import { ChatInputs } from "../../components/chat-inputs/chat-inputs";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-chat-page',
  imports: [ChatMessages, ChatInputs, RouterLink],
  templateUrl: './chat-page.html',
  styles: ``
})
export class ChatPage {

}
