function renderMatches() {
  const status = $("#matchStatusFilter")?.value || "todos";
  const phase = $("#phaseFilter")?.value || "todas";
  const filtered = matches.filter((match) =>
    (status === "todos" || match.status === status) &&
    (phase === "todas" || match.phase === phase)
  );
  renderCalendarGrid(filtered);
  $("#calendarRows").innerHTML = filtered.map((match) => `
    <article class="calendar-list-item">
      <strong>${formatDate(match.date)}</strong>
      <div class="fixture-label">${teamLabel(match.home)}<span>vs</span>${teamLabel(match.away)}${resultBadge(match)}</div>
      <small>${match.phase} · ${match.stadium} · ${match.city} · ${match.status}</small>
    </article>
  `).join("");
}

function renderCalendarGrid(filteredMatches) {
  const monthKeys = [...new Set(filteredMatches.map((match) => {
    const date = new Date(match.date.replace(" ", "T"));
    return `${date.getFullYear()}-${date.getMonth()}`;
  }))].sort((a, b) => {
    const [yearA, monthA] = a.split("-").map(Number);
    const [yearB, monthB] = b.split("-").map(Number);
    return yearA - yearB || monthA - monthB;
  });

  $("#calendarGrid").innerHTML = monthKeys.length
    ? monthKeys.map((key) => {
      const [year, month] = key.split("-").map(Number);
      const monthMatches = filteredMatches.filter((match) => {
        const date = new Date(match.date.replace(" ", "T"));
        return date.getFullYear() === year && date.getMonth() === month;
      });
      return renderCalendarMonth(year, month, monthMatches);
    }).join("")
    : `<div class="calendar-empty">No hay partidos para los filtros seleccionados.</div>`;
}

function renderCalendarMonth(year, month, monthMatches) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startOffset = (firstDay.getDay() + 6) % 7;
  const totalCells = Math.ceil((startOffset + lastDay.getDate()) / 7) * 7;
  const dayNames = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];
  const cells = Array.from({ length: totalCells }, (_, index) => {
    const day = index - startOffset + 1;
    if (day < 1 || day > lastDay.getDate()) {
      return `<article class="calendar-cell muted-cell"></article>`;
    }
    const dayMatches = monthMatches.filter((match) => new Date(match.date.replace(" ", "T")).getDate() === day);
    return `
      <article class="calendar-cell">
        <strong class="calendar-day">${day}</strong>
        <div class="calendar-events">
          ${dayMatches.map((match) => `
            <button class="calendar-event" type="button" title="${match.stadium}, ${match.city}">
              <span>${teamLabel(match.home)}</span>
              ${resultBadge(match)}
              <span>${teamLabel(match.away)}</span>
              <small>${getMatchResult(match) ? "Final" : new Date(match.date.replace(" ", "T")).toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit" })}</small>
            </button>
          `).join("")}
        </div>
      </article>
    `;
  });

  const monthName = new Intl.DateTimeFormat("es-CO", { month: "long", year: "numeric" }).format(firstDay);
  return `
    <section class="calendar-month">
      <h4>${monthName}</h4>
      <div class="calendar-month-grid">
        ${dayNames.map((day) => `<div class="calendar-head">${day}</div>`).join("")}
        ${cells.join("")}
      </div>
    </section>
  `;
}
