// components/sections/Hero.tsx
import { brand } from "@/components/brand/brandTokens";

const selectedProjects = [
  {
    name: "Ingemtrust",
    role: "Full Stack · Next.js + Django",
    summary:
      "Sitio corporativo + herramientas internas para una firma de ingeniería.",
    tags: ["B2B", "Cloud", "Consultoría"],
  },
  {
    name: "Agrícola BE",
    role: "Full Stack · Next.js + Supabase",
    summary:
      "Plataforma de marca y contenidos para productos agrícolas gourmet.",
    tags: ["Ecommerce-ready", "Brand", "Contenido"],
  },
  {
    name: "Suda La Lengua",
    role: "Plataforma · Next.js + Sanity",
    summary: "Revista cultural digital con ediciones modulares y mensuales.",
    tags: ["Cultura", "Publishing", "CMS"],
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className={`mb-12 rounded-2xl border ${brand.borderSoft} ${brand.cardBg} px-6 py-8`}
    >
      <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#FFEDE3] px-3 py-1 text-xs text-[#9A5C4A]">
        <span className="h-2 w-2 rounded-full bg-[#E86F52]" />
        Portafolio · Desarrollo web, Python y IA
      </div>

      <div className="flex flex-col gap-8 md:flex-row">
        {/* LEFT: intro copy + CTAs */}
        <div className="flex-1 space-y-4">
          <h1 className="font-heading text-2xl font-semibold text-[#231F20] md:text-3xl">
            Construyo plataformas digitales y flujos con IA para proyectos
            culturales, marcas pequeñas y equipos que necesitan algo más que
            una landing.
          </h1>
          <p className={`max-w-xl text-sm ${brand.textMuted}`}>
            Trabajo con Python, Next.js y servicios en la nube para conectar
            interfaces, datos y asistentes de IA, cuidando tanto la arquitectura
            como la experiencia de uso y el contenido.
          </p>
          <div className="flex flex-wrap gap-3 text-xs">
            <a
              href="#projects"
              className={`inline-flex items-center rounded-full px-4 py-2 font-medium text-white ${brand.accentBg} hover:brightness-110`}
            >
              Ver proyectos
            </a>
            <a
              href="#stack"
              className="inline-flex items-center rounded-full bg-white px-4 py-2 text-[#444] hover:bg-[#FFF0E5]"
            >
              Ver stack técnico
            </a>
          </div>
          <div className="mt-4 flex flex-wrap gap-2 text-[10px] text-[#6B5B55]">
            {[
              "Python",
              "Django",
              "Next.js",
              "TypeScript",
              "Supabase",
              "Azure",
              "PostgreSQL",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white px-2 py-1 text-[10px]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT: Selected projects */}
        <div
          className={`flex-1 rounded-xl border ${brand.borderSoft} ${brand.cardAltBg} p-4`}
        >
          <div
            className={`mb-3 flex items-center justify-between text-[11px] ${brand.textSoft}`}
          >
            <span className="font-medium text-[#231F20]">
              Proyectos destacados
            </span>
            <span>dgrcodex · 2023–2025</span>
          </div>

          <div className="space-y-3">
            {selectedProjects.map((project) => (
              <div
                key={project.name}
                className={`flex items-start justify-between gap-3 rounded-lg border ${brand.borderSoft} ${brand.cardBg} p-3`}
              >
                <div className="space-y-1">
                  <div className="text-xs font-semibold text-[#231F20]">
                    {project.name}
                  </div>
                  <div className={`text-[11px] ${brand.textSoft}`}>
                    {project.role}
                  </div>
                  <div className={`text-[11px] ${brand.textMuted}`}>
                    {project.summary}
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium text-white ${brand.accentBg}`}
                  >
                    Ver caso
                  </span>
                  <div className="flex flex-wrap justify-end gap-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#FFF4EB] px-2 py-0.5 text-[10px] text-[#7A6A63]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`mt-3 flex items-center justify-between text-[11px] ${brand.textSoft}`}
          >
            <span>Ver todos los proyectos</span>
            <span className="h-5 w-20 rounded bg-[#FFEDE3]" />
          </div>
        </div>
      </div>
    </section>
  );
}
