import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyEventsComponent } from './company-events.component';

describe('CompanyEventsComponent', () => {
  let component: CompanyEventsComponent;
  let fixture: ComponentFixture<CompanyEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
