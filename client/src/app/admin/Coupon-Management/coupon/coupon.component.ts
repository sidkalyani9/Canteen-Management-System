import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrl: './coupon.component.css',
})
export class CouponComponent implements OnInit {
closemodal() {
  const modal=document.getElementById('addCouponModal');
  if(modal!=null){
    modal.style.display='none';
  }
}

  addcoupon(arg0: any) {
    throw new Error('Method not implemented.');
  }

selectModal():void{
  const modal=document.getElementById('addCouponModal');
  if(modal!=null){
    modal.style.display='block';
  }else{
    alert('Please fill the coupon details first!');
  }
  
  

}
  ngOnInit(): void {}
  addCoupon() {}
}
