import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    // Aquí puedes añadir tu lógica de autenticación
    const token = localStorage.getItem('authToken');
    return !!token;  // Retorna true si el token existe, de lo contrario false
  }
}
