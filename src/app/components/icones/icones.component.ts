import { Component } from '@angular/core';

interface Icone {
  src: string,
  label: string
}

@Component({
  selector: 'app-icones',
  imports: [],
  templateUrl: './icones.component.html',
  styleUrl: './icones.component.css'
})
export class IconesComponent {
  icones: Icone[] = [
    /* FontAwesome: fab / FlatIcon: fi */
    { src: 'fab fa-node-js', label: 'Nodejs' },
    { src: 'fi fi-brands-typescript', label: 'Typescript' },
    { src: 'fab fa-js-square', label: 'Javascript' },
    { src: 'fab fa-git-alt', label: 'Git' },
    { src: 'fab fa-css3-alt', label: 'CSS' },
    { src: 'fab fa-html5', label: 'HTML' },
  ]
}
