
# Eternal Legacy (MVP)

O **Eternal Legacy** é um MVP de um “cofre digital” pós-morte: uma experiência web (front-end) onde o usuário percorre um fluxo de cadastro, escolhe um plano e, ao tentar seguir para pagamento, recebe uma mensagem de alta demanda — enquanto o sistema **captura o lead** (nome, e-mail, plano selecionado, ciclo de cobrança etc.).

Este projeto foi feito para **validar interesse de mercado e UX** com o mínimo de backend necessário.

---

## ✨ Features (MVP)

* Landing page com proposta do produto, seções e CTA “Crie seu Cofre”
* Fluxo de cadastro em etapas (Signup Step 1 e Step 2)
* Página de planos (Pricing) com toggle Mensal/Anual e seleção de plano
* Página de pagamento (mock) que dispara o **lead capture**
* Tela de “alta demanda / waitlist”
* Seção “Quem Somos” com botão “Fale Conosco” (Google Forms + envio automático por e-mail via Apps Script)
* Páginas de **Termos de Serviço** e **Política de Privacidade** (rotas internas)

---

## 🧱 Arquitetura (visão geral)

### Front-end

* SPA (Single Page Application) hospedada como site estático
* Fluxo de dados usando `sessionStorage` para carregar informações entre telas

### Lead Capture (AWS)

Quando o usuário clica em **Selecionar forma de pagamento**:

1. Front faz `POST` para uma **Lambda Function URL**
2. Lambda salva o lead no **DynamoDB**
3. Usuário é redirecionado para `/waitlist`

### Contato (Google Forms)

* Botão “Fale Conosco” abre um **Google Form**
* Um **Apps Script** (trigger “Ao enviar formulário”) envia e-mail para 2 destinatários automaticamente

---

## ☁️ Tecnologias / Serviços utilizados

### Front-end

* **React + Vite**
* **TypeScript**
* **TailwindCSS**
* **Wouter** (roteamento)
* Componentes UI (Button etc.)

### AWS

* **S3** — storage do build estático (`index.html` + `assets/`)
* **CloudFront** — CDN + HTTPS + cache

  * SPA fallback configurado (403/404 → `/index.html`)
* **ACM (Certificate Manager)** — certificado para domínio customizado (no CloudFront)
* **Lambda** — endpoint de captura de leads (Function URL)
* **DynamoDB** — persistência de leads (tabela `eternal_legacy_leads`)
* **CloudWatch** — logs e monitoramento da Lambda

### DNS / Domínio

* **Hostinger** — DNS apontando para CloudFront (CNAME)

### Contato

* **Google Forms + Google Sheets + Apps Script** — envio automático de e-mail ao receber resposta

---

## 📁 Estrutura do projeto (macro)

> Os nomes podem variar conforme seu repo, mas a organização geral é:

```
/client
  /src
    /pages
      SignupStep1.tsx
      SignupStep2.tsx
      PricingPage.tsx
      PaymentPage.tsx
      WaitlistPage.tsx
      TermsPage.tsx
      PrivacyPage.tsx
    ...
  index.html
  public/
    favicon.png
    logo.png
package.json
```

---

## 🔐 Persistência de dados no front (sessionStorage)

O MVP usa `sessionStorage` para carregar dados entre páginas.

Chaves usadas/recomendadas:

* `signupData` (compatibilidade com validações do passo 1)
* `leadDraft` (padrão para carregar dados necessários do lead até a etapa final)

Exemplo de conteúdo esperado em `leadDraft`:

```json
{
  "fullName": "João Silva",
  "email": "joao@email.com",
  "selectedPlan": "Legado",
  "billingCycle": "monthly"
}
```

---

## 🗃️ DynamoDB

Tabela:

* **Table name:** `eternal_legacy_leads`
* **Partition Key (PK):** `leadId` (String)

Campos gravados (exemplo):

* `leadId` (UUID)
* `createdAt` (ISO string)
* `fullName`
* `email`
* `selectedPlan`
* `billingCycle`
* `source` (ex.: `"mvp_payment_click"`)

> Observação: `leadId` como PK permite múltiplas tentativas do mesmo e-mail (histórico). Tratamento anti-duplicidade pode ser adicionado depois na Lambda.

---

## 🧠 Lambda (Lead Capture)

* Função: `eternal-legacy-lead-trigger`
* Runtime: **Python**
* Trigger: **Function URL** (HTTP endpoint)

A Lambda recebe JSON via POST e salva no DynamoDB.

Variável de ambiente usada:

* `LEADS_TABLE_NAME=eternal_legacy_leads`

Permissões IAM mínimas na role da Lambda:

* `dynamodb:PutItem` na tabela `eternal_legacy_leads`

---

## 🔧 Variáveis de ambiente (Vite)

### Dev (rodar local)

Crie **`.env.local`** na raiz (mesmo nível do `package.json`):

```bash
VITE_LEAD_TRIGGER_URL="https://SUA-FUNCTION-URL.on.aws/"
```

> Sempre reinicie `pnpm dev` após alterar `.env.local`.

### Produção (build para subir no S3)

Crie/edite **`.env.production`**:

```bash
VITE_LEAD_TRIGGER_URL="https://SUA-FUNCTION-URL.on.aws/"
```

Depois rode `pnpm build` e publique o build.

---

## ▶️ Como rodar localmente

### Pré-requisitos

* **Node.js 18+** (recomendado 20+)
* **pnpm** (via corepack)

### Instalação

```bash
pnpm install
```

### Rodar em dev

```bash
pnpm dev
```

Acesse:

* `http://localhost:3000`

---

## 🚀 Deploy (S3 + CloudFront)

### 1) Build de produção

```bash
pnpm build
```

> O build gera uma pasta `dist/` (ou `dist/public/` dependendo do projeto).
> O importante é que o upload final para o S3 tenha **na raiz do bucket**:

* `index.html`
* `assets/` (pasta com js/css)
* `favicon.png` / `logo.png` se usados via `public/`

### 2) Upload no S3

No bucket S3, mantenha o padrão:

* `index.html`
* `assets/`

Recomendação:

1. Delete `index.html` e `assets/` antigos
2. Faça upload do conteúdo novo do build

### 3) Invalidation no CloudFront

Para refletir as mudanças imediatamente:

* Invalidation: `/*`

  * (ou no mínimo `/index.html`)

### 4) SPA fallback (rotas)

No CloudFront, configure custom error response:

* 403 → `/index.html` → 200
* 404 → `/index.html` → 200

---

## 🌐 Domínio customizado (Hostinger + CloudFront)

Resumo do fluxo:

1. ACM: criar certificado (DNS validation)
2. Hostinger: adicionar CNAME(s) de validação do ACM
3. CloudFront: adicionar Alternate Domain Name (CNAME) e selecionar certificado
4. Hostinger: apontar `www` para o domínio do CloudFront

DNS recomendado:

* `CNAME www → d3ba4kai4ekt6g.cloudfront.net`

> Domínio raiz (sem www) depende do suporte a ALIAS/ANAME na Hostinger. Caso não tenha, normalmente se usa apenas `www` como domínio principal.

---

## 📩 Contato via Google Forms (Opção C)

Fluxo:

1. O usuário clica em “Fale Conosco”
2. Abre Google Form
3. Ao enviar, Apps Script dispara e-mail automaticamente para 2 destinatários

Checklist:

* Form criado com campos (Nome, E-mail, Telefone/WhatsApp, Mensagem)
* Respostas vinculadas a uma planilha (Sheets)
* Apps Script configurado com trigger “Ao enviar formulário”

---

## ✅ Checklist de testes (antes de publicar)

* [ ] Landing abre e seções scrollam corretamente (ex.: `/#planos`)
* [ ] Signup Step 1 valida campos e salva `leadDraft`
* [ ] Pricing salva `selectedPlan` e `billingCycle` no `leadDraft`
* [ ] Payment dispara POST para Lambda e redireciona para `/waitlist`
* [ ] DynamoDB recebe o item
* [ ] CloudFront invalidation aplicado após deploy
* [ ] `www` aponta para CloudFront e HTTPS ok

---

## 📌 Roadmap (ideias de evolução)

* Anti-duplicidade de e-mails na Lambda (janela de tempo / GSI por email)
* Capturar telefone/idade (se necessário) e salvar no Dynamo
* Confirmação por e-mail (SES) ou CRM
* Autenticação real + upload de arquivos
* Dashboard interno de leads

---

## 📄 Legal

* Política de Privacidade: `/privacy`
* Termos de Serviço: `/terms`

---
