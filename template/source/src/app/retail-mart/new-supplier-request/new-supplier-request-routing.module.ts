import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewSupplierRequestComponent } from './new-supplier-request.component';

const routes: Routes = [{ path: '', component: NewSupplierRequestComponent, data:{ "isMastHeadShown":false} }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewSupplierRequestRoutingModule { }
