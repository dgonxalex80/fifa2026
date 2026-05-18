/**
 * FIFA 2026 Predictor Hub - Static Data
 * Este archivo contiene todas las constantes y configuraciones del torneo.
 */

const groupStageMatches = [
  { id: 1, date: "2026-06-11 14:00", home: "Mexico", away: "Sudafrica", phase: "Grupos", group: "A", stadium: "Estadio Ciudad de Mexico", city: "Ciudad de Mexico", status: "pendiente" },
  // ... (Aquí van todos los objetos de groupStageMatches que estaban en app.js)
];

const knockoutSchedule = [
  { date: "2026-06-28 12:00", phase: "Dieciseisavos", matches: [["1G1", "2G4"], ["1G2", "2G3"]] },
  // ... (Aquí van todos los objetos de knockoutSchedule)
];

const flags = {
  "Arabia Saudita": "sa",
  "Alemania": "de",
  // ... (El resto del objeto flags)
};

const worldCupHistory = [
  { year: 1930, host: "Uruguay", champion: "Uruguay", runnerUp: "Argentina", teams: 13, matches: 18, goals: 70, topScorer: "Guillermo Stabile", topScorerGoals: 8 },
  // ... (El resto del historial)
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
  // ... (El resto de grupos)
};

const rules = [
  { name: "Marcador exacto", pts: 5 },
  { name: "Ganador correcto", pts: 3 },
  { name: "Diferencia de goles", pts: 2 },
  { name: "Goleador bonus", pts: 2 },
  { name: "Clasificado", pts: 4 },
  { name: "Campeon acertado", pts: 12 }
];