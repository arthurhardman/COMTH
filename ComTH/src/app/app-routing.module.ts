import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './core/paginas/inicio/inicio.component';
import { CardapioBaseComponent } from './core/paginas/cardapio-base/paginas/cardapio-base.component';
import { PizzaComponent } from './core/paginas/cardapio-base/components/pizza/pizza.component';
import { BebidaComponent } from './core/paginas/cardapio-base/components/bebida/bebida.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/inicio',
  },
  {
    path: "inicio",
    component: InicioComponent
  },
  {
    path: "cardapio",
    component: CardapioBaseComponent,
    children: [
      {
        path: 'pizzas',
        component: PizzaComponent
      },
      {
        path: 'bebidas',
        component: BebidaComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
