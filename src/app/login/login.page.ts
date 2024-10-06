import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';
  passwordType: string = 'password';  // Tipo de campo por defecto
  passwordIcon: string = 'eye-off';   // Ícono por defecto

  constructor(private router: Router, private dataService: DataService) {}

  onLogin() {
    if (!this.email || !this.password) {
      console.log('Por favor, ingresa tu correo electrónico y contraseña');
      return;
    }

    // Autenticación simulada usando JSON
    this.dataService.getUsers().subscribe((users: any[]) => {
      const user = users.find((u) => u.email === this.email && u.password === this.password);
      if (user) {
        console.log('Usuario autenticado', this.email);
        this.router.navigate(['/home']);
      } else {
        console.log('Credenciales incorrectas');
      }
    });
  }

  goToResetPassword() {
    this.router.navigate(['/reset-password']);
  }

  // Método para alternar la visibilidad de la contraseña
  togglePasswordVisibility() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }
}
