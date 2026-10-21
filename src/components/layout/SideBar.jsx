import {
  ChartNoAxesCombined,
  LayoutDashboard,
  CalendarDays,
  TrendingUp,
  CircleUserRound,
  Leaf,
} from "lucide-react";

const menuItems = [
  { label: "Visão geral", href: "/dashboard", icon: LayoutDashboard },
  { label: "Meu mês", href: "/meses", icon: CalendarDays },
  { label: "Evolução", href: "/evolucao", icon: TrendingUp },
];

function Sidebar() {
  return (
    <aside className="flex w-full shrink-0 flex-col bg-[#092d20] text-white md:min-h-screen md:w-60">
      <a
        href="/dashboard"
        className="flex items-center gap-3 px-6 py-6 text-xl font-bold"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#c7ff45] text-[#092d20]">
          <ChartNoAxesCombined size={21} />
        </span>
        Metric<span className="text-[#c7ff45]">Fin</span>
      </a>

      <p className="px-6 pb-3 text-xs font-medium uppercase tracking-wider text-emerald-100/60">
        Menu principal
      </p>

      <nav className="flex gap-2 overflow-x-auto px-3 pb-4 md:flex-col">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const active = index === 0;

          return (
            <a
              key={item.label}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`flex shrink-0 items-center gap-3 rounded-lg px-3 py-3 text-sm transition ${
                active
                  ? "bg-white/10 font-semibold text-[#c7ff45]"
                  : "text-emerald-50/80 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Icon size={18} />
              {item.label}
            </a>
          );
        })}
      </nav>

      <div className="mt-auto hidden px-3 pb-5 md:block">
        <div className="mb-4 border-t border-white/15" />
        <div className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-emerald-50/80">
          <CircleUserRound size={18} />
          Minha sessão
        </div>
        <p className="px-3 pt-2 text-[11px] text-emerald-100/40">
          <Leaf size={12} className="mr-1 inline" />
          Seus dados nesta sessão
        </p>
      </div>
    </aside>
  );
}

export default Sidebar;
