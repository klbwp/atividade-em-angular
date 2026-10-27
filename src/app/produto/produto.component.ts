import { CurrencyPipe } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Produto, ProdutoService } from '../servicos/produto.service';

@Component({
  selector: 'app-produto',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css',
})
export class ProdutoComponent implements OnInit {
  @Input() id!: string;

  private readonly produtoService = inject(ProdutoService);
  produto: Produto | undefined;

  ngOnInit(): void {
    this.produto = this.produtoService.getProdutoPorId(Number(this.id));
  }
}
