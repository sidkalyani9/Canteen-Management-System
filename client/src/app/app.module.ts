import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './admin/landing-page/landing-page.component';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PickUpManagementComponent } from './pick-up-management/pick-up-management.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { CouponComponent } from './admin/Coupon-Management/coupon/coupon.component';
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



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    FooterComponent,
    PickUpManagementComponent,
    OrderHistoryComponent

    CouponComponent,
    PickUpManagementComponent,
    AnalyticsComponent,
    RootComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
<<<<<<< HEAD
    HttpClientModule,
    CommonModule,
    FormsModule

    
=======
    FormsModule,
    HttpClientModule,
>>>>>>> e9fba863dec65eebecb5ed607490a78dc0f0038b
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
