import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sprachbewusst · KI — Selbstlern-Tool für Sozialberufe",
  description:
    "Sprachbewussten Fachunterricht mit KI gestalten: Grundlagen, Material, Übungen und Prompts für Lehrkräfte in Sozialberufen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-paper text-ink font-body">
        <NavBar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
