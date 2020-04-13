import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailPanelViewComponent } from './detail-panel-view/detail-panel-view.component';


const routes: Routes = [
  { path: "details/:objectId/:viewId", component: DetailPanelViewComponent },
  { path: "details/:objectId", component: DetailPanelViewComponent },
  { path: "details", component: DetailPanelViewComponent },
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppSquareRoutingModule { }
