"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const MODULES = [
  { href: "/grundlagen", label: "I. Grundlagen" },
  { href: "/material", label: "II. Material mit KI" },
  { href: "/uebungen", label: "III. Übungen mit KI" },
  { href: "/impulse", label: "IV. Impulse für Lernende" },
  { href: "/vorbereitung", label: "V. Unterrichtsvorbereitung" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-display text-lg text-green tracking-tight"
        >
          Sprachbewusst&nbsp;<span className="text-gold">·</span>&nbsp;KI
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {MODULES.map((m) => (
            <Link
              key={m.href}
              href={m.href}
              className={`text-sm transition-colors hover:text-green ${
                pathname === m.href
                  ? "text-green font-semibold"
                  : "text-ink/70"
              }`}
            >
              {m.label}
            </Link>
          ))}
          <span className="h-4 w-px bg-line" />
          <Link
            href="/portfolio"
            className="text-sm text-ink/70 hover:text-green transition-colors"
          >
            Mein Portfolio
          </Link>
          <Link
            href="/ueber"
            className="text-sm text-ink/70 hover:text-green transition-colors"
          >
            Über
          </Link>
        </nav>

        <button
          className="lg:hidden text-green"
          onClick={() => setOpen(!open)}
          aria-label="Menü öffnen"
          aria-expanded={open}
        >
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
            <path d="M0 1H22" stroke="currentColor" strokeWidth="1.5" />
            <path d="M0 8H22" stroke="currentColor" strokeWidth="1.5" />
            <path d="M0 15H22" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line px-6 py-4 lg:hidden">
          {[...MODULES, { href: "/portfolio", label: "Mein Portfolio" }, { href: "/ueber", label: "Über" }].map(
            (m) => (
              <Link
                key={m.href}
                href={m.href}
                onClick={() => setOpen(false)}
                className={`py-2 text-sm ${
                  pathname === m.href ? "text-green font-semibold" : "text-ink/70"
                }`}
              >
                {m.label}
              </Link>
            )
          )}
        </nav>
      )}
    </header>
  );
}
