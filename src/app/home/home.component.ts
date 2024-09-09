// home.component.ts
import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('welcomeMessage', { static: true }) welcomeMessage!: ElementRef<HTMLHeadingElement>;
  username: string = 'Usuario'; // Este valor debería obtenerse del servicio de autenticación

  constructor(private animationCtrl: AnimationController) {}

  ngOnInit() {
    // Inicialización que no depende de la vista
  }

  ngAfterViewInit() {
    // Aseguramos que la vista está completamente cargada antes de animar
    this.animateWelcome();
  }

  animateWelcome() {
    if (this.welcomeMessage && this.welcomeMessage.nativeElement) {
      const animation = this.animationCtrl.create()
        .addElement(this.welcomeMessage.nativeElement)
        .duration(1000)
        .iterations(1)
        .fromTo('opacity', '0', '1')
        .fromTo('transform', 'translateY(-50px)', 'translateY(0px)');

      animation.play();
    } else {
      console.warn('El elemento de bienvenida no se encontró en el DOM');
    }
  }
}