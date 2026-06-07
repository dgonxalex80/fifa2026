function getRestRankingStats() {
  const teamMatches = allGroupStageMatches.reduce((acc, match) => {
    [match.home, match.away].forEach((team) => {
      if (!acc[team]) acc[team] = [];
      acc[team].push(match);
    });
    return acc;
  }, {});

  return Object.entries(teamMatches)
    .map(([team, teamSchedule]) => {
      const schedule = [...teamSchedule].sort((a, b) => new Date(a.date.replace(" ", "T")) - new Date(b.date.replace(" ", "T")));
      const rests = schedule.slice(1).map((match, index) => {
        const previousDate = new Date(schedule[index].date.replace(" ", "T"));
        const currentDate = new Date(match.date.replace(" ", "T"));
        return (currentDate - previousDate) / 3600000;
      });
      const totalHours = rests.reduce((total, hours) => total + hours, 0);
      const averageHours = rests.length ? totalHours / rests.length : 0;
      return {
        team,
        group: schedule[0]?.group || getTeamGroup(team),
        matches: schedule,
        rests,
        totalHours,
        averageHours
      };
    })
    .sort((a, b) => b.totalHours - a.totalHours || b.averageHours - a.averageHours || a.team.localeCompare(b.team));
}

function formatRestDuration(hours) {
  const totalMinutes = Math.round(hours * 60);
  const days = Math.floor(totalMinutes / 1440);
  const remainderAfterDays = totalMinutes % 1440;
  const wholeHours = Math.floor(remainderAfterDays / 60);
  const minutes = remainderAfterDays % 60;
  return [
    days ? `${days} d` : "",
    wholeHours ? `${wholeHours} h` : "",
    minutes ? `${minutes} min` : ""
  ].filter(Boolean).join(" ") || "0 h";
}

function formatRestHours(hours) {
  return `${Number(hours).toLocaleString("es-CO", { maximumFractionDigits: 1 })} h`;
}

function renderRestRanking() {
  const summary = $("#restSummaryCards");
  const rows = $("#restRankingRows");
  if (!summary || !rows) return;
  const stats = getRestRankingStats();
  const leader = stats[0];
  const shortest = stats.at(-1);
  const averageRest = stats.reduce((total, item) => total + item.totalHours, 0) / stats.length;
  const tightestSingleRest = stats
    .flatMap((item) => item.rests.map((hours) => ({ team: item.team, hours })))
    .sort((a, b) => a.hours - b.hours || a.team.localeCompare(b.team))[0];

  summary.innerHTML = `
    <article class="kpi"><span>Mayor total</span><strong>${leader?.team || "-"}</strong><small>${formatRestDuration(leader?.totalHours || 0)} acumulado</small></article>
    <article class="kpi"><span>Menor total</span><strong>${shortest?.team || "-"}</strong><small>${formatRestDuration(shortest?.totalHours || 0)} acumulado</small></article>
    <article class="kpi"><span>Total promedio</span><strong>${formatRestDuration(averageRest || 0)}</strong><small>${stats.length} selecciones evaluadas</small></article>
    <article class="kpi"><span>Descanso mas corto</span><strong>${tightestSingleRest?.team || "-"}</strong><small>${formatRestDuration(tightestSingleRest?.hours || 0)} en un intervalo</small></article>
  `;

  rows.innerHTML = stats.map((item, index) => `
    <tr>
      <td data-label="#">${index + 1}</td>
      <td data-label="Seleccion"><strong>${teamLabel(item.team)}</strong></td>
      <td data-label="Horas 1-2"><strong>${formatRestHours(item.rests[0] || 0)}</strong></td>
      <td data-label="Horas 2-3"><strong>${formatRestHours(item.rests[1] || 0)}</strong></td>
      <td data-label="Total horas"><strong>${formatRestHours(item.totalHours)}</strong></td>
    </tr>
  `).join("");
}
