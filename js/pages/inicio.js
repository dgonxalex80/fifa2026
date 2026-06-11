function renderHomeMatches() {
  $("#homeMatches").innerHTML = matches.slice(0, 4).map((match) => `
    <article class="match-card">
      <div><strong>${teamLabel(match.home)}</strong><br><small>${match.city}</small></div>
      <span class="score-chip">${getMatchResult(match) || formatDate(match.date)}</span>
      <div class="team-away"><strong>${teamLabel(match.away)}</strong><br><small>${match.phase}</small></div>
    </article>
  `).join("");
}

function renderCountdown() {
  const finalMatch = matches.find((match) => match.phase === "Final");
  const target = finalMatch ? parseTournamentDate(finalMatch.date) : parseTournamentDate("2026-07-19 14:00");
  target.setHours(target.getHours() + 2);
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

function renderHomeBirthStats() {
  const container = $("#homeBirthStats");
  if (!container) return;
  const leaders = [...birthRepresentationStats]
    .sort((a, b) => b.bornInRepresentedCountry - a.bornInRepresentedCountry || a.team.localeCompare(b.team))
    .slice(0, 5);
  container.innerHTML = leaders.map((item, index) => `
    <div class="rank-row"><strong>${index + 1}</strong><span>${teamLabel(item.team)}</span><strong>${item.bornInRepresentedCountry}</strong></div>
  `).join("");
}
