import { Component, OnInit, ViewChild } from '@angular/core';
import { CreatePersonComponent } from '../../../shared/create-person/create-person.component';
import { CreateUserComponent } from '../../../shared/create-user/create-user.component';
import { CoordinatorInfoComponent } from './coordinator-info/coordinator-info.component';
import { People } from '../../../interfaces/people';
import { User } from '../../../interfaces/user';
import { CoordinatorsService } from '../../../core/http/coordinators/coordinators.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-coordinator',
  templateUrl: './create-coordinator.component.html',
  styleUrls: ['./create-coordinator.component.scss']
})
export class CreateCoordinatorComponent implements OnInit {

  error: string;

  @ViewChild(CreatePersonComponent, { static: true }) createPerson: CreatePersonComponent;
  @ViewChild(CreateUserComponent, { static: true }) createUser: CreateUserComponent;
  @ViewChild(CoordinatorInfoComponent, { static: true }) coordinatorInfo: CoordinatorInfoComponent;

  constructor(private coordinatorsService: CoordinatorsService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    if (
      this.createPerson.personForm.valid
      && this.createUser.userForm.valid
      && this.coordinatorInfo.coordinatorForm.valid
    ) {
      const person: People = this.createPerson.getFormValues();
      const user: User = this.createUser.getFormValues();
      const coordinator = this.coordinatorInfo.getFormValues();
      const json = {
        person: person,
        user: user,
        coordinator: coordinator
      };
      this.coordinatorsService.createCoordinator(json).subscribe(response => {
        if (response.data === 'Success') {
          this.router.navigate(['/administrador/coordinadores']);
        } else {
          this.error = response.error;
        }
      });
    }
  }

}
