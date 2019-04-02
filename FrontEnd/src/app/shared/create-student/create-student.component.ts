import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {SitesService} from '../../core/http/sites/sites.service';
import {Sites} from '../../interfaces/sites';
import {Career} from '../../interfaces/career';
import {Student} from '../../interfaces/student';
import {Semester} from '../../interfaces/semester';
import {SemestersService} from '../../core/http/semesters/semesters.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent implements OnInit {

  fileName: string;
  fileSelected: boolean;
  fileFormatValid: boolean;
  validFileFormats = ['jpg', 'jpeg', 'png' , 'svg'];
  file: File;
  studentForm: FormGroup;
  sites: Sites[];
  careers: Career[];
  semesters: Semester[];

  constructor(private sitesService: SitesService, private semestersService: SemestersService) { }

  ngOnInit() {
    this.fileFormatValid = true;
    this.fileSelected = false;

    this.studentForm = new FormGroup({
      'picture': new FormControl(null),
      'studentID': new FormControl(null, [
        Validators.min(1000000000),
        Validators.max(9999999999),
        Validators.required
      ]),
      'semester': new FormControl(null, [Validators.required]),
      'career': new FormControl(null, [Validators.required]),
      'place': new FormControl(null, [Validators.required])
    });
    this.getSemesters();
    this.getSites();
  }

  fileChange(event) {
    this.fileSelected = true;

    this.file = event.target.files[0];
    this.fileName = this.file.name;
    const fileFormat = this.fileName.split('.')[1].toLocaleLowerCase();
    if ( this.validFileFormats.indexOf(fileFormat) === -1 ) {
      this.fileFormatValid = false;

    } else {
      this.fileFormatValid = true;
    }
  }

  getSites() {
    this.sitesService.getSites().subscribe(response => {
      this.sites = <Sites[]>response.data;
    });
  }

  getCareers(siteID) {
    this.sites.forEach((site) => {
      if (site.id === siteID) {
        this.careers = site.careers;
      }
    });
  }

  getSemesters() {
    this.semestersService.getSemesters().subscribe(response => {
      this.semesters = <Semester[]>response;
    });
  }

  getFormValues(): Student {
    const student: Student = <Student> {
      career_id: this.studentForm.get('career').value,
      semester_id: this.studentForm.get('semester').value,
      site_id: this.studentForm.get('place').value,
      id: this.studentForm.get('studentID').value
    };
    return student;
  }

}
