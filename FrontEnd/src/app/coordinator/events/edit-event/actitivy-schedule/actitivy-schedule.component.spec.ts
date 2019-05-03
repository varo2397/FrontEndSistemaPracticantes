import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActitivyScheduleComponent } from './actitivy-schedule.component';

describe('ActitivyScheduleComponent', () => {
  let component: ActitivyScheduleComponent;
  let fixture: ComponentFixture<ActitivyScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActitivyScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActitivyScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
