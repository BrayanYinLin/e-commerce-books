import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styles: ``
})
export class Navbar {
  @ViewChild('searchInput') searchInputRef!: ElementRef<HTMLInputElement>;

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.ctrlKey && event.key.toLowerCase() === 'k') {
      event.preventDefault(); // evita comportamiento por defecto del navegador
      this.searchInputRef?.nativeElement.focus(); // enfoca el input
    }
  }
}
