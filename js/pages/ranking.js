const fifaRankingData = [
  ["Argentina", 1, "CONMEBOL"], ["Espana", 2, "UEFA"], ["Francia", 3, "UEFA"], ["Inglaterra", 4, "UEFA"], ["Brasil", 5, "CONMEBOL"], ["Portugal", 6, "UEFA"], ["Paises Bajos", 7, "UEFA"], ["Belgica", 8, "UEFA"], ["Alemania", 9, "UEFA"], ["Croacia", 10, "UEFA"], ["Uruguay", 11, "CONMEBOL"], ["Colombia", 12, "CONMEBOL"], ["Marruecos", 13, "CAF"], ["Estados Unidos", 15, "Concacaf"], ["Mexico", 16, "Concacaf"], ["Japon", 17, "AFC"], ["Suiza", 18, "UEFA"], ["Senegal", 19, "CAF"], ["Iran", 20, "AFC"], ["Corea del Sur", 22, "AFC"], ["Austria", 23, "UEFA"], ["Australia", 25, "AFC"], ["Suecia", 26, "UEFA"], ["Ecuador", 27, "CONMEBOL"], ["Turquia", 32, "UEFA"], ["Egipto", 33, "CAF"], ["Argelia", 36, "CAF"], ["Canada", 37, "Concacaf"], ["Panama", 38, "Concacaf"], ["Republica Checa", 40, "UEFA"], ["Escocia", 41, "UEFA"], ["Tunez", 42, "CAF"], ["Costa de Marfil", 43, "CAF"], ["Noruega", 44, "UEFA"], ["Catar", 49, "AFC"], ["Paraguay", 54, "CONMEBOL"], ["Arabia Saudita", 56, "AFC"], ["Irak", 58, "AFC"], ["Sudafrica", 59, "CAF"], ["Republica Democratica del Congo", 61, "CAF"], ["Uzbekistan", 63, "AFC"], ["Ghana", 68, "CAF"], ["Cabo Verde", 69, "CAF"], ["Jordania", 70, "AFC"], ["Bosnia y Herzegovina", 72, "UEFA"], ["Haiti", 85, "Concacaf"], ["Curazao", 90, "Concacaf"], ["Nueva Zelanda", 95, "OFC"]
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
    ["Fuente", "FIFA", "actualizable desde ranking oficial"]
  ].map(([label, value, detail]) => `<article class="kpi"><span>${label}</span><strong>${value}</strong><small>${detail}</small></article>`).join("");

  $("#rankingCards").innerHTML = ranking.map((item) => `
    <article class="ranking-card ${item.rank && item.rank <= 12 ? "ranking-card-elite" : ""}">
      <span class="ranking-position">${item.rank ? `#${item.rank}` : "s/d"}</span>
      <div><strong>${teamLabel(item.team)}</strong><small>${item.confederation} · Grupo ${getTeamGroup(item.team)}</small></div>
    </article>
  `).join("") + `
    <article class="source-card ranking-source">
      <strong>Fuente oficial</strong>
      <p>FIFA/Coca-Cola Men's World Ranking. La app conserva esta tabla como dato local de referencia para consulta rapida.</p>
      <a href="https://inside.fifa.com/en/fifa-world-ranking/men" target="_blank" rel="noopener noreferrer">Abrir ranking FIFA</a>
    </article>`;
}
