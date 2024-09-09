import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  username: string = '';

  constructor(private navCtrl: NavController) {}

  resetPassword() {
    // Aquí iría la lógica para restablecer la contraseña
    this.navCtrl.navigateBack('/login');
  }
}