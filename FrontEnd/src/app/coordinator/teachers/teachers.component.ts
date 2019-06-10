import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Teacher } from '../../interfaces/teacher';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {

  displayedColumns: string[] = [
    'name',
    'lastName',
    'secondLastName',
    'gender',
    'actions'
  ];
  events: Event[];
  dataSource: MatTableDataSource<Teacher>; // new MatTableDataSource(this.events);
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  constructor() { }

  ngOnInit() {
    this.getTeachers();
  }

  getTeachers() {
    this.dataSource = new MatTableDataSource([]);
    this.dataSource.sort = this.sort;
  }

}
