import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { EventTypesService } from '../../../core/http/eventTypes/event-types.service';
import {EventsService} from '../../../core/http/events/events.service';
import { EventType } from '../../../interfaces/eventType';
import { Event } from '../../../interfaces/event';
import { Activity } from '../../../interfaces/activity';
// @ts-ignore
import moment from 'moment';

enum ControlType {
  Start = 'activitiesStart',
  End = 'activitiesEnd'
}



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

  constructor(private eventsTypeService: EventTypesService,
              private eventsService: EventsService,
              private router: Router) { }

  ngOnInit() {
    const [ activityStartTime, activityEndTime ] = this.formControlBuilder();
    this.fileFormatValid = true;
    this.eventForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'eventDate': new FormControl(null, [Validators.required]),
      'eventInscriptionLimit': new FormControl(null, [Validators.required, this.checkEventLimitInscription.bind(this)]),
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
      new FormControl(null, [
        Validators.required,
        this.checkActvitiesStartTime.bind(this),
        this.checkPreviousActivityTime.bind(this, 'activitiesStart')
      ]),
      new FormControl(null, [
        Validators.required,
        this.checkActvitiesEndTime.bind(this),
        this.checkPreviousActivityTime.bind(this, 'activitiesEnd')
      ])
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

    // checks if the event end time is after the event start time

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
    if ( this.validFileFormats.indexOf(fileFormat) === -1 ) {
      this.fileFormatValid = false;

    } else {
      this.fileFormatValid = true;
    }
  }

  getEventTypes() {
    this.eventsTypeService.getEventTypes().subscribe(data => {
      this.eventTypes = <EventType[]>data.data;
    });
  }

  checkEventLimitInscription(control: FormControl) {

    // checks if the event limit description is before the date of the event

    if (this.eventForm !== undefined) {
      const eventDate = this.eventForm.get('eventDate').value;
      const eventInscriptionLimit = control.value;

      if (eventDate <= eventInscriptionLimit) {
        return { 'inscriptionLimit': true };
      }
    }
    return null;
  }

  checkActvitiesStartTime(control: FormControl) {

    // checks if the first activity is at a minimum the event start time
    // and its before the event end time

    if (this.eventForm !== undefined) {
      const activityStartArray = <FormArray>this.eventForm.get('activitiesStart');
      const controlIndex = this.getIndex(control, activityStartArray);

      if (controlIndex === 0) {
        const eventStartTime = this.eventForm.get('eventStartTime').value;
        const eventEndTime = this.eventForm.get('eventEndTime').value;
        const firstActivityStartTime = control.value;

        if (eventStartTime > firstActivityStartTime) {
          return { 'activityStartTimeBeforeEvent' : true };
        } else if (firstActivityStartTime > eventEndTime) {
          return { 'activityStartTimeAfterEvent' : true };
        }
      }

    }
    return null;
  }

  checkActvitiesEndTime(control: FormControl) {

    // checks if the first activity is at a minimum the event start time
    // and its before the event end time

    if (this.eventForm !== undefined) {
      const activityEndArray = <FormArray>this.eventForm.get('activitiesEnd');
      const controlIndex = this.getIndex(control, activityEndArray);

      if (controlIndex === activityEndArray.length - 1) {
        const eventEndTime = this.eventForm.get('eventEndTime').value;
        const lastActivityEndTime = control.value;

        if (eventEndTime < lastActivityEndTime) {
          return { 'activityEndTimeAfterEvent' : true };
        }
      }

    }
    return null;
  }

  checkPreviousActivityTime(controlType: string, control: FormControl) {

    if (this.eventForm !== undefined) {
      const controlArray = <FormArray>this.eventForm.get(controlType);

      const controlIndex = this.getIndex(control, controlArray);
      if (controlIndex > 0 && controlType === ControlType.Start) {
        const previousActivity = (<FormArray>this.eventForm.get(ControlType.End)).at(controlIndex - 1).value;
        if (previousActivity > control.value) {
          return {'previousActivity': true };
        }
      } else if (controlType === ControlType.End && controlIndex !== -1) {
        console.log(controlIndex);
        const previousActivity = (<FormArray>this.eventForm.get(ControlType.Start)).at(controlIndex).value;
        console.log(previousActivity)
        if (previousActivity > control.value) {
          return {'previousActivity': true };
        }
      }
    }

    return null;
  }

  getIndex(control: FormControl, controlArray: FormArray): number {
    for ( let i = 0; i < controlArray.length; i++) {
      if (controlArray.at(i) === control) {
        return i;
      }
    }

    return -1;
  }

  onSubmit() {
    if (this.eventForm.valid && this.eventForm.touched) {

      const date = this.eventForm.get('eventDate').value;
      const parsedDate = moment(date).format('YYYY/MM/DD');
      // const day = date.getDate();
      // const month = date.getMonth() + 1;
      // const year = date.getFullYear();
      // const parsedDate = year + '-' + month + '-' + day;

      const arrayStart = <FormArray>this.eventForm.get('activitiesStart');
      const arrayEnd = <FormArray>this.eventForm.get('activitiesEnd');
      const arrayLength = arrayStart.length;
      const activities: Activity[] = [];
      for (let i = 0; i < arrayLength; i++) {
        const activityStart = arrayStart.at(i).value;
        const activityEnd = arrayEnd.at(i).value;
        activities.push(activityStart, activityEnd);
      }
      const event: Event = <Event>{
        name: this.eventForm.get('name').value,
        eventDate: parsedDate,
        start: this.eventForm.get('eventStartTime').value,
        finish: this.eventForm.get('eventEndTime').value,
        image: null,
        type_id: this.eventForm.get('eventType').value,
        activities: activities,
      };
      this.eventsService.createEvent(event).subscribe(response => {
        if (response.data === 'success') {
          this.router.navigate(['coordinador/eventos']);
        }
      });
    }
  }

}
