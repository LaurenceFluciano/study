# App Aluno Q

Projeto de exemplo usado nas aulas de frontend.

A ideia é evoluir a interface por etapas, começando com HTML e CSS puro, passando por responsividade e JavaScript, e depois reaproveitando essa base em React.

## O que já existe

O repositório já possui o fluxo de autenticação pronto em HTML e CSS:

- `index.html` - login
- `esqueceu.html` - esqueci minha senha
- `nova-senha.html` - cadastro de nova senha
- `registro.html` - cadastro passo 1
- `registro-2.html` - cadastro passo 2

## Próxima atividade

Foram adicionados 4 prints de referência na pasta `telas/`. A proposta agora é desenvolver as próximas páginas do app com base nesses layouts:

- `telas/Dashboard.png`
- `telas/Disciplinas.png`
- `telas/Perfil.png`
- `telas/TutorIA.png`

## Objetivos da prática

- montar estrutura com HTML semântico
- estilizar com CSS
- trabalhar layout responsivo
- organizar melhor os elementos de interface
- preparar a base para interações com JavaScript
- usar esse mesmo projeto futuramente em React

## Como usar este projeto

Neste momento o projeto é estático. Para visualizar, basta abrir os arquivos `.html` no navegador.

Sugestão:

- começar por `index.html`
- usar a pasta `telas/` como referência visual para as próximas páginas

## Estrutura atual

```text
.
├── index.html
├── esqueceu.html
├── nova-senha.html
├── registro.html
├── registro-2.html
├── style.css
└── telas/
```

## Etapas sugeridas para os alunos

### Etapa 1 - HTML

- criar a estrutura das novas telas
- separar áreas como menu, cabeçalho, conteúdo e cards
- nomear classes de forma clara

### Etapa 2 - CSS

- aplicar cores, espaçamentos, bordas e tipografia
- aproximar o visual ao máximo dos prints
- reutilizar estilos sempre que fizer sentido

### Etapa 3 - Responsividade

- adaptar as telas para notebook, tablet e celular
- revisar alinhamentos, tamanhos e empilhamento dos elementos

### Etapa 4 - JavaScript

- adicionar interações simples
- trabalhar navegação entre telas
- simular comportamentos do sistema quando necessário

### Etapa 5 - React

- transformar as telas em componentes
- reaproveitar estruturas visuais
- organizar melhor o projeto para crescimento futuro
