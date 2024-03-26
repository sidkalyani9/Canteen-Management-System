import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PickUpOrderDataService {

  url: any = '';

  constructor(private http: HttpClient) { }

  pickUpUsers(): Observable<any[]> {
    // return this.http.get(this.url);

    const data = [
      {order_no : '90', customer_name : 'Mr.Anghan Darshan', customer_mo_no : '9898181761'},
      {order_no : '91', customer_name : 'Mr.Dabhi Kunj', customer_mo_no : '5426548596'},
      {order_no : '92', customer_name : 'Mr.Tukadiya Raj', customer_mo_no : '8546325468'},
      {order_no : '90', customer_name : 'Mr.Anghan Darshan', customer_mo_no : '9898181761'},
      {order_no : '91', customer_name : 'Mr.Dabhi Kunj', customer_mo_no : '5426548596'},
      {order_no : '92', customer_name : 'Mr.Tukadiya Raj', customer_mo_no : '8546325468'},
      {order_no : '90', customer_name : 'Mr.Anghan Darshan', customer_mo_no : '9898181761'},
      {order_no : '91', customer_name : 'Mr.Dabhi Kunj', customer_mo_no : '5426548596'},
      {order_no : '92', customer_name : 'Mr.Tukadiya Raj', customer_mo_no : '8546325468'},
      {order_no : '90', customer_name : 'Mr.Anghan Darshan', customer_mo_no : '9898181761'},
      {order_no : '91', customer_name : 'Mr.Dabhi Kunj', customer_mo_no : '5426548596'},
      {order_no : '92', customer_name : 'Mr.Tukadiya Raj', customer_mo_no : '8546325468'},
      {order_no : '90', customer_name : 'Mr.Anghan Darshan', customer_mo_no : '9898181761'},
      {order_no : '91', customer_name : 'Mr.Dabhi Kunj', customer_mo_no : '5426548596'},
      {order_no : '92', customer_name : 'Mr.Tukadiya Raj', customer_mo_no : '8546325468'},
      {order_no : '90', customer_name : 'Mr.Anghan Darshan', customer_mo_no : '9898181761'},
      {order_no : '91', customer_name : 'Mr.Dabhi Kunj', customer_mo_no : '5426548596'},
      {order_no : '92', customer_name : 'Mr.Tukadiya Raj', customer_mo_no : '8546325468'}]
    return of(data);
  }

}
