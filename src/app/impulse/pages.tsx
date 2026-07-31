import ModuleShell from "@/components/ModuleShell";

export default function Uebungen() {
  return (
    <ModuleShell
      numeral="III"
      title="Übungen mit KI gestalten"
      intro="Mit KI erstellte Übungen gezielt einflechten, damit Fachsprache sitzt und automatisiert abrufbar wird."
      sections={[
        {
          title: "Übungstypen",
          points: [
            "Wiederholung von Fachbegriffen und Konzepten",
            "Umwälzung — Wissen in neuen Kontexten anwenden",
            "Automatisierung — sichere, schnelle Anwendung",
          ],
        },
        {
          title: "Prompt-Bausteine je Übungstyp",
          points: [
            "Bausteine zum Kombinieren je nach Lernziel",
            "Anpassbar an Niveaustufe und Berufsfeld",
          ],
        },
      ]}
    />
  );
}
