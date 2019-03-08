import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-event-info',
  templateUrl: './company-event-info.component.html',
  styleUrls: ['./company-event-info.component.scss']
})
export class CompanyEventInfoComponent implements OnInit {

  @Input() ejemplo: any;

  constructor() { }

  ngOnInit() {
  }

}
