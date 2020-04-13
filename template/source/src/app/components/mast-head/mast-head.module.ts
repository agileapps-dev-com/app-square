import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MastheadComponent } from './masthead/masthead.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [MastheadComponent],
  imports: [
    SharedModule
  ],
  exports: [MastheadComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MastHeadModule { }
