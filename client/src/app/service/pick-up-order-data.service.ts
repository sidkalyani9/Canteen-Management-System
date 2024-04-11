import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { data } from 'jquery';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PickUpOrderDataService {

  url: any = '';

  constructor(private httpClient: HttpClient) { }

  // pickUpUsers(): Observable<any[]> {
  //   // return this.http.get(this.url);

  //   const data = [
  //     {order_no : '90', customer_name : 'Mr.Anghan Darshan', customer_mo_no : '9898181761',status:'pending',payment_method:''},
  //     {order_no : '91', customer_name : 'Mr.Dabhi Kunj', customer_mo_no : '5426548596',status:'pending',payment_method:''},
  //     {order_no : '92', customer_name : 'Mr.Tukadiya Raj', customer_mo_no : '8546325468',status:'pending',payment_method:''},
  //     {order_no : '93', customer_name : 'Mr.Anghan Darshan', customer_mo_no : '9898181761',status:'pending',payment_method:''},
  //     {order_no : '94', customer_name : 'Mr.Dabhi Kunj', customer_mo_no : '5426548596',status:'pending',payment_method:''},
  //     {order_no : '95', customer_name : 'Mr.Tukadiya Raj', customer_mo_no : '8546325468',status:'pending',payment_method:''},
  //     {order_no : '96', customer_name : 'Mr.Anghan Darshan', customer_mo_no : '9898181761',status:'pending',payment_method:''},
  //     {order_no : '97', customer_name : 'Mr.Dabhi Kunj', customer_mo_no : '5426548596',status:'pending',payment_method:''},
  //     {order_no : '98', customer_name : 'Mr.Tukadiya Raj', customer_mo_no : '8546325468',status:'pending',payment_method:''},
  //     {order_no : '99', customer_name : 'Mr.Anghan Darshan', customer_mo_no : '9898181761',status:'pending',payment_method:''}]
  //   return of(data);
  // }

  // pickUpUser(orderNo:number):Observable<any[]>{
  //   const data = [
  //     {order_no : '90', customer_name : 'Mr.Anghan Darshan', customer_mo_no : '9898181761',status:'pending',payment_method:''},
  //     {order_no : '91', customer_name : 'Mr.Dabhi Kunj', customer_mo_no : '5426548596',status:'pending',payment_method:''},
  //     {order_no : '92', customer_name : 'Mr.Tukadiya Raj', customer_mo_no : '8546325468',status:'pending',payment_method:''},
  //     {order_no : '93', customer_name : 'Mr.Anghan Darshan', customer_mo_no : '9898181761',status:'pending',payment_method:''},
  //     {order_no : '94', customer_name : 'Mr.Dabhi Kunj', customer_mo_no : '5426548596',status:'pending',payment_method:''},
  //     {order_no : '95', customer_name : 'Mr.Tukadiya Raj', customer_mo_no : '8546325468',status:'pending',payment_method:''},
  //     {order_no : '96', customer_name : 'Mr.Anghan Darshan', customer_mo_no : '9898181761',status:'pending',payment_method:''},
  //     {order_no : '97', customer_name : 'Mr.Dabhi Kunj', customer_mo_no : '5426548596',status:'pending',payment_method:''},
  //     {order_no : '98', customer_name : 'Mr.Tukadiya Raj', customer_mo_no : '8546325468',status:'pending',payment_method:''},
  //     {order_no : '99', customer_name : 'Mr.Anghan Darshan', customer_mo_no : '9898181761',status:'pending',payment_method:''}]
  //   return of(data);
  // }

  getOrder(order_no:number){
    return this.httpClient.get(`https://6607c09da2a5dd477b135df0.mockapi.io/orderapi/${order_no}`)
  }

  getOrders(){
    return this.httpClient.get(`https://6607c09da2a5dd477b135df0.mockapi.io/orderapi`)
  }

  updateOrder(inputData:object, order_no:number){
    return this.httpClient.put(`https://6607c09da2a5dd477b135df0.mockapi.io/orderapi/${order_no}`,inputData)
  }

}
