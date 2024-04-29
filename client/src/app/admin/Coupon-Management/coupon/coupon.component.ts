import { Component, OnInit } from '@angular/core';
import { Coupons } from './Coupons';
import { CouponService } from './Coupon.Service';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrl: './coupon.component.css',
})
export class CouponComponent implements OnInit {
  public coupons: Coupons[] = [];
  public editCouponvalue: Coupons = { couponName: "", description: "", activeTill: new Date(), discountType: "", deductionAmount: 0, minValue: 0, couponId: 0, couponCode: "" };
  public deleteCouponvalue: Coupons = { couponName: "", description: "", activeTill: new Date(), discountType: "", deductionAmount: 0, minValue: 0, couponId: 0, couponCode: "" };
  Today: Date = new Date();
  rupee: string = "";
  percentage: string = "";

  constructor(private couponService: CouponService ) {}
  ngOnInit(): void {
    this.getallCoupons();
    this.deleteExpiredCoupons();
  }
  //get all coupons
  public getallCoupons(): void {
    this.couponService.getallCoupons().subscribe({
      next: (response: Coupons[]) => { this.coupons = response },
      error: (error) => console.log('Error')
    });
  }
  setdiscountSymbol(coupon: Coupons): void {
    if (coupon.discountType == "percentage") { this.percentage = "%", this.rupee = "" } else { this.rupee = "₹", this.percentage = "" };
    return;
  }
  deleteExpiredCoupons(): void {
    for (let coupon of this.coupons) {
      if (coupon.activeTill < this.Today) {
        console.log(coupon,"deleted");
        this.deleteCoupon(coupon.couponId);
      }
    }
  }

    // ---------------------------------------------------------------------------------------
    // edit modal functions
    editModal(coupon : Coupons): void {

      this.editCouponvalue = coupon;
      this.setdiscountSymbol(coupon);
      const modal = document.getElementById('editCouponModal');
      if(modal != null) {
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

  closeaddmodal(addCoupon: NgForm) {
    this.resetaddModal(addCoupon);
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
  resetaddModal(addCoupon: NgForm): void {
    addCoupon.reset();
  }
  // -------------------------------------------------------------------------------------
  //delete modal functions
  deleteModal(coupon: Coupons): void {
    this.deleteCouponvalue = coupon;
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
    if (couponform.value.discountType === 'percentage' && couponform.value.deductionAmount >= 100) {
      alert("Discount value must be less than 100 for Percentage discount .");
      return;
    } if (new Date(couponform.value.activeTill) < this.Today) {
      alert("Active Till date should be in future.");
      return;
    } if (couponform.value.discountType === 'flat' && couponform.value.minValue < couponform.value.deductionAmount) {
      alert("Minimun value of order should be greater than deduntion amount .");
      return;
    }
    else {
      this.couponService.addnewCoupon(couponform.value).subscribe(() => {
        this.getallCoupons();
        this.closeaddmodal(couponform);
        couponform.resetForm();
      });
    }
  }
  deleteCoupon(couponId: number) {
    this.couponService.deleteCoupon(couponId).subscribe(() => {
      this.getallCoupons();
      this.closeDeleteModal();

    });
  }
  editcoupon(couponform: NgForm): void {
    if (couponform.value.discountType === 'percentage' && couponform.value.deductionAmount >= 100) {
      alert("Discount value must be less than 100 for Percentage discount .");
      return;
    } if (new Date(couponform.value.activeTill) < this.Today) {
      alert("Active Till date should be in future.");
      return;
    } if (couponform.value.discountType === 'flat' && couponform.value.minValue < couponform.value.deductionAmount) {
      alert("Minimun value of order should be greater than deduntion amount .");
      return;
    }
    else {
      const couponToUpdate = {
        couponId: this.editCouponvalue.couponId,
        couponCode: this.editCouponvalue.couponCode,
        couponName: couponform.value.couponName,
        activeTill: couponform.value.activeTill,
        description: couponform.value.description,
        discountType: couponform.value.discountType,
        deductionAmount: couponform.value.deductionAmount,
        minValue: couponform.value.minValue
      };
      this.couponService.updateCoupon(couponToUpdate).subscribe((data: any) => {
        this.closeeditmodal();
      });
    }
  }



}
