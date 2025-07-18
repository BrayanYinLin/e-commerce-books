import { Injectable } from '@angular/core';

export interface Product {
  id: string;
  name: string;
  stock: number;
  price: number;
  image: string;
}

// const fakeProduct = {
//   'name': "Don Quijote de la Mancha",
//   'price': 19.90,
//   'stock': 50,
//   'image': "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1678144051i/122858226.jpg"
// }

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // Método para obtener todos los productos
  async findAll(): Promise<Product[]> {
    try {
      const response = await fetch('http://localhost:3000/api/products');
      const data = await response.json();
      return data as unknown as Product[];
    } catch (e) {
      console.error(e);
      return [];
    }
  }

  // Método para comprar un producto
  async buyProduct(id: string): Promise<Product | null> {
    try {
      const response = await fetch(
        `http://localhost:3000/api/products/buy/${id}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        },
      );
      if (!response.ok) throw new Error('Error al comprar el producto');
      const data = await response.json();
      return data as Product;
    } catch (e) {
      console.error(e);
      return null;
    }
  }
}
