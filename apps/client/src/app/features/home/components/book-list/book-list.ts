import { Component, signal } from '@angular/core';
import { Card } from '../card/card';
import { Product, ProductService } from '../../../../service/product-service/product-service';

@Component({
  selector: 'app-book-list',
  imports: [Card],
  templateUrl: './book-list.html',
  styles: ``
})
export class BookList {
  products = signal<Product[]>([]);
  constructor(private service: ProductService) {
    
  }

  async ngOnInit() {
    const data = await this.service.findAll();
    console.log(data)
    this.products.set(data);
  }
  
}
