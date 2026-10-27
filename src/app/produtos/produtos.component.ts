import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProdutoService } from '../servicos/produto.service';

@Component({
  selector: 'app-produtos',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css',
})
export class ProdutosComponent {
  private readonly produtoService = inject(ProdutoService);
  readonly produtos = this.produtoService.getProdutos();
}
