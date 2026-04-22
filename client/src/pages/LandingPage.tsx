import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { Lock, Cloud, Key, Shield, Smartphone, CheckCircle2, Heart, Users, Zap } from "lucide-react";

export default function LandingPage() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Bar */}
      <nav className="border-b border-border bg-card/50 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
          <img
            src="/favicon.png"
            alt="Eternal Legacy"
            className="w-14 h-14 rounded-full object-cover"
          />
          <span className="text-xl font-bold text-foreground">Eternal Legacy</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#como-funciona" className="text-sm text-muted-foreground hover:text-foreground transition">Como Funciona</a>
            <a href="#seguranca" className="text-sm text-muted-foreground hover:text-foreground transition">Segurança</a>
            <a href="#planos" className="text-sm text-muted-foreground hover:text-foreground transition">Planos</a>
          </div>
          <div className="flex items-center gap-3">
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
            Nem tudo acaba quando a vida termina.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Há palavras, lembranças e escolhas que merecem chegar a quem você ama — no momento certo.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
            O Eternal Legacy é um cofre digital para registrar mensagens, documentos e memórias com privacidade e definir quando e para quem tudo será entregue.
          </p>
          <Button 
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6"
            onClick={() => setLocation("/signup/step1")}
          >
            Crie seu Cofre
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 border-b border-border bg-card/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-background border border-border rounded-lg p-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">O que é Eternal Legacy</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              De forma virtual, segura e confidencial, o Eternal Legacy existe para organizar e proteger aquilo que é essencial — sua voz, suas histórias e suas verdades.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Não é sobre morte. É sobre continuidade.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="como-funciona" className="py-20 border-b border-border bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">Como Funciona</h2>
          
          {/* Step 1 */}
          <div className="mb-16 max-w-4xl mx-auto">
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-card border-2 border-accent flex items-center justify-center">
                  <Lock className="w-8 h-8 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">Criação do Cofre Afetivo</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Escreva cartas, grave áudios e vídeos e reuña documentos. Tudo fica organizado de forma simples e guiada.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="mb-16 max-w-4xl mx-auto">
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-card border-2 border-accent flex items-center justify-center">
                  <Users className="w-8 h-8 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">Guardiões e Destinatários</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Escolha pessoas de confiança para confirmar o momento de liberação e defina quem receberá cada conteúdo.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-card border-2 border-accent flex items-center justify-center">
                  <Zap className="w-8 h-8 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">Entrega Programada</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Programe entregas após o falecimento ou em datas especiais. Quem recebe acessa um ambiente protegido e fácil de usar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to Use Section */}
      <section className="py-20 border-b border-border bg-card/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Quando Usar</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            O Eternal Legacy é para quem quer deixar algo claro, organizado e seguro — para familiares, filhos, amigos ou pessoas importantes.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            Pode ser útil em momentos delicados de saúde ou simplesmente para registrar o que não pode ficar sem ser dito.
          </p>
        </div>
      </section>

      {/* What You Can Leave Section */}
      <section className="py-20 border-b border-border bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">O que é Possível Deixar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8">
              <Heart className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-lg font-semibold mb-3 text-foreground">Mensagens Póstumas</h3>
              <p className="text-muted-foreground">Em texto, áudio ou vídeo — para dizer o que importa, do seu jeito.</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <Lock className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-lg font-semibold mb-3 text-foreground">Cartas Guiadas</h3>
              <p className="text-muted-foreground">Roteiros emocionais para facilitar: "Se um dia sentir minha falta…", "O que aprendi sobre o amor…"</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <Cloud className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-lg font-semibold mb-3 text-foreground">Documentário Digital</h3>
              <p className="text-muted-foreground">Uma linha do tempo com fotos, relatos e memórias — montada como uma narrativa.</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <Shield className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-lg font-semibold mb-3 text-foreground">Testamento Emocional</h3>
              <p className="text-muted-foreground">Valores, aprendizados e desejos para quem fica — com clareza e carinho.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It's Different Section */}
      <section className="py-20 border-b border-border bg-card/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Por Que é Diferente</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            O Eternal Legacy não é só armazenamento. É uma experiência guiada para transformar memórias em uma narrativa com sentido.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            Outros serviços guardam arquivos. O Eternal Legacy entrega significado.
          </p>
        </div>
      </section>

      {/* Security Section */}
      <section id="seguranca" className="py-20 border-b border-border bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">Segurança e Permanência</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8 text-center hover:border-accent/50 transition">
              <Shield className="w-10 h-10 text-accent mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-3 text-foreground">100% Digital</h3>
              <p className="text-muted-foreground text-sm">Infraestrutura redundante para manter seu conteúdo disponível mesmo em cenários de falha.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 text-center hover:border-accent/50 transition">
              <Lock className="w-10 h-10 text-accent mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-3 text-foreground">Criptografado</h3>
              <p className="text-muted-foreground text-sm">Conteúdo protegido por senha e criptografia, com camadas de segurança e redundância.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 text-center hover:border-accent/50 transition">
              <CheckCircle2 className="w-10 h-10 text-accent mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-3 text-foreground">Permanente</h3>
              <p className="text-muted-foreground text-sm">Após a liberação confirmada, quem recebe tem acesso de forma simples e sem custos adicionais.</p>
            </div>
          </div>
          <div className="mt-12 text-center max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              O Eternal Legacy foi criado para resistir ao tempo — com privacidade, ética e respeito absoluto à memória de cada pessoa.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="planos" className="py-20 border-b border-border bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">Escolha Seu Plano de Legado</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Essência Plan */}
            <div className="bg-card border border-border rounded-lg p-8 hover:border-accent/50 transition flex flex-col">
              <h3 className="text-2xl font-bold text-foreground mb-2">Essência</h3>
              <p className="text-muted-foreground text-sm mb-6">Para quem quer começar simples</p>
              <div className="mb-6">
                <p className="text-3xl font-bold text-accent">R$ 24,90</p>
                <p className="text-muted-foreground text-sm">por mês</p>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
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
                  Armazenamento: 10 GB
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  Até 3 Guardiões
                </li>
                {/* <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  Preservação por 10 anos 
                </li> */}
              </ul>
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                onClick={() => setLocation("/signup/step1")}
              >Começar</Button>
            </div>

            {/* Legado Plan (Featured) */}
            <div className="bg-card border-2 border-accent rounded-lg p-8 hover:border-accent transition flex flex-col relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-xs font-semibold">Mais Popular</div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Legado</h3>
              <p className="text-muted-foreground text-sm mb-6">Para quem quer mais conexão</p>
              <div className="mb-6">
                <p className="text-3xl font-bold text-accent">R$ 39,90</p>
                <p className="text-muted-foreground text-sm">por mês</p>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  Tudo do Essência +
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  Roteiros emocionais guiados
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  Até 30 mensagens
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  Armazenamento: 25 GB
                </li>
                {/* <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  Até 3 destinatários
                </li> */}
                {/* <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  Mensagens temáticas automáticas
                </li> */}
              </ul>
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  onClick={() => setLocation("/signup/step1")}
              >Começar</Button>
            </div>

            {/* Eternidade Plan */}
            <div className="bg-card border border-border rounded-lg p-8 hover:border-accent/50 transition flex flex-col">
              <h3 className="text-2xl font-bold text-foreground mb-2">Eternidade</h3>
              <p className="text-muted-foreground text-sm mb-6">Para quem quer o máximo</p>
              <div className="mb-6">
                <p className="text-3xl font-bold text-accent">R$ 69,90</p>
                <p className="text-muted-foreground text-sm">por mês</p>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  Tudo do Legado +
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  Até 50 mensagens
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  Armazenamento: 50 GB
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  Entregas programadas
                </li>
                {/* <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  Preservação por 25 anos
                </li> */}
              </ul>
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                onClick={() => setLocation("/signup/step1")}
              >Começar</Button>
            </div>
          </div>
          {/* <div className="mt-12 bg-card/50 border border-border rounded-lg p-6 max-w-3xl mx-auto text-center">
            <p className="text-sm text-muted-foreground">
              * <strong>Acesso vitalício</strong> refere-se ao acesso contínuo dos destinatários ao conteúdo enquanto o serviço estiver ativo e a conta estiver regular.
            </p>
          </div> */}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 border-b border-border bg-card/30">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="bg-background border border-border rounded-lg p-12">
            <p className="text-2xl md:text-3xl italic text-foreground mb-6 leading-relaxed">
              "Saber que minhas mensagens estão protegidas me trouxe uma tranquilidade enorme. O Eternal Legacy deixou tudo simples e seguro."
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 border-b border-border bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Pronto para criar seu Cofre?</h2>
          <Button 
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6"
            onClick={() => setLocation("/signup/step1")}
          >
            Começar agora
          </Button>
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="quem-somos" className="py-20 border-b border-border bg-card/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
            Quem Somos
          </h2>

          <div className="bg-background border border-border rounded-lg p-10">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Somos o Eternal Legacy — um cofre digital criado para preservar memórias, mensagens e documentos com privacidade,
                segurança e entrega no momento certo. Nosso objetivo é transformar o legado digital em algo simples, confiável e
                humano, para que aquilo que importa continue existindo para quem você ama.
              </p>

              <div className="flex justify-center">
                <div className="text-center">
                  <p className="text-lg text-muted-foreground">Entre em contato conosco pelo e-mail:</p>
                  <a href="mailto:contato@eternalegacy.pro" className="text-accent font-medium hover:underline">contato@eternalegacy.pro</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-foreground mb-4">Sobre Nós</h4>
              <a href="#quem-somos" className="text-muted-foreground hover:text-foreground transition text-sm block">
                Quem Somos
              </a>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contato</h4>
              <a href="mailto:contato@exemplo.com" className="text-muted-foreground hover:text-foreground transition text-sm block mt-2">contato@exemplo.com</a>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <a onClick={() => setLocation("/terms")} className="text-muted-foreground hover:text-foreground transition text-sm block cursor-pointer">Termos de Serviço</a>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Privacidade</h4>
              <a onClick={() => setLocation("/privacy")} className="text-muted-foreground hover:text-foreground transition text-sm block cursor-pointer">Política de Privacidade</a>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
            <p>&copy; 2026 Eternal Legacy. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
