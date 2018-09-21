import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AproveCompaniesComponent } from './aprove-companies.component';

describe('AproveCompaniesComponent', () => {
  let component: AproveCompaniesComponent;
  let fixture: ComponentFixture<AproveCompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AproveCompaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AproveCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
