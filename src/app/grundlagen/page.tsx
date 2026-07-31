import ModuleShell from "@/components/ModuleShell";

export default function Grundlagen() {
  return (
    <ModuleShell
      numeral="I"
      title="Grundlagen"
      intro="Die sprachdidaktischen Basics, die Sie für sprachbewussten Fachunterricht brauchen — kompakt und ohne Vorwissen."
      sections={[
        {
          title: "Sprachdidaktik-Basics",
          points: [
            "Niveaustufen des GER",
            "Umwälzung — Wissen aktiv wiederholen und vertiefen",
            "Handlungsfelder: Lesen, Schreiben, Sprechen, Hören, Handeln/Agieren (Pragmatik)",
            "Vorentlastung — Lernende auf neue Inhalte vorbereiten",
          ],
        },
        {
          title: "Differenzierung im Unterricht",
          points: [
            "Einzel- und Gruppenarbeit gezielt einsetzen",
            "Think-Pair-Share und Placemat",
            "Methoden der inneren Differenzierung",
          ],
        },
      ]}
    />
  );
}
