import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AproveIntershipStudentComponent } from './aprove-intership-student.component';

describe('AproveIntershipStudentComponent', () => {
  let component: AproveIntershipStudentComponent;
  let fixture: ComponentFixture<AproveIntershipStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AproveIntershipStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AproveIntershipStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
