"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Portfolio() {
  const { t } = useLanguage();
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <p className="mb-3 font-display text-gold text-sm tracking-widest">
        {t.portfolio.eyebrow}
      </p>
      <h1 className="font-display text-4xl text-green mb-5 leading-tight">
        {t.portfolio.title}
      </h1>
      <p className="text-ink/70 max-w-xl leading-relaxed mb-14">
        {t.portfolio.intro}
      </p>

      <div className="rounded-sm border border-dashed border-gold/60 bg-green-pale px-6 py-10 text-center">
        <p className="font-display text-green mb-2">{t.portfolio.emptyTitle}</p>
        <p className="text-sm text-green-soft max-w-sm mx-auto">
          {t.portfolio.emptyDesc}
        </p>
      </div>
    </main>
  );
}
