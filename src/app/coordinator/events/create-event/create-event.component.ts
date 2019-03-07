import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  eventForm: FormGroup;

  validFileFormats = ['jpg', 'jpeg', 'png' , 'svg'];
  fileName: string;
  fileFormatValid: boolean;

  constructor() { }

  ngOnInit() {
    const [ activityStartTime, activityEndTime ] = this.formControlBuilder();
    this.fileFormatValid = true;
    this.eventForm = new FormGroup({
      'eventTitle': new FormControl(null, [Validators.required]),
      'eventDate': new FormControl(null, [Validators.required]),
      'eventType': new FormControl(null, [Validators.required]),
      'eventStartTime': new FormControl(null, [Validators.required]),
      'eventEndTime': new FormControl(null, [
        Validators.required,
        this.checkEventEndTimeValidator.bind(this)
      ]),
      'activitiesStart': new FormArray([activityStartTime]),
      'activitiesEnd': new FormArray([activityEndTime])
    });
  }

  formControlBuilder(): FormControl[] {
    const arrayControl = [];
    arrayControl.push(
      new FormControl(null, [Validators.required]),
      new FormControl(null, [Validators.required])
    );

    return arrayControl;
  }

  addFormControl() {
    const [ activityStartTime, activityEndTime ] = this.formControlBuilder();
    const controlStart = <FormArray>this.eventForm.get('activitiesStart');
    const controlEnd = <FormArray>this.eventForm.get('activitiesEnd');
    controlStart.push(activityStartTime);
    controlEnd.push(activityEndTime);
  }

  deleteFormControl(index: number) {
    const controlStart = <FormArray>this.eventForm.get('activitiesStart');
    const controlEnd = <FormArray>this.eventForm.get('activitiesEnd');

    if (controlStart.length > 1) {
      controlStart.removeAt(index);
      controlEnd.removeAt(index);
    }

  }

  checkEventEndTimeValidator(control: FormControl) {
    if (this.eventForm !== undefined) {
      const eventStartTime = this.eventForm.get('eventStartTime').value;
      const eventEndTime = control.value;

      if (eventStartTime > eventEndTime) {
        return { 'eventEndWrong': true };
      }
      return null;
    }
  }

  fileChange(event) {
    const selectedFile = event.target.files[0];
    this.fileName = selectedFile.name;
    const fileFormat = this.fileName.split('.')[1].toLocaleLowerCase();
    console.log(fileFormat);
    if ( this.validFileFormats.indexOf(fileFormat) === -1 ) {
      this.fileFormatValid = false;

    } else {
      this.fileFormatValid = true;
    }
  }

}
