export interface SimpleScheduleTimerInterface {
  hours: number;
  minutes: number;
}

export interface SimpleScheduleInterface {
  isTimer1Active: boolean;
  isTimer2Active: boolean;

  timer1: SimpleScheduleTimerInterface;
  timer2: SimpleScheduleTimerInterface;

  daysOfWeek: Set<number>;
}
