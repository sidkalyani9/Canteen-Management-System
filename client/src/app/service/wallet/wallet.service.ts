import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(private http:HttpClient) { }

  errorHandler(error: HttpErrorResponse){
    return throwError(error)
  }

  getUserWallet(userId:any){
    return this.http.put<any>(`http://localhost:8080/walletHistory/getEmployeeWalletHistory`,{employeeId: userId});
    // .pipe(catchError(this.errorHandler))
  }
}
