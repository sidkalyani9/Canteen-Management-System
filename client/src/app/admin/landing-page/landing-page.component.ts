import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faIndianRupeeSign, faStar, faPlateWheat } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

  clickedBtn:any;
  rupeeIcon = faIndianRupeeSign
  starIcon = faStar
  plateIcon = faPlateWheat

}
