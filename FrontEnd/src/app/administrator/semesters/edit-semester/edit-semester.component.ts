import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SemestersService } from '../../../core/http/semesters/semesters.service';
// @ts-ignore
import moment from 'moment';
import { Semester } from '../../../interfaces/semester';

@Component({
  selector: 'app-edit-semester',
  templateUrl: './edit-semester.component.html',
  styleUrls: ['./edit-semester.component.scss']
})
export class EditSemesterComponent implements OnInit {

  editSemesterForm: FormGroup;
  semesterID: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private semesterService: SemestersService) { }

  ngOnInit() {
    this.semesterID = this.route.snapshot.paramMap.get('id');
    this.createForm();
    this.getSemester();
  }

  createForm() {
    this.editSemesterForm = new FormGroup({
      'semester': new FormControl( null, Validators.required),
      'start': new FormControl(null, Validators.required),
      'end': new FormControl(null, [Validators.required, this.endSemesterValidator.bind(this)])
    });
  }

  getSemester() {
    this.semesterService.getSemester(this.semesterID.toString()).subscribe(response => {
      this.editSemesterForm.controls['start'].setValue(response.data.start);
      this.editSemesterForm.controls['end'].setValue(response.data.end);
    });
  }

  onSubmit() {
    if (this.editSemesterForm.valid && this.editSemesterForm.touched) {
      const semester: Semester = <Semester> {
        id: parseInt(this.semesterID, 10),
        semester: this.editSemesterForm.controls['semester'].value,
        start: moment(this.editSemesterForm.controls['start'].value).format('YYYY-MM-DD'),
        end: moment(this.editSemesterForm.controls['end'].value).format('YYYY-MM-DD')
      };
      this.semesterService.updateSemester(semester).subscribe(response => {
        this.router.navigate(['/administrador/semestres']);
      });
    }
  }

  endSemesterValidator(control: FormControl) {
    if (this.editSemesterForm !== undefined) {
      const startSemester = this.editSemesterForm.get('start').value;
      const endSemester = control.value;

      if (startSemester > endSemester) {
        return { 'endSemesterWrong': true };
      }
    }
    return null;
  }

}
