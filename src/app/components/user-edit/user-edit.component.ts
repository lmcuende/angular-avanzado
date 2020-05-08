import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { GLOBAL } from '../../services/global';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'user-edit',
    templateUrl: './user-edit.component.html',
    providers: [UserService]
})

export class UserEditComponent implements OnInit {
    public title: string;
    public user: User;
    public identity;
    public token;
    public status;

    constructor(
        private _userService: UserService
    ){
        this.title = 'actualizar mis datos';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.user = this.identity.user;
        this.status = '';

    }

    ngOnInit() {
        console.log('user-edit.component.ts cargado');
    }

    onSubmit() {
        this._userService.updateUser(this.user).subscribe(
            response => {
                if(this.user) {
                    this.status="Success";
                    localStorage.setItem('identity', JSON.stringify(this.user));
                    
                    // aquí iría la subida de la imagen
                    
                } else {
                    this.status="Error";
                }
            },
            error => {
                var errorMessage = <any>error;
                if(errorMessage != null) {
                    this.status = "Error";
                }
            }
        )
    }
}