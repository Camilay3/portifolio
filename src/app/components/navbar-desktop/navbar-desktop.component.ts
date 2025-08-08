import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar-desktop',
  imports: [RouterLink],
  templateUrl: './navbar-desktop.component.html',
  styleUrl: './navbar-desktop.component.css'
})
export class NavbarDesktopComponent {
  rotaAtual: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.rotaAtual = event.urlAfterRedirects;
      }
    });
  }
}
