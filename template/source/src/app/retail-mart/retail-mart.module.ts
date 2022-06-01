import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RetailMartRoutingModule } from './retail-mart-routing.module';
import { RetailMartComponent } from './retail-mart.component';


@NgModule({
  declarations: [RetailMartComponent],
  imports: [
    CommonModule,
    RetailMartRoutingModule
  ]
})
export class RetailMartModule { }
