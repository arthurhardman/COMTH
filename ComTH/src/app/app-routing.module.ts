import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './core/paginas/inicio/inicio.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
