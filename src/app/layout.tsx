import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Importa el Navbar

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IA en Gastronomía - Informe Completo",
  description: "Aplicaciones prácticas de la IA para la consultoría gastronómica y negocios del sector.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-gray-100`}>
        <Navbar /> {/* Añade el Navbar aquí */}
        <main className="container mx-auto py-8">
          {children}
        </main>
        <footer className="bg-gray-800 text-white text-center p-4 mt-12">
          <p>&copy; 2024 Informe IA en Gastronomía. Todos los derechos reservados.</p>
        </footer>
      </body>
    </html>
  );
}

