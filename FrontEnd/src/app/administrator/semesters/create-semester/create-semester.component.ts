import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SemestersService } from '../../../core/http/semesters/semesters.service';
import { Router } from '@angular/router';
import { Semester } from '../../../interfaces/semester';
// @ts-ignore
import moment from 'moment';

@Component({
  selector: 'app-create-semester',
  templateUrl: './create-semester.component.html',
  styleUrls: ['./create-semester.component.scss']
})
export class CreateSemesterComponent implements OnInit {

  semesterForm: FormGroup;

  constructor(private semesterService: SemestersService,
              private router: Router) {}

  ngOnInit() {
    this.semesterForm = new FormGroup({
      'semester': new FormControl(null, [Validators.required]),
      'start': new FormControl(null, [Validators.required]),
      'end': new FormControl(null, [Validators.required, this.endSemesterValidator.bind(this)])
    });
  }

  onSubmit() {
    if (this.semesterForm.valid && this.semesterForm.touched) {
      const semester: Semester = <Semester> {
        semester: this.semesterForm.controls['semester'].value,
        start: moment(this.semesterForm.controls['start'].value).format('YYYY-MM-DD'),
        end: moment(this.semesterForm.controls['end'].value).format('YYYY-MM-DD')
      };
      this.semesterService.createSemester(semester).subscribe(response => {
        this.router.navigate(['/administrador/semestres']);
      });
    }
  }

  endSemesterValidator(control: FormControl) {
    if (this.semesterForm !== undefined) {
      const startSemester = this.semesterForm.get('start').value;
      const endSemester = control.value;

      if (startSemester > endSemester) {
        return { 'endSemesterWrong': true };
      }
      return null;
    }
    return null;
  }
}
