import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {HomeAutomationFeatureState} from "../../store/home-automation.feature";

@Component({
  selector: 'app-water-tank-capacity',
  templateUrl: './water-tank-capacity.component.html',
  styleUrls: ['./water-tank-capacity.component.scss']
})
export class WaterTankCapacityComponent {

  waterTankCapacity$ = this.store.select(t => t.homeAutomation.waterTankCapacity);

  constructor(
    private store: Store<{homeAutomation: HomeAutomationFeatureState}>
  ) {
  }
}
