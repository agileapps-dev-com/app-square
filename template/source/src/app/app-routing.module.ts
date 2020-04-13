import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: "login", loadChildren: "src/app/login/login.module#LoginModule" },
  { path: "AppSpace", loadChildren: "src/app/app-space/app-space.module#AppSpaceModule" },
  { path: "appSquare", loadChildren: "src/app/app-square/app-square.module#AppSquareModule" },
  { path: "", redirectTo: "appSquare", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
