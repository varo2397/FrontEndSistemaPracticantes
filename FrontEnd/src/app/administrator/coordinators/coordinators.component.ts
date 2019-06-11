import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material';
import { Coordinator } from '../../interfaces/coordinator';
import { CoordinatorsService } from '../../core/http/coordinators/coordinators.service';


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
  dataSource: MatTableDataSource<Coordinator>; // new MatTableDataSource(this.events);
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private coordinatorsService: CoordinatorsService,
              private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.getCoordinators();
  }

  getCoordinators() {
    this.coordinatorsService.getCoordinators().subscribe(response => {
      this.dataSource = new MatTableDataSource(response.data);
      this.dataSource.sort = this.sort;
    });
  }

  deleteCoordinator(coordinatorID: number) {
    this.coordinatorsService.deleteCoordinator(coordinatorID).subscribe(response => {
      if (response.data === 'Success') {
        this.getCoordinators();
      } else {
        this.openSnackBar();
      }
    });
  }

  openSnackBar() {
    this.snackBar.open('No se pudo borrar el coordinador', 'Cerrar', {
      duration: 5000
    });
  }

}
