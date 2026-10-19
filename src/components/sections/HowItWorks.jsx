import {
  ChartNoAxesColumnIncreasing,
  Target,
  ShieldCheck,
  Lightbulb,
} from "lucide-react";

const features = [
  {
    icon: ChartNoAxesColumnIncreasing,
    title: "Visualize seus dados",
    description:
      "Gráficos e relatórios que mostram exatamente como você está e para onde seu dinheiro vai.",
  },
  {
    icon: Target,
    title: "Defina seus objetivos",
    description:
      "Crie metas financeiras e acompanhe seu progresso de forma simples e motivadora.",
  },
  {
    icon: ShieldCheck,
    title: "Tenha mais controle",
    description:
      "Organize seus gastos, evite desperdícios e tome decisões mais conscientes.",
  },
  {
    icon: Lightbulb,
    title: "Conte com insights",
    description:
      "Receba informações úteis para entender melhor sua vida financeira.",
  },
];

function HowItWorks() {
  return (
    <section
      id="funcionalidades"
      className="border-b border-lime-300/15 bg-[#031b13] px-[5%] py-20 sm:py-24"
    >
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
        <div className="max-w-md">
          <span className="inline-flex rounded-full border border-lime-300/30 px-4 py-2 text-xs font-semibold text-[#c7ff45]">
            Como funciona?
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
            Simples, completo e feito para{" "}
            <span className="text-[#c7ff45]">você.</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
            O MetricFin é uma plataforma intuitiva que transforma seus dados
            financeiros em visualizações claras e insights valiosos, sem
            complicação.
          </p>
        </div>

        <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="group flex items-start gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-lime-300/20 bg-gradient-to-br from-emerald-700/80 to-lime-400/20 text-[#c7ff45] shadow-[0_0_25px_rgba(199,255,69,0.08)] transition duration-300 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(199,255,69,0.18)]">
                  <Icon size={23} strokeWidth={1.8} />
                </div>

                <div className="pt-1">
                  <h3 className="text-sm font-semibold text-white sm:text-base">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-slate-400 sm:text-sm">
                    {feature.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
