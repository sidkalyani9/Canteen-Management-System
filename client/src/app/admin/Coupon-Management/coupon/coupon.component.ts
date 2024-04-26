import { Component, OnInit } from '@angular/core';
import { Coupons } from './Coupons';
import { CouponService } from './Coupon.Service';
import { NgForm } from '@angular/forms';
import { error } from 'jquery';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrl: './coupon.component.css',
})
export class CouponComponent implements OnInit {
  public coupons: Coupons[] = [];
  public editCouponvalue: Coupons= {couponName: "",  description: "",activeTill:new Date(),discountType: "",deductionAmount:0,minValue:0,couponId:0};
  public deleteCouponvalue: Coupons= {couponName:"",  description: "",activeTill:new Date(),discountType: "",deductionAmount:0,minValue:0,couponId:0};

  constructor(private couponService: CouponService) { }
  ngOnInit(): void { this.getallCoupons(); 
    // this.editCouponvalue={couponName: "",  description: "",activeTill:new Date(),discountType: "",deductionAmount:0,minValue:0};
  }
  //get all coupons
  public getallCoupons(): void {
    this.couponService.getallCoupons().subscribe({
      next: (response: Coupons[]) => { this.coupons = response },
      error: (error) => console.log('Error')
    });
  }

  // ---------------------------------------------------------------------------------------
  // edit modal functions
  editModal(coupon : Coupons): void { 
   
    this.editCouponvalue=coupon;  
   
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
      this.getallCoupons();
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
  deleteModal(coupon:Coupons): void {
    this.deleteCouponvalue=coupon;
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
      this.closeaddmodal();
      couponform.resetForm();
    });
  }
  deleteCoupon(couponId:number) {
    this.couponService.deleteCoupon(couponId).subscribe(()=>{
      this.getallCoupons();
      this.closeDeleteModal();
      
    });
  }
  editcoupon(coupon : NgForm):void {
    this.couponService.updateCoupon(coupon.value).subscribe((data: any) =>{     
      console.log("Update Successful");
      this.closeeditmodal();
    });
  }



}
