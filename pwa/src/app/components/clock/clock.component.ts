import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {HomeAutomationFeatureState} from "../../store/home-automation.feature";

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent {
  now: Date = new Date()

  constructor(
    private store: Store<{homeAutomation: HomeAutomationFeatureState}>
  ) {
    store.select(t => t.homeAutomation.systemTime).subscribe(t => this.now = t)
  }
}
