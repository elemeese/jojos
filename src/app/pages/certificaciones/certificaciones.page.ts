import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificaciones',
  templateUrl: './certificaciones.page.html',
  styleUrls: ['./certificaciones.page.scss'],
})
export class CertificacionesPage implements OnInit {

  // Definir el objeto 'certification'
  certification = {
    name: '',
    obtainedDate: '',
    hasExpiration: false,
    expirationDate: ''
  };

  constructor() { }

  ngOnInit() {}

  // Definir el método onSubmit para manejar el formulario
  onSubmit() {
    console.log('Certificación guardada:', this.certification);
    // Aquí puedes agregar la lógica para guardar la certificación, por ejemplo, en una base de datos o servicio.
  }
}
