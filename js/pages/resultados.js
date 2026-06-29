const resultsStorageKey = "fifa2026-results";

function getResultsPhases() {
  return [...new Set(matches.map((match) => match.phase))];
}

function getResultsGroups() {
  return [...new Set(matches.filter((match) => match.group).map((match) => match.group))].sort();
}

function getFilteredResultMatches() {
  const query = normalizeText($("#resultsSearch")?.value || "");
  const phase = $("#resultsPhaseFilter")?.value || "todas";
  const group = $("#resultsGroupFilter")?.value || "todos";
  const status = $("#resultsStatusFilter")?.value || "todos";

  return matches.filter((match) => {
    const haystack = normalizeText([match.home, match.away, match.city, match.stadium, match.phase, match.group || ""].join(" "));
    return (!query || haystack.includes(query)) &&
      (phase === "todas" || match.phase === phase) &&
      (group === "todos" || match.group === group) &&
      (status === "todos" || match.status === status);
  });
}
function renderResultsFilters() {
  const phaseFilter = $("#resultsPhaseFilter");
  const groupFilter = $("#resultsGroupFilter");
  if (!phaseFilter || !groupFilter) return;

  const phaseValue = phaseFilter.value || "todas";
  const groupValue = groupFilter.value || "todos";
  phaseFilter.innerHTML = [`<option value="todas">Todas las fases</option>`, ...getResultsPhases().map((phase) => `<option value="${phase}">${phase}</option>`)].join("");
  groupFilter.innerHTML = [`<option value="todos">Todos los grupos</option>`, ...getResultsGroups().map((group) => `<option value="${group}">Grupo ${group}</option>`)].join("");
  phaseFilter.value = [...phaseFilter.options].some((option) => option.value === phaseValue) ? phaseValue : "todas";
  groupFilter.value = [...groupFilter.options].some((option) => option.value === groupValue) ? groupValue : "todos";
}

function renderResultsAdmin() {
  updateKnockoutCalendar();
  const container = $("#resultsAdminList");
  if (!container) return;
  renderResultsFilters();
  renderResultsSummary();

  const filtered = getFilteredResultMatches();
  container.innerHTML = filtered.length ? renderResultsPhaseGroups(filtered) : `
    <article class="empty-card-grid">No hay partidos para los filtros seleccionados.</article>
  `;
}

function renderResultsPhaseGroups(resultMatches) {
  const phaseOrder = ["Dieciseisavos", "Octavos", "Cuartos", "Semifinal", "Tercer puesto", "Final", "Grupos"];
  const grouped = resultMatches.reduce((acc, match) => {
    acc[match.phase] = acc[match.phase] || [];
    acc[match.phase].push(match);
    return acc;
  }, {});

  return Object.keys(grouped)
    .sort((a, b) => {
      const indexA = phaseOrder.indexOf(a);
      const indexB = phaseOrder.indexOf(b);
      return (indexA === -1 ? phaseOrder.length : indexA) - (indexB === -1 ? phaseOrder.length : indexB) || a.localeCompare(b);
    })
    .map((phase) => `
      <section class="results-phase-block">
        <div class="results-phase-divider">
          <h4>${getResultsPhaseTitle(phase)}</h4>
        </div>
        <div class="results-phase-matches">
          ${grouped[phase].map((match) => renderResultEditor(match)).join("")}
        </div>
      </section>
    `)
    .join("");
}

function getResultsPhaseTitle(phase) {
  const labels = {
    Grupos: "Grupos",
    Dieciseisavos: "Dieciseisavos",
    Octavos: "Octavos",
    Cuartos: "Cuartos",
    Semifinal: "Semifinales",
    "Tercer puesto": "Tercer puesto",
    Final: "Final"
  };
  return labels[phase] || phase;
}

function renderResultsSummary() {
  const container = $("#resultsSummaryCards");
  if (!container) return;
  const finished = matches.filter((match) => getMatchResult(match)).length;
  const groupFinished = matches.filter((match) => match.phase === "Grupos" && getMatchResult(match)).length;
  const pending = matches.length - finished;
  container.innerHTML = [
    ["Partidos cargados", finished, `${pending} pendientes`],
    ["Fase de grupos", `${groupFinished}/${matches.filter((match) => match.phase === "Grupos").length}`, "actualiza posiciones"],
    ["Almacenamiento", "Local", "este navegador"]
  ].map(([label, value, detail]) => `
    <article class="kpi"><span>${label}</span><strong>${value}</strong><small>${detail}</small></article>
  `).join("");
}

function renderResultEditor(match) {
  const result = getMatchResult(match);
  const lockedSeeds = [match.home, match.away].some((team) => /^(Ganador|Perdedor|Clasificado)/.test(team));
  return `
    <article class="result-editor${result ? " finished" : ""}${lockedSeeds ? " locked" : ""}" data-match-id="${match.id}">
      <div class="result-editor-meta">
        <strong>${match.phase}${match.group ? ` · Grupo ${match.group}` : ""}</strong>
        <small>${formatDate(match.date)} · ${match.city} · ${match.stadium}</small>
      </div>
      <div class="result-editor-fixture">
        <span>${teamLabel(match.home)}</span>
        <input class="result-score-input" data-side="home" type="number" min="0" max="30" inputmode="numeric" value="${Number.isInteger(match.homeScore) ? match.homeScore : ""}" aria-label="Goles de ${match.home}" ${lockedSeeds ? "disabled" : ""} />
        <span class="prediction-versus">vs</span>
        <input class="result-score-input" data-side="away" type="number" min="0" max="30" inputmode="numeric" value="${Number.isInteger(match.awayScore) ? match.awayScore : ""}" aria-label="Goles de ${match.away}" ${lockedSeeds ? "disabled" : ""} />
        <span>${teamLabel(match.away)}</span>
      </div>
      <div class="result-editor-actions">
        <span class="status-pill">${result ? `Final ${result}` : lockedSeeds ? "Clasificacion pendiente" : "Pendiente"}</span>
        <button class="primary-button save-result" type="button" data-match-id="${match.id}" ${lockedSeeds ? "disabled" : ""}>Guardar</button>
        <button class="ghost-button clear-result" type="button" data-match-id="${match.id}" ${result ? "" : "disabled"}>Limpiar</button>
      </div>
    </article>
  `;
}

function readResultInputs(matchId) {
  const row = $(`.result-editor[data-match-id="${matchId}"]`);
  if (!row) return null;
  const homeValue = row.querySelector('[data-side="home"]')?.value;
  const awayValue = row.querySelector('[data-side="away"]')?.value;
  const homeScore = Number(homeValue);
  const awayScore = Number(awayValue);
  if (!Number.isInteger(homeScore) || !Number.isInteger(awayScore) || homeScore < 0 || awayScore < 0) return null;
  return { homeScore, awayScore };
}

function persistMatchResults() {
  localStorage.setItem(resultsStorageKey, JSON.stringify(matchResults));
}

function setResultsStatus(message) {
  const status = $("#resultsAdminStatus");
  if (status) status.textContent = message;
}

function saveMatchResult(matchId) {
  const match = matches.find((item) => String(item.id) === String(matchId));
  const result = readResultInputs(matchId);
  if (!match || !result) {
    setResultsStatus("Resultado invalido");
    return;
  }
  if (match.phase !== "Grupos" && result.homeScore === result.awayScore) {
    setResultsStatus("Eliminatoria sin empate");
    return;
  }

  match.homeScore = result.homeScore;
  match.awayScore = result.awayScore;
  match.status = "finalizado";
  matchResults[match.id] = result;
  persistMatchResults();
  refreshAfterResultChange(`Guardado ${match.home} ${result.homeScore}-${result.awayScore} ${match.away}`);
}

function clearMatchResult(matchId) {
  const match = matches.find((item) => String(item.id) === String(matchId));
  if (!match) return;
  delete match.homeScore;
  delete match.awayScore;
  match.status = "pendiente";
  delete matchResults[match.id];
  persistMatchResults();
  refreshAfterResultChange("Resultado eliminado");
}

function clearAllMatchResults() {
  if (typeof confirm === "function" && !confirm("Esto borrara todos los resultados guardados en este navegador. ¿Continuar?")) return;
  matches.forEach((match) => {
    delete match.homeScore;
    delete match.awayScore;
    match.status = "pendiente";
  });
  Object.keys(matchResults).forEach((key) => delete matchResults[key]);
  persistMatchResults();
  refreshAfterResultChange("Resultados borrados");
}

function refreshAfterResultChange(message) {
  updateKnockoutCalendar();
  setResultsStatus(message);
  if (typeof renderHomeMatches === "function") renderHomeMatches();
  if (typeof renderMatches === "function") renderMatches();
  if (typeof renderGroups === "function") renderGroups();
  if (typeof renderBracket === "function") renderBracket();
  if (typeof renderThirdsRanking === "function") renderThirdsRanking();
  if (typeof renderResultsAdmin === "function") renderResultsAdmin();
}

function bindResultsEvents() {
  if (!$("#resultsAdminList")) return;
  ["#resultsSearch", "#resultsPhaseFilter", "#resultsGroupFilter", "#resultsStatusFilter"].forEach((selector) => {
    const element = $(selector);
    if (!element) return;
    element.addEventListener(element.tagName === "INPUT" ? "input" : "change", renderResultsAdmin);
  });
  $("#resultsAdminList").addEventListener("click", (event) => {
    const saveButton = event.target.closest(".save-result");
    const clearButton = event.target.closest(".clear-result");
    if (saveButton) saveMatchResult(saveButton.dataset.matchId);
    if (clearButton) clearMatchResult(clearButton.dataset.matchId);
  });
  $("#clearAllResults")?.addEventListener("click", clearAllMatchResults);
}

function getResultsExportRows() {
  return [["id", "fecha", "fase", "grupo", "local", "goles_local", "goles_visitante", "visitante", "estado", "ciudad", "estadio"],
    ...matches.map((match) => [match.id, match.date, match.phase, match.group || "", match.home, match.homeScore ?? "", match.awayScore ?? "", match.away, match.status, match.city, match.stadium])];
}
