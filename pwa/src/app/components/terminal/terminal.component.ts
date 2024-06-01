import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {HomeAutomationFeatureState} from "../../store/home-automation.feature";

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {
  log: { time: Date, message: string }[];

  constructor(
    private store: Store<{homeAutomation: HomeAutomationFeatureState}>
  ) {
    this.store.select(t => t.homeAutomation.log).subscribe(
      t => this.log = [...t].reverse()
    );
  }

  ngOnInit(): void {
  }
}
