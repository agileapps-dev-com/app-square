import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewSupplierRequestRoutingModule } from './new-supplier-request-routing.module';
import { NewSupplierRequestComponent } from './new-supplier-request.component';


@NgModule({
  declarations: [NewSupplierRequestComponent],
  imports: [
    CommonModule,
    NewSupplierRequestRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewSupplierRequestModule { }
