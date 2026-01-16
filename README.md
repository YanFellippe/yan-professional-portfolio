# Portfólio Yan Fellippe Gomes Basílio

Portfólio profissional desenvolvido com HTML, CSS e JavaScript puro, otimizado com Vite.

## 📁 Estrutura do Projeto

```
portfolio-yan-basilio/
├── index.html              # Página principal
├── assets/
│   ├── css/
│   │   └── styles.css      # Estilos principais
│   └── js/
│       ├── data.js          # Dados (tech stack e projetos)
│       ├── render.js        # Funções de renderização
│       ├── theme.js         # Gerenciamento de tema (dark/light)
│       ├── menu.js          # Menu mobile
│       ├── animations.js    # Animações de scroll
│       ├── form.js          # Validação de formulário
│       └── main.js          # Inicialização principal
├── package.json             # Dependências e scripts
├── vite.config.js          # Configuração do Vite
├── vercel.json             # Configuração do Vercel
└── dist/                    # Build de produção (gerado)
```

## 🎨 Características

- **Design Responsivo**: Adaptável a diferentes tamanhos de tela
- **Tema Claro/Escuro**: Alternância entre modos dark e light
- **Animações Suaves**: Transições e animações de scroll
- **Formulário Validado**: Validação de formulário de contato
- **Menu Mobile**: Menu hambúrguer para dispositivos móveis
- **Paginação de Projetos**: Sistema de paginação para 21 projetos
- **Otimizado com Vite**: Build rápido e otimizado para produção

## 🚀 Tecnologias Utilizadas

- HTML5
- CSS3 (Variáveis CSS, Flexbox, Grid)
- JavaScript (ES6+)
- Vite (Build tool e dev server)
- Font Awesome (Ícones)
- Devicon (Ícones de tecnologias)
- Google Fonts (Inter, Fira Code)

## 📝 Como Usar

### Desenvolvimento Local

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
   O site estará disponível em `http://localhost:3000`

3. Para build de produção:
   ```bash
   npm run build
   ```
   Os arquivos otimizados estarão na pasta `dist/`

4. Para preview do build:
   ```bash
   npm run preview
   ```

### Deploy no Vercel

#### Opção 1: Deploy via CLI (Recomendado)

1. Instale o Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Faça login:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. Para produção:
   ```bash
   vercel --prod
   ```

#### Opção 2: Deploy via GitHub

1. Faça push do código para o GitHub

2. Acesse [vercel.com](https://vercel.com) e faça login com GitHub

3. Clique em "Add New Project"

4. Importe seu repositório

5. O Vercel detectará automaticamente o Vite e configurará o build

6. Clique em "Deploy"

O Vercel irá:
- Executar `npm install`
- Executar `npm run build`
- Fazer deploy da pasta `dist/`
- Gerar uma URL automática (ex: `seu-projeto.vercel.app`)

#### Configuração Automática

O projeto já está configurado com:
- ✅ `vercel.json` - Configuração de build e rotas
- ✅ `package.json` - Scripts de build
- ✅ `.vercelignore` - Arquivos ignorados no deploy

## 🔧 Personalização

### Adicionar Projetos

Edite o arquivo `assets/js/data.js` e adicione novos projetos ao array `projects`:

```javascript
{
    name: "Nome do Projeto",
    desc: "Descrição do projeto",
    techs: ["Tech1", "Tech2"],
    img: "URL da imagem",
    repoLink: "Link do repositório",
    viewLink: "Link para visualizar"
}
```

### Modificar Cores

As cores podem ser alteradas no arquivo `assets/css/styles.css` através das variáveis CSS:

```css
:root {
    --bg-main: #0A192F;
    --color-cta: #1DB954;
    --color-highlight: #22D3EE;
    /* ... */
}
```

## 🌐 Links

- **GitHub**: [github.com/YanFellippe](https://github.com/YanFellippe)
- **LinkedIn**: [linkedin.com/in/yan-fellippe-gomes-basilio](https://www.linkedin.com/in/yan-fellippe-gomes-basilio-3229b81b9/)
- **Email**: yanb.adm.desenv@gmail.com

## 📄 Licença

Este projeto é de uso pessoal.

