import { Component } from '@angular/core';

@Component({
  selector: 'chat-app',
  templateUrl: "./chat.component.html"
})
export class ChatComponent {
  public lstMessages: string[] = ["Hola", "Como estas?", "que tal la practica?"];
}
