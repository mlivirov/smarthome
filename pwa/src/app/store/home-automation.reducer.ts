import { createReducer, on } from '@ngrx/store';
import { HomeAutomationFeatureState } from "./home-automation.feature";
import {
  logMessage,
  tick,
  touchSwitch,
  updateAutoWateringDuration,
  updateAutoWateringSchedule, updateBatteryVoltage, updateCurrentConsumption, updateEstimatedBatteryLife,
  updateIndoorCo2,
  updateIndoorHumidity,
  updateIndoorTemp,
  updateSwitch,
  updateWaterTankCapacity
} from "./home-automation.actions";

export const initialState: HomeAutomationFeatureState = {
  systemTime: new Date(),
  isSwitchOn: new Set<string>(),
  isSwitchRequested: new Set<string>(),
  indoorAirSensor: {
    temp: 23.4,
    co2: 512,
    humidity: 12
  },
  waterTankCapacity: 49,
  powerConsumptionSensor: {
    currentConsumption: 199,
    batteryVoltage: 12.2,
    estimatedBatteryLife: 3
  },
  autoWatering: {
    schedule: {
      daysOfWeek: new Set<number>([1, 3, 6]),
      isTimer1Active: true,
      timer1: { hours: 8, minutes: 0 },
      isTimer2Active: false,
      timer2: { hours: 17, minutes: 0 },
    },
    duration: { hours: 0, minutes: 30 }
  },
  log: []
};

export const homeAutomationReducer = createReducer(
  initialState,
  on(touchSwitch, (state, args) => {
    const newState = {...state};
    newState.isSwitchRequested.add(args.key);
    return newState;
  }),
  on(updateAutoWateringSchedule, (state, args) => ({...state, autoWatering: {...state.autoWatering, schedule: args.schedule}})),
  on(updateAutoWateringDuration, (state, args) => ({...state, autoWatering: {...state.autoWatering, duration: args.duration}})),
  on(tick, (state, args) => ({...state, systemTime: args.timestamp })),
  on(updateSwitch, (state, args) => {
    const newState = {...state};
    newState.isSwitchRequested.delete(args.key);
    if (args.on) {
      newState.isSwitchOn.add(args.key);
    } else {
      newState.isSwitchOn.delete(args.key);
    }
    return newState;
  }),
  on(updateIndoorHumidity, (state, args) => (
    {
      ...state,
      indoorAirSensor: {
        ...state.indoorAirSensor,
        humidity: args.val
      }
    }
  )),
  on(updateIndoorTemp, (state, args) => (
    {
      ...state,
      indoorAirSensor: {
        ...state.indoorAirSensor,
        temp: args.val
      }
    }
  )),
  on(updateIndoorCo2, (state, args) => (
    {
      ...state,
      indoorAirSensor: {
        ...state.indoorAirSensor,
        co2: args.val
      }
    }
  )),
  on(updateWaterTankCapacity, (state, args) => (
    {
      ...state,
      waterTankCapacity: args.val
    }
  )),
  on(updateBatteryVoltage, (state, args) => (
    {
      ...state,
      powerConsumptionSensor: {
        ...state.powerConsumptionSensor,
        batteryVoltage: args.val
      }
    }
  )),
  on(updateCurrentConsumption, (state, args) => (
    {
      ...state,
      powerConsumptionSensor: {
        ...state.powerConsumptionSensor,
        currentConsumption: args.val
      }
    }
  )),
  on(updateEstimatedBatteryLife, (state, args) => (
    {
      ...state,
      powerConsumptionSensor: {
        ...state.powerConsumptionSensor,
        estimatedBatteryLife: args.val
      }
    }
  )),
  on(logMessage, (state, args) => {
    let newState = {...state, log: [...state.log]};

    newState.log.push(args);
    if (newState.log.length > 100) {
      newState.log.splice(0, 1);
    }

    return newState;
  })
);
