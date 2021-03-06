import {Component, Input, OnInit} from '@angular/core';
import {EventsService} from '../../core/http/events/events.service';
import {Event} from '../../interfaces/event';

@Component({
  selector: 'app-show-event',
  templateUrl: './show-event.component.html',
  styleUrls: ['./show-event.component.scss']
})
export class ShowEventComponent implements OnInit {
  @Input() public eventID: number;
  event: Event;
  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.getEvent();
  }

  getEvent() {
    this.eventsService.getEvent(this.eventID.toString()).subscribe(response => {
      this.event = <Event>response.data.event;
      console.log(this.event);
    });
  }

}
