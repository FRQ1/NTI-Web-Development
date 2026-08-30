import { Component, signal, computed, effect } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  products: Product[] = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Smartphone', price: 599 },
    { id: 3, name: 'Headphones', price: 199 },
    { id: 4, name: 'Keyboard', price: 99 },
    { id: 5, name: 'Monitor', price: 299 },
    { id: 6, name: 'Mouse', price: 49 }
  ];

  cart = signal<Product[]>([]);

  constructor() {
    effect(() => {
      console.log(`Cart items count: ${this.cart().length}`);
    });
  }

  addToCart(product: Product) {
    this.cart.update(currentCart => {
      if (!currentCart.find(p => p.id === product.id)) {
        return [...currentCart, product];
      }
      return currentCart;
    });
  }

  removeFromCart(productId: number) {
    this.cart.update(currentCart => currentCart.filter(p => p.id !== productId));
  }

  totalPrice = computed(() =>
    this.cart().reduce((sum, product) => sum + product.price, 0)
  );

  clearCart() {
    this.cart.set([]);
  }
}