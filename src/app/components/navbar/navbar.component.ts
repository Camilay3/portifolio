import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { TelaService } from '../../services/tela.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  rotaAtual: string = '';
  desktop?: boolean;

  constructor(private router: Router, private telaService: TelaService) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.rotaAtual = event.urlAfterRedirects;
      }
    });

    // Monitora se é desktop
    this.telaService.desktop$.subscribe(isDesktop => {
      this.desktop = isDesktop;
    });
  }
}
