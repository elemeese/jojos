import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  showPassword: boolean = false;
  loginError: string = '';

  constructor(private navCtrl: NavController) {}

  login() {
    // Lógica de autenticación básica
    if (this.username === 'alumno' && this.password === 'password123') {
      // Si las credenciales son correctas, navega a la página de inicio
      this.navCtrl.navigateForward('/home');
    } else {
      // Si las credenciales no son correctas, muestra un mensaje de error
      this.loginError = 'Nombre de usuario o contraseña incorrectos.';
    }
  }

  goToResetPassword() {
    this.navCtrl.navigateForward('/reset-password');
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
