function isConfirmedClub(club) {
  return Boolean(club) && !isMissingPlayerField(club) && !String(club).startsWith("Selección de ");
}

function isDomesticClub(player) {
  if (!isConfirmedClub(player.club)) return false;
  const terms = domesticClubTerms[player.team] || [];
  const club = normalizeText(player.club);
  return terms.some((term) => club.includes(normalizeText(term)));
}

function getClubCanonicalName(club) {
  const normalized = normalizeText(club || "").replace(/\s+/g, " ").trim();
  if (!normalized) return "";
  const aliases = [
    { name: "Manchester City", terms: ["man city", "manchester city", "manchester city fc"] },
    { name: "Bayern Múnich", terms: ["bayern", "bayern munich", "bayern munchen", "bayern de munich", "fc bayern", "fc bayern munich"] },
    { name: "Arsenal", terms: ["arsenal", "arsenal fc"] },
    { name: "PSG", terms: ["psg", "paris saint germain", "paris saint germain fc"] },
    { name: "Barcelona", terms: ["barcelona", "fc barcelona", "futbol club barcelona"] },
    { name: "Al-Hilal", terms: ["al hilal", "al-hilal", "al hilal sfc", "al-hilal sfc"] },
    { name: "Atlético Madrid", terms: ["atletico madrid", "atletico de madrid", "atl madrid"] },
    { name: "Crystal Palace", terms: ["crystal palace", "crystal palace fc"] },
    { name: "Manchester United", terms: ["man united", "manchester united", "manchester united fc"] },
    { name: "Borussia Dortmund", terms: ["borussia dortmund", "dortmund"] },
    { name: "Benfica", terms: ["benfica", "sl benfica"] },
    { name: "Real Madrid", terms: ["real madrid", "real madrid club de futbol"] },
    { name: "Inter", terms: ["inter", "inter milan"] },
    { name: "Milan", terms: ["milan", "ac milan"] },
    { name: "Liverpool", terms: ["liverpool", "liverpool fc"] }
  ];
  const alias = aliases.find((item) => item.terms.some((term) => normalized === term || normalized.includes(term)));
  if (alias) return alias.name;
  return String(club).trim();
}

function getClubContributionStats() {
  const clubs = getPaniniPlayerRecords().reduce((acc, player) => {
    if (!isConfirmedClub(player.club)) return acc;
    const club = getClubCanonicalName(player.club);
    if (!club) return acc;
    if (!acc[club]) acc[club] = { club, players: [], teams: new Set(), positions: {} };
    acc[club].players.push(player);
    acc[club].teams.add(player.team);
    acc[club].positions[player.position] = (acc[club].positions[player.position] || 0) + 1;
    return acc;
  }, {});

  return Object.values(clubs)
    .map((item) => ({
      ...item,
      count: item.players.length,
      teams: [...item.teams].sort((a, b) => a.localeCompare(b)),
      topPosition: Object.entries(item.positions).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))[0]?.[0] || "Por confirmar"
    }))
    .sort((a, b) => b.count - a.count || a.club.localeCompare(b.club));
}

function renderClubStats() {
  const summary = $("#clubSummaryCards");
  const cards = $("#clubRankingCards");
  const rows = $("#clubRows");
  if (!summary || !cards || !rows) return;
  const stats = getClubContributionStats();
  const totalPlayers = stats.reduce((total, item) => total + item.count, 0);
  const topClub = stats[0];
  const multiSelectionClubs = stats.filter((item) => item.teams.length >= 3).length;

  summary.innerHTML = `
    <article class="kpi"><span>Club con mas convocados</span><strong>${topClub?.club || "-"}</strong><small>${topClub?.count || 0} jugadores</small></article>
    <article class="kpi"><span>Clubes profesionales</span><strong>${stats.length}</strong><small>con jugadores registrados</small></article>
    <article class="kpi"><span>Jugadores con club confirmado</span><strong>${totalPlayers}</strong><small>base del ranking</small></article>
    <article class="kpi"><span>Clubes con 3 o mas selecciones</span><strong>${multiSelectionClubs}</strong><small>aporte multinacional</small></article>
  `;

  cards.innerHTML = stats.slice(0, 10).map((item, index) => `
    <article class="club-card">
      <span class="club-rank">${index + 1}</span>
      <div>
        <strong>${item.club}</strong>
        <small>${item.teams.slice(0, 4).join(", ")}${item.teams.length > 4 ? ` +${item.teams.length - 4}` : ""}</small>
      </div>
      <b>${item.count}</b>
    </article>
  `).join("");

  rows.innerHTML = stats.map((item, index) => `
    <tr>
      <td data-label="#">${index + 1}</td>
      <td data-label="Club"><strong>${item.club}</strong><br><small>${item.topPosition} mas frecuente</small></td>
      <td data-label="Jugadores">${item.count}</td>
      <td data-label="Selecciones">${item.teams.join(", ")}</td>
      <td data-label="Jugadores citados">${item.players.map((player) => `${player.fullName} (${player.team})`).join(", ")}</td>
    </tr>
  `).join("");
}
