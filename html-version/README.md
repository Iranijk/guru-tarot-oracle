# GURU TAROT - Site HTML Puro

Este é o site do GURU TAROT convertido para HTML puro, mantendo o design idêntico ao original React.

## 📁 Estrutura do Projeto

```
html-version/
├── index.html      # Página principal com todo o conteúdo
├── styles.css      # Estilos CSS personalizados
├── script.js       # JavaScript para interatividade
├── favicon.ico     # Ícone do site (opcional)
└── README.md       # Este arquivo
```

## 🚀 Como Usar

### Visualização Local

1. **Método 1: Abrir diretamente no navegador**
   - Baixe todos os arquivos
   - Clique duas vezes em `index.html`
   - O site abrirá no seu navegador padrão

2. **Método 2: Servidor local simples**
   ```bash
   # Com Python 3
   python -m http.server 8000
   
   # Com Python 2
   python -m SimpleHTTPServer 8000
   
   # Com Node.js (se tiver http-server instalado)
   npx http-server
   ```
   - Acesse: `http://localhost:8000`

### Deploy Online

#### GitHub Pages
1. Faça upload dos arquivos para um repositório GitHub
2. Vá em Settings > Pages
3. Selecione a branch main
4. Seu site estará disponível em: `https://seuusuario.github.io/nome-do-repo`

#### Netlify
1. Arraste a pasta `html-version` para [netlify.com/drop](https://app.netlify.com/drop)
2. Seu site estará online instantaneamente

#### Vercel
1. Faça upload dos arquivos para um repositório
2. Conecte o repositório no [vercel.com](https://vercel.com)
3. Deploy automático

## ✨ Funcionalidades

### Design Responsivo
- **Mobile First**: Otimizado para dispositivos móveis
- **Tablet e Desktop**: Layout adaptativo para todas as telas
- **Menu Hamburger**: Navegação mobile intuitiva

### Seções Incluídas
- **Hero**: Apresentação principal com call-to-actions
- **Sobre**: Explicação sobre o Tarô
- **Arcanos**: 22 Arcanos Maiores e 56 Menores
- **Missão**: Propósito e diferencial do Guru Tarot
- **Processo**: Como funciona a consulta
- **FAQ**: Perguntas frequentes com accordion
- **Depoimentos**: Avaliações de clientes
- **Serviços**: Cards com preços e descrições
- **Contato**: Informações e botão WhatsApp
- **Footer**: Links e informações de copyright

### Interatividade JavaScript
- **Navegação Suave**: Scroll suave entre seções
- **Menu Mobile**: Toggle do menu hamburger
- **FAQ Accordion**: Expandir/recolher perguntas
- **Animações**: Elementos aparecem ao fazer scroll
- **WhatsApp**: Botão direto para conversa

### Cores e Design System
- **Roxo Escuro**: `#1A1F2C` (headers, textos principais)
- **Roxo Médio**: `#7E69AB` (destaques, títulos)
- **Azul**: `#1EAEDB` (acentos, arcanos menores)
- **Dourado**: `#D4AF37` (botões, elementos especiais)
- **Gradientes**: Efeitos místicos e elegantes

### Fontes
- **EB Garamond**: Fonte elegante do Google Fonts
- **Suporte completo**: Pesos 400-800, normal e itálico

## 🎨 Personalização

### Alterar Cores
Edite as variáveis CSS no início do `styles.css`:
```css
:root {
    --tarot-purple: #7E69AB;
    --tarot-dark-purple: #1A1F2C;
    --tarot-blue: #1EAEDB;
    --tarot-gold: #D4AF37;
}
```

### Modificar Conteúdo
- **Textos**: Edite diretamente no `index.html`
- **Imagens**: Substitua as URLs do Unsplash por suas próprias imagens
- **WhatsApp**: Altere o número no botão de contato
- **Email**: Modifique o email de contato

### Adicionar Seções
1. Adicione o HTML na posição desejada
2. Crie os estilos correspondentes no CSS
3. Adicione links de navegação se necessário

## 📱 Contatos do Site

- **WhatsApp**: 67 9 8116 2674
- **Email**: gurutarot@mail.com
- **YouTube**: [@GURUXAMÃ-BR](https://www.youtube.com/@GURUXAM%C3%82-BR)

## 🌟 Vantagens da Versão HTML

1. **Performance Superior**: Carregamento mais rápido
2. **SEO Otimizado**: Melhor indexação nos buscadores
3. **Compatibilidade Total**: Funciona em qualquer servidor
4. **Fácil Manutenção**: Código simples e direto
5. **Sem Dependências**: Não precisa de build ou frameworks

## 📄 Licença

Todos os direitos reservados © 2024 Guru Tarot.

---

**Site desenvolvido com HTML5, CSS3 e JavaScript vanilla para máxima performance e compatibilidade.**