import { Component } from '@angular/core';
import {SwitchesEnum} from "../../types/switches.enum";

@Component({
  selector: 'app-logs-and-monitoring-screen',
  templateUrl: './logs-and-monitoring-screen.component.html',
  styleUrls: ['./logs-and-monitoring-screen.component.scss']
})
export class LogsAndMonitoringScreenComponent {
  SwitchesEnum = SwitchesEnum
}
