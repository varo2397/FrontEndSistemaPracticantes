import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatorEventsComponent } from './coordinator-events.component';

describe('CoordinatorEventsComponent', () => {
  let component: CoordinatorEventsComponent;
  let fixture: ComponentFixture<CoordinatorEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordinatorEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinatorEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
