import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './admin/landing-page/landing-page.component';
import { PickUpManagementComponent } from './pick-up/pick-up-management/pick-up-management.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { AnalyticsComponent } from './admin/analytics/analytics/analytics.component';
import { RootComponent } from './admin/root/root/root.component';
import { CouponComponent } from './admin/Coupon-Management/coupon/coupon.component';
import { MenuComponent } from './user/menu/menu.component';
import { CartComponent } from './user/cart/cart.component';
import { MenuManagementComponent } from './admin/Menu-Management/menu-management/menu-management.component';
import { PickUpStatusEditComponent } from './pick-up/pick-up-status-edit/pick-up-status-edit.component';
import { UserRoleManagementComponent } from './user-role/user-role-management/user-role-management.component';
import { UserRoleEditComponent } from './user-role/user-role-edit/user-role-edit.component';
import { WalletComponent } from './wallet/wallet.component';
import { WalletAdminComponent } from './wallet-admin/wallet-admin.component';
import { OrderManagementComponent } from './order-management/order-management.component';
import { LoginComponent } from './login/login/login.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:"login",
    component: LoginComponent
  },
  {
    path: "admin",
    component: NavbarComponent,
    children: [
      // Admin's Child Routes
      {
        path: "",
        component: LandingPageComponent
      },
      {
        path: "pickupmanagement",
        component: PickUpManagementComponent,
        title : "pick-Up"
      },
      {
        path: "pickupmanagement/:id/edit",
        component: PickUpStatusEditComponent,
        title : "pick-Up-status-update"
      },
      {
        path: "analytics",
        component: AnalyticsComponent
      },
      {

        path: 'coupons',
        component: CouponComponent
      },
      {
        path: "order-history",
        component: OrderHistoryComponent
      },
      {
        path: "menu-management",
        component: MenuManagementComponent
      },
      {
        path:"user-role",
        component:UserRoleManagementComponent,
        title:'User-Role'
      },
      {
        path: "user-role/:id/edit",
        component: UserRoleEditComponent,
        title : "user-role-update"
      },
      {
        path: "wallet",
        component: WalletAdminComponent,
        title: "wallet"
      },
      {
        path: "order-management",
        component: OrderManagementComponent,
        title: "order-management"
      },
    ]
  },

  {
    path: "user",
    component: NavbarComponent,
    children: [
      // User childers
      {
        path: "menu",
        component: MenuComponent
      },
      {
        path: "cart",
        component: CartComponent
      },
      {
        path: "wallet",
        component: WalletComponent
      },
    ]
  },


  //Don't put all paths here please

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
