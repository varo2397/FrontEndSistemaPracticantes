import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SemestersService } from '../../core/http/semesters/semesters.service';
import { Semester } from '../../interfaces/semester';

@Component({
  selector: 'app-semesters',
  templateUrl: './semesters.component.html',
  styleUrls: ['./semesters.component.scss']
})
export class SemestersComponent implements OnInit {

  semesters: Semester[];

  constructor(private semesterService: SemestersService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getSemesters();
  }

  getSemesters() {
    this.semesterService.getSemesters().subscribe(response => {
      this.semesters = response.data;
    });
  }

  deleteSemester(semesterID: number) {
    this.semesterService.deleteSemester(semesterID.toString()).subscribe(response => {
      if (response.data === 'Success') {
        this.getSemesters();
      } else {
        this.openSnackBar();
      }
    });
  }

  openSnackBar() {
    this.snackBar.open('No se pudo borrar el semestre', 'Cerrar', {
      duration: 5000
    });
  }

}
