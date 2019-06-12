import { Component, OnInit, ViewChild } from '@angular/core';
import { Person } from './approve-students/approve-students.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { StudentsService } from '../../core/http/students/students.service';


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
  dataSource = new MatTableDataSource([]);
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.getAprovedStudents();
  }

  getAprovedStudents() {
    this.studentsService.getApprovedStudents().subscribe(response => {
      console.log(response);
    });
  }

}
