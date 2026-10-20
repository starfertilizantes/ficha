# Como colocar a Ficha de Treino no seu celular

São 4 etapas. Tudo é gratuito e leva uns 30 minutos na primeira vez. Faça pelo computador.

1. Publicar o app no GitHub Pages (fica com um endereço tipo `https://seunome.github.io/ficha/`)
2. Criar o login do Google no Google Cloud
3. Colar o ID do login no arquivo `config.js`
4. Abrir no celular e instalar

---

## 1. Publicar no GitHub Pages

1. Crie uma conta em **https://github.com** (botão *Sign up*). Escolha bem o nome de usuário, porque ele aparece no endereço do app.
2. Depois de entrar, clique no **+** no canto de cima → **New repository**.
   - *Repository name*: `ficha`
   - Deixe marcado **Public** (os dados de treino **não** ficam no GitHub; ficam no seu celular e no seu Drive. Só o código do app fica público).
   - Clique em **Create repository**.
3. Na página que abrir, clique no link **uploading an existing file**.
4. Arraste **todos os arquivos de dentro da pasta `ficha-app`** (não a pasta em si):
   `index.html`, `config.js`, `sw.js`, `manifest.webmanifest`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` (este guia pode ir junto, não atrapalha).
   Clique em **Commit changes**.
5. Vá em **Settings** (aba no topo do repositório) → **Pages** (menu da esquerda).
   - Em *Build and deployment* → *Source*: **Deploy from a branch**
   - *Branch*: **main** e pasta **/ (root)** → **Save**
6. Espere 1 a 2 minutos e recarregue a página. Vai aparecer: *Your site is live at* `https://SEU-USUARIO.github.io/ficha/`.
   **Anote esse endereço.** Abra para conferir: o app já funciona, salvando só no aparelho.

## 2. Criar o login do Google

1. Entre em **https://console.cloud.google.com** com a conta Google que você vai usar no app.
   Se for a primeira vez, aceite os termos.
2. **Criar projeto**: no topo, clique no seletor de projeto → **Novo projeto** → nome `Ficha de Treino` → **Criar**. Confira se ele ficou selecionado no topo.
3. **Ativar o Drive**: no campo de busca do topo, digite **Google Drive API** → abra → **Ativar**.
4. **Tela de consentimento**: no menu ☰ → **APIs e serviços** → **Tela de consentimento OAuth** (em algumas contas aparece como **Google Auth Platform** → **Começar**).
   - Nome do app: `Ficha de Treino`
   - E-mail de suporte: o seu
   - Público / tipo de usuário: **Externo**
   - E-mail de contato: o seu → aceite a política → **Criar**
5. **Usuários de teste**: ainda nessa área, abra **Público** (ou *Audience*) → em **Usuários de teste** clique em **Adicionar usuários** → coloque **o seu Gmail** → **Salvar**.
   (Enquanto o app estiver em modo de teste, só os e-mails dessa lista conseguem entrar. Para uso pessoal, isso é o ideal.)
6. **Criar o ID do cliente**: vá em **Clientes** (ou *APIs e serviços* → *Credenciais* → **Criar credenciais** → **ID do cliente OAuth**).
   - Tipo de aplicativo: **Aplicativo da Web**
   - Nome: `Ficha celular`
   - **Origens JavaScript autorizadas** → **Adicionar URI** → `https://SEU-USUARIO.github.io`
     (só o começo do endereço, **sem** `/ficha/` e sem barra no final)
   - **Criar**
7. Vai aparecer o **ID do cliente**, algo como `1234567890-abc123.apps.googleusercontent.com`. **Copie.**
   Não precisa da "chave secreta"; o app não usa.

## 3. Colar o ID no app

1. No GitHub, abra o repositório `ficha` → clique no arquivo **config.js** → ícone de lápis (✏️ *Edit*).
2. Cole o ID entre as aspas:
   ```js
   googleClientId: '1234567890-abc123.apps.googleusercontent.com'
   ```
3. **Commit changes**. Espere 1 a 2 minutos.

## 4. No celular

1. Abra `https://SEU-USUARIO.github.io/ficha/` no **Chrome** (Android) ou **Safari** (iPhone).
2. Toque em **Entrar com Google** (no topo ou em *Seus dados*, o ícone ao lado).
   - Vai aparecer o aviso **"O Google não verificou este app"**. É normal para apps pessoais: toque em **Continuar**.
   - Permita o acesso aos arquivos que o app cria no Drive.
3. Instale na tela inicial:
   - **Android (Chrome)**: menu ⋮ → **Adicionar à tela inicial** / **Instalar app**
   - **iPhone (Safari)**: botão Compartilhar → **Adicionar à Tela de Início**

Pronto. No seu Google Drive vai aparecer a pasta **Ficha de Treino** com o arquivo `ficha-dados.json` e a pasta **Fotos**.

---

## Trazer os dados que você já tem na versão do Claude

1. Abra a versão antiga (o link do claude.ai) → ícone de dados no topo → **Baixar backup** (ou **Copiar como texto**).
2. No app novo → ícone de dados → **Importar** → escolha o arquivo (ou cole o texto) → confirme.
3. Toque em **Sincronizar** para mandar para o Drive.

As fotos da versão antiga não vêm junto. Se tiver alguma, salve-a no celular e adicione de novo.

## Como funciona no dia a dia

- **Tudo é salvo primeiro no celular**, na hora. Funciona sem internet na academia.
- Quando tem internet e você está conectado, o app **copia para o Drive** sozinho poucos segundos depois de cada mudança.
- Por segurança, o Google libera o acesso por **1 hora** de cada vez. Depois disso, o botão do topo vira **Sincronizar** ou **Salvar no Drive**. Um toque e ele renova, sem pedir senha de novo.
- Se usar em dois aparelhos, os treinos dos dois são **somados**. Para a ficha e as medidas, vale a alteração mais recente.

## Atualizar o app no futuro

Se eu (ou você) mudar o `index.html`:
1. No GitHub, abra o arquivo → lápis → cole a nova versão → **Commit changes**.
2. No arquivo `sw.js`, troque `ficha-v1` por `ficha-v2` (depois `v3`, e assim por diante). Isso avisa os celulares que há versão nova.
3. No celular, feche e abra o app duas vezes.

## Problemas comuns

| O que aparece | O que fazer |
|---|---|
| "Erro 400: redirect_uri_mismatch" ou "origin_mismatch" | A origem no passo 2.6 está diferente do endereço. Use exatamente `https://SEU-USUARIO.github.io`, sem `/ficha/`. |
| "Acesso bloqueado: o app não concluiu a verificação" | Seu Gmail não está na lista de **Usuários de teste** (passo 2.5). |
| O botão "Entrar com Google" não aparece | O `config.js` está vazio ou o ID foi colado errado. Confira as aspas. |
| A janela do Google abre e fecha sem conectar | Permita pop-ups para o site, ou abra pelo navegador (não por dentro do WhatsApp/Instagram). |
| Mudei algo e o celular não atualizou | Faça o passo 2 de "Atualizar o app" e abra o app duas vezes. |
