import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';
import { SidebarModule } from 'ng-sidebar';


import { routing, appRoutingProviders } from './app.routing';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Importar nuestro nuevo módulo
import { ModuloEmailModule } from './moduloemail/moduloemail.module';
import { AdminModule } from './admin/admin.module';


// Components

import { AppComponent }     from './app.component';
import { TiendaComponent }  from './components/tienda/tienda.component';
import { ParquesComponent } from './components/parques/parques.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent }    from './components/home/home.component';
import { KeepersComponent } from './components/keepers/keepers.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';


// Otros

import { PuebloComponent }       from './components/otros/pueblo.component';
import { MiFormularioComponent } from './components/otros/mi-formulario.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';





@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    ParquesComponent,
    AnimalsComponent,
    ContactComponent,
    HomeComponent,
    KeepersComponent,
    PuebloComponent,
    MiFormularioComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    SidebarModule.forRoot(),
    EditorModule,
    FormsModule,
    AppRoutingModule,
    routing,
    FontAwesomeModule,
    ModuloEmailModule,
    BrowserAnimationsModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
