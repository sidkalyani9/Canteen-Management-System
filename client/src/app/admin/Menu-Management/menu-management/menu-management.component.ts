import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-menu-management',
  templateUrl: './menu-management.component.html',
  styleUrl: './menu-management.component.css'
})
export class MenuManagementComponent implements OnInit {
  selectedProducts: any[];
  product: any;
  submitted: boolean;
  productDialog: boolean;

  title = 'PrimeNg';
  menuItems: any[];
  category:any[];
  
  
  
  constructor( private messageService: MessageService, private confirmationService: ConfirmationService){}
  ngOnInit(): void {
      
      this.category=[
        {name:'Breakfast'},
        {name:'Lunch'},
        {name:'Snacks'}
      ]
      this.menuItems=
      [
        {
          Id: 1,
          name: 'Vadapav',
          price: '40'
        },
        {
          Id: 2,
          name: 'Maggie',
          price: '55'
        },
        {
          Id: 3,
          name: 'Frankie',
          price: '45'
        },
        {
          Id: 4,
          name: 'Maska Bun',
          price: '35'
        },
        {
          Id: 5,
          name: 'Sandwich',
          price: '65'
        }
        
      ];
  }
  editProduct(item: any) {
   
}
deleteProduct(item: any) {
 
}
openNew() {
  this.product = {Id:'4', name:"Product 4", price:400};
  this.submitted = false;
  this.productDialog = true;
}

deleteSelectedProducts() {
  this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected dishes?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.menuItems = this.menuItems.filter(val => !this.selectedProducts.includes(val));
          this.selectedProducts;
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Dish Deleted', life: 3000});
      }
  });
}

  
}

  


