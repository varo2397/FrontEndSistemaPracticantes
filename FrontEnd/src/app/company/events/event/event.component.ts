import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TalkEventComponent } from '../talk-event/talk-event.component';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  eventID: number;

  constructor(private route: ActivatedRoute, private dialog: MatDialog) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.eventID = params['id'];
    });
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.width = '700px';
    dialogConfig.height = '350px';

    this.dialog.open(TalkEventComponent, dialogConfig);
  }



}
