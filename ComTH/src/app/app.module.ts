import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './core/paginas/inicio/inicio.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CardapioBaseComponent } from './core/paginas/cardapio-base/paginas/cardapio-base.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CardapioBaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
