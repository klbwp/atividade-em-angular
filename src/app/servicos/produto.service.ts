import { Injectable } from '@angular/core';

export interface Produto {
  id: number;
  nome: string;
  preco: number;
  categoria: string;
  imagem: string;
  descricao: string;
  quantidadeDisponivel: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private readonly produtos: Produto[] = [
    {
      id: 1,
      nome: 'Fone Bluetooth Wave',
      preco: 249.9,
      categoria: 'Áudio',
      imagem:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85',
      descricao:
        'Fone sem fio confortável, com som imersivo e bateria de longa duração para acompanhar sua rotina.',
      quantidadeDisponivel: 18,
    },
    {
      id: 2,
      nome: 'Câmera Instax Mini',
      preco: 589.0,
      categoria: 'Fotografia',
      imagem:
        'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=85',
      descricao:
        'Câmera compacta para registrar momentos especiais e revelar suas fotos instantaneamente.',
      quantidadeDisponivel: 7,
    },
    {
      id: 3,
      nome: 'Smartwatch Pulse',
      preco: 429.9,
      categoria: 'Acessórios',
      imagem:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85',
      descricao:
        'Relógio inteligente com monitoramento de atividades, notificações e design versátil.',
      quantidadeDisponivel: 12,
    },
    {
      id: 4,
      nome: 'Câmera Mirrorless Pro',
      preco: 3499.0,
      categoria: 'Fotografia',
      imagem:
        'https://images.unsplash.com/photo-1510127034890-1e5895a8bf3e?auto=format&fit=crop&w=900&q=85',
      descricao:
        'Câmera digital de alta qualidade para criar fotos e vídeos com riqueza de detalhes.',
      quantidadeDisponivel: 4,
    },
    {
      id: 5,
      nome: 'Óculos de realidade virtual',
      preco: 2199.9,
      categoria: 'Acessórios',
      imagem:
        'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=900&q=85',
      descricao:
        'Entre em experiências imersivas de jogos e entretenimento com este headset de realidade virtual.',
      quantidadeDisponivel: 6,
    },
    {
      id: 6,
      nome: 'Caixa de som portátil',
      preco: 319.9,
      categoria: 'Áudio',
      imagem:
        'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=85',
      descricao:
        'Caixa de som compacta e portátil para levar suas músicas favoritas a qualquer lugar.',
      quantidadeDisponivel: 15,
    },
  ];

  getProdutos(): Produto[] {
    return this.produtos;
  }

  getProdutoPorId(id: number): Produto | undefined {
    return this.produtos.find((produto) => produto.id === id);
  }
}
