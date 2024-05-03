import { Component } from '@angular/core';
import { Coupons } from '../../admin/Coupon-Management/coupon/Coupons';
import { CouponService } from '../../admin/Coupon-Management/coupon/Coupon.Service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(private couponService: CouponService) { }
  // <------------------------------------------------------------------>
  coupons: Coupons[] = [];
  percentage: string = "";
  rupee: string = ";"

  public getallCoupons(): void {
    this.couponService.getallCoupons().subscribe({
      next: (response: Coupons[]) => { this.coupons = response ,console.log(this.coupons)},
      error: (error) => console.log('Error')
    });
  }

  showCoupons() {
    this.getallCoupons();
    const modal = document.getElementById("showCoupons");
    if (modal != null) {
      modal.style.display = "block";
    } else {
      alert('Add Items to cart first.');
    }
  }
  closeshowCoupon() {
    const modal = document.getElementById('showCoupons');
    if (modal != null) {
      modal.style.display = "none";
    }
  }
  // ------------------------
  setdiscountSymbol(coupon: Coupons): void {
    if (coupon.discountType == "percentage") { this.percentage = "%", this.rupee = "" } else { this.rupee = "₹", this.percentage = "" };
    return;
  }
  // <-------------------------------------------------------------------->
}
