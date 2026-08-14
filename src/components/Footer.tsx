"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-line mt-24">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row justify-between gap-4 text-sm text-ink/60">
        <p>{t.footer.tagline}</p>
        <div className="flex items-center gap-5">
          <Link href="/impressum" className="hover:text-green transition-colors">
            {t.legal.impressumLink}
          </Link>
          <Link href="/datenschutz" className="hover:text-green transition-colors">
            {t.legal.datenschutzLink}
          </Link>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
