# TechStore

Catálogo de produtos feito em Angular para praticar serviços e passagem de parâmetros por rota.

## Executar

```bash
npm install
npm start
```

Abra `http://localhost:4200`.

## O que foi praticado

- `ProdutoService` guarda os produtos e procura um produto pelo ID.
- A página inicial mostra os produtos com `@for`.
- O link "Ver detalhes" abre `/produto/:id`.
- `ProdutoComponent` recebe o ID com `@Input()` e `withComponentInputBinding()`.

## Materiais de referência

- [Aulas de Angular no Drive](https://drive.google.com/drive/folders/1NQvzSCvRBwqVbvWg2cWJfT4d2EOISez8)
- [Exemplo de passagem de parâmetro](https://github.com/MatheusAraujoDeMelo/Passagem-parametro-Angular)

## Verificar

```bash
npm run build
npm test -- --watch=false
```
