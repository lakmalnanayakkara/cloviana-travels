import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private titleService: Title, private router: Router) {
    this.setDynamicTitle();
  }

  setDynamicTitle(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const currentRoute = this.router.routerState.root;
        this.setTitleFromRoute(currentRoute);
      });
  }

  setTitleFromRoute(route: any): void {
    while (route.firstChild) {
      route = route.firstChild;
    }

    if (route.snapshot.data && route.snapshot.data['title']) {
      this.titleService.setTitle(route.snapshot.data['title']);
    }
  }
}
