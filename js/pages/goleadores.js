function getCurrentScorerMap() {
  return scorers.reduce((acc, row) => {
    acc[normalizeText(row[0])] = {
      player: row[0],
      team: row[1],
      goals: row[2],
      assists: row[3],
      minutes: row[4]
    };
    return acc;
  }, {});
}

function getCurrentParticipantKeys() {
  return new Set(selectedPlayers.flatMap((player) => [
    normalizeText(player.commonName || ""),
    normalizeText(player.name || "")
  ]).filter(Boolean));
}

function getUpdatedAllTimeScorers() {
  const currentScorers = getCurrentScorerMap();
  const participantKeys = getCurrentParticipantKeys();

  return allTimeWorldCupScorers.map((item) => {
    const current = currentScorers[normalizeText(item.player)] || { goals: 0, assists: 0, minutes: 0 };
    const isCurrentParticipant = participantKeys.has(normalizeText(item.player)) || current.goals > 0;
    const currentGoals = isCurrentParticipant ? current.goals : 0;
    return {
      ...item,
      currentGoals,
      updatedGoals: item.goals + currentGoals,
      isCurrentParticipant
    };
  }).sort((a, b) =>
    b.updatedGoals - a.updatedGoals ||
    b.currentGoals - a.currentGoals ||
    a.matches - b.matches ||
    a.player.localeCompare(b.player)
  );
}

function renderAllTimeScorers() {
  const rows = $("#allTimeScorersRows");
  if (!rows) return;

  rows.innerHTML = getUpdatedAllTimeScorers().map((item, index) => `
    <tr class="${item.isCurrentParticipant ? "current-participant-row" : ""}">
      <td data-label="#"><strong>${index + 1}</strong></td>
      <td data-label="Jugador"><strong>${item.player}</strong></td>
      <td data-label="Seleccion">${teamLabel(item.team)}</td>
      <td data-label="Partidos base">${item.matches}</td>
      <td data-label="Goles base">${item.goals}</td>
      <td data-label="2026"><strong>${item.currentGoals || "-"}</strong></td>
      <td data-label="Total actualizado"><strong>${item.updatedGoals}</strong></td>
      <td data-label="Estado"><span class="status-pill ${item.isCurrentParticipant ? "active-status" : "muted-status"}">${item.isCurrentParticipant ? "Participa" : "Histórico"}</span></td>
    </tr>
  `).join("");
}

function renderScorers() {
  const orderedScorers = [...scorers].sort((a, b) =>
    b[2] - a[2] ||
    b[3] - a[3] ||
    a[4] - b[4] ||
    a[0].localeCompare(b[0])
  );

  $("#scorersRows").innerHTML = orderedScorers.map((row) => `
    <tr><td data-label="Jugador"><strong>${row[0]}</strong></td><td data-label="Equipo">${teamLabel(row[1])}</td><td data-label="Goles">${row[2]}</td><td data-label="Asistencias">${row[3]}</td><td data-label="Minutos">${row[4]}</td></tr>
  `).join("");

  renderAllTimeScorers();
}
