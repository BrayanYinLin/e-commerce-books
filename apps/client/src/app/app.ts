import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./layout/navbar/navbar";
import { HomePageComponent } from "./features/home/pages/home-page/home-page";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomePageComponent, Navbar],
  templateUrl: './app.html'
})
export class App {
  
}
