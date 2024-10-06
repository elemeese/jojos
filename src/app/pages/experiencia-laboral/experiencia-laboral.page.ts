import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.page.html',
  styleUrls: ['./experiencia-laboral.page.scss'],
})
export class ExperienciaLaboralPage implements OnInit {

  // Definir la propiedad 'experience'
  experience = {
    company: '',
    startYear: null,
    endYear: null,
    position: ''
  };

  constructor() { }

  ngOnInit() {}

  // Definir el método 'onSubmit' para manejar el formulario
  onSubmit() {
    console.log('Experiencia Laboral Guardada:', this.experience);
    // Aquí puedes agregar la lógica para guardar la experiencia laboral, por ejemplo, en una base de datos o servicio.
  }
}
