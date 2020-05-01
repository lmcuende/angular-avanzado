import { Injectable } from  '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { ajax } from 'rxjs/ajax';
import { GLOBAL } from './global';

@Injectable()

export class UserService{
    public url: string;
    constructor(private _http: HttpClient) {
        this.url = GLOBAL.url;
    }

    register() {
        return "Texto desde el servicio";
    }
}
