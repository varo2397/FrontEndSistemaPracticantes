import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatorDocumentsComponent } from './coordinator-documents.component';

describe('CoordinatorDocumentsComponent', () => {
  let component: CoordinatorDocumentsComponent;
  let fixture: ComponentFixture<CoordinatorDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordinatorDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinatorDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
