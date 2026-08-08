import { Component, inject, OnInit, signal } from '@angular/core';
import { ShopService } from '../../../core/services/shop.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../shared/models/product';
import { CurrencyPipe } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatFormField, MatLabel } from '@angular/material/select';
import { MatInput } from '@angular/material/input';
import { MatDivider } from "@angular/material/divider";
import { Cart } from '../../../shared/models/cart';
import { CartService } from '../../../core/services/cart.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  imports: [
    CurrencyPipe,
    MatButton,
    MatIcon,
    MatFormField,
    MatInput,
    MatLabel,
    MatDivider,
    FormsModule
],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit{
  
  private shopService = inject(ShopService);
  private cartService = inject(CartService);

  private activatedRoute = inject(ActivatedRoute);

  product = signal<Product | null>(null);

  quantityInCart = 0;
  quantity = 0;

ngOnInit(): void {
  this.loadProduct();
  }

  loadProduct() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(!id){
      return;
    }
    console.log(id);
    this.shopService.getProduct(+id).subscribe({
      next: product => { 
        this.product.set(product); 
        this.updateQuantityInCart();
      },
      error: error => console.log(error)
    })
  }

  updateCart() {
    if (!this.product()) {
      return;
    }

    // if(this.quantity() > this.quantityInCart()){
    //   const itemsToAdd = this.quantity() - this.quantityInCart();
    //   this.quantityInCart.set(this.quantityInCart() + itemsToAdd);
    //   this.cartService.addItemToCart(this.product(), itemsToAdd)
    // }
    // else {
    //   const itemsToRemove = this.quantityInCart() - this.quantity();
    //   this.quantityInCart.set(this.quantityInCart() - itemsToRemove);
    //   this.cartService.removeItemFromCart(this.product()?.id, itemsToRemove)
    // }

    if(this.quantity > this.quantityInCart){
      const itemsToAdd = this.quantity - this.quantityInCart;
      this.quantityInCart += itemsToAdd;
      this.cartService.addItemToCart(this.product(), itemsToAdd)
    }
    else {
      const itemsToRemove = this.quantityInCart - this.quantity;
      this.quantityInCart -= itemsToRemove;
      this.cartService.removeItemFromCart(this.product()?.id, itemsToRemove)
    }
  }


  updateQuantityInCart() {
    // this.quantityInCart.set(this.cartService.cart()?.items.find(x => x.productId === this.product()?.id)?.quantity || 0);       
    // this.quantity.set(this.quantityInCart() || 1);

    this.quantityInCart = this.cartService.cart()?.items.find(x => x.productId === this.product()?.id)?.quantity || 0;       
    this.quantity = this.quantityInCart || 1;
  }

  getButtonText() {
    //return this.quantityInCart() > 0 ? "Update Cart" : "Add To Cart"

    return this.quantityInCart > 0 ? "Update Cart" : "Add To Cart"
  }
}
