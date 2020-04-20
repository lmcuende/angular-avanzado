import { Component, DoCheck, OnInit } from '@angular/core';
import { faHome, faHippo, faWalking, faStore, faEnvelope } from '@fortawesome/free-solid-svg-icons';
declare var tinymce: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NGZOO';
  emailContacto: string;
  faHome = faHome;
  faHippo = faHippo;
  faWalking = faWalking;
  faStore = faStore;
  faEnvelope = faEnvelope;

  

  ngOnInit() {
    this.emailContacto = localStorage.getItem('emailContacto');
    //console.log(localStorage.getItem('emailContacto'));
    tinymce.init(
      {
        selector: "#mymce1"
      }
    );
  }

  ngDoCheck(){
    this.emailContacto = localStorage.getItem('emailContacto');
    //console.log('El DoCheck se ha ejecutado');
  }

  borrarEmail() {
    localStorage.removeItem('emailContacto');
    localStorage.clear();
    this.emailContacto = null;
  }
}


