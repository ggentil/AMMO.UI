import { Categoria } from './categorias.class';

export class Produto {
    constructor(
        public nome?: string,
        public precoDe?: number,
        public precoPor?: number,
        public imagens?: string[],
        public categorias?: Categoria[]
    ) { }
}