import { ArrowRight, ArrowUpLeft, Sparkles } from "lucide-react";

function CTASection() {
  return (
    <section className="relative isolate overflow-hidden border-y border-lime-300/20 bg-[#031b13] px-[5%] py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_12%_100%,rgba(199,255,69,0.8),transparent_42%),radial-gradient(ellipse_at_80%_90%,rgba(35,180,75,0.45),transparent_45%),linear-gradient(110deg,#031b13_10%,#062b1b_65%,#031b13_100%)]" />

      <div className="pointer-events-none absolute -bottom-36 -left-20 -z-10 h-64 w-[65%] rounded-[50%] border-t border-lime-300/40 bg-lime-300/5 blur-[1px]" />

      <div className="pointer-events-none absolute -right-20 -top-40 -z-10 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full border border-lime-300/40 bg-lime-300/10 px-4 py-2 text-xs font-semibold text-[#c7ff45]">
            Pronto para começar?
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
            Experimente agora e veja{" "}
            <span className="text-[#c7ff45]">
              como o MetricFin pode te ajudar!
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
            É rápido, gratuito e sem complicação. Preencha seus dados e tenha
            acesso a uma experiência completa de gestão financeira.
          </p>
        </div>

        <div className="relative flex flex-col items-center justify-center pb-12 pt-2 sm:pb-16">
          <a
            href="#inicio"
            className="group inline-flex w-full max-w-[340px] items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#b5f45c] to-[#d4ff58] px-6 py-4 font-bold text-[#031b13] shadow-[0_0_35px_rgba(199,255,69,0.2)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(199,255,69,0.35)]"
          >
            <Sparkles size={19} />
            Experimente agora
            <ArrowRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

          <div className="absolute bottom-0 right-0 flex -rotate-6 items-start gap-1 text-[#c7ff45] sm:right-4">
            <ArrowUpLeft
              size={38}
              strokeWidth={1.4}
              className="mt-1 shrink-0"
            />

            <p className="max-w-[180px] font-medium italic leading-5">
              Seu futuro financeiro começa aqui!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
