import { Injectable } from '@angular/core';
import { IPizza } from '../models/pizzas.interface';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  recuperarPizzas() {
    const pizzas: Array<IPizza> = [
      {
        Nome: 'Alho Frito',
        Preco: 'R$ 38,00',
        Foto: 'https://files.menudino.com/cardapios/57354/11.jpg'
      },
      {
        Nome: 'Bacon Garlic',
        Preco: 'R$ 42,00',
        Foto: 'https://files.menudino.com/cardapios/57354/9.jpg'
      },
      {
        Nome: 'Calabresa',
        Preco: 'R$ 41,90',
        Foto: 'https://files.menudino.com/cardapios/57354/3.jpg'
      }
    ]

    return of (pizzas);
  }
}
