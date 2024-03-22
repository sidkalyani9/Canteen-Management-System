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

  navHome2(){
    this.btn = 2;
    this.router.navigate(['admin'])
  }
  
  

}
