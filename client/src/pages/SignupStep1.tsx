import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function SignupStep1() {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleContinue = () => {
    if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não coincidem.");
      return;
    }
    if (!formData.agreeToTerms) {
      alert("Você deve concordar com os Termos de Serviço e Política de Privacidade.");
      return;
    }

    // Salva apenas o que você realmente precisa pro MVP (sem senha)
    const draft = {
      fullName: formData.fullName.trim(),
      email: formData.email.trim().toLowerCase(),
      agreedToTerms: true,
      createdAt: new Date().toISOString(),
    };

    sessionStorage.setItem("leadDraft", JSON.stringify(draft));
    setLocation("/signup/step2");
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-full bg-accent"></div>
            <span className="text-xl font-bold text-foreground">EternaLegacy</span>
          </div>
        </div>

        {/* Card */}
        <div className="bg-card border border-border rounded-lg p-8">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-semibold">
                1
              </div>
              <span className="text-sm text-muted-foreground">Passo 1 de 4: Detalhes da Conta</span>
            </div>
            <div className="w-full h-1 bg-border rounded-full overflow-hidden">
              <div className="h-full w-1/4 bg-accent"></div>
            </div>
          </div>

          {/* Form Title */}
          <h1 className="text-2xl font-bold mb-2 text-foreground">Crie seu Cofre Seguro</h1>
          <p className="text-muted-foreground mb-8">Vamos começar com seus detalhes básicos de conta.</p>

          {/* Form */}
          <form className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Nome Completo</label>
              <input
                type="text"
                name="fullName"
                placeholder="ex: João Silva"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Endereço de E-mail</label>
              <input
                type="email"
                name="email"
                placeholder="você@exemplo.com"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Senha</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Digite sua senha"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">Mínimo 8 caracteres, 1 maiúscula, 1 número</p>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Confirmar Senha</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Repita sua senha"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                className="mt-1 w-4 h-4 bg-background border border-border rounded cursor-pointer accent-accent"
              />
              <label className="text-sm text-muted-foreground">
                Eu concordo com os <a href="#" className="text-accent hover:underline">Termos de Serviço</a> e a <a href="#" className="text-accent hover:underline">Política de Privacidade</a>.
              </label>
            </div>

            {/* Continue Button */}
            <Button
              type="button"
              onClick={handleContinue}
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-2"
            >
              Continuar para a Etapa 2
            </Button>
          </form>

          {/* Already have account */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            Já tem uma conta? <a href="#" className="text-accent hover:underline">Entrar</a>
          </p>
        </div>
      </div>
    </div>
  );
}
