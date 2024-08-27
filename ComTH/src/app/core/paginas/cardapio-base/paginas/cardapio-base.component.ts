import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cardapio-base',
  templateUrl: './cardapio-base.component.html',
  styleUrls: ['./cardapio-base.component.css']
})
export class CardapioBaseComponent {
  constructor (private router: Router){}

  onClickNavigateByCardapio() {
    this.router.navigateByUrl(`/inicio`);
  }
}
