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
}
