import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from 'src/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartService.getCartItems()

  constructor(private cartService: CartService, private formBuilder: FormBuilder) { }

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  })

  ngOnInit(): void {
  }

  onSubmit(): void{
    // this.items = this.cartService.cleanCart()
    // this.checkoutForm.reset()
    console.log(this.checkoutForm.value)
  }

}
