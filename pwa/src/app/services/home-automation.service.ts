import {HostListener, Injectable} from "@angular/core";
import {HomeAutomationFeatureState} from "../store/home-automation.feature";
import {Store} from "@ngrx/store";
import {
  logMessage,
  tick, touchSwitch, updateBatteryVoltage, updateCurrentConsumption, updateEstimatedBatteryLife,
  updateIndoorCo2,
  updateIndoorHumidity,
  updateIndoorTemp,
  updateSwitch, updateWaterTankCapacity
} from "../store/home-automation.actions";
import {SimpleScheduleInterface, SimpleScheduleTimerInterface} from "../types/simple-schedule.interface";
import {SensorsEnum} from "../types/sensors.enum";
import {SwitchesEnum} from "../types/switches.enum";
import {colors} from "@angular/cli/utilities/color";

@Injectable({
  providedIn: 'root'
})
export class HomeAutomationService {
  BATTERY_CAPACITY = 720;
  SYSTEM_VOLTAGE = 220;

  get serial(): any {
    return (window as any).bluetoothSerial;
  }

  constructor(
    private store: Store<{homeAutomation: HomeAutomationFeatureState}>
  ) {
    setInterval(() => {
      store.dispatch(tick({ timestamp: new Date() }))
    }, 5000);

    document.addEventListener('deviceready', this.deviceReady.bind(this), false);
  }

  log(message: string) {
    this.store.dispatch(logMessage({ time: new Date(), message: message}));
  }

  deviceReady() {
    this.connectToController();
  }

  connectToController() {
    this.log('connecting...');
    this.serial.connect('98:DA:50:01:E1:3D', this.onConnected.bind(this), this.onDisconnect.bind(this));
  }

  onDisconnect() {
    this.log('disconnected, will attempt to reconnect in 5 seconds');
    setTimeout(this.connectToController.bind(this), 5000);
  }

  onConnected() {
    this.log('connected');
    this.serial.subscribe('\n', this.onMessageReceived.bind(this), this.onSubscribeFailed.bind(this));
  }

  onMessageReceived(cmd: string) {
    const relayCommand = 'RELAY:';
    const valveCommand = 'VALVE:';
    const sensorCommand = 'SENS:'

    if (cmd.startsWith(relayCommand)) {
      this.log('received: ' + cmd);

      const pairs = cmd.substring(relayCommand.length).split(':');
      const key = pairs[0];
      const on = parseInt(pairs[1]);

      this.store.dispatch(updateSwitch({ key, on: !!on }));
    }
    else if (cmd.startsWith(valveCommand)) {
      this.log('received: ' + cmd);

      const pairs = cmd.split(':');
      const on = parseInt(pairs[1]);
      if (!isNaN(on)) {
        this.store.dispatch(updateSwitch({ key: SwitchesEnum.AutoWatering, on: !!on }))
      }
    }
    else if (cmd.startsWith(sensorCommand)) {
      const pairs = cmd.substring(sensorCommand.length).split(':');
      const key = pairs[0];
      const val = parseInt(pairs[1]);

      switch (key) {
        case SensorsEnum.IndoorTemp:
          this.store.dispatch(updateIndoorTemp({ val }));
          break;
        case SensorsEnum.IndoorCo2:
          this.store.dispatch(updateIndoorCo2({ val }));
          break;
        case SensorsEnum.IndoorHumidity:
          this.store.dispatch(updateIndoorHumidity({ val }));
          break;
        case SensorsEnum.WaterTankCapacity:
          this.store.dispatch(updateWaterTankCapacity({ val: val / 1000. }));
          break;
        case SensorsEnum.BatteryVoltage:
          this.store.dispatch(updateBatteryVoltage({ val: val / 1000. }));
          break;
        case SensorsEnum.CurrentConsumption:
          this.store.dispatch(updateCurrentConsumption({ val: (val / 1000.) * this.SYSTEM_VOLTAGE }));

          // TODO: compute here
          this.store.dispatch(updateEstimatedBatteryLife({ val: 1 }));
          break;
        default:
          this.log('Unknown sensor: ' + key);
      }
    }
    else {
      this.log('Unknown command: ' + cmd);
    }
  }

  onSubscribeFailed() {
    this.log('subscribe failed');
  }

  onWriteFailed() {
    this.log('write failed');
  }

  automateWatering(
    isOn: boolean,
    isOnRequested: boolean,
    schedule: SimpleScheduleInterface,
    duration: SimpleScheduleTimerInterface
  ) {
    const now = new Date();

    const durationTime = (duration.hours * 60 + duration.minutes) * 1000 * 60;

    const timer1Start = new Date(now.getFullYear(), now.getMonth(), now.getDate(), schedule.timer1.hours, schedule.timer1.minutes);
    const timer1End = new Date(timer1Start.getTime() + durationTime);

    const timer2Start = new Date(now.getFullYear(), now.getMonth(), now.getDate(), schedule.timer2.hours, schedule.timer2.minutes);
    const timer2End = new Date(timer2Start.getTime() + durationTime);

    if (
      schedule.daysOfWeek.has(now.getDay())
      && (
        (schedule.isTimer1Active && now >= timer1Start && now < timer1End)
        ||
        (schedule.isTimer2Active && now >= timer2Start && now < timer2End)
      )
    ) {
      if (!isOn && !isOnRequested) {
        this.store.dispatch(touchSwitch({ key: SwitchesEnum.AutoWatering }));
      }
    }
    else if (isOn) {
      this.store.dispatch(touchSwitch({ key: SwitchesEnum.AutoWatering }));
    }
  }

  automateSwitches(isSwitchOn: Set<string>, isSwitchRequested: Set<string>) {
    isSwitchRequested.forEach(id => {
      if (id == SwitchesEnum.AutoWatering) {
        this.sendCommand(`VALVE:${isSwitchOn.has(id) ? 0 : 1}`);
      } else {
        this.sendCommand(`RELAY:${id}:${isSwitchOn.has(id) ? 0 : 1}`);
      }
    });
  }

  sendCommand(cmd: string) {
    this.log('sending: ' + cmd);

    if (!this.serial) {
      setTimeout(() => {
        this.onMessageReceived(cmd);
      }, 2000);
    } else {
      this.serial.write(cmd + '\r\n', () => {}, this.onWriteFailed.bind(this));
    }
  }
}
