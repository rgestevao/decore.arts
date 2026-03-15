import { useEffect, useState } from "react";
import { MessageCircle, Instagram, Mail, Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const WHATSAPP_URL = "https://wa.me/5511999999999";

const heroGalleryItems = [
  { id: 1, gradient: "from-[#F5DEB3] to-[#DEB887]" },
  { id: 2, gradient: "from-[#FFCAD4] to-[#FF9FAD]" },
  { id: 3, gradient: "from-[#D4EDDA] to-[#A8D5B5]" },
  { id: 4, gradient: "from-[#FFF3CD] to-[#FFE082]" },
  { id: 5, gradient: "from-[#E8D5C4] to-[#C9A882]" },
  { id: 6, gradient: "from-[#F8C8D4] to-[#FFAAB8]" },
];

const detailGalleryItems = [
  {
    id: 1,
    title: "Placa Personalizada de Casamento",
    description: "Celebre o amor com uma arte única, criada especialmente para o grande dia do casal.",
    gradient: "from-[#FFCAD4] to-[#FF9FAD]",
  },
  {
    id: 2,
    title: "Placa Família",
    description: "Uma linda placa para a entrada do seu lar, com os nomes e sobrenome da sua família.",
    gradient: "from-[#F5DEB3] to-[#DEB887]",
  },
  {
    id: 3,
    title: "Quadro Decorativo Floral",
    description: "Delicadeza e natureza em madeira. Peça perfeita para sala de estar ou escritório.",
    gradient: "from-[#D4EDDA] to-[#A8D5B5]",
  },
];

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-[#785E61] flex flex-col relative">

      {/* ── HEADER ── */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 bg-[#FAFAFA] ${
          isScrolled ? "shadow-md py-3" : "py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <button
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              src="/logo.png"
              alt="Decorê Arts"
              className="h-12 w-auto object-contain"
            />
            <span className="font-['Playfair_Display'] font-bold text-xl md:text-2xl text-[#785E61] hidden sm:block">
              Decorê Arts
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 font-medium">
            {[
              { label: "Início", id: "inicio" },
              { label: "Galeria", id: "galeria" },
              { label: "Contato", id: "contato" },
            ].map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-[#785E61] hover:text-[#5a4648] transition-colors"
              >
                {label}
              </button>
            ))}
            <Button
              className="bg-[#FFCAD4] text-[#785E61] hover:bg-[#ffb6c4] border-none shadow-sm rounded-full px-6 font-semibold"
              onClick={() => window.open(WHATSAPP_URL, "_blank")}
            >
              Peça sua arte
            </Button>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-[#785E61]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#FAFAFA] shadow-lg border-t border-[#FFCAD4]/30 py-4 px-4 flex flex-col gap-4">
            {[
              { label: "Início", id: "inicio" },
              { label: "Galeria", id: "galeria" },
              { label: "Contato", id: "contato" },
            ].map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-left py-2 px-4 text-[#785E61] font-medium"
              >
                {label}
              </button>
            ))}
            <Button
              className="w-full bg-[#FFCAD4] text-[#785E61] hover:bg-[#ffb6c4] rounded-full mt-2 font-semibold"
              onClick={() => window.open(WHATSAPP_URL, "_blank")}
            >
              Peça sua arte
            </Button>
          </div>
        )}
      </header>

      <main className="flex-grow pt-[80px]">

        {/* ── HERO — Gallery First ── */}
        <section id="inicio" className="bg-[#FFF5F7] w-full py-16 md:py-24 px-4 relative overflow-hidden">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

              {/* Copy (40%) */}
              <div className="w-full lg:w-[40%] flex flex-col items-start text-left z-10">
                <h1 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl font-bold text-[#785E61] mb-4 leading-tight">
                  Artes em madeira que contam histórias
                </h1>
                <p className="text-[#785E61] text-base md:text-lg mb-8 opacity-90 max-w-md">
                  Placas e artes personalizadas feitas à mão para tornar seus momentos e ambientes ainda mais especiais.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <Button
                    className="bg-[#785E61] hover:bg-[#5a4648] text-white rounded-full px-6 py-5 text-base shadow-md hover:shadow-lg transition-all"
                    onClick={() => window.open(WHATSAPP_URL, "_blank")}
                  >
                    Solicitar arte
                  </Button>
                  <Button
                    variant="ghost"
                    className="text-[#785E61] hover:bg-[#FFCAD4]/30 rounded-full px-6 py-5 text-base transition-all"
                    onClick={() => scrollToSection("galeria")}
                  >
                    Ver detalhes
                  </Button>
                </div>
              </div>

              {/* Art mosaic (60%) */}
              <div className="w-full lg:w-[60%]">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                  {heroGalleryItems.map((item) => (
                    <div
                      key={item.id}
                      className={`h-36 md:h-48 lg:h-56 w-full rounded-xl bg-gradient-to-br ${item.gradient} shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group cursor-pointer`}
                      onClick={() => scrollToSection("galeria")}
                    >
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── GALLERY — Detail View ── */}
        <section id="galeria" className="py-24 px-4 bg-[#FAFAFA]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="font-['Playfair_Display'] text-3xl md:text-5xl font-bold text-center text-[#785E61] mb-4">
              Trabalhos Realizados
            </h2>
            <div className="w-24 h-1 bg-[#FFCAD4] mx-auto mb-16 rounded-full" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {detailGalleryItems.map((item) => (
                <Card
                  key={item.id}
                  className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white group rounded-2xl flex flex-col h-full"
                >
                  <div
                    className={`h-72 w-full bg-gradient-to-br ${item.gradient} flex items-center justify-center p-6 relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
                    <span className="font-['Playfair_Display'] text-xl font-bold text-[#785E61]/80 text-center drop-shadow-sm">
                      {item.title}
                    </span>
                  </div>
                  <CardContent className="p-8 flex flex-col flex-grow">
                    <h3 className="font-['Playfair_Display'] font-bold text-[#785E61] text-xl mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[#785E61]/80 text-base mb-6 flex-grow leading-relaxed">
                      {item.description}
                    </p>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#785E61] font-semibold hover:text-[#5a4648] group/link w-fit transition-colors"
                    >
                      Solicitar igual
                      <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section id="contato" className="bg-[#FFCAD4] py-24 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="font-['Playfair_Display'] text-3xl md:text-5xl font-bold text-[#785E61] mb-6">
              Quer uma arte exclusiva para você?
            </h2>
            <p className="text-[#785E61] text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-90 leading-relaxed">
              Criamos placas personalizadas em madeira para presentes, decoração e momentos especiais. Feito sob medida com todo o cuidado.
            </p>
            <Button
              className="bg-[#25D366] hover:bg-[#20bd5c] text-white rounded-full px-8 py-7 text-lg md:text-xl shadow-lg hover:shadow-xl transition-all w-full sm:w-auto inline-flex items-center gap-3 justify-center"
              onClick={() => window.open(WHATSAPP_URL, "_blank")}
            >
              <MessageCircle size={28} />
              Fazer meu pedido no WhatsApp
            </Button>
          </div>
        </section>

      </main>

      {/* ── FLOATING WHATSAPP ── */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={32} />
      </a>

      {/* ── FOOTER ── */}
      <footer className="bg-[#785E61] text-[#FAFAFA] py-12 px-4">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3 bg-white/10 p-2 rounded-xl">
              <img
                src="/logo.png"
                alt="Decorê Arts"
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
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-3 rounded-full hover:bg-[#FFCAD4] hover:text-[#785E61] transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-3 rounded-full hover:bg-[#FFCAD4] hover:text-[#785E61] transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle size={24} />
            </a>
            <a
              href="mailto:contato@decorearts.com"
              className="bg-white/10 p-3 rounded-full hover:bg-[#FFCAD4] hover:text-[#785E61] transition-colors"
              aria-label="E-mail"
            >
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
