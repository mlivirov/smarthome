import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoWateringScreenComponent } from './auto-watering-screen.component';

describe('AutoWateringScreenComponent', () => {
  let component: AutoWateringScreenComponent;
  let fixture: ComponentFixture<AutoWateringScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoWateringScreenComponent]
    });
    fixture = TestBed.createComponent(AutoWateringScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
