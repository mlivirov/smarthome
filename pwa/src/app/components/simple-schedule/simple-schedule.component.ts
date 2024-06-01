import {Component, forwardRef} from '@angular/core';
import {SimpleScheduleInterface, SimpleScheduleTimerInterface} from "../../types/simple-schedule.interface";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-simple-schedule',
  templateUrl: './simple-schedule.component.html',
  styleUrls: ['./simple-schedule.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SimpleScheduleComponent),
      multi: true,
    },
  ],
})
export class SimpleScheduleComponent implements ControlValueAccessor {
  model: SimpleScheduleInterface = {
    isTimer1Active: false,
    isTimer2Active: false,
    timer1: {
      hours: 8, minutes: 12
    },
    timer2: {
      hours: 17, minutes: 12
    },
    daysOfWeek: new Set<number>([1,2,7])
  }

  touchedCallback: any;

  changeCallback?: (model: SimpleScheduleInterface) => void;

  writeValue(obj: any): void {
    const val = {...(obj || this.model)} as SimpleScheduleInterface;
    this.model.daysOfWeek = new Set<number>(val.daysOfWeek.values());
    this.model.timer1.hours = val.timer1.hours;
    this.model.timer1.minutes = val.timer1.minutes;
    this.model.timer2.hours = val.timer2.hours;
    this.model.timer2.minutes = val.timer2.minutes;
    this.model.isTimer1Active = val.isTimer1Active;
    this.model.isTimer2Active = val.isTimer2Active;
  }

  registerOnChange(fn: any): void {
    this.changeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.touchedCallback = fn;
  }

  notifyChanged() {
    if (this.changeCallback) {
      this.changeCallback({
        isTimer1Active: this.model.isTimer1Active,
        isTimer2Active: this.model.isTimer2Active,
        daysOfWeek: new Set(this.model.daysOfWeek.values()),
        timer1: {
          hours: this.model.timer1.hours,
          minutes: this.model.timer1.minutes
        },
        timer2: {
          hours: this.model.timer2.hours,
          minutes: this.model.timer2.minutes
        }
      });
    }
  }

  handleTimer1Change(timer: SimpleScheduleTimerInterface) {
    this.model.timer1 = timer;
    this.notifyChanged();
  }

  handleTimer2Change(timer: SimpleScheduleTimerInterface) {
    this.model.timer2 = timer;
    this.notifyChanged();
  }

  toggleTimer1() {
    this.model.isTimer1Active = !this.model.isTimer1Active;
    this.notifyChanged();
  }

  toggleTimer2() {
    this.model.isTimer2Active = !this.model.isTimer2Active;
    this.notifyChanged();
  }

  toggleDayOfWeek(n: number) {
    if (this.model.daysOfWeek.has(n)) {
      this.model.daysOfWeek.delete(n);
    } else {
      this.model.daysOfWeek.add(n);
    }

    this.notifyChanged();
  }
}
