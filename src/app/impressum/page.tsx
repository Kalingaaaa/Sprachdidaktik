"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Impressum() {
  const { t } = useLanguage();
  const l = t.legal.impressum;

  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="font-display text-4xl text-green mb-8 leading-tight">
        {l.title}
      </h1>

      <div className="rounded-sm border border-dashed border-gold/60 bg-green-pale px-6 py-6 text-sm text-green-soft mb-12">
        <p className="font-display text-green mb-1">{l.noticeTitle}</p>
        <p>{l.notice}</p>
      </div>

      <div className="space-y-10 text-ink/80 leading-relaxed">
        <section>
          <h2 className="font-display text-lg text-green mb-3">
            {l.sectionAngaben}
          </h2>
          <p>{l.name}</p>
          <p>{l.address}</p>
          <p>{l.cityLine}</p>
        </section>

        <section>
          <h2 className="font-display text-lg text-green mb-3">
            {l.sectionContact}
          </h2>
          <p>{l.email}</p>
          <p>{l.phone}</p>
        </section>

        <section>
          <h2 className="font-display text-lg text-green mb-3">
            {l.sectionResponsible}
          </h2>
          <p>{l.responsibleText}</p>
        </section>
      </div>
    </main>
  );
}
