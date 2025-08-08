import { Component } from '@angular/core';
import { CardComponent } from "./components/card/card.component";
import { NavbarDesktopComponent } from "./components/navbar-desktop/navbar-desktop.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CardComponent, NavbarDesktopComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
