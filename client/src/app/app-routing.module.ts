import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './admin/landing-page/landing-page.component';
import { PickUpManagementComponent } from './pick-up-management/pick-up-management.component';
import { AnalyticsComponent } from './admin/analytics/analytics/analytics.component';
import { RootComponent } from './admin/root/root/root.component';

const routes: Routes = [
  {
    path:"admin",
    component: RootComponent,
    children: [
      // Admin's Child Routes
      {
        path:"",
        component: LandingPageComponent
      },
      {
        path:"pickupmanagement",
        component: PickUpManagementComponent
      },
      {
        path:"analytics",
        component: AnalyticsComponent
      },

    ]
  }

  //Don't put all paths here please

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
