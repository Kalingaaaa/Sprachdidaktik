import ModuleShell from "@/components/ModuleShell";

export default function Material() {
  return (
    <ModuleShell
      numeral="II"
      title="Material mit KI aufbereiten"
      intro="Texte und Materialien so anpassen, dass sie sprachlich zugänglich sind — ohne dass Fachbegriffe verloren gehen."
      sections={[
        {
          title: "Prinzipien",
          points: [
            "Wie Sie Texte sprachlich vereinfachen, ohne Fachlichkeit zu verlieren",
            "Fachbegriffe gezielt erhalten und einführen statt vermeiden",
          ],
        },
        {
          title: "Prompts zum Copy-Paste",
          points: [
            "Kategorisiert nach Zweck (vereinfachen, gliedern, visualisieren)",
            "Direkt einsetzbar in eigenen KI-Tools",
          ],
        },
        {
          title: "Praxisbeispiele aus Sozialberufen",
          points: [
            "Erziehung: Fachtexte zur Literacy-Förderung",
            "Pflege: Fachtexte zu körperlichen Grundlagen",
          ],
        },
      ]}
    />
  );
}
