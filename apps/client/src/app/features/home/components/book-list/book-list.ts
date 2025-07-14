import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../card/card';
import { Product, ProductService } from '../../../../service/product-service/product-service';
import { Alert } from '../alert/alert';

@Component({
  selector: 'app-book-list',
  imports: [Card, Alert, CommonModule],
  templateUrl: './book-list.html',
  styles: ``
})
export class BookList {
  products = signal<Product[]>([]);
  alertVisible = signal(false);

  constructor(private service: ProductService) {
    
  }

  async ngOnInit() {
    const data = await this.service.findAll();
    console.log(data)
    this.products.set(data);
  }
  
  showAlert() {
    this.alertVisible.set(true);
    this.ngOnInit();
    setTimeout(() => this.alertVisible.set(false), 2000);
  }
}
