import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyEventInfoComponent } from './company-event-info.component';

describe('CompanyEventInfoComponent', () => {
  let component: CompanyEventInfoComponent;
  let fixture: ComponentFixture<CompanyEventInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyEventInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyEventInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
