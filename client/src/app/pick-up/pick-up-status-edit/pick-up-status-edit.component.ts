import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PickUpOrderDataService } from '../../service/pick-up-order-data.service';
import { data } from 'jquery';

@Component({
  selector: 'app-pick-up-status-edit',
  templateUrl: './pick-up-status-edit.component.html',
  styleUrl: './pick-up-status-edit.component.css'
})

export class PickUpStatusEditComponent implements OnInit{
  
  order!:any;
  payment!:any;
  isLoading:boolean=false;
 
  order_no!: any;

  constructor(private router:Router,private route : ActivatedRoute , private pickUpUserData: PickUpOrderDataService){}
  ngOnInit(): void {
    this.isLoading=true;
      this.order_no = this.route.snapshot.paramMap.get('id');
      this.pickUpUserData.getOrder(this.order_no).subscribe((res:any)=>{
        console.log(res)
        this.order=res
      })
      this.isLoading=false;
  }
 

  updatePayment(data:any){
    this.isLoading=true;
    this.payment=data.Payment_method
    var inputdata={
      // order_no : this.order.order_no,
      // customer_name : this.order.customer_name,
      // customer_mo_no : this.order.customer_mo_no,
      payment : this.payment
      
    }

    this.pickUpUserData.updateOrder(inputdata,this.order_no).subscribe({
      next:(res:any)=>{
        console.log(res);
        alert("succesfully updated")
        this.router.navigateByUrl('/admin/pickupmanagement');
    }
  });
  this.isLoading=false;
  }
}
