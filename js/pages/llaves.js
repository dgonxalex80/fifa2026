function renderBracket() {
  updateKnockoutCalendar();
  const standings = getGroupStandings();
  const startedGroups = Object.values(standings).filter((rows) => rows.some((row) => row.played > 0)).length;
  const closedGroups = Object.values(standings).filter(isGroupComplete).length;
  const qualifiedCount = new Set(Object.values(getQualifiedTeams(standings)).filter(Boolean)).size;
  const bracketNote = `<section class="round bracket-status"><h3>Estado</h3><article class="bracket-match"><div class="bracket-team"><span>Proyeccion con ` + startedGroups + ` grupos activos</span><strong>` + closedGroups + `/12 cerrados</strong></div><div class="bracket-team"><span>Clasificados proyectados</span><strong>` + qualifiedCount + `</strong></div></article></section>`;

  document.querySelector("#bracket").innerHTML = bracketNote + getDynamicKnockoutRounds().map((round) =>
    `<section class="round"><h3>` + round.name + `</h3>` +
    round.matches.map(([home, away, match]) =>
      `<article class="bracket-match">` +
        `<div class="bracket-team"><span>` + teamLabel(home) + `</span><strong>` + (Number.isInteger(match.homeScore) ? match.homeScore : "-") + `</strong></div>` +
        `<div class="bracket-team"><span>` + teamLabel(away) + `</span><strong>` + (Number.isInteger(match.awayScore) ? match.awayScore : "-") + `</strong></div>` +
      `</article>`
    ).join("") +
    `</section>`
  ).join("");
}
