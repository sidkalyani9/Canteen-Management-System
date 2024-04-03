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

  constructor(private router: Router) {
    // Retrieve the state from localStorage when the component initializes
    this.btn = parseInt(localStorage.getItem('btn') || '1', 10); // Default to 1 if no value found
  }

  onLinkClick(linkNumber: number) {
    // Update the activeLink variable and store it in localStorage
    this.btn = linkNumber;
    localStorage.setItem('btn', linkNumber.toString());
  }

  navHome(){
    this.onLinkClick(1);
    this.router.navigate(['admin']);
  }

  navEditMenu(){
    this.onLinkClick(2);
    this.router.navigate(['admin/menu-management'])
  }

  navAnalytics(){
    this.onLinkClick(3);
    this.router.navigate(['admin/analytics'])
  }

  navPickup(){
    this.onLinkClick(4);
    this.router.navigate(['admin/pickupmanagement'])
  }

  navCoupon(){
    this.onLinkClick(5);
    this.router.navigate(['admin/coupons'])
  }
  navUserMenu(){
    this.onLinkClick(6);
    this.router.navigate(['user/menu'])
  }


  navOrderHistory(){
    this.onLinkClick(7);
    this.router.navigate(['admin/order-history'])
  }

  navUserRole(){
    this.onLinkClick(8);
    this.router.navigate(['admin/user-role'])
  }

  navUserCart(){
    this.onLinkClick(10);
    this.router.navigate(['user/cart'])
  }
}
