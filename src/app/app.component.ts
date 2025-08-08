import { Component } from '@angular/core';
import { CardComponent } from "./components/card/card.component";

@Component({
  selector: 'app-root',
  imports: [CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
