const venueMetadata = {
  "Estadio Ciudad de Mexico": { country: "Mexico", city: "Ciudad de Mexico", capacity: "87.523", note: "Partido inaugural y sede historica mundialista." },
  "Estadio Guadalajara": { country: "Mexico", city: "Guadalajara", capacity: "48.071", note: "Sede tapatia con alta tradicion futbolera." },
  "Estadio Monterrey": { country: "Mexico", city: "Monterrey", capacity: "53.500", note: "Estadio moderno del norte mexicano." },
  "Toronto Stadium": { country: "Canada", city: "Toronto", capacity: "45.500", note: "Sede canadiense en Ontario." },
  "BC Place Vancouver": { country: "Canada", city: "Vancouver", capacity: "54.500", note: "Sede cubierta en la costa pacifica canadiense." },
  "Atlanta Stadium": { country: "Estados Unidos", city: "Atlanta", capacity: "75.000", note: "Estadio cubierto con gran aforo." },
  "Boston Stadium": { country: "Estados Unidos", city: "Boston", capacity: "65.878", note: "Sede del area de Foxborough." },
  "Dallas Stadium": { country: "Estados Unidos", city: "Dallas", capacity: "94.000", note: "Una de las sedes de mayor capacidad." },
  "Houston Stadium": { country: "Estados Unidos", city: "Houston", capacity: "72.220", note: "Sede texana de clima controlado." },
  "Kansas City Stadium": { country: "Estados Unidos", city: "Kansas City", capacity: "73.000", note: "Sede con cultura fuerte de aficion." },
  "Los Angeles Stadium": { country: "Estados Unidos", city: "Los Angeles", capacity: "70.240", note: "Sede californiana de nueva generacion." },
  "Miami Stadium": { country: "Estados Unidos", city: "Miami", capacity: "65.326", note: "Sede clave para publico latinoamericano." },
  "New York New Jersey Stadium": { country: "Estados Unidos", city: "New York/New Jersey", capacity: "82.500", note: "Sede de la final del torneo." },
  "Philadelphia Stadium": { country: "Estados Unidos", city: "Philadelphia", capacity: "69.328", note: "Sede historica del noreste estadounidense." },
  "San Francisco Bay Area Stadium": { country: "Estados Unidos", city: "San Francisco Bay Area", capacity: "68.500", note: "Sede del area de la Bahia." },
  "Seattle Stadium": { country: "Estados Unidos", city: "Seattle", capacity: "69.000", note: "Sede reconocida por ambiente intenso." }
};

function getVenueStats() {
  const venueMatches = matches.filter((match) => match.stadium && match.stadium !== "Sede por confirmar");
  const grouped = venueMatches.reduce((acc, match) => {
    const meta = venueMetadata[match.stadium] || { country: "Por confirmar", city: match.city, capacity: "-", note: "Datos por completar." };
    if (!acc[match.stadium]) acc[match.stadium] = { stadium: match.stadium, ...meta, matches: [], phases: new Set(), teams: new Set() };
    acc[match.stadium].matches.push(match);
    acc[match.stadium].phases.add(match.phase);
    acc[match.stadium].teams.add(match.home);
    acc[match.stadium].teams.add(match.away);
    return acc;
  }, {});
  return Object.values(grouped).sort((a, b) => a.country.localeCompare(b.country) || a.city.localeCompare(b.city));
}

function renderVenues() {
  if (!$("#venueCards")) return;
  const venues = getVenueStats();
  const countries = new Set(venues.map((venue) => venue.country));
  const totalMatches = venues.reduce((total, venue) => total + venue.matches.length, 0);
  const busiest = [...venues].sort((a, b) => b.matches.length - a.matches.length || a.stadium.localeCompare(b.stadium))[0];

  $("#venuesSummaryCards").innerHTML = [
    ["Sedes", venues.length, `${countries.size} paises anfitriones`],
    ["Partidos asignados", totalMatches, "segun calendario local"],
    ["Mayor actividad", busiest?.city || "-", `${busiest?.matches.length || 0} partidos`],
    ["Final", "NY/NJ", "New York New Jersey Stadium"]
  ].map(([label, value, detail]) => `<article class="kpi"><span>${label}</span><strong>${value}</strong><small>${detail}</small></article>`).join("");

  $("#venueCards").innerHTML = venues.map((venue) => `
    <article class="venue-card">
      <div class="venue-card-head">
        <div><span>${venue.country}</span><strong>${venue.stadium}</strong><small>${venue.city}</small></div>
        <b>${venue.matches.length}</b>
      </div>
      <p>${venue.note}</p>
      <div class="venue-meta">
        <span>Capacidad aprox. <strong>${venue.capacity}</strong></span>
        <span>Fases <strong>${[...venue.phases].join(", ")}</strong></span>
        <span>Selecciones <strong>${venue.teams.size}</strong></span>
      </div>
    </article>
  `).join("");
}
