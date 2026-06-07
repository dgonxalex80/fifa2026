function renderScorers() {
  $("#scorersRows").innerHTML = scorers.map((row) => `
    <tr><td data-label="Jugador"><strong>${row[0]}</strong></td><td data-label="Equipo">${teamLabel(row[1])}</td><td data-label="Goles">${row[2]}</td><td data-label="Asistencias">${row[3]}</td><td data-label="Minutos">${row[4]}</td></tr>
  `).join("");
}
