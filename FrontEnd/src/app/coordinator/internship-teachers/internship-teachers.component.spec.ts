import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternshipTeachersComponent } from './internship-teachers.component';

describe('InternshipTeachersComponent', () => {
  let component: InternshipTeachersComponent;
  let fixture: ComponentFixture<InternshipTeachersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternshipTeachersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternshipTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
