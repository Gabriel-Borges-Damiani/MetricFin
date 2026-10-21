import { ArrowDown, ArrowRight, ArrowUpLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const cleanName = name.trim();

    if (!cleanName) return;

    sessionStorage.setItem("metricfinUserName", cleanName);
    navigate("/dashboard");
  }

  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden border-b border-lime-300/20 bg-[#031b13]"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_35%,rgba(40,180,90,0.18),transparent_50%),radial-gradient(ellipse_at_0%_100%,rgba(199,255,69,0.10),transparent_35%)]" />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(199,255,69,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(199,255,69,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="pointer-events-none absolute -right-24 top-24 -z-10 h-72 w-72 rotate-12 rounded-[40px] border border-lime-300/20 bg-lime-300/[0.03] sm:h-96 sm:w-96" />

      <div className="mx-auto grid max-w-[1400px] items-center gap-16 px-[5%] py-20 lg:min-h-[650px] lg:grid-cols-2 lg:py-24">
        <div className="max-w-xl">
          <span className="inline-flex rounded-full border border-lime-300/30 bg-lime-300/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#c7ff45]">
            Controle financeiro inteligente
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Transforme seus dados em decisões financeiras{" "}
            <span className="text-[#c7ff45]">inteligentes.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-slate-300 sm:text-lg">
            Visualize seus gastos, acompanhe seus objetivos e tenha mais
            controle sobre seu dinheiro, tudo em um só lugar.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-3">
            <div>
              <label
                htmlFor="visitor-name"
                className="mb-2 block text-sm font-medium text-white"
              >
                Como podemos te chamar?
              </label>

              <input
                id="visitor-name"
                name="name"
                type="text"
                autoComplete="given-name"
                placeholder="Ex.: João Silva"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
                minLength={2}
                maxLength={60}
                className="w-full rounded-xl border border-lime-300/25 bg-[#06251a]/80 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-[#c7ff45] focus:ring-2 focus:ring-lime-300/20"
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#9be66b] to-[#d4ff58] px-7 py-4 font-bold text-[#031b13] transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(199,255,69,0.2)]"
            >
              Experimente agora
              <ArrowRight size={19} />
            </button>
          </form>

          <p className="mt-4 text-xs text-slate-400">
            Comece em segundos, sem precisar criar uma conta.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-full bg-emerald-400/10 blur-3xl" />

          <div className="rounded-2xl border border-lime-300/20 bg-[#041e15]/90 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-6">
            <div className="mb-6 flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-white">Visão geral</p>
                <p className="mt-1 text-xs text-slate-500">
                  Resumo das suas finanças
                </p>
              </div>

              <span className="rounded-full border border-white/10 px-3 py-2 text-xs text-slate-300">
                Abril 2026
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {[
                { label: "Renda", value: "R$ 5.420", color: "text-[#c7ff45]" },
                {
                  label: "Gastos",
                  value: "R$ 3.280",
                  color: "text-orange-300",
                },
                {
                  label: "Saldo",
                  value: "R$ 2.140",
                  color: "text-emerald-300",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="min-w-0 rounded-xl border border-white/10 bg-white/[0.03] p-3 sm:p-4"
                >
                  <p className="text-xs text-slate-400">{item.label}</p>
                  <p
                    className={`mt-2 break-words text-sm font-bold sm:text-lg ${item.color}`}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-xl border border-white/10 bg-black/10 p-4">
              <div className="mb-5 flex items-center justify-between">
                <p className="text-sm font-medium text-white">
                  Gastos por categoria
                </p>
                <span className="text-xs text-slate-500">Este mês</span>
              </div>

              <div className="flex h-40 items-end justify-around gap-3 border-b border-l border-white/10 px-3">
                {[
                  { label: "Moradia", height: "85%" },
                  { label: "Comida", height: "62%" },
                  { label: "Transporte", height: "45%" },
                  { label: "Lazer", height: "34%" },
                  { label: "Outros", height: "24%" },
                ].map((bar, index) => (
                  <div
                    key={bar.label}
                    className="flex h-full min-w-0 flex-1 flex-col items-center justify-end gap-2"
                  >
                    <div
                      className={`w-full max-w-10 rounded-t-md transition-all duration-500 hover:brightness-125 ${
                        index === 0
                          ? "bg-[#c7ff45]"
                          : "bg-gradient-to-t from-emerald-800 to-emerald-400"
                      }`}
                      style={{ height: bar.height }}
                    />
                    <span className="mb-2 text-center text-[9px] text-slate-500 sm:text-[10px]">
                      {bar.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3 rounded-xl bg-lime-300/[0.06] p-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lime-300/10 text-[#c7ff45]">
                <ArrowRight size={18} />
              </div>
              <div>
                <p className="text-xs font-medium text-white">
                  Mais clareza para suas decisões
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Seus números em uma visão simples.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-14 right-2 hidden -rotate-3 items-center gap-2 text-sm text-[#c7ff45] md:flex">
            <ArrowUpLeft size={30} />
            <span className="max-w-44">
              Veja como seus dados podem ficar organizados!
            </span>
          </div>
        </div>
      </div>

      <a
        href="#funcionalidades"
        className="flex items-center justify-center gap-3 pb-7 pt-2 text-xs tracking-wide text-slate-400 transition hover:text-[#c7ff45]"
      >
        <span className="animate-bounce">
          <ArrowDown size={16} />
        </span>
        Role para baixo e descubra mais
      </a>
    </section>
  );
}

export default HeroSection;
