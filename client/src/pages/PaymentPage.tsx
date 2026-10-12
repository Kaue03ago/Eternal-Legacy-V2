import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { useEffect, useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import {
  BILLING_CYCLE,
  formatPrice,
  isPlanName,
  PLAN_DISCOUNT_PERCENT,
  PLAN_PRICING,
  type PlanName,
} from "@/lib/pricing";

type PaymentPlanData = {
  fullName: string;
  email: string;
  selectedPlan: PlanName;
  billingCycle: typeof BILLING_CYCLE;
};

export default function PaymentPage() {
  const [, setLocation] = useLocation();
  const [planData, setPlanData] = useState<PaymentPlanData | null>(null);

  useEffect(() => {
    const raw = sessionStorage.getItem("leadDraft");
    if (!raw) {
      setLocation("/signup/step1");
      return;
    }

    try {
      const data = JSON.parse(raw);
      if (!data || typeof data.fullName !== "string" || typeof data.email !== "string") {
        setLocation("/signup/step1");
        return;
      }
      if (!isPlanName(data.selectedPlan)) {
        setLocation("/pricing");
        return;
      }

      // Atualiza também cadastros iniciados antes da oferta exclusivamente anual.
      const annualData = { ...data, billingCycle: BILLING_CYCLE };
      sessionStorage.setItem("leadDraft", JSON.stringify(annualData));
      setPlanData(annualData);
    } catch {
      setLocation("/signup/step1");
    }
  }, [setLocation]);

  const handleConfirmPayment = async () => {
    const triggerUrl = import.meta.env.VITE_LEAD_TRIGGER_URL as string | undefined;

    const payload = {
      fullName: planData?.fullName,
      email: planData?.email,
      selectedPlan: planData?.selectedPlan,
      billingCycle: BILLING_CYCLE,
      createdAt: new Date().toISOString(),
      source: "mvp_payment_click",
    };

    if (triggerUrl) {
      await fetch(triggerUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch(() => { });
    } else {
      console.warn("VITE_LEAD_TRIGGER_URL não configurada");
    }

    setLocation("/waitlist");
  };

  if (!planData) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground">Carregando...</p>
        </div>
      </div>
    );
  }

  const selectedPrice = PLAN_PRICING[planData.selectedPlan];
  const discount = selectedPrice.originalAnnualPrice - selectedPrice.annualPrice;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center gap-2">
          <img
            src="/favicon.png"
            alt="Eternal Legacy"
            onClick={() => setLocation("/")}
            role="button"
            className="w-14 h-14 rounded-full object-cover cursor-pointer"
          />
          <span onClick={() => setLocation("/")} role="button" className="text-xl font-bold text-foreground cursor-pointer">Eternal Legacy</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Progress Indicator */}
        <div className="mb-12 max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-semibold">
              3
            </div>
            <span className="text-sm text-muted-foreground">Passo 3 de 4: Confirmação de Pagamento</span>
          </div>
          <div className="w-full h-1 bg-border rounded-full overflow-hidden">
            <div className="h-full w-3/4 bg-accent"></div>
          </div>
        </div>

        {/* Receipt Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-8 mb-8">
            {/* Header */}
            <div className="border-b border-border pb-6 mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">Resumo do Seu Plano</h2>
              <p className="text-muted-foreground">Revise os detalhes antes de confirmar</p>
            </div>

            {/* Plan Details */}
            <div className="space-y-6 mb-8">
              {/* Plan Name */}
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Plano Selecionado</p>
                  <p className="text-lg font-semibold text-foreground">{planData.selectedPlan}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground mb-1">Tipo de Faturamento</p>
                  <p className="text-lg font-semibold text-accent capitalize">
                    Anual
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-border"></div>

              {/* User Information */}
              <div className="space-y-4">
                <p className="text-sm font-semibold text-foreground">Informações da Conta</p>
                <div className="bg-background rounded p-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Nome</span>
                    <span className="text-sm text-foreground font-medium">{planData.fullName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Email</span>
                    <span className="text-sm text-foreground font-medium">{planData.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Guardiões</span>
                    {/* <span className="text-sm text-foreground font-medium">{planData.guardians?.length || 0}</span> */}
                    <span className="text-sm text-foreground font-medium">0</span>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-border"></div>

              {/* Price Summary */}
              <div className="space-y-3">
                <div className="flex justify-between gap-4">
                  <span className="text-sm text-muted-foreground">Valor original</span>
                  <s className="text-sm text-muted-foreground whitespace-nowrap">{formatPrice(selectedPrice.originalAnnualPrice)}</s>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-sm text-muted-foreground">Desconto ({PLAN_DISCOUNT_PERCENT}%)</span>
                  <span className="text-sm text-accent whitespace-nowrap">−{formatPrice(discount)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Valor do Plano</span>
                  <span className="text-sm text-foreground">{formatPrice(selectedPrice.annualPrice)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Período</span>
                  <span className="text-sm text-foreground">Anual</span>
                </div>

                {/* Divider */}
                <div className="border-t border-border pt-3"></div>

                {/* Total */}
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-foreground">Total</span>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-accent">{formatPrice(selectedPrice.annualPrice)}</p>
                    <p className="text-xs text-muted-foreground">por ano</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Highlight */}
            <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 mb-8">
              <p className="text-sm text-foreground font-semibold mb-3">O que está incluído:</p>
              <ul className="space-y-2">
                {planData.selectedPlan === "Essência" && (
                  <>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      Cofre digital criptografado
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      Até 10 mensagens (áudios e vídeos)
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      10 GB de armazenamento
                    </li>
                  </>
                )}
                {planData.selectedPlan === "Legado" && (
                  <>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      Tudo do Essência +
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      Até 30 mensagens
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      25 GB de armazenamento
                    </li>
                  </>
                )}
                {planData.selectedPlan === "Eternidade" && (
                  <>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      Tudo do Legado +
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      Documentário digital (até 20 min)
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      50 GB de armazenamento
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button
              variant="outline"
              onClick={() => setLocation("/pricing")}
              className="flex-1 text-foreground border-border hover:bg-card"
            >
              &lt; Voltar
            </Button>
            <Button
              onClick={handleConfirmPayment}
              className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90 flex items-center justify-center gap-2"
            >
              Selecionar forma de Pagamento
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
