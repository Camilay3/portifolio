import { Component, Inject } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogo',
  imports: [],
  templateUrl: './dialogo.component.html',
  styleUrl: './dialogo.component.css'
})
export class DialogoComponent {
  constructor(
    private dialogRef: MatDialogRef<DialogoComponent>
  ) {}

  public closeModal() {
    return this.dialogRef.close();
  }

  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm('service_z05btzr', 'template_q2wk59t', e.target as HTMLFormElement, {
        publicKey: 'dEr2-__vF6-Ouqsfi',
      })
      .then(
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }
}
