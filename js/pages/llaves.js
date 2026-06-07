function renderBracket() {
  $("#bracket").innerHTML = getDynamicKnockoutRounds().map((round) => `
    <section class="round">
      <h3>${round.name}</h3>
      ${round.matches.map(([home, away, match]) => `
        <article class="bracket-match">
          <div class="bracket-team"><span>${teamLabel(home)}</span><strong>${Number.isInteger(match.homeScore) ? match.homeScore : "-"}</strong></div>
          <div class="bracket-team"><span>${teamLabel(away)}</span><strong>${Number.isInteger(match.awayScore) ? match.awayScore : "-"}</strong></div>
        </article>
      `).join("")}
    </section>
  `).join("");
}
