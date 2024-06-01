import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {SimpleScheduleTimerInterface} from "../../types/simple-schedule.interface";

@Component({
  selector: 'app-duration-editor',
  templateUrl: './duration-editor.component.html',
  styleUrls: ['./duration-editor.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DurationEditorComponent),
      multi: true,
    },
  ],
})
export class DurationEditorComponent implements ControlValueAccessor {
  model: SimpleScheduleTimerInterface = {
    hours: 0,
    minutes: 15
  }
  isDisabled: boolean = false;

  touchedCallback: any;

  changeCallback?: (model: SimpleScheduleTimerInterface) => void;

  handleChanged(model: SimpleScheduleTimerInterface) {
    this.model = model;

    if (this.changeCallback) {
      this.changeCallback({
        hours: this.model.hours,
        minutes: this.model.minutes
      });
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

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
