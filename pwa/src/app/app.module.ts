import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeScreenComponent} from "./screens/home-screen/home-screen.component";
import {AutoWateringScreenComponent} from "./screens/auto-watering-screen/auto-watering-screen.component";
import {TimeEditorComponent} from "./components/time-editor/time-editor.component";
import {DurationEditorComponent} from "./components/duration-editor/duration-editor.component";
import {SwitchButtonComponent} from "./components/switch-button/switch-button.component";
import {AirSensorComponent} from "./components/air-sensor/air-sensor.component";
import {ClockComponent} from "./components/clock/clock.component";
import {WaterTankCapacityComponent} from "./components/water-tank-capacity/water-tank-capacity.component";
import {
  PowerConsumptionSensorComponent
} from "./components/power-consumption-sensor/power-consumption-sensor.component";
import {SimpleScheduleComponent} from "./components/simple-schedule/simple-schedule.component";
import {
  LogsAndMonitoringScreenComponent
} from "./screens/logs-and-monitoring-screen/logs-and-monitoring-screen.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {FormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {homeAutomationReducer} from "./store/home-automation.reducer";
import {EffectsModule} from "@ngrx/effects";
import {HomeAutomationEffects} from "./store/home-automation.effects";
import { TerminalComponent } from './components/terminal/terminal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    AutoWateringScreenComponent,
    TimeEditorComponent,
    DurationEditorComponent,
    SwitchButtonComponent,
    AirSensorComponent,
    ClockComponent,
    WaterTankCapacityComponent,
    PowerConsumptionSensorComponent,
    SimpleScheduleComponent,
    LogsAndMonitoringScreenComponent,
    NavbarComponent,
    TerminalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({homeAutomation: homeAutomationReducer}, {}),
    EffectsModule.forRoot([HomeAutomationEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
