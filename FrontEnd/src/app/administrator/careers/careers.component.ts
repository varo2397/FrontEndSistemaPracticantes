import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CareersService } from '../../core/http/careers/careers.service';
import { Career } from '../../interfaces/career';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {

  careers: Career[];

  constructor(private careersService: CareersService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getCareers();
  }

  getCareers() {
    this.careersService.getCareers().subscribe(response => {
      this.careers = response.data;
    });
  }

  deleteCareer(careerID: number) {
    this.careersService.deleteCareer(careerID.toString()).subscribe(response => {
      if (response.data === 'Success') {
        this.getCareers();
      } else {
        this.openSnackBar();
      }
    });
  }

  openSnackBar() {
    this.snackBar.open('No se pudo borrar la carrera', 'Cerrar', {
      duration: 5000
    });
  }

}
