import { Component, ViewChild, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';


interface Supplier {
  name: string,
  address: string,
  phone: string,
  email: string 

}

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrl: './order-history.component.css'
})
export class OrderHistoryComponent {

  showAllOrders() {
    console.log("all orders")
  }

  showCompletedOrders() {
    console.log("completed orders")
  }

  showCancelledOrders() {
    console.log("Cancelled orders")
  }

  suppliers: Array<Supplier> = [
    { name: 'supplier 1', address: 'address 1', phone: '376634928', email: 'supp@gmail.com' },
    { name: 'supplier 2', address: 'address 2', phone: '376634928', email: 'supp@gmail.com' },
    { name: 'supplier 3', address: 'address 1', phone: '376634928', email: 'supp@gmail.com' },
    { name: 'supplier 4', address: 'address 1', phone: '376634928', email: 'supp@gmail.com' },
    { name: 'supplier 5', address: 'address 1', phone: '376634928', email: 'supp@gmail.com' },
    { name: 'supplier 6', address: 'address 1', phone: '376634928', email: 'supp@gmail.com' },
    { name: 'supplier 7', address: 'address 1', phone: '376634928', email: 'supp@gmail.com' },
    { name: 'supplier 8', address: 'address 1', phone: '376634928', email: 'supp@gmail.com' },
    { name: 'supplier 9', address: 'address 1', phone: '376634928', email: 'supp@gmail.com' },
    { name: 'supplier 10', address: 'address 1', phone: '376634928', email: 'supp@gmail.com' },
    { name: 'supplier 11', address: 'address 1', phone: '376634928', email: 'supp@gmail.com' },
    { name: 'supplier 12', address: 'address 1', phone: '376634928', email: 'supp@gmail.com' },
    { name: 'supplier 13', address: 'address 1', phone: '376634928', email: 'supp@gmail.com' },
    { name: 'supplier 14', address: 'address 1', phone: '376634928', email: 'supp@gmail.com' },
    { name: 'supplier 15', address: 'address 1', phone: '376634928', email: 'supp@gmail.com' },
    { name: 'supplier 16', address: 'address 1', phone: '376634928', email: 'supp@gmail.com' },
    { name: 'supplier 17', address: 'address 1', phone: '376634928', email: 'supp@gmail.com' },
    { name: 'supplier 18', address: 'address 1', phone: '376634928', email: 'supp@gmail.com' },
    { name: 'supplier 19', address: 'address 1', phone: '376634928', email: 'supp@gmail.com' },
    { name: 'supplier 20', address: 'address 1', phone: '376634928', email: 'supp@gmail.com' }
  ]
  currentPage: number = 1;
  pageSize: number = 5;

  ngOnInit() {
    this.visibledata();

  }

  visibledata() {
    console.log(this.suppliers.slice(0, 5));

  }


}

