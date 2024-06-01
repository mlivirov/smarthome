import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {SimpleScheduleTimerInterface} from "../../types/simple-schedule.interface";

@Component({
  selector: 'app-time-editor',
  templateUrl: './time-editor.component.html',
  styleUrls: ['./time-editor.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TimeEditorComponent),
      multi: true,
    },
  ],
})
export class TimeEditorComponent implements ControlValueAccessor {
  model: SimpleScheduleTimerInterface = {
    hours: 12,
    minutes: 21
  }

  isDisabled: boolean = false;

  @Input()
  textStyleClass: string = 'text-8xl'

  touchedCallback: any;
  changeCallback?: (model: SimpleScheduleTimerInterface) => void;

  notifyChanged() {
    if (this.changeCallback) {
      this.changeCallback({
        hours: this.model.hours,
        minutes: this.model.minutes
      })
    }
  }

  writeValue(obj: any): void {
    this.model = {...(obj || {})};
  }

  registerOnChange(fn: any): void {
    this.changeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.touchedCallback = fn;
  }

  incHours() {
    this.model.hours += 1;
    if (this.model.hours > 23) {
      this.model.hours = 0;
    }

    this.notifyChanged();
  }

  decHours() {
    this.model.hours -= 1;
    if (this.model.hours < 0) {
      this.model.hours = 23;
    }

    this.notifyChanged();
  }

  incMinutes() {
    this.model.minutes += 1;

    if (this.model.minutes >= 60) {
      this.model.minutes = 0;
      this.incHours();
    }

    this.notifyChanged();
  }

  decMinutes() {
    this.model.minutes -=1;
    if (this.model.minutes < 0) {
      this.model.minutes = 59;
      this.decHours();
    }

    this.notifyChanged();
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
