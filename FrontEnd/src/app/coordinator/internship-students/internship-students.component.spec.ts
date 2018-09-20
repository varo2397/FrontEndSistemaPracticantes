import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternshipStudentsComponent } from './internship-students.component';

describe('InternshipStudentsComponent', () => {
  let component: InternshipStudentsComponent;
  let fixture: ComponentFixture<InternshipStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternshipStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternshipStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
