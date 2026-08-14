"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Datenschutz() {
  const { t } = useLanguage();
  const l = t.legal.datenschutz;

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
            {l.sectionOverviewTitle}
          </h2>
          <p>{l.overviewText}</p>
        </section>

        <section>
          <h2 className="font-display text-lg text-green mb-3">
            {l.sectionFontsTitle}
          </h2>
          <p>{l.fontsText}</p>
        </section>

        <section>
          <h2 className="font-display text-lg text-green mb-3">
            {l.sectionStorageTitle}
          </h2>
          <p>{l.storageText}</p>
        </section>

        <section>
          <h2 className="font-display text-lg text-green mb-3">
            {l.sectionRightsTitle}
          </h2>
          <p>{l.rightsText}</p>
        </section>
      </div>
    </main>
  );
}
