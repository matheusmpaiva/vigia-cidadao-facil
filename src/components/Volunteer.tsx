import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Users, 
  MapPin, 
  Target,
  Heart,
  Shield,
  Clock,
  CheckCircle,
  Star,
  Award
} from "lucide-react";

const Volunteer = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    cidade: "",
    estado: "",
    foco: "",
    experiencia: "",
    disponibilidade: "",
    motivacao: ""
  });

  const focos = [
    { value: "executivo-municipal", label: "Prefeitura Local", desc: "Prefeito, secretários, funcionários municipais" },
    { value: "executivo-estadual", label: "Governo Estadual", desc: "Governador, secretários estaduais" },
    { value: "executivo-federal", label: "Governo Federal", desc: "Ministérios, autarquias federais" },
    { value: "legislativo-municipal", label: "Câmara Municipal", desc: "Vereadores locais" },
    { value: "legislativo-estadual", label: "Assembleia Legislativa", desc: "Deputados estaduais" },
    { value: "legislativo-federal", label: "Congresso Nacional", desc: "Deputados federais e senadores" },
    { value: "judiciario", label: "Poder Judiciário", desc: "Tribunais e magistrados" },
    { value: "geral", label: "Qualquer Poder", desc: "Disponível para qualquer necessidade" }
  ];

  const disponibilidades = [
    { value: "1-2h", label: "1-2 horas/semana", desc: "Fiscalização básica" },
    { value: "3-5h", label: "3-5 horas/semana", desc: "Acompanhamento regular" },
    { value: "6-10h", label: "6-10 horas/semana", desc: "Fiscalização dedicada" },
    { value: "10h+", label: "Mais de 10h/semana", desc: "Ativista tempo integral" }
  ];

  const statsVoluntarios = {
    total: 2847,
    ativos: 1923,
    municipios: 342,
    acoes: 5671
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria integrado com backend para salvar o voluntário
    console.log("Voluntário cadastrado:", formData);
    alert("Obrigado por se voluntariar! Entraremos em contato em breve.");
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Seja um <span className="text-primary">Fiscal Cidadão</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Junte-se ao movimento de fiscalização distribuída. 
            Cada cidadão fiscalizando um servidor = Brasil mais transparente.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Stats da Comunidade */}
          <div className="space-y-6">
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Nossa Comunidade
                </CardTitle>
                <CardDescription>Brasileiros já organizados para fiscalizar</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-primary/10 rounded-lg">
                    <div className="text-xl font-bold text-primary">{statsVoluntarios.total.toLocaleString('pt-BR')}</div>
                    <div className="text-xs text-muted-foreground">Voluntários</div>
                  </div>
                  <div className="text-center p-3 bg-accent/10 rounded-lg">
                    <div className="text-xl font-bold text-accent">{statsVoluntarios.ativos.toLocaleString('pt-BR')}</div>
                    <div className="text-xs text-muted-foreground">Ativos</div>
                  </div>
                  <div className="text-center p-3 bg-secondary/10 rounded-lg">
                    <div className="text-xl font-bold text-secondary">{statsVoluntarios.municipios}</div>
                    <div className="text-xs text-muted-foreground">Municípios</div>
                  </div>
                  <div className="text-center p-3 bg-destructive/10 rounded-lg">
                    <div className="text-xl font-bold text-destructive">{statsVoluntarios.acoes.toLocaleString('pt-BR')}</div>
                    <div className="text-xs text-muted-foreground">Ações</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Award className="w-5 h-5 text-secondary" />
                  Por que Participar?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-primary mt-1" />
                  <div className="text-sm">
                    <strong>Impacto Real:</strong> Suas ações geram resultados concretos na transparência
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Heart className="w-4 h-4 text-destructive mt-1" />
                  <div className="text-sm">
                    <strong>Civic Duty:</strong> Exercer seu papel de cidadão consciente
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Users className="w-4 h-4 text-accent mt-1" />
                  <div className="text-sm">
                    <strong>Comunidade:</strong> Conectar-se com outros cidadãos engajados
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-secondary mt-1" />
                  <div className="text-sm">
                    <strong>Aprendizado:</strong> Entender melhor como funciona o poder público
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-accent shadow-soft">
              <CardContent className="p-4 text-center">
                <h4 className="font-bold text-foreground mb-2">Meta 2025</h4>
                <p className="text-sm text-foreground/80">
                  <strong>100.000 voluntários</strong> fiscalizando de forma organizada 
                  até o final de 2025. Você será parte da história da democracia brasileira.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Formulário de Voluntariado */}
          <div className="lg:col-span-2">
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Formulário de Voluntariado
                </CardTitle>
                <CardDescription>
                  Preencha seus dados para se juntar à fiscalização cidadã organizada
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Dados Pessoais */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nome">Nome Completo</Label>
                      <Input
                        id="nome"
                        value={formData.nome}
                        onChange={(e) => setFormData({...formData, nome: e.target.value})}
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="cidade">Cidade</Label>
                      <Input
                        id="cidade"
                        value={formData.cidade}
                        onChange={(e) => setFormData({...formData, cidade: e.target.value})}
                        placeholder="Sua cidade"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="estado">Estado</Label>
                      <Input
                        id="estado"
                        value={formData.estado}
                        onChange={(e) => setFormData({...formData, estado: e.target.value})}
                        placeholder="UF"
                        maxLength={2}
                        required
                      />
                    </div>
                  </div>

                  <Separator />

                  {/* Preferências de Fiscalização */}
                  <div className="space-y-4">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Target className="w-4 h-4" />
                      Preferências de Fiscalização
                    </h4>
                    
                    <div className="space-y-2">
                      <Label htmlFor="foco">Foco de Atuação</Label>
                      <Select value={formData.foco} onValueChange={(value) => setFormData({...formData, foco: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Escolha seu foco principal" />
                        </SelectTrigger>
                        <SelectContent>
                          {focos.map((foco) => (
                            <SelectItem key={foco.value} value={foco.value}>
                              <div>
                                <div className="font-medium">{foco.label}</div>
                                <div className="text-xs text-muted-foreground">{foco.desc}</div>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="disponibilidade">Disponibilidade</Label>
                      <Select value={formData.disponibilidade} onValueChange={(value) => setFormData({...formData, disponibilidade: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Quanto tempo pode dedicar?" />
                        </SelectTrigger>
                        <SelectContent>
                          {disponibilidades.map((disp) => (
                            <SelectItem key={disp.value} value={disp.value}>
                              <div>
                                <div className="font-medium">{disp.label}</div>
                                <div className="text-xs text-muted-foreground">{disp.desc}</div>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experiencia">Experiência Anterior (Opcional)</Label>
                    <Textarea
                      id="experiencia"
                      value={formData.experiencia}
                      onChange={(e) => setFormData({...formData, experiencia: e.target.value})}
                      placeholder="Já participou de ações de transparência? Tem conhecimento jurídico? Conte um pouco..."
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="motivacao">Motivação</Label>
                    <Textarea
                      id="motivacao"
                      value={formData.motivacao}
                      onChange={(e) => setFormData({...formData, motivacao: e.target.value})}
                      placeholder="Por que quer fiscalizar o poder público? O que te motiva?"
                      rows={3}
                      required
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button type="submit" variant="civic" size="lg" className="flex-1">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Cadastrar como Voluntário
                    </Button>
                    <Button type="button" variant="outline" size="lg">
                      <Clock className="w-4 h-4 mr-2" />
                      Salvar Rascunho
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Próximos Passos */}
        <Card className="mt-8 bg-gradient-card shadow-medium">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold mb-6 text-center">O que acontece depois do cadastro?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <span className="text-primary-foreground font-bold">1</span>
                </div>
                <h4 className="font-semibold">Treinamento</h4>
                <p className="text-sm text-muted-foreground">
                  Capacitação online sobre ferramentas legais e melhores práticas
                </p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto">
                  <span className="text-accent-foreground font-bold">2</span>
                </div>
                <h4 className="font-semibold">Designação</h4>
                <p className="text-sm text-muted-foreground">
                  Você recebe servidores específicos para acompanhar na sua região
                </p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto">
                  <span className="text-secondary-foreground font-bold">3</span>
                </div>
                <h4 className="font-semibold">Ação</h4>
                <p className="text-sm text-muted-foreground">
                  Fiscalização organizada com suporte da comunidade e ferramentas
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Volunteer;