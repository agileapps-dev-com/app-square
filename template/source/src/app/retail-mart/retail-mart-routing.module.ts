import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RetailMartComponent } from './retail-mart.component';

const routes: Routes = [{ path: '', component: RetailMartComponent }, { path: 'new-supplier-request', loadChildren: () => import('./new-supplier-request/new-supplier-request.module').then(m => m.NewSupplierRequestModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RetailMartRoutingModule { }
