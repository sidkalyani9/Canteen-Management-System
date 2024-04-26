import { Component } from '@angular/core';
import { UserdataService } from '../../service/userdata.service';

@Component({
  selector: 'app-user-role-management',
  templateUrl: './user-role-management.component.html',
  styleUrl: './user-role-management.component.css'
})
export class UserRoleManagementComponent {

  users!: any;
  totalItems!: number;


  constructor(private userDataService: UserdataService) { }

  ngOnInit() {
    this.getUserList();
    

  }
  getUserList() {
    this.userDataService.getUsers().subscribe((res: any) => {
      console.log(res)
      this.users = res;
      this.totalItems = this.users.length;
      this.calculateTotalPages();
    });
  }

  
  currentPage: number = 1;
  itemsPerPage: number = 20;
  totalPages: number = 0;
  pages: number[] = [];
  searchQuery: string = '';
  selectedCategory: string = 'role';
  searchCategories: string[] = ['id', 'name','role','phone','email'];


  showAll() {
    this.searchQuery = '';
    this.selectedCategory = 'role';
    this.calculateTotalPages();
  }

  showAllAdmins() {
    this.searchQuery = 'admin';
    this.selectedCategory = 'role';
    this.calculateTotalPages();
  }

  showAllStaffs(){
    this.searchQuery = 'staff';
    this.selectedCategory = 'role';
    this.calculateTotalPages();
  }

  showAllUsers() {
    this.searchQuery = 'user';
    this.selectedCategory = 'role';
    this.calculateTotalPages();
  }

  

  calculateTotalPages() {

    const filteredData = this.users.filter((item:any) => {
      return this.matchesSearchQuery(item);
    });

    this.totalItems = filteredData.length;
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);

  }

  get paginatedData() {
    if (!this.users) {
      return [];
    }
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    const filteredData = this.users.filter((item:any) => {
      return this.matchesSearchQuery(item);
    });
    
    return filteredData.slice(start, end);
  }

  matchesSearchQuery(item: any): boolean {
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



