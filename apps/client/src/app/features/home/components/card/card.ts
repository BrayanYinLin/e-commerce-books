import { Component, EventEmitter, input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../../service/product-service/product-service';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styles: ``,
})
export class Card {
  id = input.required<string>();
  name = input.required<string>();
  image = input.required<string>();
  price = input.required<number>();
  stock = input.required<number>();

  bought = false;
  clicks = 0;

  @Output() buyEvent = new EventEmitter<void>();

  constructor(private productService: ProductService) {}

  async buy() {
    this.clicks++;
    console.log('Comprando producto con ID:', this.id());

    if (this.bought) return; //si ya esta comprado, sale

    if (this.clicks !== 1) return; // si ya hizo un click, sale

    const updated = await this.productService.buyProduct(this.id());
    if (!updated) { //   si no actualizo, marca error y sale
      console.error('Error al comprar el producto');
      return;
    }

    this.buyEvent.emit();
    this.bought = true;
    setTimeout(() => {
      this.bought = false;
      this.clicks = 0;
    }, 2000);
  }
}
