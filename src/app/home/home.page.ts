import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

interface Trip {
  driverName: string;
  destination: string;
  price: number;
  availableSeats: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  trips: Trip[] = [];  // Define el array 'trips'

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {
    this.loadTrips();  // Cargar los viajes cuando se inicia el componente
  }

  loadTrips() {
    // Llama al servicio para obtener los viajes desde el archivo JSON o API
    this.dataService.getTrips().subscribe((trips: Trip[]) => {
      this.trips = trips;  // Asigna los viajes a la propiedad 'trips'
    });
  }

  logOut() {
    this.router.navigate(['/login']);  // Redirigir al login
  }

  requestTrip(trip: Trip) {
    if (trip.availableSeats > 0) {
      trip.availableSeats--;
      console.log('Has solicitado un viaje con', trip.driverName);
    } else {
      console.log('No hay asientos disponibles');
    }
  }  

  addTrip() {
    console.log('Agregar un nuevo viaje');
  }
}
