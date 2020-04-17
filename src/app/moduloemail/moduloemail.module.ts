// Importar módulos necesarios para crear módulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


// Importar componentes
import { GuardarEmailComponent } from './components/guardar-email/guardar-email.component';
import { MostrarEmailComponent } from './components/mostrar-email/mostrar-email.component';
import { MainEmailComponent} from './components/maim-email/main-email.component';


// Decorar ngModule para cargar los componentes y la configuradción del módulo
@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [
        GuardarEmailComponent,
        MostrarEmailComponent,
        MainEmailComponent
    ],
    exports: [MainEmailComponent]
})

export class ModuloEmailModule {}