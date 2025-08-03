import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, 
  Mail, 
  AlertTriangle, 
  Shield, 
  Download,
  ExternalLink,
  Phone,
  Scale,
  Clock,
  CheckCircle
} from "lucide-react";

const CitizenKit = () => {
  const ferramentasLAI = [
    {
      titulo: "Modelo de Pedido LAI",
      descricao: "Template pronto para solicitar informações sobre gastos, salários e atividades",
      tipo: "template",
      urgencia: "baixa"
    },
    {
      titulo: "Recurso LAI - 1ª Instância", 
      descricao: "Para quando seu pedido for negado ou respondido de forma insuficiente",
      tipo: "recurso",
      urgencia: "media"
    },
    {
      titulo: "Recurso LAI - 2ª Instância",
      descricao: "Escalação para autoridade superior quando ainda não obteve resposta",
      tipo: "recurso", 
      urgencia: "alta"
    }
  ];

  const ferramentasTCU = [
    {
      titulo: "Denúncia ao TCU",
      descricao: "Para irregularidades graves em gastos públicos federais",
      tipo: "denuncia",
      urgencia: "alta"
    },
    {
      titulo: "Representação TCU",
      descricao: "Para questionar licitações e contratos suspeitos",
      tipo: "representacao",
      urgencia: "alta"
    },
    {
      titulo: "Acompanhamento de Processos",
      descricao: "Como acompanhar suas denúncias e o andamento",
      tipo: "acompanhamento",
      urgencia: "baixa"
    }
  ];

  const ferramentasMP = [
    {
      titulo: "Notícia de Fato ao MP",
      descricao: "Para denunciar atos de improbidade administrativa",
      tipo: "noticia",
      urgencia: "alta"
    },
    {
      titulo: "Ação Popular",
      descricao: "Como qualquer cidadão pode mover ação contra atos lesivos",
      tipo: "acao",
      urgencia: "media"
    }
  ];

  const contatos = {
    lai: "lai@cgu.gov.br",
    tcu: "https://portal.tcu.gov.br/denuncias/",
    mp: "https://www.mpf.mp.br/para-o-cidadao/sac",
    ouvidoria: "https://www.gov.br/ouvidorias/pt-br"
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Kit <span className="text-primary">Cidadão Fiscal</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ferramentas legais prontas para usar. Tudo que você precisa para fiscalizar 
            de forma correta, legal e eficaz.
          </p>
        </div>

        <Tabs defaultValue="lai" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="lai">Lei de Acesso</TabsTrigger>
            <TabsTrigger value="tcu">TCU</TabsTrigger>
            <TabsTrigger value="mp">Ministério Público</TabsTrigger>
            <TabsTrigger value="contatos">Contatos</TabsTrigger>
          </TabsList>

          {/* LAI - Lei de Acesso à Informação */}
          <TabsContent value="lai" className="space-y-6">
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Lei de Acesso à Informação (LAI)
                </CardTitle>
                <CardDescription>
                  Seu direito constitucional de obter informações públicas de qualquer órgão
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">O que você pode pedir:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        Salários e gastos de qualquer servidor
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        Contratos e licitações públicas
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        Agenda de autoridades públicas
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        Relatórios de viagens oficiais
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        Qualquer documento público
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold">Prazos legais:</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-accent" />
                        <span className="text-sm"><strong>20 dias</strong> para resposta inicial</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-accent" />
                        <span className="text-sm"><strong>+10 dias</strong> prorrogação (se necessário)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-destructive" />
                        <span className="text-sm"><strong>Sem resposta = crime</strong> de responsabilidade</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-4">
              {ferramentasLAI.map((ferramenta, index) => (
                <Card key={index} className="shadow-soft hover:shadow-medium transition-all">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">{ferramenta.titulo}</CardTitle>
                      <Badge variant={ferramenta.urgencia === 'alta' ? 'destructive' : ferramenta.urgencia === 'media' ? 'secondary' : 'outline'}>
                        {ferramenta.urgencia}
                      </Badge>
                    </div>
                    <CardDescription className="text-xs">
                      {ferramenta.descricao}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button variant="outline" size="sm" className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Baixar Modelo
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* TCU */}
          <TabsContent value="tcu" className="space-y-6">
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-destructive" />
                  Tribunal de Contas da União (TCU)
                </CardTitle>
                <CardDescription>
                  Para irregularidades graves em recursos federais
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-4">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5" />
                    <div className="text-sm">
                      <strong>Quando usar:</strong> Suspeitas de corrupção, superfaturamento, 
                      licitações fraudadas ou qualquer irregularidade com dinheiro federal.
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  O TCU é obrigado por lei a apurar toda denúncia fundamentada. 
                  Suas ferramentas são poderosas e podem resultar em bloqueio de recursos, 
                  afastamento de gestores e ressarcimento aos cofres públicos.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-4">
              {ferramentasTCU.map((ferramenta, index) => (
                <Card key={index} className="shadow-soft hover:shadow-medium transition-all">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">{ferramenta.titulo}</CardTitle>
                      <Badge variant={ferramenta.urgencia === 'alta' ? 'destructive' : 'outline'}>
                        {ferramenta.urgencia}
                      </Badge>
                    </div>
                    <CardDescription className="text-xs">
                      {ferramenta.descricao}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button variant="destructive" size="sm" className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Baixar Modelo
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Ministério Público */}
          <TabsContent value="mp" className="space-y-6">
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="w-5 h-5 text-accent" />
                  Ministério Público
                </CardTitle>
                <CardDescription>
                  Para atos de improbidade administrativa e defesa do patrimônio público
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-4">
                  <div className="flex items-start gap-2">
                    <Scale className="w-5 h-5 text-accent mt-0.5" />
                    <div className="text-sm">
                      <strong>Quando usar:</strong> Improbidade administrativa, enriquecimento ilícito, 
                      lesão ao patrimônio público ou qualquer conduta antiética de agente público.
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  O MP pode mover ações civis públicas, propor acordos de leniência 
                  e até mesmo ações penais quando há crime.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-4">
              {ferramentasMP.map((ferramenta, index) => (
                <Card key={index} className="shadow-soft hover:shadow-medium transition-all">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">{ferramenta.titulo}</CardTitle>
                      <Badge variant={ferramenta.urgencia === 'alta' ? 'destructive' : 'secondary'}>
                        {ferramenta.urgencia}
                      </Badge>
                    </div>
                    <CardDescription className="text-xs">
                      {ferramenta.descricao}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button variant="accent" size="sm" className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Baixar Modelo
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Contatos */}
          <TabsContent value="contatos" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-lg">Contatos Oficiais</CardTitle>
                  <CardDescription>Canais oficiais para suas denúncias e pedidos</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-semibold text-sm">LAI - CGU</div>
                      <div className="text-xs text-muted-foreground">{contatos.lai}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <ExternalLink className="w-5 h-5 text-destructive" />
                    <div>
                      <div className="font-semibold text-sm">TCU - Denúncias</div>
                      <div className="text-xs text-muted-foreground">Portal oficial de denúncias</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-accent" />
                    <div>
                      <div className="font-semibold text-sm">Ministério Público Federal</div>
                      <div className="text-xs text-muted-foreground">SAC e denúncias online</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-lg">Dicas Importantes</CardTitle>
                  <CardDescription>Para aumentar a eficácia das suas ações</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Sempre guarde protocolos e comprovantes</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Seja específico e objetivo nas solicitações</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Apresente fatos, não opiniões políticas</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Acompanhe os prazos legais</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Use linguagem formal e respeitosa</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-accent shadow-medium">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold mb-2 text-foreground">Lembre-se</h3>
                <p className="text-sm text-foreground/80">
                  Você tem o <strong>direito constitucional</strong> de fiscalizar o poder público. 
                  Todas essas ferramentas são gratuitas, legais e protegidas por lei. 
                  <br/><strong>Use-as com responsabilidade e baseado em fatos.</strong>
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default CitizenKit;