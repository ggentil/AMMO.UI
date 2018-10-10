import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PageListaComponent } from './page-lista/page-lista.component';
import { ProdutoComponent } from './shared/components/produto/produto.component';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    PageListaComponent,
    ProdutoComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
