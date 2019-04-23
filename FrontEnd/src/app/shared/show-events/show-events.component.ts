import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Event } from '../../interfaces/event';
import {EventsService} from '../../core/http/events/events.service';

@Component({
  selector: 'app-show-events',
  templateUrl: './show-events.component.html',
  styleUrls: ['./show-events.component.scss']
})
export class ShowEventsComponent implements OnInit {

  displayedColumns: string[] = [
    'name',
    'eventDate',
    'start',
    'finish',
    'eventType',
    'actions'
  ];
  events: Event[];
  dataSource: MatTableDataSource<Event>; // new MatTableDataSource(this.events);
  @ViewChild(MatSort) sort: MatSort;

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.eventsService.getEvents().subscribe(response => {
      this.events = <Event[]>response.data;
      this.dataSource = new MatTableDataSource(this.events);
      this.dataSource.sort = this.sort;
    });
  }

}
