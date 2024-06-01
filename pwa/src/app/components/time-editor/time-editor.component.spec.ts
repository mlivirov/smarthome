import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeEditorComponent } from './time-editor.component';

describe('TimeEditorComponent', () => {
  let component: TimeEditorComponent;
  let fixture: ComponentFixture<TimeEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimeEditorComponent]
    });
    fixture = TestBed.createComponent(TimeEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
