import {ChangeDetectorRef, Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {HomeAutomationFeatureState} from "../../store/home-automation.feature";
import {SimpleScheduleComponent} from "../../components/simple-schedule/simple-schedule.component";
import {SimpleScheduleInterface, SimpleScheduleTimerInterface} from "../../types/simple-schedule.interface";
import {updateAutoWateringDuration, updateAutoWateringSchedule} from "../../store/home-automation.actions";
import {SwitchesEnum} from "../../types/switches.enum";

@Component({
  selector: 'app-auto-watering-screen',
  templateUrl: './auto-watering-screen.component.html',
  styleUrls: ['./auto-watering-screen.component.scss']
})
export class AutoWateringScreenComponent {
  SwitchesEnum = SwitchesEnum
  schedule$ = this.store.select(t => t.homeAutomation.autoWatering.schedule);
  duration$ = this.store.select(t => t.homeAutomation.autoWatering.duration);

  constructor(
    private store: Store<{homeAutomation: HomeAutomationFeatureState}>
  ) {
  }

  updateSchedule(schedule: SimpleScheduleInterface) {
    this.store.dispatch(updateAutoWateringSchedule({schedule}));
  }

  updateDuration(duration: SimpleScheduleTimerInterface) {
    this.store.dispatch(updateAutoWateringDuration({duration}))
  }
}
