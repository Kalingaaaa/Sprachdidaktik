"use client";

import { LOCALES } from "@/lib/translations";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-full border border-line px-1 py-1">
      {LOCALES.map((l) => (
        <button
          key={l.code}
          onClick={() => setLocale(l.code)}
          className={`rounded-full px-2.5 py-1 text-xs font-medium transition-colors ${
            locale === l.code
              ? "bg-green text-paper"
              : "text-ink/60 hover:text-green"
          }`}
          aria-pressed={locale === l.code}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
