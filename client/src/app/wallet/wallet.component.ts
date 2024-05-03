import { Component, OnDestroy, OnInit } from '@angular/core';
import { WalletService } from '../service/wallet/wallet.service';
import { Subject, takeUntil } from 'rxjs';
import { faIndianRupeeSign, faSearch } from '@fortawesome/free-solid-svg-icons';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.css',
  providers: [DatePipe]
})
export class WalletComponent implements OnInit, OnDestroy {
  public searchIcon = faSearch
  rupeeIcon = faIndianRupeeSign
  walletBalance: number = 400;
  private $destroyWalletSubject = new Subject<void>();
  walletDetails: any[] = [];

  constructor(private _walletService: WalletService) { }

  ngOnDestroy(): void {
    this.$destroyWalletSubject.next();
    this.$destroyWalletSubject.complete();
  }

  ngOnInit() {
    this.getWalletData();
  }

  getWalletData(){
    this._walletService.getUserWallet("A1025")
    .pipe(takeUntil(this.$destroyWalletSubject))
      .subscribe(data => {
        console.log(data)
        this.walletDetails = data;
      })
  }

  transactionType(amount: any){
    if(amount<0){
      return "Debit";
    }
    else{
      return "Credit"
    }
  }
}
