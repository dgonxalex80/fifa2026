function exportCurrentPage() {
  const active = $(".page.active").id.replace("page-", "");
  const rows = active === "descanso"
    ? [["ranking", "seleccion", "descanso_1_2_horas", "descanso_2_3_horas", "total_descanso_horas"], ...getRestRankingStats().map((item, index) => [index + 1, item.team, item.rests[0] || 0, item.rests[1] || 0, item.totalHours])]
    : active === "selecciones"
    ? [["seleccion", "grupo", "nacidos_en_pais_representado", "no_nacidos_alli", "proporcion_nacidos_pais_representado", "jugadores_con_club_confirmado", "jugadores_en_exterior", "porcentaje_exterior", "edad_promedio", "muestra_edad", "posicion_mas_frecuente", "club_mas_repetido"], ...getSelectionStats().map((item) => [item.team, item.group, item.bornInRepresentedCountry, item.foreignBorn, formatPercent(item.localBirthShare), item.confirmedClubPlayers, item.abroadPlayers, formatPercent(item.abroadShare), formatNumber(item.averageAge), item.ageSample, item.positionLeader.label, item.topClub.label])]
    : active === "clubes"
      ? [["posicion", "club", "jugadores", "selecciones", "jugadores_citados"], ...getClubContributionStats().map((item, index) => [index + 1, item.club, item.count, item.teams.join(" | "), item.players.map((player) => `${player.fullName} (${player.team})`).join(" | ")])]
    : active === "reglas"
      ? [["categoria", "regla", "detalle"], ...getRulesExportRows()]
    : active === "sedes"
      ? [["estadio", "ciudad", "pais", "capacidad", "partidos", "fases"], ...getVenueStats().map((venue) => [venue.stadium, venue.city, venue.country, venue.capacity, venue.matches.length, [...venue.phases].join(" | ")])]
    : active === "ranking"
      ? [["ranking_fifa", "seleccion", "confederacion", "grupo"], ...fifaRankingData.map((item) => [item.rank, item.team, item.confederation, getTeamGroup(item.team)])]
    : active === "glosario"
      ? [["termino", "definicion"], ...colombianGlossary.map((item) => [item.term, item.definition])]
    : active === "jugadores"
      ? [["codigo_panini", "nombre", "seleccion", "edad", "fecha_nacimiento", "estatura", "club", "posicion"], ...getFilteredPlayers().map((player) => [player.code, player.fullName, player.team, player.age, player.birthDate, player.height, player.club, player.position])]
      : active === "historial"
      ? [["anio", "sede", "campeon", "finalista", "equipos", "partidos", "goles", "goleador", "goles_goleador"], ...worldCupHistory.map((item) => [item.year, item.host, item.champion, item.runnerUp, item.teams, item.matches, item.goals, item.topScorer, item.topScorerGoals])]
      : active === "pronostico"
      ? getPredictionExportRows()
      : [["fecha", "local", "goles_local", "goles_visitante", "visitante", "fase", "estado"], ...matches.map((m) => [m.date, m.home, m.homeScore ?? "", m.awayScore ?? "", m.away, m.phase, m.status])];
  const csv = rows.map((row) => row.join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${active}-fifa2026.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

function formatDate(value) {
  return new Intl.DateTimeFormat("es-CO", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(new Date(value.replace(" ", "T")));
}

function bindEvents() {
  $$(".nav-item").forEach((button) => button.addEventListener("click", () => setPage(button.dataset.page)));
  $$("[data-jump]").forEach((button) => button.addEventListener("click", () => setPage(button.dataset.jump)));
  $("#menuToggle").addEventListener("click", () => $("#sidebar").classList.toggle("open"));
  $("#matchStatusFilter").addEventListener("change", renderMatches);
  $("#phaseFilter").addEventListener("change", renderMatches);
  $("#playerSearch").addEventListener("input", renderPlayers);
  $("#playerTeamFilter").addEventListener("change", renderPlayers);
  $("#playerPositionFilter").addEventListener("change", renderPlayers);
  if ($("#glossarySearch")) $("#glossarySearch").addEventListener("input", renderGlossary);
  if (typeof bindPredictionEvents === "function") bindPredictionEvents();
  $("#exportPage").addEventListener("click", exportCurrentPage);
  $("#globalSearch").addEventListener("input", (event) => {
    renderSearchResults(event.target.value);
  });
  $("#globalSearch").addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    const firstResult = $("#searchResults .search-result");
    if (firstResult) selectSearchResult(firstResult);
  });
  $("#searchResults").addEventListener("click", (event) => {
    const button = event.target.closest(".search-result");
    if (button) selectSearchResult(button);
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".search-box")) $("#searchResults").classList.remove("open");
  });
  $("#themeSelect").addEventListener("change", (event) => setTheme(event.target.value));
}

function init() {
  setTheme(localStorage.getItem("fifa2026-theme") || "classic");
  applyStoredMatchResults();
  updateKnockoutCalendar();
  bindEvents();
  renderCountdown();
  renderHomeMatches();
  renderMatches();
  renderRestRanking();
  renderRules();
  renderVenues();
  renderRanking();
  renderGlossary();
  renderHomeBirthStats();
  renderBirthRepresentationStats();
  renderSelectionStats();
  renderClubStats();
  renderGroups();
  if (typeof renderPredictions === "function") renderPredictions();
  renderScorers();
  renderPlayerFilters();
  renderPlayers();
  renderWorldCupHistory();
  renderBracket();
  setInterval(renderCountdown, 1000);
}

init();
