import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { useEffect, useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function PaymentPage() {
  const [, setLocation] = useLocation();
  const [planData, setPlanData] = useState<any>(null);

  useEffect(() => {
    const completeData = sessionStorage.getItem("completeSignupData");
    if (completeData) {
      const data = JSON.parse(completeData);
      setPlanData(data);
    }
  }, []);

  const handleConfirmPayment = () => {
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

  const planPrices: any = {
    Essência: { monthly: 24.90, annual: 249 },
    Legado: { monthly: 39.90, annual: 399 },
    Eternidade: { monthly: 69.90, annual: 699 },
  };

  const selectedPrice = planData.billingCycle === "monthly" 
    ? planPrices[planData.selectedPlan]?.monthly 
    : planPrices[planData.selectedPlan]?.annual;

  const billingPeriod = planData.billingCycle === "monthly" ? "por mês" : "por ano";

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-accent"></div>
          <span className="text-xl font-bold text-foreground">Eternal Legacy</span>
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
                    {planData.billingCycle === "monthly" ? "Mensal" : "Anual"}
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
                    <span className="text-sm text-foreground font-medium">{planData.nome}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Email</span>
                    <span className="text-sm text-foreground font-medium">{planData.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Guardiões</span>
                    <span className="text-sm text-foreground font-medium">{planData.guardians?.length || 0}</span>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-border"></div>

              {/* Price Summary */}
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Valor do Plano</span>
                  <span className="text-sm text-foreground">R$ {selectedPrice?.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Período</span>
                  <span className="text-sm text-foreground">{billingPeriod}</span>
                </div>

                {/* Divider */}
                <div className="border-t border-border pt-3"></div>

                {/* Total */}
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-foreground">Total</span>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-accent">R$ {selectedPrice?.toFixed(2)}</p>
                    <p className="text-xs text-muted-foreground">{billingPeriod}</p>
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
                      Até 10 mensagens
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
                      Tudo do Essência
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      Até 30 mensagens + 10 vídeos
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
                      Tudo do Legado
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

            {/* Important Note */}
            <div className="bg-card/50 border border-border rounded-lg p-4 mb-8">
              <p className="text-xs text-muted-foreground leading-relaxed">
                Ao confirmar, você concorda com nossos <span className="text-accent font-semibold">Termos de Serviço</span> e <span className="text-accent font-semibold">Política de Privacidade</span>. O pagamento será processado de forma segura.
              </p>
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
