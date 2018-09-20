import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCarrerComponent } from './create-carrer.component';

describe('CreateCarrerComponent', () => {
  let component: CreateCarrerComponent;
  let fixture: ComponentFixture<CreateCarrerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCarrerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCarrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
