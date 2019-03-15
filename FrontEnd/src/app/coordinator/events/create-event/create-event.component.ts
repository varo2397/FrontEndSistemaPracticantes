import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { EventTypeService } from '../../../core/http/eventType/event-type.service';
import { EventType } from '../../../interfaces/eventType';
import { Event } from '../../../interfaces/event';
import { Activity } from '../../../interfaces/activity';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  eventForm: FormGroup;

  eventTypes: EventType[];

  validFileFormats = ['jpg', 'jpeg', 'png' , 'svg'];
  fileName: string;
  fileFormatValid: boolean;
  selectedFile: File;

  constructor(private _eventType: EventTypeService) { }

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

    this.getEventTypes();
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
    this.selectedFile = event.target.files[0];
    this.fileName = this.selectedFile.name;
    const fileFormat = this.fileName.split('.')[1].toLocaleLowerCase();
    console.log(fileFormat);
    if ( this.validFileFormats.indexOf(fileFormat) === -1 ) {
      this.fileFormatValid = false;

    } else {
      this.fileFormatValid = true;
    }
  }

  getEventTypes() {
    this._eventType.getEventTypes().subscribe(data => {
      this.eventTypes = <EventType[]>data.data;
    });
  }

  onSubmit() {
    if (this.eventForm.valid && this.eventForm.touched) {

      const arrayStart = <FormArray>this.eventForm.get('activitiesStart');
      const arrayEnd = <FormArray>this.eventForm.get('activitiesEnd');
      const arrayLength = arrayStart.length;
      const activities: Activity[] = [];
      for (let i = 0; i < arrayLength; i++) {
        const activityStart = arrayStart.at(i).value;
        const activityEnd = arrayEnd.at(i).value;
        const activity: Activity = <Activity> {
          start: activityStart,
          finish: activityEnd,
          id: 0
        };
        activities.push(activity);
      }
      const event: Event = <Event>{
        name: this.eventForm.get('eventTitle').value,
        eventDate: this.eventForm.get('eventDate').value,
        start: this.eventForm.get('eventStartTime').value,
        finish: this.eventForm.get('eventEndTime').value,
        image: this.selectedFile,
        type_id: this.eventForm.get('eventType').value,
        activities: activities,
        id: 0
      };
      console.log(event);
    }
  }

}
