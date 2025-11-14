// app/page.tsx
import Header from "@/components/header/Header";
import Hero from "@/components/sections/Hero";
import Value from "@/components/sections/Value";
import Projects from "@/components/sections/Projects";
import Stack from "@/components/sections/Stack";
import Blog from "@/components/sections/Blog";
import About from "@/components/sections/About";
import ContactCta from "@/components/sections/ContactCta";
import Footer from "@/components/footer/Footer";
import { brand } from "@/components/brand/brandTokens";

export default function HomePage() {
  return (
    <main className={`min-h-screen ${brand.pageBg} ${brand.textMain} font-body`}>
      <div className="mx-auto max-w-6xl px-4 pb-16">
        <Header />
        <Hero />
        <Value />
        <Projects />
        <Stack />
        <Blog />
        <About />
        <ContactCta />
        <Footer />
      </div>
    </main>
  );
}
