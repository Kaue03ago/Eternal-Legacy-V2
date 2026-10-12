import {
  formatPrice,
  PLAN_DISCOUNT_PERCENT,
  PLAN_PRICING,
  type PlanName,
} from "@/lib/pricing";

export default function AnnualPlanPrice({ planName }: { planName: PlanName }) {
  const price = PLAN_PRICING[planName];

  return (
    <div className="mb-6">
      <p className="text-sm text-muted-foreground mb-1">
        De <s>{formatPrice(price.originalAnnualPrice)}</s>
      </p>
      <p className="text-sm text-muted-foreground">Por</p>
      <p className="text-3xl font-bold text-accent whitespace-nowrap">
        {formatPrice(price.annualPrice)}
      </p>
      <p className="text-sm text-muted-foreground">por ano</p>
      <span className="inline-block mt-3 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
        {PLAN_DISCOUNT_PERCENT}% de desconto
      </span>
    </div>
  );
}
