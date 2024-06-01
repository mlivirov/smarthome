import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeScreenComponent} from "./screens/home-screen/home-screen.component";
import {AutoWateringScreenComponent} from "./screens/auto-watering-screen/auto-watering-screen.component";
import {
  LogsAndMonitoringScreenComponent
} from "./screens/logs-and-monitoring-screen/logs-and-monitoring-screen.component";

const routes: Routes = [
  { path: 'home', component: HomeScreenComponent },
  { path: 'auto-watering', component: AutoWateringScreenComponent },
  { path: 'logs-and-monitoring', component: LogsAndMonitoringScreenComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
