import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { PageListaComponent } from "./page-lista/page-lista.component";


const APP_ROUTES: Routes = [
    { path: ':pagina/:termo', component: PageListaComponent },
    { path: ':pagina', component: PageListaComponent },
    { path: '', component: PageListaComponent },
    { path: '**', redirectTo: '/' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);