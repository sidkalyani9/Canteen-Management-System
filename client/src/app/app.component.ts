import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import { faBars, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  btn=1;
  faBars = faBars;
  faUser = faUserCircle;
  title = 'client';

  constructor(private router: Router) {}
  
  navHome(){
    this.btn = 1;
    this.router.navigate(['admin'])
  }

  navEditMenu(){
    this.btn = 2;
    this.router.navigate(['admin/menu-management'])
  }

  navAnalytics(){
    this.btn = 3;
    this.router.navigate(['admin/analytics'])
  }

  navPickup(){
    this.btn = 4;
    this.router.navigate(['admin/pickupmanagement'])
  }

  navCoupon(){
    this.btn = 5;
    this.router.navigate(['admin/coupons'])
  }
  
  navOrderHistory(){
    this.btn = 6;
    this.router.navigate(['admin/order-history'])
  }

  navUserMenu(){
    this.btn = 7;
    this.router.navigate(['user/menu'])
  }

  navUserRole(){
    this.btn=8;
    this.router.navigate(['admin/user-role'])
  }
  
}
