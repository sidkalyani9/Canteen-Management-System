import { Component } from '@angular/core';
import { WalletService } from '../service/wallet/wallet.service';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-wallet-admin',
  templateUrl: './wallet-admin.component.html',
  styleUrl: './wallet-admin.component.css'
})
export class WalletAdminComponent {

  constructor(private _walletService: WalletService) { }
  public $destroyWalletSubject = new Subject<void>();

  customers: any[] = [
    { id: 1, name: 'John Doe', balance: 1000 },
    { id: 2, name: 'Jane Smith', balance: 1500 },
    { id: 3, name: 'Alice Johnson', balance: 2000 },
    { id: 4, name: 'Bob Brown', balance: 2500 },
    { id: 5, name: 'Emma Lee', balance: 3000 },
    { id: 6, name: 'Michael Davis', balance: 3500 },
    { id: 7, name: 'Jennifer Wilson', balance: 4000 },
    { id: 8, name: 'William Martinez', balance: 4500 },
    { id: 9, name: 'Sophia Taylor', balance: 5000 },
    { id: 10, name: 'Matthew Anderson', balance: 5500 },
    { id: 11, name: 'Olivia Thomas', balance: 6000 },
    { id: 12, name: 'Liam Hernandez', balance: 6500 },
    { id: 13, name: 'Isabella Moore', balance: 7000 },
    { id: 14, name: 'James Clark', balance: 7500 },
    { id: 15, name: 'Charlotte Lewis', balance: 8000 },
    { id: 16, name: 'Benjamin Robinson', balance: 8500 },
    { id: 17, name: 'Ava Walker', balance: 9000 },
    { id: 18, name: 'Mason Perez', balance: 9500 },
    { id: 19, name: 'Amelia Hall', balance: 10000 },
    { id: 20, name: 'Ethan Young', balance: 10500 },
    { id: 21, name: 'Harper Allen', balance: 11000 },
    { id: 22, name: 'Michael Parker', balance: 11500 },
    { id: 23, name: 'Evelyn Turner', balance: 12000 },
    { id: 24, name: 'Alexander Garcia', balance: 12500 },
    { id: 25, name: 'Abigail Edwards', balance: 13000 },
    { id: 26, name: 'Daniel Hill', balance: 13500 },
    { id: 27, name: 'Emily Scott', balance: 14000 },
    { id: 28, name: 'Elizabeth Green', balance: 14500 },
    { id: 29, name: 'Matthew Baker', balance: 15000 },
    { id: 30, name: 'Addison Adams', balance: 15500 },
    { id: 31, name: 'David Russell', balance: 16000 },
    { id: 32, name: 'Mia Long', balance: 16500 },
    { id: 33, name: 'Ella Flores', balance: 17000 },
    { id: 34, name: 'Noah Hughes', balance: 17500 },
    { id: 35, name: 'Chloe King', balance: 18000 },
    { id: 36, name: 'Victoria Morris', balance: 18500 },
    { id: 37, name: 'Samuel Brooks', balance: 19000 },
    { id: 38, name: 'Grace Jenkins', balance: 19500 },
    { id: 39, name: 'Nathan Rivera', balance: 20000 },
    { id: 40, name: 'Hannah Cox', balance: 20500 },
    { id: 41, name: 'Samantha Perry', balance: 21000 },
    { id: 42, name: 'Logan Ross', balance: 21500 },
    { id: 43, name: 'Lily Ward', balance: 22000 },
    { id: 44, name: 'Gabriel Coleman', balance: 22500 },
    { id: 45, name: 'Dylan Mitchell', balance: 23000 },
    { id: 46, name: 'Zoe Barnes', balance: 23500 },
    { id: 47, name: 'Anthony Stewart', balance: 24000 },
    { id: 48, name: 'Alyssa Murphy', balance: 24500 },
    { id: 49, name: 'Christopher Cook', balance: 25000 },
    { id: 50, name: 'Leah Patterson', balance: 25500 }
  ];



  allUsers: any[] = [];
  displayedCustomers: any[] = [];
  searchQuery: string = '';
  pageSize: number = 10;
  currentPage: number = 1;
  totalPages: number = 1;
  pages: number[] = [];
  amountToAddToAll: any;
  showAddAllBalanceForm: boolean = false;
  showAddToUserBalanceForm: boolean = false;
  walletDetails: any[] = [];
  employeeId: string = '';
  amountToAddToUser: number = 0;

  private subscription: Subscription;

  ngOnInit() {
    this.updateDisplayedUsers();
    this.fetchAllUsersWallet();
  }

  async fetchAllUsersWallet(): Promise<void> {
    this.subscription = await this._walletService.getAllUserWallet().subscribe(async (allUsers: any[]) => {
      this.allUsers = await allUsers;
      console.log(this.allUsers);
    });
  }



  // updateDisplayedUsers() {
  //   let filteredUsers = this.allUsers;

  //   if (this.searchQuery) {
  //     filteredUsers = this.allUsers.filter(user => {
  //       return (
  //         user.employeeId.toString().includes(this.searchQuery.toLowerCase()) ||
  //         user.uname.toLowerCase().includes(this.searchQuery.toLowerCase())
  //       );
  //     });
  //   }

  //   this.totalPages = Math.ceil(filteredUsers.length / this.pageSize);
  //   this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);

  //   const startIndex = (this.currentPage - 1) * this.pageSize;
  //   this.displayedCustomers = filteredUsers.slice(startIndex, startIndex + this.pageSize);
  // }

  updateDisplayedUsers() {
    let filteredUsers = this.allUsers;

    if (this.searchQuery.trim() !== '') {
      const lowerCaseQuery = this.searchQuery.toLowerCase().trim();
      filteredUsers = this.allUsers.filter(user => {
        return (
          user.employeeId.toString().includes(lowerCaseQuery) ||
          user.uname.toLowerCase().includes(lowerCaseQuery)
        );
      });
    }

    this.totalPages = Math.ceil(filteredUsers.length / this.pageSize);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);

    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.displayedCustomers = filteredUsers.slice(startIndex, startIndex + this.pageSize);
  }


  search() {
    this.currentPage = 1;
    this.updateDisplayedUsers();
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateDisplayedUsers();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateDisplayedUsers();
    }
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.updateDisplayedUsers();
  }

  toggleAddBalance(user: any): void {
    this.showAddToUserBalanceForm = true;
    this.employeeId = user.employeeId;
    console.log(this.employeeId);
    console.log(user);
  }

  saveAddedBalance(): void {
    
    if (this.employeeId != null && this.amountToAddToUser > 0) {
      this._walletService.addAmountToUser(this.employeeId, this.amountToAddToUser).subscribe((Response) => {
        console.log(Response);

      }
        ,
        error => {
          console.log(error);
        });
    }
    console.log(this.employeeId);
    console.log(this.amountToAddToUser);
    this.showAddToUserBalanceForm = false;
    this.amountToAddToUser = 0;
    this.employeeId = "";

    this.reloadPage();

  }

  reloadPage() {
    this.subscription.unsubscribe();
    this.fetchAllUsersWallet();
    setTimeout(function () {
      window.location.reload();
    }, 0);
  }




  cancelAddBalance(customer: any): void {
    this.showAddToUserBalanceForm = false;
  }

  toggleAddAllBalanceForm(): void {
    this.showAddAllBalanceForm = !this.showAddAllBalanceForm;
    if (this.showAddAllBalanceForm) {
      this.amountToAddToAll = null;
    }
  }

  addAllBalance(): void {

    this._walletService.addAmountToAll(this.amountToAddToAll).subscribe((response) => {
      console.log(response);
    },
      error => {
        console.log(error);
      });
    this.showAddAllBalanceForm = false;
    this.amountToAddToAll = null;
    this.reloadPage();
  }

  cancelAddAllBalance(): void {
    this.showAddAllBalanceForm = false;
  }


}
