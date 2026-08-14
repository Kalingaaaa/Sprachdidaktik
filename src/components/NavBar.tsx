"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const MODULES = [
    { href: "/grundlagen", label: t.nav.grundlagen },
    { href: "/material", label: t.nav.material },
    { href: "/uebungen", label: t.nav.uebungen },
    { href: "/impulse", label: t.nav.impulse },
    { href: "/vorbereitung", label: t.nav.vorbereitung },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 gap-4">
        <Link
          href="/"
          className="font-display text-lg text-green tracking-tight whitespace-nowrap"
        >
          Sprachbewusst&nbsp;<span className="text-gold">·</span>&nbsp;
          {t.nav.brandSuffix}
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
            {t.nav.portfolio}
          </Link>
          <Link
            href="/ueber"
            className="text-sm text-ink/70 hover:text-green transition-colors"
          >
            {t.nav.ueber}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <LanguageSwitcher />
          </div>
          <button
            className="lg:hidden text-green"
            onClick={() => setOpen(!open)}
            aria-label={t.nav.menuOpen}
            aria-expanded={open}
          >
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
              <path d="M0 1H22" stroke="currentColor" strokeWidth="1.5" />
              <path d="M0 8H22" stroke="currentColor" strokeWidth="1.5" />
              <path d="M0 15H22" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line px-6 py-4 lg:hidden">
          <div className="mb-3 sm:hidden">
            <LanguageSwitcher />
          </div>
          {[
            ...MODULES,
            { href: "/portfolio", label: t.nav.portfolio },
            { href: "/ueber", label: t.nav.ueber },
          ].map((m) => (
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
          ))}
        </nav>
      )}
    </header>
  );
}
