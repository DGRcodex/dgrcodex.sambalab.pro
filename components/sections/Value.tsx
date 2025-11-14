// components/sections/Value.tsx
import { brand } from "@/components/brand/brandTokens";

export default function Value() {
  return (
    <section className="mb-12">
      <div className="mb-4 text-center">
        <h2 className="font-heading text-xl font-semibold text-[#231F20]">
          Lo que hago
        </h2>
        <p className={`mt-1 text-sm ${brand.textSoft}`}>
          Diseño y desarrollo soluciones donde se cruzan contenido, código y
          automatización con IA.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <div
          className={`rounded-2xl border ${brand.borderSoft} ${brand.cardBg} p-4`}
        >
          <h3 className="mb-2 text-xs font-semibold text-[#231F20]">
            IA & Python
          </h3>
          <p className={`mb-2 text-[11px] ${brand.textMuted}`}>
            Prototipos y flujos de evaluación con modelos de lenguaje y visión,
            integrados a productos existentes.
          </p>
          <p className={`text-[11px] ${brand.textSoft}`}>
            Me enfoco en prompts robustos, test suites y conexiones seguras con
            datos reales.
          </p>
        </div>
        <div
          className={`rounded-2xl border ${brand.borderSoft} ${brand.cardBg} p-4`}
        >
          <h3 className="mb-2 text-xs font-semibold text-[#231F20]">
            Plataformas & backend
          </h3>
          <p className={`mb-2 text-[11px] ${brand.textMuted}`}>
            Diseño backends y servicios que corren en Vercel, Azure o VPS,
            conectando APIs, contenido y datos.
          </p>
          <p className={`text-[11px] ${brand.textSoft}`}>
            Desde proyectos pequeños hasta arquitecturas que puedan crecer con
            el equipo.
          </p>
        </div>
        <div
          className={`rounded-2xl border ${brand.borderSoft} ${brand.cardBg} p-4`}
        >
          <h3 className="mb-2 text-xs font-semibold text-[#231F20]">
            Interfaces & contenido
          </h3>
          <p className={`mb-2 text-[11px] ${brand.textMuted}`}>
            Construyo interfaces con Next.js y Tailwind, cuidando la lectura, el
            ritmo visual y la edición de contenido.
          </p>
          <p className={`text-[11px] ${brand.textSoft}`}>
            Me interesa tanto la experiencia del usuario como la del equipo que
            mantiene el sitio.
          </p>
        </div>
      </div>
    </section>
  );
}
