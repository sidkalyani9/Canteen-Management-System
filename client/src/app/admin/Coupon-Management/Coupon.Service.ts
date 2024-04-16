import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Coupons } from "./coupon/Coupons";
import { Injectable } from "@angular/core";
@Injectable({
    providedIn:'root'
})
export class CouponService{
    private apiServerUrl='http://localhost:8080';
    constructor(private http:HttpClient){}
    getallCoupons():Observable<Coupons[]>{
        return this.http.get<Coupons[]>(`${this.apiServerUrl}/Coupons/allCoupons`);
    }
    addnewCoupon(coupon:Coupons):Observable<Coupons>{
        return this.http.post<Coupons>(`${this.apiServerUrl}/Coupons/addCoupon`,coupon);
    }
    updateCoupon(coupon:Coupons):Observable<Coupons>{
        return this.http.put<Coupons>(`${this.apiServerUrl}/Coupons/updateCoupon`,coupon);
    }
    deleteCoupon(couponId:number):Observable<void>{
        return this.http.delete<void>(`${this.apiServerUrl}/Coupons/deleteCoupon/${couponId}`+couponId);
    }
}