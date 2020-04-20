import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animations';


@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  animations: [fadeIn]
})
export class ContactComponent implements OnInit {
  title = 'Contacto';
  emailContacto: string;
  dataModel: any;
  
  ngOnInit() {
      console.log('contact.component cargado');
  }

  guardarEmail() {
    localStorage.setItem('emailContacto', this.emailContacto);
    console.log(localStorage.getItem('emailContacto'));
  }

  showDataModel(){
    console.log(this.dataModel);
  }
}