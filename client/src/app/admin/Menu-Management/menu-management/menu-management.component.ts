import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

import { Dish } from '../Dish';

@Component({
  selector: 'app-menu-management',
  templateUrl: './menu-management.component.html',
  styleUrl: './menu-management.component.css'
})

export class MenuManagementComponent implements OnInit {
  selectedDishes: any[];
  dish: any;
  submitted: boolean;
  dishDialog: boolean;

  title = 'PrimeNg';
  menuItems: any[];
  category:any[];
  categoryName:any[];
  
  
  
  constructor( private messageService: MessageService, private confirmationService: ConfirmationService){}
  editProduct(dish: Dish) {
    this.dish = { ...dish };
    this.dishDialog = true;
}


deleteProduct(item: any) {
 
}
openNew() {
  this.dish = {};
  this.submitted = false;
  this.dishDialog = true;
}

deleteSelectedProducts() {
  this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected dishes?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.menuItems = this.menuItems.filter(val => !this.selectedDishes.includes(val));
          this.selectedDishes;
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Dish Deleted', life: 3000});
      }
  });
}


  ngOnInit(): void {
      
      this.category=[
        {name:'Breakfast'},
        {name:'Lunch'},
        {name:'Snacks'}
      ]
      this.menuItems=
      [
        {
          name: 'Vadapav',
          categoryName:'Snacks',
          price: '40'
        },
        {
          
          name: 'Maggie',
          categoryName:'Snacks',
          price: '55'
        },
        {
          
          name: 'Paneer Tikka Masala',
          categoryName:'Lunch',
          price: '45'
        },
        {
         
          name: 'Malai kofta',
          categoryName:'Lunch',
          price: '55'
        },
        {
          
          name: 'Sandwich',
          categoryName:'Breakfast',
          price: '65'
        },
        {
          
          name: 'Poha',
          categoryName:'Breakfast',
          price: '25'
        }
        
      ];
  }
  
   
}

  


