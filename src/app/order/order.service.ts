import { Injectable } from "@angular/core";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";

@Injectable()
export class OrderService{
    
    constructor(private cartService: ShoppingCartService){

    }

    itemsValue(): number{
        return this.cartService.total()
    }

    cartItems(): CartItem[]{
        return this.cartService.items
    }

    increaseQty(item: CartItem){
        this.cartService.increaseQty(item)
    }

    decrementQty(item: CartItem){
        this.cartService.decrementQty(item)
    }

    remove(item: CartItem){
        this.cartService.removeItem(item)
    }

}