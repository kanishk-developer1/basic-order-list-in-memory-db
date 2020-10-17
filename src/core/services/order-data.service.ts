import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class OrderDataService implements InMemoryDbService {

  constructor() { }
  createDb(){
    let orders= [
      { id: 1, customer: 'Mr. Nice', product: 'Pizza Veg', productId:1, order_quantity:2, price: 350, status: 0, delivery_address: '9284 Tower Court Salisbury, MD 21801'},
      { id: 2, customer: 'Narco', product:'Pizza Cheeze', productId:2, order_quantity:3, price: 500, status: 1, delivery_address: '8740 E. Elizabeth St.Philadelphia, PA 19111'},
      { id: 3, customer: 'bambasto', product:'Pizza Extra Toppings', productId:3, order_quantity:1, price: 500, status: 0, delivery_address: '7594 South Paris Hill Dr.Orange Park, FL 32065'},
      { id: 4, customer: 'RubberMan',product:'Pizza Italian', productId:4, order_quantity:4, price: 200,status: 2, delivery_address: '15 Spruce Ave.Madisonville, KY 42431'},
      { id: 5, customer: 'dynama', product:'Pizza mushroom', productId:5, order_quantity:1, price: 1000,status: 1,delivery_address: '439 Wild Rose Avenue Stow, OH 44224'},

    ];
    return {orders};
  }
}
