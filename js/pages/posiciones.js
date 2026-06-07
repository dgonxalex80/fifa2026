function renderGroups() {
  const standings = getGroupStandings();
  const qualifiers = getQualifiedTeams(standings);
  const groupMatches = matches.filter((match) => match.phase === "Grupos");
  const pendingGroupMatches = groupMatches.filter((match) => match.status === "pendiente").length;
  const finishedGroupMatches = groupMatches.filter((match) => match.status === "finalizado").length;
  const totalTeams = Object.values(groups).reduce((total, rows) => total + rows.length, 0);
  const totalGroups = Object.keys(groups).length;
  const qualifiedCount = new Set(Object.values(qualifiers).filter(Boolean)).size;

  $("#groupResultsSummary").innerHTML = [
    ["Partidos de grupos", groupMatches.length, `${pendingGroupMatches} pendientes`],
    ["Resultados oficiales", finishedGroupMatches, `${finishedGroupMatches} cargados`],
    ["Grupos configurados", totalGroups, `${totalTeams} equipos en seguimiento`],
    ["Clasificados", qualifiedCount, qualifiedCount ? "llaves actualizadas automaticamente" : "se definiran al terminar la fase"]
  ].map(([label, value, detail]) => `
    <article class="kpi"><span>${label}</span><strong>${value}</strong><small>${detail}</small></article>
  `).join("");

  $("#groupSummaryGrid").innerHTML = Object.entries(standings).map(([group, rows]) => {
    const groupComplete = rows.every((row) => row.played === 3);
    return `
    <article class="summary-card">
      <strong>Grupo ${group}</strong>
      <div class="compact-team-list">
        ${rows.slice(0, 3).map((row, index) => `
          <span>${index + 1}. ${teamLabel(row.team)}</span>
        `).join("")}
      </div>
      <small>${groupComplete ? "clasificacion calculada" : "clasificacion pendiente"} · ${rows.reduce((total, row) => total + row.goalsFor, 0)} goles</small>
    </article>
  `;
  }).join("");

  $("#groupsGrid").innerHTML = Object.entries(standings).map(([group, rows]) => {
    const groupComplete = rows.every((row) => row.played === 3);
    return `
    <section class="panel group-card mobile-friendly-table">
      <div class="panel-head">
        <h3>Grupo ${group}</h3>
        <span class="status-pill">${groupComplete ? "cerrado" : "en curso"}</span>
      </div>
      <div class="simple-standings">
        ${rows.map((row, index) => `
          <article class="standing-row" data-label="Posición ${index + 1}">
            <span class="team-cell">${index + 1}. ${teamLabel(row.team)}</span>
            <div class="stats-cell">
              <strong>${row.points} pts</strong>
              <small>PJ:${row.played} DG:${row.goalDifference} GF:${row.goalsFor}</small>
            </div>
          </article>
        `).join("")}
      </div>
      <small class="group-note">${groupComplete ? "primeros dos clasificados y tercero en evaluacion global" : "faltan resultados para cerrar el grupo"}</small>
    </section>
  `;
  }).join("");

  $("#knockoutSummary").innerHTML = getDynamicKnockoutRounds().map((round) => `
    <section class="round-summary">
      <h4>${round.name}</h4>
      <div class="round-match-list">
        ${round.matches.map(([home, away, match], index) => `
          <article class="round-match">
            <span>Partido ${index + 1}</span>
            <strong><span>${teamLabel(home)}</span> vs <span>${teamLabel(away)}</span>${resultBadge(match)}</strong>
            <small>${match.status === "finalizado" ? "Resultado cargado" : "Resultado pendiente"} · ${formatDate(match.date)}</small>
          </article>
        `).join("")}
      </div>
    </section>
  `).join("");
}
