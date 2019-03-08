import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  talkEvent: boolean;

  constructor() { }

  ngOnInit() {
    this.talkEvent = false;
  }

  showTalkEvent() {
    this.talkEvent = !this.talkEvent;
  }

}
