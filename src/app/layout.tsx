import type { Metadata } from "next";
import { Outfit, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import FloatingPlants from "@/components/FloatingPlants";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Lunivexie | Ángel Tech Plant-Based",
  description: "Portafolio y portal de tecnología, leaks y el lado orgánico del código.",
};

export const runtime = "edge";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${outfit.variable} ${cormorant.variable} font-sans`}>
      <body className="bg-background text-foreground min-h-screen relative selection:bg-vibrant-green/20">
        <FloatingPlants />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
