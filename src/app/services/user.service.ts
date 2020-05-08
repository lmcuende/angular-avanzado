import { Injectable } from  '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
// import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { ajax } from 'rxjs/ajax';
import { GLOBAL } from './global';
import 'rxjs/add/operator/map';

@Injectable()

export class UserService{
    public url: string;
    public identity;
    public token;

    constructor(private _http: HttpClient) {
        this.url = GLOBAL.url;
    }

    register(user_to_register) {
        let params = JSON.stringify(user_to_register);
        let headers = new HttpHeaders({ 'Content-Type':'application/json' });
        const resp = this._http.post(this.url + 'register', params, {headers: headers});
        console.log(resp);

        return this._http.post(this.url + 'register', params, {headers: headers})
                         .map((res) => res);
    }
    signup(user_to_login, gettoken = null) {

        if(gettoken != null) {
            user_to_login.gettoken = gettoken;
        }

        let params = JSON.stringify(user_to_login);
        let headers = new HttpHeaders({ 'Content-Type': 'application/json'});

        return this._http.post(this.url + 'login', params, { headers: headers })
                         .map((res) => res);
    }

    getIdentity() {
        let identity = JSON.parse(localStorage.getItem('identity'));
        if(identity != "undefined")   {
            this.identity = identity;
        } else {
            this.identity = null;
        }
        return this.identity;
    }

    getToken() {
        let token = JSON.parse(localStorage.getItem('token'));
        if(token != "undefined") {
            this.token = token;
        } else {
            this.token = null;
        }
        return this.token;
    }

    updateUser(user_to_update){
        let params = JSON.stringify(user_to_update);
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': this.getToken()
        });

        return this._http.put(this.url + 'update-user:/' + user_to_update._id, params, { headers: headers })
                   .map((res) => res);
    }
}
