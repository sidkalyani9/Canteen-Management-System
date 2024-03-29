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

import {CheckboxModule} from 'primeng/checkbox';
import {TableModule} from 'primeng/table';
import { MenuManagementComponent } from './admin/Menu-Management/menu-management/menu-management.component';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button'; 
import { TabViewModule } from 'primeng/tabview';
import { PrimeIcons } from 'primeng/api';



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
    MenuManagementComponent,

  ],
  imports: [
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
    TabViewModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

//PrimeNg
export { PrimeIcons };
