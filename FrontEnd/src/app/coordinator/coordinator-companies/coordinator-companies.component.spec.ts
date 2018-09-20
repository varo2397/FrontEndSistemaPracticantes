import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatorCompaniesComponent } from './coordinator-companies.component';

describe('CoordinatorCompaniesComponent', () => {
  let component: CoordinatorCompaniesComponent;
  let fixture: ComponentFixture<CoordinatorCompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordinatorCompaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinatorCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
