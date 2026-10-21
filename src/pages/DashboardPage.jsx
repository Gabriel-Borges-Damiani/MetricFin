import { useState } from "react";
import {
  Wallet,
  CreditCard,
  TrendingUp,
  PiggyBank,
  ArrowRight,
  CalendarDays,
} from "lucide-react";
import Sidebar from "../components/layout/SideBar";

const today = new Date();

const initialMonth = `${today.getFullYear()}-${String(
  today.getMonth() + 1,
).padStart(2, "0")}`;

const monthOptions = [
  { value: "01", label: "Janeiro" },
  { value: "02", label: "Fevereiro" },
  { value: "03", label: "Março" },
  { value: "04", label: "Abril" },
  { value: "05", label: "Maio" },
  { value: "06", label: "Junho" },
  { value: "07", label: "Julho" },
  { value: "08", label: "Agosto" },
  { value: "09", label: "Setembro" },
  { value: "10", label: "Outubro" },
  { value: "11", label: "Novembro" },
  { value: "12", label: "Dezembro" },
];

const currentYear = today.getFullYear();

const yearOptions = Array.from(
  { length: 21 },
  (_, index) => currentYear - 10 + index,
);

const demoData = {
  renda: 0,
  gastos: 0,
  investido: 0,
  saldo: 0,
};

const expenseCategories = [
  { name: "Moradia", value: 0, color: "bg-[#b8e986]" },
  { name: "Alimentação", value: 0, color: "bg-[#b9c9f5]" },
  { name: "Outros", value: 0, color: "bg-[#f5d7c2]" },
];

const currency = (value) =>
  value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 2,
  });

function DashboardPage() {
  const [selectedMonth, setSelectedMonth] = useState(initialMonth);

  const [selectedYear, setSelectedYear] = useState(String(today.getFullYear()));

  const selectedMonthNumber = selectedMonth.split("-")[1];

  function handleMonthChange(month) {
    setSelectedMonth(`${selectedYear}-${month}`);
  }

  function handleYearChange(year) {
    setSelectedYear(year);
    setSelectedMonth(`${year}-${selectedMonthNumber}`);
  }

  const cards = [
    {
      label: "Renda",
      value: demoData.renda,
      icon: Wallet,
      iconColor: "text-emerald-700",
    },
    {
      label: "Gastos",
      value: demoData.gastos,
      icon: CreditCard,
      iconColor: "text-orange-600",
    },
    {
      label: "Investido",
      value: demoData.investido,
      icon: TrendingUp,
      iconColor: "text-blue-600",
    },
    {
      label: "Saldo restante",
      value: demoData.saldo,
      icon: PiggyBank,
      iconColor: "text-lime-800",
      highlight: true,
    },
  ];

  const userName = sessionStorage.getItem("metricfinUserName") || "";

  return (
    <div className="min-h-screen bg-[#f5f7f6] text-[#1b342a] md:flex">
      <Sidebar />

      <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-9">
        <div className="mx-auto max-w-6xl">
          {/* Cabeçalho */}
          <header className="mb-6">
            <p className="text-xs font-medium uppercase tracking-wide text-emerald-800/60">
              Sua área financeira
            </p>

            <h1 className="mt-2 text-2xl font-bold sm:text-3xl">
              {userName ? `Olá, ${userName}!` : "Sua vida financeira"}
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Entenda seus números, mês a mês.
            </p>
          </header>

          {/* Seletor de mês */}
          <div className="mb-4 rounded-xl border border-slate-200 bg-white p-4">
            <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-slate-500">
              Período
            </label>

            <div className="flex flex-wrap items-center gap-3">
              <CalendarDays size={18} className="text-emerald-800/70" />

              <select
                aria-label="Selecionar mês"
                value={selectedMonthNumber}
                onChange={(event) => handleMonthChange(event.target.value)}
                className="min-w-32 flex-1 rounded-lg bg-transparent py-2 text-sm font-semibold text-[#1b342a] outline-none focus-visible:ring-2 focus-visible:ring-lime-500"
              >
                {monthOptions.map((month) => (
                  <option key={month.value} value={month.value}>
                    {month.label}
                  </option>
                ))}
              </select>

              <select
                aria-label="Selecionar ano"
                value={selectedYear}
                onChange={(event) => handleYearChange(event.target.value)}
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-[#1b342a] outline-none focus-visible:ring-2 focus-visible:ring-lime-500"
              >
                {yearOptions.map((year) => (
                  <option key={year} value={String(year)}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Indicadores financeiros */}
          <section
            aria-label="Resumo financeiro"
            className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4"
          >
            {cards.map((card) => {
              const Icon = card.icon;

              return (
                <article
                  key={card.label}
                  className={`rounded-xl border p-4 transition hover:-translate-y-0.5 hover:shadow-sm ${
                    card.highlight
                      ? "border-lime-200 bg-[#eaf5d9]"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <div className={`mb-3 ${card.iconColor}`}>
                    <Icon size={19} />
                  </div>

                  <p className="text-xs text-slate-500">{card.label}</p>

                  <p className="mt-2 text-xl font-semibold tracking-tight">
                    {currency(card.value)}
                  </p>
                </article>
              );
            })}
          </section>

          {/* Distribuição dos gastos */}
          <section className="mt-4 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="font-semibold">Seus gastos no mês</h2>

            <div
              className="mt-5 flex h-3 gap-2 overflow-hidden rounded-full"
              role="img"
              aria-label="Distribuição ilustrativa dos gastos por categoria"
            >
              {expenseCategories.map((category) => (
                <div
                  key={category.name}
                  className={`${category.color} rounded-full`}
                  style={{ width: `${category.value}%` }}
                  title={`${category.name}: ${category.value}%`}
                />
              ))}
            </div>

            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
              {expenseCategories.map((category) => (
                <span
                  key={category.name}
                  className="flex items-center gap-2 text-xs text-slate-500"
                >
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${category.color}`}
                  />
                  {category.name}
                </span>
              ))}
            </div>
          </section>

          {/* Próxima ação */}
          <section className="mt-4 flex flex-col gap-4 rounded-xl bg-[#102f24] p-5 text-white sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[#c7ff45]">
                Próximo passo
              </p>

              <h2 className="mt-2 font-semibold">
                Registre seus números do mês
              </h2>

              <p className="mt-1 text-sm text-emerald-50/70">
                Preencha sua renda, seus gastos e seus investimentos.
              </p>
            </div>

            <a
              href="/meses"
              className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-lg bg-[#c7ff45] px-4 py-3 text-sm font-semibold text-[#102f24] transition hover:bg-lime-200 sm:self-center"
            >
              Preencher meu mês
              <ArrowRight size={17} />
            </a>
          </section>

          <p className="mt-5 text-center text-xs text-slate-400">
            Valores demonstrativos — ainda não são seus dados financeiros.
          </p>
        </div>
      </main>
    </div>
  );
}

export default DashboardPage;
