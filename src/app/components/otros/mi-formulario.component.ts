import { Component } from '@angular/core';
import { PuebloComponent } from './pueblo.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
    selector: 'mi-formulario',
    templateUrl: '../otros/mi-formulario.component.html',
    
})

export class MiFormularioComponent {
    public ciudad: string = "Milano";
    public pais  : string = "Italia";

    showPueblo(event):void{
        alert(event.nombre);
    }
}