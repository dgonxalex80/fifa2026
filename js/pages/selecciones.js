function renderBirthRepresentationStats() {
  const rows = $("#birthRepresentationRows");
  if (!rows) return;
  rows.innerHTML = [...birthRepresentationStats]
    .sort((a, b) => b.bornInRepresentedCountry - a.bornInRepresentedCountry || a.team.localeCompare(b.team))
    .map((item) => {
      const localShare = Math.round((item.bornInRepresentedCountry / item.rosterSize) * 1000) / 10;
      return `
        <tr>
          <td data-label="Seleccion"><strong>${teamLabel(item.team)}</strong></td>
          <td data-label="Nacidos en el pais">${item.bornInRepresentedCountry}</td>
          <td data-label="No nacidos alli">${item.foreignBorn}</td>
          <td data-label="% local">${localShare.toLocaleString("es-CO")}%</td>
        </tr>
      `;
    }).join("");
}

function getBirthRepresentationStat(team) {
  return birthRepresentationStats.find((item) => item.team === team) || {
    team,
    rosterSize: 26,
    foreignBorn: 0,
    bornInRepresentedCountry: 26
  };
}

function getTeamGroup(team) {
  return Object.entries(groups).find(([, rows]) => rows.some(([name]) => name === team))?.[0] || "-";
}

function formatNumber(value, decimals = 1) {
  return Number.isFinite(value) ? value.toLocaleString("es-CO", { maximumFractionDigits: decimals, minimumFractionDigits: decimals }) : "-";
}

function formatPercent(value) {
  return Number.isFinite(value) ? `${formatNumber(value)}%` : "-";
}

function getMostFrequentValue(values) {
  const counts = values.filter(Boolean).reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
  const [label, count] = Object.entries(counts).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))[0] || ["Por confirmar", 0];
  return { label, count };
}

function getSelectionStats() {
  const players = getPaniniPlayerRecords();
  return paniniAlbumTeams.map((team) => {
    const teamPlayers = players.filter((player) => player.team === team.team);
    const birthStat = getBirthRepresentationStat(team.team);
    const confirmedClubPlayers = teamPlayers.filter((player) => isConfirmedClub(player.club));
    const domesticClubPlayers = confirmedClubPlayers.filter(isDomesticClub);
    const abroadPlayers = confirmedClubPlayers.length - domesticClubPlayers.length;
    const ages = teamPlayers.map((player) => Number(player.age)).filter(Number.isFinite);
    const averageAge = ages.length ? ages.reduce((total, age) => total + age, 0) / ages.length : NaN;
    const completePlayers = teamPlayers.filter(hasCompletePlayerData).length;
    const positionLeader = getMostFrequentValue(teamPlayers.map((player) => player.position));
    const topClub = getMostFrequentValue(confirmedClubPlayers.map((player) => player.club));
    const localBirthShare = (birthStat.bornInRepresentedCountry / birthStat.rosterSize) * 100;
    const abroadShare = confirmedClubPlayers.length ? (abroadPlayers / confirmedClubPlayers.length) * 100 : NaN;

    return {
      team: team.team,
      group: getTeamGroup(team.team),
      rosterSize: birthStat.rosterSize,
      listedPlayers: teamPlayers.length,
      bornInRepresentedCountry: birthStat.bornInRepresentedCountry,
      foreignBorn: birthStat.foreignBorn,
      localBirthShare,
      confirmedClubPlayers: confirmedClubPlayers.length,
      domesticClubPlayers: domesticClubPlayers.length,
      abroadPlayers,
      abroadShare,
      averageAge,
      ageSample: ages.length,
      completePlayers,
      positionLeader,
      topClub
    };
  });
}

function formatCompactTeamList(items, limit = 3) {
  const names = items.map((item) => item.team);
  const visible = names.slice(0, limit).join(", ");
  const hidden = names.length - limit;
  return hidden > 0 ? `${visible} +${hidden}` : visible;
}

function renderSelectionStats() {
  const container = $("#selectionCards");
  const summary = $("#selectionSummaryCards");
  if (!container || !summary) return;
  const stats = getSelectionStats().sort((a, b) => a.group.localeCompare(b.group) || a.team.localeCompare(b.team));
  const maxLocalBirthShare = Math.max(...stats.map((item) => item.localBirthShare));
  const teamsWithMostLocalBirth = stats
    .filter((item) => item.localBirthShare === maxLocalBirthShare)
    .sort((a, b) => a.team.localeCompare(b.team));
  const teamsWithMostAbroad = [...stats].filter((item) => Number.isFinite(item.abroadShare)).sort((a, b) => b.abroadShare - a.abroadShare || a.team.localeCompare(b.team)).slice(0, 3);
  const ageValues = stats.map((item) => item.averageAge).filter(Number.isFinite);
  const globalAverageAge = ageValues.reduce((total, age) => total + age, 0) / ageValues.length;

  summary.innerHTML = `
    <article class="selection-summary-card"><span>Proporción de nacidos en el país representado</span><strong>${formatCompactTeamList(teamsWithMostLocalBirth)}</strong><small>${teamsWithMostLocalBirth.length} selecciones con ${teamsWithMostLocalBirth[0]?.bornInRepresentedCountry}/${teamsWithMostLocalBirth[0]?.rosterSize} jugadores · ${formatPercent(teamsWithMostLocalBirth[0]?.localBirthShare)}</small></article>
    <article class="selection-summary-card"><span>Mas jugadores en el exterior</span><strong>${formatCompactTeamList(teamsWithMostAbroad, 2)}</strong><small>${formatPercent(teamsWithMostAbroad[0]?.abroadShare)} con club confirmado fuera del pais</small></article>
    <article class="selection-summary-card"><span>Edad promedio global</span><strong>${formatNumber(globalAverageAge)} años</strong><small>${ageValues.length} selecciones con muestra disponible</small></article>
  `;

  container.innerHTML = stats.map((item) => `
    <article class="selection-card">
      <div class="selection-card-head">
        <div>
          <span class="selection-group">Grupo ${item.group}</span>
          <h3>${teamLabel(item.team)}</h3>
        </div>
        <strong>${item.listedPlayers}</strong>
      </div>
      <div class="selection-metrics">
        <div><span>Proporción de nacidos en el país representado</span><strong>${formatPercent(item.localBirthShare)}</strong><small>${item.bornInRepresentedCountry}/${item.rosterSize} jugadores</small></div>
        <div><span>En exterior</span><strong>${formatPercent(item.abroadShare)}</strong><small>${item.abroadPlayers}/${item.confirmedClubPlayers} con club</small></div>
        <div><span>Edad prom.</span><strong>${formatNumber(item.averageAge)}</strong><small>n=${item.ageSample}</small></div>
        <div><span>Datos completos</span><strong>${item.completePlayers}</strong><small>fichas verificadas</small></div>
      </div>
      <div class="selection-bars">
        <label><span>Proporción de nacidos en el país representado</span><i><b style="width: ${Math.min(item.localBirthShare, 100)}%"></b></i></label>
        <label><span>Club exterior</span><i><b style="width: ${Number.isFinite(item.abroadShare) ? Math.min(item.abroadShare, 100) : 0}%"></b></i></label>
      </div>
      <div class="selection-notes">
        <span>${item.positionLeader.label} dominante (${item.positionLeader.count})</span>
        <span>Club mas repetido: ${item.topClub.label}</span>
      </div>
    </article>
  `).join("");
}
