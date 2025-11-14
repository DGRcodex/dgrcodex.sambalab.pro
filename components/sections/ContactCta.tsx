// components/sections/ContactCta.tsx
import { brand } from "@/components/brand/brandTokens";

export default function ContactCta() {
  return (
    <section
      id="contact"
      className={`mb-12 rounded-2xl border ${brand.borderSoft} ${brand.cardBg} p-5`}
    >
      <div className="mb-2 font-heading text-lg font-semibold text-[#231F20]">
        Hablemos de tu proyecto
      </div>
      <p className={`mb-4 text-[11px] ${brand.textMuted}`}>
        Cuéntame brevemente el contexto (IA, backend, revista digital, marca,
        etc.) y te respondo con preguntas y posibles siguientes pasos.
      </p>
      <div className="flex flex-col gap-3 md:flex-row">
        <div className="flex-1 space-y-2 text-[11px] text-[#8C7A72]">
          <div className="h-8 w-full rounded bg-[#FFF4EB] px-3 py-2">
            Nombre / Organización
          </div>
          <div className="h-8 w-full rounded bg-[#FFF4EB] px-3 py-2">
            Email
          </div>
          <div className="h-16 w-full rounded bg-[#FFF4EB] px-3 py-2">
            Breve descripción de lo que necesitas
          </div>
          <div
            className={`flex h-8 w-28 items-center justify-center rounded text-xs font-medium text-white ${brand.accentBg}`}
          >
            Enviar
          </div>
        </div>
        <div className="w-full max-w-xs space-y-2 text-[11px] text-[#7A6A63]">
          <div>
            Email: <span className="font-medium">dgr@sambalab.pro</span>
          </div>
          <div>Ubicación: Santiago · Trabajo remoto bienvenido</div>
          <div className={brand.textSoft}>
            Interés especial en: evaluación de IA, backends en Python, proyectos
            editoriales y culturales.
          </div>
        </div>
      </div>
    </section>
  );
}
