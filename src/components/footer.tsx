export default function Footer() {
  return (
    <footer className="border-t border-line mt-24">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row justify-between gap-4 text-sm text-ink/60">
        <p>Sprachbewusst · KI — ein Selbstlern-Tool für Sozialberufe.</p>
        <p>© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
