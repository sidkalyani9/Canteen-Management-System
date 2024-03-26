import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrl: './coupon.component.css',
})
export class CouponComponent implements OnInit {
deleteCoupon() {
throw new Error('Method not implemented.');
}
  // ---------------------------------------------------------------------------------------
  // edit modal functions
  editModal():void {
    const modal = document.getElementById('editCouponModal');
    if (modal != null) {
      modal.style.display = 'block';
    } else {
      alert('Please fill the coupon details correctly!');
      console.log("Error in displaying Edit Modal");
    }

  }
  closeeditmodal() {
    const modal = document.getElementById('editCouponModal');
    if (modal != null) {
      modal.style.display = 'none';
    }
  }
// ----------------------------------------------------------------------------------------

  // add modal functions

  closeaddmodal() {
    const modal = document.getElementById('addCouponModal');
    if (modal != null) {
      modal.style.display = 'none';
    }
  }
  addModal(): void {
    const modal = document.getElementById('addCouponModal');
    if (modal != null) {
      modal.style.display = 'block';
    } else {
      alert('Please fill the coupon details first!');
    }
  }
  // -------------------------------------------------------------------------------------
  // database functions
  addcoupon(arg0: any) {
    throw new Error('Method not implemented.');
  }


  ngOnInit(): void { }

}
