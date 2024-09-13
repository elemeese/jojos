import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface User {
  email: string;
  password: string;
}

interface Trip {
  driverName: string;
  destination: string;
  price: number;
  availableSeats: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  // Método para obtener usuarios desde un archivo JSON
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/assets/data/users.json');  // Asegúrate de que la ruta sea correcta
  }

  // Método para obtener los viajes
  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>('/assets/data/trips.json');  // Asegúrate de que la ruta sea correcta
  }
}


