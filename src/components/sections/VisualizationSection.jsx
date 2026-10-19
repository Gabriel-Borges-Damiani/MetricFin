import { Check, ChartNoAxesCombined } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const monthlyData = [
  { month: "Jan", income: 2400, expenses: 1100 },
  { month: "Fev", income: 3800, expenses: 2000 },
  { month: "Mar", income: 2100, expenses: 3400 },
  { month: "Abr", income: 3700, expenses: 2000 },
  { month: "Mai", income: 4200, expenses: 2400 },
  { month: "Jun", income: 5200, expenses: 3200 },
];

const categories = [
  { name: "Moradia", value: 45, color: "#c7ff45" },
  { name: "Alimentação", value: 20, color: "#83d94d" },
  { name: "Transporte", value: 15, color: "#54bf62" },
  { name: "Lazer", value: 10, color: "#399b55" },
  { name: "Outros", value: 10, color: "#267747" },
];

const checklist = [
  "Gráficos de renda e gastos",
  "Comparativo por categorias",
  "Evolução ao longo do tempo",
  "Resumo do mês e do ano",
];

const tooltipStyle = {
  backgroundColor: "#06251a",
  border: "1px solid #28563b",
  borderRadius: "10px",
  color: "#ffffff",
};

function VisualizationSection() {
  return (
    <section
      id="sobre"
      className="border-b border-lime-300/15 bg-[#031b13] px-[5%] py-20 sm:py-24"
    >
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="max-w-lg">
          <span className="inline-flex rounded-full border border-lime-300/30 px-4 py-2 text-xs font-semibold text-[#c7ff45]">
            <ChartNoAxesCombined size={15} className="mr-2" />
            Exemplo de visualização
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
            Seus dados, em gráficos{" "}
            <span className="text-[#c7ff45]">fáceis de entender.</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
            Veja como o MetricFin organiza suas informações em gráficos claros e
            interativos, para que você tenha uma visão completa da sua vida
            financeira.
          </p>

          <ul className="mt-7 space-y-4">
            {checklist.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#c7ff45] text-[#031b13]">
                  <Check size={15} strokeWidth={3} />
                </span>
                <span className="text-sm text-slate-200 sm:text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-lime-300/20 bg-[#041e15]/90 p-3 shadow-2xl shadow-black/20 sm:p-5">
          <div className="mb-4 flex items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-lime-300/10 text-[#c7ff45]">
                <ChartNoAxesCombined size={18} />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">MetricFin</p>
                <p className="text-[11px] text-slate-500">
                  Painel demonstrativo
                </p>
              </div>
            </div>
            <span className="rounded-full bg-white/5 px-3 py-2 text-xs text-slate-300">
              6 meses
            </span>
          </div>

          <div className="mb-4 grid grid-cols-3 gap-2">
            {[
              { label: "Renda", value: "R$ 5.420", color: "text-[#c7ff45]" },
              { label: "Gastos", value: "R$ 3.280", color: "text-orange-300" },
              { label: "Saldo", value: "R$ 2.140", color: "text-emerald-300" },
            ].map((metric) => (
              <div
                key={metric.label}
                className="min-w-0 rounded-xl border border-lime-300/15 bg-emerald-950/50 p-3"
              >
                <p className="text-xs text-slate-400">{metric.label}</p>
                <p
                  className={`mt-2 break-words text-sm font-bold sm:text-base ${metric.color}`}
                >
                  {metric.value}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-lime-300/15 bg-black/10 p-3 sm:p-4">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-sm font-semibold text-white">
                Evolução mensal
              </h3>
              <div className="flex gap-3 text-[11px] text-slate-300">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#c7ff45]" />
                  Renda
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#55bd67]" />
                  Gastos
                </span>
              </div>
            </div>

            <div className="h-[190px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={monthlyData}
                  margin={{ top: 8, right: 5, left: -18, bottom: 0 }}
                >
                  <CartesianGrid
                    stroke="#173c2b"
                    strokeDasharray="3 3"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="month"
                    tick={{ fill: "#91a99a", fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: "#91a99a", fontSize: 10 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Line
                    type="monotone"
                    dataKey="income"
                    name="Renda"
                    stroke="#c7ff45"
                    strokeWidth={2.5}
                    dot={{ r: 3, fill: "#c7ff45" }}
                    activeDot={{ r: 5 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="expenses"
                    name="Gastos"
                    stroke="#55bd67"
                    strokeWidth={2.5}
                    dot={{ r: 3, fill: "#55bd67" }}
                    activeDot={{ r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="min-w-0 rounded-xl border border-lime-300/15 bg-black/10 p-3 sm:p-4">
              <h3 className="mb-2 text-sm font-semibold text-white">
                Top categorias
              </h3>

              <div className="h-[170px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={categories}
                    layout="vertical"
                    margin={{ top: 0, right: 0, left: -18, bottom: 0 }}
                  >
                    <XAxis type="number" hide domain={[0, 50]} />
                    <YAxis
                      type="category"
                      dataKey="name"
                      width={80}
                      tick={{ fill: "#b8c9bd", fontSize: 10 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip
                      contentStyle={tooltipStyle}
                      formatter={(value) => [`${value}%`, "Participação"]}
                    />
                    <Bar
                      dataKey="value"
                      name="Participação"
                      radius={[0, 4, 4, 0]}
                      barSize={12}
                    >
                      {categories.map((category) => (
                        <Cell key={category.name} fill={category.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="min-w-0 rounded-xl border border-lime-300/15 bg-black/10 p-3 sm:p-4">
              <h3 className="mb-2 text-sm font-semibold text-white">
                Distribuição dos gastos
              </h3>

              <div className="flex flex-col items-center">
                <div className="h-[145px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={categories}
                        dataKey="value"
                        nameKey="name"
                        innerRadius={39}
                        outerRadius={62}
                        paddingAngle={3}
                        stroke="none"
                      >
                        {categories.map((category) => (
                          <Cell key={category.name} fill={category.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={tooltipStyle}
                        formatter={(value) => [`${value}%`, "Participação"]}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="w-full space-y-2">
                  {categories.map((category) => (
                    <div
                      key={category.name}
                      className="flex items-center justify-between gap-2 text-[11px]"
                    >
                      <span className="flex items-center gap-2 text-slate-400">
                        <span
                          className="h-2 w-2 shrink-0 rounded-full"
                          style={{ backgroundColor: category.color }}
                        />
                        {category.name}
                      </span>
                      <span className="text-slate-200">{category.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisualizationSection;
