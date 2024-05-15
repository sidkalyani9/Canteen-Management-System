import { Component, OnInit } from '@angular/core';
import { MenuManagementService } from '../../../service/menuManagement/menu-management.service';
import { Dish } from '../Dish';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-menu-management',
  templateUrl: './menu-management.component.html',
  // C:\Users\Kunal\Desktop\Canteen\Canteen-Management-System\client\src\app\admin\Menu-Management\menu-management\menu-management.component.html
  styleUrl: './menu-management.component.css',

})

export class MenuManagementComponent implements OnInit {
  visible: boolean = false;

  showDialog() {
      this.visible = true;
      this.dishForm;
  }

  
  // dishes:[];
  dishes: any[] = [];
  menuItems: any[];
  category:any[];
  selectedDishes: any[];

  newDish: Dish = {
    dish_name: '',
    description: '',
    category_name: '',
    price: 0,
    rating: 0,
    image_url: ''
  }; 
  dishForm:FormGroup;

  
  editDialogVisible: boolean = false; 
  selectedDish: Dish; 

  constructor( private menuManagementService: MenuManagementService,
    // private formBuilder:FormGroup
  ){}


ngOnInit(): void {
    this.getMenu();

    this.dishForm =  new FormGroup({
      dish_name: new FormControl (null, [Validators.required]),
      description: new FormControl(null,Validators.required),
      category_name: new FormControl(null,Validators.required),
      price: new FormControl(null,Validators.required),
      rating: new FormControl(null,Validators.required),
      image_url: new FormControl(null,Validators.required)
    });

    
}


getMenu(){
  this.menuManagementService.getMenu().subscribe((data) => {
    console.log(data);
    this.dishes=data;
  })
}

saveDish() {
  this.newDish.dish_name=this.dishForm.controls['dish_name'].value
    console.log(this.dishForm.controls['dish_name'].value);
    
    this.newDish.description=this.dishForm.controls['description'].value
    this.newDish.category_name=this.dishForm.controls['category_name'].value
    this.newDish.price=this.dishForm.controls['price'].value
    this.newDish.rating=this.dishForm.controls['rating'].value
    this.newDish.image_url=this.dishForm.controls['image_url'].value
  this.menuManagementService.saveDish(this.newDish).subscribe(response => {
    console.log('Dish saved successfully:', response);
    this.getMenu(); // Optionally, update the dish list after saving
    this.visible = false; // Close the dialog after saving
    // this.newDish = { // Reset newDish object
    //   dish_name: '',
    //   description: '',
    //   category_name: '',
    //   price: 0,
    //   rating: 0,
    //   image_url: ''
    // };
  });
}

editDish(dish: Dish) {
    this.selectedDish = dish; 
    this.editDialogVisible = true; 
  }

  deleteDish(uuid: string) {
    this.menuManagementService.deleteDish(uuid).subscribe(response => {
      console.log('Dish deleted successfully:', response);
      this.getMenu(); 
    });
  }

openNew(){}

deleteSelectedProducts(){}

editProduct(dish: Dish[]) {}















}