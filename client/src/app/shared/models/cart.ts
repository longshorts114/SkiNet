import {nanoid} from 'nanoid';

export type CartType = {
    id: string;
    items: CartItem[];
}

export type CartItem = {
    productId: number | null;
    productName: string | null;
    price: number;
    quantity: number;
    pictureUrl: string | null; 
    brand: string | null;
    type: string | null;
}

export class Cart implements CartType{
    id = nanoid();
    items: CartItem[] = [];
}