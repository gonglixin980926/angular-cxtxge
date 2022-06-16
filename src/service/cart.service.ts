import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/products';
import { IShipping } from 'src/typs';

@Injectable({
  providedIn: "root",
})
export class CartService {
  items: Product[] = []
  constructor(private http: HttpClient) {}

  addToCart(produce: Product) {
    this.items.push(produce)
  }

  getCartItems() {
    return this.items
  }

  cleanCart() {
    this.items = []
    return this.items
  }

  getShippingPrices() {
    return this.http.get<IShipping[]>("/assets/shipping.json")
  }
}
