# Loja Econverse

Projeto de uma página de loja para desafio técnico feito com React, TypeScript, Vite e SCSS.

## Como rodar

Instale as dependências e inicie o servidor de desenvolvimento:

```bash
npm install
npm run dev
```

Para gerar a versão de produção:

```bash
npm run build
```

## Estrutura

```text
src/
├── App.tsx
├── App.css
├── index.css
├── main.tsx
├── assets/
├── components/
│   ├── banner/
│   ├── brands/
│   ├── footer/
│   ├── header/
│   ├── navigationCards/
│   ├── newsletter/
│   ├── partnerCards/
│   └── products/
└── interfaces/
public/
└── Products.json
```

## Componentes

- **Header**: cabeçalho com informações de compra, logo, busca, ícones e navegação.
- **Banner**: banner da promoção principal.
- **NavigationCard**: atalhos para as categorias da loja.
- **Products**: carrossel de produtos carregados de `public/Products.json`, com botões de navegação e popup de compra. A propriedade `info` define se aparece a barra de categorias (`1`) ou o texto “Ver Todos” (outro valor).
- **PartnerCard**: cards de destaque dos parceiros.
- **Brands**: seção para navegar pelas marcas.
- **Newsletter**: formulário de inscrição na newsletter.
- **Footer**: logo, links institucionais e redes sociais.

Cada componente tem seu próprio arquivo SCSS na respectiva pasta. Os estilos globais ficam em `src/index.css` e `src/App.css`.
