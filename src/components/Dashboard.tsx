import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Building, 
  Gavel, 
  Users, 
  Calculator,
  TrendingUp,
  FileSearch,
  AlertTriangle
} from "lucide-react";

const Dashboard = () => {
  // Dados simulados baseados em informações públicas
  const servidoresData = {
    executivo: { total: 7200000, cargo: "Executivo Federal/Estadual/Municipal" },
    legislativo: { total: 180000, cargo: "Deputados, Senadores, Vereadores" },
    judiciario: { total: 450000, cargo: "Juízes, Desembargadores, Ministros" }
  };

  const totalServidores = Object.values(servidoresData).reduce((acc, curr) => acc + curr.total, 0);
  const populacaoBrasil = 215000000;
  const proporcao = Math.round(populacaoBrasil / totalServidores);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Dashboard da <span className="text-primary">Transparência</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dados públicos organizados para facilitar a fiscalização cidadã. 
            Cada brasileiro pode fiscalizar <strong>{proporcao} servidores</strong> em média.
          </p>
        </div>

        {/* Cards Principais */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-gradient-card shadow-medium hover:shadow-strong transition-all">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Servidores</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalServidores.toLocaleString('pt-BR')}</div>
              <p className="text-xs text-muted-foreground">
                Todos os poderes (estimativa 2024)
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-medium hover:shadow-strong transition-all">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Proporção Cidadão/Servidor</CardTitle>
              <Calculator className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1:{proporcao}</div>
              <p className="text-xs text-muted-foreground">
                Cada brasileiro pode fiscalizar {proporcao} servidores
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-medium hover:shadow-strong transition-all">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Potencial de Fiscalização</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">100%</div>
              <p className="text-xs text-muted-foreground">
                Com organização cidadã distribuída
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Distribuição por Poder */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Executivo */}
          <Card className="shadow-soft">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Building className="w-5 h-5 text-primary" />
                  <CardTitle className="text-lg">Poder Executivo</CardTitle>
                </div>
                <Badge variant="secondary">Federal + Estadual + Municipal</Badge>
              </div>
              <CardDescription>
                Prefeitos, Governadores, Presidente e todo funcionalismo público
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Servidores</span>
                  <span className="text-sm text-muted-foreground">
                    {servidoresData.executivo.total.toLocaleString('pt-BR')}
                  </span>
                </div>
                <Progress value={94} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">94% do total</p>
              </div>
              <Button variant="outline" size="sm" className="w-full">
                <FileSearch className="w-4 h-4 mr-2" />
                Fiscalizar Executivo
              </Button>
            </CardContent>
          </Card>

          {/* Legislativo */}
          <Card className="shadow-soft">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-accent" />
                  <CardTitle className="text-lg">Poder Legislativo</CardTitle>
                </div>
                <Badge variant="outline">Federal + Estadual + Municipal</Badge>
              </div>
              <CardDescription>
                Deputados Federais, Senadores, Deputados Estaduais, Vereadores
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Parlamentares</span>
                  <span className="text-sm text-muted-foreground">
                    {servidoresData.legislativo.total.toLocaleString('pt-BR')}
                  </span>
                </div>
                <Progress value={2} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">2% do total</p>
              </div>
              <Button variant="outline" size="sm" className="w-full">
                <FileSearch className="w-4 h-4 mr-2" />
                Fiscalizar Legislativo
              </Button>
            </CardContent>
          </Card>

          {/* Judiciário */}
          <Card className="shadow-soft">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Gavel className="w-5 h-5 text-destructive" />
                  <CardTitle className="text-lg">Poder Judiciário</CardTitle>
                </div>
                <Badge variant="destructive">Federal + Estadual</Badge>
              </div>
              <CardDescription>
                Ministros, Desembargadores, Juízes e servidores do Judiciário
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Magistrados + Servidores</span>
                  <span className="text-sm text-muted-foreground">
                    {servidoresData.judiciario.total.toLocaleString('pt-BR')}
                  </span>
                </div>
                <Progress value={4} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">4% do total</p>
              </div>
              <Button variant="outline" size="sm" className="w-full">
                <FileSearch className="w-4 h-4 mr-2" />
                Fiscalizar Judiciário
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className="mt-12 bg-gradient-accent text-center p-8">
          <div className="max-w-2xl mx-auto">
            <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-foreground" />
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              E se cada cidadão fiscalizasse apenas 1 servidor?
            </h3>
            <p className="text-foreground/80 mb-6">
              Com {proporcao} servidores por cidadão, poderíamos ter uma fiscalização distribuída 
              e contínua que fortaleceria nossa democracia de forma legal e organizada.
            </p>
            <Button variant="civic" size="xl">
              Simular Minha Fiscalização
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Dashboard;