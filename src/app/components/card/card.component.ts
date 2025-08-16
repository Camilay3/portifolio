import { Component, inject } from '@angular/core';
import { TelaService } from '../../services/tela.service';
import { DialogoComponent } from '../../modals/dialogo/dialogo.component';
import { MatDialog } from '@angular/material/dialog';

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

  desktop?: boolean;
  constructor(private telaService: TelaService) { }

  ngOnInit(): void {
    // Monitora se é desktop
    this.telaService.desktop$.subscribe(isDesktop => {
      this.desktop = isDesktop;
    });
  }

  #dialog = inject(MatDialog)
  openModal() {
    this.#dialog.open(DialogoComponent, {
      disableClose: true
    })
  }
}

