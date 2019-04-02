import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  talkEvent: boolean;
  eventID: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.talkEvent = false;
    this.route.params.subscribe(params => {
      this.eventID = params['id'];
    });
  }

  showTalkEvent() {
    this.talkEvent = !this.talkEvent;
  }

}
