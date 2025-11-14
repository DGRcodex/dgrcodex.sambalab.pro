// components/sections/Stack.tsx
import { brand } from "@/components/brand/brandTokens";

const sections = [
  {
    title: "Lenguajes & backend",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "Django"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Astro", "Tailwind", "Sanity"],
  },
  {
    title: "Cloud & DevOps",
    items: ["Vercel", "Azure", "Docker", "CI/CD", "GitHub"],
  },
];

export default function Stack() {
  return (
    <section
      id="stack"
      className={`mb-12 rounded-2xl border ${brand.borderSoft} ${brand.cardBg} p-5`}
    >
      <div className="mb-3 font-heading text-lg font-semibold text-[#231F20]">
        Stack técnico
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {sections.map((section) => (
          <div key={section.title} className="space-y-2">
            <div className="text-xs font-semibold text-[#231F20]">
              {section.title}
            </div>
            <div className="flex flex-wrap gap-1">
              {section.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-[#FFF4EB] px-2 py-1 text-[10px] text-[#7A6A63]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
