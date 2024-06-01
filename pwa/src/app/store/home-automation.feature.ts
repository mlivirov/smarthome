import {SimpleScheduleInterface, SimpleScheduleTimerInterface} from "../types/simple-schedule.interface";
import {SimpleScheduleComponent} from "../components/simple-schedule/simple-schedule.component";

export const HomeAutomationFeatureKey = 'HomeAutomation'

export interface HomeAutomationFeatureState {
  systemTime: Date,
  isSwitchRequested: Set<string>;
  isSwitchOn: Set<string>;
  indoorAirSensor: {
    temp: number;
    humidity: number;
    co2: number;
  },
  waterTankCapacity: number,
  powerConsumptionSensor: {
    currentConsumption: number;
    batteryVoltage: number;
    estimatedBatteryLife: number;
  },
  autoWatering: {
    schedule: SimpleScheduleInterface;
    duration: SimpleScheduleTimerInterface;
  },
  log: { time: Date, message: string }[];
}
