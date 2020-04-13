import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppSpaceRoutingModule } from './app-space-routing.module';
import { AppSpacePageComponent } from './app-space-page/app-space-page.component';
import { AngularSplitModule } from 'angular-split';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [AppSpacePageComponent],
  imports: [
    AppSpaceRoutingModule,
    AngularSplitModule.forRoot(),
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppSpaceModule { }
