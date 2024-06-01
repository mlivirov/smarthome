import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {HomeAutomationFeatureState} from "../../store/home-automation.feature";
import {SwitchesEnum} from "../../types/switches.enum";

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent {
  SwitchesEnum = SwitchesEnum

  constructor(
    private store: Store<{homeAutomation: HomeAutomationFeatureState}>
  ) {
  }
}
