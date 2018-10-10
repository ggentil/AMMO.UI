import { Component, Input } from '@angular/core';

import { Produto } from '../../class/produto.class';

@Component({
  selector: 'produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent {

  @Input('produto') produto: Produto;
  formatoReal: Object = {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL'
  };

  constructor() { }

}
