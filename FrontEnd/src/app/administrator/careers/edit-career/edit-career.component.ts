import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CareersService } from '../../../core/http/careers/careers.service';
import { Career } from '../../../interfaces/career';

@Component({
  selector: 'app-edit-career',
  templateUrl: './edit-career.component.html',
  styleUrls: ['./edit-career.component.scss']
})
export class EditCareerComponent implements OnInit {

  careerID: string;
  editCareerForm: FormGroup;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private careerService: CareersService) { }

  ngOnInit() {
    this.careerID = this.route.snapshot.paramMap.get('id');
    this.createForm();
    this.getCareer();
  }

  getCareer() {
    this.careerService.getCareer(this.careerID.toString()).subscribe(response => {
      this.editCareerForm.controls['career'].setValue(response.data.career);
    });
  }

  createForm() {
    this.editCareerForm = new FormGroup({
      'career': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    if (this.editCareerForm.valid) {
      const career: Career = <Career>{
        id: parseInt(this.careerID, 10),
        career: this.editCareerForm.controls['career'].value
      };
      this.careerService.updateCareer(career).subscribe(response => {
        if (response.data === 'Success') {
          this.router.navigate(['/administrador/carreras']);
        }
      });
    }
  }

}
