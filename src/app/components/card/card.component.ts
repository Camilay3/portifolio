import { Component, inject } from '@angular/core';
import { TelaService } from '../../services/tela.service';
import { DialogoComponent } from '../../modals/dialogo/dialogo.component';
import { MatDialog } from '@angular/material/dialog';
import { AlertasComponent } from '../../modals/alertas/alertas.component';

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
      disableClose: true,
      height: 'auto',
      maxHeight: '90vh',
    })
  }
}

