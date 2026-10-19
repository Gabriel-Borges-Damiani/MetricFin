import { Leaf } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-lime-300/10 bg-[#02160f] px-[5%] py-7">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-6 md:flex-row">
        <a
          href="#inicio"
          className="flex items-center gap-2 text-lg font-bold text-white transition hover:opacity-80"
        >
          <Leaf size={26} className="fill-[#c7ff45] text-[#c7ff45]" />
          Metric<span className="text-[#c7ff45]">Fin</span>
        </a>

        <nav
          aria-label="Navegação do rodapé"
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-8"
        >
          <a
            href="#inicio"
            className="text-sm text-[#c7ff45] transition hover:text-white"
          >
            Início
          </a>

          <a
            href="#funcionalidades"
            className="text-sm text-slate-300 transition hover:text-[#c7ff45]"
          >
            Funcionalidades
          </a>

          <a
            href="#sobre"
            className="text-sm text-slate-300 transition hover:text-[#c7ff45]"
          >
            Sobre
          </a>
        </nav>

        <p className="text-center text-xs text-slate-500">
          © {new Date().getFullYear()} MetricFin. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
