import {createAction, props} from '@ngrx/store';
import {SimpleScheduleInterface, SimpleScheduleTimerInterface} from "../types/simple-schedule.interface";

const HOME_AUTOMATION_ACTION_KEY = 'Home Automation'

export const touchSwitch = createAction(`[${HOME_AUTOMATION_ACTION_KEY}] touchSwitch`, props<{ key: string }>());

export const updateAutoWateringSchedule = createAction(`[${HOME_AUTOMATION_ACTION_KEY}] updateAutoWateringSchedule`, props<{ schedule: SimpleScheduleInterface }>());

export const updateAutoWateringDuration = createAction(`[${HOME_AUTOMATION_ACTION_KEY}] updateAutoWateringDuration`, props<{ duration: SimpleScheduleTimerInterface }>());

export const tick = createAction(`[${HOME_AUTOMATION_ACTION_KEY}] tick`, props<{timestamp: Date}>());

export const updateSwitch = createAction(`[${HOME_AUTOMATION_ACTION_KEY}] updateSwitches`, props<{ key: string, on: boolean }>());

export const updateIndoorTemp = createAction(`[${HOME_AUTOMATION_ACTION_KEY}] updateIndoorTemp`, props<{ val: number; }>());

export const updateIndoorHumidity = createAction(`[${HOME_AUTOMATION_ACTION_KEY}] updateIndoorHumidity`, props<{ val: number; }>());

export const updateIndoorCo2 = createAction(`[${HOME_AUTOMATION_ACTION_KEY}] updateIndoorCo2`, props<{ val: number; }>());

export const updateWaterTankCapacity = createAction(`[${HOME_AUTOMATION_ACTION_KEY}] updateWaterTankCapacity`, props<{ val: number; }>());

export const updateBatteryVoltage = createAction(`[${HOME_AUTOMATION_ACTION_KEY}] updateBatteryVoltage`, props<{ val: number; }>());

export const updateCurrentConsumption = createAction(`[${HOME_AUTOMATION_ACTION_KEY}] updateCurrentConsumption`, props<{ val: number; }>());

export const updateEstimatedBatteryLife = createAction(`[${HOME_AUTOMATION_ACTION_KEY}] updateEstimatedBatteryLife`, props<{ val: number; }>());

export const logMessage = createAction(`[${HOME_AUTOMATION_ACTION_KEY}] logMessage`, props<{ time: Date, message: string }>());
