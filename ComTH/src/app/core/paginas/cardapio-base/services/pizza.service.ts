import { Injectable } from '@angular/core';
import { IBebida, IPizza } from 'src/app/core/paginas/cardapio-base/models/pizzas.interface';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  recuperarPizzas() {
    const pizzas: Array<IPizza> = [
      {
        Nome: 'Alho Frito',
        Preco: 'R$ 38,00',
        Foto: 'https://files.menudino.com/cardapios/57354/11.jpg',
        Componentes: 'Massa de longa fermentação, molho de tomate caseiro, mozarela, alho frito e manjericão fresco.Massa de longa fermentação, molho de tomate caseiro, mozarela, alho frito e manjericão fresco.'
      },
      {
        Nome: 'Banana Nevada',
        Preco: 'R$ 38,00',
        Foto: 'https://files.menudino.com/cardapios/57354/13.jpg',
        Componentes: 'Massa de longa fermentação, banana, chocolate branco, doce de leite e canela.'
      },
      {
        Nome: 'Bacon Garlic',
        Preco: 'R$ 42,00',
        Foto: 'https://files.menudino.com/cardapios/57354/9.jpg',
        Componentes: 'Massa de longa fermentaçao, creme de alho confitado, mozarela, alho poró e bacon fatiado.'
      },
      {
        Nome: 'Calabresa',
        Preco: 'R$ 41,90',
        Foto: 'https://files.menudino.com/cardapios/57354/3.jpg',
        Componentes: 'Massa de longa fermentação, molho de tomate caseiro, mozarela, calabresa e cebola.'
      },
      {
        Nome: 'Calabresa Premium',
        Preco: 'R$ 47,50',
        Foto: 'https://files.menudino.com/cardapios/57354/4.jpg',
        Componentes: 'Massa de longa fermentação, molho de tomate caseiro, mozarela, alho poró, calabresa processada e requeijão vigor.'
      },
      {
        Nome: 'Calábria',
        Preco: 'R$ 45,50',
        Foto: 'https://files.menudino.com/cardapios/57354/5.jpg',
        Componentes: 'Massa de longa fermentação, molho de tomate caseiro, mozarela, calabresa em rodelas, cream cheese, manjericão e mel.'
      },
      {
        Nome: 'ComTH',
        Preco: 'R$ 43,50',
        Foto: 'https://files.menudino.com/cardapios/57354/6.jpg',
        Componentes: 'Massa de longa fermentação, molho de tomate caseiro, mozarela, calabresa processada, alho frito, azeitona e molho agridoce.'
      },
      {
        Nome: 'Frango no Vigor',
        Preco: 'R$ 49,00',
        Foto: 'https://files.menudino.com/cardapios/57354/8.jpg',
        Componentes: 'Massa de longa fermentação, molho de tomate caseiro, mozarela, frango desfiado e requeijão vigor.'
      },
      {
        Nome: 'Portuga',
        Preco: 'R$ 45,00',
        Foto: 'https://files.menudino.com/cardapios/57354/7.jpg',
        Componentes: 'Massa de longa fermentação, molho de tomate caseiro, presunto, farofa de bacon, mozarela, cebola e azeitona.'
      },
      {
        Nome: 'Mozarela',
        Preco: 'R$ 36,00',
        Foto: 'https://files.menudino.com/cardapios/57354/12.jpg',
        Componentes: 'Massa de longa fermentação, molho de tomate caseiro, mozarela e orégano.'
      },
      {
        Nome: 'Rainha Margherita',
        Preco: 'R$ 36,00',
        Foto: 'https://files.menudino.com/cardapios/57354/10.jpg',
        Componentes: 'Massa de longa fermentação, molho de tomate caseiro, mozarela, tomate em cubos e manjericão fresco.'
      }
    ]

    return of (pizzas);
  }

  recuperarBebidas() {
    const bebidas: Array<IBebida> = [
      {
        Nome: 'Coca Cola 1,5L',
        Preco: 'R$ 12,00'
      },
      {
        Nome: 'Coca Cola Zero 1,5L',
        Preco: 'R$ 12,00'
      },
      {
        Nome: 'Fanta Guaraná 1,5L',
        Preco: 'R$ 12,00'
      },
      {
        Nome: 'Coca Cola Lata',
        Preco: 'R$ 5,00'
      },
      {
        Nome: 'Coca Cola Zero Lata',
        Preco: 'R$ 5,00'
      },
      {
        Nome: 'Fanta Guaraná Lata',
        Preco: 'R$ 5,00'
      }
    ]

    return of (bebidas);
  }
}
