import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../../../core/http/students/students.service';

@Component({
  selector: 'app-select-student',
  templateUrl: './select-student.component.html',
  styleUrls: ['./select-student.component.scss']
})
export class SelectStudentComponent implements OnInit {

  studentID: string;

  student: any;

  constructor(private route: ActivatedRoute,
              private studentsService: StudentsService) { }

  ngOnInit() {
    this.studentID = this.route.snapshot.paramMap.get('id');
    this.getStudent();
  }

  getStudent() {
    this.studentsService.getStudent(this.studentID).subscribe(response => {
      this.student = response.data;
    });
  }

}
