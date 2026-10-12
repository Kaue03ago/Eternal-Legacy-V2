export const BILLING_CYCLE = "annual" as const;
export const PLAN_DISCOUNT_PERCENT = 20;

// Valores comerciais definidos em centavos, sem recalcular os totais pelo percentual.
export const PLAN_PRICING = {
  Essência: { originalAnnualPrice: 29880, annualPrice: 23900 },
  Legado: { originalAnnualPrice: 47880, annualPrice: 38300 },
  Eternidade: { originalAnnualPrice: 83880, annualPrice: 67100 },
} as const;

export type PlanName = keyof typeof PLAN_PRICING;

export function isPlanName(value: unknown): value is PlanName {
  return typeof value === "string" && Object.hasOwn(PLAN_PRICING, value);
}

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export function formatPrice(cents: number): string {
  return currencyFormatter.format(cents / 100);
}
