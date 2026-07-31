type Section = {
  title: string;
  points: string[];
};

export default function ModuleShell({
  numeral,
  title,
  intro,
  sections,
}: {
  numeral: string;
  title: string;
  intro: string;
  sections: Section[];
}) {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <div className="mb-14">
        <p className="mb-3 font-display text-gold text-sm tracking-widest">
          MODUL {numeral}
        </p>
        <h1 className="font-display text-4xl text-green mb-5 leading-tight">
          {title}
        </h1>
        <p className="text-ink/70 max-w-xl leading-relaxed">{intro}</p>
      </div>

      <div className="rounded-sm border border-dashed border-gold/60 bg-green-pale px-6 py-4 mb-14 text-sm text-green-soft">
        Platzhalter — Inhalte für dieses Modul folgen. Struktur unten zeigt die
        geplante Gliederung.
      </div>

      <div className="space-y-12">
        {sections.map((s, i) => (
          <section key={s.title} className="border-t border-line pt-8">
            <p className="text-xs tracking-widest text-gold mb-2">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h2 className="font-display text-xl text-green mb-4">
              {s.title}
            </h2>
            <ul className="space-y-2">
              {s.points.map((p) => (
                <li key={p} className="flex gap-3 text-ink/75 text-sm leading-relaxed">
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
