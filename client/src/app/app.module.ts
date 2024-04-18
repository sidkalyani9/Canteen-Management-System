import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './admin/landing-page/landing-page.component';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CouponComponent } from './admin/Coupon-Management/coupon/coupon.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PickUpManagementComponent } from './pick-up/pick-up-management/pick-up-management.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


import { CommonModule } from '@angular/common';
import { OrderHistoryComponent } from './order-history/order-history.component';


import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { AnalyticsComponent } from './admin/analytics/analytics/analytics.component';
import { RootComponent } from './admin/root/root/root.component';
import { MenuComponent } from './user/menu/menu.component';
import { PickUpStatusEditComponent } from './pick-up/pick-up-status-edit/pick-up-status-edit.component';

import {CheckboxModule} from 'primeng/checkbox';
import {TableModule} from 'primeng/table';
import { CartComponent } from './user/cart/cart.component';
import { MenuManagementComponent } from './admin/Menu-Management/menu-management/menu-management.component';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button'; 
import { TabViewModule } from 'primeng/tabview';
import { DialogModule } from 'primeng/dialog';

import { PrimeIcons } from 'primeng/api';
import { UserRoleManagementComponent } from './user-role/user-role-management/user-role-management.component';
import { UserRoleEditComponent } from './user-role/user-role-edit/user-role-edit.component';

import { WalletComponent } from './wallet/wallet.component';
import { WalletAdminComponent } from './wallet-admin/wallet-admin.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { LoaderComponent } from './partial/loader/loader.component';
import { OrderManagementComponent } from './order-management/order-management.component';
import { LoginComponent } from './login/login/login.component';

//Google OAuth
import { SocialLoginModule, SocialAuthServiceConfig, GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider
} from '@abacritt/angularx-social-login';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    FooterComponent,
    OrderHistoryComponent,
    CouponComponent,
    PickUpManagementComponent,
    AnalyticsComponent,
    RootComponent,
    MenuComponent,
    CartComponent,
    MenuManagementComponent,
    PickUpStatusEditComponent,
    UserRoleManagementComponent,
    UserRoleEditComponent,
    WalletComponent,
    WalletAdminComponent,
    LoaderComponent,
    OrderManagementComponent,
    LoginComponent,
  ],
  imports: [
    SocialLoginModule,
    GoogleSigninButtonModule,

    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,

    //Angular Material Modules
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    CommonModule,
    FormsModule,

    //PrimeNg Modules
    CheckboxModule,
    TableModule,
    PanelModule,
    ToastModule,
    ToolbarModule,
    ButtonModule,
    TabViewModule,
    DialogModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '920986533505-5jg8ra13nsh35h45f4v3osd3dou6lkqs.apps.googleusercontent.com'
            )
          },
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    },
    provideAnimationsAsync(),
    ConfirmationService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

//PrimeNg
export { PrimeIcons };
