# 🚀 Guia de Deploy - Correção de Problemas

## Problema: JavaScript e CSS não aparecem após deploy

### Solução Aplicada

1. **Caminhos Absolutos**: Todos os caminhos de assets foram alterados para absolutos (começando com `/`)
2. **Plugin de Cópia**: Adicionado `vite-plugin-static-copy` para garantir que os assets sejam copiados
3. **Configuração do Vercel**: Ajustada para não redirecionar assets

## 📋 Passos para Deploy Corrigido

### 1. Instalar Dependências

```bash
npm install
```

Isso instalará:
- `vite` - Build tool
- `vite-plugin-static-copy` - Plugin para copiar assets estáticos
- `terser` - Minificador

### 2. Testar Localmente

```bash
npm run build
npm run preview
```

Verifique se tudo está funcionando em `http://localhost:4173`

### 3. Verificar Estrutura do Build

Após o build, a pasta `dist/` deve conter:
```
dist/
├── index.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       ├── data.js
│       ├── render.js
│       ├── theme.js
│       ├── menu.js
│       ├── animations.js
│       ├── form.js
│       └── main.js
```

### 4. Deploy no Vercel

#### Opção A: Via GitHub (Recomendado)

1. Faça commit das alterações:
   ```bash
   git add .
   git commit -m "Fix: Corrigir caminhos de assets para Vercel"
   git push
   ```

2. No Vercel:
   - Vá para seu projeto
   - Clique em "Redeploy" ou aguarde o deploy automático

#### Opção B: Via CLI

```bash
vercel --prod
```

## 🔍 Verificação Pós-Deploy

1. Abra o DevTools (F12) no navegador
2. Vá para a aba "Network"
3. Recarregue a página
4. Verifique se todos os arquivos estão carregando:
   - ✅ `/assets/css/styles.css` - Status 200
   - ✅ `/assets/js/data.js` - Status 200
   - ✅ `/assets/js/render.js` - Status 200
   - ✅ Todos os outros arquivos JS - Status 200

## ⚠️ Se Ainda Não Funcionar

### Verificar Console do Navegador

Abra o Console (F12 > Console) e verifique erros como:
- `404 Not Found` - Arquivo não encontrado
- `CORS error` - Problema de permissões
- `Module not found` - Problema de importação

### Soluções Alternativas

1. **Limpar Cache do Vercel**:
   - No dashboard do Vercel, vá em Settings > Build & Development Settings
   - Limpe o cache e faça novo deploy

2. **Verificar Build Logs**:
   - No Vercel, vá em Deployments
   - Clique no último deploy
   - Verifique os logs de build para erros

3. **Testar Build Localmente**:
   ```bash
   npm run build
   cd dist
   npx serve
   ```
   Se funcionar localmente, o problema é no Vercel

## 📝 Checklist de Deploy

- [ ] `npm install` executado com sucesso
- [ ] `npm run build` gera a pasta `dist/` corretamente
- [ ] Todos os arquivos estão em `dist/assets/`
- [ ] `npm run preview` funciona localmente
- [ ] Deploy no Vercel concluído
- [ ] Site carrega no navegador
- [ ] CSS está aplicado
- [ ] JavaScript está funcionando
- [ ] Console do navegador sem erros

## 🆘 Suporte

Se o problema persistir:
1. Verifique os logs do Vercel
2. Teste o build localmente
3. Verifique o Console do navegador para erros específicos
