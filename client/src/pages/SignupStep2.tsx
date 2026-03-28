import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { useState } from "react";
import { Plus, X, AlertCircle } from "lucide-react";

export default function SignupStep2() {
  const [, setLocation] = useLocation();
  const [guardians, setGuardians] = useState([{ name: "", email: "" }]);
  const [inactivityPeriod, setInactivityPeriod] = useState("12");
  const [noGuardianWarning, setNoGuardianWarning] = useState(false);

  const handleGuardianChange = (index: number, field: "name" | "email", value: string) => {
    const newGuardians = [...guardians];
    newGuardians[index][field] = value;
    setGuardians(newGuardians);
  };

  const addGuardian = () => {
    setGuardians([...guardians, { name: "", email: "" }]);
  };

  const removeGuardian = (index: number) => {
    if (guardians.length > 1) {
      setGuardians(guardians.filter((_, i) => i !== index));
    }
  };

  const handleFinish = () => {
    const signupData =
      sessionStorage.getItem("signupData") || sessionStorage.getItem("leadDraft"); if (!signupData) {
        alert("Dados de cadastro não encontrados. Por favor, comece novamente.");
      setLocation("/signup/step1");
      return;
    }

    // Validate guardians
    const validGuardians = guardians.filter(g => g.name && g.email);
    if (validGuardians.length === 0) {
      setNoGuardianWarning(true);
      return;
    }

    // Store complete data
    const base = JSON.parse(signupData);

    // salva somente o que importa pro MVP (sem guardiões)
    const leadDraft = {
      fullName: base.fullName,
      email: base.email,
    };

    sessionStorage.setItem("leadDraft", JSON.stringify(leadDraft));
    
    // Go to pricing page
    setLocation("/pricing");
  };

  const handleContinueWithoutGuardian = () => {
    const signupData =
      sessionStorage.getItem("signupData") || sessionStorage.getItem("leadDraft"); if (!signupData) {
        alert("Dados de cadastro não encontrados. Por favor, comece novamente.");
      setLocation("/signup/step1");
      return;
    }

    const base = JSON.parse(signupData);

    const leadDraft = {
      fullName: base.fullName,
      email: base.email,
    };

    sessionStorage.setItem("leadDraft", JSON.stringify(leadDraft));
    
    // Go to pricing page
    setLocation("/pricing");
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-6">
          <img
            src="/favicon.png"
            alt="Eternal Legacy"
            className="w-14 h-14 rounded-full object-cover"
          />
          <span className="text-xl font-bold text-foreground">EternaLegacy</span>
          </div>
        </div>

        {/* Card */}
        <div className="bg-card border border-border rounded-lg p-8">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-semibold">
                2
              </div>
              <span className="text-sm text-muted-foreground">Passo 2 de 4: Segurança do Cofre</span>
            </div>
            <div className="w-full h-1 bg-border rounded-full overflow-hidden">
              <div className="h-full w-2/4 bg-accent"></div>
            </div>
          </div>

          {/* Form Title */}
          <h1 className="text-2xl font-bold mb-2 text-foreground">Configure seus Gatilhos de Segurança</h1>
          <p className="text-muted-foreground mb-8">Este é o núcleo da segurança do seu cofre. Você pode alterar isso mais tarde.</p>

          {/* Form */}
          <form className="space-y-8">
            {/* Guardian Section */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">Designe um Guardião</h2>
              <p className="text-sm text-muted-foreground mb-6">
                Um Guardião é uma pessoa confiável que pode ajudar a verificar seu falecimento. Só entraremos em contato com ele como parte do protocolo de liberação.
              </p>

              {/* Guardians List */}
              <div className="space-y-4">
                {guardians.map((guardian, index) => (
                  <div key={index} className="bg-background border border-border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-sm font-medium text-foreground">Guardião {index + 1}</span>
                      {guardians.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeGuardian(index)}
                          className="text-destructive hover:text-destructive/80"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                    <div className="space-y-3">
                      <input
                        type="text"
                        placeholder="Nome Completo do Guardião"
                        value={guardian.name}
                        onChange={(e) => handleGuardianChange(index, "name", e.target.value)}
                        className="w-full px-3 py-2 bg-card border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                      />
                      <input
                        type="email"
                        placeholder="E-mail do Guardião"
                        value={guardian.email}
                        onChange={(e) => handleGuardianChange(index, "email", e.target.value)}
                        className="w-full px-3 py-2 bg-card border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Add Guardian Button */}
              <button
                type="button"
                onClick={addGuardian}
                className="mt-4 flex items-center gap-2 text-accent hover:text-accent/80 text-sm font-medium"
              >
                <Plus className="w-4 h-4" />
                Adicionar Outro Guardião
              </button>

              {/* Skip Guardian Option */}
              <button
                type="button"
                onClick={() => setNoGuardianWarning(true)}
                className="mt-4 flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm font-medium"
              >
                Pular esta etapa (não desejo adicionar guardiões)
              </button>
            </div>

            {/* Inactivity Period Section */}
            <div className="border-t border-border pt-8">
              <h2 className="text-lg font-semibold text-foreground mb-4">Gatilho de Inatividade</h2>
              <p className="text-sm text-muted-foreground mb-6">
                Se você não fizer login por um certo período, iniciaremos o processo de verificação, que inclui contatar seus Guardiões.
              </p>

              <select
                value={inactivityPeriod}
                onChange={(e) => setInactivityPeriod(e.target.value)}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="6">6 meses</option>
                <option value="12">12 meses (Recomendado)</option>
                <option value="24">24 meses</option>
                <option value="never">Nunca</option>
              </select>
            </div>

            {/* No Guardian Warning Modal */}
            {noGuardianWarning && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                <div className="bg-card border border-border rounded-lg p-6 max-w-md w-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <AlertCircle className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Nenhum Guardião Selecionado</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Recomendamos fortemente que você designe pelo menos um Guardião. Um Guardião é essencial para verificar seu falecimento e garantir que seu legado seja entregue corretamente.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Tem certeza de que deseja continuar sem um Guardião?
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setNoGuardianWarning(false)}
                      className="flex-1 text-foreground border-border hover:bg-card"
                    >
                      Voltar
                    </Button>
                    <Button
                      type="button"
                      onClick={handleContinueWithoutGuardian}
                      className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
                    >
                      Continuar Mesmo Assim
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Buttons */}
            <div className="flex gap-4 pt-8 border-t border-border">
              <Button
                type="button"
                variant="outline"
                onClick={() => setLocation("/signup/step1")}
                className="flex-1 text-foreground border-border hover:bg-card"
              >
                &lt; Voltar para a Etapa 1
              </Button>
              <Button
                type="button"
                onClick={handleFinish}
                className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Continuar para Planos
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
