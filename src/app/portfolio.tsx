export default function Portfolio() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <p className="mb-3 font-display text-gold text-sm tracking-widest">
        DURCHGÄNGIGE FUNKTION
      </p>
      <h1 className="font-display text-4xl text-green mb-5 leading-tight">
        Mein Portfolio
      </h1>
      <p className="text-ink/70 max-w-xl leading-relaxed mb-14">
        Hier sammeln Sie die Prompts und Materialien, die Sie in den Modulen
        angepasst haben — damit Sie am Ende etwas Konkretes mitnehmen können.
      </p>

      <div className="rounded-sm border border-dashed border-gold/60 bg-green-pale px-6 py-10 text-center">
        <p className="font-display text-green mb-2">Noch leer</p>
        <p className="text-sm text-green-soft max-w-sm mx-auto">
          Sobald Sie in einem Modul einen Prompt speichern, erscheint er hier.
          Diese Funktion wird als Nächstes technisch umgesetzt.
        </p>
      </div>
    </main>
  );
}
