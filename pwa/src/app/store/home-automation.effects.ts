import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {tick, touchSwitch, updateAutoWateringSchedule} from "./home-automation.actions";
import {Store} from "@ngrx/store";
import {HomeAutomationFeatureState} from "./home-automation.feature";
import {delay, switchMap, tap, withLatestFrom} from "rxjs/operators";
import {HomeAutomationService} from "../services/home-automation.service";
import {SwitchesEnum} from "../types/switches.enum";

@Injectable()
export class HomeAutomationEffects {
  automateSwitches$ = createEffect(() => this.actions$.pipe(
    ofType(touchSwitch),
    withLatestFrom(this.store.select(t => t.homeAutomation)),
    tap(([action, store]) => {
      this.homeAutomationService.automateSwitches(
        store.isSwitchOn,
        store.isSwitchRequested,
      );
    })
  ), {
    dispatch: false
  });

  automateWatering$ = createEffect(() => this.actions$.pipe(
    ofType(tick, updateAutoWateringSchedule),
    withLatestFrom(this.store.select(t => t.homeAutomation)),
    tap(([action, store]) => {
      this.homeAutomationService.automateWatering(
        store.isSwitchOn.has(SwitchesEnum.AutoWatering),
        store.isSwitchRequested.has(SwitchesEnum.AutoWatering),
        store.autoWatering.schedule,
        store.autoWatering.duration
      );
    })
  ), {
    dispatch: false
  });

  constructor(
    private actions$: Actions,
    private store: Store<{homeAutomation: HomeAutomationFeatureState}>,
    private homeAutomationService: HomeAutomationService
  ) {}
}
