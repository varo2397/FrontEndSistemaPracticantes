import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Coordinator } from '../../interfaces/coordinator';


@Component({
  selector: 'app-coordinators',
  templateUrl: './coordinators.component.html',
  styleUrls: ['./coordinators.component.scss']
})

export class CoordinatorsComponent implements OnInit {

  displayedColumns: string[] = [
    'name',
    'lastName',
    'secondLastName',
    'gender',
    'email',
    'actions'
  ];
  events: Event[];
  dataSource: MatTableDataSource<Coordinator>; // new MatTableDataSource(this.events);
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.getCoordinators();
  }

  getCoordinators() {
    this.dataSource = new MatTableDataSource([]);
    this.dataSource.sort = this.sort;
  }

}