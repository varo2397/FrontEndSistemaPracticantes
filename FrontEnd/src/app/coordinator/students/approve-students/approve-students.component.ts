import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface Person {
  name: string;
  firstLastName: string;
  secondLastName: string;
  email: string;
  phoneNumber: number;
}

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
  selector: 'app-approve-students',
  templateUrl: './approve-students.component.html',
  styleUrls: ['./approve-students.component.scss']
})
export class ApproveStudentsComponent implements OnInit {

  displayedColumns: string[] = [
    'name',
    'firstLastName',
    'secondLastName',
    'email',
    'phoneNumber',
    'actions'
  ];
  dataSource = new MatTableDataSource(STUDENTS);
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}
