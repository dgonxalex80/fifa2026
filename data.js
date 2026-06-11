/**
 * FIFA 2026 Predictor Hub - Static Data
 * Este archivo contiene todas las constantes y configuraciones del torneo.
 */

const groupStageMatches = [
  { id: 1, date: "2026-06-11 15:00", home: "Mexico", away: "Sudafrica", phase: "Grupos", group: "A", stadium: "Estadio Ciudad de Mexico", city: "Ciudad de Mexico", status: "pendiente" },
  { id: 2, date: "2026-06-11 21:00", home: "Corea del Sur", away: "Republica Checa", phase: "Grupos", group: "A", stadium: "Estadio Guadalajara", city: "Guadalajara", status: "pendiente" },
  { id: 3, date: "2026-06-12 14:00", home: "Canada", away: "Bosnia y Herzegovina", phase: "Grupos", group: "B", stadium: "Toronto Stadium", city: "Toronto", status: "pendiente" },
  { id: 4, date: "2026-06-12 20:00", home: "Estados Unidos", away: "Paraguay", phase: "Grupos", group: "D", stadium: "Los Angeles Stadium", city: "Inglewood", status: "pendiente" },
  { id: 5, date: "2026-06-13 14:00", home: "Catar", away: "Suiza", phase: "Grupos", group: "B", stadium: "San Francisco Bay Area Stadium", city: "Santa Clara", status: "pendiente" },
  { id: 6, date: "2026-06-13 17:00", home: "Brasil", away: "Marruecos", phase: "Grupos", group: "C", stadium: "New York New Jersey Stadium", city: "East Rutherford", status: "pendiente" },
  { id: 7, date: "2026-06-13 20:00", home: "Haiti", away: "Escocia", phase: "Grupos", group: "C", stadium: "Boston Stadium", city: "Foxborough", status: "pendiente" },
  { id: 8, date: "2026-06-13 23:00", home: "Australia", away: "Turquia", phase: "Grupos", group: "D", stadium: "BC Place Vancouver", city: "Vancouver", status: "pendiente" },
  { id: 9, date: "2026-06-14 12:00", home: "Alemania", away: "Curazao", phase: "Grupos", group: "E", stadium: "Houston Stadium", city: "Houston", status: "pendiente" },
  { id: 10, date: "2026-06-14 15:00", home: "Paises Bajos", away: "Japon", phase: "Grupos", group: "F", stadium: "Dallas Stadium", city: "Arlington", status: "pendiente" }
];

const knockoutSchedule = [
  { date: "2026-06-28 13:00", phase: "Dieciseisavos", matches: [["1G1", "3G_ABC"], ["2G1", "2G2"]] },
  { date: "2026-06-29 15:00", phase: "Dieciseisavos", matches: [["1G3", "3G_DEF"], ["1G4", "2G3"]] },
  { date: "2026-07-04 12:00", phase: "Octavos", matches: [["Ganador 73", "Ganador 74"]] },
  { date: "2026-07-09 18:00", phase: "Cuartos", matches: [["Ganador 89", "Ganador 90"]] },
  { date: "2026-07-14 20:00", phase: "Semifinal", matches: [["Ganador 97", "Ganador 98"]] },
  { date: "2026-07-18 16:00", phase: "Tercer puesto", matches: [["Perdedor 101", "Perdedor 102"]] },
  { date: "2026-07-19 15:00", phase: "Final", matches: [["Ganador 101", "Ganador 102"]] }
];

const flags = {
  "Arabia Saudita": "sa",
  "Alemania": "de",
  "Argentina": "ar",
  "Australia": "au",
  "Belgica": "be",
  "Brasil": "br",
  "Canada": "ca",
  "Colombia": "co",
  "Corea del Sur": "kr",
  "Costa de Marfil": "ci",
  "Croacia": "hr",
  "Ecuador": "ec",
  "Egipto": "eg",
  "Espana": "es",
  "Estados Unidos": "us",
  "Francia": "fr",
  "Inglaterra": "gb-eng",
  "Iran": "ir",
  "Japon": "jp",
  "Marruecos": "ma",
  "Mexico": "mx",
  "Nigeria": "ng",
  "Paises Bajos": "nl",
  "Portugal": "pt",
  "Sudafrica": "za",
  "Suiza": "ch",
  "Uruguay": "uy"
};

const worldCupHistory = [
  { year: 1930, host: "Uruguay", champion: "Uruguay", runnerUp: "Argentina", teams: 13, matches: 18, goals: 70, topScorer: "Guillermo Stabile", topScorerGoals: 8 },
  { year: 2014, host: "Brasil", champion: "Alemania", runnerUp: "Argentina", teams: 32, matches: 64, goals: 171, topScorer: "James Rodriguez", topScorerGoals: 6 },
  { year: 2018, host: "Rusia", champion: "Francia", runnerUp: "Croacia", teams: 32, matches: 64, goals: 169, topScorer: "Harry Kane", topScorerGoals: 6 },
  { year: 2022, host: "Catar", champion: "Argentina", runnerUp: "Francia", teams: 32, matches: 64, goals: 172, topScorer: "Kylian Mbappe", topScorerGoals: 8 }
];

const paniniAlbumTeams = [
  {
    "code": "ALG",
    "team": "Argelia",
    "players": [ /* ... */ ]
  },
  // ... (El resto de equipos de Panini)
];

const paniniPlayerDetails = {
  "alexis guendouz": { /* ... */ },
  // ... (El resto de detalles)
};

const groups = {
  A: [["Mexico", 0, 0], ["Sudafrica", 0, 0], ["Corea del Sur", 0, 0], ["Republica Checa", 0, 0]],
  B: [["Canada", 0, 0], ["Bosnia y Herzegovina", 0, 0], ["Catar", 0, 0], ["Suiza", 0, 0]],
  C: [["Brasil", 0, 0], ["Marruecos", 0, 0], ["Haiti", 0, 0], ["Escocia", 0, 0]],
  D: [["Estados Unidos", 0, 0], ["Paraguay", 0, 0], ["Australia", 0, 0], ["Turquia", 0, 0]],
  E: [["Alemania", 0, 0], ["Curazao", 0, 0], ["Costa de Marfil", 0, 0], ["Ecuador", 0, 0]],
  F: [["Paises Bajos", 0, 0], ["Japon", 0, 0], ["Suecia", 0, 0], ["Tunez", 0, 0]],
  G: [["Belgica", 0, 0], ["Egipto", 0, 0], ["Iran", 0, 0], ["Nueva Zelanda", 0, 0]],
  H: [["Espana", 0, 0], ["Cabo Verde", 0, 0], ["Arabia Saudita", 0, 0], ["Uruguay", 0, 0]],
  I: [["Francia", 0, 0], ["Senegal", 0, 0], ["Irak", 0, 0], ["Noruega", 0, 0]],
  J: [["Portugal", 0, 0], ["Ghana", 0, 0], ["Jordania", 0, 0], ["Austria", 0, 0]],
  K: [["Argentina", 0, 0], ["Nigeria", 0, 0], ["Uzbekistan", 0, 0], ["Panama", 0, 0]],
  L: [["Inglaterra", 0, 0], ["Croacia", 0, 0], ["Sudafrica", 0, 0], ["Haití", 0, 0]]
};

const rules = [
  { name: "Marcador exacto", pts: 5 },
  { name: "Ganador correcto", pts: 3 },
  { name: "Diferencia de goles", pts: 2 },
  { name: "Goleador bonus", pts: 2 },
  { name: "Clasificado", pts: 4 },
  { name: "Campeon acertado", pts: 12 }
];