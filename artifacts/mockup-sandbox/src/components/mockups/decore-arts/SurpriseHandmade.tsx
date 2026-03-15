import React, { useEffect, useState } from "react";
import { MessageCircle, Instagram, Mail, Menu, X, Heart, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function SurpriseHandmade() {
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
      gradient: "from-[#F5DEB3] to-[#DEB887]",
      rotate: "hover:rotate-1"
    },
    {
      id: 2,
      title: "Placa Personalizada de Casamento",
      description: "Celebre o amor com uma arte única.",
      gradient: "from-[#FFCAD4] to-[#F4A0B0]",
      rotate: "hover:-rotate-1"
    },
    {
      id: 3,
      title: "Quadro Decorativo Floral",
      description: "Delicadeza e natureza em madeira.",
      gradient: "from-[#D4EDDA] to-[#A8D5B5]",
      rotate: "hover:rotate-1"
    },
    {
      id: 4,
      title: "Placa de Nome",
      description: "Perfeita para quartos infantis ou portas.",
      gradient: "from-[#FFF0C8] to-[#FFD97A]",
      rotate: "hover:-rotate-1"
    },
    {
      id: 5,
      title: "Arte em Madeira Rústica",
      description: "Toque rústico e acolhedor para ambientes.",
      gradient: "from-[#E8D5C4] to-[#C9A882]",
      rotate: "hover:rotate-1"
    },
    {
      id: 6,
      title: "Placa Aniversário",
      description: "Marque datas inesquecíveis.",
      gradient: "from-[#F8C8D4] to-[#FFAAB8]",
      rotate: "hover:-rotate-1"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F7F0E8] font-sans text-[#4A3030] flex flex-col relative overflow-x-hidden">
      {/* 1. Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#F7F0E8]/90 backdrop-blur-sm shadow-[0_4px_10px_rgba(120,94,97,0.1)] py-3" : "bg-[#F7F0E8] py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="relative">
               <img
                src="/__mockup/images/logo-decore-arts.png"
                alt="Decorê Arts Logo"
                className="h-12 w-auto object-contain"
              />
            </div>
            <span className="font-['Playfair_Display'] font-bold text-xl md:text-2xl text-[#785E61] hidden sm:block">
              Decorê Arts
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-medium">
            <button onClick={() => scrollToSection('inicio')} className="text-[#4A3030] hover:text-[#785E61] transition-colors relative group">
              Início
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFCAD4] transition-all group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection('galeria')} className="text-[#4A3030] hover:text-[#785E61] transition-colors relative group">
              Galeria
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFCAD4] transition-all group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-[#4A3030] hover:text-[#785E61] transition-colors relative group">
              Contato
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFCAD4] transition-all group-hover:w-full"></span>
            </button>
            <Button
              className="bg-[#785E61] text-[#F7F0E8] hover:bg-[#5a4648] border-none shadow-[2px_2px_0px_#4A3030] hover:shadow-[4px_4px_0px_#4A3030] hover:-translate-y-0.5 rounded-2xl px-6 font-semibold transition-all"
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
          <div className="md:hidden absolute top-full left-0 w-full bg-[#F7F0E8] shadow-lg border-t-2 border-dashed border-[#FFCAD4] py-4 px-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection('inicio')} className="text-left py-2 px-4 text-[#4A3030] font-medium border-b border-[#FFCAD4]/30">Início</button>
            <button onClick={() => scrollToSection('galeria')} className="text-left py-2 px-4 text-[#4A3030] font-medium border-b border-[#FFCAD4]/30">Galeria</button>
            <button onClick={() => scrollToSection('contato')} className="text-left py-2 px-4 text-[#4A3030] font-medium border-b border-[#FFCAD4]/30">Contato</button>
            <Button
              className="w-full bg-[#785E61] text-[#F7F0E8] hover:bg-[#5a4648] rounded-2xl mt-2 font-semibold shadow-[2px_2px_0px_#4A3030]"
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            >
              Peça sua arte
            </Button>
          </div>
        )}
      </header>

      <main className="flex-grow pt-[80px]">
        {/* 2. Hero Section */}
        <section id="inicio" className="bg-[#FFCAD4] w-full py-20 md:py-32 px-4 relative overflow-hidden rounded-b-[40px] md:rounded-b-[80px] shadow-sm mb-12">
          {/* Inner decorative border */}
          <div className="absolute inset-4 md:inset-8 border-2 border-dashed border-[#785E61]/30 rounded-3xl pointer-events-none z-0"></div>
          
          <div className="container mx-auto max-w-5xl flex flex-col items-center text-center relative z-10">
            {/* Decorative faint logo background */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.05] pointer-events-none w-[300px] h-[300px] md:w-[600px] md:h-[600px]">
              <img src="/__mockup/images/logo-decore-arts.png" alt="" className="w-full h-full object-cover grayscale" />
            </div>

            <h1 className="font-['Playfair_Display'] text-4xl md:text-6xl lg:text-7xl font-bold text-[#4A3030] mb-6 leading-tight max-w-4xl relative">
              Artes em madeira que <br className="hidden md:block"/> <span className="italic">contam histórias</span>
            </h1>
            <p className="text-[#4A3030] text-lg md:text-xl max-w-2xl mb-10 opacity-90 font-medium">
              Placas e artes personalizadas feitas à mão para tornar seus momentos e ambientes ainda mais <span className="italic">especiais</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
              <Button
                className="bg-[#785E61] hover:bg-[#5a4648] text-[#F7F0E8] rounded-2xl px-8 py-6 text-lg shadow-[4px_4px_0px_rgba(74,48,48,0.2)] hover:shadow-[6px_6px_0px_rgba(74,48,48,0.2)] hover:-translate-y-1 transition-all"
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              >
                Solicitar arte personalizada
              </Button>
              <Button
                variant="outline"
                className="border-2 border-[#785E61] text-[#785E61] hover:bg-[#785E61] hover:text-[#F7F0E8] rounded-2xl px-8 py-6 text-lg bg-[#F7F0E8]/50 backdrop-blur-sm transition-all shadow-[4px_4px_0px_rgba(120,94,97,0.1)] hover:shadow-[6px_6px_0px_rgba(120,94,97,0.1)] hover:-translate-y-1"
                onClick={() => scrollToSection('galeria')}
              >
                Ver trabalhos
              </Button>
            </div>
          </div>
        </section>

        {/* 3. Gallery / Works Section */}
        <section id="galeria" className="py-16 md:py-24 px-4 bg-[#FFF5F0]">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-['Playfair_Display'] text-3xl md:text-5xl font-bold text-[#4A3030] inline-block relative">
                Trabalhos Realizados
                <span className="absolute -bottom-3 left-0 w-full border-b-4 border-dashed border-[#FFCAD4]"></span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {galleryItems.map((item) => (
                <Card key={item.id} className={`overflow-hidden border-2 border-[#E8D5C4] shadow-[4px_4px_0px_#E8D5C4] transition-all duration-300 ${item.rotate} bg-[#F7F0E8] rounded-2xl`}>
                  <div className={`h-64 w-full bg-gradient-to-br ${item.gradient} flex items-center justify-center p-6 relative overflow-hidden opacity-90 border-b-2 border-dashed border-[#E8D5C4]`}>
                    <div className="absolute inset-0 bg-black/5 hover:bg-transparent transition-colors duration-300" />
                    <span className="font-['Playfair_Display'] text-2xl font-bold text-[#4A3030] text-center drop-shadow-sm italic">
                      {item.title}
                    </span>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-['Playfair_Display'] font-bold text-[#4A3030] text-xl mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[#4A3030]/80 font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Decorative Divider */}
        <div className="w-full bg-[#FFF5F0] py-12 flex justify-center items-center gap-4 text-[#FFCAD4]">
          <Heart size={20} fill="currentColor" />
          <span className="font-['Playfair_Display'] italic text-2xl text-[#785E61]">· feito com amor ·</span>
          <Heart size={20} fill="currentColor" />
        </div>

        {/* 4. CTA Section */}
        <section id="contato" className="bg-[#785E61] py-20 md:py-32 px-4 relative overflow-hidden rounded-t-[40px] md:rounded-t-[80px] mt-8">
          {/* Decorative scissors */}
          <div className="absolute top-10 right-10 text-[#FFCAD4] opacity-20 transform rotate-45">
            <Scissors size={80} />
          </div>
          
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <h2 className="font-['Playfair_Display'] text-3xl md:text-5xl font-bold text-[#F7F0E8] mb-6">
              Quer uma arte <span className="italic text-[#FFCAD4]">exclusiva</span> para você?
            </h2>
            <p className="text-[#F7F0E8]/90 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              Criamos placas personalizadas em madeira para presentes, decoração e momentos especiais. Feito sob medida com todo o cuidado e atenção aos detalhes.
            </p>
            <Button
              className="bg-[#25D366] hover:bg-[#20bd5c] text-white rounded-2xl px-8 py-8 text-lg md:text-xl shadow-[4px_4px_0px_rgba(0,0,0,0.2)] hover:shadow-[6px_6px_0px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all w-full sm:w-auto flex items-center gap-3 justify-center mx-auto border-2 border-[#20bd5c]"
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
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-2xl shadow-[4px_4px_0px_rgba(0,0,0,0.15)] hover:shadow-[6px_6px_0px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center border-2 border-white/20"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={32} />
      </a>

      {/* 6. Footer */}
      <footer className="bg-[#785E61] text-[#F7F0E8] py-16 px-4">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3 bg-[#4A3030] p-3 rounded-2xl border-2 border-dashed border-[#FFCAD4]/30">
              <img
                src="/__mockup/images/logo-decore-arts.png"
                alt="Decorê Arts Logo"
                className="h-12 w-auto object-contain brightness-0 invert"
              />
              <span className="font-['Playfair_Display'] font-bold text-2xl">
                Decorê Arts
              </span>
            </div>
            <p className="text-[#F7F0E8]/80 max-w-xs font-medium">
              Artes personalizadas em madeira feitas com carinho, <span className="italic">à mão e com o coração</span>.
            </p>
          </div>

          <div className="flex gap-4">
            <a href="#" className="bg-[#4A3030] p-4 rounded-2xl hover:bg-[#FFCAD4] hover:text-[#4A3030] transition-colors shadow-[2px_2px_0px_rgba(0,0,0,0.2)]">
              <Instagram size={24} />
            </a>
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="bg-[#4A3030] p-4 rounded-2xl hover:bg-[#FFCAD4] hover:text-[#4A3030] transition-colors shadow-[2px_2px_0px_rgba(0,0,0,0.2)]">
              <MessageCircle size={24} />
            </a>
            <a href="mailto:contato@decorearts.com" className="bg-[#4A3030] p-4 rounded-2xl hover:bg-[#FFCAD4] hover:text-[#4A3030] transition-colors shadow-[2px_2px_0px_rgba(0,0,0,0.2)]">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="container mx-auto max-w-6xl mt-12 pt-8 border-t-2 border-dashed border-[#4A3030] text-center text-sm text-[#F7F0E8]/60 font-medium">
          <p>&copy; {new Date().getFullYear()} Decorê Arts. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default SurpriseHandmade;
