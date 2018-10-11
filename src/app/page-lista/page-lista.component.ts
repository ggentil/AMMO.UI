import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { ProdutoService } from '../shared/services/produto/produto.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'lista',
    templateUrl: './page-lista.component.html',
    styleUrls: ['./page-lista.component.scss']
})
export class PageListaComponent implements OnInit {

    termo: string = '';
    buscaTitulo: string = "";
    qtdeTotalProdutos: number;
    produtosPorPagina: number = 16;    
    produtos: Object[] = [];
    pages: any;

    @ViewChild('header') header: ElementRef;

    constructor(private _produtoService: ProdutoService, private _activatedRouteService: ActivatedRoute, private router: Router) { 
        console.log('constructor');

        this.router.events
            .subscribe(event => {
                if(event instanceof NavigationEnd)
                    this.atualizarPagina();
            });
    }

    ngOnInit() {
        console.log('onInit');
    };
    
    atualizarPagina(){
        this._activatedRouteService.params
            .subscribe(params => {
                this.carregarListagem(params.qtdePorPagina ? params.qtdePorPagina : this.produtosPorPagina, params.pagina ? params.pagina : 1, params.termo ? params.termo : '');
            }, error => {
                console.log(error);
                this.carregarListagem(this.produtosPorPagina, 1, '');
            });
    }

    zerarBusca() {
        this.termo = '';
        this.recarregarListagemBusca();
    };

    recarregarListagem() {
        this.router.navigate(['', this.produtosPorPagina, this.pages.paginaAtual, this.termo]);
    };

    recarregarListagemBusca() {
        this.router.navigate(['', this.produtosPorPagina, 1, this.termo]);
    };

    irParaPagina(pagina) {
        this.router.navigate(['', this.produtosPorPagina, pagina, this.pages.termo]);
    }

    montarPaginacao(termoUsado, paginaAtual) {
        let qtdeTotalPaginas = Math.ceil(this.qtdeTotalProdutos / this.produtosPorPagina);
        let disponiveis = [];

        qtdeTotalPaginas = qtdeTotalPaginas == 0 ? 1 : qtdeTotalPaginas;
        paginaAtual = parseInt(paginaAtual);

        this.pages = {};

        //calcular páginas abaixo
        for (let i = paginaAtual - 1; i > paginaAtual - 3; i--) {
            if(i <= 0) break;
            disponiveis.unshift(i);
        }

        disponiveis.push(paginaAtual);

        //calcular páginas acima
        for (let i = paginaAtual + 1; i < paginaAtual + 3; i++) {
            if(i > qtdeTotalPaginas) break;
            disponiveis.push(i);
        }

        this.pages = {
            paginaAtual: paginaAtual,
            qtdeTotalPaginas: qtdeTotalPaginas,
            termo: termoUsado,
            disponiveis: disponiveis
        };

        if(paginaAtual - 1 >= 1) this.pages.anterior = paginaAtual - 1;
        if(paginaAtual + 1 <= qtdeTotalPaginas) this.pages.proxima = paginaAtual + 1;
    };

    carregarListagem(produtosPorPagina, pagina, termo) {
        this._produtoService.listarProdutos(produtosPorPagina, pagina, termo)
            .subscribe(response => {
                if(response.success) {
                    this.produtos = response.data.produtos;
                    this.qtdeTotalProdutos = response.data.total;
                    this.produtosPorPagina = produtosPorPagina;
                    this.termo = termo;

                    this.montarPaginacao(termo, pagina);
                    this.buscaTitulo = termo ? termo : "Lista de produtos";

                    this.header.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                } else {
                    console.log(response);
                    alert("Ocorreu um erro ao processar a lista, por favor tente mais tarde.");
                }
            }, err => {
                console.log(err);
                if(err.error.message) alert(err.error.message);
            });
    };
}
