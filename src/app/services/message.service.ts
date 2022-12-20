import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  message : string[] =[];

  //adding message to message-Array
  add(message: string){
    this.message.push(message);
  }

  clearMessage(){
    this.message=[];
  }
  constructor() { }
}
