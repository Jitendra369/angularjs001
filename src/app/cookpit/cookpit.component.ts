import {Component, EventEmitter, OnInit} from '@angular/core';
import {Hero} from "../hero";


@Component({
  selector: 'app-cookpit',
  templateUrl: './cookpit.component.html',
  styleUrls: ['./cookpit.component.css']
})
export class CookpitComponent implements OnInit {




  serverCreated = new EventEmitter<{serverName : string, serverContent : string}>();
  bluePrintCreated = new EventEmitter<{serverName : string, serverContent : string}>();
  newServerName = '';
  newServerContent = '';

  constructor() { }



  ngOnInit(): void {
  }


  onAddServer() {
    this.serverCreated.emit({serverName: this.newServerName,serverContent: this.newServerContent});
  }

  onAddBlueprint() {
    this.bluePrintCreated.emit({serverName: this.newServerName,serverContent: this.newServerContent});
  }


}
