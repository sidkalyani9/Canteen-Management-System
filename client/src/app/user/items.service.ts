import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from './menu/Item';
import { Filter } from './menu/Filter';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private apiServerURL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  // public getItems(filter:Filter):Observable<Item[]>{
  //     return this.http.get<Item[]>(`${this.apiServerURL}/getItems/{filter.categoryName}/{filter.itemName}`);
  // }
  
  public getItems(filter: Filter): Observable<Item[]> {
    const foodItems: Item[] = [
      { itemName: 'Coffee', categoryName: 'Beverages', itemId: 1, categoryId: 101, rating: 4.5, description: 'Hot coffee', tags: ['hot', 'beverage'], price: 30, imageURL: 'https://source.unsplash.com/random/?coffee' },
      { itemName: 'Tea', categoryName: 'Beverages', itemId: 2, categoryId: 101, rating: 4.3, description: 'Hot tea', tags: ['hot', 'beverage'], price: 20, imageURL: 'https://source.unsplash.com/random/?tea' },
      { itemName: 'Chicken Sandwich', categoryName: 'Lunch', itemId: 3, categoryId: 102, rating: 4.7, description: 'Grilled chicken sandwich', tags: ['sandwich', 'lunch'], price: 50, imageURL: 'https://source.unsplash.com/random/?sandwich' },
      { itemName: 'Steak', categoryName: 'Dinner', itemId: 4, categoryId: 103, rating: 4.8, description: 'Juicy steak', tags: ['steak', 'dinner'], price: 120, imageURL: 'https://source.unsplash.com/random/?steak' },
      { itemName: 'Omelette', categoryName: 'Breakfast', itemId: 5, categoryId: 104, rating: 4.6, description: 'Cheese omelette', tags: ['omelette', 'breakfast'], price: 40, imageURL: 'https://source.unsplash.com/random/?omelette' },
      { itemName: 'Chips', categoryName: 'Snacks', itemId: 6, categoryId: 105, rating: 4.2, description: 'Potato chips', tags: ['chips', 'snacks'], price: 10, imageURL: 'https://source.unsplash.com/random/?chips' },
      { itemName: 'Coffee', categoryName: 'Beverages', itemId: 1, categoryId: 101, rating: 4.5, description: 'Hot coffee', tags: ['hot', 'beverage'], price: 40, imageURL: 'https://source.unsplash.com/random/?coffee' },
      { itemName: 'Tea', categoryName: 'Beverages', itemId: 2, categoryId: 101, rating: 4.3, description: 'Hot tea', tags: ['hot', 'beverage'], price: 20, imageURL: 'https://source.unsplash.com/random/?tea' },
      { itemName: 'Chicken Sandwich', categoryName: 'Lunch', itemId: 3, categoryId: 102, rating: 4.7, description: 'Grilled chicken sandwich', tags: ['sandwich', 'lunch'], price: 80, imageURL: 'https://source.unsplash.com/random/?sandwich' },
      { itemName: 'Steak', categoryName: 'Dinner', itemId: 4, categoryId: 103, rating: 4.8, description: 'Juicy steak', tags: ['steak', 'dinner'], price: 150, imageURL: 'https://source.unsplash.com/random/?steak' },
      { itemName: 'Omelette', categoryName: 'Breakfast', itemId: 5, categoryId: 104, rating: 4.6, description: 'Cheese omelette', tags: ['omelette', 'breakfast'], price: 50, imageURL: 'https://source.unsplash.com/random/?omelette' },
      { itemName: 'Chips', categoryName: 'Snacks', itemId: 6, categoryId: 105, rating: 4.2, description: 'Potato chips', tags: ['chips', 'snacks'], price: 20, imageURL: 'https://source.unsplash.com/random/?chips' },
      // Add more items as needed
    ];

    return of(foodItems);
  }

}