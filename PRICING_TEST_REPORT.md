# Validação dos planos anuais

Atualização: 7 de outubro de 2026.

Este documento substitui o relatório da oferta anterior.

## Valores esperados

| Plano | De (por ano) | Por (por ano) | Desconto anunciado |
| --- | --- | --- | --- |
| Essência | R$ 298,80 | R$ 239,00 | 20% |
| Legado | R$ 478,80 | R$ 383,00 | 20% |
| Eternidade | R$ 838,80 | R$ 671,00 | 20% |

Os totais promocionais são fixos conforme a definição comercial. A diferença
entre o preço original e o promocional é calculada em centavos para o resumo.

## Escopo

- Landing page e seleção de planos usam o mesmo componente de preço anual.
- Pagamento usa a mesma tabela, com preço original, desconto e total anual.
- O ciclo salvo em leadDraft e enviado à Lambda é sempre annual.
- Sessões antigas são atualizadas ao abrir o pagamento.
- A lista de preços de adicionais sem uso foi removida.
- O código da Lambda não está incluído neste repositório.

## Verificações

- Checagem TypeScript (`pnpm check`): aprovada.
- Build de produção (`pnpm build`): aprovado; saída estática em `dist/public`.
- Chrome em desktop: os três cartões exibem os valores originais, promocionais,
  período anual e desconto de 20% na landing page e na seleção de planos.
- Fluxo completo de cadastro até a lista de interesse: aprovado para os três planos.
- Resumo de pagamento: plano, preço original, economia e total anual corretos.
- Sessões antigas: os três planos passam ao ciclo anual; a recarga mantém os valores.
- Captura do lead: seis requisições interceptadas localmente confirmaram o plano e
  `billingCycle: "annual"`, sem senha ou dados de guardiões.
- Tela móvel de 390 px: preços legíveis e dentro dos cartões; revisão visual aprovada.
- Pagamento com sessão ausente, JSON inválido ou plano desconhecido: redirecionamento
  para cadastro ou seleção de planos, sem exibição de preço indefinido.
- Nenhuma exceção JavaScript durante a validação.
- Busca no código e na documentação: sem valores antigos ou opção de cobrança mensal.

Os testes do navegador usaram o build de produção servido localmente, com todas as
requisições externas interceptadas. Nenhum lead real ou e-mail foi enviado. A Lambda,
o DynamoDB e a publicação em S3/CloudFront não foram alterados nem validados em produção.
