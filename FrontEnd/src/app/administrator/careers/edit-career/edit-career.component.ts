import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-career',
  templateUrl: './edit-career.component.html',
  styleUrls: ['./edit-career.component.scss']
})
export class EditCareerComponent implements OnInit {

  careerID: string;
  editCareerForm: FormGroup;

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.careerID = this.route.snapshot.paramMap.get('id');
    this.createForm();
  }

  createForm() {
    this.editCareerForm = new FormGroup({
      'career': new FormControl('Hola', Validators.required)
    });
  }

  onSubmit() {

  }

}
