function getValidBirthDate(birthDate) {
  if (!birthDate) return "";
  const birth = new Date(String(birthDate) + "T00:00:00");
  const year = birth.getFullYear();
  return Number.isNaN(birth.getTime()) || year < 1980 || year > 2010 ? "" : birthDate;
}

function getValidHeight(height) {
  if (!height) return "";
  const value = Number(String(height).replace(",", ".").match(/\d+(?:\.\d+)?/)?.[0]);
  if (!value) return "";
  const meters = value > 3 ? value / 100 : value;
  return meters < 1.45 || meters > 2.2 ? "" : meters.toFixed(2) + " m";
}

function getValidClub(club) {
  if (!club) return "";
  const normalized = normalizeText(club);
  const invalidTerms = ["rugby", "orioles", "baltimore", "hc bili tygri", "basketball"];
  return invalidTerms.some((term) => normalized.includes(term)) ? "" : club;
}

function isMissingPlayerField(value) {
  return !value || String(value).trim() === "" || String(value).trim() === "Por confirmar";
}

function calculateAge(birthDate) {
  const validBirthDate = getValidBirthDate(birthDate);
  if (!validBirthDate) return "Por confirmar";
  const today = new Date();
  const birth = new Date(String(validBirthDate) + "T00:00:00");
  let age = today.getFullYear() - birth.getFullYear();
  const birthdayThisYear = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());
  if (today < birthdayThisYear) age -= 1;
  return age;
}

function inferPositionFromCode(code) {
  const number = Number(String(code).match(/\d+/)?.[0]);
  if (!number) return "Por confirmar";
  if (number <= 3) return "Arquero";
  if (number <= 8) return "Defensa";
  if (number <= 14) return "Mediocampista";
  return "Delantero";
}

function normalizePlayerPosition(position, code) {
  const value = normalizeText(position || "");
  if (!value) return inferPositionFromCode(code);
  if (["base", "alero", "jardinero"].some((term) => value.includes(term))) return inferPositionFromCode(code);
  if (["guardameta", "arquero", "portero", "goalkeeper", "keeper"].some((term) => value.includes(term))) return "Arquero";
  if (["mediocampista", "centrocampista", "volante", "midfielder", "midfield", "wing half"].some((term) => value.includes(term))) return "Mediocampista";
  if (["defensa", "defensor", "defender", "centre back", "center back", "centre-back", "center-back", "full back", "full-back", "right back", "right-back", "left back", "left-back", "lateral", "central"].some((term) => value.includes(term))) return "Defensa";
  if (["delantero", "atacante", "forward", "striker", "winger", "extremo"].some((term) => value.includes(term))) return "Delantero";
  return inferPositionFromCode(code);
}

function completePlayerField(value, fallback = "Por confirmar") {
  return value && String(value).trim() ? value : fallback;
}

function getPlayerNameTokens(value) {
  const stopWords = new Set(["al", "bin", "da", "de", "del", "do", "dos", "el", "jr", "junior", "la", "las", "los", "van"]);
  const aliases = {
    dibu: "emiliano",
    lucho: "luis",
    nico: "nicolas",
    santi: "santiago",
    vini: "vinicius"
  };
  return normalizeText(value || "")
    .replace(/[’.-]/g, " ")
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .map((token) => aliases[token] || token)
    .filter((token) => token.length > 1 && !stopWords.has(token));
}

function getPlayerNameMatchScore(queryName, candidateName) {
  const query = getPlayerNameTokens(queryName);
  const candidate = getPlayerNameTokens(candidateName);
  if (!query.length || !candidate.length) return 0;
  const queryText = query.join(" ");
  const candidateText = candidate.join(" ");
  if (queryText === candidateText) return 100;
  if (candidateText.includes(queryText) || queryText.includes(candidateText)) return 85;

  const candidateSet = new Set(candidate);
  const shared = query.filter((token) => candidateSet.has(token));
  if (shared.length >= Math.min(query.length, candidate.length) && shared.length > 1) return 75 + shared.length;
  if (shared.length === query.length && query.length > 1) return 70 + shared.length;
  if (query.length === 1 && shared.length === 1 && query[0].length >= 5) return 55;
  if (shared.length >= 2) return 50 + shared.length;
  return 0;
}

function findBestPlayerByName(players, name, teamName = "") {
  return players
    .map((player) => ({
      player,
      score: Math.max(
        getPlayerNameMatchScore(name, player.commonName || ""),
        getPlayerNameMatchScore(name, player.name || "")
      ) + (teamName && player.team === teamName ? 8 : 0)
    }))
    .filter((item) => item.score >= 55)
    .sort((a, b) => b.score - a.score)[0]?.player;
}

const detailsNameIndexCache = new WeakMap();

function getDetailsNameIndex(detailsMap) {
  if (detailsNameIndexCache.has(detailsMap)) return detailsNameIndexCache.get(detailsMap);
  const index = new Map();
  Object.entries(detailsMap).forEach(([key, details]) => {
    const entry = { key, details };
    const tokens = new Set([...getPlayerNameTokens(key), ...getPlayerNameTokens(details?.name || "")]);
    tokens.forEach((token) => {
      if (!index.has(token)) index.set(token, []);
      index.get(token).push(entry);
    });
  });
  detailsNameIndexCache.set(detailsMap, index);
  return index;
}

function findDetailsByName(detailsMap, name) {
  const index = getDetailsNameIndex(detailsMap);
  const candidates = new Set();
  getPlayerNameTokens(name).forEach((token) => {
    (index.get(token) || []).forEach((entry) => candidates.add(entry));
  });
  return [...candidates]
    .map(({ key, details }) => ({
      details,
      score: Math.max(
        getPlayerNameMatchScore(name, key),
        getPlayerNameMatchScore(name, details?.name || "")
      )
    }))
    .filter((item) => item.score >= 55)
    .sort((a, b) => b.score - a.score)[0]?.details || {};
}

function getCuratedPlayerDetails(name, teamName) {
  const key = normalizeText(name);
  const teamOverride = curatedPlayerOverrides[teamName]?.[key];
  if (teamOverride) return teamOverride;
  return selectedPlayers.find((player) =>
    normalizeText(player.commonName) === key ||
    normalizeText(player.name) === key ||
    normalizeText(player.name).includes(key) ||
    key.includes(normalizeText(player.commonName))
  ) || findBestPlayerByName(selectedPlayers, name, teamName);
}

function mergePlayerDetails(base = {}, curated = {}) {
  return {
    ...base,
    name: completePlayerField(base.name, curated.name || curated.commonName || ""),
    birthDate: getValidBirthDate(base.birthDate) || getValidBirthDate(curated.birthDate),
    height: getValidHeight(base.height) || getValidHeight(curated.height),
    club: getValidClub(base.club) || getValidClub(curated.club),
    position: completePlayerField(base.position, curated.position || "")
  };
}

function getFeaturedPlayerDetails(name, teamName) {
  const key = normalizeText(name);
  const teamOverride = curatedPlayerOverrides[teamName]?.[key];
  const wikidataDetails = paniniPlayerDetails[key] || findDetailsByName(paniniPlayerDetails, name);
  const liveDetails = livePlayerDetails[key] || findDetailsByName(livePlayerDetails, name);
  const curated = getCuratedPlayerDetails(name, teamName) || {};
  return mergePlayerDetails(mergePlayerDetails(mergePlayerDetails({}, wikidataDetails), liveDetails), teamOverride || curated);
}

function getPaniniPlayerRecords() {
  return paniniAlbumTeams.flatMap((team) => team.players.map((player, index) => {
    const details = getFeaturedPlayerDetails(player.name, team.team);
    const curated = getCuratedPlayerDetails(player.name, team.team) || {};
    const birthDate = getValidBirthDate(details?.birthDate);
    return {
      ...player,
      order: index + 1,
      team: team.team,
      teamCode: team.code,
      sourceTeam: team.sourceTeam,
      commonName: player.name,
      fullName: completePlayerField(details?.name, player.name),
      birthDate,
      displayBirthDate: completePlayerField(birthDate),
      age: calculateAge(birthDate),
      height: completePlayerField(getValidHeight(details?.height)),
      club: completePlayerField(getValidClub(player.club) || getValidClub(curated?.club), "Selección de " + team.team),
      position: normalizePlayerPosition(details?.position || player.position, player.code),
      photo: normalizePlayerPhoto(details?.photo)
    };
  }));
}

function hasCompletePlayerData(player) {
  return Boolean(player.birthDate) &&
    !isMissingPlayerField(player.height) &&
    !isMissingPlayerField(player.club) &&
    !String(player.club).startsWith("Selección de ") &&
    !isMissingPlayerField(player.position);
}

function getFilteredPlayers() {
  const term = normalizeText($("#playerSearch")?.value || "");
  const team = $("#playerTeamFilter")?.value || "todos";
  const detailScope = $("#playerPositionFilter")?.value || "todos";
  return getPaniniPlayerRecords().filter((player) => {
    const searchText = normalizeText([player.code, player.fullName, player.commonName, player.team, player.club, player.position].join(" "));
    return (!term || searchText.includes(term)) &&
      (team === "todos" || player.team === team) &&
      (detailScope === "todos" || (detailScope === "completos" ? hasCompletePlayerData(player) : !hasCompletePlayerData(player)));
  });
}

function renderPlayerFilters() {
  const selectedTeam = $("#playerTeamFilter")?.value || "todos";
  const selectedScope = $("#playerPositionFilter")?.value || "todos";
  const teams = paniniAlbumTeams.map((team) => team.team).sort((a, b) => a.localeCompare(b));

  $("#playerTeamFilter").innerHTML = `<option value="todos">Todas las selecciones</option>${teams.map((team) => `<option>${team}</option>`).join("")}`;
  $("#playerPositionFilter").innerHTML = `
    <option value="todos">Todos los stickers</option>
    <option value="completos">Con datos completos</option>
    <option value="pendientes">Datos por completar</option>
  `;
  $("#playerTeamFilter").value = teams.includes(selectedTeam) ? selectedTeam : "todos";
  $("#playerPositionFilter").value = ["todos", "completos", "pendientes"].includes(selectedScope) ? selectedScope : "todos";
}

function normalizePlayerPhoto(photo) {
  if (!photo) return "";
  return String(photo).replace(/^http:\/\//, "https://");
}

function getPlayerInitials(player) {
  return player.fullName
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || "")
    .join("");
}

function getPlayerImageNameKeys(player) {
  const normalizedNames = [player.fullName, player.commonName]
    .map((name) => normalizeText(name).replace(/[^a-z0-9]+/g, " ").trim())
    .filter(Boolean);

  return [...new Set(normalizedNames.flatMap((name) => [
    name,
    name.replace(/\bjr\b/g, "junior"),
    name.replace(/\bjunior\b/g, "jr")
  ]).filter(Boolean))];
}

function getImageComparableName(imagePath) {
  return normalizeText(String(imagePath).split("/").pop() || "")
    .replace(/\.[a-z0-9]+$/i, "")
    .replace(/^[a-z]{3}[-_]\d+[-_]?/, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function imagePathMatchesPlayerName(imagePath, playerNameKeys) {
  const imageName = getImageComparableName(imagePath);
  if (imageName.length < 4) return false;
  const imageTokens = new Set(imageName.split(" ").filter((token) => token.length > 2));
  return playerNameKeys.some((key) => {
    if (key.length < 4) return false;
    if (imageName.includes(key) || key.includes(imageName)) return true;
    const keyTokens = key.split(" ").filter((token) => token.length > 2);
    return keyTokens.length > 1 && keyTokens.every((token) => imageTokens.has(token));
  });
}

function getLocalPlayerImage(player) {
  const playerNameKeys = getPlayerImageNameKeys(player);
  const codeImage = localPlayerImages.byCode?.[player.code] || "";
  const expectedCodeFile = player.code.replace(/\s+/g, "").toLowerCase();
  const codeImageFile = getImageComparableName(codeImage).replace(/\s+/g, "").toLowerCase();
  if (codeImage && codeImageFile === expectedCodeFile) return codeImage;

  const candidates = [
    ...playerNameKeys.map((name) => localPlayerImages.byName?.[player.teamCode + ":" + name]),
    ...playerNameKeys.map((name) => verifiedPlayerImagesByName[player.teamCode + ":" + name])
  ].filter(Boolean);

  return candidates.find((imagePath) => imagePathMatchesPlayerName(imagePath, playerNameKeys)) ||
    (codeImage.endsWith("/fifa2026.png") ? codeImage : "");
}

function getPlayerImage(player) {
  return getLocalPlayerImage(player) || player.photo || "";
}

function renderPlayerPhoto(player) {
  const initials = getPlayerInitials(player) || player.teamCode;
  const image = getPlayerImage(player);
  if (!image) return `<div class="player-card-fallback" aria-hidden="true">${initials}</div>`;
  return `
    <img
      class="player-card-photo"
      src="${image}"
      alt="${player.fullName}"
      loading="lazy"
      onerror="this.replaceWith(Object.assign(document.createElement('div'), { className: 'player-card-fallback', textContent: '${initials}' }))"
    />
  `;
}

function renderPlayers() {
  const container = document.querySelector("#playerCards");
  if (!container) return;
  const players = getFilteredPlayers();

  container.innerHTML = players.length ? players.map((player) => `
    <article class="player-card">
      <div class="player-card-media">
        ${renderPlayerPhoto(player)}
        <span class="player-card-code">${player.code}</span>
      </div>
      <div class="player-card-body">
        <div class="player-card-team">${teamLabel(player.team)}</div>
        <h3>${player.fullName}</h3>
        <p>${player.commonName}</p>
        <dl class="player-card-meta">
          <div><dt>Edad</dt><dd>${player.age}</dd></div>
          <div><dt>Estatura</dt><dd>${player.height}</dd></div>
          <div><dt>Club</dt><dd>${player.club}</dd></div>
          <div><dt>Posición</dt><dd>${player.position}</dd></div>
        </dl>
      </div>
    </article>
  `).join("") : `<p class="empty-card-grid">No hay jugadores que coincidan con los filtros.</p>`;
}
