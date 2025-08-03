import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  Menu, 
  Shield, 
  BarChart3, 
  Calculator, 
  FileText, 
  Users 
} from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: BarChart3, label: "Dashboard", href: "#dashboard" },
    { icon: Calculator, label: "Simulador", href: "#simulador" },
    { icon: FileText, label: "Kit Cidadão", href: "#kit" },
    { icon: Users, label: "Voluntariado", href: "#voluntarios" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-primary" />
            <span className="font-bold text-lg">FiscalBrasil</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="civic" 
              size="sm"
              onClick={() => scrollToSection('#voluntarios')}
            >
              Participar
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <div className="flex flex-col gap-4 mt-8">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.label}
                      onClick={() => scrollToSection(item.href)}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors text-left"
                    >
                      <Icon className="w-5 h-5 text-primary" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  );
                })}
                <div className="pt-4 border-t">
                  <Button 
                    variant="civic" 
                    className="w-full"
                    onClick={() => scrollToSection('#voluntarios')}
                  >
                    <Users className="w-4 h-4 mr-2" />
                    Ser Voluntário
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;