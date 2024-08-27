import { Component, OnInit } from '@angular/core';
import { IPizza } from 'src/app/core/paginas/cardapio-base/models/pizzas.interface';
import { PizzaService } from 'src/app/core/paginas/cardapio-base/services/pizza.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit{
  pizzas!: Array<IPizza>

  constructor (private pizzaService: PizzaService) {}

  ngOnInit() {
    this.recuperarPizzas();
  }

  recuperarPizzas() {
    this.pizzaService.recuperarPizzas()
      .subscribe((response) => {
        this.pizzas = response;
      });
  }

}
