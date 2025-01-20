import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,

  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isScrolled: boolean = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = document.querySelector('.transparent-navbar') as HTMLElement;

    if (window.scrollY > 50) {
      this.isScrolled = true;
      navbar.classList.add('scrolled');
    } else {
      this.isScrolled = false;
      navbar.classList.remove('scrolled');
    }
  }
}
