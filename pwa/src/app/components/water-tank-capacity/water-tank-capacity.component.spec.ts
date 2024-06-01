import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterTankCapacityComponent } from './water-tank-capacity.component';

describe('WaterTankCapacityComponent', () => {
  let component: WaterTankCapacityComponent;
  let fixture: ComponentFixture<WaterTankCapacityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaterTankCapacityComponent]
    });
    fixture = TestBed.createComponent(WaterTankCapacityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
