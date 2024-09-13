import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.scss'],
})
export class AddTripComponent {
  trip = {
    destination: '',
    price: 0,
    availableSeats: 0
  };

  constructor(private modalController: ModalController) {}

  dismissModal() {
    this.modalController.dismiss(); // Cerrar el modal
  }

  addTrip() {
    if (this.trip.destination && this.trip.price > 0 && this.trip.availableSeats > 0) {
      this.modalController.dismiss(this.trip); // Pasar datos de vuelta
    } else {
      console.log('Por favor, completa todos los campos');
    }
  }
}
