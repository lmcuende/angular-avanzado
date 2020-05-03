import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { UserService } from '../../services/user.service';
import { User } from '../../models/user';


@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit{
    public title: String;
    public user: User;
    public identity;
    public token;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserService
    ){
        this.title = 'Identificate';
        this.user = new User('', '', '', '', '', 'ROLE_USER', '');
    }

    ngOnInit(){
        console.log('login.component cargado');
    }

    onSubmit() {
        // Loguear al usuario y conseguir el objeto
       this._userService.signup(this.user).subscribe(
           response => {
                this.identity = response.user;

                if(!this.identity || !this.identity._id) {
                    alert('El usuario no se ha logueado correctamente');
                } else {
                        //Mostrar identity
                    console.log(this.identity);

                        //Conseguir el token
                    this._userService.signup(this.user, 'true').subscribe(
                        response => {
                             this.token = response.token;
             
                             if(!this.token.length <= 0) {
                                 alert('El token no se ha generado');
                             } else {
                                 //Mostrar token
                                 console.log(this.token);
             
                             }
                        },
                        error => {
                            console.log(<any>error);
                        }
                    );
                }
           },
           error => {
               console.log(<any>error);
           }
       ); 
    }
}