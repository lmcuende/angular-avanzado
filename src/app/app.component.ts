import { Component, DoCheck, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { faHome, faHippo, faWalking, faStore, faEnvelope, faUser, faSignInAlt, faIdCard, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import { UserService } from './services/user.service';
import { User } from './models/user';

declare var tinymce: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit, DoCheck {
  public title: string;
  public identity;
  
  emailContacto: string;
  faHome = faHome;
  faHippo = faHippo;
  faWalking = faWalking;
  faStore = faStore;
  faEnvelope = faEnvelope;
  faUser = faUser;
  faSignInAlt = faSignInAlt;
  faIdCard = faIdCard;
  faSignOutAlt = faSignOutAlt;

  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
        private _router: Router
  ){
    this.title = 'NGZOO';
  }
  
  

  ngOnInit() {
    this.emailContacto = localStorage.getItem('emailContacto');
    //console.log(localStorage.getItem('emailContacto'));
    // tinymce.init(
    //   {
    //     selector: "#mymce1"
    //   }
    // );
    this.identity = this._userService.getIdentity();
  }

  ngDoCheck(){
    this.emailContacto = localStorage.getItem('emailContacto');
    this.identity = this._userService.getIdentity();
  }

  logout() {
    localStorage.clear();
    this.identity = null;
    this._router.navigate(['/']);
  }

  borrarEmail() {
    localStorage.removeItem('emailContacto');
    localStorage.clear();
    this.emailContacto = null;
  }
}


