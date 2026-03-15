import { useEffect, useState } from "react";
import logo from "./assets/Logo.svg";
import banqueta from "./assets/banqueta.jpeg";
import portaEspelho from "./assets/porta-espelho.jpeg";
import quadroFamilia from "./assets/quadro-familia.jpg";
import quadroFamilia2 from "./assets/quadro-familia-2.jpg";
import quadroFlamengo from "./assets/quadro-flamengo.jpg";
import quadroMensagem from "./assets/quadro-mensagem.jpg";
import quadroNomeFilha from "./assets/quadro-nome-filha.jpg";
import quadroNomeFilha2 from "./assets/quadro-nome-filha-2.jpg";
import quadroNomeFilha3 from "./assets/quadro-nome-filha-3.jpg";
import quadroNomeFilho from "./assets/quadro-nome-filho.jpg";
import quadroNomeFilho2 from "./assets/quadro-nome-filho-2.jpg";
import quadroNomeFilho3 from "./assets/quadro-nome-filho-3.jpg";
import quadroNomeFilho4 from "./assets/quadro-nome-filho-4.jpg";

type GalleryItem = {
  title: string;
  subtitle: string;
  detail: string;
  image: string;
};

const whatsappLink =
  "https://wa.me/5535999838671?text=Ol%C3%A1!%20Quero%20solicitar%20uma%20arte%20personalizada%20da%20Decor%C3%AA%20Arts.";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Galeria", href: "#galeria" },
  { label: "Contato", href: "#contato" },
];

const galleryItems: GalleryItem[] = [
  {
    title: "Porta Recordações Família",
    subtitle: "Linha minimalista",
    detail: "Arte afetiva em madeira com traço delicado para eternizar a família e os pets.",
    image: quadroFamilia,
  },
  {
    title: "Porta Pensamento Amor em Casa",
    subtitle: "Presente personalizado",
    detail: "Composição ilustrada com frase especial para decorar com memória e carinho.",
    image: quadroFamilia2,
  },
  {
    title: "Placa Temática Flamengo",
    subtitle: "Paixão em destaque",
    detail: "Peça personalizada para presentear quem ama futebol e identidade visual marcante.",
    image: quadroFlamengo,
  },
  {
    title: "Porta Pensamento Sonho",
    subtitle: "Colorida e artesanal",
    detail: "Placa com pintura manual e lettering para trazer personalidade ao ambiente.",
    image: quadroMensagem,
  },
  {
    title: "Porta Maternidade Analua",
    subtitle: "Lua e borboletas",
    detail: "Decoração infantil delicada com pintura suave e toque lúdico em madeira.",
    image: quadroNomeFilha,
  },
  {
    title: "Porta Maternidade Ísis",
    subtitle: "Arco-íris delicado",
    detail: "Peça personalizada com nome e elementos leves para quartos cheios de encanto.",
    image: quadroNomeFilha2,
  },
  {
    title: "Porta Maternidade Alice",
    subtitle: "Jardim personalizado",
    detail: "Com flores e borboletas, essa arte combina doçura, cor e acabamento artesanal.",
    image: quadroNomeFilha3,
  },
  {
    title: "Porta Maternidade José Marcos",
    subtitle: "Tema infantil",
    detail: "Modelo com corda e personagens ilustrados para portas e espaços infantis.",
    image: quadroNomeFilho,
  },
  {
    title: "Porta Maternidade Samuel",
    subtitle: "Universo divertido",
    detail: "Arte em madeira com ilustração lúdica para compor uma decoração alegre.",
    image: quadroNomeFilho2,
  },
  {
    title: "Porta Maternidade Heitor",
    subtitle: "Visual contemporâneo",
    detail: "Composição moderna em tons suaves para um resultado minimalista e elegante.",
    image: quadroNomeFilho3,
  },
  {
    title: "Porta Maternidade Benício",
    subtitle: "Safari delicado",
    detail: "Peça personalizada com animais fofos e acabamento feito à mão com carinho.",
    image: quadroNomeFilho4,
  },
  {
    title: "Banqueta Personalizada",
    subtitle: "Peça decorativa",
    detail: "Acabamento artesanal em madeira para compor ambientes com personalidade.",
    image: banqueta,
  },
  {
    title: "Porta Espelho",
    subtitle: "Funcional e elegante",
    detail: "Peça feita à mão que une delicadeza, utilidade e identidade visual autoral.",
    image: portaEspelho,
  },
];

function BrandWordmark({ className = "" }: { className?: string }) {
  return <span className={`font-script leading-none ${className}`}>Decorê Arts</span>;
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7 fill-current">
      <path d="M20.52 3.48A11.82 11.82 0 0 0 12.07 0C5.5 0 .16 5.34.16 11.91c0 2.1.55 4.14 1.6 5.94L0 24l6.32-1.66a11.86 11.86 0 0 0 5.75 1.47h.01c6.57 0 11.91-5.34 11.91-11.91 0-3.18-1.24-6.17-3.47-8.42ZM12.08 21.8h-.01a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-3.75.98 1-3.66-.24-.37a9.88 9.88 0 0 1-1.51-5.24c0-5.47 4.45-9.92 9.92-9.92 2.65 0 5.14 1.03 7.01 2.91a9.86 9.86 0 0 1 2.9 7.01c0 5.47-4.45 9.92-9.91 9.92Zm5.44-7.43c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.48-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.48.71.31 1.27.5 1.71.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 stroke-current">
      <path
        d="M5 12h14M13 5l7 7-7 7"
        fill="none"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#785E61]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#785E61]/10 bg-[#FAFAFA]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Decorê Arts">
            <img
              src={logo}
              alt="Logo Decorê Arts"
              className="h-14 w-14 rounded-full object-contain shadow-[0_12px_24px_rgba(120,94,97,0.12)]"
            />
            <div>
              <BrandWordmark className="text-3xl tracking-[0.01em] sm:text-[2.35rem]" />
              <p className="mt-1 text-xs uppercase tracking-[0.32em] text-[#785E61]/65">
                Artes em madeira
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold tracking-[0.18em] text-[#785E61] transition hover:text-[#785E61]/70"
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#FFCAD4] px-6 py-3 text-sm font-bold tracking-[0.1em] text-[#785E61] transition hover:-translate-y-0.5 hover:bg-[#f7bdc9] hover:shadow-[0_16px_30px_rgba(120,94,97,0.14)]"
            >
              Peça sua arte
            </a>
          </nav>

          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#785E61]/15 bg-[#FFCAD4]/60 text-[#785E61] transition hover:bg-[#FFCAD4] md:hidden"
            aria-label="Abrir menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((value) => !value)}
          >
            <span className="space-y-1.5">
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
            </span>
          </button>
        </div>

        {mobileMenuOpen ? (
          <div className="border-t border-[#785E61]/10 bg-[#FAFAFA] px-5 py-5 md:hidden">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold tracking-[0.16em] transition hover:bg-[#FFCAD4]/55"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="mt-2 rounded-full bg-[#FFCAD4] px-6 py-3 text-center text-sm font-bold tracking-[0.1em] text-[#785E61] transition hover:bg-[#f7bdc9]"
              >
                Peça sua arte
              </a>
            </nav>
          </div>
        ) : null}
      </header>

      <main>
        <section id="inicio" className="relative overflow-hidden px-5 pt-36 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-7xl items-center gap-14 rounded-[2rem] bg-[#FFCAD4] px-6 py-12 shadow-[0_30px_80px_rgba(120,94,97,0.12)] sm:px-10 lg:grid-cols-[1.12fr_0.88fr] lg:px-14 lg:py-16">
            <div className="relative z-10">
              <span className="inline-flex rounded-full border border-[#785E61]/15 bg-[#FAFAFA]/65 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#785E61]/75">
                Feito à mão com delicadeza
              </span>
              <h1 className="mt-6 max-w-2xl font-display text-[2.15rem] font-semibold leading-[1] tracking-[0.01em] text-[#785E61] sm:text-[2.85rem] lg:text-[3.65rem]">
                Artes em madeira que contam histórias
              </h1>
              <p className="mt-6 max-w-2xl text-[0.98rem] leading-7 text-[#785E61]/82 sm:text-lg sm:leading-8">
                Placas e artes personalizadas feitas à mão para tornar seus momentos e ambientes
                ainda mais especiais.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#785E61] px-6 py-3 text-center text-[0.72rem] font-bold uppercase tracking-[0.08em] whitespace-nowrap text-[#FAFAFA] transition hover:-translate-y-0.5 hover:bg-[#684f52] sm:text-[0.76rem]"
                >
                  Solicitar arte personalizada
                  <ArrowIcon />
                </a>
                <a
                  href="#galeria"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#785E61]/18 bg-[#FAFAFA]/70 px-6 py-3 text-center text-[0.72rem] font-bold uppercase tracking-[0.08em] whitespace-nowrap text-[#785E61] transition hover:-translate-y-0.5 hover:border-[#785E61]/30 hover:bg-[#FAFAFA] sm:text-[0.76rem]"
                >
                  Ver trabalhos realizados
                </a>
              </div>

              <div className="mt-10 grid max-w-md gap-4 sm:grid-cols-2">
                {[
                  ["100%", "Personalizado"],
                  ["Feito", "com carinho"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-[1.6rem] bg-[#FAFAFA]/68 p-5 shadow-[0_14px_30px_rgba(120,94,97,0.08)]">
                    <p className="font-display text-3xl font-semibold">{value}</p>
                    <p className="mt-1 text-sm uppercase tracking-[0.18em] text-[#785E61]/65">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -left-4 top-10 h-28 w-28 rounded-full bg-[#FAFAFA]/45 blur-3xl" />
              <div className="absolute -right-2 bottom-6 h-32 w-32 rounded-full bg-[#785E61]/12 blur-3xl" />

              <div className="relative rounded-[2rem] border border-[#FAFAFA]/65 bg-[#FAFAFA]/72 p-4 shadow-[0_24px_70px_rgba(120,94,97,0.16)] backdrop-blur">
                <div className="rounded-[1.7rem] bg-[#FAFAFA] p-3">
                  <img
                    src={quadroFamilia}
                    alt="Arte personalizada da Decorê Arts em madeira"
                    className="h-full w-full rounded-[1.4rem] object-cover"
                  />
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[1.4rem] bg-[#FFCAD4]/42 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-[#785E61]/65">Detalhes</p>
                    <p className="mt-2 whitespace-nowrap text-[1.08rem] font-display font-semibold sm:text-[1.18rem]">
                      Acabamento delicado
                    </p>
                  </div>
                  <div className="rounded-[1.4rem] bg-[#785E61] p-4 text-[#FAFAFA]">
                    <p className="text-xs uppercase tracking-[0.3em] text-[#FAFAFA]/75">Personalize</p>
                    <p className="mt-2 whitespace-nowrap text-[1.08rem] font-display font-semibold sm:text-[1.18rem]">
                      Nome, frase e estilo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="galeria" className="px-5 py-24 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <span className="inline-flex rounded-full border border-[#785E61]/12 bg-[#FFCAD4]/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#785E61]/75">
                  Galeria
                </span>
                <h2 className="mt-5 font-display text-4xl font-semibold sm:text-5xl">
                  Trabalhos Realizados
                </h2>
                <p className="mt-4 text-base leading-8 text-[#785E61]/78">
                  Cada peça nasce para traduzir afeto, memória e beleza em madeira. Explore
                  alguns estilos que podem inspirar o seu pedido.
                </p>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[#785E61]/15 px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-[#785E61] transition hover:bg-[#FFCAD4]/58"
              >
                Conversar sobre uma ideia
              </a>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {galleryItems.map((item) => (
                <article
                  key={item.title}
                  className="group overflow-hidden rounded-[2rem] border border-[#785E61]/10 bg-[#FAFAFA] shadow-[0_18px_50px_rgba(120,94,97,0.08)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_rgba(120,94,97,0.14)]"
                >
                  <div className="overflow-hidden bg-[#FFCAD4]/40">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-72 w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#785E61]/58">
                      {item.subtitle}
                    </p>
                    <h3 className="mt-3 font-display text-3xl font-semibold leading-tight">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#785E61]/75">{item.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pb-24 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-6xl rounded-[2.3rem] bg-[#785E61] px-6 py-12 text-center text-[#FAFAFA] shadow-[0_30px_80px_rgba(120,94,97,0.16)] sm:px-10 lg:px-16">
            <span className="inline-flex rounded-full border border-[#FAFAFA]/15 bg-[#FAFAFA]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#FAFAFA]/80">
              Pedido personalizado
            </span>
            <h2 className="mt-6 font-display text-4xl font-semibold sm:text-5xl">
              Quer uma arte exclusiva para você?
            </h2>
            <p className="mx-auto mt-4 max-w-4xl text-[0.98rem] leading-7 text-[#FAFAFA]/82 sm:text-lg sm:leading-8">
              Criamos placas personalizadas em madeira para presentes, decoração e momentos
              especiais.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-[#FFCAD4] px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[#785E61] transition hover:-translate-y-0.5 hover:bg-[#ffd5de]"
            >
              <WhatsAppIcon />
              Fazer meu pedido no WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer id="contato" className="bg-[#FFCAD4] px-5 py-12 text-[#785E61] sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
          <div>
            <div className="flex items-center gap-4">
              <img
                src={logo}
                alt="Logo Decorê Arts"
                className="h-16 w-16 rounded-full bg-[#FAFAFA]/75 p-1 object-contain"
              />
              <div>
                <BrandWordmark className="text-[2.6rem] sm:text-5xl" />
                <p className="max-w-2xl text-xs uppercase tracking-[0.24em] text-[#785E61]/72 sm:text-sm">
                  Artes personalizadas em madeira feitas com carinho.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <a
              href="https://www.instagram.com/decoreart.s/"
              target="_blank"
              rel="noreferrer"
              className="rounded-[1.6rem] border border-[#785E61]/10 bg-[#FAFAFA]/55 px-5 py-5 transition hover:bg-[#FAFAFA]/80"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-[#785E61]/60">Instagram</p>
              <p className="mt-2 text-sm font-semibold">@decoreart.s</p>
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-[1.6rem] border border-[#785E61]/10 bg-[#FAFAFA]/55 px-5 py-5 transition hover:bg-[#FAFAFA]/80"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-[#785E61]/60">WhatsApp</p>
              <p className="mt-2 text-sm font-semibold">(35) 99983-8671</p>
            </a>
          </div>
        </div>
      </footer>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_22px_45px_rgba(37,211,102,0.35)] transition hover:-translate-y-1 hover:bg-[#1ebe5d]"
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
}

export default App;

