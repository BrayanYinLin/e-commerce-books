import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styles: ``
})
export class Card {
  title = input.required<string>();
  description = input.required<string>();
  imageUrl = input.required<string>();
  price = input.required<number>();
}
