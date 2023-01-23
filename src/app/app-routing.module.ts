import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddIndicatorComponent } from './admin/components/add-indicator/add-indicator.component';
import { LoginComponent } from './auth/login/login.component';
import { AddHotspotComponent } from './data-entry-module/add-hotspot/add-hotspot.component';
import { DashboardComponent } from './dashboar-module/dashboard/dashboard.component';
import { AddKvpClientComponent } from './data-entry-module/add-kvp-client/add-kvp-client.component';
import { AddTargetComponent } from './admin/components/add-target/add-target.component';


const routes: Routes = [
  { path:'',  component: LoginComponent, title: 'Login'},
  { path:'add-kvp-client', component: AddKvpClientComponent, title: 'Add New kvp client'},
  { path:'add-hotspot', component: AddHotspotComponent, title: 'Add New Hotspot'},
  { path:'add-indicator', component: AddIndicatorComponent, title: 'Add indicator'},
  { path:'add-target', component: AddTargetComponent, title: 'Add Target'},
  { path:'dashboard', component: DashboardComponent, title: 'Dashboard'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
