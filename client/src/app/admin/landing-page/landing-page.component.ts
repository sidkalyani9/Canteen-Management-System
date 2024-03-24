import { Component } from '@angular/core';
import { faIndianRupeeSign, faStar, faPlateWheat } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  rupeeIcon = faIndianRupeeSign
  starIcon = faStar
  plateIcon = faPlateWheat
}
