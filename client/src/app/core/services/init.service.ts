import { Service, inject } from '@angular/core';
import { CartService } from './cart.service';
import { C } from '@angular/cdk/keycodes';
import { of } from 'rxjs';

@Service()
export class InitService {
    private cartService = inject(CartService);
    init() {
        const cartId = localStorage.getItem('cart_id');
        const cart$ = cartId ? this.cartService.getCart(cartId) : of(null);

        return cart$;
    }

}
