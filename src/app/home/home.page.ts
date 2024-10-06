import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';  // Para manejar el modal
import { AddTripComponent } from '../add-trip/add-trip.component';  // Componente para agregar un viaje

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
  trips: Trip[] = [];  // Array de viajes (trips)
  selectedSegment: string = 'mis-datos';  // El segmento seleccionado por defecto

  constructor(
    private router: Router,  // Inyección de Router para navegación
    private modalController: ModalController  // Inyección del ModalController
  ) {}

  ngOnInit() {
    this.loadTrips();  // Cargar los viajes cuando se inicializa el componente
  }

  // Simular la carga de los viajes
  loadTrips() {
    this.trips = [
      {
        driverName: 'Juan Pérez',
        destination: 'Santiago',
        price: 15000,
        availableSeats: 3,
      },
      {
        driverName: 'María López',
        destination: 'Valparaíso',
        price: 12000,
        availableSeats: 0,
      },
      {
        driverName: 'Carlos Sánchez',
        destination: 'Concepción',
        price: 20000,
        availableSeats: 2,
      },
    ];
  }

  // Manejar la selección de segmentos (Mis Datos, Experiencia Laboral, Certificaciones)
  onSegmentChanged(event: any) {
    const selectedValue = event.detail.value;
    
    if (selectedValue === 'mis-datos') {
      this.router.navigate(['/mis-datos']);
    } else if (selectedValue === 'experiencia-laboral') {
      this.router.navigate(['/experiencia-laboral']);
    } else if (selectedValue === 'certificaciones') {
      this.router.navigate(['/certificaciones']);
    }
  }

  // Método para cerrar sesión
  logOut() {
    this.router.navigate(['/login']);
  }

  // Método para manejar la solicitud de un viaje
  requestTrip(trip: Trip) {
    if (trip.availableSeats > 0) {
      trip.availableSeats--;
      console.log('Has solicitado un viaje con', trip.driverName);
    } else {
      console.log('No hay asientos disponibles');
    }
  }

  // Método para abrir el modal y agregar un nuevo viaje
  async addTrip() {
    const modal = await this.modalController.create({
      component: AddTripComponent,  // Especificar el componente del modal
    });

    // Manejar los datos cuando se cierre el modal
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        const newTrip = dataReturned.data;
        this.trips.push(newTrip);  // Agregar el nuevo viaje a la lista
      }
    });

    return await modal.present();  // Presentar el modal
  }
}
