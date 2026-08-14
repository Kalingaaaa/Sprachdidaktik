"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Ueber() {
  const { t } = useLanguage();
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <p className="mb-3 font-display text-gold text-sm tracking-widest">
        {t.ueber.eyebrow}
      </p>
      <h1 className="font-display text-4xl text-green mb-8 leading-tight">
        {t.ueber.title}
      </h1>

      <div className="rounded-sm border border-dashed border-gold/60 bg-green-pale px-6 py-6 text-sm text-green-soft mb-10">
        {t.ueber.placeholder}
      </div>

      <div className="space-y-6 text-ink/75 leading-relaxed">
        <p>{t.ueber.p1}</p>
        <p>{t.ueber.p2}</p>
      </div>
    </main>
  );
}
