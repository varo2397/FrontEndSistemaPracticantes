import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Teacher } from '../../interfaces/teacher';
import { TeacherService } from '../../core/http/teacher/teacher.service';

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
    'telephone',
    'email',
    'actions'
  ];
  events: Event[];
  dataSource: MatTableDataSource<Teacher>; // new MatTableDataSource(this.events);
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  constructor(private teachersService: TeacherService) { }

  ngOnInit() {
    this.getTeachers();
  }

  getTeachers() {
    this.teachersService.getTeachers().subscribe(response => {
      this.dataSource = new MatTableDataSource(response.data);
      this.dataSource.sort = this.sort;
    });
  }

}
