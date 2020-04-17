import { Component, DoCheck, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'main-email',
  template: `
    <div class="card">
      <h2>{{ title }}</h2>
      <hr/>
      <mostrar-email></mostrar-email>
      <guardar-email></guardar-email>
    </div>
  `
})

export class MainEmailComponent implements OnInit {
  title = 'Módulo de email';

  ngOnInit() {
    console.log("Componente principal del módulo cargado");
  }
  
  faEnvelope = faEnvelope;

  
}