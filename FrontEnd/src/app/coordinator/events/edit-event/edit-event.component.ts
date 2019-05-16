import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { EventTypesService } from '../../../core/http/eventTypes/event-types.service';
import {EventsService} from '../../../core/http/events/events.service';
import { EventType } from '../../../interfaces/eventType';
import { Event } from '../../../interfaces/event';


@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent implements OnInit {

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
    this.fileFormatValid = true;
    this.createForm();

    this.getEventTypes();

  }

  createForm() {
    this.eventForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'eventDate': new FormControl(null, [Validators.required]),
      'eventInscriptionLimit': new FormControl(null, [Validators.required, this.checkEventLimitInscription.bind(this)]),
      'eventType': new FormControl(null, [Validators.required]),
      'eventStartTime': new FormControl(null, [Validators.required]),
      'eventEndTime': new FormControl(null, [
        Validators.required,
        this.checkEventEndTimeValidator.bind(this)
      ])
    });
  }

  fileChange(event) {
    this.selectedFile = event.target.files[0];
    this.fileName = this.selectedFile.name;
    const fileFormat = this.fileName.split('.')[1].toLocaleLowerCase();
    this.fileFormatValid = this.validFileFormats.indexOf(fileFormat) !== -1;
  }

  getEventTypes() {
    this.eventsTypeService.getEventTypes().subscribe(data => {
      this.eventTypes = <EventType[]>data.data;
    });
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

  onSubmit() {
    if (this.eventForm.valid && this.eventForm.touched) {

      const date = this.eventForm.get('eventDate').value;
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      const parsedDate = year + '-' + month + '-' + day;
      const event: Event = <Event>{
        name: this.eventForm.get('name').value,
        eventDate: parsedDate,
        start: this.eventForm.get('eventStartTime').value,
        finish: this.eventForm.get('eventEndTime').value,
        image: null,
        type_id: this.eventForm.get('eventType').value
      };
      this.eventsService.createEvent(event).subscribe(response => {
        if (response.data === 'success') {
          this.router.navigate(['coordinador/eventos']);
        }
      });
    }
  }



}
