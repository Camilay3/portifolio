import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  redirecionar(url: string) {
    window.open(url, '_blank', 'noopener noreferrer');
  }
}
