import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { CheckCircle2, Share2 } from "lucide-react";
import { useState, useEffect } from "react";

export default function WaitlistPage() {
  const [, setLocation] = useLocation();
  const [userEmail, setUserEmail] = useState("");

  // Get email from session storage
  useEffect(() => {
    const completeData = sessionStorage.getItem("completeSignupData");
    if (completeData) {
      const data = JSON.parse(completeData);
      setUserEmail(data.email);
    }
  }, []);

  const handleShareTwitter = () => {
    const text = "Acabei de me inscrever na EternaLegacy, uma plataforma segura para proteger meu legado digital!";
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, "_blank");
  };

  const handleShareLinkedIn = () => {
    const text = "Acabei de me inscrever na EternaLegacy, uma plataforma inovadora para proteger legados digitais!";
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=https://eternalegacy.com`, "_blank");
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://eternalegacy.com");
    alert("Link copiado para a área de transferência!");
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
      <div className="w-full max-w-md">
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
        <div className="bg-card border border-border rounded-lg p-8 text-center">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2 justify-center">
              <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-semibold">
                4
              </div>
              <span className="text-sm text-muted-foreground">Passo 4 de 4: Confirmação</span>
            </div>
            <div className="w-full h-1 bg-border rounded-full overflow-hidden">
              <div className="h-full w-full bg-accent"></div>
            </div>
          </div>

          {/* Icon */}
          <div className="mb-6 flex justify-center">
            <div className="w-16 h-16 rounded-full bg-accent/20 border border-accent flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-accent" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold mb-4 text-foreground">Você está na Lista!</h1>

          {/* Message */}
          <div className="space-y-4 mb-8 text-left">
            <p className="text-muted-foreground">
              Obrigado por seu interesse na EternaLegacy! Devido à demanda incrível, estamos atualmente integrando novos usuários em pequenos grupos para garantir a melhor experiência e segurança possível para todos.
            </p>
            <p className="text-muted-foreground">
              Você reservou com sucesso seu lugar. Notificaremos você em <span className="text-accent font-semibold">{userEmail}</span> assim que seu cofre estiver pronto para ser totalmente configurado.
            </p>
            <p className="text-muted-foreground">
              Bem-vindo ao futuro do legado digital.
            </p>
          </div>

          {/* Social Sharing */}
          <div className="mb-8 border-t border-border pt-6">
            <p className="text-sm font-medium text-foreground mb-4">Compartilhe seu interesse</p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={handleCopyLink}
                className="flex items-center gap-2 px-3 py-2 bg-background border border-border rounded hover:border-accent transition text-sm text-foreground"
                title="Copiar Link"
              >
                <Share2 className="w-4 h-4" />
                Copiar
              </button>
            </div>
          </div>

          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => setLocation("/")}
            className="w-full text-accent hover:text-accent/80 hover:bg-transparent"
          >
            &lt; Voltar para a Página Inicial
          </Button>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-xs text-muted-foreground">
          <p>Verifique seu e-mail para atualizações sobre o status do seu cofre.</p>
        </div>
      </div>
    </div>
  );
}
