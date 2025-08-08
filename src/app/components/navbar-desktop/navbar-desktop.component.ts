import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar-desktop',
  imports: [RouterLink],
  templateUrl: './navbar-desktop.component.html',
  styleUrl: './navbar-desktop.component.css'
})
export class NavbarDesktopComponent {
  selecionado: boolean = false;
}
