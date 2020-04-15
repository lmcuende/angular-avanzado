import { Component, Input } from '@angular/core';

@Component({
    selector: 'pueblo',
    template: `
        <hr/>
        <h3>{{nombre}}</h3>
        <p>Ciudad: {{ciudad}}</p>
        <p>Pais: {{nacionReal}}</p>
        <button>Lanzar alert</button>
    `
})

export class PuebloComponent {
//Guardamos los datos que nos pasa el compoenente padre
    @Input() ciudad: string;
    @Input('pais') nacionReal: string;

    public nombre:string;

    constructor(){
        this.nombre = "Pueblo de la Toscana";
    }
}