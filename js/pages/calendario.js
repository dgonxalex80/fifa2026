function renderMatches() {
  const status = $("#matchStatusFilter")?.value || "todos";
  const phase = $("#phaseFilter")?.value || "todas";
  const filtered = getCalendarItems().filter((item) =>
    (status === "todos" || item.status === status) &&
    (phase === "todas" || item.phase === phase)
  );
  renderCalendarGrid(filtered);
  $("#calendarRows").innerHTML = filtered.map(renderCalendarListItem).join("");
}

function renderCalendarListItem(item) {
  if (isCalendarEvent(item)) {
    return `
      <article class="calendar-list-item calendar-list-event">
        <strong>${formatDate(item.date)}</strong>
        <div class="fixture-label"><span>${item.title}</span></div>
        <small>${item.phase} · ${item.stadium} · ${item.city} · ${item.status}</small>
        <small class="broadcast-detail">${item.description}</small>
      </article>
    `;
  }

  return `
    <article class="calendar-list-item">
      <strong>${formatDate(item.date)}</strong>
      <div class="fixture-label">${teamLabel(item.home)}<span>vs</span>${teamLabel(item.away)}${resultBadge(item)}${broadcastBadge(item)}</div>
      <small>${item.phase} · ${item.stadium} · ${item.city} · ${item.status}</small>
      ${broadcastDetail(item)}
    </article>
  `;
}

function renderCalendarGrid(filteredItems) {
  const monthKeys = [...new Set(filteredItems.map((item) => {
    const date = getTournamentDateParts(item.date);
    return date.year + "-" + date.month;
  }))].sort((a, b) => {
    const [yearA, monthA] = a.split("-").map(Number);
    const [yearB, monthB] = b.split("-").map(Number);
    return yearA - yearB || monthA - monthB;
  });

  $("#calendarGrid").innerHTML = monthKeys.length
    ? monthKeys.map((key) => {
      const [year, month] = key.split("-").map(Number);
      const monthItems = filteredItems.filter((item) => {
        const date = getTournamentDateParts(item.date);
        return date.year === year && date.month === month;
      });
      return renderCalendarMonth(year, month, monthItems);
    }).join("")
    : `<div class="calendar-empty">No hay eventos para los filtros seleccionados.</div>`;
}

function renderCalendarMonth(year, month, monthItems) {
  const firstDay = new Date(Date.UTC(year, month, 1));
  const lastDay = new Date(Date.UTC(year, month + 1, 0));
  const startOffset = (firstDay.getUTCDay() + 6) % 7;
  const totalCells = Math.ceil((startOffset + lastDay.getUTCDate()) / 7) * 7;
  const dayNames = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];
  const cells = Array.from({ length: totalCells }, (_, index) => {
    const day = index - startOffset + 1;
    if (day < 1 || day > lastDay.getUTCDate()) {
      return `<article class="calendar-cell muted-cell"></article>`;
    }
    const dayItems = monthItems.filter((item) => getTournamentDateParts(item.date).day === day);
    return `
      <article class="calendar-cell">
        <strong class="calendar-day">${day}</strong>
        <div class="calendar-events">
          ${dayItems.map(renderCalendarEventButton).join("")}
        </div>
      </article>
    `;
  });

  const monthName = new Intl.DateTimeFormat("es-CO", { month: "long", year: "numeric", timeZone: "UTC" }).format(firstDay);
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

function renderCalendarEventButton(item) {
  if (isCalendarEvent(item)) {
    return `
      <button class="calendar-event calendar-special-event" type="button" title="${item.stadium}, ${item.city}">
        <span>${item.title}</span>
        <small>${formatTime(item.date)}</small>
      </button>
    `;
  }

  return `
    <button class="calendar-event" type="button" title="${item.stadium}, ${item.city}">
      <span>${teamLabel(item.home)}</span>
      ${resultBadge(item)}
      <span>${teamLabel(item.away)}</span>
      <small>${getMatchResult(item) ? "Final" : formatTime(item.date)}${broadcastBadge(item, { compact: true })}</small>
    </button>
  `;
}
