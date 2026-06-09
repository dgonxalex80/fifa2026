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
  const selectedGroup = $("#predictionGroupFilter")?.value || "todos";
  const filtered = getPredictionMatches().filter((match) => selectedGroup === "todos" || match.group === selectedGroup);

  container.innerHTML = `
    <section class="prediction-section">
      <div class="prediction-fixture-list">
        ${filtered.map((match) => renderPredictionGroupMatch(match, prediction)).join("")}
      </div>
    </section>
    ${renderPredictionStandings(prediction)}
    ${renderPredictionKnockout(prediction)}
  `;
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

function getPredictionStandings(prediction = readPrediction()) {
  const standings = Object.fromEntries(Object.entries(groups).map(([groupCode, rows]) => [
    groupCode,
    rows.map(([team]) => ({ team, played: 0, won: 0, drawn: 0, lost: 0, points: 0 }))
  ]));

  getPredictionMatches().forEach((match) => {
    const outcome = prediction.matches[String(match.id)]?.outcome;
    if (!predictionOutcomes.includes(outcome)) return;
    const table = standings[match.group];
    const home = table?.find((row) => row.team === match.home);
    const away = table?.find((row) => row.team === match.away);
    if (!home || !away) return;

    home.played += 1;
    away.played += 1;
    if (outcome === "home") {
      home.won += 1;
      away.lost += 1;
      home.points += 3;
    } else if (outcome === "away") {
      away.won += 1;
      home.lost += 1;
      away.points += 3;
    } else {
      home.drawn += 1;
      away.drawn += 1;
      home.points += 1;
      away.points += 1;
    }
  });

  Object.values(standings).forEach((table) => table.sort(comparePredictionRows));
  return standings;
}

function comparePredictionRows(a, b) {
  return b.points - a.points || b.won - a.won || b.drawn - a.drawn || a.team.localeCompare(b.team);
}

function getPredictionQualifiers(prediction = readPrediction()) {
  const standings = getPredictionStandings(prediction);
  const qualifiers = {};
  const thirdPlaced = [];

  Object.entries(standings).forEach(([groupCode, table], groupIndex) => {
    const complete = table.every((row) => row.played === 3);
    if (!complete) return;
    qualifiers[`1G${groupIndex + 1}`] = table[0]?.team || "";
    qualifiers[`2G${groupIndex + 1}`] = table[1]?.team || "";
    if (table[2]) thirdPlaced.push({ ...table[2], groupCode });
  });

  if (thirdPlaced.length === Object.keys(groups).length) {
    thirdPlaced
      .sort(comparePredictionRows)
      .slice(0, 8)
      .forEach((row, index) => {
        qualifiers[`3G${index + 1}`] = row.team;
      });
  }

  return qualifiers;
}

function renderPredictionStandings(prediction = readPrediction()) {
  const standings = getPredictionStandings(prediction);
  return `
    <section class="prediction-section prediction-standings-section">
      <div class="panel-head prediction-subhead">
        <h3>Clasificados segun pronostico</h3>
        <span class="status-pill">Grupos</span>
      </div>
      <div class="prediction-standings-grid">
        ${Object.entries(standings).map(([group, rows]) => `
          <article class="prediction-standing-card">
            <strong>Grupo ${group}</strong>
            ${rows.map((row, index) => `
              <span class="prediction-standing-row${index < 2 ? " qualified" : index === 2 ? " third-place" : ""}">
                <b>${index + 1}</b>${teamLabel(row.team)}<small>${row.points} pts</small>
              </span>
            `).join("")}
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function phaseCode(phase) {
  return phase === "Dieciseisavos" ? "D16" : phase === "Octavos" ? "OF" : phase === "Cuartos" ? "CF" : phase === "Semifinal" ? "SF" : phase === "Final" ? "F" : "TP";
}

function getPredictedKnockoutRounds(prediction = readPrediction()) {
  const qualifiers = getPredictionQualifiers(prediction);
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
      const home = resolvePredictionSeed(seedHome, qualifiers, winners, losers);
      const away = resolvePredictionSeed(seedAway, qualifiers, winners, losers);
      const outcome = prediction.knockout[key] || "";
      const winner = outcome === "home" ? home : outcome === "away" ? away : "";
      const loser = outcome === "home" ? away : outcome === "away" ? home : "";
      if (winner && !winner.startsWith("Ganador") && !winner.startsWith("Clasificado") && !winner.startsWith("Perdedor")) winners[key] = winner;
      if (loser && !loser.startsWith("Ganador") && !loser.startsWith("Clasificado") && !loser.startsWith("Perdedor")) losers[key] = loser;
      return { key, phase, home, away, outcome, winner };
    });
    return { phase, code, matches: roundMatches };
  });
}

function resolvePredictionSeed(seed, qualifiers, winners, losers) {
  if (qualifiers[seed]) return qualifiers[seed];
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
  const totalGroupPredictions = getPredictionMatches().filter((match) => prediction.matches[String(match.id)]?.outcome).length;
  const groupsComplete = totalGroupPredictions === getPredictionMatches().length;
  if (!groupsComplete) {
    return `
      <section class="prediction-section prediction-knockout-empty">
        <div class="panel-head prediction-subhead">
          <h3>Llaves del pronostico</h3>
          <span class="status-pill">Pendiente</span>
        </div>
        <p class="history-table-note">Completa todos los partidos de grupos para generar los clasificados y avanzar hasta el campeon.</p>
      </section>
    `;
  }

  const rounds = getPredictedKnockoutRounds(prediction);
  return `
    <section class="prediction-section prediction-knockout-section">
      <div class="panel-head prediction-subhead">
        <h3>Llaves del pronostico</h3>
        <span class="status-pill">Eliminatorias</span>
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
  const canPick = !match.home.startsWith("Ganador") && !match.home.startsWith("Clasificado") && !match.home.startsWith("Perdedor") && !match.away.startsWith("Ganador") && !match.away.startsWith("Clasificado") && !match.away.startsWith("Perdedor");
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
  const predictionMatches = getPredictionMatches();
  const completed = predictionMatches.filter((match) => prediction.matches[String(match.id)]?.outcome).length;
  const groupsWithPicks = new Set(predictionMatches.filter((match) => prediction.matches[String(match.id)]?.outcome).map((match) => match.group)).size;
  const champion = getPredictedChampion(prediction) || "Por definir";
  const savedLabel = prediction.savedAt
    ? new Date(prediction.savedAt).toLocaleString("es-CO", { dateStyle: "short", timeStyle: "short" })
    : "pendiente";

  container.innerHTML = [
    ["Participante", prediction.participant || "Sin nombre", prediction.contact || "identificador pendiente"],
    ["Pronosticos", `${completed}/${predictionMatches.length}`, `${groupsWithPicks} grupos con datos`],
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
  const groupRows = getPredictionMatches().map((match) => {
    const outcome = prediction.matches[String(match.id)]?.outcome || "";
    const winner = outcome === "home" ? match.home : outcome === "away" ? match.away : outcome === "draw" ? "Empate" : "";
    return [prediction.participant, prediction.contact, getPredictedChampion(prediction), prediction.topScorer, prediction.savedAt, "Grupos", match.id, match.group, match.date, match.home, outcome || "", match.away, winner];
  });
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
  return [...header, ...groupRows, ...knockoutRows];
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
  const groupRows = getPredictionMatches().map((match) => {
    const outcome = prediction.matches[String(match.id)]?.outcome || "";
    return `
      <tr>
        <td>${escapePredictionPdfText(match.group)}</td>
        <td>${escapePredictionPdfText(match.home)} vs ${escapePredictionPdfText(match.away)}</td>
        <td>${escapePredictionPdfText(getPredictionOutcomeLabel(match, outcome))}</td>
      </tr>
    `;
  });
  const rowsPerTable = 18;
  const groupTableHtml = Array.from({ length: Math.ceil(groupRows.length / rowsPerTable) }, (_, index) => groupRows.slice(index * rowsPerTable, (index + 1) * rowsPerTable))
    .map((rows, index) => `
      <table>
        <caption>Bloque ${index + 1}</caption>
        <thead><tr><th>Grupo</th><th>Partido</th><th>Pronostico</th></tr></thead>
        <tbody>${rows.join("")}</tbody>
      </table>
    `).join("");
  const standingsHtml = Object.entries(getPredictionStandings(prediction)).map(([group, rows]) => `
    <section class="card">
      <h3>Grupo ${escapePredictionPdfText(group)}</h3>
      <ol>
        ${rows.map((row) => `<li><span>${escapePredictionPdfText(row.team)}</span><strong>${row.points} pts</strong></li>`).join("")}
      </ol>
    </section>
  `).join("");
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
    <h2>Fase de grupos</h2>
    <div class="match-columns">${groupTableHtml}</div>
    <h2>Clasificados</h2>
    <div class="grid">${standingsHtml}</div>
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
