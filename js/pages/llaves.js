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

function getMatchScoreText(match) {
  const result = getMatchResult(match);
  if (!result) return "";
  const penalties = Number.isInteger(match.penaltyHomeScore) && Number.isInteger(match.penaltyAwayScore)
    ? ` pen. ${match.penaltyHomeScore}-${match.penaltyAwayScore}`
    : "";
  return `${result}${penalties}`;
}

function renderPosterTeam(team, match, side) {
  const winner = getWinner(match);
  const isWinner = winner === team;
  const score = side === "home" ? match?.homeScore : match?.awayScore;
  const hasScore = Number.isInteger(score);
  return `
    <div class="poster-team ${isWinner ? "is-winner" : ""}">
      ${teamLabel(team)}
      <strong>${hasScore ? score : ""}</strong>
    </div>
  `;
}

function renderPosterMatch(match, index, options = {}) {
  const result = getMatchResult(match);
  const winner = getWinner(match);
  const label = options.label || `D16-${index + 1}`;
  return `
    <article class="poster-match ${result ? "is-finished" : ""} ${winner ? "has-winner" : ""}">
      <small>${label}</small>
      ${renderPosterTeam(match.home, match, "home")}
      ${renderPosterTeam(match.away, match, "away")}
      <span class="poster-score">${getMatchScoreText(match) || match.city || "Por jugar"}</span>
    </article>
  `;
}

function renderPosterSeed(match, index) {
  return `
    <div class="poster-seed">
      <span>${index + 1}</span>
      ${renderPosterMatch(match, index)}
    </div>
  `;
}

function renderPosterColumn(matches, side) {
  return `
    <div class="poster-column poster-column-${side}">
      <h3>16vos</h3>
      <div class="poster-seeds">
        ${matches.map((match, index) => renderPosterSeed(match, side === "left" ? index : index + 8)).join("")}
      </div>
    </div>
  `;
}

function renderPosterAdvanceRound(round, code, side) {
  if (!round) return "";
  return `
    <section class="poster-advance poster-advance-${side}">
      <h3>${round.name}</h3>
      <div class="poster-advance-list">
        ${round.matches.map(([home, away, match], index) => renderPosterMatch(match, index, { label: `${code}-${index + 1}` })).join("")}
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
  const dieciseisavos = rounds.find((round) => round.name === "Dieciseisavos")?.matches.map(([, , match]) => match) || [];
  const leftD16 = dieciseisavos.slice(0, 8);
  const rightD16 = dieciseisavos.slice(8, 16);
  const octavos = rounds.find((round) => round.name === "Octavos de final");
  const cuartos = rounds.find((round) => round.name === "Cuartos de final");
  const semifinales = rounds.find((round) => round.name === "Semifinales");
  const finalRound = rounds.find((round) => round.name === "Final");
  const thirdPlace = rounds.find((round) => round.name === "Tercer puesto");
  const finalMatch = finalRound?.matches[0]?.[2];
  const champion = finalMatch ? getWinner(finalMatch) : "";
  const closedGroups = Object.values(standings).filter(isGroupComplete).length;
  const finishedD16 = dieciseisavos.filter(getMatchResult).length;
  const updatedAt = typeof tournamentDataCutoffLabel === "string" ? tournamentDataCutoffLabel : "corte de datos no disponible";

  document.querySelector("#bracket").innerHTML = `
    <section class="poster-bracket" aria-label="Arbol de segunda ronda Mundial 2026">
      <header class="poster-header">
        <div>
          <span>FIFA World Cup 2026</span>
          <h2>Arbol de segunda ronda</h2>
        </div>
        <div class="poster-meta">
          <strong>${qualifiedTeams.size}</strong><span>clasificados</span>
          <strong>${finishedD16}/16</strong><span>16vos jugados</span>
          <strong>${closedGroups}/12</strong><span>grupos cerrados</span>
        </div>
      </header>

      <div class="poster-stage">
        ${renderPosterColumn(leftD16, "left")}

        <div class="poster-center">
          <div class="poster-logo-row">
            <span class="poster-fifa-mark">FIFA</span>
            <span class="poster-cup" aria-hidden="true">🏆</span>
            <span class="poster-fifa-mark">2026</span>
          </div>

          <div class="poster-late-rounds">
            <div class="poster-side-rounds">
              ${renderPosterAdvanceRound({ ...octavos, matches: octavos?.matches.slice(0, 4) || [] }, "OF", "left")}
              ${renderPosterAdvanceRound({ ...cuartos, matches: cuartos?.matches.slice(0, 2) || [] }, "CF", "left")}
              ${renderPosterAdvanceRound({ ...semifinales, matches: semifinales?.matches.slice(0, 1) || [] }, "SF", "left")}
            </div>
            <div class="poster-final-zone">
              <span>Final</span>
              ${finalMatch ? renderPosterMatch(finalMatch, 0, { label: "F" }) : ""}
              <article class="poster-champion ${champion ? "is-defined" : ""}">
                <small>Campeon</small>
                <strong>${champion ? teamLabel(champion) : "Por definir"}</strong>
              </article>
              ${thirdPlace?.matches[0] ? `<div class="poster-third"><span>Tercer puesto</span>${renderPosterMatch(thirdPlace.matches[0][2], 0, { label: "3P" })}</div>` : ""}
            </div>
            <div class="poster-side-rounds">
              ${renderPosterAdvanceRound({ ...octavos, matches: octavos?.matches.slice(4, 8) || [] }, "OF", "right")}
              ${renderPosterAdvanceRound({ ...cuartos, matches: cuartos?.matches.slice(2, 4) || [] }, "CF", "right")}
              ${renderPosterAdvanceRound({ ...semifinales, matches: semifinales?.matches.slice(1, 2) || [] }, "SF", "right")}
            </div>
          </div>
        </div>

        ${renderPosterColumn(rightD16, "right")}
      </div>

      <section class="poster-qualified-strip" aria-label="Grupos y clasificados">
        ${Object.entries(standings).map(([group, rows]) => renderSchemeGroup(group, rows, qualifiedTeams)).join("")}
      </section>

      <footer class="poster-footer">Actualizado ${updatedAt}</footer>
    </section>
  `;
}
