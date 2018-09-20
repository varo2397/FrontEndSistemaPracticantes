import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluateCompanyComponent } from './evaluate-company.component';

describe('EvaluateCompanyComponent', () => {
  let component: EvaluateCompanyComponent;
  let fixture: ComponentFixture<EvaluateCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluateCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluateCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
