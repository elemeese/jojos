import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.scss'],
})
export class AddTripComponent {
  // Definimos la estructura de un viaje
  trip = {
    destination: '',
    price: 0,
    availableSeats: 0
  };

  constructor(private modalController: ModalController) {}

  // Método para cerrar el modal sin devolver datos
  dismissModal() {
    this.modalController.dismiss(); 
  }

  // Método para cerrar el modal y devolver los datos del viaje
  addTrip() {
    if (this.trip.destination && this.trip.price > 0 && this.trip.availableSeats > 0) {
      this.modalController.dismiss(this.trip); // Pasar los datos del viaje de vuelta
    } else {
      console.log('Por favor, completa todos los campos');
    }
  }
}
