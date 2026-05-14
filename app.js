const matches = [
  { id: 1, date: "2026-06-11 20:00", home: "Mexico", away: "Sudafrica", phase: "Grupos", stadium: "Estadio Azteca", city: "Ciudad de Mexico", status: "pendiente" },
  { id: 2, date: "2026-06-12 17:00", home: "Estados Unidos", away: "Paraguay", phase: "Grupos", stadium: "SoFi Stadium", city: "Los Angeles", status: "pendiente" },
  { id: 3, date: "2026-06-13 15:00", home: "Brasil", away: "Marruecos", phase: "Grupos", stadium: "MetLife Stadium", city: "New York/New Jersey", status: "pendiente" },
  { id: 4, date: "2026-06-14 18:00", home: "Espana", away: "Uruguay", phase: "Grupos", stadium: "AT&T Stadium", city: "Dallas", status: "pendiente" },
  { id: 5, date: "2026-06-15 20:00", home: "Colombia", away: "Portugal", phase: "Grupos", stadium: "Hard Rock Stadium", city: "Miami", status: "pendiente" },
  { id: 6, date: "2026-06-16 19:00", home: "Inglaterra", away: "Croacia", phase: "Grupos", stadium: "BC Place", city: "Vancouver", status: "pendiente" },
  { id: 7, date: "2026-06-17 20:00", home: "Francia", away: "Senegal", phase: "Grupos", stadium: "Mercedes-Benz Stadium", city: "Atlanta", status: "pendiente" },
  { id: 8, date: "2026-06-18 18:00", home: "Argentina", away: "Argelia", phase: "Grupos", stadium: "MetLife Stadium", city: "New York/New Jersey", status: "pendiente" }
];

const flags = {
  "Arabia Saudita": "sa",
  Alemania: "de",
  Argelia: "dz",
  Argentina: "ar",
  Australia: "au",
  Austria: "at",
  Belgica: "be",
  Brasil: "br",
  "Cabo Verde": "cv",
  Canada: "ca",
  Catar: "qa",
  Colombia: "co",
  Corea: "kr",
  "Corea del Sur": "kr",
  Croacia: "hr",
  Curazao: "cw",
  Ecuador: "ec",
  Egipto: "eg",
  Espana: "es",
  "Estados Unidos": "us",
  Francia: "fr",
  Ghana: "gh",
  Haiti: "ht",
  Inglaterra: "gb-eng",
  Iran: "ir",
  Jordania: "jo",
  Japon: "jp",
  Marruecos: "ma",
  Mexico: "mx",
  Noruega: "no",
  "Nueva Zelanda": "nz",
  Panama: "pa",
  Paraguay: "py",
  "Paises Bajos": "nl",
  Portugal: "pt",
  "Costa de Marfil": "ci",
  Escocia: "gb-sct",
  Senegal: "sn",
  Sudafrica: "za",
  Suiza: "ch",
  Suecia: "se",
  Tunez: "tn",
  Uzbekistan: "uz",
  Uruguay: "uy"
};

const users = [
  { name: "Mariana R.", points: 0, hits: 0, accuracy: 0, trend: "igual" },
  { name: "Diego M.", points: 0, hits: 0, accuracy: 0, trend: "igual" },
  { name: "Laura S.", points: 0, hits: 0, accuracy: 0, trend: "igual" },
  { name: "Andres C.", points: 0, hits: 0, accuracy: 0, trend: "igual" },
  { name: "Sofia P.", points: 0, hits: 0, accuracy: 0, trend: "igual" },
  { name: "Camilo T.", points: 0, hits: 0, accuracy: 0, trend: "igual" }
];

const scorers = [
  ["Sin registros", "-", "-", "-", "-"]
];

const groups = {
  A: [["Mexico", 0, 0], ["Sudafrica", 0, 0], ["Corea del Sur", 0, 0], ["Ganador Play-off D", 0, 0]],
  B: [["Canada", 0, 0], ["Ganador Play-off A", 0, 0], ["Catar", 0, 0], ["Suiza", 0, 0]],
  C: [["Brasil", 0, 0], ["Marruecos", 0, 0], ["Haiti", 0, 0], ["Escocia", 0, 0]],
  D: [["Estados Unidos", 0, 0], ["Paraguay", 0, 0], ["Australia", 0, 0], ["Ganador Play-off C", 0, 0]],
  E: [["Alemania", 0, 0], ["Curazao", 0, 0], ["Costa de Marfil", 0, 0], ["Ecuador", 0, 0]],
  F: [["Paises Bajos", 0, 0], ["Japon", 0, 0], ["Ganador Play-off B", 0, 0], ["Tunez", 0, 0]],
  G: [["Belgica", 0, 0], ["Egipto", 0, 0], ["Iran", 0, 0], ["Nueva Zelanda", 0, 0]],
  H: [["Espana", 0, 0], ["Cabo Verde", 0, 0], ["Arabia Saudita", 0, 0], ["Uruguay", 0, 0]],
  I: [["Francia", 0, 0], ["Senegal", 0, 0], ["Ganador Play-off 2", 0, 0], ["Noruega", 0, 0]],
  J: [["Argentina", 0, 0], ["Argelia", 0, 0], ["Austria", 0, 0], ["Jordania", 0, 0]],
  K: [["Portugal", 0, 0], ["Ganador Play-off 1", 0, 0], ["Uzbekistan", 0, 0], ["Colombia", 0, 0]],
  L: [["Inglaterra", 0, 0], ["Croacia", 0, 0], ["Ghana", 0, 0], ["Panama", 0, 0]]
};

const knockoutRounds = [
  {
    name: "Dieciseisavos",
    matches: Array.from({ length: 16 }, (_, index) => [`Clasificado ${index * 2 + 1}`, `Clasificado ${index * 2 + 2}`])
  },
  {
    name: "Octavos de final",
    matches: [
      ["Ganador D16-1", "Ganador D16-2"], ["Ganador D16-3", "Ganador D16-4"], ["Ganador D16-5", "Ganador D16-6"], ["Ganador D16-7", "Ganador D16-8"],
      ["Ganador D16-9", "Ganador D16-10"], ["Ganador D16-11", "Ganador D16-12"], ["Ganador D16-13", "Ganador D16-14"], ["Ganador D16-15", "Ganador D16-16"]
    ]
  },
  {
    name: "Cuartos de final",
    matches: [["Ganador OF1", "Ganador OF2"], ["Ganador OF3", "Ganador OF4"], ["Ganador OF5", "Ganador OF6"], ["Ganador OF7", "Ganador OF8"]]
  },
  {
    name: "Semifinales",
    matches: [["Ganador CF1", "Ganador CF2"], ["Ganador CF3", "Ganador CF4"]]
  },
  {
    name: "Tercer puesto",
    matches: [["Perdedor SF1", "Perdedor SF2"]]
  },
  {
    name: "Final",
    matches: [["Ganador SF1", "Ganador SF2"]]
  }
];

const rules = [
  ["Marcador exacto", 5],
  ["Ganador correcto", 3],
  ["Diferencia de goles", 2],
  ["Goleador bonus", 2],
  ["Campeon acertado", 12]
];

const predictions = [];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

function normalizeText(value) {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function teamLabel(team) {
  const code = flags[team];
  if (!code) return `<span class="team-label"><span>${team}</span></span>`;
  return `
    <span class="team-label">
      <img class="flag-img" src="https://flagcdn.com/w40/${code}.png" alt="Bandera de ${team}" loading="lazy" />
      <span>${team}</span>
    </span>
  `;
}

function setPage(page) {
  $$(".nav-item").forEach((button) => button.classList.toggle("active", button.dataset.page === page));
  $$(".page").forEach((section) => section.classList.toggle("active", section.id === `page-${page}`));
  $("#pageTitle").textContent = page.charAt(0).toUpperCase() + page.slice(1);
  $("#sidebar").classList.remove("open");
  if (page === "analitica") drawCharts();
}

function setTheme(theme) {
  document.body.dataset.theme = theme;
  localStorage.setItem("fifa2026-theme", theme);
  if ($("#themeSelect")) $("#themeSelect").value = theme;
}

function getSearchIndex() {
  const pages = [
    ["Inicio", "Pagina", "inicio"],
    ["Calendario", "Pagina", "calendario"],
    ["Pronosticos", "Pagina", "pronosticos"],
    ["Posiciones", "Pagina", "posiciones"],
    ["Goleadores", "Pagina", "goleadores"],
    ["Ranking", "Pagina", "ranking"],
    ["Analitica", "Pagina", "analitica"],
    ["Llaves", "Pagina", "llaves"],
    ["Admin", "Pagina", "admin"]
  ];
  const teams = [...new Set([
    ...Object.keys(flags),
    ...matches.flatMap((match) => [match.home, match.away]),
    ...Object.values(groups).flatMap((rows) => rows.map(([team]) => team))
  ])]
    .filter((team) => !team.startsWith("Ganador"))
    .map((team) => [team, "Pais", "posiciones"]);
  const fixtures = matches.map((match) => [`${match.home} vs ${match.away}`, `${match.phase} · ${formatDate(match.date)}`, "calendario"]);
  const participants = users.map((user) => [user.name, "Usuario", "ranking"]);
  return [...teams, ...fixtures, ...participants, ...pages].map(([label, type, page]) => ({
    label,
    type,
    page,
    key: normalizeText(label)
  }));
}

function renderSearchResults(query) {
  const resultsBox = $("#searchResults");
  const term = normalizeText(query);
  if (!term) {
    resultsBox.classList.remove("open");
    resultsBox.innerHTML = "";
    return;
  }
  const results = getSearchIndex()
    .filter((item) => item.key.startsWith(term) || item.key.includes(term))
    .sort((a, b) => Number(!a.key.startsWith(term)) - Number(!b.key.startsWith(term)) || a.label.localeCompare(b.label))
    .slice(0, 8);

  resultsBox.innerHTML = results.length ? results.map((item) => `
    <button class="search-result" type="button" data-page="${item.page}" data-label="${item.label}">
      <span>${teamLabel(item.label)}</span>
      <small>${item.type}</small>
    </button>
  `).join("") : `<div class="search-empty">Sin coincidencias</div>`;
  resultsBox.classList.add("open");
}

function selectSearchResult(button) {
  const page = button.dataset.page;
  const label = button.dataset.label;
  $("#globalSearch").value = label;
  $("#searchResults").classList.remove("open");
  setPage(page);
  if (page === "ranking") {
    $("#rankingSearch").value = label;
    renderRanking();
  }
}

function renderCountdown() {
  const target = new Date("2026-06-11T20:00:00-05:00");
  const diff = Math.max(target - new Date(), 0);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff / 3600000) % 24);
  const minutes = Math.floor((diff / 60000) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  $("#countdown").innerHTML = [
    ["Dias", days],
    ["Horas", hours],
    ["Min", minutes],
    ["Seg", seconds]
  ].map(([label, value]) => `<div><strong>${String(value).padStart(2, "0")}</strong><span>${label}</span></div>`).join("");
}

function renderMatches() {
  $("#homeMatches").innerHTML = matches.slice(0, 4).map((match) => `
    <article class="match-card">
      <div><strong>${teamLabel(match.home)}</strong><br><small>${match.city}</small></div>
      <span class="score-chip">${formatDate(match.date)}</span>
      <div class="team-away"><strong>${teamLabel(match.away)}</strong><br><small>${match.phase}</small></div>
    </article>
  `).join("");

  const status = $("#matchStatusFilter")?.value || "todos";
  const phase = $("#phaseFilter")?.value || "todas";
  const filtered = matches.filter((match) =>
    (status === "todos" || match.status === status) &&
    (phase === "todas" || match.phase === phase)
  );
  $("#calendarRows").innerHTML = filtered.map((match) => `
    <tr>
      <td>${formatDate(match.date)}</td>
      <td><div class="fixture-label"><strong>${teamLabel(match.home)}</strong><span>vs</span><strong>${teamLabel(match.away)}</strong></div></td>
      <td>${match.phase}</td>
      <td>${match.stadium}</td>
      <td>${match.city}</td>
      <td><span class="status-pill">${match.status}</span></td>
    </tr>
  `).join("");
}

function renderRanking() {
  $("#quickRanking").innerHTML = users.slice(0, 5).map((user, index) => `
    <div class="rank-row"><strong>${index + 1}</strong><span>${user.name}</span><strong>${user.points}</strong></div>
  `).join("");

  const term = ($("#rankingSearch")?.value || "").toLowerCase();
  $("#rankingRows").innerHTML = users
    .filter((user) => user.name.toLowerCase().includes(term))
    .map((user, index) => `
      <tr>
        <td>${index + 1}</td>
        <td><strong>${user.name}</strong></td>
        <td>${user.points}</td>
        <td>${user.hits}</td>
        <td>${user.accuracy}%</td>
        <td class="trend-neutral">Sin cambios</td>
      </tr>
    `).join("");
}

function renderPredictions() {
  $("#predictionMatch").innerHTML = matches.map((match) => `<option value="${match.id}">${match.home} vs ${match.away} - ${match.phase}</option>`).join("");
  $("#predictionList").innerHTML = predictions.length ? predictions.map((item) => `
    <article class="prediction-card">
      <strong>${item.match}</strong>
      <p>${item.homeScore}-${item.awayScore} · Clasifica: ${item.qualifier}</p>
      <small>Bonus: ${item.scorer || "sin goleador"}</small>
    </article>
  `).join("") : `<p class="prediction-card">Todavia no hay pronosticos guardados.</p>`;
  $("#rulesGrid").innerHTML = rules.map(([name, points]) => `<article class="rule-card"><strong>${points} pts</strong><p>${name}</p></article>`).join("");
  $("#adminRules").innerHTML = rules.map(([name, points]) => `
    <label>${name}<input type="number" value="${points}" min="0" max="30" /></label>
  `).join("");
}

function renderGroups() {
  const groupMatches = matches.filter((match) => match.phase === "Grupos");
  const pendingGroupMatches = groupMatches.filter((match) => match.status === "pendiente").length;
  const totalTeams = Object.values(groups).reduce((total, rows) => total + rows.length, 0);
  const totalGroups = Object.keys(groups).length;

  $("#groupResultsSummary").innerHTML = [
    ["Partidos de grupos", groupMatches.length, `${pendingGroupMatches} pendientes`],
    ["Resultados oficiales", 0, "sin marcadores cargados"],
    ["Grupos configurados", totalGroups, `${totalTeams} equipos en seguimiento`],
    ["Clasificados", 0, "se definirán al terminar la fase"]
  ].map(([label, value, detail]) => `
    <article class="kpi"><span>${label}</span><strong>${value}</strong><small>${detail}</small></article>
  `).join("");

  $("#groupSummaryGrid").innerHTML = Object.entries(groups).map(([group, rows]) => `
    <article class="summary-card">
      <strong>Grupo ${group}</strong>
      <div class="compact-team-list">
        ${rows.map(([team]) => teamLabel(team)).join("")}
      </div>
      <small>0 PJ · 0 goles · clasificacion pendiente</small>
    </article>
  `).join("");

  $("#groupsGrid").innerHTML = Object.entries(groups).map(([group, rows]) => `
    <section class="panel group-card">
      <div class="panel-head">
        <h3>Grupo ${group}</h3>
        <span class="status-pill">0 pts</span>
      </div>
      <div class="simple-standings">
        ${rows.map(([team, points]) => `
          <article class="standing-row">
            <span>${teamLabel(team)}</span>
            <strong>${points}</strong>
          </article>
        `).join("")}
      </div>
      <small class="group-note">PJ 0 · DG 0 · resultados pendientes</small>
    </section>
  `).join("");

  $("#knockoutSummary").innerHTML = knockoutRounds.map((round) => `
    <section class="round-summary">
      <h4>${round.name}</h4>
      <div class="round-match-list">
        ${round.matches.map(([home, away], index) => `
          <article class="round-match">
            <span>Partido ${index + 1}</span>
            <strong><span>${teamLabel(home)}</span> vs <span>${teamLabel(away)}</span></strong>
            <small>Resultado pendiente · sede y hora por confirmar</small>
          </article>
        `).join("")}
      </div>
    </section>
  `).join("");
}

function renderScorers() {
  $("#scorersRows").innerHTML = scorers.map((row) => `
    <tr><td><strong>${row[0]}</strong></td><td>${teamLabel(row[1])}</td><td>${row[2]}</td><td>${row[3]}</td><td>${row[4]}</td></tr>
  `).join("");
}

function renderHeatmap() {
  $("#heatmap").innerHTML = Array.from({ length: 48 }, (_, index) => {
    const alpha = 0.18 + ((index * 17) % 80) / 100;
    return `<div class="heat-cell" title="Dificultad ${Math.round(alpha * 100)}%" style="background: rgba(216, 183, 95, ${alpha})"></div>`;
  }).join("");
}

function renderBracket() {
  $("#bracket").innerHTML = knockoutRounds.map((round) => `
    <section class="round">
      <h3>${round.name}</h3>
      ${round.matches.map(([home, away]) => `
        <article class="bracket-match">
          <div class="bracket-team"><span>${teamLabel(home)}</span><strong>-</strong></div>
          <div class="bracket-team"><span>${teamLabel(away)}</span><strong>-</strong></div>
        </article>
      `).join("")}
    </section>
  `).join("");
}

function drawCharts() {
  drawLineChart($("#lineChart"));
  drawBarChart($("#barChart"));
}

function drawLineChart(canvas) {
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const width = canvas.width = canvas.offsetWidth * devicePixelRatio;
  const height = canvas.height = 220 * devicePixelRatio;
  ctx.scale(devicePixelRatio, devicePixelRatio);
  ctx.clearRect(0, 0, width, height);
  const points = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  ctx.strokeStyle = "#d8b75f";
  ctx.lineWidth = 3;
  ctx.beginPath();
  points.forEach((point, index) => {
    const x = 24 + index * ((canvas.offsetWidth - 48) / (points.length - 1));
    const y = 188 - (point / 360) * 170;
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();
  ctx.fillStyle = "rgba(255,255,255,0.65)";
  ctx.font = "12px Inter";
  ctx.fillText("Puntos acumulados", 24, 22);
}

function drawBarChart(canvas) {
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  canvas.width = canvas.offsetWidth * devicePixelRatio;
  canvas.height = 220 * devicePixelRatio;
  ctx.scale(devicePixelRatio, devicePixelRatio);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const values = [0, 0, 0, 0, 0];
  values.forEach((value, index) => {
    const h = value * 2.25;
    const x = 24 + index * 48;
    ctx.fillStyle = index % 2 ? "#18a05e" : "#0e4d92";
    ctx.fillRect(x, 190 - h, 30, h);
  });
  ctx.fillStyle = "rgba(255,255,255,0.65)";
  ctx.font = "12px Inter";
  ctx.fillText("% acierto", 24, 22);
}

function exportCurrentPage() {
  const active = $(".page.active").id.replace("page-", "");
  const rows = active === "ranking"
    ? [["posicion", "usuario", "puntos", "aciertos", "efectividad"], ...users.map((u, i) => [i + 1, u.name, u.points, u.hits, `${u.accuracy}%`])]
    : [["fecha", "local", "visitante", "fase", "estado"], ...matches.map((m) => [m.date, m.home, m.away, m.phase, m.status])];
  const csv = rows.map((row) => row.join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${active}-fifa2026.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

function formatDate(value) {
  return new Intl.DateTimeFormat("es-CO", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(new Date(value.replace(" ", "T")));
}

function bindEvents() {
  $$(".nav-item").forEach((button) => button.addEventListener("click", () => setPage(button.dataset.page)));
  $$("[data-jump]").forEach((button) => button.addEventListener("click", () => setPage(button.dataset.jump)));
  $("#menuToggle").addEventListener("click", () => $("#sidebar").classList.toggle("open"));
  $("#matchStatusFilter").addEventListener("change", renderMatches);
  $("#phaseFilter").addEventListener("change", renderMatches);
  $("#rankingSearch").addEventListener("input", renderRanking);
  $("#exportPage").addEventListener("click", exportCurrentPage);
  $("#globalSearch").addEventListener("input", (event) => {
    renderSearchResults(event.target.value);
  });
  $("#globalSearch").addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    const firstResult = $("#searchResults .search-result");
    if (firstResult) selectSearchResult(firstResult);
  });
  $("#searchResults").addEventListener("click", (event) => {
    const button = event.target.closest(".search-result");
    if (button) selectSearchResult(button);
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".search-box")) $("#searchResults").classList.remove("open");
  });
  $("#themeSelect").addEventListener("change", (event) => setTheme(event.target.value));
  $("#predictionForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const match = matches.find((item) => item.id === Number($("#predictionMatch").value));
    predictions.unshift({
      match: `${match.home} vs ${match.away}`,
      homeScore: $("#homeScore").value,
      awayScore: $("#awayScore").value,
      qualifier: $("#qualifier").value,
      scorer: $("#scorerBonus").value
    });
    renderPredictions();
  });
  window.addEventListener("resize", () => $(".page.active").id === "page-analitica" && drawCharts());
}

function init() {
  setTheme(localStorage.getItem("fifa2026-theme") || "classic");
  bindEvents();
  renderCountdown();
  renderMatches();
  renderRanking();
  renderPredictions();
  renderGroups();
  renderScorers();
  renderHeatmap();
  renderBracket();
  setInterval(renderCountdown, 1000);
}

init();
