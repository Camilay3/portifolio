import { Component } from '@angular/core';
import { CardComponent } from "./components/card/card.component";
import { NavbarDesktopComponent } from "./components/navbar-desktop/navbar-desktop.component";

@Component({
  selector: 'app-root',
  imports: [CardComponent, NavbarDesktopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
