import { Component, ViewChild, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { start } from '@popperjs/core';


interface Supplier {
  orderNo: string,
  customerName: string,
  orderDate: string,
  FoodItems: string,
  orderStatus: string,
  paymentStatus: string,
  TotalPrice: string

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
    { orderNo: '1', customerName: 'ggjhag', orderDate: '21/03/2024', FoodItems: '1-samosa,1-puff,1-tea', orderStatus: 'delivered', paymentStatus: 'done', TotalPrice: '120 Rupees' },
    { orderNo: '2', customerName: 'ggjhag', orderDate: '21/03/2024', FoodItems: '1-samosa,1-puff,1-tea', orderStatus: 'delivered', paymentStatus: 'done', TotalPrice: '120 Rupees' },
    { orderNo: '3', customerName: 'ggjhag', orderDate: '21/03/2024', FoodItems: '1-samosa,1-puff,1-tea', orderStatus: 'delivered', paymentStatus: 'done', TotalPrice: '120 Rupees' },
    { orderNo: '4', customerName: 'ggjhag', orderDate: '21/03/2024', FoodItems: '1-samosa,1-puff,1-tea', orderStatus: 'delivered', paymentStatus: 'done', TotalPrice: '120 Rupees' },
    { orderNo: '5', customerName: 'ggjhag', orderDate: '21/03/2024', FoodItems: '1-samosa,1-puff,1-tea', orderStatus: 'delivered', paymentStatus: 'done', TotalPrice: '120 Rupees' },
    { orderNo: '6', customerName: 'ggjhag', orderDate: '21/03/2024', FoodItems: '1-samosa,1-puff,1-tea', orderStatus: 'delivered', paymentStatus: 'done', TotalPrice: '120 Rupees' },
    { orderNo: '7', customerName: 'ggjhag', orderDate: '21/03/2024', FoodItems: '1-samosa,1-puff,1-tea', orderStatus: 'delivered', paymentStatus: 'done', TotalPrice: '120 Rupees' },
    { orderNo: '8', customerName: 'ggjhag', orderDate: '21/03/2024', FoodItems: '1-samosa,1-puff,1-tea', orderStatus: 'delivered', paymentStatus: 'done', TotalPrice: '120 Rupees' },
    { orderNo: '9', customerName: 'ggjhag', orderDate: '21/03/2024', FoodItems: '1-samosa,1-puff,1-tea', orderStatus: 'delivered', paymentStatus: 'done', TotalPrice: '120 Rupees' },
    { orderNo: '10', customerName: 'ggjhag', orderDate: '21/03/2024', FoodItems: '1-samosa,1-puff,1-tea', orderStatus: 'delivered', paymentStatus: 'done', TotalPrice: '120 Rupees' },
    { orderNo: '11', customerName: 'ggjhag', orderDate: '21/03/2024', FoodItems: '1-samosa,1-puff,1-tea', orderStatus: 'delivered', paymentStatus: 'done', TotalPrice: '120 Rupees' },
    { orderNo: '12', customerName: 'ggjhag', orderDate: '21/03/2024', FoodItems: '1-samosa,1-puff,1-tea', orderStatus: 'delivered', paymentStatus: 'done', TotalPrice: '120 Rupees' },
    { orderNo: '13', customerName: 'ggjhag', orderDate: '21/03/2024', FoodItems: '1-samosa,1-puff,1-tea', orderStatus: 'delivered', paymentStatus: 'done', TotalPrice: '120 Rupees' },
    { orderNo: '14', customerName: 'ggjhag', orderDate: '21/03/2024', FoodItems: '1-samosa,1-puff,1-tea', orderStatus: 'delivered', paymentStatus: 'done', TotalPrice: '120 Rupees' },
    { orderNo: '15', customerName: 'ggjhag', orderDate: '21/03/2024', FoodItems: '1-samosa,1-puff,1-tea', orderStatus: 'delivered', paymentStatus: 'done', TotalPrice: '120 Rupees' },
    { orderNo: '16', customerName: 'ggjhag', orderDate: '21/03/2024', FoodItems: '1-samosa,1-puff,1-tea', orderStatus: 'delivered', paymentStatus: 'done', TotalPrice: '120 Rupees' },
    { orderNo: '17', customerName: 'ggjhag', orderDate: '21/03/2024', FoodItems: '1-samosa,1-puff,1-tea', orderStatus: 'delivered', paymentStatus: 'done', TotalPrice: '120 Rupees' },
    { orderNo: '18', customerName: 'ggjhag', orderDate: '21/03/2024', FoodItems: '1-samosa,1-puff,1-tea', orderStatus: 'delivered', paymentStatus: 'done', TotalPrice: '120 Rupees' },
    { orderNo: '19', customerName: 'ggjhag', orderDate: '21/03/2024', FoodItems: '1-samosa,1-puff,1-tea', orderStatus: 'delivered', paymentStatus: 'done', TotalPrice: '120 Rupees' },
    { orderNo: '20', customerName: 'ggjhag', orderDate: '21/03/2024', FoodItems: '1-samosa,1-puff,1-tea', orderStatus: 'delivered', paymentStatus: 'done', TotalPrice: '120 Rupees' },
    { orderNo: '21', customerName: 'ggjhag', orderDate: '21/03/2024', FoodItems: '1-samosa,1-puff,1-tea', orderStatus: 'delivered', paymentStatus: 'done', TotalPrice: '120 Rupees' },
    { orderNo: '22', customerName: 'ggjhag', orderDate: '21/03/2024', FoodItems: '1-samosa,1-puff,1-tea', orderStatus: 'delivered', paymentStatus: 'done', TotalPrice: '120 Rupees' },
    { orderNo: '23', customerName: 'ggjhag', orderDate: '21/03/2024', FoodItems: '1-samosa,1-puff,1-tea', orderStatus: 'delivered', paymentStatus: 'done', TotalPrice: '120 Rupees' },
    { orderNo: '24', customerName: 'ggjhag', orderDate: '21/03/2024', FoodItems: '1-samosa,1-puff,1-tea', orderStatus: 'delivered', paymentStatus: 'done', TotalPrice: '120 Rupees' },
    { orderNo: '25', customerName: 'ggjhag', orderDate: '21/03/2024', FoodItems: '1-samosa,1-puff,1-tea', orderStatus: 'delivered', paymentStatus: 'done', TotalPrice: '120 Rupees' },
    { orderNo: '26', customerName: 'ggjhag', orderDate: '21/03/2024', FoodItems: '1-samosa,1-puff,1-tea', orderStatus: 'delivered', paymentStatus: 'done', TotalPrice: '120 Rupees' },
    { orderNo: '27', customerName: 'ggjhag', orderDate: '21/03/2024', FoodItems: '1-samosa,1-puff,1-tea', orderStatus: 'delivered', paymentStatus: 'done', TotalPrice: '120 Rupees' },
    { orderNo: '28', customerName: 'ggjhag', orderDate: '21/03/2024', FoodItems: '1-samosa,1-puff,1-tea', orderStatus: 'delivered', paymentStatus: 'done', TotalPrice: '120 Rupees' },
    { orderNo: '29', customerName: 'ggjhag', orderDate: '21/03/2024', FoodItems: '1-samosa,1-puff,1-tea', orderStatus: 'delivered', paymentStatus: 'done', TotalPrice: '120 Rupees' },
    { orderNo: '30', customerName: 'ggjhag', orderDate: '21/03/2024', FoodItems: '1-samosa,1-puff,1-tea', orderStatus: 'delivered', paymentStatus: 'done', TotalPrice: '120 Rupees' },
    { orderNo: '31', customerName: 'ggjhag', orderDate: '21/03/2024', FoodItems: '1-samosa,1-puff,1-tea', orderStatus: 'delivered', paymentStatus: 'done', TotalPrice: '120 Rupees' },
    { orderNo: '32', customerName: 'ggjhag', orderDate: '21/03/2024', FoodItems: '1-samosa,1-puff,1-tea', orderStatus: 'delivered', paymentStatus: 'done', TotalPrice: '120 Rupees' },





  ]
  currentPage: number = 1;
  pageSize: number = 5;

  filteredSupplier: Array<Supplier> = this.suppliers;
  pageSizes: Array<number> = [5, 10, 20];

  ngOnInit() {
    this.visibledata();
    this.pageNumbers();

  }

  visibledata() {
    let startIndex = (this.currentPage - 1) * this.pageSize;
    let endIndex = startIndex + this.pageSize;
    return this.filteredSupplier.slice(startIndex, endIndex);
  }

  nextPage() {
    this.currentPage++;
    this.visibledata();
  }

  previousPage() {
    this.currentPage--;
    this.visibledata();
  }

  pageNumbers() {
    let totalPages = Math.ceil(this.filteredSupplier.length / this.pageSize);
    let pageNumArray = new Array(totalPages);
    return pageNumArray;

  }


  changePage(pageNumber: number) {
    this.currentPage = pageNumber;
    this.visibledata;
  }

  filterData(searchTerm: string) {
    this.filteredSupplier = this.suppliers.filter((item) => {
      return Object.values(item).some((val) => {
        val.toLowerCase().includes(searchTerm.toLowerCase());
      });
    });
    this.visibledata();
  }

  changePageSize(pageSize: any) {
    this.pageSize = pageSize;
    this.visibledata();
  }
}

