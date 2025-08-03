import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Shield, FileText, Target } from "lucide-react";
import heroImage from "@/assets/hero-civic.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-tight">
                Fiscalize <span className="text-secondary">1 Servidor</span>,
                <br />
                Fortaleça a <span className="text-secondary">Democracia</span>
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-lg">
                Plataforma que conecta cidadãos brasileiros à fiscalização legal e organizada do poder público. 
                <strong> 1 cidadão + 1 servidor = Brasil mais transparente.</strong>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="brasil" size="xl">
                <Users className="w-5 h-5" />
                Começar a Fiscalizar
              </Button>
              <Button variant="institutional" size="xl">
                <FileText className="w-5 h-5" />
                Ver Dashboard
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              <Card className="p-4 bg-card/20 backdrop-blur-sm border-primary-foreground/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-foreground">11M+</div>
                  <div className="text-sm text-primary-foreground/80">Servidores</div>
                </div>
              </Card>
              <Card className="p-4 bg-card/20 backdrop-blur-sm border-primary-foreground/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-foreground">3</div>
                  <div className="text-sm text-primary-foreground/80">Poderes</div>
                </div>
              </Card>
              <Card className="p-4 bg-card/20 backdrop-blur-sm border-primary-foreground/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-foreground">1:20</div>
                  <div className="text-sm text-primary-foreground/80">Proporção</div>
                </div>
              </Card>
              <Card className="p-4 bg-card/20 backdrop-blur-sm border-primary-foreground/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-foreground">100%</div>
                  <div className="text-sm text-primary-foreground/80">Legal</div>
                </div>
              </Card>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Cidadãos fiscalizando poder público"
                className="w-full rounded-2xl shadow-strong"
              />
            </div>
            
            {/* Floating Cards */}
            <Card className="absolute -top-4 -left-4 p-4 bg-card shadow-medium z-20">
              <div className="flex items-center gap-3">
                <Shield className="w-8 h-8 text-primary" />
                <div>
                  <div className="font-semibold text-sm">Fiscalização Legal</div>
                  <div className="text-xs text-muted-foreground">LAI + TCU + Denúncias</div>
                </div>
              </div>
            </Card>

            <Card className="absolute -bottom-4 -right-4 p-4 bg-card shadow-medium z-20">
              <div className="flex items-center gap-3">
                <Target className="w-8 h-8 text-accent" />
                <div>
                  <div className="font-semibold text-sm">1 para 1</div>
                  <div className="text-xs text-muted-foreground">Fiscalização Distribuída</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;