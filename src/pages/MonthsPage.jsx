import { useState } from "react";
import {
  Wallet,
  House,
  Utensils,
  Car,
  HeartPulse,
  Gamepad2,
  GraduationCap,
  ShoppingBag,
  CircleDollarSign,
  PiggyBank,
  TrendingUp,
  Save,
  RotateCcw,
} from "lucide-react";

import { useDispatch, useSelector } from "react-redux";

import {
  setSelectedMonth,
  updateMonthField,
  updateMonthExpense,
  resetMonth,
} from "../features/finance/financeSlice";

import Sidebar from "../components/layout/SideBar";

const expenseFields = [
  { key: "moradia", label: "Moradia", icon: House },
  { key: "alimentacao", label: "Alimentação", icon: Utensils },
  { key: "transporte", label: "Transporte", icon: Car },
  { key: "saude", label: "Saúde", icon: HeartPulse },
  { key: "lazer", label: "Lazer", icon: Gamepad2 },
  { key: "educacao", label: "Educação", icon: GraduationCap },
  { key: "compras", label: "Compras", icon: ShoppingBag },
  { key: "outros", label: "Outros gastos", icon: CircleDollarSign },
];

const initialValues = {
  salary: "",
  extraIncome: "",
  expenses: {
    moradia: "",
    alimentacao: "",
    transporte: "",
    saude: "",
    lazer: "",
    educacao: "",
    compras: "",
    outros: "",
  },
  saved: "",
  invested: "",
};

const currency = (value) =>
  value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

function toNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) && number > 0 ? number : 0;
}

function MonthsPage() {
  const dispatch = useDispatch();

  const selectedMonth = useSelector((state) => state.finance.selectedMonth);

  const monthValues = useSelector(
    (state) => state.finance.months[selectedMonth],
  );

  const values = monthValues ?? initialValues;

  console.log("Meu mês - Redux:", {
    selectedMonth,
    monthValues,
  });

  const monthOptions = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const currentYear = new Date().getFullYear();

  const yearOptions = Array.from(
    { length: 21 },
    (_, index) => currentYear - 10 + index,
  );

  const [selectedYear, selectedMonthNumber] = selectedMonth.split("-");

  function handleMonthChange(month) {
    dispatch(setSelectedMonth(`${selectedYear}-${month}`));
  }

  function handleYearChange(year) {
    dispatch(setSelectedMonth(`${year}-${selectedMonthNumber}`));
  }

  const [savedMessage, setSavedMessage] = useState(false);

  const income = toNumber(values.salary) + toNumber(values.extraIncome);

  const expenses = Object.values(values.expenses).reduce(
    (total, value) => total + toNumber(value),
    0,
  );

  const balance =
    income - expenses - toNumber(values.saved) - toNumber(values.invested);

  function updateValue(field, value) {
    dispatch(
      updateMonthField({
        month: selectedMonth,
        field,
        value,
      }),
    );

    setSavedMessage(false);
  }

  function updateExpense(field, value) {
    dispatch(
      updateMonthExpense({
        month: selectedMonth,
        field,
        value,
      }),
    );

    setSavedMessage(false);
  }

  function handleReset() {
    dispatch(resetMonth(selectedMonth));
    setSavedMessage(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSavedMessage(true);
  }

  const inputClass =
    "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-[#1b342a] outline-none transition placeholder:text-slate-400 focus:border-lime-500 focus:ring-2 focus:ring-lime-100";

  return (
    <div className="min-h-screen bg-[#f5f7f6] text-[#1b342a] md:flex">
      <Sidebar />

      <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-9">
        <div className="mx-auto max-w-5xl">
          <header className="mb-8">
            <p className="text-xs font-medium uppercase tracking-wide text-emerald-800/60">
              Planejamento financeiro
            </p>
            <h1 className="mt-2 text-3xl font-bold">Meu mês</h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              Registre seus números mensais e entenda como seu dinheiro está
              sendo distribuído.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-slate-500">
                Preenchendo:
              </span>

              <select
                aria-label="Mês do preenchimento"
                value={selectedMonthNumber}
                onChange={(event) => handleMonthChange(event.target.value)}
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold"
              >
                {monthOptions.map((month, index) => (
                  <option
                    key={month}
                    value={String(index + 1).padStart(2, "0")}
                  >
                    {month}
                  </option>
                ))}
              </select>

              <select
                aria-label="Ano do preenchimento"
                value={selectedYear}
                onChange={(event) => handleYearChange(event.target.value)}
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold"
              >
                {yearOptions.map((year) => (
                  <option key={year} value={String(year)}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </header>

          <section className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <SummaryCard
              label="Renda total"
              value={currency(income)}
              icon={Wallet}
              color="text-emerald-700"
            />
            <SummaryCard
              label="Total de gastos"
              value={currency(expenses)}
              icon={ShoppingBag}
              color="text-orange-600"
            />
            <SummaryCard
              label="Saldo restante"
              value={currency(balance)}
              icon={PiggyBank}
              color={balance < 0 ? "text-red-600" : "text-lime-800"}
            />
          </section>

          <form onSubmit={handleSubmit} className="space-y-5">
            <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
              <SectionHeading
                icon={Wallet}
                title="Entradas de dinheiro"
                description="Quanto você recebeu neste mês?"
              />

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <MoneyField
                  label="Salário líquido"
                  value={values.salary}
                  onChange={(value) => updateValue("salary", value)}
                  inputClass={inputClass}
                />
                <MoneyField
                  label="Renda extra"
                  value={values.extraIncome}
                  onChange={(value) => updateValue("extraIncome", value)}
                  inputClass={inputClass}
                />
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
              <SectionHeading
                icon={ShoppingBag}
                title="Gastos por categoria"
                description="Informe o total gasto em cada categoria, sem precisar registrar cada compra."
              />

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {expenseFields.map((field) => (
                  <MoneyField
                    key={field.key}
                    label={field.label}
                    icon={field.icon}
                    value={values.expenses[field.key]}
                    onChange={(value) => updateExpense(field.key, value)}
                    inputClass={inputClass}
                  />
                ))}
              </div>

              <div className="mt-5 rounded-xl bg-[#f5f7f6] p-4">
                <p className="text-sm text-slate-500">Total de gastos</p>
                <p className="mt-1 text-xl font-bold">{currency(expenses)}</p>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
              <SectionHeading
                icon={TrendingUp}
                title="Economia e investimentos"
                description="Valores que você separou da sua renda neste mês."
              />

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <MoneyField
                  label="Dinheiro guardado"
                  icon={PiggyBank}
                  value={values.saved}
                  onChange={(value) => updateValue("saved", value)}
                  inputClass={inputClass}
                />
                <MoneyField
                  label="Aportes em investimentos"
                  icon={TrendingUp}
                  value={values.invested}
                  onChange={(value) => updateValue("invested", value)}
                  inputClass={inputClass}
                />
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-[#102f24] p-5 text-white sm:p-6">
              <p className="text-sm text-emerald-50/70">Resumo do mês</p>
              <p className="mt-2 text-3xl font-bold">{currency(balance)}</p>
              <p className="mt-2 text-sm text-emerald-50/70">
                Renda menos gastos, dinheiro guardado e investimentos.
              </p>

              {balance < 0 && (
                <p className="mt-3 text-sm font-medium text-red-200">
                  Atenção: os valores informados superam sua renda.
                </p>
              )}
            </section>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold transition hover:bg-slate-50"
              >
                <RotateCcw size={17} />
                Limpar formulário
              </button>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#c7ff45] px-5 py-3 text-sm font-bold text-[#102f24] transition hover:bg-lime-300"
              >
                <Save size={17} />
                Confirmar valores
              </button>
            </div>

            {savedMessage && (
              <p
                role="status"
                className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800"
              >
                Valores calculados! A integração com o dashboard e os gráficos
                será feita na próxima etapa. Por enquanto, eles ficam apenas
                nesta página.
              </p>
            )}
          </form>

          <p className="mt-6 text-center text-xs text-slate-400">
            Dados temporários: não são salvos após recarregar ou fechar a
            página.
          </p>
        </div>
      </main>
    </div>
  );
}

function SectionHeading({ icon: Icon, title, description }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eaf5d9] text-emerald-800">
        <Icon size={20} />
      </div>
      <div>
        <h2 className="font-semibold">{title}</h2>
        <p className="mt-1 text-sm leading-5 text-slate-500">{description}</p>
      </div>
    </div>
  );
}

function MoneyField({ label, value, onChange, inputClass, icon: Icon }) {
  return (
    <label className="block text-sm font-medium text-[#1b342a]">
      <span className="flex items-center gap-2">
        {Icon && <Icon size={16} className="text-emerald-800/70" />}
        {label}
      </span>
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-400">
          R$
        </span>
        <input
          type="number"
          min="0"
          step="0.01"
          inputMode="decimal"
          placeholder="0,00"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={`${inputClass} pl-12`}
        />
      </div>
    </label>
  );
}

function SummaryCard({ label, value, icon: Icon, color }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className={`mb-4 ${color}`}>
        <Icon size={20} />
      </div>
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-2 text-xl font-bold">{value}</p>
    </article>
  );
}

export default MonthsPage;
