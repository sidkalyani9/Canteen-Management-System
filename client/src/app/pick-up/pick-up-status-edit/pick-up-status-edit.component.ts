import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PickUpOrderDataService } from '../../service/pick-up-order-data.service';

@Component({
  selector: 'app-pick-up-status-edit',
  templateUrl: './pick-up-status-edit.component.html',
  styleUrl: './pick-up-status-edit.component.css'
})
export class PickUpStatusEditComponent implements OnInit{
 
  orderNo!: any;

  constructor(private route : ActivatedRoute , private pickUpUserData: PickUpOrderDataService){}
  ngOnInit(): void {
      this.orderNo = this.route.snapshot.paramMap.get('id');
      alert(this.orderNo);

      // this.pickUpUserData.pickUpUser(this.orderNo).subscribe(res=>{
      //   console.log(res)
      // })
  }

  updatePayment(){

  }
}
