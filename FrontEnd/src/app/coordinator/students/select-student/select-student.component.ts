import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../../../core/http/students/students.service';
import { TeacherService } from '../../../core/http/teacher/teacher.service';
import { Teacher } from '../../../interfaces/teacher';

@Component({
  selector: 'app-select-student',
  templateUrl: './select-student.component.html',
  styleUrls: ['./select-student.component.scss']
})
export class SelectStudentComponent implements OnInit {

  studentID: string;

  student: any;
  teachers: [];

  constructor(private route: ActivatedRoute,
              private studentsService: StudentsService,
              private teachersService: TeacherService) { }

  ngOnInit() {
    this.studentID = this.route.snapshot.paramMap.get('id');
    this.getTeachers();
    this.getStudent();
  }

  getStudent() {
    this.studentsService.getStudent(this.studentID).subscribe(response => {
      this.student = response.data;
    });
  }

  getTeachers() {
    this.teachersService.getTeachers().subscribe(response => {
      this.teachers = response.data.map(value => {
        return value.name + ' ' + value.lastName;
      });
    });
  }

}
