import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CareersService } from '../../../core/http/careers/careers.service';
import { Career } from '../../../interfaces/career';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-career',
  templateUrl: './create-career.component.html',
  styleUrls: ['./create-career.component.scss']
})
export class CreateCareerComponent implements OnInit {

  careerForm: FormGroup;

  constructor(private careerService: CareersService,
              private router: Router) { }

  ngOnInit() {
    this.careerForm = new FormGroup({
      'career': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    if (this.careerForm.valid && this.careerForm.touched) {
      console.log('hola');
      const career: Career = <Career> {
        career: this.careerForm.controls['career'].value
      };
      this.careerService.createCareer(career).subscribe(response => {
        this.router.navigate(['/administrador/carreras']);
      });
    }
  }

}
