function renderSchemeGroup(group, rows, qualifiedTeams) {
  const complete = isGroupComplete(rows);
  return `
    <article class="scheme-group ${complete ? "is-closed" : ""}">
      <header><strong>Grupo ${group}</strong><span>${complete ? "Final" : "En curso"}</span></header>
      <div class="scheme-group-teams">
        ${rows.map((row, index) => `
          <div class="scheme-group-team ${qualifiedTeams.has(row.team) ? "is-qualified" : ""}">
            <span class="scheme-position">${index + 1}</span>
            ${teamLabel(row.team)}
            <strong>${row.points}</strong>
          </div>
        `).join("")}
      </div>
    </article>
  `;
}

function renderSchemeMatch(home, away, match, index) {
  const winner = getWinner(match);
  const result = getMatchResult(match);
  return `
    <article class="scheme-match ${result ? "is-finished" : ""}">
      <small>Partido ${index + 1}</small>
      <div class="scheme-team ${winner === home ? "is-winner" : ""}">
        ${teamLabel(home)}
        <strong>${Number.isInteger(match.homeScore) ? match.homeScore : "-"}</strong>
      </div>
      <div class="scheme-team ${winner === away ? "is-winner" : ""}">
        ${teamLabel(away)}
        <strong>${Number.isInteger(match.awayScore) ? match.awayScore : "-"}</strong>
      </div>
    </article>
  `;
}

function renderSchemeRound(round, roundIndex) {
  return `
    <section class="scheme-round scheme-round-${roundIndex + 1}">
      <h3>${round.name}</h3>
      <div class="scheme-round-matches">
        ${round.matches.map(([home, away, match], index) => renderSchemeMatch(home, away, match, index)).join("")}
      </div>
    </section>
  `;
}

function renderBracket() {
  updateKnockoutCalendar();
  const standings = getGroupStandings();
  const qualifiers = getQualifiedTeams(standings);
  const qualifiedTeams = new Set(Object.values(qualifiers).filter(Boolean));
  const rounds = getDynamicKnockoutRounds();
  const mainRounds = rounds.filter((round) => round.name !== "Tercer puesto");
  const thirdPlace = rounds.find((round) => round.name === "Tercer puesto");
  const finalRound = rounds.find((round) => round.name === "Final");
  const finalMatch = finalRound?.matches[0]?.[2];
  const champion = finalMatch ? getWinner(finalMatch) : "Campeon por definir";
  const startedGroups = Object.values(standings).filter((rows) => rows.some((row) => row.played > 0)).length;
  const closedGroups = Object.values(standings).filter(isGroupComplete).length;
  const updatedAt = typeof tournamentDataCutoffLabel === "string" ? tournamentDataCutoffLabel : "corte de datos no disponible";

  document.querySelector("#bracket").innerHTML = `
    <section class="bracket-poster" aria-label="Esquema dinámico del Mundial 2026">
      <header class="scheme-hero">
        <p>FIFA World Cup 2026</p>
        <h2>Esquema del torneo</h2>
        <span>Clasificación y llaves al momento</span>
      </header>

      <div class="scheme-status">
        <span><strong>${startedGroups}</strong>/12 grupos activos</span>
        <span><strong>${closedGroups}</strong>/12 grupos cerrados</span>
        <span><strong>${qualifiedTeams.size}</strong> clasificados proyectados</span>
        <span>Actualizado ${updatedAt}</span>
      </div>

      <div class="scheme-groups">
        ${Object.entries(standings).map(([group, rows]) => renderSchemeGroup(group, rows, qualifiedTeams)).join("")}
      </div>

      <div class="scheme-title-divider"><span>16vos de final</span><strong>Ruta a la final</strong></div>

      <div class="scheme-bracket-scroll">
        <div class="scheme-bracket-grid">
          ${mainRounds.map(renderSchemeRound).join("")}
        </div>
      </div>

      <footer class="scheme-finale">
        <article class="scheme-third-place">
          <span>Tercer puesto</span>
          ${thirdPlace ? renderSchemeMatch(...thirdPlace.matches[0], 0) : ""}
        </article>
        <article class="scheme-champion ${champion !== "Campeon por definir" ? "is-defined" : ""}">
          <span class="scheme-trophy" aria-hidden="true">🏆</span>
          <small>Campeón Mundial 2026</small>
          <strong>${champion === "Campeon por definir" ? champion : teamLabel(champion)}</strong>
        </article>
      </footer>
    </section>
  `;
}
