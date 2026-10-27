import { Routes } from '@angular/router';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutosComponent } from './produtos/produtos.component';

export const routes: Routes = [
  { path: '', component: ProdutosComponent, title: 'Produtos | TechStore' },
  { path: 'produto/:id', component: ProdutoComponent, title: 'Produto | TechStore' },
  { path: '**', redirectTo: '' },
];
