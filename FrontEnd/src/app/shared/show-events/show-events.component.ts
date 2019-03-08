import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

const EVENTS = [
  {
    eventTitle: 'Vinculación con la empresa en San José',
    eventDate: '04-02-19',
    eventStartTime: '08:30',
    eventEndTime: '16:30',
    eventType: 'Vinculación con la empresa',
    id: 1
  },
  {
    eventTitle: 'Charla informativa',
    eventDate: '20-03-19',
    eventStartTime: '09:30',
    eventEndTime: '17:30',
    eventType: 'Charla',
    id: 2
  },

];
@Component({
  selector: 'app-show-events',
  templateUrl: './show-events.component.html',
  styleUrls: ['./show-events.component.scss']
})
export class ShowEventsComponent implements OnInit {

  displayedColumns: string[] = [
    'eventTitle',
    'eventDate',
    'eventStartTime',
    'eventEndTime',
    'eventType',
    'actions'
  ];
  dataSource = new MatTableDataSource(EVENTS);
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}
