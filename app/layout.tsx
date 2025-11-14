// app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata = {
  title: "dgrcodex · Portfolio",
  description: "Portafolio de Daniel García Rojas (dgrcodex)",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${playfair.variable} font-body bg-[#FFF7F2] text-[#1F2933]`}
      >
        {children}
      </body>
    </html>
  );
}
