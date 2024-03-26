import { Component, ViewChild } from '@angular/core';


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



}

