import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluateInternshipProcessComponent } from './evaluate-internship-process.component';

describe('EvaluateInternshipProcessComponent', () => {
  let component: EvaluateInternshipProcessComponent;
  let fixture: ComponentFixture<EvaluateInternshipProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluateInternshipProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluateInternshipProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
