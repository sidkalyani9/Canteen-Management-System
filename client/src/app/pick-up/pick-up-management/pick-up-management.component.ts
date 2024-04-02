import { NgModule } from '@angular/core';
import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { PickUpOrderDataService } from '../../service/pick-up-order-data.service';


@Component({
  selector: 'app-pick-up-management',
  templateUrl: './pick-up-management.component.html',
  styleUrl: './pick-up-management.component.css',
  encapsulation: ViewEncapsulation.None
})
export class PickUpManagementComponent implements OnInit {

  pickUpUsers: any[] =[];

  constructor(private pickUpOrderDataService:PickUpOrderDataService) { }
  
  ngOnInit(): void {
    this.pickUpUserList();
  
  }

  pickUpUserList(){
    this.pickUpOrderDataService.getOrders().subscribe((res: any) => {
      this.pickUpUsers = res;
      console.log(res);
    });
  }


  // data:any={};

  // getValue(){
  //   console.log(this.data);
    
  // }
  
  // array: any[] = [
  //   {
  //     order_no: "90",
  //     customer_name: "Darshan",
  //     customer_mo_no: "9898181761"
  //   },
  //   {
  //     order_no: "91",
  //     customer_name: "Darshan",
  //     customer_mo_no: "9898181761"
  //   },
  //   {
  //     order_no: "92",
  //     customer_name: "Darshan",
  //     customer_mo_no: "9898181761"
  //   }
  // ];
}