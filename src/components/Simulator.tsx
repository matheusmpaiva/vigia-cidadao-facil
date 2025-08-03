import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  Calculator, 
  Users, 
  Target,
  Zap,
  MapPin,
  Clock,
  CheckCircle
} from "lucide-react";

const Simulator = () => {
  const [cidadaos, setCidadaos] = useState(1000000);
  const [foco, setFoco] = useState("geral");
  
  // Dados base
  const totalServidores = 7850000;
  const servidoresPorCidadao = Math.round(totalServidores / cidadaos);
  const cobertura = Math.min((cidadaos / totalServidores) * 100, 100);
  
  // Focos de fiscalização
  const focos = {
    geral: { nome: "Todos os Poderes", servidores: 7850000 },
    executivo: { nome: "Só Executivo", servidores: 7200000 },
    legislativo: { nome: "Só Legislativo", servidores: 180000 },
    judiciario: { nome: "Só Judiciário", servidores: 450000 },
    alto_escalao: { nome: "Alto Escalão", servidores: 50000 }
  };

  const impactoCalculado = {
    tempo: Math.round(cidadaos / 10000),
    regioes: Math.min(Math.round(cidadaos / 50000), 5570),
    ferramentas: Math.round(cidadaos * 0.3)
  };

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simulador de <span className="text-primary">Fiscalização Distribuída</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra o impacto que um grupo organizado de cidadãos pode ter na transparência pública.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Configuração */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                Configure sua Simulação
              </CardTitle>
              <CardDescription>
                Ajuste os parâmetros para ver o potencial da fiscalização cidadã
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="cidadaos">Número de Cidadãos Fiscalizadores</Label>
                <Input
                  id="cidadaos"
                  type="number"
                  value={cidadaos}
                  onChange={(e) => setCidadaos(Number(e.target.value))}
                  min="1"
                  max="10000000"
                  step="1000"
                />
                <p className="text-xs text-muted-foreground">
                  De 1 até 10 milhões de brasileiros organizados
                </p>
              </div>

              <div className="space-y-2">
                <Label>Foco da Fiscalização</Label>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(focos).map(([key, value]) => (
                    <Button
                      key={key}
                      variant={foco === key ? "default" : "outline"}
                      size="sm"
                      onClick={() => setFoco(key)}
                      className="justify-start"
                    >
                      {value.nome}
                    </Button>
                  ))}
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-semibold flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  Resultados da Simulação
                </h4>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-primary/10 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{servidoresPorCidadao}</div>
                    <div className="text-xs text-muted-foreground">Servidores por cidadão</div>
                  </div>
                  <div className="text-center p-3 bg-accent/10 rounded-lg">
                    <div className="text-2xl font-bold text-accent">{cobertura.toFixed(1)}%</div>
                    <div className="text-xs text-muted-foreground">Cobertura total</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Impacto Projetado */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-secondary" />
                Impacto Projetado
              </CardTitle>
              <CardDescription>
                O que {cidadaos.toLocaleString('pt-BR')} cidadãos organizados podem alcançar
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Tempo de Organização</h4>
                    <p className="text-sm text-muted-foreground">
                      Aproximadamente <strong>{impactoCalculado.tempo} semanas</strong> para organizar 
                      e treinar todos os voluntários
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Cobertura Geográfica</h4>
                    <p className="text-sm text-muted-foreground">
                      Presente em até <strong>{impactoCalculado.regioes.toLocaleString('pt-BR')} municípios</strong> brasileiros 
                      simultaneamente
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-secondary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Ferramentas Ativas</h4>
                    <p className="text-sm text-muted-foreground">
                      <strong>{impactoCalculado.ferramentas.toLocaleString('pt-BR')} pedidos LAI/mês</strong> + 
                      denúncias + acompanhamento contínuo
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <h4 className="font-semibold">Cenários de Impacto:</h4>
                
                {cobertura < 25 && (
                  <Badge variant="outline" className="w-full justify-center">
                    Fiscalização Pontual - Casos específicos
                  </Badge>
                )}
                
                {cobertura >= 25 && cobertura < 50 && (
                  <Badge variant="secondary" className="w-full justify-center">
                    Pressão Setorial - Áreas prioritárias
                  </Badge>
                )}
                
                {cobertura >= 50 && cobertura < 75 && (
                  <Badge variant="default" className="w-full justify-center">
                    Vigilância Sistemática - Mudança cultural
                  </Badge>
                )}
                
                {cobertura >= 75 && (
                  <Badge variant="brasil" className="w-full justify-center">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Fiscalização Total - Revolução democrática
                  </Badge>
                )}
              </div>

              <Button variant="civic" className="w-full" size="lg">
                <Target className="w-4 h-4 mr-2" />
                Me Voluntariar para Esta Meta
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Exemplo Prático */}
        <Card className="mt-8 bg-gradient-card shadow-medium">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Exemplo Prático</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Com <strong>1 milhão de cidadãos</strong> organizados, cada pessoa fiscalizaria apenas 
              <strong> {Math.round(totalServidores / 1000000)} servidores</strong>. Isso significa acompanhar 
              1 prefeito ou 1 deputado ou alguns funcionários da prefeitura local. 
              <br/><br/>
              <strong>Resultado:</strong> Pela primeira vez na história, teríamos uma vigilância cidadã 
              distribuída, legal e contínua sobre todo o poder público brasileiro.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Simulator;