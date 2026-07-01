const fifaRankingData = [
  ["Argentina", 1, "CONMEBOL"],
  ["Espana", 2, "UEFA"],
  ["Francia", 3, "UEFA"],
  ["Inglaterra", 4, "UEFA"],
  ["Portugal", 5, "UEFA"],
  ["Brasil", 6, "CONMEBOL"],
  ["Marruecos", 7, "CAF"],
  ["Paises Bajos", 8, "UEFA"],
  ["Belgica", 9, "UEFA"],
  ["Alemania", 10, "UEFA"],
  ["Croacia", 11, "UEFA"],
  ["Colombia", 13, "CONMEBOL"],
  ["Mexico", 14, "Concacaf"],
  ["Senegal", 15, "CAF"],
  ["Uruguay", 16, "CONMEBOL"],
  ["Estados Unidos", 17, "Concacaf"],
  ["Japon", 18, "AFC"],
  ["Suiza", 19, "UEFA"],
  ["Iran", 20, "AFC"],
  ["Turquia", 22, "UEFA"],
  ["Ecuador", 23, "CONMEBOL"],
  ["Austria", 24, "UEFA"],
  ["Corea del Sur", 25, "AFC"],
  ["Australia", 27, "AFC"],
  ["Argelia", 28, "CAF"],
  ["Egipto", 29, "CAF"],
  ["Canada", 30, "Concacaf"],
  ["Noruega", 31, "UEFA"],
  ["Costa de Marfil", 33, "CAF"],
  ["Panama", 34, "Concacaf"],
  ["Suecia", 38, "UEFA"],
  ["Republica Checa", 40, "UEFA"],
  ["Paraguay", 41, "CONMEBOL"],
  ["Escocia", 42, "UEFA"],
  ["Tunez", 45, "CAF"],
  ["Republica Democratica del Congo", 46, "CAF"],
  ["Uzbekistan", 50, "AFC"],
  ["Catar", 56, "AFC"],
  ["Irak", 57, "AFC"],
  ["Sudafrica", 60, "CAF"],
  ["Arabia Saudita", 61, "AFC"],
  ["Jordania", 63, "AFC"],
  ["Bosnia y Herzegovina", 64, "UEFA"],
  ["Cabo Verde", 67, "CAF"],
  ["Ghana", 73, "CAF"],
  ["Curazao", 82, "Concacaf"],
  ["Haiti", 83, "Concacaf"],
  ["Nueva Zelanda", 85, "OFC"]
].map(([team, rank, confederation]) => ({ team, rank, confederation }));

function getRankingForTeam(team) {
  return fifaRankingData.find((item) => item.team === team) || { team, rank: null, confederation: "-" };
}

function renderRanking() {
  if (!$("#rankingCards")) return;
  const teams = [...new Set(Object.values(groups).flatMap((rows) => rows.map(([team]) => team)))];
  const ranking = teams.map(getRankingForTeam).sort((a, b) => (a.rank || 999) - (b.rank || 999) || a.team.localeCompare(b.team));
  const ranked = ranking.filter((item) => item.rank);
  const confederations = new Set(ranked.map((item) => item.confederation));

  $("#rankingSummaryCards").innerHTML = [
    ["Selecciones rankeadas", ranked.length, `${teams.length} del hub`],
    ["Mejor ubicada", ranked[0]?.team || "-", `puesto ${ranked[0]?.rank || "-"}`],
    ["Confederaciones", confederations.size, "en la tabla local"],
    ["Fuente", "FIFA", "corte oficial 11 jun 2026"]
  ].map(([label, value, detail]) => `<article class="kpi"><span>${label}</span><strong>${value}</strong><small>${detail}</small></article>`).join("");

  $("#rankingCards").innerHTML = ranking.map((item) => `
    <article class="ranking-card ${item.rank && item.rank <= 12 ? "ranking-card-elite" : ""}">
      <span class="ranking-position">${item.rank ? `#${item.rank}` : "s/d"}</span>
      <div><strong>${teamLabel(item.team)}</strong><small>${item.confederation} · Grupo ${getTeamGroup(item.team)}</small></div>
    </article>
  `).join("") + `
    <article class="source-card ranking-source">
      <strong>Fuente oficial</strong>
      <p>FIFA/Coca-Cola Men's World Ranking, corte oficial del 11 de junio de 2026. La app conserva esta tabla como dato local de referencia para consulta rapida.</p>
      <a href="https://inside.fifa.com/en/fifa-world-ranking/men" target="_blank" rel="noopener noreferrer">Abrir ranking FIFA</a>
    </article>`;
}
