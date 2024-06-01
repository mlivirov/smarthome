import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleScheduleComponent } from './simple-schedule.component';

describe('SimpleScheduleComponent', () => {
  let component: SimpleScheduleComponent;
  let fixture: ComponentFixture<SimpleScheduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleScheduleComponent]
    });
    fixture = TestBed.createComponent(SimpleScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
