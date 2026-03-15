import React, { useEffect, useState } from "react";
import { MessageCircle, Instagram, Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const galleryItems = [
    {
      id: 1,
      title: "Placa Família",
      description: "Uma linda placa para a entrada do seu lar.",
      gradient: "from-[#F5DEB3] to-[#DEB887]"
    },
    {
      id: 2,
      title: "Placa Personalizada de Casamento",
      description: "Celebre o amor com uma arte única.",
      gradient: "from-[#FFCAD4] to-[#FF9FAD]"
    },
    {
      id: 3,
      title: "Quadro Decorativo Floral",
      description: "Delicadeza e natureza em madeira.",
      gradient: "from-[#D4EDDA] to-[#A8D5B5]"
    },
    {
      id: 4,
      title: "Placa de Nome",
      description: "Perfeita para quartos infantis ou portas.",
      gradient: "from-[#FFF3CD] to-[#FFE082]"
    },
    {
      id: 5,
      title: "Arte em Madeira Rústica",
      description: "Toque rústico e acolhedor para ambientes.",
      gradient: "from-[#E8D5C4] to-[#C9A882]"
    },
    {
      id: 6,
      title: "Placa Aniversário",
      description: "Marque datas inesquecíveis.",
      gradient: "from-[#F8C8D4] to-[#FFAAB8]"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-[#785E61] flex flex-col relative">
      {/* 1. Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 bg-[#FAFAFA] ${
          isScrolled ? "shadow-md py-3" : "py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <img
              src="/__mockup/images/logo-decore-arts.png"
              alt="Decorê Arts Logo"
              className="h-12 w-auto object-contain"
            />
            <span className="font-['Playfair_Display'] font-bold text-xl md:text-2xl text-[#785E61] hidden sm:block">
              Decorê Arts
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-medium">
            <button onClick={() => scrollToSection('inicio')} className="text-[#785E61] hover:text-[#5a4648] transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection('galeria')} className="text-[#785E61] hover:text-[#5a4648] transition-colors">
              Galeria
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-[#785E61] hover:text-[#5a4648] transition-colors">
              Contato
            </button>
            <Button
              className="bg-[#FFCAD4] text-[#785E61] hover:bg-[#ffb6c4] border-none shadow-sm rounded-full px-6 font-semibold"
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            >
              Peça sua arte
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-[#785E61]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#FAFAFA] shadow-lg border-t border-[#FFCAD4]/30 py-4 px-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection('inicio')} className="text-left py-2 px-4 text-[#785E61] font-medium">Início</button>
            <button onClick={() => scrollToSection('galeria')} className="text-left py-2 px-4 text-[#785E61] font-medium">Galeria</button>
            <button onClick={() => scrollToSection('contato')} className="text-left py-2 px-4 text-[#785E61] font-medium">Contato</button>
            <Button
              className="w-full bg-[#FFCAD4] text-[#785E61] hover:bg-[#ffb6c4] rounded-full mt-2 font-semibold"
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            >
              Peça sua arte
            </Button>
          </div>
        )}
      </header>

      <main className="flex-grow pt-[80px]">
        {/* 2. Hero Section */}
        <section id="inicio" className="bg-[#FFCAD4] w-full py-20 md:py-32 px-4 relative overflow-hidden">
          <div className="container mx-auto max-w-5xl flex flex-col items-center text-center relative z-10">
            {/* Decorative faint logo background */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.05] pointer-events-none w-[300px] h-[300px] md:w-[600px] md:h-[600px]">
              <img src="/__mockup/images/logo-decore-arts.png" alt="" className="w-full h-full object-cover" />
            </div>

            <h1 className="font-['Playfair_Display'] text-4xl md:text-6xl lg:text-7xl font-bold text-[#785E61] mb-6 leading-tight max-w-4xl">
              Artes em madeira que <br className="hidden md:block"/> contam histórias
            </h1>
            <p className="text-[#785E61] text-lg md:text-xl max-w-2xl mb-10 opacity-90">
              Placas e artes personalizadas feitas à mão para tornar seus momentos e ambientes ainda mais especiais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button
                className="bg-[#785E61] hover:bg-[#5a4648] text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              >
                Solicitar arte personalizada
              </Button>
              <Button
                variant="outline"
                className="border-2 border-[#785E61] text-[#785E61] hover:bg-[#785E61] hover:text-white rounded-full px-8 py-6 text-lg bg-transparent transition-all"
                onClick={() => scrollToSection('galeria')}
              >
                Ver trabalhos realizados
              </Button>
            </div>
          </div>
        </section>

        {/* 3. Gallery / Works Section */}
        <section id="galeria" className="py-24 px-4 bg-[#FAFAFA]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="font-['Playfair_Display'] text-3xl md:text-5xl font-bold text-center text-[#785E61] mb-4">
              Trabalhos Realizados
            </h2>
            <div className="w-24 h-1 bg-[#FFCAD4] mx-auto mb-16 rounded-full"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryItems.map((item) => (
                <Card key={item.id} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white group rounded-2xl">
                  <div className={`h-64 w-full bg-gradient-to-br ${item.gradient} flex items-center justify-center p-6 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
                    <span className="font-['Playfair_Display'] text-2xl font-bold text-[#785E61]/80 text-center drop-shadow-sm">
                      {item.title}
                    </span>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-['Playfair_Display'] font-bold text-[#785E61] text-xl mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#785E61]/80">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 4. CTA Section */}
        <section id="contato" className="bg-[#FFCAD4] py-24 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="font-['Playfair_Display'] text-3xl md:text-5xl font-bold text-[#785E61] mb-6">
              Quer uma arte exclusiva para você?
            </h2>
            <p className="text-[#785E61] text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-90">
              Criamos placas personalizadas em madeira para presentes, decoração e momentos especiais. Feito sob medida com todo o cuidado.
            </p>
            <Button
              className="bg-[#25D366] hover:bg-[#20bd5c] text-white rounded-full px-8 py-8 text-lg md:text-xl shadow-lg hover:shadow-xl transition-all w-full sm:w-auto flex items-center gap-3 justify-center mx-auto"
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            >
              <MessageCircle size={28} />
              Fazer meu pedido no WhatsApp
            </Button>
          </div>
        </section>
      </main>

      {/* 5. WhatsApp Floating Button */}
      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={32} />
      </a>

      {/* 6. Footer */}
      <footer className="bg-[#785E61] text-[#FAFAFA] py-12 px-4">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3 bg-white/10 p-2 rounded-xl">
              <img
                src="/__mockup/images/logo-decore-arts.png"
                alt="Decorê Arts Logo"
                className="h-10 w-auto object-contain brightness-0 invert"
              />
              <span className="font-['Playfair_Display'] font-bold text-2xl">
                Decorê Arts
              </span>
            </div>
            <p className="text-[#FAFAFA]/80 max-w-xs">
              Artes personalizadas em madeira feitas com carinho.
            </p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-[#FFCAD4] hover:text-[#785E61] transition-colors">
              <Instagram size={24} />
            </a>
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-[#FFCAD4] hover:text-[#785E61] transition-colors">
              <MessageCircle size={24} />
            </a>
            <a href="mailto:contato@decorearts.com" className="bg-white/10 p-3 rounded-full hover:bg-[#FFCAD4] hover:text-[#785E61] transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="container mx-auto max-w-6xl mt-12 pt-8 border-t border-white/20 text-center text-sm text-[#FAFAFA]/60">
          <p>&copy; {new Date().getFullYear()} Decorê Arts. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
