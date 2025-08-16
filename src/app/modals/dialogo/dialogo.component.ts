import { Component, inject } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AlertasComponent } from '../alertas/alertas.component';

@Component({
  selector: 'app-dialogo',
  imports: [],
  templateUrl: './dialogo.component.html',
  styleUrl: './dialogo.component.css'
})
export class DialogoComponent {
  constructor(
    private dialogRef: MatDialogRef<DialogoComponent>
  ) { }

  public closeModal() {
    return this.dialogRef.close();
  }

  #dialog = inject(MatDialog);

  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm('service_z05btzr', 'template_q2wk59t', e.target as HTMLFormElement, {
        publicKey: 'dEr2-__vF6-Ouqsfi',
      })
      .then(
        (result) => {
          console.log('SUCCESS!', result.status, result.text);

          const alertRef = this.#dialog.open(AlertasComponent, {
            disableClose: true,
            data: {
              tipo: 'sucesso',
              mensagem: 'Email enviado com sucesso!'
            }
          });

          this.closeModal();
          setTimeout(() => alertRef.close(), 3000);
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);

          const alertRef = this.#dialog.open(AlertasComponent, {
            disableClose: true,
            data: {
              tipo: 'erro',
              mensagem: 'Falha ao enviar email'
            }
          });

          this.closeModal();
          setTimeout(() => alertRef.close(), 3000);
        }
      );
  }
}
