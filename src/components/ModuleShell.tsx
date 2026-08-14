"use client";

import { useLanguage } from "@/context/LanguageContext";

type ModuleKey = "grundlagen" | "material" | "uebungen" | "impulse" | "vorbereitung";

export default function ModuleShell({ moduleKey }: { moduleKey: ModuleKey }) {
  const { t } = useLanguage();
  const mod = t.modules[moduleKey];

  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <div className="mb-14">
        <p className="mb-3 font-display text-gold text-sm tracking-widest">
          {t.home.modulesTitle.toUpperCase()} {mod.numeral}
        </p>
        <h1 className="font-display text-4xl text-green mb-5 leading-tight">
          {mod.title}
        </h1>
        <p className="text-ink/70 max-w-xl leading-relaxed">{mod.intro}</p>
      </div>

      <div className="rounded-sm border border-dashed border-gold/60 bg-green-pale px-6 py-4 mb-14 text-sm text-green-soft">
        {t.modulePlaceholderBanner}
      </div>

      <div className="space-y-12">
        {mod.sections.map((s, i) => (
          <section key={s.title} className="border-t border-line pt-8">
            <p className="text-xs tracking-widest text-gold mb-2">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h2 className="font-display text-xl text-green mb-4">
              {s.title}
            </h2>
            <ul className="space-y-2">
              {s.points.map((p) => (
                <li
                  key={p}
                  className="flex gap-3 text-ink/75 text-sm leading-relaxed"
                >
                  <span className="text-gold mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                  {p}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
