import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { StudentsService } from '../../../core/http/students/students.service';

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
    'phoneNumber',
    'actions'
  ];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.studentsService.getPendingStudents().subscribe(response => {
      this.dataSource = new MatTableDataSource(response.data);
      this.dataSource.sort = this.sort;
    });
  }

}
