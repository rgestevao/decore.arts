import React, { useEffect, useState } from "react";
import { MessageCircle, Instagram, Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function VibeEditorial() {
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
      gradient: "from-[#F0EBE3] to-[#E0D5C8]"
    },
    {
      id: 2,
      title: "Placa Personalizada de Casamento",
      description: "Celebre o amor com uma arte única.",
      gradient: "from-[#E8E0D8] to-[#D5C8BC]"
    },
    {
      id: 3,
      title: "Quadro Decorativo Floral",
      description: "Delicadeza e natureza em madeira.",
      gradient: "from-[#F5F0EB] to-[#E8DDD4]"
    },
    {
      id: 4,
      title: "Placa de Nome",
      description: "Perfeita para quartos infantis ou portas.",
      gradient: "from-[#EDE5DB] to-[#D8CCbf]"
    },
    {
      id: 5,
      title: "Arte em Madeira Rústica",
      description: "Toque rústico e acolhedor para ambientes.",
      gradient: "from-[#F2EDE7] to-[#E2D8CC]"
    },
    {
      id: 6,
      title: "Placa Aniversário",
      description: "Marque datas inesquecíveis.",
      gradient: "from-[#E9E2D8] to-[#D6C9BD]"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] font-sans text-[#1C0E0E] flex flex-col relative">
      {/* 1. Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 bg-[#FFFFFF] border-b border-[#E0D5C8] ${
          isScrolled ? "py-4" : "py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <img
              src="/__mockup/images/logo-decore-arts.png"
              alt="Decorê Arts Logo"
              className="h-8 w-auto object-contain grayscale opacity-90"
            />
            <span className="font-['Playfair_Display'] font-medium text-lg tracking-wider text-[#1C0E0E] hidden sm:block uppercase">
              Decorê Arts
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10 font-light text-xs tracking-widest uppercase">
            <button onClick={() => scrollToSection('inicio')} className="text-[#1C0E0E] hover:opacity-50 transition-opacity">
              Início
            </button>
            <button onClick={() => scrollToSection('galeria')} className="text-[#1C0E0E] hover:opacity-50 transition-opacity">
              Galeria
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-[#1C0E0E] hover:opacity-50 transition-opacity">
              Contato
            </button>
            <Button
              className="bg-[#1C0E0E] text-white hover:bg-[#1C0E0E]/80 border-none rounded-none px-8 py-5 font-normal tracking-widest text-xs uppercase transition-all"
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            >
              Peça sua arte
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-[#1C0E0E]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#FFFFFF] border-b border-[#E0D5C8] py-8 px-6 flex flex-col gap-6">
            <button onClick={() => scrollToSection('inicio')} className="text-left text-xs tracking-widest uppercase text-[#1C0E0E] font-light">Início</button>
            <button onClick={() => scrollToSection('galeria')} className="text-left text-xs tracking-widest uppercase text-[#1C0E0E] font-light">Galeria</button>
            <button onClick={() => scrollToSection('contato')} className="text-left text-xs tracking-widest uppercase text-[#1C0E0E] font-light">Contato</button>
            <Button
              className="w-full bg-[#1C0E0E] text-white hover:bg-[#1C0E0E]/80 rounded-none mt-4 font-normal tracking-widest text-xs uppercase py-6"
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            >
              Peça sua arte
            </Button>
          </div>
        )}
      </header>

      <main className="flex-grow pt-[100px]">
        {/* 2. Hero Section */}
        <section id="inicio" className="bg-[#FFFFFF] w-full py-32 md:py-40 px-6 relative">
          <div className="container mx-auto max-w-6xl flex flex-col items-center text-center relative z-10">
            <span className="text-xs tracking-[0.3em] uppercase text-[#1C0E0E] mb-8 font-light">Atelier de Design</span>
            <h1 className="font-['Playfair_Display'] text-6xl md:text-7xl lg:text-8xl font-light text-[#1C0E0E] mb-10 leading-tight tracking-tight">
              Artes em madeira <br className="hidden md:block"/> que contam histórias.
            </h1>
            <p className="text-[#1C0E0E] text-sm md:text-base font-light tracking-wide max-w-xl mb-16 opacity-80 leading-relaxed">
              Placas e artes personalizadas feitas à mão para tornar seus momentos e ambientes ainda mais especiais, com elegância e precisão.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
              <Button
                className="bg-[#1C0E0E] hover:bg-[#1C0E0E]/90 text-white rounded-none px-10 py-7 text-xs tracking-widest uppercase font-light transition-all"
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              >
                Solicitar Arte
              </Button>
              <Button
                variant="outline"
                className="border border-[#1C0E0E] text-[#1C0E0E] hover:bg-[#FAF7F7] rounded-none px-10 py-7 text-xs tracking-widest uppercase font-light bg-transparent transition-all"
                onClick={() => scrollToSection('galeria')}
              >
                Ver Coleção
              </Button>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#E0D5C8]"></div>

        {/* 3. Gallery Section */}
        <section id="galeria" className="py-32 px-6 bg-[#FAF7F7]">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col items-center mb-24 text-center">
              <span className="text-xs tracking-[0.3em] uppercase text-[#1C0E0E] mb-4 font-light">Acervo</span>
              <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-light text-[#1C0E0E]">
                Obras Selecionadas
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
              {galleryItems.map((item) => (
                <Card key={item.id} className="overflow-hidden border border-[#E0D5C8] shadow-sm hover:shadow-md transition-all duration-500 bg-white group rounded-none">
                  <div className={`aspect-square w-full bg-gradient-to-br ${item.gradient} flex items-center justify-center p-8 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-[#1C0E0E]/0 group-hover:bg-[#1C0E0E]/5 transition-colors duration-500" />
                  </div>
                  <CardContent className="p-8">
                    <h3 className="font-['Playfair_Display'] font-normal text-[#1C0E0E] text-xl mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[#1C0E0E]/70 font-light text-sm tracking-wide leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#E0D5C8]"></div>

        {/* 4. CTA Section */}
        <section id="contato" className="bg-[#FFFFFF] py-32 px-6">
          <div className="container mx-auto max-w-4xl text-center flex flex-col items-center">
            <span className="text-xs tracking-[0.3em] uppercase text-[#1C0E0E] mb-6 font-light">Encomendas</span>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-6xl font-light text-[#1C0E0E] mb-10 leading-tight">
              Sua visão, materializada.
            </h2>
            <p className="text-[#1C0E0E] text-sm md:text-base font-light tracking-wide mb-16 max-w-xl mx-auto opacity-80 leading-relaxed">
              Cada peça é única, pensada exclusivamente para você. Inicie uma conversa para criarmos a sua arte.
            </p>
            <Button
              className="bg-[#1C0E0E] hover:bg-[#1C0E0E]/90 text-white rounded-none px-12 py-8 text-xs tracking-widest uppercase font-light transition-all flex items-center gap-4"
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            >
              <MessageCircle size={18} strokeWidth={1.5} />
              Iniciar Atendimento
            </Button>
          </div>
        </section>
      </main>

      {/* 5. WhatsApp Floating Button */}
      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-none shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={28} strokeWidth={1.5} />
      </a>

      {/* 6. Footer */}
      <footer className="bg-[#1C0E0E] text-[#FFFFFF] py-20 px-6">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center md:items-start gap-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-6">
            <div className="flex items-center gap-4">
              <img
                src="/__mockup/images/logo-decore-arts.png"
                alt="Decorê Arts Logo"
                className="h-8 w-auto object-contain brightness-0 invert opacity-90"
              />
              <span className="font-['Playfair_Display'] font-normal tracking-widest text-xl uppercase text-[#FFFFFF]">
                Decorê Arts
              </span>
            </div>
            <p className="text-[#FFFFFF]/60 font-light text-xs tracking-widest uppercase max-w-xs leading-loose">
              Artes em madeira.<br/> Precisão e elegância.
            </p>
          </div>

          <div className="flex gap-8">
            <a href="#" className="text-[#FFFFFF]/60 hover:text-[#FFFFFF] transition-colors">
              <Instagram size={20} strokeWidth={1.5} />
            </a>
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="text-[#FFFFFF]/60 hover:text-[#FFFFFF] transition-colors">
              <MessageCircle size={20} strokeWidth={1.5} />
            </a>
            <a href="mailto:contato@decorearts.com" className="text-[#FFFFFF]/60 hover:text-[#FFFFFF] transition-colors">
              <Mail size={20} strokeWidth={1.5} />
            </a>
          </div>
        </div>
        <div className="container mx-auto max-w-6xl mt-20 pt-8 border-t border-[#FFFFFF]/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-widest uppercase text-[#FFFFFF]/40 font-light">
          <p>&copy; {new Date().getFullYear()} Decorê Arts.</p>
          <p>Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default VibeEditorial;
