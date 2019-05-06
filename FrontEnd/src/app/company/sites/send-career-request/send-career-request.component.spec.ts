import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendCareerRequestComponent } from './send-career-request.component';

describe('SendCareerRequestComponent', () => {
  let component: SendCareerRequestComponent;
  let fixture: ComponentFixture<SendCareerRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendCareerRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendCareerRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
