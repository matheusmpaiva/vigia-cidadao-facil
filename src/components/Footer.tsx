import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Shield, 
  Heart, 
  ExternalLink, 
  Mail, 
  Github,
  Twitter,
  FileText,
  Scale
} from "lucide-react";

const Footer = () => {
  const links = {
    legal: [
      { label: "Constituição Federal", href: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm" },
      { label: "Lei de Acesso à Informação", href: "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12527.htm" },
      { label: "Lei de Improbidade", href: "https://www.planalto.gov.br/ccivil_03/leis/l8429.htm" },
      { label: "Portal da Transparência", href: "https://portaldatransparencia.gov.br/" }
    ],
    orgaos: [
      { label: "TCU - Tribunal de Contas", href: "https://portal.tcu.gov.br/" },
      { label: "CGU - Controladoria Geral", href: "https://www.gov.br/cgu/pt-br" },
      { label: "MPF - Ministério Público", href: "https://www.mpf.mp.br/" },
      { label: "CNJ - Conselho Nacional Justiça", href: "https://www.cnj.jus.br/" }
    ]
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo e Missão */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary-glow" />
              <span className="font-bold text-lg">FiscalBrasil</span>
            </div>
            <p className="text-sm text-background/80">
              Empoderando cidadãos brasileiros para fiscalizar o poder público 
              de forma legal, organizada e eficaz.
            </p>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-destructive" />
              <span className="text-xs">Feito com ❤️ para a democracia</span>
            </div>
          </div>

          {/* Legislação */}
          <div className="space-y-4">
            <h4 className="font-semibold flex items-center gap-2">
              <Scale className="w-4 h-4 text-accent" />
              Base Legal
            </h4>
            <ul className="space-y-2">
              {links.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-background/80 hover:text-background transition-colors flex items-center gap-1"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Órgãos de Controle */}
          <div className="space-y-4">
            <h4 className="font-semibold flex items-center gap-2">
              <FileText className="w-4 h-4 text-secondary" />
              Órgãos de Controle
            </h4>
            <ul className="space-y-2">
              {links.orgaos.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-background/80 hover:text-background transition-colors flex items-center gap-1"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato e Social */}
          <div className="space-y-4">
            <h4 className="font-semibold">Fale Conosco</h4>
            <div className="space-y-3">
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Mail className="w-4 h-4 mr-2" />
                contato@fiscalbrasil.org
              </Button>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="text-background/80 hover:text-background">
                  <Github className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-background/80 hover:text-background">
                  <Twitter className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="text-xs text-background/60">
              <p>Esta é uma iniciativa cidadã</p>
              <p>sem vinculação partidária.</p>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-background/20" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-background/80">
            © 2024 FiscalBrasil. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4 text-xs text-background/60">
            <span>Transparência • Legalidade • Cidadania</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;