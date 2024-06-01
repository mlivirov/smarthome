import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerConsumptionSensorComponent } from './power-consumption-sensor.component';

describe('PowerConsumptionSensorComponent', () => {
  let component: PowerConsumptionSensorComponent;
  let fixture: ComponentFixture<PowerConsumptionSensorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PowerConsumptionSensorComponent]
    });
    fixture = TestBed.createComponent(PowerConsumptionSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
