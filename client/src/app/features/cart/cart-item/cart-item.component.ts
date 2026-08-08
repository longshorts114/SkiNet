import { Component, inject, input } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CartItem } from '../../../shared/models/cart';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-cart-item',
  imports: [
    RouterLink,
    MatButton,
    MatIcon,
    MatIconButton,
    CurrencyPipe
],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css',
})
export class CartItemComponent {
  cartService = inject(CartService);
  item = input.required<CartItem>();

  incrementQuantity() {
    this.cartService.addItemToCart(this.item());
  }
  
  decrementQuantity() {
    this.cartService.removeItemFromCart(this.item().productId ?? undefined);
  }

  removeItemFromCart() {
    this,this.cartService.removeItemFromCart(this.item().productId ?? undefined, this.item().quantity)
  }

}
