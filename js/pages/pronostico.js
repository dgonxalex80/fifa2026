const predictionStorageKey = "fifa2026-prediction";
const predictionDraftKey = "fifa2026-prediction-draft";
const predictionOutcomes = ["home", "draw", "away"];

function getPredictionTeamOptions() {
  return Object.values(groups)
    .flatMap((rows) => rows.map(([team]) => team))
    .sort((a, b) => a.localeCompare(b));
}

function getPredictionMatches() {
  return matches
    .filter((match) => match.phase === "Grupos" && match.group)
    .sort((a, b) => a.group.localeCompare(b.group) || new Date(a.date.replace(" ", "T")) - new Date(b.date.replace(" ", "T")) || a.id - b.id);
}

function getEmptyPrediction() {
  return {
    participant: "",
    contact: "",
    champion: "",
    topScorer: "",
    savedAt: "",
    matches: {},
    knockout: {}
  };
}

function normalizePrediction(rawPrediction) {
  const prediction = { ...getEmptyPrediction(), ...rawPrediction };
  prediction.matches = prediction.matches || {};
  prediction.knockout = prediction.knockout || {};

  Object.entries(prediction.matches).forEach(([matchId, value]) => {
    if (value?.outcome) return;
    const homeScore = value?.homeScore;
    const awayScore = value?.awayScore;
    if (homeScore === "" || awayScore === "" || homeScore == null || awayScore == null) return;
    const home = Number(homeScore);
    const away = Number(awayScore);
    if (!Number.isFinite(home) || !Number.isFinite(away)) return;
    prediction.matches[matchId] = { outcome: home > away ? "home" : home < away ? "away" : "draw" };
  });

  return prediction;
}

function readPrediction(preferDraft = true) {
  const source = preferDraft
    ? localStorage.getItem(predictionDraftKey) || localStorage.getItem(predictionStorageKey)
    : localStorage.getItem(predictionStorageKey);
  if (!source) return getEmptyPrediction();
  try {
    return normalizePrediction(JSON.parse(source));
  } catch (error) {
    return getEmptyPrediction();
  }
}

function writePredictionDraft() {
  const draft = collectPredictionFromForm();
  localStorage.setItem(predictionDraftKey, JSON.stringify(draft));
  renderPredictionBoard(draft);
  renderPredictionSummary(draft);
  setPredictionStatus("Cambios sin guardar");
}

function collectPredictionFromForm() {
  const prediction = readPrediction();
  prediction.participant = $("#predictionParticipant")?.value.trim() || "";
  prediction.contact = $("#predictionContact")?.value.trim() || "";
  prediction.topScorer = $("#predictionTopScorer")?.value.trim() || "";
  prediction.matches = { ...prediction.matches };
  prediction.knockout = { ...prediction.knockout };

  $$(".prediction-choice.active[data-stage='group']").forEach((button) => {
    prediction.matches[button.dataset.matchId] = { outcome: button.dataset.outcome };
  });

  $$(".prediction-choice.active[data-stage='knockout']").forEach((button) => {
    prediction.knockout[button.dataset.matchKey] = button.dataset.outcome;
  });

  prediction.champion = getPredictedChampion(prediction);
  return prediction;
}

function savePrediction() {
  const prediction = collectPredictionFromForm();
  prediction.savedAt = new Date().toISOString();
  localStorage.setItem(predictionStorageKey, JSON.stringify(prediction));
  localStorage.setItem(predictionDraftKey, JSON.stringify(prediction));
  renderPredictionBoard(prediction);
  renderPredictionSummary(prediction);
  setPredictionStatus(`Guardado ${new Date(prediction.savedAt).toLocaleString("es-CO", { dateStyle: "short", timeStyle: "short" })}`);
}

function clearPrediction() {
  localStorage.removeItem(predictionStorageKey);
  localStorage.removeItem(predictionDraftKey);
  renderPredictions();
  setPredictionStatus("Sin guardar");
}

function setPredictionStatus(text) {
  const status = $("#predictionSaveStatus");
  if (status) status.textContent = text;
}

function renderPredictionControls() {
  const groupFilter = $("#predictionGroupFilter");
  if (!groupFilter) return;

  groupFilter.innerHTML = [`<option value="todos">Todos los grupos</option>`, ...Object.keys(groups).map((group) => `<option value="${group}">Grupo ${group}</option>`)].join("");
  groupFilter.value = groupFilter.value || "todos";
}

function renderPredictions() {
  const prediction = readPrediction();
  if (!$("#predictionFixtures")) return;

  $("#predictionParticipant").value = prediction.participant || "";
  $("#predictionContact").value = prediction.contact || "";
  $("#predictionTopScorer").value = prediction.topScorer || "";
  renderPredictionControls();
  renderPredictionBoard(prediction);
  renderPredictionSummary(prediction);

  if (prediction.savedAt) {
    setPredictionStatus(`Guardado ${new Date(prediction.savedAt).toLocaleString("es-CO", { dateStyle: "short", timeStyle: "short" })}`);
  } else {
    setPredictionStatus("Sin guardar");
  }
}

function renderPredictionBoard(prediction = readPrediction()) {
  const container = $("#predictionFixtures");
  if (!container) return;
  container.innerHTML = renderPredictionKnockout(prediction);
}

function renderPredictionGroupMatch(match, prediction) {
  const selected = prediction.matches[String(match.id)]?.outcome || "";
  return `
    <article class="prediction-fixture" data-match-id="${match.id}">
      <div class="prediction-fixture-meta">
        <strong>Grupo ${match.group}</strong>
        <small>${formatDate(match.date)} · ${match.city}</small>
      </div>
      <div class="prediction-match-teams">
        <span>${teamLabel(match.home)}</span>
        <span class="prediction-versus">vs</span>
        <span>${teamLabel(match.away)}</span>
      </div>
      <div class="prediction-choice-group" role="group" aria-label="Pronostico ${match.home} vs ${match.away}">
        ${renderPredictionChoice("group", String(match.id), "home", match.home, selected)}
        ${renderPredictionChoice("group", String(match.id), "draw", "Empate", selected)}
        ${renderPredictionChoice("group", String(match.id), "away", match.away, selected)}
      </div>
    </article>
  `;
}

function renderPredictionChoice(stage, key, outcome, label, selected) {
  return `
    <button class="prediction-choice${selected === outcome ? " active" : ""}" type="button" data-stage="${stage}" data-${stage === "group" ? "match-id" : "match-key"}="${key}" data-outcome="${outcome}">
      ${label}
    </button>
  `;
}

function getPredictionQualifiers() {
  return getQualifiedTeams(getGroupStandings());
}

function phaseCode(phase) {
  return phase === "Dieciseisavos" ? "D16" : phase === "Octavos" ? "OF" : phase === "Cuartos" ? "CF" : phase === "Semifinal" ? "SF" : phase === "Final" ? "F" : "TP";
}

function getPredictedKnockoutRounds(prediction = readPrediction()) {
  const standings = getGroupStandings();
  const qualifiers = getPredictionQualifiers();
  const usedThirdGroups = new Set();
  const winners = {};
  const losers = {};
  const phaseOrder = ["Dieciseisavos", "Octavos", "Cuartos", "Semifinal", "Tercer puesto", "Final"];

  return phaseOrder.map((phase) => {
    const code = phaseCode(phase);
    const scheduledMatches = knockoutSchedule
      .filter((round) => round.phase === phase)
      .flatMap((round) => round.matches);
    const roundMatches = scheduledMatches.map(([seedHome, seedAway], index) => {
      const key = `${code}-${index + 1}`;
      const home = resolvePredictionSeed(seedHome, qualifiers, winners, losers, standings, usedThirdGroups);
      const away = resolvePredictionSeed(seedAway, qualifiers, winners, losers, standings, usedThirdGroups);
      const outcome = prediction.knockout[key] || "";
      const winner = outcome === "home" ? home : outcome === "away" ? away : "";
      const loser = outcome === "home" ? away : outcome === "away" ? home : "";
      if (winner && !isPredictionPlaceholder(winner)) winners[key] = winner;
      if (loser && !isPredictionPlaceholder(loser)) losers[key] = loser;
      return { key, phase, home, away, outcome, winner };
    });
    return { phase, code, matches: roundMatches };
  });
}

function isPredictionPlaceholder(value) {
  return !value ||
    value.startsWith("Ganador") ||
    value.startsWith("Clasificado") ||
    value.startsWith("Perdedor") ||
    /^[123]o Grupo /.test(value) ||
    /^Mejor 3o/.test(value) ||
    /^\d+o mejor tercero/.test(value);
}

function resolvePredictionSeed(seed, qualifiers, winners, losers, standings = getGroupStandings(), usedThirdGroups = new Set()) {
  if (qualifiers[seed]) return qualifiers[seed];
  const thirdPlaceTeam = typeof resolveThirdPlaceGroupSeed === "function" ? resolveThirdPlaceGroupSeed(seed, standings, usedThirdGroups) : "";
  if (thirdPlaceTeam) return thirdPlaceTeam;
  if (/^[123]G\d+$/.test(seed) || /^3G_[A-Z]+$/.test(seed)) return getSeedLabel(seed);
  const winnerMatch = seed.match(/^Ganador (D16|OF|CF|SF)-?(\d+)$/);
  if (winnerMatch) return winners[`${winnerMatch[1]}-${Number(winnerMatch[2])}`] || seed;
  const loserMatch = seed.match(/^Perdedor (SF)-?(\d+)$/);
  if (loserMatch) return losers[`${loserMatch[1]}-${Number(loserMatch[2])}`] || seed;
  return seed;
}

function getPredictedChampion(prediction = readPrediction()) {
  const finalRound = getPredictedKnockoutRounds(prediction).find((round) => round.phase === "Final");
  return finalRound?.matches[0]?.winner || "";
}

function renderPredictionKnockout(prediction = readPrediction()) {
  const standings = getGroupStandings();
  const closedGroups = Object.values(standings).filter(isGroupComplete).length;
  const statusLabel = closedGroups === Object.keys(groups).length ? "Clasificados definidos" : String(closedGroups) + "/12 grupos cerrados";
  const rounds = getPredictedKnockoutRounds(prediction);
  return `
    <section class="prediction-section prediction-knockout-section">
      <div class="panel-head prediction-subhead">
        <h3>Llaves del pronostico</h3>
        <span class="status-pill">${statusLabel}</span>
      </div>
      <div class="prediction-knockout-grid">
        ${rounds.map((round) => `
          <article class="prediction-round-card">
            <h4>${round.phase}</h4>
            <div class="prediction-round-matches">
              ${round.matches.map((match) => renderPredictionKnockoutMatch(match, prediction)).join("")}
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderPredictionKnockoutMatch(match, prediction) {
  const canPick = !isPredictionPlaceholder(match.home) && !isPredictionPlaceholder(match.away);
  const selected = prediction.knockout[match.key] || "";
  return `
    <div class="prediction-knockout-match${canPick ? "" : " disabled"}">
      <div class="prediction-match-teams compact">
        <span>${teamLabel(match.home)}</span>
        <span class="prediction-versus">vs</span>
        <span>${teamLabel(match.away)}</span>
      </div>
      <div class="prediction-choice-group two-way" role="group" aria-label="Ganador ${match.home} vs ${match.away}">
        ${renderPredictionChoice("knockout", match.key, "home", match.home, selected)}
        ${renderPredictionChoice("knockout", match.key, "away", match.away, selected)}
      </div>
    </div>
  `;
}

function renderPredictionSummary(prediction = readPrediction()) {
  const container = $("#predictionSummaryCards");
  if (!container) return;
  const knockoutMatches = getPredictedKnockoutRounds(prediction).flatMap((round) => round.matches);
  const availableKnockoutMatches = knockoutMatches.filter((match) => !isPredictionPlaceholder(match.home) && !isPredictionPlaceholder(match.away));
  const completed = availableKnockoutMatches.filter((match) => prediction.knockout[match.key]).length;
  const champion = getPredictedChampion(prediction) || "Por definir";
  const savedLabel = prediction.savedAt
    ? new Date(prediction.savedAt).toLocaleString("es-CO", { dateStyle: "short", timeStyle: "short" })
    : "pendiente";

  container.innerHTML = [
    ["Participante", prediction.participant || "Sin nombre", prediction.contact || "identificador pendiente"],
    ["Pronosticos", String(completed) + "/" + String(availableKnockoutMatches.length), "desde dieciseisavos"],
    ["Campeon", champion, prediction.topScorer ? `Goleador: ${prediction.topScorer}` : "goleador pendiente"],
    ["Ultimo guardado", savedLabel, "almacenado en este navegador"]
  ].map(([label, value, detail]) => `
    <article class="kpi"><span>${label}</span><strong>${value}</strong><small>${detail}</small></article>
  `).join("");
}

function bindPredictionEvents() {
  if (!$("#predictionFixtures")) return;
  ["#predictionParticipant", "#predictionContact", "#predictionTopScorer"].forEach((selector) => {
    const element = $(selector);
    if (element) element.addEventListener("input", writePredictionDraft);
  });
  $("#predictionGroupFilter")?.addEventListener("change", () => renderPredictionBoard(readPrediction()));
  $("#predictionFixtures")?.addEventListener("click", (event) => {
    const button = event.target.closest(".prediction-choice");
    if (!button) return;
    const group = button.closest(".prediction-choice-group");
    group?.querySelectorAll(".prediction-choice").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    writePredictionDraft();
  });
  $("#savePrediction")?.addEventListener("click", savePrediction);
  $("#downloadPredictionPdf")?.addEventListener("click", generatePredictionPdf);
  $("#clearPrediction")?.addEventListener("click", clearPrediction);
}

function getPredictionExportRows() {
  const prediction = readPrediction(false);
  const header = [["participante", "identificador", "campeon", "goleador", "guardado", "fase", "partido_id", "grupo", "fecha", "local", "pronostico", "visitante", "ganador"]];
  const knockoutRows = getPredictedKnockoutRounds(prediction).flatMap((round) => round.matches.map((match) => [
    prediction.participant,
    prediction.contact,
    getPredictedChampion(prediction),
    prediction.topScorer,
    prediction.savedAt,
    round.phase,
    match.key,
    "",
    "",
    match.home,
    prediction.knockout[match.key] || "",
    match.away,
    match.winner || ""
  ]));
  return [...header, ...knockoutRows];
}

function escapePredictionPdfText(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getPredictionOutcomeLabel(match, outcome) {
  if (outcome === "home") return match.home;
  if (outcome === "away") return match.away;
  if (outcome === "draw") return "Empate";
  return "Sin seleccionar";
}

function getPredictionPdfFilename(prediction) {
  const participant = normalizeText(prediction.participant || "participante")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "") || "participante";
  return `pronostico-fifa2026-${participant}.pdf`;
}

function buildPredictionPdfHtml(prediction) {
  const savedAt = prediction.savedAt
    ? new Date(prediction.savedAt).toLocaleString("es-CO", { dateStyle: "medium", timeStyle: "short" })
    : "Pendiente de guardar";
  const champion = getPredictedChampion(prediction) || "Por definir";
  const logoUrl = new URL("./img/figuras/fifa2026.png", window.location.href).href;
  const knockoutHtml = getPredictedKnockoutRounds(prediction).map((round) => `
    <section class="card">
      <h3>${escapePredictionPdfText(round.phase)}</h3>
      ${round.matches.map((match) => `
        <p><span>${escapePredictionPdfText(match.home)} vs ${escapePredictionPdfText(match.away)}</span><strong>${escapePredictionPdfText(match.winner || "Por definir")}</strong></p>
      `).join("")}
    </section>
  `).join("");

  return `<!doctype html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>${escapePredictionPdfText(getPredictionPdfFilename(prediction))}</title>
  <style>
    @page { size: A4; margin: 14mm; }
    * { box-sizing: border-box; }
    body { margin: 0; color: #111827; font-family: Arial, Helvetica, sans-serif; font-size: 10.5px; }
    header { display: grid; grid-template-columns: 86px 1fr; gap: 16px; align-items: center; border-bottom: 5px solid #f4b400; margin-bottom: 14px; padding-bottom: 12px; background: linear-gradient(90deg, #0b1220 0 86px, #ffffff 86px); }
    h1, h2, h3 { margin: 0; text-transform: uppercase; }
    h1 { font-size: 36px; line-height: 0.95; letter-spacing: 0.02em; border-bottom: 3px solid #173b72; padding-bottom: 6px; }
    h2 { margin: 16px 0 8px; border-top: 2px solid #b8c7dc; border-left: 6px solid #f4b400; border-bottom: 2px solid #173b72; padding: 6px 0 5px 8px; color: #173b72; font-size: 14px; break-after: avoid; page-break-after: avoid; }
    h3 { margin-bottom: 8px; font-size: 12px; }
    .logo { width: 78px; height: 78px; object-fit: contain; }
    .meta { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin-top: 12px; }
    .meta div, .card { border: 1px solid #b8c7dc; border-top: 2px solid #173b72; border-left: 4px solid #f4b400; border-radius: 6px; padding: 8px; background: #f8fafc; break-inside: avoid; page-break-inside: avoid; }
    .meta span { display: block; color: #6b7280; font-size: 9px; text-transform: uppercase; }
    .meta strong { display: block; margin-top: 3px; font-size: 12px; }
    table { width: 100%; border-collapse: collapse; border-top: 3px solid #173b72; border-right: 2px solid #173b72; border-bottom: 2px solid #173b72; border-left: 2px solid #173b72; break-inside: avoid; page-break-inside: avoid; }
    th, td { border: 1px solid #9fb2cb; border-bottom: 1.4px solid #8fa6c2; padding: 4px 5px; text-align: left; vertical-align: top; }
    th { background: #173b72; color: #ffffff; font-size: 9px; text-transform: uppercase; }
    tr { break-inside: avoid; page-break-inside: avoid; }
    tbody tr:nth-child(even) { background: #f1f5f9; }
    tbody tr:nth-child(odd) { background: #ffffff; }
    caption { caption-side: top; padding: 4px 6px; background: #f4b400; color: #07111f; font-weight: 800; text-align: left; text-transform: uppercase; }
    .match-columns { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; align-items: start; }
    .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; align-items: start; }
    .rounds { grid-template-columns: repeat(2, 1fr); }
    ol { margin: 0; padding-left: 18px; }
    li, .card p { display: flex; justify-content: space-between; gap: 8px; margin: 0 0 5px; border-bottom: 1px solid #dbe4f0; padding-bottom: 3px; break-inside: avoid; page-break-inside: avoid; }
    li:last-child, .card p:last-child { margin-bottom: 0; }
    .footer { margin-top: 18px; border-top: 2px solid #b8c7dc; padding-top: 8px; color: #6b7280; font-size: 9px; }
    @media screen and (max-width: 760px) {
      body { background: #eef2f7; padding: 12px; font-size: 13px; }
      header { grid-template-columns: 64px 1fr; gap: 12px; border: 1px solid #b8c7dc; border-left: 6px solid #f4b400; border-bottom: 3px solid #173b72; border-radius: 10px; padding: 12px; background: #ffffff; }
      h1 { font-size: 25px; line-height: 1; }
      h2 { margin-top: 14px; border-top: 0; border-radius: 8px 8px 0 0; background: #ffffff; }
      h3 { font-size: 13px; }
      .logo { width: 58px; height: 58px; }
      .meta { grid-template-columns: 1fr; gap: 8px; }
      .meta div, .card { border-radius: 10px; background: #ffffff; box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08); }
      .meta span { font-size: 10px; }
      .meta strong { font-size: 14px; overflow-wrap: anywhere; }
      .match-columns, .grid, .rounds { grid-template-columns: 1fr; gap: 10px; }
      table { display: block; border: 0; background: transparent; }
      caption { display: block; border-radius: 8px 8px 0 0; }
      thead { display: none; }
      tbody { display: grid; gap: 8px; }
      tr { display: grid; gap: 0; border: 1px solid #b8c7dc; border-left: 5px solid #173b72; border-radius: 8px; overflow: hidden; background: #ffffff !important; }
      td { display: grid; grid-template-columns: 88px minmax(0, 1fr); gap: 8px; border: 0; border-bottom: 1px solid #dbe4f0; padding: 8px; overflow-wrap: anywhere; }
      td:last-child { border-bottom: 0; }
      td::before { color: #64748b; font-size: 10px; font-weight: 800; text-transform: uppercase; }
      td:nth-child(1)::before { content: "Grupo"; }
      td:nth-child(2)::before { content: "Partido"; }
      td:nth-child(3)::before { content: "Pronostico"; }
      li, .card p { display: grid; grid-template-columns: minmax(0, 1fr) auto; align-items: start; }
      .footer { background: #ffffff; border-radius: 8px; padding: 10px; }
    }
    @media print {
      * { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
      button { display: none; }
      table, .card, .prediction-page-block { break-inside: avoid; page-break-inside: avoid; }
    }
  </style>
</head>
<body>
  <header>
    <img class="logo" src="${escapePredictionPdfText(logoUrl)}" alt="FIFA 2026" />
    <div>
      <h1>Pronostico FIFA 2026</h1>
      <div class="meta">
        <div><span>Participante</span><strong>${escapePredictionPdfText(prediction.participant || "Sin nombre")}</strong></div>
        <div><span>Identificador</span><strong>${escapePredictionPdfText(prediction.contact || "Sin identificador")}</strong></div>
        <div><span>Campeon</span><strong>${escapePredictionPdfText(champion)}</strong></div>
        <div><span>Guardado</span><strong>${escapePredictionPdfText(savedAt)}</strong></div>
      </div>
    </div>
  </header>
  <main>
    <h2>Llaves</h2>
    <div class="grid rounds">${knockoutHtml}</div>
    <p class="footer">Generado desde FIFA 2026 Info Hub. En GitHub Pages el archivo se guarda desde el dialogo del navegador usando la opcion Guardar como PDF.</p>
  </main>
</body>
</html>`;
}

function generatePredictionPdf() {
  const prediction = collectPredictionFromForm();
  if (!prediction.savedAt) prediction.savedAt = new Date().toISOString();
  localStorage.setItem(predictionDraftKey, JSON.stringify(prediction));
  const printWindow = window.open("", "_blank", "popup,width=980,height=720");
  if (!printWindow) {
    alert("El navegador bloqueo la ventana del PDF. Permite ventanas emergentes para generar el reporte.");
    return;
  }
  printWindow.document.open();
  printWindow.document.write(buildPredictionPdfHtml(prediction));
  printWindow.document.close();
  printWindow.document.title = getPredictionPdfFilename(prediction);
  printWindow.addEventListener("load", () => {
    printWindow.focus();
    printWindow.print();
  });
}
