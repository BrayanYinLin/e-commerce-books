import { Component } from '@angular/core';
import { Navbar } from "../../../../layout/navbar/navbar";
import { HeroSection } from "../../components/hero-section/hero-section";
import { Card } from "../../components/card/card";
import { BookList } from "../../components/book-list/book-list";

@Component({
  selector: 'app-home-page',
  imports: [Navbar, HeroSection, Card, BookList],
  templateUrl: './home-page.html',
  styles: ``
})
export class HomePageComponent {
  
}
