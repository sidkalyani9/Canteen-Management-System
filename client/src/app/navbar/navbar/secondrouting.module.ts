import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondroutingRoutingModule } from './secondrouting-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavbarComponent } from './navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    SecondroutingRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  exports: [NavbarComponent]
})
export class SecondroutingModule { }
