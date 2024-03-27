import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './admin/landing-page/landing-page.component';
import { PickUpManagementComponent } from './pick-up-management/pick-up-management.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { AnalyticsComponent } from './admin/analytics/analytics/analytics.component';
import { RootComponent } from './admin/root/root/root.component';
import { CouponComponent } from './admin/Coupon-Management/coupon/coupon.component';

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
      {
        path:'coupons',
        component:CouponComponent
      },
      {
        path: "order-history",
        component: OrderHistoryComponent,
      }
    ]
  },


  //Don't put all paths here please

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
