function getWorldCupChampionCounts() {
  return worldCupHistory.reduce((counts, item) => {
    counts[item.champion] = (counts[item.champion] || 0) + 1;
    return counts;
  }, {});
}

function renderWorldCupHistory() {
  if (!$("#worldCupHistoryRows")) return;
  const totalGoals = worldCupHistory.reduce((total, item) => total + item.goals, 0);
  const totalMatches = worldCupHistory.reduce((total, item) => total + item.matches, 0);
  const highestScoring = [...worldCupHistory].sort((a, b) => b.goals - a.goals)[0];
  const biggestGoldenBoot = [...worldCupHistory].sort((a, b) => b.topScorerGoals - a.topScorerGoals)[0];
  const championCounts = getWorldCupChampionCounts();
  const mostTitles = Object.entries(championCounts).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))[0];

  $("#worldCupHistorySummary").innerHTML = `
    <article class="kpi"><span>Ediciones jugadas</span><strong>${worldCupHistory.length}</strong><small>de Uruguay 1930 a Catar 2022</small></article>
    <article class="kpi"><span>Goles totales</span><strong>${totalGoals}</strong><small>${(totalGoals / totalMatches).toFixed(2)} goles por partido</small></article>
    <article class="kpi"><span>Más títulos</span><strong>${mostTitles[0]}</strong><small>${mostTitles[1]} campeonatos mundiales</small></article>
    <article class="kpi"><span>Último campeón</span><strong>${worldCupHistory.at(-1).champion}</strong><small>${worldCupHistory.at(-1).year} · sede ${worldCupHistory.at(-1).host}</small></article>
  `;

  $("#worldCupHistoryRows").innerHTML = worldCupHistory.map((item) => {
    const goalsPerMatch = (item.goals / item.matches).toFixed(2);
    return `
      <tr>
        <td data-label="Año"><strong>${item.year}</strong></td>
        <td data-label="Sede">${item.host}</td>
        <td data-label="Top 4">
          <div class="worldcup-top4">
            <strong>1. ${item.champion}</strong>
            <span>2. ${item.runnerUp}</span>
            <span>3. ${item.third}</span>
            <span>4. ${item.fourth}</span>
          </div>
        </td>
        <td data-label="Equipos">${item.teams}</td>
        <td data-label="Partidos">${item.matches}</td>
        <td data-label="Goles">${item.goals}</td>
        <td data-label="Prom. gol">${goalsPerMatch}</td>
        <td data-label="Goleador">${item.topScorer} <small>(${item.topScorerGoals})</small></td>
        <td data-label="Arquero destacado">${item.keeper}</td>
        <td data-label="Colombia">${item.colombiaPosition}</td>
      </tr>
    `;
  }).join("");

  $("#worldCupChampionList").innerHTML = Object.entries(championCounts)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([team, titles]) => `
      <article class="champion-row">
        <span>${team}</span>
        <strong>${titles}</strong>
      </article>
    `).join("");

  const bestColombiaRun = colombiaWorldCupHistory.find((item) => item.year === 2014);
  $("#colombiaWorldCupNote").innerHTML = `
    <p>Colombia ha disputado ${colombiaWorldCupHistory.length} Copas del Mundo. Su mejor actuación fue en ${bestColombiaRun.year}, cuando llegó a ${bestColombiaRun.result.toLowerCase()} en Brasil.</p>
    <div class="colombia-worldcup-list">
      ${colombiaWorldCupHistory.map((item) => `
        <article>
          <strong>${item.year}</strong>
          <span>${item.host} · ${item.result}</span>
          <small>Puesto final: ${item.position}</small>
          <small>${item.note}</small>
        </article>
      `).join("")}
    </div>
  `;

  $("#worldCupRecords").innerHTML = `
    <article class="history-record"><span>Edición con más goles</span><strong>${highestScoring.year}</strong><small>${highestScoring.goals} goles · ${highestScoring.host}</small></article>
    <article class="history-record"><span>Máximo goleador en una edición</span><strong>${biggestGoldenBoot.topScorer}</strong><small>${biggestGoldenBoot.topScorerGoals} goles · ${biggestGoldenBoot.year}</small></article>
    <article class="history-record"><span>Primer campeón</span><strong>${worldCupHistory[0].champion}</strong><small>${worldCupHistory[0].year} · ${worldCupHistory[0].host}</small></article>
    <article class="history-record"><span>Formato más reciente</span><strong>32 equipos</strong><small>vigente entre 1998 y 2022</small></article>
  `;
}
