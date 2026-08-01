import Link from "next/link";

const MODULES = [
  {
    numeral: "I",
    href: "/grundlagen",
    title: "Grundlagen",
    desc: "GER-Niveaustufen, Umwälzung, Handlungsfelder, Vorentlastung und Differenzierung im Unterricht.",
  },
  {
    numeral: "II",
    href: "/material",
    title: "Material mit KI aufbereiten",
    desc: "Texte und Übungen anpassen, ohne dass Fachbegriffe verloren gehen — inklusive Prompts.",
  },
  {
    numeral: "III",
    href: "/uebungen",
    title: "Übungen mit KI gestalten",
    desc: "Wiederholung, Umwälzung und Automatisierung mit passenden Prompt-Bausteinen.",
  },
  {
    numeral: "IV",
    href: "/impulse",
    title: "Impulse für Lernende",
    desc: "Autodidaktisches Lernen mit KI anleiten und im Unterricht nachbereiten.",
  },
  {
    numeral: "V",
    href: "/vorbereitung",
    title: "Unterrichtsvorbereitung mit KI",
    desc: "Sprachbewusste Unterrichtsplanung Schritt für Schritt, mit Prompts zum Copy-Paste.",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="mb-5 font-display text-sm tracking-widest text-gold">
            EIN SELBSTLERN-TOOL FÜR SOZIALBERUFE
          </p>
          <h1 className="font-display text-4xl sm:text-5xl text-green leading-tight mb-6 text-balance">
            Sprachbewussten Fachunterricht
            <br /> mit KI gestalten
          </h1>
          <p className="mx-auto max-w-xl text-ink/70 leading-relaxed mb-10">
            Für Lehrkräfte in Erziehungs- und Pflegeberufen ohne
            sprachdidaktische Ausbildung. Lernen Sie, Material vorzubereiten,
            Übungen zu gestalten und Ihren Lernenden Impulse für den eigenen
            KI-Einsatz zu geben.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/grundlagen"
              className="bg-green text-paper px-7 py-3 text-sm font-medium hover:bg-green-soft transition-colors"
            >
              Roter Faden starten
            </Link>
            <a href="/module" class="border border-line px-7 py-3 text-sm font-medium text-green hover:border-green-500 transition-colors"> module frei wählen
            </a>   
          </div>
        </div>
      </section>

      {/* Portfolio band */}
      <section className="mx-auto max-w-4xl px-6 py-10">
        <div className="rounded-sm border border-dashed border-gold/60 bg-green-pale px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="font-display text-green mb-1">Mein Portfolio</p>
            <p className="text-sm text-green-soft">
              Sammeln Sie angepasste Prompts und Material aus jedem Modul —
              zum Mitnehmen am Ende.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="text-sm text-green font-medium whitespace-nowrap hover:underline"
          >
            Portfolio ansehen →
          </Link>
        </div>
      </section>

      {/* Modules */}
      <section id="module" className="mx-auto max-w-6xl px-6 py-16 scroll-mt-20">
        <div className="mb-12 max-w-lg">
          <h2 className="font-display text-2xl text-green mb-3">Module</h2>
          <p className="text-ink/70 text-sm leading-relaxed">
            Roter Faden empfohlen (I → V), aber jedes Modul ist einzeln
            zugänglich.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MODULES.map((m) => (
            <Link
              key={m.href}
              href={m.href}
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
              Über / Hintergrund
            </h3>
            <p className="text-sm text-ink/65 leading-relaxed">
              Warum sprachbewusster Unterricht — und für wen dieses Angebot
              gemacht ist.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
