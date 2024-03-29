import { Component, OnInit } from '@angular/core';
import { Filter, FilterImpl } from './Filter';
import { ItemsService } from '../items.service';
import { Item } from './Item';
import { HttpErrorResponse } from '@angular/common/http';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  public items: Item[];

  constructor(private itemsService: ItemsService) {
    this.items = [];
  }

  ngOnInit(): void {
    // Code to execute when the component is initialized
    this.getItems();
  }

  filter = new FilterImpl();

  public getItems(): void {
    this.itemsService.getItems(this.filter).subscribe({
      next: (response: Item[]) => {
        this.items = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }

  editFilter1(itemName: string) {
    this.filter.itemName = itemName;
    this.getItems();
  }

  editFilter2(categoryName: string) {
    this.filter.categoryName = categoryName;
    this.getItems();
  }

  starIcon = faStar;

}