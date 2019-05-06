import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Sugestion} from '../../../interfaces/sugestion';
import {SugestionsService} from '../../../core/http/sugestions/sugestions.service';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-talk-event',
  templateUrl: './talk-event.component.html',
  styleUrls: ['./talk-event.component.scss']
})
export class TalkEventComponent implements OnInit {

  talkEventForm: FormGroup;
  showForm: boolean;

  constructor(private sugestionService: SugestionsService, private dialogRef: MatDialogRef<TalkEventComponent>) { }

  ngOnInit() {
    this.showForm = false;
    this.talkEventForm = new FormGroup({
      'talkName': new FormControl(null, Validators.required),
      'speaker': new FormControl(null, Validators.required),
      'observations': new FormControl(null, Validators.required)
    });
  }

  close() {
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.talkEventForm.valid) {
      const sugestion: Sugestion = <Sugestion> {
        name: this.talkEventForm.get('talkName').value,
        charlista: this.talkEventForm.get('speaker').value,
        remarks: this.talkEventForm.get('observations').value
      };

      this.sugestionService.createSugestion(sugestion).subscribe(response => {
        if (response.data === 'success') {

        }
      });
    }
    this.dialogRef.close();
  }

}
