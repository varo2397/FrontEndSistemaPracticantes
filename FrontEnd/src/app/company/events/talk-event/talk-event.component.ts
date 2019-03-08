import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-talk-event',
  templateUrl: './talk-event.component.html',
  styleUrls: ['./talk-event.component.scss']
})
export class TalkEventComponent implements OnInit {

  talkEventForm: FormGroup;


  constructor() { }

  ngOnInit() {
    this.talkEventForm = new FormGroup({
      'talkName': new FormControl(null, Validators.required),
      'speaker': new FormControl(null, Validators.required),
      'time': new FormControl(null, Validators.required),
      'observations': new FormControl(null, Validators.required)
    });
  }

}
