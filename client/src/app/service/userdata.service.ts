import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private httpClient:HttpClient) {}

  getUsers(){
    return this.httpClient.get(`https://6607c09da2a5dd477b135df0.mockapi.io/student/studentapi`)
  }
}
