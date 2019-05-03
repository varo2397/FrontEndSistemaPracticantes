import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-actitivy-schedule',
  templateUrl: './actitivy-schedule.component.html',
  styleUrls: ['./actitivy-schedule.component.scss']
})
export class ActitivyScheduleComponent implements OnInit {

  companies: any[] = [
    { name: 'Nombre1', contact: 'Alguien1'},
    { name: 'Nombre2', contact: 'Alguien2'},
    { name: 'Nombre3', contact: 'Alguien3'}
  ];

  companiesSchedule: any[] = [{ name: 'Nombre3', contact: 'Alguien3'}];

  constructor() { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer !== event.container) {
      transferArrayItem(event.previousContainer.data, event.container.data,
        event.previousIndex, event.currentIndex);
    } else {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
  }

}
