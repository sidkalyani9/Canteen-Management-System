import { Injectable } from '@angular/core';
import { Coupons } from './coupon/Coupons';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    public coupons:Coupons[]=[];
}
