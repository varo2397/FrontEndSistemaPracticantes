import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  studentForm: FormGroup;

  constructor() { }

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
  }

  fileChange(event) {
    this.fileSelected = true;
    const selectedFile = event.target.files[0];
    this.fileName = selectedFile.name;
    const fileFormat = this.fileName.split('.')[1].toLocaleLowerCase();
    if ( this.validFileFormats.indexOf(fileFormat) === -1 ) {
      this.fileFormatValid = false;

    }
    else {
      this.studentForm.get('picture').setValue(selectedFile);
      this.fileFormatValid = true;
    }
  }

}
