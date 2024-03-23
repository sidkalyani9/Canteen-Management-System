import { Component } from '@angular/core';

@Component({
  selector: 'app-pick-up-management',
  templateUrl: './pick-up-management.component.html',
  styleUrl: './pick-up-management.component.css'
})
export class PickUpManagementComponent {

  constructor(){}
  array:any= [
    {
      order_no : "90",
      customer_name : "Darshan",
      customer_mo_no : "9898181761"
    },
    {
      order_no : "91",
      customer_name : "Darshan",
      customer_mo_no : "9898181761"
    },
    {
      order_no : "92",
      customer_name : "Darshan",
      customer_mo_no : "9898181761"
    }
  ]
}
