import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './admin/landing-page/landing-page.component';
import { PickUpManagementComponent } from './pick-up-management/pick-up-management.component';

const routes: Routes = [
  {
    path:"admin",
    component: LandingPageComponent,
    children: [
      // Admin's Child Routes
    ]
  },
  {
    path:"pickupmanagement",
    component: PickUpManagementComponent,
    children: [
      // Admin's Child Routes
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
