import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveCompaniesComponent } from './approve-companies.component';

describe('ApproveCompaniesComponent', () => {
  let component: ApproveCompaniesComponent;
  let fixture: ComponentFixture<ApproveCompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveCompaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
