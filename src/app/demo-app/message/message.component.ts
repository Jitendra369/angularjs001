import { Component, OnInit } from '@angular/core';
import {MessageService} from "../../services/message.service";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  // The MessagesComponent should display all messages, including the message
  // sent by the HeroService when it fetches heroes.
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
