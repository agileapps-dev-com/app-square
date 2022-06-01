import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppSquareRoutingModule } from './app-square-routing.module';
import { HomeComponent } from './home/home.component';
import { DetailPanelViewComponent } from './detail-panel-view/detail-panel-view.component';
import { SharedModule } from '../shared/shared.module';
import { AngularSplitModule } from 'angular-split';
import { MastHeadModule } from '../components/mast-head/mast-head.module';


@NgModule({
  declarations: [HomeComponent, DetailPanelViewComponent],
  imports: [
    AppSquareRoutingModule,
    AngularSplitModule.forRoot(),
    SharedModule,
    MastHeadModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppSquareModule { }
