"use client";

import { useState } from "react";
import { brand } from "@/components/brand/brandTokens";

type NavId = "projects" | "stack" | "about" | "blog" | "contact";

const navItems: { id: NavId; label: string }[] = [
  { id: "projects", label: "Proyectos" },
  { id: "stack", label: "Stack" },
  { id: "about", label: "Sobre mí" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contacto" },
];

export default function Header() {
  const [active, setActive] = useState<NavId>("projects");

  return (
    <header
      className={`sticky top-0 z-40 mb-8 border-b ${brand.borderSoft} ${brand.headerBg} bg-opacity-90 backdrop-blur`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
        <div className="flex items-center gap-3">
          {/* Avatar placeholder (luego metes tu foto real) */}
          <div className="h-9 w-9 rounded-full bg-[#1F2933]/5 p-[2px]">
            <div className="h-full w-full rounded-full bg-[#DCC7BB]" />
          </div>
          <div className="leading-tight">
            <div className="text-xs font-semibold uppercase tracking-wide">
              dgrcodex
            </div>
            <div className="text-[10px] text-[#8B7568]">
              Sambalab · Desarrollo & IA
            </div>
          </div>
        </div>

        <nav className="flex flex-wrap items-center gap-3 text-xs">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActive(item.id)}
              className={`hidden h-7 items-center justify-center rounded-full px-3 text-[11px] md:inline-flex transition-colors ${
                active === item.id
                  ? `${brand.accentBg} text-white font-semibold`
                  : "bg-white/60 text-[#555] hover:bg-white hover:text-[#E86F52]"
              }`}
            >
              {item.label}
            </a>
          ))}

          <a
            href="https://github.com/dgrcodex"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-7 items-center justify-center rounded-full bg-white/70 px-3 text-[11px] text-[#444] hover:bg-white hover:text-[#E86F52]"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
