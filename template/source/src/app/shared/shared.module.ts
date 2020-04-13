import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatMenuModule } from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatMenuModule
  ],
  exports: [CommonModule, MatMenuModule]
})
export class SharedModule { }
