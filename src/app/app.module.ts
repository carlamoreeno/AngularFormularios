import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { FooterComponent } from './footer/footer.component';

import { AppRoutingModule } from './app.routing.module'

import { HttpClientModule } from '@angular/common/http'; //Importar para service funcionar
import { PokemonService } from './services/pokemon/pokemon.service'; //Importar para service funcionar

import { FormsModule } from '@angular/forms'; //Importar formulários

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FormularioComponent,
    SobreComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    AppRoutingModule,
    HttpClientModule, //Importar para service funcionar
    FormsModule
  ],
  providers: [
    PokemonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
