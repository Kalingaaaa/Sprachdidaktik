import ModuleShell from "@/components/ModuleShell";

export default function Vorbereitung() {
  return (
    <ModuleShell
      numeral="V"
      title="Unterrichtsvorbereitung mit KI"
      intro="Sprachbewusste Unterrichtsplanung Schritt für Schritt — mit KI als Werkzeug, nicht als Ersatz für didaktisches Urteilsvermögen."
      sections={[
        {
          title: "Planung Schritt für Schritt",
          points: [
            "Lernziele sprachlich und fachlich formulieren",
            "Ablauf mit Sprachfokus strukturieren",
            "Differenzierung von Anfang an mitdenken",
          ],
        },
        {
          title: "Prompts zum Copy-Paste",
          points: [
            "Für die einzelnen Planungsschritte einsetzbar",
            "Ergebnisse kritisch prüfen und anpassen",
          ],
        },
      ]}
    />
  );
}
