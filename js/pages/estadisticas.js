const worldCupTeamStatsBase = [
  { team: "Brasil", appearances: 22, played: 114, won: 76, drawn: 19, lost: 19, goalsFor: 237, goalsAgainst: 108 },
  { team: "Alemania", appearances: 20, played: 112, won: 68, drawn: 21, lost: 23, goalsFor: 232, goalsAgainst: 130 },
  { team: "Argentina", appearances: 18, played: 88, won: 47, drawn: 17, lost: 24, goalsFor: 152, goalsAgainst: 101 },
  { team: "Italia", appearances: 18, played: 83, won: 45, drawn: 21, lost: 17, goalsFor: 128, goalsAgainst: 77 },
  { team: "Francia", appearances: 16, played: 73, won: 39, drawn: 14, lost: 20, goalsFor: 136, goalsAgainst: 85 },
  { team: "Inglaterra", appearances: 16, played: 74, won: 32, drawn: 22, lost: 20, goalsFor: 104, goalsAgainst: 68 },
  { team: "Espana", appearances: 16, played: 67, won: 31, drawn: 17, lost: 19, goalsFor: 108, goalsAgainst: 75 },
  { team: "Paises Bajos", appearances: 11, played: 55, won: 30, drawn: 14, lost: 11, goalsFor: 96, goalsAgainst: 52 },
  { team: "Uruguay", appearances: 14, played: 59, won: 25, drawn: 13, lost: 21, goalsFor: 89, goalsAgainst: 76 },
  { team: "Belgica", appearances: 14, played: 51, won: 21, drawn: 10, lost: 20, goalsFor: 69, goalsAgainst: 74 },
  { team: "Suecia", appearances: 12, played: 51, won: 19, drawn: 13, lost: 19, goalsFor: 80, goalsAgainst: 73 },
  { team: "Rusia / URSS", appearances: 11, played: 45, won: 19, drawn: 10, lost: 16, goalsFor: 77, goalsAgainst: 54 },
  { team: "Serbia / Yugoslavia", appearances: 13, played: 46, won: 18, drawn: 8, lost: 20, goalsFor: 66, goalsAgainst: 63 },
  { team: "Mexico", appearances: 17, played: 60, won: 17, drawn: 15, lost: 28, goalsFor: 62, goalsAgainst: 102 },
  { team: "Portugal", appearances: 8, played: 35, won: 17, drawn: 6, lost: 12, goalsFor: 61, goalsAgainst: 41 },
  { team: "Polonia", appearances: 9, played: 38, won: 17, drawn: 6, lost: 15, goalsFor: 49, goalsAgainst: 50 },
  { team: "Hungria", appearances: 9, played: 32, won: 15, drawn: 3, lost: 14, goalsFor: 87, goalsAgainst: 57 },
  { team: "Suiza", appearances: 12, played: 41, won: 14, drawn: 8, lost: 19, goalsFor: 56, goalsAgainst: 73 },
  { team: "Croacia", appearances: 6, played: 30, won: 13, drawn: 8, lost: 9, goalsFor: 43, goalsAgainst: 33 },
  { team: "Chile", appearances: 9, played: 33, won: 11, drawn: 7, lost: 15, goalsFor: 40, goalsAgainst: 49 },
  { team: "Estados Unidos", appearances: 11, played: 37, won: 10, drawn: 8, lost: 19, goalsFor: 40, goalsAgainst: 66 },
  { team: "Colombia", appearances: 6, played: 22, won: 9, drawn: 3, lost: 10, goalsFor: 32, goalsAgainst: 30 },
  { team: "Dinamarca", appearances: 6, played: 23, won: 9, drawn: 6, lost: 8, goalsFor: 33, goalsAgainst: 30 },
  { team: "Paraguay", appearances: 8, played: 30, won: 7, drawn: 10, lost: 13, goalsFor: 30, goalsAgainst: 38 },
  { team: "Corea del Sur", appearances: 11, played: 38, won: 7, drawn: 10, lost: 21, goalsFor: 39, goalsAgainst: 78 },
  { team: "Japon", appearances: 7, played: 25, won: 7, drawn: 6, lost: 12, goalsFor: 25, goalsAgainst: 33 },
  { team: "Rumania", appearances: 7, played: 21, won: 8, drawn: 5, lost: 8, goalsFor: 30, goalsAgainst: 32 },
  { team: "Nigeria", appearances: 6, played: 21, won: 6, drawn: 3, lost: 12, goalsFor: 23, goalsAgainst: 30 },
  { team: "Marruecos", appearances: 6, played: 23, won: 5, drawn: 7, lost: 11, goalsFor: 22, goalsAgainst: 27 },
  { team: "Camerun", appearances: 8, played: 26, won: 5, drawn: 8, lost: 13, goalsFor: 22, goalsAgainst: 47 }
];

function enrichWorldCupTeamStat(item) {
  return {
    ...item,
    goalDifference: item.goalsFor - item.goalsAgainst,
    points: item.won * 3 + item.drawn
  };
}

function getWorldCupTeamStatsBaseMap() {
  return new Map(worldCupTeamStatsBase.map((item) => [item.team, { ...item }]));
}

function getCurrentWorldCupFinishedMatches() {
  if (typeof matches === "undefined") return [];
  return matches.filter((match) =>
    match.status === "finalizado" &&
    Number.isInteger(match.homeScore) &&
    Number.isInteger(match.awayScore) &&
    !isCalendarEvent(match) &&
    !match.phase?.includes("Ceremonia")
  );
}

function ensureWorldCupTeamStat(statsByTeam, team) {
  if (!statsByTeam.has(team)) {
    statsByTeam.set(team, {
      team,
      appearances: 1,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      goalsFor: 0,
      goalsAgainst: 0
    });
  }
  return statsByTeam.get(team);
}

function addMatchToWorldCupTeamStats(statsByTeam, match) {
  const home = ensureWorldCupTeamStat(statsByTeam, match.home);
  const away = ensureWorldCupTeamStat(statsByTeam, match.away);
  home.played += 1;
  away.played += 1;
  home.goalsFor += match.homeScore;
  home.goalsAgainst += match.awayScore;
  away.goalsFor += match.awayScore;
  away.goalsAgainst += match.homeScore;

  if (match.homeScore > match.awayScore) {
    home.won += 1;
    away.lost += 1;
  } else if (match.homeScore < match.awayScore) {
    away.won += 1;
    home.lost += 1;
  } else {
    home.drawn += 1;
    away.drawn += 1;
  }
}

function getUpdatedWorldCupTeamStats() {
  const statsByTeam = getWorldCupTeamStatsBaseMap();
  const currentTeams = new Set();
  getCurrentWorldCupFinishedMatches().forEach((match) => {
    currentTeams.add(match.home);
    currentTeams.add(match.away);
    addMatchToWorldCupTeamStats(statsByTeam, match);
  });
  currentTeams.forEach((team) => {
    const item = ensureWorldCupTeamStat(statsByTeam, team);
    if (worldCupTeamStatsBase.some((base) => base.team === team)) item.appearances += 1;
  });
  return [...statsByTeam.values()].map(enrichWorldCupTeamStat).filter((item) => item.played >= 20);
}


function getSortedWorldCupTeamStats() {
  return getUpdatedWorldCupTeamStats().sort((a, b) =>
    b.won - a.won ||
    b.played - a.played ||
    b.goalDifference - a.goalDifference ||
    a.team.localeCompare(b.team)
  );
}

function renderWorldCupTeamStats() {
  if (!$("#worldCupTeamStatsRows")) return;
  const rows = getSortedWorldCupTeamStats();
  const leader = rows[0];
  const mostPlayed = [...rows].sort((a, b) => b.played - a.played)[0];
  const bestAttack = [...rows].sort((a, b) => b.goalsFor - a.goalsFor)[0];
  const bestGoalDifference = [...rows].sort((a, b) => b.goalDifference - a.goalDifference)[0];

  $("#worldCupTeamStatsSummary").innerHTML = [
    ["Lider en victorias", leader.team, `${leader.won} PG en ${leader.played} partidos`],
    ["Mas partidos", mostPlayed.team, `${mostPlayed.played} partidos mundialistas`],
    ["Mejor ataque", bestAttack.team, `${bestAttack.goalsFor} goles a favor`],
    ["Mejor diferencia", bestGoalDifference.team, `${bestGoalDifference.goalDifference > 0 ? "+" : ""}${bestGoalDifference.goalDifference} goles`]
  ].map(([label, value, detail]) => `<article class="kpi"><span>${label}</span><strong>${value}</strong><small>${detail}</small></article>`).join("");

  $("#worldCupTeamStatsRows").innerHTML = rows.map((item, index) => `
    <tr>
      <td data-label="#"><strong>${index + 1}</strong></td>
      <td data-label="Seleccion">${teamLabel(item.team)}</td>
      <td data-label="Part.">${item.appearances}</td>
      <td data-label="PJ">${item.played}</td>
      <td data-label="PG"><strong>${item.won}</strong></td>
      <td data-label="PE">${item.drawn}</td>
      <td data-label="PP">${item.lost}</td>
      <td data-label="GF">${item.goalsFor}</td>
      <td data-label="GC">${item.goalsAgainst}</td>
      <td data-label="DG">${item.goalDifference > 0 ? "+" : ""}${item.goalDifference}</td>
      <td data-label="Pts">${item.points}</td>
    </tr>
  `).join("") + `
    <tr>
      <td data-label="Fuente" colspan="11">
        <article class="source-card stats-source-card">
          <strong>Fuente de referencia</strong>
          <p>Tabla historica base hasta Catar 2022, actualizada con los partidos finalizados del Mundial 2026 cargados en la app.</p>
          <a href="https://en.wikipedia.org/wiki/National_team_appearances_in_the_FIFA_World_Cup" target="_blank" rel="noopener noreferrer">Ver tabla historica</a>
        </article>
      </td>
    </tr>
  `;
}
