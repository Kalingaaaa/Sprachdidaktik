"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const MODULE_HREFS = [
  "/grundlagen",
  "/material",
  "/uebungen",
  "/impulse",
  "/vorbereitung",
];

export default function Home() {
  const { t } = useLanguage();

  return (
    <main>
      {/* Hero */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="mb-5 font-display text-sm tracking-widest text-gold">
            {t.home.eyebrow}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl text-green leading-tight mb-6 text-balance">
            {t.home.titleLine1}
            <br /> {t.home.titleLine2}
          </h1>
          <p className="mx-auto max-w-xl text-ink/70 leading-relaxed mb-10">
            {t.home.intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/grundlagen"
              className="bg-green text-paper px-7 py-3 text-sm font-medium hover:bg-green-soft transition-colors"
            >
              {t.home.ctaPrimary}
            </Link>
            <a
              href="#module"
              className="border border-line px-7 py-3 text-sm font-medium text-green hover:border-green transition-colors"
              {t.home.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio band */}
      <section className="mx-auto max-w-4xl px-6 py-10">
        <div className="rounded-sm border border-dashed border-gold/60 bg-green-pale px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="font-display text-green mb-1">
              {t.home.portfolioTitle}
            </p>
            <p className="text-sm text-green-soft">{t.home.portfolioDesc}</p>
          </div>
          <Link
            href="/portfolio"
            className="text-sm text-green font-medium whitespace-nowrap hover:underline"
          >
            {t.home.portfolioLink}
          </Link>
        </div>
      </section>

      {/* Modules */}
      <section
        id="module"
        className="mx-auto max-w-6xl px-6 py-16 scroll-mt-20"
      >
        <div className="mb-12 max-w-lg">
          <h2 className="font-display text-2xl text-green mb-3">
            {t.home.modulesTitle}
          </h2>
          <p className="text-ink/70 text-sm leading-relaxed">
            {t.home.modulesIntro}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.home.modules.map((m, i) => (
            <Link
              key={m.numeral}
              href={MODULE_HREFS[i]}
              className="group border border-line bg-white p-6 hover:border-green transition-colors"
            >
              <p className="font-display text-gold text-sm mb-3">
                {m.numeral}
              </p>
              <h3 className="font-display text-lg text-green mb-2 group-hover:underline">
                {m.title}
              </h3>
              <p className="text-sm text-ink/65 leading-relaxed">{m.desc}</p>
            </Link>
          ))}

          <Link
            href="/ueber"
            className="border border-line bg-white p-6 hover:border-green transition-colors flex flex-col justify-center"
          >
            <h3 className="font-display text-lg text-green mb-2">
              {t.home.ueberCardTitle}
            </h3>
            <p className="text-sm text-ink/65 leading-relaxed">
              {t.home.ueberCardDesc}
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
