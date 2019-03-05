import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveStudentsComponent } from './approve-students.component';

describe('ApproveStudentsComponent', () => {
  let component: ApproveStudentsComponent;
  let fixture: ComponentFixture<ApproveStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
