import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alertas',
  imports: [],
  templateUrl: './alertas.component.html',
  styleUrl: './alertas.component.css'
})
export class AlertasComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { tipo: string; mensagem: string }) { }
}
