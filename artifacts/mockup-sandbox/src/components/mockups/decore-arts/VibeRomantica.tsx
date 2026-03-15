import React, { useEffect, useState } from "react";
import { MessageCircle, Instagram, Mail, Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function VibeRomantica() {
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
      gradient: "from-[#FADADD] to-[#F5B8C4]"
    },
    {
      id: 2,
      title: "Placa Personalizada de Casamento",
      description: "Celebre o amor com uma arte única.",
      gradient: "from-[#E8D5E8] to-[#D4A8D4]"
    },
    {
      id: 3,
      title: "Quadro Decorativo Floral",
      description: "Delicadeza e natureza em madeira.",
      gradient: "from-[#FDE8EE] to-[#F5C0CF]"
    },
    {
      id: 4,
      title: "Placa de Nome",
      description: "Perfeita para quartos infantis ou portas.",
      gradient: "from-[#F0D5E8] to-[#DCA8C8]"
    },
    {
      id: 5,
      title: "Arte em Madeira Rústica",
      description: "Toque rústico e acolhedor para ambientes.",
      gradient: "from-[#FCE4EC] to-[#F48FB1]"
    },
    {
      id: 6,
      title: "Placa Aniversário",
      description: "Marque datas inesquecíveis.",
      gradient: "from-[#E8D4F0] to-[#CE93D8]"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF4F5] font-sans text-[#4A2030] flex flex-col relative leading-relaxed">
      {/* 1. Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 bg-[#FAF4F5] ${
          isScrolled ? "shadow-md py-3 border-b border-[#FADADD]" : "py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <img
              src="/__mockup/images/logo-decore-arts.png"
              alt="Decorê Arts Logo"
              className="h-12 w-auto object-contain"
            />
            <span className="font-['Playfair_Display'] italic font-bold text-xl md:text-2xl text-[#4A2030] hidden sm:block">
              Decorê Arts
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-medium">
            <button onClick={() => scrollToSection('inicio')} className="text-[#4A2030] hover:text-[#C96480] transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection('galeria')} className="text-[#4A2030] hover:text-[#C96480] transition-colors">
              Galeria
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-[#4A2030] hover:text-[#C96480] transition-colors">
              Contato
            </button>
            <Button
              className="bg-[#C96480] text-white hover:bg-[#b0526b] shadow-sm rounded-full px-6 font-semibold border-none transition-all"
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            >
              <Heart className="mr-2 h-4 w-4" />
              Peça sua arte
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-[#4A2030]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#FAF4F5] shadow-lg border-t border-[#FADADD] py-4 px-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection('inicio')} className="text-left py-2 px-4 text-[#4A2030] font-medium hover:text-[#C96480]">Início</button>
            <button onClick={() => scrollToSection('galeria')} className="text-left py-2 px-4 text-[#4A2030] font-medium hover:text-[#C96480]">Galeria</button>
            <button onClick={() => scrollToSection('contato')} className="text-left py-2 px-4 text-[#4A2030] font-medium hover:text-[#C96480]">Contato</button>
            <Button
              className="w-full bg-[#C96480] text-white hover:bg-[#b0526b] rounded-full mt-2 font-semibold transition-all"
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            >
              <Heart className="mr-2 h-4 w-4" />
              Peça sua arte
            </Button>
          </div>
        )}
      </header>

      <main className="flex-grow pt-[80px]">
        {/* 2. Hero Section */}
        <section id="inicio" className="bg-gradient-to-b from-[#FADADD] to-[#FFF0F3] w-full py-24 md:py-36 px-4 relative overflow-hidden">
          <div className="container mx-auto max-w-5xl flex flex-col items-center text-center relative z-10">
            {/* Decorative faint logo background */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none w-[300px] h-[300px] md:w-[600px] md:h-[600px]">
              <img src="/__mockup/images/logo-decore-arts.png" alt="" className="w-full h-full object-cover" />
            </div>

            <h1 className="font-['Playfair_Display'] italic text-5xl md:text-7xl font-bold text-[#4A2030] mb-8 leading-tight max-w-4xl">
              Artes em madeira que <br className="hidden md:block"/> contam histórias
            </h1>
            <p className="text-[#4A2030]/80 text-lg md:text-2xl max-w-2xl mb-12">
              Placas e artes personalizadas feitas à mão para tornar seus momentos e ambientes ainda mais especiais.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
              <Button
                className="bg-[#C96480] hover:bg-[#b0526b] text-white rounded-full px-10 py-7 text-lg shadow-[0_4px_14px_rgba(201,100,128,0.4)] hover:shadow-[0_6px_20px_rgba(201,100,128,0.6)] transition-all"
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              >
                Solicitar arte personalizada
              </Button>
              <Button
                variant="outline"
                className="border-2 border-[#C96480] text-[#C96480] hover:bg-[#C96480] hover:text-white rounded-full px-10 py-7 text-lg bg-transparent transition-all"
                onClick={() => scrollToSection('galeria')}
              >
                Ver trabalhos realizados
              </Button>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="flex justify-center -mt-4 relative z-20">
          <span className="text-[#C96480] text-2xl bg-[#FAF4F5] px-4 rounded-full">❧</span>
        </div>

        {/* 3. Gallery / Works Section */}
        <section id="galeria" className="py-24 px-4 bg-[#FAF4F5]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="font-['Playfair_Display'] italic text-4xl md:text-5xl font-bold text-center text-[#4A2030] mb-4">
              Trabalhos Realizados
            </h2>
            <div className="w-24 h-0.5 border-t-2 border-double border-[#C96480] mx-auto mb-16"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {galleryItems.map((item) => (
                <Card key={item.id} className="overflow-hidden border-none shadow-[0_4px_20px_rgba(250,218,221,0.6)] hover:shadow-[0_8px_30px_rgba(201,100,128,0.3)] transition-all duration-300 hover:-translate-y-2 bg-white group rounded-3xl">
                  <div className={`h-72 w-full bg-gradient-to-br ${item.gradient} flex items-center justify-center p-6 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors duration-500" />
                    <span className="font-['Playfair_Display'] italic text-2xl md:text-3xl font-bold text-[#4A2030]/70 text-center drop-shadow-sm px-4">
                      {item.title}
                    </span>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="font-['Playfair_Display'] italic font-bold text-[#4A2030] text-2xl mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[#4A2030]/80 text-lg">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="flex justify-center -mt-6 relative z-20">
          <span className="text-[#C96480] text-2xl bg-[#FFF0F3] px-4 rounded-full">❧</span>
        </div>

        {/* 4. CTA Section */}
        <section id="contato" className="bg-[#FFF0F3] py-28 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="font-['Playfair_Display'] italic text-4xl md:text-6xl font-bold text-[#4A2030] mb-8">
              Quer uma arte exclusiva para você?
            </h2>
            <div className="w-16 h-0.5 border-t-2 border-wavy border-[#C96480] mx-auto mb-8"></div>
            <p className="text-[#4A2030]/80 text-lg md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Criamos placas personalizadas em madeira para presentes, decoração e momentos especiais. Feito sob medida com todo o cuidado.
            </p>
            <Button
              className="bg-[#25D366] hover:bg-[#20bd5c] text-white rounded-full px-10 py-8 text-xl shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] transition-all w-full sm:w-auto flex items-center gap-3 justify-center mx-auto"
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
      <footer className="bg-[#4A2030] text-[#FAF4F5] py-16 px-4">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-5">
            <div className="flex items-center gap-3 bg-white/5 p-3 rounded-2xl">
              <img
                src="/__mockup/images/logo-decore-arts.png"
                alt="Decorê Arts Logo"
                className="h-12 w-auto object-contain brightness-0 invert"
              />
              <span className="font-['Playfair_Display'] italic font-bold text-3xl">
                Decorê Arts
              </span>
            </div>
            <p className="text-[#FAF4F5]/80 max-w-sm text-lg">
              Artes personalizadas em madeira feitas com muito amor e delicadeza.
            </p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="bg-white/10 p-4 rounded-full hover:bg-[#C96480] hover:text-white transition-all hover:-translate-y-1">
              <Instagram size={24} />
            </a>
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-4 rounded-full hover:bg-[#C96480] hover:text-white transition-all hover:-translate-y-1">
              <MessageCircle size={24} />
            </a>
            <a href="mailto:contato@decorearts.com" className="bg-white/10 p-4 rounded-full hover:bg-[#C96480] hover:text-white transition-all hover:-translate-y-1">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="container mx-auto max-w-6xl mt-16 pt-8 border-t border-white/10 text-center text-sm text-[#FAF4F5]/60">
          <p>&copy; {new Date().getFullYear()} Decorê Arts. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default VibeRomantica;
