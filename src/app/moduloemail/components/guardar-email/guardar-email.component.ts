import { Component, DoCheck, OnInit } from '@angular/core';
import { faHome, faHippo, faWalking, faStore, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'guardar-email',
  template: `
    <h2>{{ title }}</h2>
    <input type="text" [(ngModel)]="emailContacto" />
    <button (click)="guardarEmail()">Guardar email</button>
  `
})
export class GuardarEmailComponent {
  title = 'Guardar email';
  emailContacto: string;
  faEnvelope = faEnvelope;

  guardarEmail() {
    localStorage.setItem('emailContacto', this.emailContacto);
  }
}


