// components/sections/Blog.tsx
import Link from "next/link";
import { brand } from "@/components/brand/brandTokens";

const posts = [
  {
    title: "Diseñando flujos de evaluación para IA",
    date: "2025 · Borrador",
    tag: "AI / Evaluation",
    slug: "flujos-evaluacion-ia",
  },
  {
    title: "Notas sobre backends Python para equipos pequeños",
    date: "2024",
    tag: "Backend",
    slug: "backends-python-equipos-pequenos",
  },
  {
    title: "Plataformas culturales con Next.js",
    date: "2023",
    tag: "Cultura & Web",
    slug: "plataformas-culturales-nextjs",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="mb-12">
      <div className="mb-3 flex items-center justify-between">
        <div className="font-heading text-lg font-semibold text-[#231F20]">
          Blog
        </div>
        <Link
          href="https://blog.sambalab.pro"
          className="text-[11px] text-[#8C7A72] hover:text-[#E86F52]"
        >
          blog.sambalab.pro
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`https://blog.sambalab.pro/posts/${post.slug}`}
            className={`rounded-2xl border ${brand.borderSoft} ${brand.cardBg} p-4 hover:shadow-sm transition-shadow`}
          >
            <div className="mb-1 text-[11px] text-[#8C7A72]">
              {post.date}
            </div>
            <h3 className="mb-1 text-xs font-semibold text-[#231F20]">
              {post.title}
            </h3>
            <div className="mb-2 inline-flex rounded-full bg-[#FFF4EB] px-2 py-0.5 text-[10px] text-[#7A6A63]">
              {post.tag}
            </div>
            <p className={`text-[11px] ${brand.textSoft}`}>
              Entradas técnicas y reflexivas sobre IA, código y cultura que
              enlazarás desde tu portafolio.
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
