import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { Shield, Smartphone, CheckCircle2, Award, Server, Eye, Lock, FileText, AlertCircle, Zap } from "lucide-react";
import { useState } from "react";

export default function SecurityPage() {
  const [, setLocation] = useLocation();
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const securityFeatures = [
    {
      icon: Shield,
      title: "Proteção Contra Invasões - Fortaleza Digital",
      description: "Seus dados são protegidos por criptografia AES-256 de nível militar, o mesmo padrão utilizado por agências governamentais e instituições financeiras. Mesmo que alguém conseguisse acessar nossos servidores, encontraria apenas dados ilegíveis e inacessíveis.",
    },
    {
      icon: Smartphone,
      title: "Autenticação Multifatorial Avançada",
      description: "Proteção em camadas com autenticação de dois fatores, biometria e verificação de identidade. Você controla quem pode acessar seu legado com múltiplas barreiras de segurança.",
    },
    {
      icon: CheckCircle2,
      title: "Protocolo de Liberação Verificada",
      description: "Antes de qualquer liberação de conteúdo, nosso sistema verifica a identidade dos Guardiões através de múltiplos canais independentes. Nenhuma liberação ocorre sem verificação rigorosa e documentada.",
    },
    {
      icon: Award,
      title: "Conformidade com Regulamentações Internacionais",
      description: "Em conformidade com GDPR, LGPD e ISO 27001. Seus dados estão protegidos pelos mais altos padrões legais e de segurança da informação reconhecidos mundialmente.",
    },
    {
      icon: Server,
      title: "Armazenamento Multi-Cloud Distribuído Globalmente",
      description: "Seus dados são replicados em múltiplos data centers em diferentes continentes. Mesmo que um data center inteiro falhe, seu legado permanece seguro e acessível. Distribuição geográfica garante disponibilidade 99.99% do tempo.",
    },
    {
      icon: Eye,
      title: "Monitoramento 24/7 e Auditoria Contínua",
      description: "Sistemas monitorados continuamente por especialistas em segurança. Auditorias independentes regulares garantem que nossas práticas estejam sempre alinhadas com os mais altos padrões de proteção de dados.",
    },
  ];

  const commitments = [
    {
      title: "Sem Acesso Não Autorizado",
      description: "Nós nunca acessamos seus dados sem sua permissão explícita ou ordem judicial.",
    },
    {
      title: "Transparência Total",
      description: "Você tem controle total sobre quem pode acessar seus dados e quando. Todos os acessos são registrados e auditáveis.",
    },
    {
      title: "Exclusão Segura",
      description: "Se você desejar deletar sua conta, todos os seus dados serão permanentemente destruídos de forma segura.",
    },
  ];

  const faqs = [
    {
      question: "Como meus dados são armazenados?",
      answer: "Seus dados são armazenados em servidores seguros em múltiplos data centers geograficamente distribuídos. Todos os dados são criptografados em repouso usando AES-256 e em trânsito usando TLS 1.3. Nós mantemos backups redundantes para garantir que seus dados nunca sejam perdidos.",
    },
    {
      question: "O que acontece se a EternaLegacy for hackeada?",
      answer: "Embora tomemos todas as precauções possíveis, em caso de incidente de segurança, você será notificado imediatamente. Devido à criptografia de ponta a ponta, mesmo que alguém acesse nossos servidores, seus dados permanecerão criptografados e inacessíveis. Realizamos auditorias de segurança regulares e temos um programa de bug bounty para identificar vulnerabilidades.",
    },
    {
      question: "Posso confiar que meus dados serão entregues corretamente?",
      answer: "Sim. Nosso protocolo de liberação verificada garante que seus dados sejam entregues apenas aos destinatários corretos, após verificação rigorosa. Todos os acessos são registrados e você pode auditar quem acessou seus dados e quando. Além disso, mantemos backups redundantes para garantir que seus dados nunca sejam perdidos.",
    },
    {
      question: "Como funciona a verificação de Guardiões?",
      answer: "Quando você designa um Guardião, ele recebe um e-mail de confirmação. Se o período de inatividade for atingido, nosso sistema entra em contato com múltiplos Guardiões através de canais diferentes (e-mail, SMS, etc.) para confirmar seu status. Apenas após confirmação de múltiplos Guardiões é que o protocolo de liberação é acionado.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Bar */}
      <nav className="border-b border-border bg-card/50 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
          <img
            src="/favicon.png"
            alt="Eternal Legacy"
            onClick={() => setLocation("/")}
            role="button"
            className="w-14 h-14 rounded-full object-cover cursor-pointer"
          />
          <span onClick={() => setLocation("/")} role="button" className="text-xl font-bold text-foreground cursor-pointer">Eternal Legacy</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="/#como-funciona" className="text-sm text-muted-foreground hover:text-foreground transition">Como Funciona</a>
            <a href="/security" className="text-sm text-accent font-semibold">Segurança</a>
            <a href="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition">Planos</a>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="text-foreground border-border hover:bg-card hidden sm:inline-flex">
              Login
            </Button>
            <Button 
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              onClick={() => setLocation("/signup/step1")}
            >
              Crie seu Cofre
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight">
            Segurança e Permanência
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Tudo é 100% digital, armazenado em Multi-AZ da AWS distribuído em múltiplas regiões do mundo, garantindo que nada se perca mesmo em caso de falha regional. O conteúdo é criptografado, protegido por senha e mantido em cofres digitais redundantes.
          </p>
        </div>
      </section>

      {/* Security Features Section */}
      <section className="py-20 border-b border-border bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">Camadas de Segurança</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-card border border-border rounded-lg p-8 hover:border-accent/50 transition">
                  <Icon className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-lg font-semibold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Commitments Section */}
      <section className="py-20 border-b border-border bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">Nossos Compromissos com Você</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {commitments.map((commitment, index) => (
              <div key={index} className="bg-background border border-border rounded-lg p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">{commitment.title}</h3>
                <p className="text-muted-foreground text-sm">{commitment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 border-b border-border bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">Perguntas Frequentes sobre Segurança</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-card border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-card/80 transition"
                >
                  <h3 className="text-lg font-semibold text-foreground text-left">{faq.question}</h3>
                  <span className="text-accent text-2xl">{expandedFaq === index ? "−" : "+"}</span>
                </button>
                {expandedFaq === index && (
                  <div className="px-6 py-4 border-t border-border bg-background">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 border-b border-border bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">Certificações e Conformidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { title: "ISO 27001", description: "Certificação internacional de segurança da informação" },
              { title: "SOC 2 Type II", description: "Auditoria independente de controles de segurança" },
              { title: "GDPR", description: "Conformidade com regulamentação europeia de proteção de dados" },
              { title: "LGPD", description: "Conformidade com lei brasileira de proteção de dados" },
            ].map((cert, index) => (
              <div key={index} className="bg-background border border-border rounded-lg p-6 text-center">
                <Award className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">{cert.title}</h3>
                <p className="text-muted-foreground text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 border-b border-border bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Pronto para Proteger seu Legado com Confiança?</h2>
          <Button 
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6"
            onClick={() => setLocation("/signup/step1")}
          >
            Comece Agora
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-foreground mb-4">Sobre Nós</h4>
              <a href="/" className="text-muted-foreground hover:text-foreground transition text-sm block">Quem Somos</a>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contato</h4>
              <a href="#" className="text-muted-foreground hover:text-foreground transition text-sm block">Suporte</a>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <a href="#" className="text-muted-foreground hover:text-foreground transition text-sm block">Termos de Serviço</a>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Privacidade</h4>
              <a href="#" className="text-muted-foreground hover:text-foreground transition text-sm block">Política de Privacidade</a>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Segurança</h4>
              <a href="/security" className="text-muted-foreground hover:text-foreground transition text-sm block">Relatório de Segurança</a>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
            <p>&copy; 2025 Eternal Legacy. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
