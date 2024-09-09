// login.component.ts
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

  constructor(private navCtrl: NavController) {}

  login() {
    // Aquí iría la lógica de autenticación
    this.navCtrl.navigateForward('/home');
  }

  goToResetPassword() {
    this.navCtrl.navigateForward('/reset-password');
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}