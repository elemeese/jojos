import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

interface User {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private dataService: DataService) {}

  onLogin() {
    if (!this.email || !this.password) {
      console.log('Por favor, ingresa tu correo electrónico y contraseña');
      return;
    }

    // Autenticación simulada usando JSON
    this.dataService.getUsers().subscribe((users: User[]) => {
      const user = users.find((u: User) => u.email === this.email && u.password === this.password);
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
}

