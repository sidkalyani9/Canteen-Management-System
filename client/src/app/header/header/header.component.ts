import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  faUserCircle = faUserCircle;
  @Input() toggleSideNav!: () => void;

  toggleParentSidenav(){
    console.log("Sidenav")
    this.toggleSideNav();
  }
}
