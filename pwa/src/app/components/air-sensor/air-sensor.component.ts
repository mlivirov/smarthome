import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {HomeAutomationFeatureState} from "../../store/home-automation.feature";

@Component({
  selector: 'app-air-sensor',
  templateUrl: './air-sensor.component.html',
  styleUrls: ['./air-sensor.component.scss']
})
export class AirSensorComponent {
  temp$ = this.store.select(t => t.homeAutomation.indoorAirSensor.temp)
  humidity$ = this.store.select(t => t.homeAutomation.indoorAirSensor.humidity)
  co2$ = this.store.select(t => t.homeAutomation.indoorAirSensor.co2)

  constructor(
    private store: Store<{homeAutomation: HomeAutomationFeatureState}>
  ) {
  }
}
