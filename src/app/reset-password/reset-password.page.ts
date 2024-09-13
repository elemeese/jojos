import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage {
  email: string = '';

  constructor(private router: Router) {}

  onResetPassword() {
    if (this.email) {
      // Aquí se debe implementar la lógica para enviar el enlace de restablecimiento de contraseña
      console.log('Enlace de restablecimiento enviado a', this.email);
      this.router.navigate(['/login']); // Redirigir de vuelta al login tras enviar el enlace
    } else {
      console.log('Por favor, introduce tu correo electrónico');
    }
  }

  goBack() {
    this.router.navigate(['/login']); // Redirigir de vuelta al inicio de sesión
  }
}
