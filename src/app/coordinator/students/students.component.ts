import { Component, OnInit, ViewChild } from '@angular/core';
import { Person } from './approve-students/approve-students.component';
import { MatSort, MatTableDataSource } from '@angular/material';

const STUDENTS: Person[] = [
  {
    name: 'Alvaro',
    firstLastName: 'Castro',
    secondLastName: 'Venegas',
    email: 'alvarocastro74@gmail.com',
    phoneNumber: 86424112
  },
  {
    name: 'Carlos',
    firstLastName: 'Aldi',
    secondLastName: 'Venegas',
    email: '74@gmail.com',
    phoneNumber: 86428478
  }
];

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  displayedColumns: string[] = [
    'name',
    'firstLastName',
    'secondLastName',
    'email',
    'phoneNumber',
    'actions'
  ];
  dataSource = new MatTableDataSource(STUDENTS);
  @ViewChild(MatSort) sort: MatSort;
  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}
