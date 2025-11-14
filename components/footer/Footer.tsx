// components/footer/Footer.tsx

export default function Footer() {
  return (
    <footer className="border-t border-[#E6D7CF] pt-4 text-[11px] text-[#8C7A72]">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row">
        <div className="space-y-1">
          <div>© {new Date().getFullYear()} Daniel García Rojas · dgrcodex</div>
          <div>sambalab.pro</div>
        </div>
        <div className="flex flex-wrap gap-2">
          {["CV", "Proyectos", "Blog", "Contacto"].map((link) => (
            <span
              key={link}
              className="rounded bg-[#FFF4EB] px-2 py-1 text-[#7A6A63]"
            >
              {link}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
