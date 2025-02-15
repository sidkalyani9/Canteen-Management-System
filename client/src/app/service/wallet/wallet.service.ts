import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(private http: HttpClient) { }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error)
  }


  getUserWallet(userId: any) {
    return this.http.put<any>(`http://localhost:8080/walletHistory/getEmployeeWalletHistory`, { employeeId: userId });
    // .pipe(catchError(this.errorHandler))
  }

  getAllUserWallet(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8080/user/findAllUser`);
  }

  addAmountToAll(amount: number): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/walletHistory/addAmountToAll/${amount}`, { amountToAdd: amount });
  }

  addAmountToUser(employeeId: string, amount: number): Observable<any> {
    const requestBody = { amountToAdd: amount }
    return this.http.post<any>(`http://localhost:8080/walletHistory/addAmountToUserWallet/${employeeId}`, requestBody);
  }
}
