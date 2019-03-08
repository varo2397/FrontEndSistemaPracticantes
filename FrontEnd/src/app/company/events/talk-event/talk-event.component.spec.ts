import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkEventComponent } from './talk-event.component';

describe('TalkEventComponent', () => {
  let component: TalkEventComponent;
  let fixture: ComponentFixture<TalkEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalkEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalkEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
