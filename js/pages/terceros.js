function renderThirdsRanking() {
  const tableBody = $("#thirdsRankingTable tbody");
  if (!tableBody) return;

  const ranking = getThirdsRanking();
  
  tableBody.innerHTML = ranking.length ? ranking.map((row, index) => {
    const isQualified = index < 8;
    const rowClass = isQualified ? "qualified-row" : "eliminated-row";
    
    return `
      <tr class="${rowClass}">
        <td class="text-center">${index + 1}</td>
        <td class="text-center"><strong>${row.groupCode}</strong></td>
        <td>${teamLabel(row.team)}</td>
        <td class="text-center"><strong>${row.points}</strong></td>
        <td class="text-center">${row.goalDifference > 0 ? '+' + row.goalDifference : row.goalDifference}</td>
        <td class="text-center">${row.goalsFor}</td>
      </tr>
    `;
  }).join("") : '<tr><td colspan="6" class="text-center">Esperando resultados de grupos...</td></tr>';
}