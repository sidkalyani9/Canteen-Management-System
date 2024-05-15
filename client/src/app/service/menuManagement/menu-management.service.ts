import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Dish } from '../../admin/Menu-Management/Dish';

@Injectable({
  providedIn: 'root'
})
export class MenuManagementService {

  private baseUrl="http://localhost:8089/menu"

  constructor(private http:HttpClient) { }

  getMenu():Observable<any>{
    return this.http.get(this.baseUrl+"/all")
  }

  saveDish(newDish: Dish): Observable<any> {
    // Implement method to save a new dish to the backend API
    return this.http.post(this.baseUrl+"/add", newDish);
  }

  updateDish(updatedDish: Dish): Observable<any> {
    return this.http.put(`${this.baseUrl}/update`, updatedDish);
  }

  deleteDish(uuid: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${uuid}`);
  }

  // addDish(dish:any):Observable<any>{
  //   return this.http.post("http://localhost:8089/menu/add",dish);
  // }

//   getMenu():Observable<Dish[]>{
//     return this.http.get<Dish[]>(`${this.baseUrl}`);
//   }

//   createEmployee(dish:Dish):Observable<Object>{
// return this.http.post(`${this.baseUrl}`,dish);
//   }

//   // getEmployeeById(uuid: number): Observable<Dish>{
//   //   return this.http.get<Dish>(`${this.baseUrl}/${uuid}`);
//   // }

//   updateEmployee(uuid: number, dish: Dish): Observable<Object>{
//     return this.http.put(`${this.baseUrl}/${uuid}`, dish);
//   }

//   deleteEmployee(uuid: number): Observable<Object>{
//     return this.http.delete(`${this.baseUrl}/${uuid}`);
//   }
}
