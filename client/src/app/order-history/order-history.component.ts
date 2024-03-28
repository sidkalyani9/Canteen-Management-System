import { Component, OnInit } from '@angular/core';

interface order {
  orderNo: string;
  customerName: string;
  orderDate: string;
  foodItems: string[];
  orderStatus: string;
  paymentStatus: string;
  TotalPrice: string;
  [key: string]: string | string[];
}

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  data: Array<order> = [
    {
      "orderNo": "ORD001",
      "customerName": "John Doe",
      "orderDate": "2024-03-27",
      "foodItems": ["Pizza", "Burger", "Salad"],
      "orderStatus": "Delivered",
      "paymentStatus": "Paid",
      "TotalPrice": "$25.00"
    },
    {
      "orderNo": "ORD002",
      "customerName": "Alice Smith",
      "orderDate": "2024-03-26",
      "foodItems": ["Pasta", "Garlic Bread"],
      "orderStatus": "Pending",
      "paymentStatus": "Pending",
      "TotalPrice": "$15.50"
    },
    {
      "orderNo": "ORD003",
      "customerName": "Bob Johnson",
      "orderDate": "2024-03-25",
      "foodItems": ["Sushi", "Miso Soup"],
      "orderStatus": "Cancelled",
      "paymentStatus": "Refunded",
      "TotalPrice": "$30.00"
    },
    {
      "orderNo": "ORD004",
      "customerName": "Emily Brown",
      "orderDate": "2024-03-24",
      "foodItems": ["Steak", "Potatoes", "Green Beans"],
      "orderStatus": "Delivered",
      "paymentStatus": "Paid",
      "TotalPrice": "$45.75"
    },
    {
      "orderNo": "ORD005",
      "customerName": "Michael Wilson",
      "orderDate": "2024-03-23",
      "foodItems": ["Chicken Curry", "Rice", "Naan Bread"],
      "orderStatus": "In Progress",
      "paymentStatus": "Paid",
      "TotalPrice": "$20.50"
    },
    {
      "orderNo": "ORD006",
      "customerName": "Sophia Martinez",
      "orderDate": "2024-03-22",
      "foodItems": ["Tacos", "Guacamole", "Chips"],
      "orderStatus": "Delivered",
      "paymentStatus": "Paid",
      "TotalPrice": "$18.75"
    },
    {
      "orderNo": "ORD007",
      "customerName": "David Taylor",
      "orderDate": "2024-03-21",
      "foodItems": ["Fish and Chips", "Cole Slaw"],
      "orderStatus": "Delivered",
      "paymentStatus": "Paid",
      "TotalPrice": "$12.90"
    },
    {
      "orderNo": "ORD008",
      "customerName": "Emma Anderson",
      "orderDate": "2024-03-20",
      "foodItems": ["Lasagna", "Caesar Salad"],
      "orderStatus": "Delivered",
      "paymentStatus": "Paid",
      "TotalPrice": "$28.60"
    },
    {
      "orderNo": "ORD009",
      "customerName": "James Garcia",
      "orderDate": "2024-03-19",
      "foodItems": ["Hamburger", "French Fries", "Milkshake"],
      "orderStatus": "Cancelled",
      "paymentStatus": "Refunded",
      "TotalPrice": "$15.25"
    },
    {
      "orderNo": "ORD010",
      "customerName": "Olivia Hernandez",
      "orderDate": "2024-03-18",
      "foodItems": ["Sushi", "Miso Soup", "Edamame"],
      "orderStatus": "Delivered",
      "paymentStatus": "Paid",
      "TotalPrice": "$32.75"
    },
    {
      "orderNo": "ORD011",
      "customerName": "William Martinez",
      "orderDate": "2024-03-17",
      "foodItems": ["Chicken Parmesan", "Garlic Bread", "Minestrone Soup"],
      "orderStatus": "In Progress",
      "paymentStatus": "Paid",
      "TotalPrice": "$22.80"
    },
    {
      "orderNo": "ORD012",
      "customerName": "Sophia Brown",
      "orderDate": "2024-03-16",
      "foodItems": ["Tacos", "Guacamole", "Chips"],
      "orderStatus": "Delivered",
      "paymentStatus": "Paid",
      "TotalPrice": "$18.75"
    },
    {
      "orderNo": "ORD013",
      "customerName": "Michael Lee",
      "orderDate": "2024-03-15",
      "foodItems": ["Pizza", "Caesar Salad", "Garlic Knots"],
      "orderStatus": "Delivered",
      "paymentStatus": "Paid",
      "TotalPrice": "$24.50"
    },
    {
      "orderNo": "ORD014",
      "customerName": "Emma Rodriguez",
      "orderDate": "2024-03-14",
      "foodItems": ["Burrito", "Chips and Salsa", "Queso Dip"],
      "orderStatus": "Delivered",
      "paymentStatus": "Paid",
      "TotalPrice": "$16.75"
    },
    {
      "orderNo": "ORD015",
      "customerName": "David Smith",
      "orderDate": "2024-03-13",
      "foodItems": ["Sushi", "Miso Soup", "Edamame"],
      "orderStatus": "Pending",
      "paymentStatus": "Pending",
      "TotalPrice": "$32.75"
    },
    {
      "orderNo": "ORD016",
      "customerName": "Isabella Johnson",
      "orderDate": "2024-03-12",
      "foodItems": ["Chicken Curry", "Rice", "Naan Bread"],
      "orderStatus": "Delivered",
      "paymentStatus": "Paid",
      "TotalPrice": "$20.50"
    },
    {
      "orderNo": "ORD017",
      "customerName": "Daniel Miller",
      "orderDate": "2024-03-11",
      "foodItems": ["Hamburger", "French Fries", "Milkshake"],
      "orderStatus": "Cancelled",
      "paymentStatus": "Refunded",
      "TotalPrice": "$15.25"
    },
    {
      "orderNo": "ORD018",
      "customerName": "Olivia Taylor",
      "orderDate": "2024-03-10",
      "foodItems": ["Steak", "Potatoes", "Green Beans"],
      "orderStatus": "Delivered",
      "paymentStatus": "Paid",
      "TotalPrice": "$45.75"
    },
    {
      "orderNo": "ORD019",
      "customerName": "James Martinez",
      "orderDate": "2024-03-09",
      "foodItems": ["Pasta", "Garlic Bread"],
      "orderStatus": "In Progress",
      "paymentStatus": "Paid",
      "TotalPrice": "$15.50"
    },
    {
      "orderNo": "ORD020",
      "customerName": "Emily Brown",
      "orderDate": "2024-03-08",
      "foodItems": ["Tacos", "Guacamole", "Chips"],
      "orderStatus": "Delivered",
      "paymentStatus": "Paid",
      "TotalPrice": "$18.75"
    },
    {
      "orderNo": "ORD021",
      "customerName": "Michael Wilson",
      "orderDate": "2024-03-07",
      "foodItems": ["Fish and Chips", "Cole Slaw"],
      "orderStatus": "Delivered",
      "paymentStatus": "Paid",
      "TotalPrice": "$12.90"
    },
    {
      "orderNo": "ORD022",
      "customerName": "Sophia Anderson",
      "orderDate": "2024-03-06",
      "foodItems": ["Lasagna", "Caesar Salad"],
      "orderStatus": "Delivered",
      "paymentStatus": "Paid",
      "TotalPrice": "$28.60"
    },
    {
      "orderNo": "ORD023",
      "customerName": "David Garcia",
      "orderDate": "2024-03-05",
      "foodItems": ["Sushi", "Miso Soup", "Edamame"],
      "orderStatus": "Cancelled",
      "paymentStatus": "Refunded",
      "TotalPrice": "$32.75"
    },
    {
      "orderNo": "ORD024",
      "customerName": "Emma Hernandez",
      "orderDate": "2024-03-04",
      "foodItems": ["Chicken Parmesan", "Garlic Bread", "Minestrone Soup"],
      "orderStatus": "In Progress",
      "paymentStatus": "Paid",
      "TotalPrice": "$22.80"
    },
    {
      "orderNo": "ORD025",
      "customerName": "James Lee",
      "orderDate": "2024-03-03",
      "foodItems": ["Pizza", "Caesar Salad", "Garlic Knots"],
      "orderStatus": "Delivered",
      "paymentStatus": "Paid",
      "TotalPrice": "$24.50"
    },
    {
      "orderNo": "ORD026",
      "customerName": "Olivia Rodriguez",
      "orderDate": "2024-03-02",
      "foodItems": ["Burrito", "Chips and Salsa", "Queso Dip"],
      "orderStatus": "Delivered",
      "paymentStatus": "Paid",
      "TotalPrice": "$16.75"
    },
    {
      "orderNo": "ORD027",
      "customerName": "William Smith",
      "orderDate": "2024-03-01",
      "foodItems": ["Sushi", "Miso Soup", "Edamame"],
      "orderStatus": "Pending",
      "paymentStatus": "Pending",
      "TotalPrice": "$32.75"
    },
    {
      "orderNo": "ORD028",
      "customerName": "Isabella Johnson",
      "orderDate": "2024-02-29",
      "foodItems": ["Chicken Curry", "Rice", "Naan Bread"],
      "orderStatus": "Delivered",
      "paymentStatus": "Paid",
      "TotalPrice": "$20.50"
    },
    {
      "orderNo": "ORD029",
      "customerName": "Daniel Miller",
      "orderDate": "2024-02-28",
      "foodItems": ["Hamburger", "French Fries", "Milkshake"],
      "orderStatus": "Cancelled",
      "paymentStatus": "Refunded",
      "TotalPrice": "$15.25"
    },
    {
      "orderNo": "ORD030",
      "customerName": "Olivia Taylor",
      "orderDate": "2024-02-27",
      "foodItems": ["Steak", "Potatoes", "Green Beans"],
      "orderStatus": "Delivered",
      "paymentStatus": "Paid",
      "TotalPrice": "$45.75"
    },
    {
      "orderNo": "ORD031",
      "customerName": "James Martinez",
      "orderDate": "2024-02-26",
      "foodItems": ["Pasta", "Garlic Bread"],
      "orderStatus": "In Progress",
      "paymentStatus": "Paid",
      "TotalPrice": "$15.50"
    },
    {
      "orderNo": "ORD032",
      "customerName": "Emily Brown",
      "orderDate": "2024-02-25",
      "foodItems": ["Tacos", "Guacamole", "Chips"],
      "orderStatus": "Delivered",
      "paymentStatus": "Paid",
      "TotalPrice": "$18.75"
    },
    {
      "orderNo": "ORD033",
      "customerName": "Michael Wilson",
      "orderDate": "2024-02-24",
      "foodItems": ["Fish and Chips", "Cole Slaw"],
      "orderStatus": "Delivered",
      "paymentStatus": "Paid",
      "TotalPrice": "$12.90"
    },
    {
      "orderNo": "ORD034",
      "customerName": "Sophia Anderson",
      "orderDate": "2024-02-23",
      "foodItems": ["Lasagna", "Caesar Salad"],
      "orderStatus": "Delivered",
      "paymentStatus": "Paid",
      "TotalPrice": "$28.60"
    },
    {
      "orderNo": "ORD035",
      "customerName": "David Garcia",
      "orderDate": "2024-02-22",
      "foodItems": ["Sushi", "Miso Soup", "Edamame"],
      "orderStatus": "Cancelled",
      "paymentStatus": "Refunded",
      "TotalPrice": "$32.75"
    },
    {
      "orderNo": "ORD036",
      "customerName": "Emma Hernandez",
      "orderDate": "2024-02-21",
      "foodItems": ["Chicken Parmesan", "Garlic Bread", "Minestrone Soup"],
      "orderStatus": "In Progress",
      "paymentStatus": "Paid",
      "TotalPrice": "$22.80"
    },
    {
      "orderNo": "ORD037",
      "customerName": "James Lee",
      "orderDate": "2024-02-20",
      "foodItems": ["Pizza", "Caesar Salad", "Garlic Knots"],
      "orderStatus": "Delivered",
      "paymentStatus": "Paid",
      "TotalPrice": "$24.50"
    },
    {
      "orderNo": "ORD038",
      "customerName": "Olivia Rodriguez",
      "orderDate": "2024-02-19",
      "foodItems": ["Burrito", "Chips and Salsa", "Queso Dip"],
      "orderStatus": "Delivered",
      "paymentStatus": "Paid",
      "TotalPrice": "$22.30"
    },
    {
      "orderNo": "ORD039",
      "customerName": "William Smith",
      "orderDate": "2024-02-18",
      "foodItems": ["Sushi", "Miso Soup", "Edamame"],
      "orderStatus": "Pending",
      "paymentStatus": "Pending",
      "TotalPrice": "$32.75"
    },
    {
      "orderNo": "ORD040",
      "customerName": "Isabella Johnson",
      "orderDate": "2024-02-17",
      "foodItems": ["Chicken Curry", "Rice", "Naan Bread"],
      "orderStatus": "Delivered",
      "paymentStatus": "Paid",
      "TotalPrice": "$20.50"
    },
    {
      "orderNo": "ORD041",
      "customerName": "Daniel Miller",
      "orderDate": "2024-02-16",
      "foodItems": ["Hamburger", "French Fries", "Milkshake"],
      "orderStatus": "Cancelled",
      "paymentStatus": "Refunded",
      "TotalPrice": "$15.25"
    },
    {
      "orderNo": "ORD042",
      "customerName": "Olivia Taylor",
      "orderDate": "2024-02-15",
      "foodItems": ["Steak", "Potatoes", "Green Beans"],
      "orderStatus": "Delivered",
      "paymentStatus": "Paid",
      "TotalPrice": "$45.75"
    },
    {
      "orderNo": "ORD043",
      "customerName": "James Martinez",
      "orderDate": "2024-02-14",
      "foodItems": ["Pasta", "Garlic Bread"],
      "orderStatus": "In Progress",
      "paymentStatus": "Paid",
      "TotalPrice": "$15.50"
    },
    {
      "orderNo": "ORD044",
      "customerName": "Emily Brown",
      "orderDate": "2024-02-13",
      "foodItems": ["Tacos", "Guacamole", "Chips"],
      "orderStatus": "Delivered",
      "paymentStatus": "Paid",
      "TotalPrice": "$18.75"
    },
    {
      "orderNo": "ORD045",
      "customerName": "Michael Wilson",
      "orderDate": "2024-02-12",
      "foodItems": ["Fish and Chips", "Cole Slaw"],
      "orderStatus": "Delivered",
      "paymentStatus": "Paid",
      "TotalPrice": "$12.90"
    },
    {
      "orderNo": "ORD046",
      "customerName": "Sophia Anderson",
      "orderDate": "2024-02-11",
      "foodItems": ["Lasagna", "Caesar Salad"],
      "orderStatus": "Delivered",
      "paymentStatus": "Paid",
      "TotalPrice": "$28.60"
    },
    {
      "orderNo": "ORD047",
      "customerName": "David Garcia",
      "orderDate": "2024-02-10",
      "foodItems": ["Sushi", "Miso Soup", "Edamame"],
      "orderStatus": "Cancelled",
      "paymentStatus": "Refunded",
      "TotalPrice": "$32.75"
    },
    {
      "orderNo": "ORD048",
      "customerName": "Emma Hernandez",
      "orderDate": "2024-02-09",
      "foodItems": ["Chicken Parmesan", "Garlic Bread", "Minestrone Soup"],
      "orderStatus": "In Progress",
      "paymentStatus": "Paid",
      "TotalPrice": "$22.80"
    },
    {
      "orderNo": "ORD049",
      "customerName": "James Lee",
      "orderDate": "2024-02-08",
      "foodItems": ["Pizza", "Caesar Salad", "Garlic Knots"],
      "orderStatus": "Delivered",
      "paymentStatus": "Paid",
      "TotalPrice": "$24.50"
    },
    {
      "orderNo": "ORD050",
      "customerName": "Olivia Rodriguez",
      "orderDate": "2024-02-07",
      "foodItems": ["Burrito", "Chips and Salsa", "Queso Dip"],
      "orderStatus": "Delivered",
      "paymentStatus": "Paid",
      "TotalPrice": "$16.75"
    },
    {
      "orderNo": "ORD051",
      "customerName": "William Smith",
      "orderDate": "2024-02-06",
      "foodItems": ["Sushi", "Miso Soup", "Edamame"],
      "orderStatus": "Pending",
      "paymentStatus": "Pending",
      "TotalPrice": "$32.75"
    },
    {
      "orderNo": "ORD052",
      "customerName": "Isabella Johnson",
      "orderDate": "2024-02-05",
      "foodItems": ["Chicken Curry", "Rice", "Naan Bread"],
      "orderStatus": "Delivered",
      "paymentStatus": "Paid",
      "TotalPrice": "$20.50"
    },
    {
      "orderNo": "ORD053",
      "customerName": "Daniel Miller",
      "orderDate": "2024-02-04",
      "foodItems": ["Hamburger", "French Fries", "Milkshake"],
      "orderStatus": "Cancelled",
      "paymentStatus": "Refunded",
      "TotalPrice": "$15.25"
    },
    {
      "orderNo": "ORD054",
      "customerName": "Olivia Taylor",
      "orderDate": "2024-02-03",
      "foodItems": ["Steak", "Potatoes", "Green Beans"],
      "orderStatus": "Delivered",
      "paymentStatus": "Paid",
      "TotalPrice": "$45.75"
    },
    {
      "orderNo": "ORD055",
      "customerName": "James Martinez",
      "orderDate": "2024-02-02",
      "foodItems": ["Pasta", "Garlic Bread"],
      "orderStatus": "In Progress",
      "paymentStatus": "Paid",
      "TotalPrice": "$15.50"
    },
    {
      "orderNo": "ORD056",
      "customerName": "Emily Brown",
      "orderDate": "2024-02-01",
      "foodItems": ["Tacos", "Guacamole", "Chips"],
      "orderStatus": "Delivered",
      "paymentStatus": "Paid",
      "TotalPrice": "$18.75"
    },
    {
      "orderNo": "ORD057",
      "customerName": "Michael Wilson",
      "orderDate": "2024-01-31",
      "foodItems": ["Fish and Chips", "Cole Slaw"],
      "orderStatus": "Delivered",
      "paymentStatus": "Paid",
      "TotalPrice": "$12.90"
    },
    {
      "orderNo": "ORD058",
      "customerName": "Sophia Anderson",
      "orderDate": "2024-01-30",
      "foodItems": ["Lasagna", "Caesar Salad"],
      "orderStatus": "Delivered",
      "paymentStatus": "Paid",
      "TotalPrice": "$28.60"
    },
    {
      "orderNo": "ORD059",
      "customerName": "David Garcia",
      "orderDate": "2024-01-29",
      "foodItems": ["Sushi", "Miso Soup", "Edamame"],
      "orderStatus": "Cancelled",
      "paymentStatus": "Refunded",
      "TotalPrice": "$32.75"
    },
    {
      "orderNo": "ORD060",
      "customerName": "Emma Hernandez",
      "orderDate": "2024-01-28",
      "foodItems": ["Chicken Parmesan", "Garlic Bread", "Minestrone Soup"],
      "orderStatus": "In Progress",
      "paymentStatus": "Paid",
      "TotalPrice": "$22.80"
    },
    {
      "orderNo": "ORD061",
      "customerName": "James Lee",
      "orderDate": "2024-01-27",
      "foodItems": ["Pizza", "Caesar Salad", "Garlic Knots"],
      "orderStatus": "Delivered",
      "paymentStatus": "Paid",
      "TotalPrice": "$24.50"
    },
    {
      "orderNo": "ORD062",
      "customerName": "Olivia Rodriguez",
      "orderDate": "2024-01-26",
      "foodItems": ["Burrito", "Chips and Salsa", "Queso Dip"],
      "orderStatus": "Delivered",
      "paymentStatus": "Paid",
      "TotalPrice": "$16.75"
    },
    {
      "orderNo": "ORD063",
      "customerName": "William Smith",
      "orderDate": "2024-01-25",
      "foodItems": ["Sushi", "Miso Soup", "Edamame"],
      "orderStatus": "Pending",
      "paymentStatus": "Pending",
      "TotalPrice": "$32.75"
    },
    {
      "orderNo": "ORD064",
      "customerName": "Isabella Johnson",
      "orderDate": "2024-01-24",
      "foodItems": ["Chicken Curry", "Rice", "Naan Bread"],
      "orderStatus": "Delivered",
      "paymentStatus": "Paid",
      "TotalPrice": "$20.50"
    },
    {
      "orderNo": "ORD065",
      "customerName": "Daniel Miller",
      "orderDate": "2024-01-23",
      "foodItems": ["Hamburger", "French Fries", "Milkshake"],
      "orderStatus": "Cancelled",
      "paymentStatus": "Refunded",
      "TotalPrice": "$15.25"
    },
    {
      "orderNo": "ORD066",
      "customerName": "Olivia Taylor",
      "orderDate": "2024-01-22",
      "foodItems": ["Steak", "Potatoes", "Green Beans"],
      "orderStatus": "Delivered",
      "paymentStatus": "Paid",
      "TotalPrice": "$45.75"
    },
    {
      "orderNo": "ORD067",
      "customerName": "James Martinez",
      "orderDate": "2024-01-21",
      "foodItems": ["Pasta", "Garlic Bread"],
      "orderStatus": "In Progress",
      "paymentStatus": "Paid",
      "TotalPrice": "$15.50"
    },
    {
      "orderNo": "ORD068",
      "customerName": "Emily Brown",
      "orderDate": "2024-01-20",
      "foodItems": ["Tacos", "Guacamole", "Chips"],
      "orderStatus": "Delivered",
      "paymentStatus": "Paid",
      "TotalPrice": "$18.75"
    },
    {
      "orderNo": "ORD069",
      "customerName": "Michael Wilson",
      "orderDate": "2024-01-19",
      "foodItems": ["Fish and Chips", "Cole Slaw"],
      "orderStatus": "Delivered",
      "paymentStatus": "Paid",
      "TotalPrice": "$12.90"
    },
    {
      "orderNo": "ORD070",
      "customerName": "Sophia Anderson",
      "orderDate": "2024-01-18",
      "foodItems": ["Lasagna", "Caesar Salad"],
      "orderStatus": "Delivered",
      "paymentStatus": "Paid",
      "TotalPrice": "$28.60"
    },
    {
      "orderNo": "ORD071",
      "customerName": "David Garcia",
      "orderDate": "2024-01-17",
      "foodItems": ["Sushi", "Miso Soup", "Edamame"],
      "orderStatus": "Cancelled",
      "paymentStatus": "Refunded",
      "TotalPrice": "$32.75"
    },
    {
      "orderNo": "ORD072",
      "customerName": "Emma Hernandez",
      "orderDate": "2024-01-16",
      "foodItems": ["Chicken Parmesan", "Garlic Bread", "Minestrone Soup"],
      "orderStatus": "In Progress",
      "paymentStatus": "Paid",
      "TotalPrice": "$22.80"
    },
    {
      "orderNo": "ORD073",
      "customerName": "James Lee",
      "orderDate": "2024-01-15",
      "foodItems": ["Pizza", "Caesar Salad", "Garlic Knots"],
      "orderStatus": "Delivered",
      "paymentStatus": "Paid",
      "TotalPrice": "$24.50"
    },
    {
      "orderNo": "ORD074",
      "customerName": "Olivia Rodriguez",
      "orderDate": "2024-01-14",
      "foodItems": ["Burrito", "Chips and Salsa", "Queso Dip"],
      "orderStatus": "Delivered",
      "paymentStatus": "Paid",
      "TotalPrice": "$16.75"
    },
    {
      "orderNo": "ORD075",
      "customerName": "William Smith",
      "orderDate": "2024-01-13",
      "foodItems": ["Sushi", "Miso Soup", "Edamame"],
      "orderStatus": "Pending",
      "paymentStatus": "Pending",
      "TotalPrice": "$32.75"
    },
    {
      "orderNo": "ORD076",
      "customerName": "Isabella Johnson",
      "orderDate": "2024-01-12",
      "foodItems": ["Chicken Curry", "Rice", "Naan Bread"],
      "orderStatus": "Delivered",
      "paymentStatus": "Paid",
      "TotalPrice": "$20.50"
    },
  ]


  totalItems: number = this.data.length;
  currentPage: number = 1;
  itemsPerPage: number = 5; // Adjust items per page as needed
  totalPages: number = 0;
  pages: number[] = [];
  searchQuery: string = '';
  selectedCategory: string = 'orderNo';
  searchCategories: string[] = ['orderNo', 'customerName', 'paymentStatus', 'orderStatus'];
  startDate: string = '';
  endDate: string = '';

  constructor() { }

  ngOnInit(): void {
    this.calculateTotalPages();
  }

  showAllOrders() {
    this.searchQuery = '';
    this.selectedCategory = 'orderNo';
    this.calculateTotalPages();
  }

  showCompletedOrders() {
    this.searchQuery = 'Delivered';
    this.selectedCategory = 'orderStatus';
    this.calculateTotalPages();
  }

  showCancelledOrders() {
    this.searchQuery = 'Cancelled';
    this.selectedCategory = 'orderStatus';
    this.calculateTotalPages();
  }

  filterByDate() {
    this.currentPage = 1;
    this.calculateTotalPages();
  }

  calculateTotalPages() {
    const filteredData = this.data.filter(item => {
      const isWithinDateRange = (!this.startDate || item.orderDate >= this.startDate) &&
        (!this.endDate || item.orderDate <= this.endDate);
      return isWithinDateRange && this.matchesSearchQuery(item);
    });

    this.totalItems = filteredData.length;
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  get paginatedData() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    const filteredData = this.data.filter(item => {
      const isWithinDateRange = (!this.startDate || item.orderDate >= this.startDate) &&
        (!this.endDate || item.orderDate <= this.endDate);
      return isWithinDateRange && this.matchesSearchQuery(item);
    });

    return filteredData.slice(start, end);
  }

  matchesSearchQuery(item: order): boolean {
    if (typeof item[this.selectedCategory] === 'string') {
      return (item[this.selectedCategory] as string).toLowerCase().includes(this.searchQuery.toLowerCase());
    } else if (Array.isArray(item[this.selectedCategory])) {
      return (item[this.selectedCategory] as string[]).some(food => food.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }
    return false;
  }

  changePageSize() {
    if (this.itemsPerPage > 0) {
      this.currentPage = 1;
      this.calculateTotalPages();
    }
  }

  pageClicked(page: number) {
    if (page > 0 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  search() {
    this.currentPage = 1;
    this.calculateTotalPages();
  }
}



