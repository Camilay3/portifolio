import { Component, Input } from '@angular/core';
import { Icone } from './icone';

@Component({
  selector: 'app-icones',
  imports: [],
  templateUrl: './icones.component.html',
  styleUrl: './icones.component.css'
})
export class IconesComponent {
  @Input() lista!: Icone[];
}
