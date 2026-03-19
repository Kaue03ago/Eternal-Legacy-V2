import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { useState } from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Essência",
    description: "Para quem quer começar simples",
    monthlyPrice: 24.90,
    annualPrice: 249,
    features: [
      "Cofre digital criptografado",
      "Até 10 mensagens (áudios e vídeos)",
      "Armazenamento incluído: 10 GB",
      "1 guardião",
      "Entrega pós-morte automática",
      "Preservação por 10 anos"
    ],
    highlighted: false,
  },
  {
    name: "Legado",
    description: "Para quem quer mais conexão",
    monthlyPrice: 39.90,
    annualPrice: 399,
    features: [
      "Tudo do Essência",
      "Roteiros emocionais guiados",
      "Até 30 mensagens",
      "Armazenamento incluído: 25 GB",
      "Até 3 destinatários",
      // "Mensagens temáticas automáticas (aniversários/datas especiais)"
    ],
    highlighted: true,
  },
  {
    name: "Eternidade",
    description: "Para quem quer o máximo",
    monthlyPrice: 69.90,
    annualPrice: 699,
    features: [
      "Tudo do Legado",
      "Documentário digital completo (até 20 minutos)",
      "Até 50 mensagens",
      "Armazenamento incluído: 50 GB",
      "Entregas programadas por evento, data ou idade",
      "Acesso vitalício para destinatários*"
    ],
    highlighted: false,
  },
];

const addOns = [
  { name: "+10 GB adicionais", price: 9.90 },
  { name: "Destinatário extra", price: 4.90 },
  { name: "Guardião extra", price: 6.90 }
];

export default function PricingPage() {
  const [, setLocation] = useLocation();
  const [selectedPlan, setSelectedPlan] = useState("Legado");
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
  };

  const handlePayment = () => {
    // Store selected plan
    const completeData = sessionStorage.getItem("completeSignupData");
    if (completeData) {
      const data = JSON.parse(completeData);
      data.selectedPlan = selectedPlan;
      data.billingCycle = billingCycle;
      sessionStorage.setItem("completeSignupData", JSON.stringify(data));
    }
    // Go to payment page
    setLocation("/payment");
  };

  const selectedPlanData = plans.find(p => p.name === selectedPlan);
  const selectedPrice = billingCycle === "monthly" ? selectedPlanData?.monthlyPrice : selectedPlanData?.annualPrice;

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
            <span className="text-sm text-muted-foreground">Passo 3 de 4: Seleção de Planos</span>
          </div>
          <div className="w-full h-1 bg-border rounded-full overflow-hidden">
            <div className="h-full w-3/4 bg-accent"></div>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4 text-foreground">Escolha Seu Plano de Legado</h1>
          <p className="text-lg text-muted-foreground">Cada plano foi pensado para diferentes necessidades. Escolha o que melhor se encaixa na sua história.</p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-card border border-border rounded-lg p-1 flex gap-2">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded transition ${
                billingCycle === "monthly"
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-6 py-2 rounded transition ${
                billingCycle === "annual"
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Anual (Economize 2 meses)
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg border transition-all cursor-pointer relative ${
                selectedPlan === plan.name
                  ? "border-accent bg-card/80 ring-2 ring-accent"
                  : "border-border bg-card hover:border-accent/50"
              }`}
              onClick={() => handleSelectPlan(plan.name)}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-xs font-semibold">
                  ⭐ Mais Popular
                </div>
              )}
              <div className="p-6">
                {/* Plan Name */}
                <h3 className="text-xl font-bold text-foreground mb-1">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold text-accent">
                      R$ {billingCycle === "monthly" ? plan.monthlyPrice.toFixed(2) : plan.annualPrice.toFixed(0)}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {billingCycle === "monthly" ? "/mês" : "/ano"}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Selection Indicator */}
                {selectedPlan === plan.name && (
                  <div className="text-center text-accent text-sm font-semibold">
                    ✓ Selecionado
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Important Note */}
        <div className="max-w-2xl mx-auto mb-12 bg-card/50 border border-border rounded-lg p-6">
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            <span className="font-semibold text-foreground">Após o falecimento confirmado,</span> todo o conteúdo permanece disponível pelo tempo escolhido no plano, <span className="font-semibold text-foreground">sem custo adicional para os destinatários.</span>
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            * <span className="font-semibold text-foreground">Acesso vitalício</span> refere-se ao acesso contínuo dos destinatários ao conteúdo enquanto o serviço estiver ativo e a conta estiver regular.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 max-w-2xl mx-auto">
          <Button
            variant="outline"
            onClick={() => setLocation("/signup-step-2")}
            className="flex-1 text-foreground border-border hover:bg-card"
          >
            &lt; Voltar
          </Button>
          <Button
            onClick={handlePayment}
            className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
          >
            Continuar para o Pagamento
          </Button>
        </div>
      </div>
    </div>
  );
}
