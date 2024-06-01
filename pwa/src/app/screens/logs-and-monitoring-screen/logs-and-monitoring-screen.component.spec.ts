import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsAndMonitoringScreenComponent } from './logs-and-monitoring-screen.component';

describe('LogsAndMonitoringScreenComponent', () => {
  let component: LogsAndMonitoringScreenComponent;
  let fixture: ComponentFixture<LogsAndMonitoringScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogsAndMonitoringScreenComponent]
    });
    fixture = TestBed.createComponent(LogsAndMonitoringScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
