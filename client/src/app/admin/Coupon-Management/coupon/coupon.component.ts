import { Component, OnInit } from '@angular/core';
import { Coupons } from './Coupons';
import { CouponService } from './Coupon.Service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrl: './coupon.component.css',
})
export class CouponComponent implements OnInit {
  public coupons: Coupons[] = [];
  constructor(private couponService: CouponService) { }
  ngOnInit(): void { this.getallCoupons(); }
  //get all coupons
  public getallCoupons(): void {
    this.couponService.getallCoupons().subscribe({
      next: (response: Coupons[]) => { this.coupons = response, console.log(this.coupons) },

      error: (error) => console.log('Error'),
      complete: () => console.log("complete")
    });
  }

  // ---------------------------------------------------------------------------------------
  // edit modal functions
  editModal(): void {
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
  //delete modal functions
  deleteModal(): void {
    const modal = document.getElementById('deleteCouponModal');
    if (modal != null) {
      modal.style.display = 'block';
    } else {
      alert('Unknown error occoured');
    }
  }
  closeDeleteModal() {
    const modal = document.getElementById('deleteCouponModal');
    if (modal != null) {
      modal.style.display = 'none';
    }
  }
  // ----------------------------------------------------------------------------------------
  // database functions
  addcoupon(couponform: NgForm): void {
    this.couponService.addnewCoupon(couponform.value).subscribe(() => {
      console.log(couponform.value);
      this.getallCoupons();
    });
  }
  deleteCoupon() {

  }
  editcoupon(arg0: any) {

  }



}
