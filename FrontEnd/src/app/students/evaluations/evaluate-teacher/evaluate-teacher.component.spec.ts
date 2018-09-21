import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluateTeacherComponent } from './evaluate-teacher.component';

describe('EvaluateTeacherComponent', () => {
  let component: EvaluateTeacherComponent;
  let fixture: ComponentFixture<EvaluateTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluateTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluateTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
