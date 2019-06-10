import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Administrator } from '../../interfaces/administrator';


@Component({
  selector: 'app-administrators',
  templateUrl: './administrators.component.html',
  styleUrls: ['./administrators.component.scss']
})
export class AdministratorsComponent implements OnInit {

  displayedColumns: string[] = [
    'name',
    'lastName',
    'secondLastName',
    'gender',
    'email',
    'actions'
  ];
  events: Event[];
  dataSource: MatTableDataSource<Administrator>; // new MatTableDataSource(this.events);
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.getAdministrators();
  }

  getAdministrators() {
    this.dataSource = new MatTableDataSource([]);
    this.dataSource.sort = this.sort;
  }

}
