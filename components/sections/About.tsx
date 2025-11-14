// components/sections/About.tsx
import { brand } from "@/components/brand/brandTokens";

export default function About() {
  return (
    <section
      id="about"
      className={`mb-12 flex flex-col gap-6 rounded-2xl border ${brand.borderSoft} ${brand.cardBg} p-5 md:flex-row`}
    >
      <div className="h-32 w-32 rounded-full bg-[#FFEDE3]" />
      <div className="flex-1 space-y-3">
        <div className="font-heading text-lg font-semibold text-[#231F20]">
          Sobre Daniel García Rojas (dgrcodex)
        </div>
        <p className={`text-[11px] ${brand.textMuted}`}>
          Desarrollador full stack y practicante de IA con formación híbrida en
          derecho, arte y proyectos culturales. Me interesa diseñar sistemas, no
          solo páginas, y acompañar a equipos pequeños en decisiones técnicas.
        </p>
        <p className={`text-[11px] ${brand.textMuted}`}>
          He trabajado en revistas digitales, pequeñas empresas y proyectos de
          evaluación de IA, normalmente como desarrollador y socio estratégico
          al mismo tiempo.
        </p>
        <div className={`mt-2 text-[11px] ${brand.textSoft}`}>
          Timeline: Suda La Lengua · Sambalab · Agrícola BE · Evaluación de IA
          & agentes.
        </div>
      </div>
    </section>
  );
}
