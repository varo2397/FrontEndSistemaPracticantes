import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndInternshipComponent } from './end-internship.component';

describe('EndInternshipComponent', () => {
  let component: EndInternshipComponent;
  let fixture: ComponentFixture<EndInternshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndInternshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndInternshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
