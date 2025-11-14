"use client";

import { useState } from "react";
import { brand } from "@/components/brand/brandTokens";

type Lang = "es" | "en";

const projects = [
  {
    id: "ingemtrust",
    year: "2024",
    titleEs: "Ingemtrust Ingeniería",
    titleEn: "Ingemtrust Engineering",
    roleEs: "Full Stack · Referente técnico",
    roleEn: "Full Stack Developer · Technical Lead",
    typeEs: "B2B · Consultora de ingeniería",
    typeEn: "B2B · Engineering consulting",
    summaryEs:
      "Sitio corporativo y base para herramientas internas con Next.js + Django.",
    summaryEn:
      "Corporate site and base for internal tools with Next.js + Django.",
    stack: ["Next.js", "Django", "PostgreSQL", "Vercel"],
    focus: "Cloud",
    github: "",
    videoUrl: "",
  },
  {
    id: "agricola-be",
    year: "2024",
    titleEs: "Agrícola BE · Desde la Tierra",
    titleEn: "Agrícola BE · Desde la Tierra",
    roleEs: "Full Stack · Socio tecnológico de marca",
    roleEn: "Full Stack · Brand tech partner",
    typeEs: "Marca y contenidos para productos gourmet",
    typeEn: "Brand + content platform for gourmet products",
    summaryEs:
      "Stack Next.js + Supabase para productos, historias y campañas de temporada.",
    summaryEn:
      "Next.js + Supabase stack for products, stories and seasonal campaigns.",
    stack: ["Next.js", "Supabase", "Tailwind", "Vercel"],
    focus: "Web Apps",
    github: "",
    videoUrl: "",
  },
  {
    id: "suda-la-lengua",
    year: "2023–2025",
    titleEs: "Suda La Lengua",
    titleEn: "Suda La Lengua",
    roleEs: "Arquitecto de plataforma · Full stack",
    roleEn: "Platform Architect · Full stack",
    typeEs: "Revista cultural digital · Ediciones mensuales",
    typeEn: "Digital cultural magazine · Monthly issues",
    summaryEs:
      "Arquitectura modular con Next.js + Sanity para ensayos, poesía y experimentos visuales.",
    summaryEn:
      "Modular Next.js + Sanity architecture for essays, poetry and visual experiments.",
    stack: ["Next.js", "Sanity", "Tailwind", "Vercel"],
    focus: "Publishing",
    github: "",
    videoUrl: "",
  },
  {
    id: "ai-eval",
    year: "2024–2025",
    titleEs: "Evaluación de IA y agentes",
    titleEn: "AI Evaluation & Agents",
    roleEs: "Quality Manager · Diseño de prompts y flujos",
    roleEn: "Quality Manager · Prompt & workflow design",
    typeEs: "Flujos de evaluación para asistentes de IA",
    typeEn: "Evaluation workflows for AI assistants",
    summaryEs:
      "Diseño de prompts, baterías de prueba y flujos de evaluación para modelos y agentes.",
    summaryEn:
      "Design of prompts, test suites and workflows for models and agents.",
    stack: ["Python", "LLMs", "Eval tools"],
    focus: "AI / LLM",
    github: "",
    videoUrl: "",
  },
];

const t = (lang: Lang, es: string, en: string) =>
  lang === "es" ? es : en;

export default function Projects() {
  const [lang, setLang] = useState<Lang>("es");

  return (
    <section id="projects" className="mb-12">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 rounded-full bg-[#FFEDE3]" />
          <div className="font-heading text-lg font-semibold text-[#231F20]">
            {t(lang, "Proyectos seleccionados", "Selected projects")}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden gap-2 text-[10px] text-[#8C7A72] md:flex">
            <span className="rounded-full bg-white px-2 py-1">Todos</span>
            <span className="rounded-full bg-white px-2 py-1">AI / LLM</span>
            <span className="rounded-full bg-white px-2 py-1">Cloud</span>
            <span className="rounded-full bg-white px-2 py-1">Web Apps</span>
          </div>
          <div className="inline-flex items-center rounded-full bg-white p-1 text-[10px]">
            <button
              type="button"
              onClick={() => setLang("es")}
              className={`rounded-full px-2 py-0.5 ${
                lang === "es"
                  ? `${brand.accentBg} text-white font-semibold`
                  : "text-[#8C7A72]"
              }`}
            >
              ES
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`rounded-full px-2 py-0.5 ${
                lang === "en"
                  ? `${brand.accentBg} text-white font-semibold`
                  : "text-[#8C7A72]"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`flex flex-col justify-between rounded-2xl border ${brand.borderSoft} ${brand.cardBg} p-4`}
          >
            <div className="space-y-2">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="text-xs font-semibold text-[#231F20]">
                    {t(lang, project.titleEs, project.titleEn)}
                  </div>
                  <div className={`text-[11px] ${brand.textSoft}`}>
                    {t(lang, project.roleEs, project.roleEn)}
                  </div>
                </div>
                <span className="rounded-full bg-[#FFF4EB] px-2 py-0.5 text-[10px] text-[#7A6A63]">
                  {project.year}
                </span>
              </div>
              <div className={`text-[11px] ${brand.textMuted}`}>
                {t(lang, project.typeEs, project.typeEn)}
              </div>
              <div className={`text-[11px] ${brand.textSoft}`}>
                {t(lang, project.summaryEs, project.summaryEn)}
              </div>
              <div className="mt-2 flex flex-wrap gap-1">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-[#FFF4EB] px-2 py-0.5 text-[10px] text-[#7A6A63]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {/* Links GitHub / video se rellenan cuando existan */}
            </div>
            <div className="mt-3 flex justify-between text-[10px]">
              <span
                className={`inline-flex items-center rounded-full px-2 py-1 font-medium text-white ${brand.accentBg}`}
              >
                {t(lang, "Ver caso", "Case study")}
              </span>
              <span className="inline-flex items-center rounded-full bg-white px-2 py-1 text-[#7A6A63]">
                {project.focus}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
