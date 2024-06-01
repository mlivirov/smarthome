import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {HomeAutomationFeatureState} from "../../store/home-automation.feature";

@Component({
  selector: 'app-power-consumption-sensor',
  templateUrl: './power-consumption-sensor.component.html',
  styleUrls: ['./power-consumption-sensor.component.scss']
})
export class PowerConsumptionSensorComponent {
  currentConsumption$ = this.store.select(t => t.homeAutomation.powerConsumptionSensor.currentConsumption)
  batteryVoltage$ = this.store.select(t => t.homeAutomation.powerConsumptionSensor.batteryVoltage)
  estimatedBatteryLife$ = this.store.select(t => t.homeAutomation.powerConsumptionSensor.estimatedBatteryLife)

  constructor(
    private store: Store<{homeAutomation: HomeAutomationFeatureState}>
  ) {
  }
}
