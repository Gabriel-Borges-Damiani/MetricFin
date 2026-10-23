import {
  Wallet,
  CreditCard,
  TrendingUp,
  PiggyBank,
  ArrowRight,
  CalendarDays,
} from "lucide-react";
import Sidebar from "../components/layout/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedMonth } from "../features/finance/financeSlice";

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

const currentYear = new Date().getFullYear();

const yearOptions = Array.from(
  { length: 21 },
  (_, index) => currentYear - 10 + index,
);

const currency = (value) =>
  value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 2,
  });

function DashboardPage() {
  const dispatch = useDispatch();

  const financeState = useSelector((state) => state.finance);

  const selectedMonth = financeState.selectedMonth;

  const monthValues = financeState.months[selectedMonth];

  console.log("Dashboard - Redux:", {
    selectedMonth,
    monthValues,
  });

  const selectedMonthNumber = selectedMonth.split("-")[1];
  const selectedYear = selectedMonth.split("-")[0];

  const income =
    Number(monthValues?.salary || 0) + Number(monthValues?.extraIncome || 0);

  const expenses = Object.values(monthValues?.expenses ?? {}).reduce(
    (total, value) => total + Number(value || 0),
    0,
  );

  const invested = Number(monthValues?.invested || 0);
  const saved = Number(monthValues?.saved || 0);

  const balance = income - expenses - saved - invested;

  function handleMonthChange(month) {
    dispatch(setSelectedMonth(`${selectedYear}-${month}`));
  }

  function handleYearChange(year) {
    dispatch(setSelectedMonth(`${year}-${selectedMonthNumber}`));
  }

  const categoryNames = {
    moradia: "Moradia",
    alimentacao: "Alimentação",
    transporte: "Transporte",
    saude: "Saúde",
    lazer: "Lazer",
    educacao: "Educação",
    compras: "Compras",
    outros: "Outros",
  };

  const categoryColors = [
    "bg-[#b8e986]",
    "bg-[#b9c9f5]",
    "bg-[#f5d7c2]",
    "bg-[#b7e3d2]",
    "bg-[#e5c7f2]",
    "bg-[#f4e29b]",
    "bg-[#b8dce8]",
    "bg-[#e7b9b9]",
  ];

  const expenseCategories = Object.entries(monthValues?.expenses ?? {}).map(
    ([key, value], index) => ({
      name: categoryNames[key] ?? key,
      amount: Number(value || 0),
      value: expenses > 0 ? (Number(value || 0) / expenses) * 100 : 0,
      color: categoryColors[index % categoryColors.length],
    }),
  );

  const cards = [
    {
      label: "Renda",
      value: income,
      icon: Wallet,
      iconColor: "text-emerald-700",
    },
    {
      label: "Gastos",
      value: expenses,
      icon: CreditCard,
      iconColor: "text-orange-600",
    },
    {
      label: "Investido",
      value: invested,
      icon: TrendingUp,
      iconColor: "text-blue-600",
    },
    {
      label: "Saldo restante",
      value: balance,
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
              aria-label="Distribuição dos gastos reais por categoria"
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
                  {category.name} — {currency(category.amount)}
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
            Os valores são temporários e ficam disponíveis enquanto o aplicativo
            estiver aberto.
          </p>
        </div>
      </main>
    </div>
  );
}

export default DashboardPage;
