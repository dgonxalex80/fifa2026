const footballRuleBasics = [
  {
    title: "Equipos y jugadores",
    detail: "Cada partido lo disputan dos equipos de 11 jugadores, incluido un arquero. Un equipo no puede continuar si queda con menos de siete jugadores."
  },
  {
    title: "Duracion del partido",
    detail: "El juego tiene dos tiempos de 45 minutos. El arbitro agrega tiempo adicional por interrupciones, sustituciones, lesiones, perdida de tiempo y revisiones."
  },
  {
    title: "Objetivo: marcar goles",
    detail: "Gana el equipo que marca mas goles. El gol cuenta cuando el balon cruza completamente la linea de meta entre los postes y debajo del travesano."
  },
  {
    title: "Uso de manos y brazos",
    detail: "Los jugadores de campo no pueden jugar deliberadamente el balon con la mano o el brazo. El arquero puede hacerlo dentro de su propia area, con restricciones."
  },
  {
    title: "Fuera de juego",
    detail: "Un jugador puede ser sancionado si participa activamente estando mas cerca de la linea de gol rival que el balon y el penultimo adversario."
  },
  {
    title: "Faltas",
    detail: "Las infracciones se castigan con tiro libre directo, tiro libre indirecto o penal segun la accion y la zona del campo."
  },
  {
    title: "Reanudaciones",
    detail: "El juego se reanuda con saque inicial, saque de banda, saque de meta, tiro de esquina, balon a tierra, tiro libre o penal."
  },
  {
    title: "Eliminacion directa",
    detail: "Si un partido eliminatorio termina empatado, se juega prorroga. Si el empate persiste, se define con tiros desde el punto penal."
  }
];

const worldCup2026RuleChanges = [
  {
    value: "5s",
    title: "Saque de banda con cuenta visual",
    detail: "Si el arbitro considera que un equipo demora injustamente un saque de banda, pita e inicia una cuenta de cinco segundos. Si no se ejecuta, el saque pasa al rival."
  },
  {
    value: "5s",
    title: "Saque de meta con cuenta visual",
    detail: "Si un saque de meta se retrasa deliberadamente, el arbitro inicia una cuenta de cinco segundos. Si el balon no entra en juego, se concede tiro de esquina al rival."
  },
  {
    value: "8s",
    title: "Arquero con balon en manos",
    detail: "El arquero no puede controlar el balon con manos o brazos por mas de ocho segundos dentro de su area. Si excede el limite, se concede tiro de esquina al rival."
  },
  {
    value: "10s",
    title: "Sustituciones mas rapidas",
    detail: "El jugador sustituido debe salir en diez segundos desde la senal del cambio. Si se demora, el sustituto no entra hasta la primera interrupcion despues de un minuto de juego."
  },
  {
    value: "1m",
    title: "Atencion medica fuera del campo",
    detail: "Si una lesion requiere evaluacion en campo o detiene el juego, el jugador atendido debe salir y permanecer fuera durante un minuto tras la reanudacion."
  }
];

const worldCupTiebreakRules = [
  {
    title: "VAR: corners mal concedidos",
    detail: "Las competiciones pueden permitir revision de tiros de esquina claramente mal otorgados, siempre que se corrijan de inmediato y sin retrasar la reanudacion."
  },
  {
    title: "Fuera de juego semiautomatico",
    detail: "La tecnologia semiautomatica de fuera de juego sigue como apoyo para decisiones de posicion adelantada en torneos FIFA."
  },
  {
    title: "Saque de banda demorado",
    detail: "Aplicacion: saque para el equipo contrario."
  },
  {
    title: "Saque de meta o arquero demorado",
    detail: "Aplicacion: tiro de esquina para el rival, tanto por saque de meta demorado como por exceder los ocho segundos con el balon en manos."
  }
];

const rulesSources = [
  {
    title: "Leyes del Juego IFAB",
    detail: "Base normativa universal del futbol: jugadores, duracion, gol, faltas, fuera de juego y reanudaciones.",
    url: "https://www.theifab.com/laws/latest/"
  },
  {
    title: "IFAB AGM 2026",
    detail: "FIFA/IFAB confirma que los cambios de ritmo de juego y VAR se implementan en el Mundial FIFA 2026 y otras competiciones.",
    url: "https://inside.fifa.com/refereeing/media-releases/ifab-introduces-further-measures-improve-match-flow-player-behaviour"
  },
  {
    title: "Cambios IFAB 2026/27",
    detail: "Documento oficial con cuenta de cinco segundos, sustituciones con limite, tratamiento medico y ampliacion del VAR.",
    url: "https://downloads.theifab.com/downloads/changes-to-the-laws-of-the-game-202627"
  },
  {
    title: "Regla 15: saque de banda",
    detail: "Texto de la regla actualizada: cuenta visual de cinco segundos y saque para el rival si no se ejecuta.",
    url: "https://www.thefa.com/football-rules-governance/lawsandrules/laws/football-11-11/law-15---the-throw-in"
  },
  {
    title: "Regla 16: saque de meta",
    detail: "Texto de la regla actualizada: cuenta visual de cinco segundos y corner para el rival si se demora.",
    url: "https://www.thefa.com/football-rules-governance/lawsandrules/laws/football-11-11/law-16---the-goal-kick"
  }
];

function getRulesExportRows() {
  return [
    ...footballRuleBasics.map((item) => ["Reglas fundamentales", item.title, item.detail]),
    ...worldCup2026RuleChanges.map((item) => ["Nuevas reglas 2026", item.title, item.detail]),
    ...worldCupTiebreakRules.map((item) => ["VAR y aplicacion", item.title, item.detail]),
    ...rulesSources.map((item) => ["Fuente", item.title, item.url])
  ];
}

function renderRules() {
  if (!$("#rulesSummaryCards")) return;

  $("#rulesSummaryCards").innerHTML = [
    ["Jugadores", "11", "por equipo en cancha"],
    ["Tiempo", "90", "minutos mas adicion"],
    ["Saque banda/meta", "5s", "nueva cuenta si hay demora"],
    ["VAR", "+1", "caso revisable destacado"]
  ].map(([label, value, detail]) => `
    <article class="kpi"><span>${label}</span><strong>${value}</strong><small>${detail}</small></article>
  `).join("");

  $("#footballRulesGrid").innerHTML = footballRuleBasics.map((item, index) => `
    <article class="rule-card">
      <span>${index + 1}</span>
      <strong>${item.title}</strong>
      <p>${item.detail}</p>
    </article>
  `).join("");

  $("#worldCupRuleHighlights").innerHTML = worldCup2026RuleChanges.map((item) => `
    <article class="rule-highlight">
      <span>${item.value}</span>
      <strong>${item.title}</strong>
      <p>${item.detail}</p>
    </article>
  `).join("");

  $("#tiebreakRulesGrid").innerHTML = worldCupTiebreakRules.map((item) => `
    <article class="rule-card">
      <strong>${item.title}</strong>
      <p>${item.detail}</p>
    </article>
  `).join("");

  $("#rulesSourcesGrid").innerHTML = rulesSources.map((item) => `
    <article class="source-card">
      <strong>${item.title}</strong>
      <p>${item.detail}</p>
      <a href="${item.url}" target="_blank" rel="noopener noreferrer">Abrir fuente</a>
    </article>
  `).join("");
}
