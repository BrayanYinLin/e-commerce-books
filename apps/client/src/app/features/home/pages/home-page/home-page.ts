import { Component } from '@angular/core';
import { Navbar } from "../../../../layout/navbar/navbar";
import { HeroSection } from "../../components/hero-section/hero-section";

@Component({
  selector: 'app-home-page',
  imports: [Navbar, HeroSection],
  templateUrl: './home-page.html',
  styles: ``
})
export class HomePageComponent {

}
