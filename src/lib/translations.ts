export type Locale = "de" | "en" | "pt";

export const LOCALES: { code: Locale; label: string }[] = [
  { code: "de", label: "DE" },
  { code: "en", label: "EN" },
  { code: "pt", label: "PT" },
];

export const DEFAULT_LOCALE: Locale = "de";

const de = {
  nav: {
    brandSuffix: "KI",
    grundlagen: "I. Grundlagen",
    material: "II. Material mit KI",
    uebungen: "III. Übungen mit KI",
    impulse: "IV. Impulse für Lernende",
    vorbereitung: "V. Unterrichtsvorbereitung",
    portfolio: "Mein Portfolio",
    ueber: "Über",
    menuOpen: "Menü öffnen",
  },
  footer: {
    tagline: "Sprachbewusst · KI — ein Selbstlern-Tool für Sozialberufe.",
  },
  home: {
    eyebrow: "EIN SELBSTLERN-TOOL FÜR SOZIALBERUFE",
    titleLine1: "Sprachbewussten Fachunterricht",
    titleLine2: "mit KI gestalten",
    intro:
      "Für Lehrkräfte in Erziehungs- und Pflegeberufen ohne sprachdidaktische Ausbildung. Lernen Sie, Material vorzubereiten, Übungen zu gestalten und Ihren Lernenden Impulse für den eigenen KI-Einsatz zu geben.",
    ctaPrimary: "Roter Faden starten",
    ctaSecondary: "Module frei wählen",
    portfolioTitle: "Mein Portfolio",
    portfolioDesc:
      "Sammeln Sie angepasste Prompts und Material aus jedem Modul — zum Mitnehmen am Ende.",
    portfolioLink: "Portfolio ansehen →",
    modulesTitle: "Module",
    modulesIntro:
      "Roter Faden empfohlen (I → V), aber jedes Modul ist einzeln zugänglich.",
    ueberCardTitle: "Über / Hintergrund",
    ueberCardDesc:
      "Warum sprachbewusster Unterricht — und für wen dieses Angebot gemacht ist.",
    modules: [
      {
        numeral: "I",
        title: "Grundlagen",
        desc: "GER-Niveaustufen, Umwälzung, Handlungsfelder, Vorentlastung und Differenzierung im Unterricht.",
      },
      {
        numeral: "II",
        title: "Material mit KI aufbereiten",
        desc: "Texte und Übungen anpassen, ohne dass Fachbegriffe verloren gehen — inklusive Prompts.",
      },
      {
        numeral: "III",
        title: "Übungen mit KI gestalten",
        desc: "Wiederholung, Umwälzung und Automatisierung mit passenden Prompt-Bausteinen.",
      },
      {
        numeral: "IV",
        title: "Impulse für Lernende",
        desc: "Autodidaktisches Lernen mit KI anleiten und im Unterricht nachbereiten.",
      },
      {
        numeral: "V",
        title: "Unterrichtsvorbereitung mit KI",
        desc: "Sprachbewusste Unterrichtsplanung Schritt für Schritt, mit Prompts zum Copy-Paste.",
      },
    ],
  },
  modulePlaceholderBanner:
    "Platzhalter — Inhalte für dieses Modul folgen. Struktur unten zeigt die geplante Gliederung.",
  modules: {
    grundlagen: {
      numeral: "I",
      title: "Grundlagen",
      intro:
        "Die sprachdidaktischen Basics, die Sie für sprachbewussten Fachunterricht brauchen — kompakt und ohne Vorwissen.",
      sections: [
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
      ],
    },
    material: {
      numeral: "II",
      title: "Material mit KI aufbereiten",
      intro:
        "Texte und Materialien so anpassen, dass sie sprachlich zugänglich sind — ohne dass Fachbegriffe verloren gehen.",
      sections: [
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
      ],
    },
    uebungen: {
      numeral: "III",
      title: "Übungen mit KI gestalten",
      intro:
        "Mit KI erstellte Übungen gezielt einflechten, damit Fachsprache sitzt und automatisiert abrufbar wird.",
      sections: [
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
      ],
    },
    impulse: {
      numeral: "IV",
      title: "Impulse für Lernende",
      intro:
        "Anleitungen, wie Lernende generative KI selbst zum Sprachtraining nutzen können — und wie Sie das im Unterricht nachbereiten.",
      sections: [
        {
          title: "Autodidaktisches Lernen mit KI",
          points: [
            "Lernenden zeigen, wie sie KI eigenständig zum Üben nutzen",
            "Klare Leitplanken für sinnvollen, sicheren Einsatz",
          ],
        },
        {
          title: "Praxisbeispiele",
          points: [
            "Gesprächstechniken üben: aktives Zuhören",
            "Fachkonzepte: Literacy in der Erzieherausbildung",
            "Fachkonzepte: Herz-Kreislauf-System in Pflegeberufen",
          ],
        },
        {
          title: "Nachbereitung im Unterricht",
          points: [
            "Ergebnisse der Selbstlernphase gemeinsam einordnen",
            "Fehler und Missverständnisse gezielt aufgreifen",
          ],
        },
      ],
    },
    vorbereitung: {
      numeral: "V",
      title: "Unterrichtsvorbereitung mit KI",
      intro:
        "Sprachbewusste Unterrichtsplanung Schritt für Schritt — mit KI als Werkzeug, nicht als Ersatz für didaktisches Urteilsvermögen.",
      sections: [
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
      ],
    },
  },
  portfolio: {
    eyebrow: "DURCHGÄNGIGE FUNKTION",
    title: "Mein Portfolio",
    intro:
      "Hier sammeln Sie die Prompts und Materialien, die Sie in den Modulen angepasst haben — damit Sie am Ende etwas Konkretes mitnehmen können.",
    emptyTitle: "Noch leer",
    emptyDesc:
      "Sobald Sie in einem Modul einen Prompt speichern, erscheint er hier. Diese Funktion wird als Nächstes technisch umgesetzt.",
  },
  ueber: {
    eyebrow: "HINTERGRUND",
    title: "Über dieses Angebot",
    placeholder: "Platzhalter — Text folgt.",
    p1: "Fachkräfte in Sozialberufen — etwa in Erziehung oder Pflege — unterrichten oft fachlich hoch kompetent, aber ohne sprachdidaktische Ausbildung. Gleichzeitig hängt der Lernerfolg vieler Lernender maßgeblich davon ab, wie sprachbewusst Fachinhalte vermittelt werden.",
    p2: "Dieses Selbstlern-Tool zeigt, wie generative KI dabei helfen kann — bei der Aufbereitung von Material, bei Übungen und bei der eigenständigen Sprachförderung der Lernenden.",
  },
  legal: {
    impressumLink: "Impressum",
    datenschutzLink: "Datenschutz",
    impressum: {
      title: "Impressum",
      noticeTitle: "Hinweis",
      notice:
        "Dies ist eine Platzhalter-Seite. Die folgenden Angaben müssen durch die tatsächlichen Betreiberdaten ersetzt werden (Pflichtangaben nach § 5 DDG).",
      sectionAngaben: "Angaben gemäß § 5 DDG",
      name: "[Vollständiger Name / Firmenname]",
      address: "[Straße, Hausnummer]",
      cityLine: "[PLZ, Ort]",
      sectionContact: "Kontakt",
      email: "E-Mail: [E-Mail-Adresse einfügen]",
      phone: "Telefon: [Telefonnummer einfügen]",
      sectionResponsible: "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV",
      responsibleText: "[Name, Anschrift wie oben]",
    },
    datenschutz: {
      title: "Datenschutzerklärung",
      noticeTitle: "Hinweis",
      notice:
        "Dies ist eine Platzhalter-Seite. Vor Veröffentlichung sollte diese Erklärung an die tatsächliche Datenverarbeitung angepasst werden.",
      sectionOverviewTitle: "Verantwortlicher",
      overviewText: "[Name und Kontaktdaten des Verantwortlichen einfügen]",
      sectionFontsTitle: "Google Fonts",
      fontsText:
        "Diese Website nutzt Google Fonts zur Darstellung von Schriftarten. Beim Aufruf der Seite wird dabei die IP-Adresse an Server von Google übertragen. Details dazu in der Datenschutzerklärung von Google, oder die Schriften werden lokal eingebunden, um dies zu vermeiden.",
      sectionStorageTitle: "Spracheinstellung",
      storageText:
        "Ihre gewählte Sprache wird lokal im Browser gespeichert (localStorage), damit sie beim nächsten Besuch erhalten bleibt. Diese Information wird nicht an den Server übertragen.",
      sectionRightsTitle: "Ihre Rechte",
      rightsText:
        "Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten sowie das Recht auf Datenübertragbarkeit.",
    },
  },
};

const en: typeof de = {
  nav: {
    brandSuffix: "AI",
    grundlagen: "I. Foundations",
    material: "II. Material with AI",
    uebungen: "III. Exercises with AI",
    impulse: "IV. Prompts for Learners",
    vorbereitung: "V. Lesson Planning",
    portfolio: "My Portfolio",
    ueber: "About",
    menuOpen: "Open menu",
  },
  footer: {
    tagline: "Language-Aware · AI — a self-study tool for care professions.",
  },
  home: {
    eyebrow: "A SELF-STUDY TOOL FOR CARE PROFESSIONS",
    titleLine1: "Designing language-aware",
    titleLine2: "subject teaching with AI",
    intro:
      "For teachers in early-childhood education and nursing without training in language pedagogy. Learn to prepare materials, design exercises, and give your learners guidance on using AI themselves.",
    ctaPrimary: "Start the guided path",
    ctaSecondary: "Browse modules freely",
    portfolioTitle: "My Portfolio",
    portfolioDesc:
      "Collect adapted prompts and materials from every module — to take away at the end.",
    portfolioLink: "View portfolio →",
    modulesTitle: "Modules",
    modulesIntro:
      "A guided path (I → V) is recommended, but every module can be accessed on its own.",
    ueberCardTitle: "About / Background",
    ueberCardDesc:
      "Why language-aware teaching matters — and who this resource is for.",
    modules: [
      {
        numeral: "I",
        title: "Foundations",
        desc: "CEFR levels, spiral revisiting, skill areas, activating prior knowledge, and differentiation in the classroom.",
      },
      {
        numeral: "II",
        title: "Preparing material with AI",
        desc: "Adapt texts and exercises without losing technical vocabulary — including ready-made prompts.",
      },
      {
        numeral: "III",
        title: "Designing exercises with AI",
        desc: "Revision, spiral revisiting and automatization with matching prompt building blocks.",
      },
      {
        numeral: "IV",
        title: "Prompts for learners",
        desc: "Guiding self-directed learning with AI and following up on it in class.",
      },
      {
        numeral: "V",
        title: "Lesson planning with AI",
        desc: "Language-aware lesson planning step by step, with copy-paste prompts.",
      },
    ],
  },
  modulePlaceholderBanner:
    "Placeholder — content for this module is coming soon. The structure below shows the planned outline.",
  modules: {
    grundlagen: {
      numeral: "I",
      title: "Foundations",
      intro:
        "The basics of language pedagogy you need for language-aware subject teaching — compact and with no prior knowledge required.",
      sections: [
        {
          title: "Language pedagogy basics",
          points: [
            "CEFR proficiency levels",
            "Spiral revisiting — actively repeating and deepening knowledge",
            "Skill areas: reading, writing, speaking, listening, acting/pragmatics",
            "Activating prior knowledge before new content",
          ],
        },
        {
          title: "Differentiation in the classroom",
          points: [
            "Using individual and group work purposefully",
            "Think-pair-share and placemat activities",
            "Methods of internal differentiation",
          ],
        },
      ],
    },
    material: {
      numeral: "II",
      title: "Preparing material with AI",
      intro:
        "Adapting texts and materials so they are linguistically accessible — without losing technical vocabulary.",
      sections: [
        {
          title: "Principles",
          points: [
            "How to simplify texts linguistically without losing subject accuracy",
            "Keeping and deliberately introducing technical terms instead of avoiding them",
          ],
        },
        {
          title: "Copy-paste prompts",
          points: [
            "Categorized by purpose (simplify, structure, visualize)",
            "Ready to use in your own AI tools",
          ],
        },
        {
          title: "Practical examples from care professions",
          points: [
            "Early-childhood education: texts on literacy development",
            "Nursing: texts on basic physiology",
          ],
        },
      ],
    },
    uebungen: {
      numeral: "III",
      title: "Designing exercises with AI",
      intro:
        "Weaving in AI-generated exercises so technical language sticks and becomes second nature.",
      sections: [
        {
          title: "Types of exercises",
          points: [
            "Repeating technical terms and concepts",
            "Spiral revisiting — applying knowledge in new contexts",
            "Automatization — confident, quick application",
          ],
        },
        {
          title: "Prompt building blocks per exercise type",
          points: [
            "Blocks to combine depending on the learning goal",
            "Adaptable to proficiency level and professional field",
          ],
        },
      ],
    },
    impulse: {
      numeral: "IV",
      title: "Prompts for learners",
      intro:
        "Guidance on how learners can use generative AI themselves for language practice — and how to follow up on it in class.",
      sections: [
        {
          title: "Self-directed learning with AI",
          points: [
            "Showing learners how to use AI independently for practice",
            "Clear guardrails for sensible, safe use",
          ],
        },
        {
          title: "Practical examples",
          points: [
            "Practicing conversation techniques: active listening",
            "Subject concepts: literacy in early-childhood educator training",
            "Subject concepts: the cardiovascular system in nursing",
          ],
        },
        {
          title: "Follow-up in class",
          points: [
            "Jointly reviewing the results of the self-study phase",
            "Addressing errors and misunderstandings directly",
          ],
        },
      ],
    },
    vorbereitung: {
      numeral: "V",
      title: "Lesson planning with AI",
      intro:
        "Language-aware lesson planning step by step — with AI as a tool, not a replacement for pedagogical judgment.",
      sections: [
        {
          title: "Planning step by step",
          points: [
            "Formulating linguistic and subject-related learning goals",
            "Structuring the lesson with a language focus",
            "Considering differentiation from the start",
          ],
        },
        {
          title: "Copy-paste prompts",
          points: [
            "Usable for each individual planning step",
            "Critically review and adapt the results",
          ],
        },
      ],
    },
  },
  portfolio: {
    eyebrow: "ONGOING FEATURE",
    title: "My Portfolio",
    intro:
      "This is where you collect the prompts and materials you've adapted across the modules — so you have something concrete to take away at the end.",
    emptyTitle: "Still empty",
    emptyDesc:
      "As soon as you save a prompt in a module, it will appear here. This feature will be built next.",
  },
  ueber: {
    eyebrow: "BACKGROUND",
    title: "About this resource",
    placeholder: "Placeholder — text coming soon.",
    p1: "Professionals in care fields — such as early-childhood education or nursing — often teach with strong subject expertise but without training in language pedagogy. At the same time, many learners' success depends heavily on how language-aware the subject content is taught.",
    p2: "This self-study tool shows how generative AI can help — in preparing materials, in exercises, and in supporting learners' independent language development.",
  },
  legal: {
    impressumLink: "Legal Notice",
    datenschutzLink: "Privacy",
    impressum: {
      title: "Legal Notice",
      noticeTitle: "Note",
      notice:
        "This is a placeholder page. The following details must be replaced with the actual site operator's information (required under German law, § 5 DDG).",
      sectionAngaben: "Information pursuant to § 5 DDG",
      name: "[Full name / company name]",
      address: "[Street, house number]",
      cityLine: "[Postal code, city]",
      sectionContact: "Contact",
      email: "Email: [insert email address]",
      phone: "Phone: [insert phone number]",
      sectionResponsible: "Responsible for content pursuant to § 18 (2) MStV",
      responsibleText: "[Name, address as above]",
    },
    datenschutz: {
      title: "Privacy Policy",
      noticeTitle: "Note",
      notice:
        "This is a placeholder page. This policy should be adapted to reflect the actual data processing before publication.",
      sectionOverviewTitle: "Data controller",
      overviewText: "[Insert name and contact details of the data controller]",
      sectionFontsTitle: "Google Fonts",
      fontsText:
        "This website uses Google Fonts to display typefaces. When the page is loaded, your IP address is transmitted to Google's servers. See Google's privacy policy for details, or host the fonts locally to avoid this.",
      sectionStorageTitle: "Language preference",
      storageText:
        "Your chosen language is stored locally in your browser (localStorage) so it is remembered on your next visit. This information is not transmitted to the server.",
      sectionRightsTitle: "Your rights",
      rightsText:
        "You have the right to access, rectify, erase, and restrict the processing of your personal data, as well as the right to data portability.",
    },
  },
};

const pt: typeof de = {
  nav: {
    brandSuffix: "IA",
    grundlagen: "I. Fundamentos",
    material: "II. Material com IA",
    uebungen: "III. Exercícios com IA",
    impulse: "IV. Estímulos para Aprendizes",
    vorbereitung: "V. Planeamento de Aulas",
    portfolio: "Meu Portfólio",
    ueber: "Sobre",
    menuOpen: "Abrir menu",
  },
  footer: {
    tagline: "Consciência Linguística · IA — uma ferramenta de autoaprendizagem para profissões sociais.",
  },
  home: {
    eyebrow: "UMA FERRAMENTA DE AUTOAPRENDIZAGEM PARA PROFISSÕES SOCIAIS",
    titleLine1: "Ensino de conteúdos com",
    titleLine2: "consciência linguística e IA",
    intro:
      "Para profissionais da educação infantil e da enfermagem sem formação em didática de línguas. Aprenda a preparar materiais, criar exercícios e dar aos seus aprendizes orientações para usarem a IA por conta própria.",
    ctaPrimary: "Começar pelo percurso guiado",
    ctaSecondary: "Explorar módulos livremente",
    portfolioTitle: "Meu Portfólio",
    portfolioDesc:
      "Reúna prompts e materiais adaptados de cada módulo — para levar consigo no final.",
    portfolioLink: "Ver portfólio →",
    modulesTitle: "Módulos",
    modulesIntro:
      "Percurso guiado recomendado (I → V), mas cada módulo pode ser acessado livremente.",
    ueberCardTitle: "Sobre / Contexto",
    ueberCardDesc:
      "Por que o ensino com consciência linguística importa — e para quem esta oferta foi criada.",
    modules: [
      {
        numeral: "I",
        title: "Fundamentos",
        desc: "Níveis do QECR, revisão em espiral, áreas de competência, ativação de conhecimentos prévios e diferenciação em sala de aula.",
      },
      {
        numeral: "II",
        title: "Preparar material com IA",
        desc: "Adaptar textos e exercícios sem perder o vocabulário técnico — incluindo prompts prontos.",
      },
      {
        numeral: "III",
        title: "Criar exercícios com IA",
        desc: "Repetição, revisão em espiral e automatização com blocos de prompts correspondentes.",
      },
      {
        numeral: "IV",
        title: "Estímulos para aprendizes",
        desc: "Orientar a aprendizagem autodidata com IA e fazer o acompanhamento em sala de aula.",
      },
      {
        numeral: "V",
        title: "Planeamento de aulas com IA",
        desc: "Planeamento de aulas com consciência linguística passo a passo, com prompts prontos para copiar.",
      },
    ],
  },
  modulePlaceholderBanner:
    "Espaço reservado — o conteúdo deste módulo será adicionado em breve. A estrutura abaixo mostra a organização planeada.",
  modules: {
    grundlagen: {
      numeral: "I",
      title: "Fundamentos",
      intro:
        "As bases da didática de línguas necessárias para um ensino de conteúdos com consciência linguística — de forma compacta e sem conhecimentos prévios.",
      sections: [
        {
          title: "Bases da didática de línguas",
          points: [
            "Níveis do QECR (Quadro Europeu Comum de Referência)",
            "Revisão em espiral — repetir e aprofundar conhecimentos ativamente",
            "Áreas de competência: leitura, escrita, fala, escuta, ação/pragmática",
            "Ativação de conhecimentos prévios antes de novos conteúdos",
          ],
        },
        {
          title: "Diferenciação em sala de aula",
          points: [
            "Usar trabalho individual e em grupo de forma direcionada",
            "Think-pair-share e placemat",
            "Métodos de diferenciação interna",
          ],
        },
      ],
    },
    material: {
      numeral: "II",
      title: "Preparar material com IA",
      intro:
        "Adaptar textos e materiais para que sejam linguisticamente acessíveis — sem perder o vocabulário técnico.",
      sections: [
        {
          title: "Princípios",
          points: [
            "Como simplificar textos linguisticamente sem perder rigor técnico",
            "Manter e introduzir termos técnicos de forma deliberada em vez de evitá-los",
          ],
        },
        {
          title: "Prompts prontos para copiar",
          points: [
            "Organizados por finalidade (simplificar, estruturar, visualizar)",
            "Prontos para usar nas suas próprias ferramentas de IA",
          ],
        },
        {
          title: "Exemplos práticos de profissões sociais",
          points: [
            "Educação infantil: textos sobre desenvolvimento da literacia",
            "Enfermagem: textos sobre fundamentos do corpo humano",
          ],
        },
      ],
    },
    uebungen: {
      numeral: "III",
      title: "Criar exercícios com IA",
      intro:
        "Incorporar exercícios criados com IA de forma direcionada, para que a linguagem técnica seja consolidada e automatizada.",
      sections: [
        {
          title: "Tipos de exercícios",
          points: [
            "Repetição de termos técnicos e conceitos",
            "Revisão em espiral — aplicar conhecimentos em novos contextos",
            "Automatização — aplicação segura e rápida",
          ],
        },
        {
          title: "Blocos de prompts por tipo de exercício",
          points: [
            "Blocos para combinar conforme o objetivo de aprendizagem",
            "Adaptáveis ao nível e à área profissional",
          ],
        },
      ],
    },
    impulse: {
      numeral: "IV",
      title: "Estímulos para aprendizes",
      intro:
        "Orientações sobre como os aprendizes podem usar a IA generativa por conta própria para praticar a língua — e como fazer o acompanhamento em sala de aula.",
      sections: [
        {
          title: "Aprendizagem autodidata com IA",
          points: [
            "Mostrar aos aprendizes como usar a IA de forma autónoma para praticar",
            "Diretrizes claras para um uso sensato e seguro",
          ],
        },
        {
          title: "Exemplos práticos",
          points: [
            "Praticar técnicas de conversação: escuta ativa",
            "Conceitos técnicos: literacia na formação de educadores infantis",
            "Conceitos técnicos: sistema cardiovascular na enfermagem",
          ],
        },
        {
          title: "Acompanhamento em sala de aula",
          points: [
            "Analisar em conjunto os resultados da fase de autoaprendizagem",
            "Abordar diretamente erros e mal-entendidos",
          ],
        },
      ],
    },
    vorbereitung: {
      numeral: "V",
      title: "Planeamento de aulas com IA",
      intro:
        "Planeamento de aulas com consciência linguística, passo a passo — com a IA como ferramenta, não como substituto do julgamento didático.",
      sections: [
        {
          title: "Planeamento passo a passo",
          points: [
            "Formular objetivos de aprendizagem linguísticos e técnicos",
            "Estruturar a aula com foco linguístico",
            "Considerar a diferenciação desde o início",
          ],
        },
        {
          title: "Prompts prontos para copiar",
          points: [
            "Utilizáveis em cada etapa do planeamento",
            "Rever e adaptar os resultados de forma crítica",
          ],
        },
      ],
    },
  },
  portfolio: {
    eyebrow: "FUNCIONALIDADE CONTÍNUA",
    title: "Meu Portfólio",
    intro:
      "Aqui reúne os prompts e materiais que adaptou em cada módulo — para ter algo concreto para levar consigo no final.",
    emptyTitle: "Ainda vazio",
    emptyDesc:
      "Assim que guardar um prompt num módulo, ele aparecerá aqui. Esta funcionalidade será implementada a seguir.",
  },
  ueber: {
    eyebrow: "CONTEXTO",
    title: "Sobre esta oferta",
    placeholder: "Espaço reservado — texto em breve.",
    p1: "Profissionais de áreas sociais — como educação infantil ou enfermagem — frequentemente ensinam com grande competência técnica, mas sem formação em didática de línguas. Ao mesmo tempo, o sucesso de muitos aprendizes depende fortemente de quão consciente linguisticamente o conteúdo técnico é transmitido.",
    p2: "Esta ferramenta de autoaprendizagem mostra como a IA generativa pode ajudar — na preparação de materiais, em exercícios e no apoio ao desenvolvimento linguístico autónomo dos aprendizes.",
  },
  legal: {
    impressumLink: "Aviso Legal",
    datenschutzLink: "Privacidade",
    impressum: {
      title: "Aviso Legal",
      noticeTitle: "Aviso",
      notice:
        "Esta é uma página provisória. As informações abaixo devem ser substituídas pelos dados reais do responsável pelo site (obrigatório segundo a lei alemã, § 5 DDG).",
      sectionAngaben: "Informações nos termos do § 5 DDG",
      name: "[Nome completo / nome da empresa]",
      address: "[Rua, número]",
      cityLine: "[Código postal, cidade]",
      sectionContact: "Contacto",
      email: "E-mail: [inserir endereço de e-mail]",
      phone: "Telefone: [inserir número de telefone]",
      sectionResponsible: "Responsável pelo conteúdo nos termos do § 18 (2) MStV",
      responsibleText: "[Nome, morada como acima]",
    },
    datenschutz: {
      title: "Política de Privacidade",
      noticeTitle: "Aviso",
      notice:
        "Esta é uma página provisória. Esta política deve ser adaptada ao tratamento de dados real antes da publicação.",
      sectionOverviewTitle: "Responsável pelo tratamento",
      overviewText: "[Inserir nome e dados de contacto do responsável]",
      sectionFontsTitle: "Google Fonts",
      fontsText:
        "Este site utiliza Google Fonts para exibir tipos de letra. Ao carregar a página, o seu endereço IP é transmitido aos servidores da Google. Consulte a política de privacidade da Google para mais detalhes, ou aloje os tipos de letra localmente para evitar isto.",
      sectionStorageTitle: "Preferência de idioma",
      storageText:
        "O idioma escolhido é guardado localmente no seu navegador (localStorage), para ser lembrado na próxima visita. Esta informação não é transmitida ao servidor.",
      sectionRightsTitle: "Os seus direitos",
      rightsText:
        "Tem o direito de aceder, retificar, apagar e limitar o tratamento dos seus dados pessoais, bem como o direito à portabilidade dos dados.",
    },
  },
};

export const translations = { de, en, pt };
