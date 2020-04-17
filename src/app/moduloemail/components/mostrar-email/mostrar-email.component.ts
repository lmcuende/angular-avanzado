import { Component, DoCheck, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'mostrar-email',
  template: `
    <div *ngIf="emailContacto">
      <h4>{{ title }}</h4>
      <strong>Email de contacto:</strong> {{ emailContacto }}
      <button (click)="borrarEmail()">Eliminar email de contacto</button>
    </div>
  `
})

export class MostrarEmailComponent implements DoCheck, OnInit {
  title = 'Mostrar email';
  emailContacto: string;
  
  faEnvelope = faEnvelope;

  ngOnInit() {
    this.emailContacto = localStorage.getItem('emailContacto');
  }

  ngDoCheck() {
    this.emailContacto = localStorage.getItem('emailContacto');
  }

  borrarEmail() {
    localStorage.removeItem('emailContacto');
    localStorage.clear();
    this.emailContacto = null;
  }
}


