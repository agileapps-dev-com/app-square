import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppSpacePageComponent } from './app-space-page/app-space-page.component';


const routes: Routes = [
  {
    path: "details/?:oid/?:vid/?:rid", component: AppSpacePageComponent
  },
  {
    path: "details/?:oid/?:vid", component: AppSpacePageComponent
  },

  {
    path: "details/?:oid", component: AppSpacePageComponent
  },
  {
    path: "details", component: AppSpacePageComponent
  },
  {
    path: "", redirectTo: "details", pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppSpaceRoutingModule { }
