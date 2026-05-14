const matches = [
  { id: 1, date: "2026-06-11 20:00", home: "Mexico", away: "Canada", phase: "Grupos", stadium: "Estadio Azteca", city: "Ciudad de Mexico", status: "pendiente" },
  { id: 2, date: "2026-06-12 17:00", home: "Estados Unidos", away: "Japon", phase: "Grupos", stadium: "SoFi Stadium", city: "Los Angeles", status: "pendiente" },
  { id: 3, date: "2026-06-13 15:00", home: "Brasil", away: "Marruecos", phase: "Grupos", stadium: "MetLife Stadium", city: "New York/New Jersey", status: "en juego" },
  { id: 4, date: "2026-06-14 18:00", home: "Argentina", away: "Francia", phase: "Grupos", stadium: "AT&T Stadium", city: "Dallas", status: "finalizado", score: "2-2" },
  { id: 5, date: "2026-06-22 20:00", home: "Espana", away: "Uruguay", phase: "Octavos", stadium: "Hard Rock Stadium", city: "Miami", status: "pendiente" },
  { id: 6, date: "2026-07-04 19:00", home: "Inglaterra", away: "Portugal", phase: "Cuartos", stadium: "BC Place", city: "Vancouver", status: "pendiente" },
  { id: 7, date: "2026-07-09 20:00", home: "Alemania", away: "Paises Bajos", phase: "Semifinal", stadium: "Mercedes-Benz Stadium", city: "Atlanta", status: "pendiente" },
  { id: 8, date: "2026-07-19 18:00", home: "Ganador SF1", away: "Ganador SF2", phase: "Final", stadium: "MetLife Stadium", city: "New York/New Jersey", status: "pendiente" }
];

const users = [
  { name: "Mariana R.", points: 342, hits: 48, accuracy: 71, trend: "sube" },
  { name: "Diego M.", points: 331, hits: 45, accuracy: 68, trend: "sube" },
  { name: "Laura S.", points: 319, hits: 44, accuracy: 66, trend: "baja" },
  { name: "Andres C.", points: 304, hits: 41, accuracy: 63, trend: "sube" },
  { name: "Sofia P.", points: 299, hits: 39, accuracy: 61, trend: "baja" },
  { name: "Camilo T.", points: 286, hits: 38, accuracy: 59, trend: "sube" }
];

const scorers = [
  ["Kylian Mbappe", "Francia", 7, 3, 610],
  ["Vinicius Jr.", "Brasil", 6, 4, 590],
  ["Julian Alvarez", "Argentina", 5, 2, 544],
  ["Harry Kane", "Inglaterra", 5, 1, 620],
  ["Santiago Gimenez", "Mexico", 4, 2, 502]
];

const groups = {
  A: [["Mexico", 7, 4, true], ["Canada", 5, 1, true], ["Japon", 3, -1, false], ["Marruecos", 1, -4, false]],
  B: [["Brasil", 9, 7, true], ["Uruguay", 6, 2, true], ["Espana", 3, 0, false], ["Corea", 0, -9, false]],
  C: [["Argentina", 7, 5, true], ["Francia", 7, 4, true], ["Ghana", 2, -3, false], ["Suecia", 0, -6, false]],
  D: [["Inglaterra", 6, 3, true], ["Portugal", 6, 2, true], ["Alemania", 4, 1, false], ["Paises Bajos", 1, -6, false]]
};

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

function setPage(page) {
  $$(".nav-item").forEach((button) => button.classList.toggle("active", button.dataset.page === page));
  $$(".page").forEach((section) => section.classList.toggle("active", section.id === `page-${page}`));
  $("#pageTitle").textContent = page.charAt(0).toUpperCase() + page.slice(1);
  $("#sidebar").classList.remove("open");
  if (page === "analitica") drawCharts();
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
      <div><strong>${match.home}</strong><br><small>${match.city}</small></div>
      <span class="score-chip">${match.score || formatDate(match.date)}</span>
      <div class="team-away"><strong>${match.away}</strong><br><small>${match.phase}</small></div>
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
      <td><strong>${match.home}</strong> vs <strong>${match.away}</strong></td>
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
        <td class="${user.trend === "sube" ? "trend-up" : "trend-down"}">${user.trend === "sube" ? "Sube" : "Baja"}</td>
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
  $("#groupsGrid").innerHTML = Object.entries(groups).map(([group, rows]) => `
    <section class="panel group-card">
      <h3>Grupo ${group}</h3>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Equipo</th><th>Pts</th><th>DG</th><th>Estado</th></tr></thead>
          <tbody>
            ${rows.map(([team, points, diff, qualified]) => `
              <tr><td>${team}</td><td>${points}</td><td>${diff > 0 ? "+" : ""}${diff}</td><td>${qualified ? "Clasifica" : "En disputa"}</td></tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `).join("");
}

function renderScorers() {
  $("#scorersRows").innerHTML = scorers.map((row) => `
    <tr><td><strong>${row[0]}</strong></td><td>${row[1]}</td><td>${row[2]}</td><td>${row[3]}</td><td>${row[4]}</td></tr>
  `).join("");
}

function renderHeatmap() {
  $("#heatmap").innerHTML = Array.from({ length: 48 }, (_, index) => {
    const alpha = 0.18 + ((index * 17) % 80) / 100;
    return `<div class="heat-cell" title="Dificultad ${Math.round(alpha * 100)}%" style="background: rgba(216, 183, 95, ${alpha})"></div>`;
  }).join("");
}

function renderBracket() {
  const rounds = [
    ["Octavos", [["Mexico", "Espana"], ["Brasil", "Japon"], ["Argentina", "Canada"], ["Francia", "Uruguay"]]],
    ["Cuartos", [["Mexico", "Brasil"], ["Argentina", "Francia"]]],
    ["Semifinal", [["Brasil", "Argentina"]]],
    ["Final", [["Brasil", "Ganador SF2"]]]
  ];
  $("#bracket").innerHTML = rounds.map(([name, roundMatches]) => `
    <section class="round">
      <h3>${name}</h3>
      ${roundMatches.map(([home, away]) => `
        <article class="bracket-match">
          <div class="bracket-team"><span>${home}</span><strong>${Math.floor(Math.random() * 4)}</strong></div>
          <div class="bracket-team"><span>${away}</span><strong>${Math.floor(Math.random() * 4)}</strong></div>
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
  const points = [42, 68, 72, 118, 146, 178, 226, 281, 342];
  ctx.strokeStyle = "#d8b75f";
  ctx.lineWidth = 3;
  ctx.beginPath();
  points.forEach((point, index) => {
    const x = 24 + index * ((canvas.offsetWidth - 48) / (points.length - 1));
    const y = 200 - (point / 360) * 170;
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
  const values = [64, 58, 47, 52, 39];
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
    $("#rankingSearch").value = event.target.value;
    renderRanking();
  });
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
