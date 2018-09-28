import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesInformationComponent } from './companies-information.component';

describe('CompaniesInformationComponent', () => {
  let component: CompaniesInformationComponent;
  let fixture: ComponentFixture<CompaniesInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompaniesInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
