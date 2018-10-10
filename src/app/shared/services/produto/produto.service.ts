import { Injectable } from '@angular/core';

import { RequestService } from '../request/request.service';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private _requestService: RequestService) { }

  listarProdutos(qtdePorPagina: number, pagina: number, termo: string) {
    return this._requestService.requestMethod(`/produtos/${qtdePorPagina}/${pagina}/${termo}`, "GET", true);
  }
}
