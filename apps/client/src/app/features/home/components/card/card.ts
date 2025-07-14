import { Component, EventEmitter, input, Output } from '@angular/core';
import { ProductService } from '../../../../service/product-service/product-service';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styles: ``,
})
export class Card {
  id = input.required<string>();
  name = input.required<string>();
  image = input.required<string>();
  price = input.required<number>();
  stock = input.required<number>();

  @Output() buyEvent = new EventEmitter<void>();

  constructor(private productService: ProductService) {}

  async buy() {
    console.log('Comprando producto con ID:', this.id());

    const updated = await this.productService.buyProduct(this.id());
    if (updated) {
      this.buyEvent.emit();
    } else {
      console.error('Error al comprar el producto');
    }
  }
}
