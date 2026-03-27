import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Crisil Solutions — ERP, Automatizaciones y Desarrollo Tech en Bolivia",
  description:
    "Desarrollamos ERPs, automatizaciones, tiendas online y landing pages para empresas bolivianas. ERP propio con módulos de Ventas, Inventario, Producción y Finanzas.",
  keywords:
    "ERP Bolivia, software empresarial Bolivia, automatización, landing page, tienda online, desarrollo web Bolivia",
  openGraph: {
    title: "Crisil Solutions — Tecnología que mueve empresas",
    description:
      "ERP, automatizaciones y desarrollo digital para empresas en Bolivia.",
    url: "https://crisilsolutions.com",
    siteName: "Crisil Solutions",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crisil Solutions",
    description: "Tecnología que mueve empresas.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${geist.variable} ${geistMono.variable} ${inter.variable} font-sans bg-brand-dark text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
