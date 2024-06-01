import {createFeatureSelector, createSelector} from '@ngrx/store';
import {HomeAutomationFeatureKey, HomeAutomationFeatureState} from "./home-automation.feature";


export const selectHomeAutomation = createFeatureSelector<HomeAutomationFeatureState>(HomeAutomationFeatureKey);
