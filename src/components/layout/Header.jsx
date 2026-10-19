function Header() {
  const links = [
    { label: "Início", href: "#inicio", ativo: true },
    { label: "Funcionalidades", href: "#funcionalidades" },
    { label: "Sobre", href: "#sobre" },
  ];

  return (
    <header
      id="inicio"
      className="relative z-10 w-full border-b border-lime-300/10 bg-[#031b13]"
    >
      <div className="mx-auto flex min-h-[76px] max-w-[1400px] items-center justify-between gap-8 px-[5%] max-[440px]:flex-wrap max-[440px]:justify-center max-[440px]:py-3">
        <a
          href="#inicio"
          className="flex items-center gap-2 whitespace-nowrap text-[22px] font-bold text-white max-[650px]:text-[19px]"
        >
          <span aria-hidden="true" className="text-[29px] text-[#c7ff45]">
            ◈
          </span>
          MetricFin
        </a>

        <nav
          aria-label="Navegação principal"
          className="flex items-center gap-[38px] max-[650px]:gap-[14px] max-[440px]:order-3 max-[440px]:w-full max-[440px]:justify-center"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={link.ativo ? "location" : undefined}
              className={`relative py-2 text-sm font-medium transition-colors duration-200 max-[650px]:text-xs
                ${
                  link.ativo
                    ? "text-[#c7ff45] after:scale-x-100"
                    : "text-slate-200 hover:text-[#c7ff45] after:scale-x-0 hover:after:scale-x-100"
                }
                after:absolute after:bottom-0 after:left-0
                after:h-0.5 after:w-full after:origin-center
                after:rounded-full after:bg-[#c7ff45]
                after:transition-transform after:duration-200`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#experimente"
          className="inline-flex items-center gap-2 rounded-full border border-lime-500 px-[18px] py-[9px] text-sm font-semibold text-[#c7ff45] transition duration-200 hover:-translate-y-0.5 hover:bg-[#c7ff45] hover:text-[#031b13] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-300 max-[650px]:px-[11px] max-[650px]:py-2 max-[650px]:text-xs"
        >
          Entrar
          <span aria-hidden="true">›</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
