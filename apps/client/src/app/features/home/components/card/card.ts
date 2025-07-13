import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styles: ``
})
export class Card {
  name = input.required<string>();
  image = input.required<string>();
  price = input.required<number>();
  stock = input.required<number>();
}
