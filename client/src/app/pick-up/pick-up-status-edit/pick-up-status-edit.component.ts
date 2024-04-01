import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PickUpOrderDataService } from '../../service/pick-up-order-data.service';

@Component({
  selector: 'app-pick-up-status-edit',
  templateUrl: './pick-up-status-edit.component.html',
  styleUrl: './pick-up-status-edit.component.css'
})

export class PickUpStatusEditComponent implements OnInit{
  
  order!:any;
  payment!:any;
 
  order_no!: any;

  constructor(private route : ActivatedRoute , private pickUpUserData: PickUpOrderDataService){}
  ngOnInit(): void {
      this.order_no = this.route.snapshot.paramMap.get('id');
      this.pickUpUserData.getOrder(this.order_no).subscribe((res:any)=>{
        console.log(res)
        this.order=res
      })
  }
  getData(data:any){
    this.payment=data.Payment_method
  }

  updatePayment(){
    var inputdata={
      order_no : this.order.order_no,
      customer_name : this.order.customer_name,
      customer_mo_no : this.order.customer_mo_no,
      payment : this.payment
      
    }

    this.pickUpUserData.updateOrder(inputdata,this.order_no).subscribe({
      next:(res:any)=>{
        console.log(res);
        alert("succesfully updated")
    }
  });
  }
}
