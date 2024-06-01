import {Component, Input} from '@angular/core';
import {Store} from "@ngrx/store";
import {HomeAutomationFeatureState} from "../../store/home-automation.feature";
import {Observable} from "rxjs";
import {touchSwitch} from "../../store/home-automation.actions";
import {SimpleScheduleTimerInterface} from "../../types/simple-schedule.interface";

@Component({
  selector: 'app-switch-button',
  templateUrl: './switch-button.component.html',
  styleUrls: ['./switch-button.component.scss']
})
export class SwitchButtonComponent {
  @Input()
  label?: string;

  @Input()
  icon?: string;

  @Input()
  onIcon?: string;

  @Input()
  key: string = '';

  @Input()
  turnOffPeriod: SimpleScheduleTimerInterface|undefined;

  constructor(
    private store: Store<{homeAutomation: HomeAutomationFeatureState}>
  ) {
  }

  checkIsSwitchRequested(): Observable<boolean> {
    return this.store
      .select(t => t.homeAutomation.isSwitchRequested.has(this.key))
  }

  checkIsSwitchOn(): Observable<boolean> {
    return this.store
      .select(t => t.homeAutomation.isSwitchOn.has(this.key))
  }

  touchSwitch() {
    this.store.dispatch(touchSwitch({ key: this.key }));
  }
}
