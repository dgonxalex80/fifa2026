const groupStageMatches = [
  { id: 1, date: "2026-06-11 14:00", home: "Mexico", away: "Sudafrica", phase: "Grupos", group: "A", stadium: "Estadio Ciudad de Mexico", city: "Ciudad de Mexico", status: "pendiente" },
  { id: 2, date: "2026-06-11 21:00", home: "Corea del Sur", away: "Republica Checa", phase: "Grupos", group: "A", stadium: "Estadio Guadalajara", city: "Guadalajara", status: "pendiente" },
  { id: 3, date: "2026-06-12 14:00", home: "Canada", away: "Bosnia y Herzegovina", phase: "Grupos", group: "B", stadium: "Toronto Stadium", city: "Toronto", status: "pendiente" },
  { id: 4, date: "2026-06-12 20:00", home: "Estados Unidos", away: "Paraguay", phase: "Grupos", group: "D", stadium: "Los Angeles Stadium", city: "Los Angeles", status: "pendiente" },
  { id: 5, date: "2026-06-13 14:00", home: "Catar", away: "Suiza", phase: "Grupos", group: "B", stadium: "San Francisco Bay Area Stadium", city: "San Francisco Bay Area", status: "pendiente" },
  { id: 6, date: "2026-06-13 17:00", home: "Brasil", away: "Marruecos", phase: "Grupos", group: "C", stadium: "New York New Jersey Stadium", city: "New York/New Jersey", status: "pendiente" },
  { id: 7, date: "2026-06-13 20:00", home: "Haiti", away: "Escocia", phase: "Grupos", group: "C", stadium: "Boston Stadium", city: "Boston", status: "pendiente" },
  { id: 8, date: "2026-06-13 23:00", home: "Australia", away: "Turquia", phase: "Grupos", group: "D", stadium: "BC Place Vancouver", city: "Vancouver", status: "pendiente" },
  { id: 9, date: "2026-06-14 12:00", home: "Alemania", away: "Curazao", phase: "Grupos", group: "E", stadium: "Houston Stadium", city: "Houston", status: "pendiente" },
  { id: 10, date: "2026-06-14 15:00", home: "Paises Bajos", away: "Japon", phase: "Grupos", group: "F", stadium: "Dallas Stadium", city: "Dallas", status: "pendiente" },
  { id: 11, date: "2026-06-14 18:00", home: "Costa de Marfil", away: "Ecuador", phase: "Grupos", group: "E", stadium: "Philadelphia Stadium", city: "Philadelphia", status: "pendiente" },
  { id: 12, date: "2026-06-14 21:00", home: "Suecia", away: "Tunez", phase: "Grupos", group: "F", stadium: "Estadio Monterrey", city: "Monterrey", status: "pendiente" },
  { id: 13, date: "2026-06-15 11:00", home: "Espana", away: "Cabo Verde", phase: "Grupos", group: "H", stadium: "Atlanta Stadium", city: "Atlanta", status: "pendiente" },
  { id: 14, date: "2026-06-15 14:00", home: "Belgica", away: "Egipto", phase: "Grupos", group: "G", stadium: "Seattle Stadium", city: "Seattle", status: "pendiente" },
  { id: 15, date: "2026-06-15 17:00", home: "Arabia Saudita", away: "Uruguay", phase: "Grupos", group: "H", stadium: "Miami Stadium", city: "Miami", status: "pendiente" },
  { id: 16, date: "2026-06-15 20:00", home: "Iran", away: "Nueva Zelanda", phase: "Grupos", group: "G", stadium: "Los Angeles Stadium", city: "Los Angeles", status: "pendiente" },
  { id: 17, date: "2026-06-16 14:00", home: "Francia", away: "Senegal", phase: "Grupos", group: "I", stadium: "New York New Jersey Stadium", city: "New York/New Jersey", status: "pendiente" },
  { id: 18, date: "2026-06-16 17:00", home: "Irak", away: "Noruega", phase: "Grupos", group: "I", stadium: "Boston Stadium", city: "Boston", status: "pendiente" },
  { id: 19, date: "2026-06-16 20:00", home: "Argentina", away: "Argelia", phase: "Grupos", group: "J", stadium: "Kansas City Stadium", city: "Kansas City", status: "pendiente" },
  { id: 20, date: "2026-06-16 23:00", home: "Austria", away: "Jordania", phase: "Grupos", group: "J", stadium: "San Francisco Bay Area Stadium", city: "San Francisco Bay Area", status: "pendiente" },
  { id: 21, date: "2026-06-17 12:00", home: "Portugal", away: "Republica Democratica del Congo", phase: "Grupos", group: "K", stadium: "Houston Stadium", city: "Houston", status: "pendiente" },
  { id: 22, date: "2026-06-17 15:00", home: "Inglaterra", away: "Croacia", phase: "Grupos", group: "L", stadium: "Dallas Stadium", city: "Dallas", status: "pendiente" },
  { id: 23, date: "2026-06-17 18:00", home: "Ghana", away: "Panama", phase: "Grupos", group: "L", stadium: "Toronto Stadium", city: "Toronto", status: "pendiente" },
  { id: 24, date: "2026-06-17 21:00", home: "Uzbekistan", away: "Colombia", phase: "Grupos", group: "K", stadium: "Estadio Ciudad de Mexico", city: "Ciudad de Mexico", status: "pendiente" },
  { id: 25, date: "2026-06-18 11:00", home: "Republica Checa", away: "Sudafrica", phase: "Grupos", group: "A", stadium: "Atlanta Stadium", city: "Atlanta", status: "pendiente" },
  { id: 26, date: "2026-06-18 14:00", home: "Suiza", away: "Bosnia y Herzegovina", phase: "Grupos", group: "B", stadium: "Los Angeles Stadium", city: "Los Angeles", status: "pendiente" },
  { id: 27, date: "2026-06-18 17:00", home: "Canada", away: "Catar", phase: "Grupos", group: "B", stadium: "BC Place Vancouver", city: "Vancouver", status: "pendiente" },
  { id: 28, date: "2026-06-18 20:00", home: "Mexico", away: "Corea del Sur", phase: "Grupos", group: "A", stadium: "Estadio Guadalajara", city: "Guadalajara", status: "pendiente" },
  { id: 29, date: "2026-06-18 23:00", home: "Turquia", away: "Paraguay", phase: "Grupos", group: "D", stadium: "San Francisco Bay Area Stadium", city: "San Francisco Bay Area", status: "pendiente" },
  { id: 30, date: "2026-06-19 14:00", home: "Estados Unidos", away: "Australia", phase: "Grupos", group: "D", stadium: "Seattle Stadium", city: "Seattle", status: "pendiente" },
  { id: 31, date: "2026-06-19 17:00", home: "Escocia", away: "Marruecos", phase: "Grupos", group: "C", stadium: "Boston Stadium", city: "Boston", status: "pendiente" },
  { id: 32, date: "2026-06-19 20:00", home: "Brasil", away: "Haiti", phase: "Grupos", group: "C", stadium: "Philadelphia Stadium", city: "Philadelphia", status: "pendiente" },
  { id: 33, date: "2026-06-19 23:00", home: "Tunez", away: "Japon", phase: "Grupos", group: "F", stadium: "Estadio Monterrey", city: "Monterrey", status: "pendiente" },
  { id: 34, date: "2026-06-20 12:00", home: "Paises Bajos", away: "Suecia", phase: "Grupos", group: "F", stadium: "Houston Stadium", city: "Houston", status: "pendiente" },
  { id: 35, date: "2026-06-20 15:00", home: "Alemania", away: "Costa de Marfil", phase: "Grupos", group: "E", stadium: "Toronto Stadium", city: "Toronto", status: "pendiente" },
  { id: 36, date: "2026-06-20 19:00", home: "Ecuador", away: "Curazao", phase: "Grupos", group: "E", stadium: "Kansas City Stadium", city: "Kansas City", status: "pendiente" },
  { id: 37, date: "2026-06-21 11:00", home: "Espana", away: "Arabia Saudita", phase: "Grupos", group: "H", stadium: "Atlanta Stadium", city: "Atlanta", status: "pendiente" },
  { id: 38, date: "2026-06-21 14:00", home: "Belgica", away: "Iran", phase: "Grupos", group: "G", stadium: "Los Angeles Stadium", city: "Los Angeles", status: "pendiente" },
  { id: 39, date: "2026-06-21 17:00", home: "Uruguay", away: "Cabo Verde", phase: "Grupos", group: "H", stadium: "Miami Stadium", city: "Miami", status: "pendiente" },
  { id: 40, date: "2026-06-21 20:00", home: "Nueva Zelanda", away: "Egipto", phase: "Grupos", group: "G", stadium: "BC Place Vancouver", city: "Vancouver", status: "pendiente" },
  { id: 41, date: "2026-06-22 12:00", home: "Argentina", away: "Austria", phase: "Grupos", group: "J", stadium: "Dallas Stadium", city: "Dallas", status: "pendiente" },
  { id: 42, date: "2026-06-22 16:00", home: "Francia", away: "Irak", phase: "Grupos", group: "I", stadium: "Philadelphia Stadium", city: "Philadelphia", status: "pendiente" },
  { id: 43, date: "2026-06-22 19:00", home: "Noruega", away: "Senegal", phase: "Grupos", group: "I", stadium: "New York New Jersey Stadium", city: "New York/New Jersey", status: "pendiente" },
  { id: 44, date: "2026-06-22 22:00", home: "Jordania", away: "Argelia", phase: "Grupos", group: "J", stadium: "San Francisco Bay Area Stadium", city: "San Francisco Bay Area", status: "pendiente" },
  { id: 45, date: "2026-06-23 12:00", home: "Portugal", away: "Uzbekistan", phase: "Grupos", group: "K", stadium: "Houston Stadium", city: "Houston", status: "pendiente" },
  { id: 46, date: "2026-06-23 15:00", home: "Inglaterra", away: "Ghana", phase: "Grupos", group: "L", stadium: "Boston Stadium", city: "Boston", status: "pendiente" },
  { id: 47, date: "2026-06-23 18:00", home: "Panama", away: "Croacia", phase: "Grupos", group: "L", stadium: "Toronto Stadium", city: "Toronto", status: "pendiente" },
  { id: 48, date: "2026-06-23 21:00", home: "Colombia", away: "Republica Democratica del Congo", phase: "Grupos", group: "K", stadium: "Estadio Guadalajara", city: "Guadalajara", status: "pendiente" },
  { id: 49, date: "2026-06-24 14:00", home: "Suiza", away: "Canada", phase: "Grupos", group: "B", stadium: "BC Place Vancouver", city: "Vancouver", status: "pendiente" },
  { id: 50, date: "2026-06-24 14:00", home: "Bosnia y Herzegovina", away: "Catar", phase: "Grupos", group: "B", stadium: "Seattle Stadium", city: "Seattle", status: "pendiente" },
  { id: 51, date: "2026-06-24 17:00", home: "Escocia", away: "Brasil", phase: "Grupos", group: "C", stadium: "Miami Stadium", city: "Miami", status: "pendiente" },
  { id: 52, date: "2026-06-24 17:00", home: "Marruecos", away: "Haiti", phase: "Grupos", group: "C", stadium: "Atlanta Stadium", city: "Atlanta", status: "pendiente" },
  { id: 53, date: "2026-06-24 20:00", home: "Republica Checa", away: "Mexico", phase: "Grupos", group: "A", stadium: "Estadio Ciudad de Mexico", city: "Ciudad de Mexico", status: "pendiente" },
  { id: 54, date: "2026-06-24 20:00", home: "Sudafrica", away: "Corea del Sur", phase: "Grupos", group: "A", stadium: "Estadio Monterrey", city: "Monterrey", status: "pendiente" },
  { id: 55, date: "2026-06-25 15:00", home: "Ecuador", away: "Alemania", phase: "Grupos", group: "E", stadium: "New York New Jersey Stadium", city: "New York/New Jersey", status: "pendiente" },
  { id: 56, date: "2026-06-25 15:00", home: "Curazao", away: "Costa de Marfil", phase: "Grupos", group: "E", stadium: "Philadelphia Stadium", city: "Philadelphia", status: "pendiente" },
  { id: 57, date: "2026-06-25 18:00", home: "Tunez", away: "Paises Bajos", phase: "Grupos", group: "F", stadium: "Kansas City Stadium", city: "Kansas City", status: "pendiente" },
  { id: 58, date: "2026-06-25 18:00", home: "Japon", away: "Suecia", phase: "Grupos", group: "F", stadium: "Dallas Stadium", city: "Dallas", status: "pendiente" },
  { id: 59, date: "2026-06-25 21:00", home: "Turquia", away: "Estados Unidos", phase: "Grupos", group: "D", stadium: "Los Angeles Stadium", city: "Los Angeles", status: "pendiente" },
  { id: 60, date: "2026-06-25 21:00", home: "Paraguay", away: "Australia", phase: "Grupos", group: "D", stadium: "San Francisco Bay Area Stadium", city: "San Francisco Bay Area", status: "pendiente" },
  { id: 61, date: "2026-06-26 14:00", home: "Noruega", away: "Francia", phase: "Grupos", group: "I", stadium: "Boston Stadium", city: "Boston", status: "pendiente" },
  { id: 62, date: "2026-06-26 14:00", home: "Senegal", away: "Irak", phase: "Grupos", group: "I", stadium: "Toronto Stadium", city: "Toronto", status: "pendiente" },
  { id: 63, date: "2026-06-26 19:00", home: "Uruguay", away: "Espana", phase: "Grupos", group: "H", stadium: "Estadio Guadalajara", city: "Guadalajara", status: "pendiente" },
  { id: 64, date: "2026-06-26 19:00", home: "Cabo Verde", away: "Arabia Saudita", phase: "Grupos", group: "H", stadium: "Houston Stadium", city: "Houston", status: "pendiente" },
  { id: 65, date: "2026-06-26 22:00", home: "Nueva Zelanda", away: "Belgica", phase: "Grupos", group: "G", stadium: "BC Place Vancouver", city: "Vancouver", status: "pendiente" },
  { id: 66, date: "2026-06-26 22:00", home: "Egipto", away: "Iran", phase: "Grupos", group: "G", stadium: "Seattle Stadium", city: "Seattle", status: "pendiente" },
  { id: 67, date: "2026-06-27 16:00", home: "Panama", away: "Inglaterra", phase: "Grupos", group: "L", stadium: "New York New Jersey Stadium", city: "New York/New Jersey", status: "pendiente" },
  { id: 68, date: "2026-06-27 16:00", home: "Croacia", away: "Ghana", phase: "Grupos", group: "L", stadium: "Philadelphia Stadium", city: "Philadelphia", status: "pendiente" },
  { id: 69, date: "2026-06-27 18:30", home: "Colombia", away: "Portugal", phase: "Grupos", group: "K", stadium: "Miami Stadium", city: "Miami", status: "pendiente" },
  { id: 70, date: "2026-06-27 18:30", home: "Republica Democratica del Congo", away: "Uzbekistan", phase: "Grupos", group: "K", stadium: "Atlanta Stadium", city: "Atlanta", status: "pendiente" },
  { id: 71, date: "2026-06-27 21:00", home: "Jordania", away: "Argentina", phase: "Grupos", group: "J", stadium: "Dallas Stadium", city: "Dallas", status: "pendiente" },
  { id: 72, date: "2026-06-27 21:00", home: "Argelia", away: "Austria", phase: "Grupos", group: "J", stadium: "Kansas City Stadium", city: "Kansas City", status: "pendiente" }
];

const knockoutSchedule = [
  { date: "2026-06-28 12:00", phase: "Dieciseisavos", matches: [["1G1", "2G4"], ["1G2", "2G3"]] },
  { date: "2026-06-29 12:00", phase: "Dieciseisavos", matches: [["1G5", "2G8"], ["1G6", "2G7"], ["1G9", "2G12"]] },
  { date: "2026-06-30 12:00", phase: "Dieciseisavos", matches: [["1G10", "2G11"], ["1G3", "3G1"], ["1G4", "3G2"]] },
  { date: "2026-07-01 12:00", phase: "Dieciseisavos", matches: [["1G7", "3G3"], ["1G8", "3G4"], ["1G11", "3G5"]] },
  { date: "2026-07-02 12:00", phase: "Dieciseisavos", matches: [["1G12", "3G6"], ["2G1", "2G2"], ["2G5", "2G6"]] },
  { date: "2026-07-03 12:00", phase: "Dieciseisavos", matches: [["2G9", "2G10"], ["3G7", "3G8"]] },
  { date: "2026-07-04 15:00", phase: "Octavos", matches: [["Ganador D16-1", "Ganador D16-2"], ["Ganador D16-3", "Ganador D16-4"]] },
  { date: "2026-07-05 15:00", phase: "Octavos", matches: [["Ganador D16-5", "Ganador D16-6"], ["Ganador D16-7", "Ganador D16-8"]] },
  { date: "2026-07-06 15:00", phase: "Octavos", matches: [["Ganador D16-9", "Ganador D16-10"], ["Ganador D16-11", "Ganador D16-12"]] },
  { date: "2026-07-07 15:00", phase: "Octavos", matches: [["Ganador D16-13", "Ganador D16-14"], ["Ganador D16-15", "Ganador D16-16"]] },
  { date: "2026-07-09 17:00", phase: "Cuartos", matches: [["Ganador OF1", "Ganador OF2"], ["Ganador OF3", "Ganador OF4"]] },
  { date: "2026-07-10 17:00", phase: "Cuartos", matches: [["Ganador OF5", "Ganador OF6"]] },
  { date: "2026-07-11 17:00", phase: "Cuartos", matches: [["Ganador OF7", "Ganador OF8"]] },
  { date: "2026-07-14 19:00", phase: "Semifinal", matches: [["Ganador CF1", "Ganador CF2"]] },
  { date: "2026-07-15 19:00", phase: "Semifinal", matches: [["Ganador CF3", "Ganador CF4"]] },
  { date: "2026-07-18 17:00", phase: "Tercer puesto", matches: [["Perdedor SF1", "Perdedor SF2"]] },
  { date: "2026-07-19 18:00", phase: "Final", matches: [["Ganador SF1", "Ganador SF2"]] }
];

const flags = {
  "Arabia Saudita": "sa",
  Alemania: "de",
  Argelia: "dz",
  Argentina: "ar",
  Australia: "au",
  Austria: "at",
  Belgica: "be",
  "Bosnia y Herzegovina": "ba",
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
  Irak: "iq",
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
  "Republica Checa": "cz",
  "Republica Democratica del Congo": "cd",
  Escocia: "gb-sct",
  Senegal: "sn",
  Sudafrica: "za",
  Suiza: "ch",
  Suecia: "se",
  Turquia: "tr",
  Tunez: "tn",
  Uzbekistan: "uz",
  Uruguay: "uy"
};

let users = JSON.parse(localStorage.getItem("fifa2026-users") || "[]");

const scorers = [
  ["Sin registros", "-", "-", "-", "-"]
];


const worldCupHistory = [
  {
    "year": 1930,
    "host": "Uruguay",
    "champion": "Uruguay",
    "runnerUp": "Argentina",
    "third": "Estados Unidos",
    "fourth": "Yugoslavia",
    "teams": 13,
    "matches": 18,
    "goals": 70,
    "topScorer": "Guillermo Stabile",
    "topScorerGoals": 8,
    "keeper": "No oficial",
    "colombiaPosition": "No participó"
  },
  {
    "year": 1934,
    "host": "Italia",
    "champion": "Italia",
    "runnerUp": "Checoslovaquia",
    "third": "Alemania",
    "fourth": "Austria",
    "teams": 16,
    "matches": 17,
    "goals": 70,
    "topScorer": "Oldrich Nejedly",
    "topScorerGoals": 5,
    "keeper": "No oficial",
    "colombiaPosition": "No participó"
  },
  {
    "year": 1938,
    "host": "Francia",
    "champion": "Italia",
    "runnerUp": "Hungria",
    "third": "Brasil",
    "fourth": "Suecia",
    "teams": 15,
    "matches": 18,
    "goals": 84,
    "topScorer": "Leonidas",
    "topScorerGoals": 7,
    "keeper": "No oficial",
    "colombiaPosition": "No participó"
  },
  {
    "year": 1950,
    "host": "Brasil",
    "champion": "Uruguay",
    "runnerUp": "Brasil",
    "third": "Suecia",
    "fourth": "Espana",
    "teams": 13,
    "matches": 22,
    "goals": 88,
    "topScorer": "Ademir",
    "topScorerGoals": 8,
    "keeper": "No oficial",
    "colombiaPosition": "No participó"
  },
  {
    "year": 1954,
    "host": "Suiza",
    "champion": "Alemania Federal",
    "runnerUp": "Hungria",
    "third": "Austria",
    "fourth": "Uruguay",
    "teams": 16,
    "matches": 26,
    "goals": 140,
    "topScorer": "Sandor Kocsis",
    "topScorerGoals": 11,
    "keeper": "No oficial",
    "colombiaPosition": "No participó"
  },
  {
    "year": 1958,
    "host": "Suecia",
    "champion": "Brasil",
    "runnerUp": "Suecia",
    "third": "Francia",
    "fourth": "Alemania Federal",
    "teams": 16,
    "matches": 35,
    "goals": 126,
    "topScorer": "Just Fontaine",
    "topScorerGoals": 13,
    "keeper": "No oficial",
    "colombiaPosition": "No participó"
  },
  {
    "year": 1962,
    "host": "Chile",
    "champion": "Brasil",
    "runnerUp": "Checoslovaquia",
    "third": "Chile",
    "fourth": "Yugoslavia",
    "teams": 16,
    "matches": 32,
    "goals": 89,
    "topScorer": "Seis jugadores",
    "topScorerGoals": 4,
    "keeper": "No oficial",
    "colombiaPosition": "14.º"
  },
  {
    "year": 1966,
    "host": "Inglaterra",
    "champion": "Inglaterra",
    "runnerUp": "Alemania Federal",
    "third": "Portugal",
    "fourth": "Unión Soviética",
    "teams": 16,
    "matches": 32,
    "goals": 89,
    "topScorer": "Eusebio",
    "topScorerGoals": 9,
    "keeper": "No oficial",
    "colombiaPosition": "No participó"
  },
  {
    "year": 1970,
    "host": "Mexico",
    "champion": "Brasil",
    "runnerUp": "Italia",
    "third": "Alemania Federal",
    "fourth": "Uruguay",
    "teams": 16,
    "matches": 32,
    "goals": 95,
    "topScorer": "Gerd Muller",
    "topScorerGoals": 10,
    "keeper": "No oficial",
    "colombiaPosition": "No participó"
  },
  {
    "year": 1974,
    "host": "Alemania Federal",
    "champion": "Alemania Federal",
    "runnerUp": "Paises Bajos",
    "third": "Polonia",
    "fourth": "Brasil",
    "teams": 16,
    "matches": 38,
    "goals": 97,
    "topScorer": "Grzegorz Lato",
    "topScorerGoals": 7,
    "keeper": "No oficial",
    "colombiaPosition": "No participó"
  },
  {
    "year": 1978,
    "host": "Argentina",
    "champion": "Argentina",
    "runnerUp": "Paises Bajos",
    "third": "Brasil",
    "fourth": "Italia",
    "teams": 16,
    "matches": 38,
    "goals": 102,
    "topScorer": "Mario Kempes",
    "topScorerGoals": 6,
    "keeper": "No oficial",
    "colombiaPosition": "No participó"
  },
  {
    "year": 1982,
    "host": "Espana",
    "champion": "Italia",
    "runnerUp": "Alemania Federal",
    "third": "Polonia",
    "fourth": "Francia",
    "teams": 24,
    "matches": 52,
    "goals": 146,
    "topScorer": "Paolo Rossi",
    "topScorerGoals": 6,
    "keeper": "No oficial",
    "colombiaPosition": "No participó"
  },
  {
    "year": 1986,
    "host": "Mexico",
    "champion": "Argentina",
    "runnerUp": "Alemania Federal",
    "third": "Francia",
    "fourth": "Bélgica",
    "teams": 24,
    "matches": 52,
    "goals": 132,
    "topScorer": "Gary Lineker",
    "topScorerGoals": 6,
    "keeper": "No oficial",
    "colombiaPosition": "No participó"
  },
  {
    "year": 1990,
    "host": "Italia",
    "champion": "Alemania Federal",
    "runnerUp": "Argentina",
    "third": "Italia",
    "fourth": "Inglaterra",
    "teams": 24,
    "matches": 52,
    "goals": 115,
    "topScorer": "Salvatore Schillaci",
    "topScorerGoals": 6,
    "keeper": "No oficial",
    "colombiaPosition": "14.º"
  },
  {
    "year": 1994,
    "host": "Estados Unidos",
    "champion": "Brasil",
    "runnerUp": "Italia",
    "third": "Suecia",
    "fourth": "Bulgaria",
    "teams": 24,
    "matches": 52,
    "goals": 141,
    "topScorer": "Hristo Stoichkov y Oleg Salenko",
    "topScorerGoals": 6,
    "keeper": "Michel Preudhomme",
    "colombiaPosition": "19.º"
  },
  {
    "year": 1998,
    "host": "Francia",
    "champion": "Francia",
    "runnerUp": "Brasil",
    "third": "Croacia",
    "fourth": "Paises Bajos",
    "teams": 32,
    "matches": 64,
    "goals": 171,
    "topScorer": "Davor Suker",
    "topScorerGoals": 6,
    "keeper": "Fabien Barthez",
    "colombiaPosition": "21.º"
  },
  {
    "year": 2002,
    "host": "Corea del Sur y Japon",
    "champion": "Brasil",
    "runnerUp": "Alemania",
    "third": "Turquia",
    "fourth": "Corea del Sur",
    "teams": 32,
    "matches": 64,
    "goals": 161,
    "topScorer": "Ronaldo",
    "topScorerGoals": 8,
    "keeper": "Oliver Kahn",
    "colombiaPosition": "No participó"
  },
  {
    "year": 2006,
    "host": "Alemania",
    "champion": "Italia",
    "runnerUp": "Francia",
    "third": "Alemania",
    "fourth": "Portugal",
    "teams": 32,
    "matches": 64,
    "goals": 147,
    "topScorer": "Miroslav Klose",
    "topScorerGoals": 5,
    "keeper": "Gianluigi Buffon",
    "colombiaPosition": "No participó"
  },
  {
    "year": 2010,
    "host": "Sudafrica",
    "champion": "Espana",
    "runnerUp": "Paises Bajos",
    "third": "Alemania",
    "fourth": "Uruguay",
    "teams": 32,
    "matches": 64,
    "goals": 145,
    "topScorer": "Thomas Muller",
    "topScorerGoals": 5,
    "keeper": "Iker Casillas",
    "colombiaPosition": "No participó"
  },
  {
    "year": 2014,
    "host": "Brasil",
    "champion": "Alemania",
    "runnerUp": "Argentina",
    "third": "Paises Bajos",
    "fourth": "Brasil",
    "teams": 32,
    "matches": 64,
    "goals": 171,
    "topScorer": "James Rodriguez",
    "topScorerGoals": 6,
    "keeper": "Manuel Neuer",
    "colombiaPosition": "5.º"
  },
  {
    "year": 2018,
    "host": "Rusia",
    "champion": "Francia",
    "runnerUp": "Croacia",
    "third": "Bélgica",
    "fourth": "Inglaterra",
    "teams": 32,
    "matches": 64,
    "goals": 169,
    "topScorer": "Harry Kane",
    "topScorerGoals": 6,
    "keeper": "Thibaut Courtois",
    "colombiaPosition": "9.º"
  },
  {
    "year": 2022,
    "host": "Catar",
    "champion": "Argentina",
    "runnerUp": "Francia",
    "third": "Croacia",
    "fourth": "Marruecos",
    "teams": 32,
    "matches": 64,
    "goals": 172,
    "topScorer": "Kylian Mbappe",
    "topScorerGoals": 8,
    "keeper": "Emiliano Martinez",
    "colombiaPosition": "No participó"
  }
];


const colombiaWorldCupHistory = [
  {
    "year": 1962,
    "host": "Chile",
    "position": "14.º",
    "result": "Fase de grupos",
    "note": "Primer Mundial de Colombia; empató 4-4 contra la Unión Soviética."
  },
  {
    "year": 1990,
    "host": "Italia",
    "position": "14.º",
    "result": "Octavos de final",
    "note": "Regresó tras 28 años y avanzó por primera vez a eliminación directa."
  },
  {
    "year": 1994,
    "host": "Estados Unidos",
    "position": "19.º",
    "result": "Fase de grupos",
    "note": "Llegó con alta expectativa, pero quedó eliminada en primera ronda."
  },
  {
    "year": 1998,
    "host": "Francia",
    "position": "21.º",
    "result": "Fase de grupos",
    "note": "Tercera participación consecutiva de la generación de los años noventa."
  },
  {
    "year": 2014,
    "host": "Brasil",
    "position": "5.º",
    "result": "Cuartos de final",
    "note": "Mejor actuación histórica; James Rodríguez fue goleador del torneo con 6 goles."
  },
  {
    "year": 2018,
    "host": "Rusia",
    "position": "9.º",
    "result": "Octavos de final",
    "note": "Ganó su grupo y cayó por penales ante Inglaterra."
  }
];


const selectedPlayers = [
  {
    name: "Lionel Andrés Messi Cuccittini",
    commonName: "Lionel Messi",
    team: "Argentina",
    birthDate: "1987-06-24",
    height: "1.70 m",
    club: "Inter Miami",
    position: "Delantero",
    photo: "https://commons.wikimedia.org/wiki/Special:FilePath/Lionel-Messi-Argentina-2022-FIFA-World-Cup.jpg"
  },
  {
    name: "Kylian Mbappé Lottin",
    commonName: "Kylian Mbappé",
    team: "Francia",
    birthDate: "1998-12-20",
    height: "1.80 m",
    club: "Real Madrid",
    position: "Delantero",
    photo: "https://commons.wikimedia.org/wiki/Special:FilePath/Kylian%20Mbapp%C3%A9%202018.jpg"
  },
  {
    name: "Cristiano Ronaldo dos Santos Aveiro",
    commonName: "Cristiano Ronaldo",
    team: "Portugal",
    birthDate: "1985-02-05",
    height: "1.87 m",
    club: "Al-Nassr",
    position: "Delantero",
    photo: "https://commons.wikimedia.org/wiki/Special:FilePath/Cristiano%20Ronaldo%20in%20Al%20Nassr%20in%202023.jpg"
  },
  {
    name: "Erling Braut Haaland",
    commonName: "Erling Haaland",
    team: "Noruega",
    birthDate: "2000-07-21",
    height: "1.95 m",
    club: "Manchester City",
    position: "Delantero centro",
    photo: "https://commons.wikimedia.org/wiki/Special:FilePath/Erling%20Haaland%202023%20(cropped).jpg"
  },
  {
    name: "Vinícius José Paixão de Oliveira Júnior",
    commonName: "Vinícius Júnior",
    team: "Brasil",
    birthDate: "2000-07-12",
    height: "1.76 m",
    club: "Real Madrid",
    position: "Extremo izquierdo",
    photo: "https://commons.wikimedia.org/wiki/Special:FilePath/Vinicius%20Jr%202018%20(cropped).jpg"
  },
  {
    name: "Jude Victor William Bellingham",
    commonName: "Jude Bellingham",
    team: "Inglaterra",
    birthDate: "2003-06-29",
    height: "1.86 m",
    club: "Real Madrid",
    position: "Mediocampista",
    photo: "https://commons.wikimedia.org/wiki/Special:FilePath/Jude%20Bellingham%20Laureus%202024%20(cropped2).jpg"
  },
  {
    name: "Lamine Yamal Nasraoui Ebana",
    commonName: "Lamine Yamal",
    team: "Espana",
    birthDate: "2007-07-13",
    height: "1.79 m",
    club: "Barcelona",
    position: "Extremo derecho",
    photo: "https://commons.wikimedia.org/wiki/Special:FilePath/Lamine%20Yamal%20in%202025%20(cropped).jpg"
  },
  {
    name: "Harry Edward Kane",
    commonName: "Harry Kane",
    team: "Inglaterra",
    birthDate: "1993-07-28",
    height: "1.88 m",
    club: "Bayern Munich",
    position: "Delantero centro",
    photo: "https://commons.wikimedia.org/wiki/Special:FilePath/Harry%20Kane%202023.jpg"
  },
  {
    name: "Federico Santiago Valverde Dipetta",
    commonName: "Federico Valverde",
    team: "Uruguay",
    birthDate: "1998-07-22",
    height: "1.82 m",
    club: "Real Madrid",
    position: "Mediocampista central",
    photo: "https://commons.wikimedia.org/wiki/Special:FilePath/Federico%20Valverde%202021%20(cropped).jpg"
  },
  {
    name: "Luis Fernando Díaz Marulanda",
    commonName: "Luis Díaz",
    team: "Colombia",
    birthDate: "1997-01-13",
    height: "1.80 m",
    club: "Bayern Munich",
    position: "Extremo izquierdo",
    photo: "https://commons.wikimedia.org/wiki/Special:FilePath/Luis%20D%C3%ADaz%20(portrait).jpg"
  },
  {
    name: "Jamal Musiala",
    commonName: "Jamal Musiala",
    team: "Alemania",
    birthDate: "2003-02-26",
    height: "1.86 m",
    club: "Bayern Munich",
    position: "Mediocampista ofensivo",
    photo: "https://commons.wikimedia.org/wiki/Special:FilePath/Jamal%20Musiala%202022.jpg"
  },
  {
    name: "Pedro González López",
    commonName: "Pedri",
    team: "Espana",
    birthDate: "2002-11-25",
    height: "1.74 m",
    club: "Barcelona",
    position: "Mediocampista",
    photo: "https://commons.wikimedia.org/wiki/Special:FilePath/Pedri%202025.jpg"
  }
];

const paniniAlbumTeams = [
  {
    "code": "ALG",
    "team": "Argelia",
    "sourceTeam": "Algeria",
    "players": [
      {
        "code": "ALG 2",
        "name": "Alexis Guendouz"
      },
      {
        "code": "ALG 3",
        "name": "Ramy Bensebaini"
      },
      {
        "code": "ALG 4",
        "name": "Youcef Atal"
      },
      {
        "code": "ALG 5",
        "name": "Rayan Aït-Nouri"
      },
      {
        "code": "ALG 6",
        "name": "Mohamed Amine Tougai"
      },
      {
        "code": "ALG 7",
        "name": "Aïssa Mandi"
      },
      {
        "code": "ALG 8",
        "name": "Ismael Bennacer"
      },
      {
        "code": "ALG 9",
        "name": "Houssem Aquar"
      },
      {
        "code": "ALG 10",
        "name": "Hicham Boudaoui"
      },
      {
        "code": "ALG 11",
        "name": "Ramiz Zerrouki"
      },
      {
        "code": "ALG 12",
        "name": "Nabil Bentalab"
      },
      {
        "code": "ALG 14",
        "name": "Farés Chaibi"
      },
      {
        "code": "ALG 15",
        "name": "Riyad Mahrez"
      },
      {
        "code": "ALG 16",
        "name": "Said Benrahma"
      },
      {
        "code": "ALG 17",
        "name": "Anis Hadj Moussa"
      },
      {
        "code": "ALG 18",
        "name": "Amine Gouiri"
      },
      {
        "code": "ALG 19",
        "name": "Baghdad Bounedjah"
      },
      {
        "code": "ALG 20",
        "name": "Mohammed Amoura"
      }
    ]
  },
  {
    "code": "ARG",
    "team": "Argentina",
    "sourceTeam": "Argentina",
    "players": [
      {
        "code": "ARG 2",
        "name": "Emiliano Martinez"
      },
      {
        "code": "ARG 3",
        "name": "Nahuel Molina"
      },
      {
        "code": "ARG 4",
        "name": "Cristian Romero"
      },
      {
        "code": "ARG 5",
        "name": "Nicolas Otamendi"
      },
      {
        "code": "ARG 6",
        "name": "Nicolas Tagliafico"
      },
      {
        "code": "ARG 7",
        "name": "Leonardo Balerdi"
      },
      {
        "code": "ARG 8",
        "name": "Enzo Fernandez"
      },
      {
        "code": "ARG 9",
        "name": "Alexis Mac Allister"
      },
      {
        "code": "ARG 10",
        "name": "Rodrigo De Paul"
      },
      {
        "code": "ARG 11",
        "name": "Exequiel Palacios"
      },
      {
        "code": "ARG 12",
        "name": "Leandro Paredes"
      },
      {
        "code": "ARG 14",
        "name": "Nico Paz"
      },
      {
        "code": "ARG 15",
        "name": "Franco Mastantuono"
      },
      {
        "code": "ARG 16",
        "name": "Nico Gonzalez"
      },
      {
        "code": "ARG 17",
        "name": "Lionel Messi"
      },
      {
        "code": "ARG 18",
        "name": "Lautaro Martinez"
      },
      {
        "code": "ARG 19",
        "name": "Julian Alvarez"
      },
      {
        "code": "ARG 20",
        "name": "Giuliano Simeone"
      }
    ]
  },
  {
    "code": "AUS",
    "team": "Australia",
    "sourceTeam": "Australia",
    "players": [
      {
        "code": "AUS 2",
        "name": "Mathew Ryan"
      },
      {
        "code": "AUS 3",
        "name": "Joe Gauci"
      },
      {
        "code": "AUS 4",
        "name": "Harry Souttar"
      },
      {
        "code": "AUS 5",
        "name": "Alessandro Circati"
      },
      {
        "code": "AUS 6",
        "name": "Jordan Bos"
      },
      {
        "code": "AUS 7",
        "name": "Aziz Behich"
      },
      {
        "code": "AUS 8",
        "name": "Cameron Burgess"
      },
      {
        "code": "AUS 9",
        "name": "Lewis Miller"
      },
      {
        "code": "AUS 10",
        "name": "Milos Degenek"
      },
      {
        "code": "AUS 11",
        "name": "Jackson Irvine"
      },
      {
        "code": "AUS 12",
        "name": "Riley McGree"
      },
      {
        "code": "AUS 14",
        "name": "Aiden O'Neill"
      },
      {
        "code": "AUS 15",
        "name": "Connor Metcalfe"
      },
      {
        "code": "AUS 16",
        "name": "Patrick Yazbek"
      },
      {
        "code": "AUS 17",
        "name": "Craig Goodwin"
      },
      {
        "code": "AUS 18",
        "name": "Kusini Vengi"
      },
      {
        "code": "AUS 19",
        "name": "Nestory Irankunda"
      },
      {
        "code": "AUS 20",
        "name": "Mohamed Touré"
      }
    ]
  },
  {
    "code": "AUT",
    "team": "Austria",
    "sourceTeam": "Austria",
    "players": [
      {
        "code": "AUT 2",
        "name": "Alexander Schlager"
      },
      {
        "code": "AUT 3",
        "name": "Patrick Pentz"
      },
      {
        "code": "AUT 4",
        "name": "David Alaba"
      },
      {
        "code": "AUT 5",
        "name": "Kevin Danso"
      },
      {
        "code": "AUT 6",
        "name": "Philipp Lienhart"
      },
      {
        "code": "AUT 7",
        "name": "Stefan Posch"
      },
      {
        "code": "AUT 8",
        "name": "Phillipp Mwene"
      },
      {
        "code": "AUT 9",
        "name": "Alexander Prass"
      },
      {
        "code": "AUT 10",
        "name": "Xaver Schlager"
      },
      {
        "code": "AUT 11",
        "name": "Marcel Sabitzer"
      },
      {
        "code": "AUT 12",
        "name": "Konrad Laimer"
      },
      {
        "code": "AUT 14",
        "name": "Florian Grillitsch"
      },
      {
        "code": "AUT 15",
        "name": "Nicolas Seiwald"
      },
      {
        "code": "AUT 16",
        "name": "Romano Schmid"
      },
      {
        "code": "AUT 17",
        "name": "Patrick Wimmer"
      },
      {
        "code": "AUT 18",
        "name": "Christoph Baumgartner"
      },
      {
        "code": "AUT 19",
        "name": "Michael Gregoritsch"
      },
      {
        "code": "AUT 20",
        "name": "Marko Arnautović"
      }
    ]
  },
  {
    "code": "BEL",
    "team": "Belgica",
    "sourceTeam": "Belgium",
    "players": [
      {
        "code": "BEL 2",
        "name": "Thibaut Courtois"
      },
      {
        "code": "BEL 3",
        "name": "Arthur Theate"
      },
      {
        "code": "BEL 4",
        "name": "Timothy Castagne"
      },
      {
        "code": "BEL 5",
        "name": "Zeno Debast"
      },
      {
        "code": "BEL 6",
        "name": "Brandon Mechele"
      },
      {
        "code": "BEL 7",
        "name": "Maxim De Cuyper"
      },
      {
        "code": "BEL 8",
        "name": "Thomas Meunier"
      },
      {
        "code": "BEL 9",
        "name": "Youri Tielemans"
      },
      {
        "code": "BEL 10",
        "name": "Amadou Onana"
      },
      {
        "code": "BEL 11",
        "name": "Nicolas Raskin"
      },
      {
        "code": "BEL 12",
        "name": "Alexis Saelemaekers"
      },
      {
        "code": "BEL 14",
        "name": "Hans Vanaken"
      },
      {
        "code": "BEL 15",
        "name": "Kevin De Bruyne"
      },
      {
        "code": "BEL 16",
        "name": "Jérémy Doku"
      },
      {
        "code": "BEL 17",
        "name": "Charles De Ketelaere"
      },
      {
        "code": "BEL 18",
        "name": "Leandro Trossard"
      },
      {
        "code": "BEL 19",
        "name": "Loïs Openda"
      },
      {
        "code": "BEL 20",
        "name": "Romelu Lukaku"
      }
    ]
  },
  {
    "code": "BIH",
    "team": "Bosnia y Herzegovina",
    "sourceTeam": "Bosnia and Herzegovina",
    "players": [
      {
        "code": "BIH 2",
        "name": "Nikola Vasilj"
      },
      {
        "code": "BIH 3",
        "name": "Amer Dedic"
      },
      {
        "code": "BIH 4",
        "name": "Sead Kolasinac"
      },
      {
        "code": "BIH 5",
        "name": "Tarik Muharemovic"
      },
      {
        "code": "BIH 6",
        "name": "Nihad Mujakic"
      },
      {
        "code": "BIH 7",
        "name": "Nikola Katic"
      },
      {
        "code": "BIH 8",
        "name": "Amir Hadziahmetovic"
      },
      {
        "code": "BIH 9",
        "name": "Benjamin Tahirovic"
      },
      {
        "code": "BIH 10",
        "name": "Armin Gigovic"
      },
      {
        "code": "BIH 11",
        "name": "Ivan Sunjic"
      },
      {
        "code": "BIH 12",
        "name": "Ivan Basic"
      },
      {
        "code": "BIH 14",
        "name": "Dzenis Burnic"
      },
      {
        "code": "BIH 15",
        "name": "Esmir Bajraktarevic"
      },
      {
        "code": "BIH 16",
        "name": "Amar Memic"
      },
      {
        "code": "BIH 17",
        "name": "Ermedin Demirovic"
      },
      {
        "code": "BIH 18",
        "name": "Edin Dzeko"
      },
      {
        "code": "BIH 19",
        "name": "Samed Bazdar"
      },
      {
        "code": "BIH 20",
        "name": "Haris Tabakovic"
      }
    ]
  },
  {
    "code": "BRA",
    "team": "Brasil",
    "sourceTeam": "Brazil",
    "players": [
      {
        "code": "BRA 2",
        "name": "Alisson"
      },
      {
        "code": "BRA 3",
        "name": "Bento"
      },
      {
        "code": "BRA 4",
        "name": "Marquinhos"
      },
      {
        "code": "BRA 5",
        "name": "Éder Militão"
      },
      {
        "code": "BRA 6",
        "name": "Gabriel Magalhães"
      },
      {
        "code": "BRA 7",
        "name": "Danilo"
      },
      {
        "code": "BRA 8",
        "name": "Wesley"
      },
      {
        "code": "BRA 9",
        "name": "Lucas Paquetá"
      },
      {
        "code": "BRA 10",
        "name": "Casemiro"
      },
      {
        "code": "BRA 11",
        "name": "Bruno Guimarães"
      },
      {
        "code": "BRA 12",
        "name": "Luiz Henrique"
      },
      {
        "code": "BRA 14",
        "name": "Vinicius Júnior"
      },
      {
        "code": "BRA 15",
        "name": "Rodrygo"
      },
      {
        "code": "BRA 16",
        "name": "João Pedro"
      },
      {
        "code": "BRA 17",
        "name": "Matheus Cunha"
      },
      {
        "code": "BRA 18",
        "name": "Gabriel Martinelli"
      },
      {
        "code": "BRA 19",
        "name": "Raphinha"
      },
      {
        "code": "BRA 20",
        "name": "Estévão"
      }
    ]
  },
  {
    "code": "CAN",
    "team": "Canada",
    "sourceTeam": "Canada",
    "players": [
      {
        "code": "CAN 2",
        "name": "Dayne St.Clair"
      },
      {
        "code": "CAN 3",
        "name": "Alphonso Davies"
      },
      {
        "code": "CAN 4",
        "name": "Alistair Johnston"
      },
      {
        "code": "CAN 5",
        "name": "Samuel Adekugbe"
      },
      {
        "code": "CAN 6",
        "name": "Riche Larvea"
      },
      {
        "code": "CAN 7",
        "name": "Derek Cornelius"
      },
      {
        "code": "CAN 8",
        "name": "Moïse Bombito"
      },
      {
        "code": "CAN 9",
        "name": "Kamal Miller"
      },
      {
        "code": "CAN 10",
        "name": "Stephen Eustáquio"
      },
      {
        "code": "CAN 11",
        "name": "Ismaël Koné"
      },
      {
        "code": "CAN 12",
        "name": "Jonathan Osorio"
      },
      {
        "code": "CAN 14",
        "name": "Jacob Shaffelburg"
      },
      {
        "code": "CAN 15",
        "name": "Mathieu Choinière"
      },
      {
        "code": "CAN 16",
        "name": "Niko Sigur"
      },
      {
        "code": "CAN 17",
        "name": "Tajon Buchanan"
      },
      {
        "code": "CAN 18",
        "name": "Liam Millar"
      },
      {
        "code": "CAN 19",
        "name": "Cyle Larin"
      },
      {
        "code": "CAN 20",
        "name": "Jonathan David"
      }
    ]
  },
  {
    "code": "CIV",
    "team": "Costa de Marfil",
    "sourceTeam": "Côte d'Ivoire",
    "players": [
      {
        "code": "CIV 2",
        "name": "Yahia Fofana"
      },
      {
        "code": "CIV 3",
        "name": "Ghislain Konan"
      },
      {
        "code": "CIV 4",
        "name": "Wilfried Singo"
      },
      {
        "code": "CIV 5",
        "name": "Odilon Kossounou"
      },
      {
        "code": "CIV 6",
        "name": "Evan Ndicka"
      },
      {
        "code": "CIV 7",
        "name": "Willy Boly"
      },
      {
        "code": "CIV 8",
        "name": "Emmanuel Agbadou"
      },
      {
        "code": "CIV 9",
        "name": "Ousmane Diomande"
      },
      {
        "code": "CIV 10",
        "name": "Franck Kessie"
      },
      {
        "code": "CIV 11",
        "name": "Seko Fofana"
      },
      {
        "code": "CIV 12",
        "name": "Ibrahim Sangare"
      },
      {
        "code": "CIV 14",
        "name": "Jean-Philippe Gbamin"
      },
      {
        "code": "CIV 15",
        "name": "Amad Diallo"
      },
      {
        "code": "CIV 16",
        "name": "Sébastien Haller"
      },
      {
        "code": "CIV 17",
        "name": "Simon Adingra"
      },
      {
        "code": "CIV 18",
        "name": "Yan Diomande"
      },
      {
        "code": "CIV 19",
        "name": "Evann Guessand"
      },
      {
        "code": "CIV 20",
        "name": "Oumar Diakite"
      }
    ]
  },
  {
    "code": "COD",
    "team": "Republica Democratica del Congo",
    "sourceTeam": "DR Congo",
    "players": [
      {
        "code": "COD 2",
        "name": "Lionel Mpasi"
      },
      {
        "code": "COD 3",
        "name": "Aaron Wan-Bissaka"
      },
      {
        "code": "COD 4",
        "name": "Axel Tuanzebe"
      },
      {
        "code": "COD 5",
        "name": "Arthur Masuaku"
      },
      {
        "code": "COD 6",
        "name": "Chancel Mbemba"
      },
      {
        "code": "COD 7",
        "name": "Joris Kayembe"
      },
      {
        "code": "COD 8",
        "name": "Charles Pickel"
      },
      {
        "code": "COD 9",
        "name": "Ngal'ayel Mukau"
      },
      {
        "code": "COD 10",
        "name": "Edo Kayembe"
      },
      {
        "code": "COD 11",
        "name": "Samuel Moutoussamy"
      },
      {
        "code": "COD 12",
        "name": "Noah Sadiki"
      },
      {
        "code": "COD 14",
        "name": "Théo Bongonda"
      },
      {
        "code": "COD 15",
        "name": "Meschak Elia"
      },
      {
        "code": "COD 16",
        "name": "Yoane Wissa"
      },
      {
        "code": "COD 17",
        "name": "Brian Cipenga"
      },
      {
        "code": "COD 18",
        "name": "Fiston Mayele"
      },
      {
        "code": "COD 19",
        "name": "Cédric Bakambu"
      },
      {
        "code": "COD 20",
        "name": "Nathanaël Mbuku"
      }
    ]
  },
  {
    "code": "COL",
    "team": "Colombia",
    "sourceTeam": "Colombia",
    "players": [
      {
        "code": "COL 2",
        "name": "Camilo Vargas"
      },
      {
        "code": "COL 3",
        "name": "David Ospina"
      },
      {
        "code": "COL 4",
        "name": "Dávinson Sánchez"
      },
      {
        "code": "COL 5",
        "name": "Yerry Mina"
      },
      {
        "code": "COL 6",
        "name": "Daniel Munoz"
      },
      {
        "code": "COL 7",
        "name": "Johan Mojica"
      },
      {
        "code": "COL 8",
        "name": "Jhon Lucumí"
      },
      {
        "code": "COL 9",
        "name": "Santiago Arias"
      },
      {
        "code": "COL 10",
        "name": "Jefferson Lerma"
      },
      {
        "code": "COL 11",
        "name": "Kevin Castaño"
      },
      {
        "code": "COL 12",
        "name": "Richard Rios"
      },
      {
        "code": "COL 14",
        "name": "James Rodriguez"
      },
      {
        "code": "COL 15",
        "name": "Juan Fernando Quintero"
      },
      {
        "code": "COL 16",
        "name": "Jorge Carrascal"
      },
      {
        "code": "COL 17",
        "name": "Jon Arias"
      },
      {
        "code": "COL 18",
        "name": "Jhon Cordova"
      },
      {
        "code": "COL 19",
        "name": "Luis Suarez"
      },
      {
        "code": "COL 20",
        "name": "Luis Diaz"
      }
    ]
  },
  {
    "code": "CPV",
    "team": "Cabo Verde",
    "sourceTeam": "Cape Verde",
    "players": [
      {
        "code": "CPV 2",
        "name": "Vozinha"
      },
      {
        "code": "CPV 3",
        "name": "Logan Costa"
      },
      {
        "code": "CPV 4",
        "name": "Pico"
      },
      {
        "code": "CPV 5",
        "name": "Diney"
      },
      {
        "code": "CPV 6",
        "name": "Steven Moreira"
      },
      {
        "code": "CPV 7",
        "name": "Wagner Pina"
      },
      {
        "code": "CPV 8",
        "name": "Joao Paulo"
      },
      {
        "code": "CPV 9",
        "name": "Yannick Semedo"
      },
      {
        "code": "CPV 10",
        "name": "Kevin Pina"
      },
      {
        "code": "CPV 11",
        "name": "Patrick Andrade"
      },
      {
        "code": "CPV 12",
        "name": "Jamiro Monteiro"
      },
      {
        "code": "CPV 14",
        "name": "Deroy Duarte"
      },
      {
        "code": "CPV 15",
        "name": "Garry Rodrigues"
      },
      {
        "code": "CPV 16",
        "name": "Jovane Cabral"
      },
      {
        "code": "CPV 17",
        "name": "Ryan Mendes"
      },
      {
        "code": "CPV 18",
        "name": "Dailon Livramento"
      },
      {
        "code": "CPV 19",
        "name": "Willy Semedo"
      },
      {
        "code": "CPV 20",
        "name": "Bebe"
      }
    ]
  },
  {
    "code": "CRO",
    "team": "Croacia",
    "sourceTeam": "Croatia",
    "players": [
      {
        "code": "CRO 2",
        "name": "Dominik Livaković"
      },
      {
        "code": "CRO 3",
        "name": "Duje Caleta-Car"
      },
      {
        "code": "CRO 4",
        "name": "Josko Gvardiol"
      },
      {
        "code": "CRO 5",
        "name": "Josip Stanišić"
      },
      {
        "code": "CRO 6",
        "name": "Luka Vušković"
      },
      {
        "code": "CRO 7",
        "name": "Josip Sutalo"
      },
      {
        "code": "CRO 8",
        "name": "Kristijan Jakic"
      },
      {
        "code": "CRO 9",
        "name": "Luka Modrić"
      },
      {
        "code": "CRO 10",
        "name": "Mateo Kovacic"
      },
      {
        "code": "CRO 11",
        "name": "Martin Baturina"
      },
      {
        "code": "CRO 12",
        "name": "Lovro Majer"
      },
      {
        "code": "CRO 14",
        "name": "Mario Pasalic"
      },
      {
        "code": "CRO 15",
        "name": "Petar Sucic"
      },
      {
        "code": "CRO 16",
        "name": "Ivan Perišić"
      },
      {
        "code": "CRO 17",
        "name": "Marco Pasalic"
      },
      {
        "code": "CRO 18",
        "name": "Ante Budimir"
      },
      {
        "code": "CRO 19",
        "name": "Andrej Kramarić"
      },
      {
        "code": "CRO 20",
        "name": "Franjo Ivanovic"
      }
    ]
  },
  {
    "code": "CUW",
    "team": "Curazao",
    "sourceTeam": "Curaçao",
    "players": [
      {
        "code": "CUW 2",
        "name": "Eloy Room"
      },
      {
        "code": "CUW 3",
        "name": "Armando Obispo"
      },
      {
        "code": "CUW 4",
        "name": "Sherel Floranus"
      },
      {
        "code": "CUW 5",
        "name": "Jurien Gaari"
      },
      {
        "code": "CUW 6",
        "name": "Joshua Brenet"
      },
      {
        "code": "CUW 7",
        "name": "Roshon Van Eijma"
      },
      {
        "code": "CUW 8",
        "name": "Shurandy Sambo"
      },
      {
        "code": "CUW 9",
        "name": "Livano Comenencia"
      },
      {
        "code": "CUW 10",
        "name": "Godfried Roemeratoe"
      },
      {
        "code": "CUW 11",
        "name": "Juninho Bacuna"
      },
      {
        "code": "CUW 12",
        "name": "Leandro Bacuna"
      },
      {
        "code": "CUW 14",
        "name": "Tahith Chong"
      },
      {
        "code": "CUW 15",
        "name": "Kenji Gorre"
      },
      {
        "code": "CUW 16",
        "name": "Jearl Margaritha"
      },
      {
        "code": "CUW 17",
        "name": "Jurgen Locadia"
      },
      {
        "code": "CUW 18",
        "name": "Jeremy Antonisse"
      },
      {
        "code": "CUW 19",
        "name": "Gervane Kastaneer"
      },
      {
        "code": "CUW 20",
        "name": "Sontje Hansen"
      }
    ]
  },
  {
    "code": "CZE",
    "team": "Republica Checa",
    "sourceTeam": "Czechia",
    "players": [
      {
        "code": "CZE 2",
        "name": "Matej Kovar"
      },
      {
        "code": "CZE 3",
        "name": "Jindrich Stanek"
      },
      {
        "code": "CZE 4",
        "name": "Ladislav Krejci"
      },
      {
        "code": "CZE 5",
        "name": "Vladimir Coufal"
      },
      {
        "code": "CZE 6",
        "name": "Jaroslav Zeleny"
      },
      {
        "code": "CZE 7",
        "name": "Tomas Holes"
      },
      {
        "code": "CZE 8",
        "name": "David Zima"
      },
      {
        "code": "CZE 9",
        "name": "Michal Sadilek"
      },
      {
        "code": "CZE 10",
        "name": "Lukas Provod"
      },
      {
        "code": "CZE 11",
        "name": "Lukas Cerv"
      },
      {
        "code": "CZE 12",
        "name": "Tomas Soucek"
      },
      {
        "code": "CZE 14",
        "name": "Pavel Sulc"
      },
      {
        "code": "CZE 15",
        "name": "Matej Vydra"
      },
      {
        "code": "CZE 16",
        "name": "Vasil Kusej"
      },
      {
        "code": "CZE 17",
        "name": "Tomas Chory"
      },
      {
        "code": "CZE 18",
        "name": "Vaclav Cerny"
      },
      {
        "code": "CZE 19",
        "name": "Adam Hlozek"
      },
      {
        "code": "CZE 20",
        "name": "Patrik Schick"
      }
    ]
  },
  {
    "code": "ECU",
    "team": "Ecuador",
    "sourceTeam": "Ecuador",
    "players": [
      {
        "code": "ECU 2",
        "name": "Hernán Galíndez"
      },
      {
        "code": "ECU 3",
        "name": "Gonzalo Valle"
      },
      {
        "code": "ECU 4",
        "name": "Piero Hincapié"
      },
      {
        "code": "ECU 5",
        "name": "Pervis Estupiñán"
      },
      {
        "code": "ECU 6",
        "name": "Willian Pacho"
      },
      {
        "code": "ECU 7",
        "name": "Ángelo Preciado"
      },
      {
        "code": "ECU 8",
        "name": "Joel Ordóñez"
      },
      {
        "code": "ECU 9",
        "name": "Moises Caicedo"
      },
      {
        "code": "ECU 10",
        "name": "Alan Franco"
      },
      {
        "code": "ECU 11",
        "name": "Kendry Paez"
      },
      {
        "code": "ECU 12",
        "name": "Pedro Vite"
      },
      {
        "code": "ECU 14",
        "name": "John Veboah"
      },
      {
        "code": "ECU 15",
        "name": "Leonardo Campana"
      },
      {
        "code": "ECU 16",
        "name": "Gonzalo Plata"
      },
      {
        "code": "ECU 17",
        "name": "Nilson Angulo"
      },
      {
        "code": "ECU 18",
        "name": "Alan Minda"
      },
      {
        "code": "ECU 19",
        "name": "Kevin Rodriguez"
      },
      {
        "code": "ECU 20",
        "name": "Enner Valencia"
      }
    ]
  },
  {
    "code": "EGY",
    "team": "Egipto",
    "sourceTeam": "Egypt",
    "players": [
      {
        "code": "EGY 2",
        "name": "Mohamed El Shenawy"
      },
      {
        "code": "EGY 3",
        "name": "Mohamed Hany"
      },
      {
        "code": "EGY 4",
        "name": "Mohamed Hamdy"
      },
      {
        "code": "EGY 5",
        "name": "Yasser Ibrahim"
      },
      {
        "code": "EGY 6",
        "name": "Khaled Sobhi"
      },
      {
        "code": "EGY 7",
        "name": "Ramy Rabia"
      },
      {
        "code": "EGY 8",
        "name": "Hossam Abdelmaguid"
      },
      {
        "code": "EGY 9",
        "name": "Ahmed Fatouh"
      },
      {
        "code": "EGY 10",
        "name": "Marwan Attia"
      },
      {
        "code": "EGY 11",
        "name": "Zizo"
      },
      {
        "code": "EGY 12",
        "name": "Hamdy Fathy"
      },
      {
        "code": "EGY 14",
        "name": "Mohamed Lasheen"
      },
      {
        "code": "EGY 15",
        "name": "Emam Ashour"
      },
      {
        "code": "EGY 16",
        "name": "Osama Faisal"
      },
      {
        "code": "EGY 17",
        "name": "Mohamed Salah"
      },
      {
        "code": "EGY 18",
        "name": "Mostafa Mohamed"
      },
      {
        "code": "EGY 19",
        "name": "Trezeguet"
      },
      {
        "code": "EGY 20",
        "name": "Omar Marmoush"
      }
    ]
  },
  {
    "code": "ENG",
    "team": "Inglaterra",
    "sourceTeam": "England",
    "players": [
      {
        "code": "ENG 2",
        "name": "Jordan Pickford"
      },
      {
        "code": "ENG 3",
        "name": "John Stones"
      },
      {
        "code": "ENG 4",
        "name": "Marc Guéhi"
      },
      {
        "code": "ENG 5",
        "name": "Ezri Konsa"
      },
      {
        "code": "ENG 6",
        "name": "Trent Alexander-Arnold"
      },
      {
        "code": "ENG 7",
        "name": "Reece James"
      },
      {
        "code": "ENG 8",
        "name": "Dan Burn"
      },
      {
        "code": "ENG 9",
        "name": "Jordan Henderson"
      },
      {
        "code": "ENG 10",
        "name": "Declan Rice"
      },
      {
        "code": "ENG 11",
        "name": "Jude Bellingham"
      },
      {
        "code": "ENG 12",
        "name": "Cole Palmer"
      },
      {
        "code": "ENG 14",
        "name": "Morgan Rogers"
      },
      {
        "code": "ENG 15",
        "name": "Anthony Gordon"
      },
      {
        "code": "ENG 16",
        "name": "Phil Foden"
      },
      {
        "code": "ENG 17",
        "name": "Bukayo Saka"
      },
      {
        "code": "ENG 18",
        "name": "Harry Kane"
      },
      {
        "code": "ENG 19",
        "name": "Marcus Rashford"
      },
      {
        "code": "ENG 20",
        "name": "Ollie Watkins"
      }
    ]
  },
  {
    "code": "ESP",
    "team": "Espana",
    "sourceTeam": "Spain",
    "players": [
      {
        "code": "ESP 2",
        "name": "Unai Simon"
      },
      {
        "code": "ESP 3",
        "name": "Robin Le Normand"
      },
      {
        "code": "ESP 4",
        "name": "Aymeric Laporte"
      },
      {
        "code": "ESP 5",
        "name": "Dean Huijsen"
      },
      {
        "code": "ESP 6",
        "name": "Pedro Porro"
      },
      {
        "code": "ESP 7",
        "name": "Dani Carvajal"
      },
      {
        "code": "ESP 8",
        "name": "Marc Cucurella"
      },
      {
        "code": "ESP 9",
        "name": "Martín Zubimendi"
      },
      {
        "code": "ESP 10",
        "name": "Rodri"
      },
      {
        "code": "ESP 11",
        "name": "Pedri"
      },
      {
        "code": "ESP 12",
        "name": "Fabian Ruiz"
      },
      {
        "code": "ESP 14",
        "name": "Mikel Merino"
      },
      {
        "code": "ESP 15",
        "name": "Lamine Yamal"
      },
      {
        "code": "ESP 16",
        "name": "Dani Olmo"
      },
      {
        "code": "ESP 17",
        "name": "Nico Williams"
      },
      {
        "code": "ESP 18",
        "name": "Ferran Torres"
      },
      {
        "code": "ESP 19",
        "name": "Álvaro Morata"
      },
      {
        "code": "ESP 20",
        "name": "Mikel Oyarzabal"
      }
    ]
  },
  {
    "code": "FRA",
    "team": "Francia",
    "sourceTeam": "France",
    "players": [
      {
        "code": "FRA 2",
        "name": "Mike Maignan"
      },
      {
        "code": "FRA 3",
        "name": "Theo Hernandez"
      },
      {
        "code": "FRA 4",
        "name": "William Saliba"
      },
      {
        "code": "FRA 5",
        "name": "Jules Kounde"
      },
      {
        "code": "FRA 6",
        "name": "Ibrahima Konate"
      },
      {
        "code": "FRA 7",
        "name": "Dayot Upamecano"
      },
      {
        "code": "FRA 8",
        "name": "Lucas Digne"
      },
      {
        "code": "FRA 9",
        "name": "Aurélien Tchouaméni"
      },
      {
        "code": "FRA 10",
        "name": "Eduardo Camavinga"
      },
      {
        "code": "FRA 11",
        "name": "Manu Kone"
      },
      {
        "code": "FRA 12",
        "name": "Adrien Rabiot"
      },
      {
        "code": "FRA 14",
        "name": "Michael Olise"
      },
      {
        "code": "FRA 15",
        "name": "Ousmane Dembele"
      },
      {
        "code": "FRA 16",
        "name": "Bradley Barcola"
      },
      {
        "code": "FRA 17",
        "name": "Désiré Doué"
      },
      {
        "code": "FRA 18",
        "name": "Kingsley Coman"
      },
      {
        "code": "FRA 19",
        "name": "Hugo Ekitike"
      },
      {
        "code": "FRA 20",
        "name": "Kylian Mbappe"
      }
    ]
  },
  {
    "code": "GER",
    "team": "Alemania",
    "sourceTeam": "Germany",
    "players": [
      {
        "code": "GER 2",
        "name": "Marc-André ter Stegen"
      },
      {
        "code": "GER 3",
        "name": "Jonathan Tah"
      },
      {
        "code": "GER 4",
        "name": "David Raum"
      },
      {
        "code": "GER 5",
        "name": "Nico Schlotterbeck"
      },
      {
        "code": "GER 6",
        "name": "Antonio Rüdiger"
      },
      {
        "code": "GER 7",
        "name": "Waldemar Anton"
      },
      {
        "code": "GER 8",
        "name": "Ridle Baku"
      },
      {
        "code": "GER 9",
        "name": "Maximilian Mittelstadt"
      },
      {
        "code": "GER 10",
        "name": "Joshua Kimmich"
      },
      {
        "code": "GER 11",
        "name": "Florian Wirtz"
      },
      {
        "code": "GER 12",
        "name": "Felix Nmecha"
      },
      {
        "code": "GER 14",
        "name": "Leon Goretzka"
      },
      {
        "code": "GER 15",
        "name": "Jamal Musiala"
      },
      {
        "code": "GER 16",
        "name": "Serge Gnabry"
      },
      {
        "code": "GER 17",
        "name": "Kai Havertz"
      },
      {
        "code": "GER 18",
        "name": "Leroy Sane"
      },
      {
        "code": "GER 19",
        "name": "Karim Adeyemi"
      },
      {
        "code": "GER 20",
        "name": "Nick Woltemade"
      }
    ]
  },
  {
    "code": "GHA",
    "team": "Ghana",
    "sourceTeam": "Ghana",
    "players": [
      {
        "code": "GHA 2",
        "name": "Lawrence Ati Zigi"
      },
      {
        "code": "GHA 3",
        "name": "Tariq Lamptey"
      },
      {
        "code": "GHA 4",
        "name": "Mohammed Salisu"
      },
      {
        "code": "GHA 5",
        "name": "Alidu Seidu"
      },
      {
        "code": "GHA 6",
        "name": "Alexander Djiku"
      },
      {
        "code": "GHA 7",
        "name": "Gideon Mensah"
      },
      {
        "code": "GHA 8",
        "name": "Caleb Yirenkyi"
      },
      {
        "code": "GHA 9",
        "name": "Abdul Issahaku Fatawu"
      },
      {
        "code": "GHA 10",
        "name": "Thomas Partey"
      },
      {
        "code": "GHA 11",
        "name": "Salis Abdul Samed"
      },
      {
        "code": "GHA 12",
        "name": "Kamaldeen Sulemana"
      },
      {
        "code": "GHA 14",
        "name": "Mohammed Kudus"
      },
      {
        "code": "GHA 15",
        "name": "Inaki Williams"
      },
      {
        "code": "GHA 16",
        "name": "Jordan Ayew"
      },
      {
        "code": "GHA 17",
        "name": "Andrew Ayew"
      },
      {
        "code": "GHA 18",
        "name": "Joseph Paintsil"
      },
      {
        "code": "GHA 19",
        "name": "Osman Bukari"
      },
      {
        "code": "GHA 20",
        "name": "Antoine Semenyo"
      }
    ]
  },
  {
    "code": "HAI",
    "team": "Haiti",
    "sourceTeam": "Haiti",
    "players": [
      {
        "code": "HAI 2",
        "name": "Johny Placide"
      },
      {
        "code": "HAI 3",
        "name": "Carlens Arcus"
      },
      {
        "code": "HAI 4",
        "name": "Martin Expérience"
      },
      {
        "code": "HAI 5",
        "name": "Jean-Kevin Duverne"
      },
      {
        "code": "HAI 6",
        "name": "Ricardo Adé"
      },
      {
        "code": "HAI 7",
        "name": "Duke Lacroix"
      },
      {
        "code": "HAI 8",
        "name": "Garven Metusala"
      },
      {
        "code": "HAI 9",
        "name": "Hannes Delcroix"
      },
      {
        "code": "HAI 10",
        "name": "Leverton Pierre"
      },
      {
        "code": "HAI 11",
        "name": "Danley Jean Jacques"
      },
      {
        "code": "HAI 12",
        "name": "Jean-Ricner Bellegarde"
      },
      {
        "code": "HAI 14",
        "name": "Christopher Attys"
      },
      {
        "code": "HAI 15",
        "name": "Derrick Etienne Jr"
      },
      {
        "code": "HAI 16",
        "name": "Josue Casimir"
      },
      {
        "code": "HAI 17",
        "name": "Ruben Providence"
      },
      {
        "code": "HAI 18",
        "name": "Duckens Nazon"
      },
      {
        "code": "HAI 19",
        "name": "Louicius Deedson"
      },
      {
        "code": "HAI 20",
        "name": "Frantzdy Pierrot"
      }
    ]
  },
  {
    "code": "IRN",
    "team": "Iran",
    "sourceTeam": "Iran",
    "players": [
      {
        "code": "IRN 2",
        "name": "Alireza Beiranvand"
      },
      {
        "code": "IRN 3",
        "name": "Morteza Pouraliganji"
      },
      {
        "code": "IRN 4",
        "name": "Ehsan Hajsafi"
      },
      {
        "code": "IRN 5",
        "name": "Milad Mohammadi"
      },
      {
        "code": "IRN 6",
        "name": "Shojae Khalilzadeh"
      },
      {
        "code": "IRN 7",
        "name": "Ramin Rezaeian"
      },
      {
        "code": "IRN 8",
        "name": "Hossein Kanaani"
      },
      {
        "code": "IRN 9",
        "name": "Sadegh Moharrami"
      },
      {
        "code": "IRN 10",
        "name": "Saleh Hardani"
      },
      {
        "code": "IRN 11",
        "name": "Saeed Ezatolahi"
      },
      {
        "code": "IRN 12",
        "name": "Saman Ghoddos"
      },
      {
        "code": "IRN 14",
        "name": "Omid Noorafkan"
      },
      {
        "code": "IRN 15",
        "name": "Roozbeh Cheshmi"
      },
      {
        "code": "IRN 16",
        "name": "Mohammad Mohebi"
      },
      {
        "code": "IRN 17",
        "name": "Sardar Azmoun"
      },
      {
        "code": "IRN 18",
        "name": "Mehdi Taremi"
      },
      {
        "code": "IRN 19",
        "name": "Alireza Jahanbakhsh"
      },
      {
        "code": "IRN 20",
        "name": "Ali Gholizadeh"
      }
    ]
  },
  {
    "code": "IRQ",
    "team": "Irak",
    "sourceTeam": "Iraq",
    "players": [
      {
        "code": "IRQ 2",
        "name": "Jalal Hassan"
      },
      {
        "code": "IRQ 3",
        "name": "Rebin Sulaka"
      },
      {
        "code": "IRQ 4",
        "name": "Hussein Ali"
      },
      {
        "code": "IRQ 5",
        "name": "Akam Hashem"
      },
      {
        "code": "IRQ 6",
        "name": "Merchas Doski"
      },
      {
        "code": "IRQ 7",
        "name": "Zaid Tahseen"
      },
      {
        "code": "IRQ 8",
        "name": "Manaf Younis"
      },
      {
        "code": "IRQ 9",
        "name": "Zidane Iqbal"
      },
      {
        "code": "IRQ 10",
        "name": "Amir Al-Ammari"
      },
      {
        "code": "IRQ 11",
        "name": "Ibrahim Bavesh"
      },
      {
        "code": "IRQ 12",
        "name": "Ali Jasim"
      },
      {
        "code": "IRQ 14",
        "name": "Youssef Amyn"
      },
      {
        "code": "IRQ 15",
        "name": "Aimar Sher"
      },
      {
        "code": "IRQ 16",
        "name": "Marko Farji"
      },
      {
        "code": "IRQ 17",
        "name": "Osama Rashid"
      },
      {
        "code": "IRQ 18",
        "name": "Ali Al-Hamadi"
      },
      {
        "code": "IRQ 19",
        "name": "Aymen Hussein"
      },
      {
        "code": "IRQ 20",
        "name": "Mohanad Ali"
      }
    ]
  },
  {
    "code": "JOR",
    "team": "Jordania",
    "sourceTeam": "Jordan",
    "players": [
      {
        "code": "JOR 2",
        "name": "Yazeed Abulaila"
      },
      {
        "code": "JOR 3",
        "name": "Ihsan Haddad"
      },
      {
        "code": "JOR 4",
        "name": "Mohammad Abu Hashish"
      },
      {
        "code": "JOR 5",
        "name": "Yazan Al-Arab"
      },
      {
        "code": "JOR 6",
        "name": "Abdallah Nasib"
      },
      {
        "code": "JOR 7",
        "name": "Saleem Obaid"
      },
      {
        "code": "JOR 8",
        "name": "Mohammad Abualnadi"
      },
      {
        "code": "JOR 9",
        "name": "Ibrahim Saadeh"
      },
      {
        "code": "JOR 10",
        "name": "Nizar Al-Rashdan"
      },
      {
        "code": "JOR 11",
        "name": "Noor Al-Rawabdeh"
      },
      {
        "code": "JOR 12",
        "name": "Mohannad Abu Taha"
      },
      {
        "code": "JOR 14",
        "name": "Amer Jamous"
      },
      {
        "code": "JOR 15",
        "name": "Musa Al-Taamari"
      },
      {
        "code": "JOR 16",
        "name": "Yazan Al-Naimat"
      },
      {
        "code": "JOR 17",
        "name": "Mahmoud Al-Mardi"
      },
      {
        "code": "JOR 18",
        "name": "Ali Olwan"
      },
      {
        "code": "JOR 19",
        "name": "Mohammad Abu Zrayq"
      },
      {
        "code": "JOR 20",
        "name": "Ibrahim Sabra"
      }
    ]
  },
  {
    "code": "JPN",
    "team": "Japon",
    "sourceTeam": "Japan",
    "players": [
      {
        "code": "JPN 2",
        "name": "Zion Suzuki"
      },
      {
        "code": "JPN 3",
        "name": "Henry Heroki Mochizuki"
      },
      {
        "code": "JPN 4",
        "name": "Ayumu Seko"
      },
      {
        "code": "JPN 5",
        "name": "Junnosuke Suzuki"
      },
      {
        "code": "JPN 6",
        "name": "Shogo Taniguchi"
      },
      {
        "code": "JPN 7",
        "name": "Tsuyoshi Watanabe"
      },
      {
        "code": "JPN 8",
        "name": "Kaishu Sano"
      },
      {
        "code": "JPN 9",
        "name": "Yuki Soma"
      },
      {
        "code": "JPN 10",
        "name": "Ao Tanaka"
      },
      {
        "code": "JPN 11",
        "name": "Daichi Kamada"
      },
      {
        "code": "JPN 12",
        "name": "Takefusa Kubo"
      },
      {
        "code": "JPN 14",
        "name": "Ritsu Doan"
      },
      {
        "code": "JPN 15",
        "name": "Keito Nakamura"
      },
      {
        "code": "JPN 16",
        "name": "Takumi Minamino"
      },
      {
        "code": "JPN 17",
        "name": "Shuto Machino"
      },
      {
        "code": "JPN 18",
        "name": "Junya Ito"
      },
      {
        "code": "JPN 19",
        "name": "Koki Ogawa"
      },
      {
        "code": "JPN 20",
        "name": "Ayase Ueda"
      }
    ]
  },
  {
    "code": "KOR",
    "team": "Corea del Sur",
    "sourceTeam": "South Korea",
    "players": [
      {
        "code": "KOR 2",
        "name": "Hyeon-woo Jo"
      },
      {
        "code": "KOR 3",
        "name": "Seung-Gyu Kim"
      },
      {
        "code": "KOR 4",
        "name": "Min-jae Kim"
      },
      {
        "code": "KOR 5",
        "name": "Yu-min Cho"
      },
      {
        "code": "KOR 6",
        "name": "Young-woo Seol"
      },
      {
        "code": "KOR 7",
        "name": "Han-beom Lee"
      },
      {
        "code": "KOR 8",
        "name": "Tae-seok Lee"
      },
      {
        "code": "KOR 9",
        "name": "Myung-jae Lee"
      },
      {
        "code": "KOR 10",
        "name": "Jae-sung Lee"
      },
      {
        "code": "KOR 11",
        "name": "In-beom Hwang"
      },
      {
        "code": "KOR 12",
        "name": "Kang-in Lee"
      },
      {
        "code": "KOR 14",
        "name": "Seung-ho Paik"
      },
      {
        "code": "KOR 15",
        "name": "Jens Castrop"
      },
      {
        "code": "KOR 16",
        "name": "Dongg-yeong Lee"
      },
      {
        "code": "KOR 17",
        "name": "Gue-sung Cho"
      },
      {
        "code": "KOR 18",
        "name": "Heung-min Son"
      },
      {
        "code": "KOR 19",
        "name": "Hee-chan Hwang"
      },
      {
        "code": "KOR 20",
        "name": "Hyeon-Gyu Oh"
      }
    ]
  },
  {
    "code": "KSA",
    "team": "Arabia Saudita",
    "sourceTeam": "Saudi Arabia",
    "players": [
      {
        "code": "KSA 2",
        "name": "Nawaf Alaqidi"
      },
      {
        "code": "KSA 3",
        "name": "Abdulrahman Al-Sanbi"
      },
      {
        "code": "KSA 4",
        "name": "Saud Abdulhamid"
      },
      {
        "code": "KSA 5",
        "name": "Nawaf Bouwashl"
      },
      {
        "code": "KSA 6",
        "name": "Jihad Thakri"
      },
      {
        "code": "KSA 7",
        "name": "Moteb Al-Harbi"
      },
      {
        "code": "KSA 8",
        "name": "Hassan Altambakti"
      },
      {
        "code": "KSA 9",
        "name": "Musab Aljuwayr"
      },
      {
        "code": "KSA 10",
        "name": "Ziyad Aljohani"
      },
      {
        "code": "KSA 11",
        "name": "Abdullah Alkhaibari"
      },
      {
        "code": "KSA 12",
        "name": "Nasser Aldawsari"
      },
      {
        "code": "KSA 14",
        "name": "Saleh Abu Alshamat"
      },
      {
        "code": "KSA 15",
        "name": "Marwan Alsahafi"
      },
      {
        "code": "KSA 16",
        "name": "Salem Aldawsari"
      },
      {
        "code": "KSA 17",
        "name": "Abdulrahman Al-Aboud"
      },
      {
        "code": "KSA 18",
        "name": "Feras Akbrikan"
      },
      {
        "code": "KSA 19",
        "name": "Saleh Alshehri"
      },
      {
        "code": "KSA 20",
        "name": "Abdullah Al-Hamdan"
      }
    ]
  },
  {
    "code": "MAR",
    "team": "Marruecos",
    "sourceTeam": "Morocco",
    "players": [
      {
        "code": "MAR 2",
        "name": "Yassine Bounou"
      },
      {
        "code": "MAR 3",
        "name": "Munir El Kajoui"
      },
      {
        "code": "MAR 4",
        "name": "Achraf Hakimi"
      },
      {
        "code": "MAR 5",
        "name": "Noussair Mazraoui"
      },
      {
        "code": "MAR 6",
        "name": "Nayef Aguerd"
      },
      {
        "code": "MAR 7",
        "name": "Roman Saiss"
      },
      {
        "code": "MAR 8",
        "name": "Jawad El Yamio"
      },
      {
        "code": "MAR 9",
        "name": "Adam Masina"
      },
      {
        "code": "MAR 10",
        "name": "Sofyan Amrabat"
      },
      {
        "code": "MAR 11",
        "name": "Azzedine Ounahi"
      },
      {
        "code": "MAR 12",
        "name": "Eliesse Ben Seghir"
      },
      {
        "code": "MAR 14",
        "name": "Bilal El Khannouss"
      },
      {
        "code": "MAR 15",
        "name": "Ismael Saibari"
      },
      {
        "code": "MAR 16",
        "name": "Youssef En-Nesyri"
      },
      {
        "code": "MAR 17",
        "name": "Abde Ezzalzouli"
      },
      {
        "code": "MAR 18",
        "name": "Soufiane Rahimi"
      },
      {
        "code": "MAR 19",
        "name": "Brahim Diaz"
      },
      {
        "code": "MAR 20",
        "name": "Ayoub El Kaabi"
      }
    ]
  },
  {
    "code": "MEX",
    "team": "Mexico",
    "sourceTeam": "Mexico",
    "players": [
      {
        "code": "MEX 2",
        "name": "Luis Malagón"
      },
      {
        "code": "MEX 3",
        "name": "Johan Vasquez"
      },
      {
        "code": "MEX 4",
        "name": "Jorge Sánchez"
      },
      {
        "code": "MEX 5",
        "name": "Cesar Montes"
      },
      {
        "code": "MEX 6",
        "name": "Jesus Gallardo"
      },
      {
        "code": "MEX 7",
        "name": "Israel Reyes"
      },
      {
        "code": "MEX 8",
        "name": "Diego Lainez"
      },
      {
        "code": "MEX 9",
        "name": "Carlos Rodriguez"
      },
      {
        "code": "MEX 10",
        "name": "Edson Alvarez"
      },
      {
        "code": "MEX 11",
        "name": "Orbelin Pineda"
      },
      {
        "code": "MEX 12",
        "name": "Marcel Ruiz"
      },
      {
        "code": "MEX 14",
        "name": "Érick Sánchez"
      },
      {
        "code": "MEX 15",
        "name": "Hirving Lozano"
      },
      {
        "code": "MEX 16",
        "name": "Santiago Giménez"
      },
      {
        "code": "MEX 17",
        "name": "Raúl Jiménez"
      },
      {
        "code": "MEX 18",
        "name": "Alexis Vega"
      },
      {
        "code": "MEX 19",
        "name": "Roberto Alvarado"
      },
      {
        "code": "MEX 20",
        "name": "Cesar Huerta"
      }
    ]
  },
  {
    "code": "NED",
    "team": "Paises Bajos",
    "sourceTeam": "Netherlands",
    "players": [
      {
        "code": "NED 2",
        "name": "Bart Verbruggen"
      },
      {
        "code": "NED 3",
        "name": "Virgil van Dijk"
      },
      {
        "code": "NED 4",
        "name": "Micky van de Ven"
      },
      {
        "code": "NED 5",
        "name": "Jurrien Timber"
      },
      {
        "code": "NED 6",
        "name": "Denzel Dumfries"
      },
      {
        "code": "NED 7",
        "name": "Nathan Aké"
      },
      {
        "code": "NED 8",
        "name": "Jeremie Frimpong"
      },
      {
        "code": "NED 9",
        "name": "Jan Paul van Hecke"
      },
      {
        "code": "NED 10",
        "name": "Tijjani Reijnders"
      },
      {
        "code": "NED 11",
        "name": "Ryan Gravenberch"
      },
      {
        "code": "NED 12",
        "name": "Teun Koopmeiners"
      },
      {
        "code": "NED 14",
        "name": "Frenkie de Jong"
      },
      {
        "code": "NED 15",
        "name": "Xavi Simons"
      },
      {
        "code": "NED 16",
        "name": "Justin Kluivert"
      },
      {
        "code": "NED 17",
        "name": "Memphis Depay"
      },
      {
        "code": "NED 18",
        "name": "Donyell Malen"
      },
      {
        "code": "NED 19",
        "name": "Wout Weghorst"
      },
      {
        "code": "NED 20",
        "name": "Cody Gakpo"
      }
    ]
  },
  {
    "code": "NOR",
    "team": "Noruega",
    "sourceTeam": "Norway",
    "players": [
      {
        "code": "NOR 2",
        "name": "Orjan Nyland"
      },
      {
        "code": "NOR 3",
        "name": "Julian Ryerson"
      },
      {
        "code": "NOR 4",
        "name": "Leo Ostigård"
      },
      {
        "code": "NOR 5",
        "name": "Kristoffer Vassbakk Ajer"
      },
      {
        "code": "NOR 6",
        "name": "Marcus Holmgren Pedersen"
      },
      {
        "code": "NOR 7",
        "name": "David Møller Wolfe"
      },
      {
        "code": "NOR 8",
        "name": "Torbjørn Heggem"
      },
      {
        "code": "NOR 9",
        "name": "Morten Thorsby"
      },
      {
        "code": "NOR 10",
        "name": "Martin Ødegaard"
      },
      {
        "code": "NOR 11",
        "name": "Sander Berge"
      },
      {
        "code": "NOR 12",
        "name": "Andreas Schjelderup"
      },
      {
        "code": "NOR 14",
        "name": "Patrick Berg"
      },
      {
        "code": "NOR 15",
        "name": "Erling Haaland"
      },
      {
        "code": "NOR 16",
        "name": "Alexander Sørloth"
      },
      {
        "code": "NOR 17",
        "name": "Aron Dønnum"
      },
      {
        "code": "NOR 18",
        "name": "Jorgen Strand Larsen"
      },
      {
        "code": "NOR 19",
        "name": "Antonio Nusa"
      },
      {
        "code": "NOR 20",
        "name": "Oscar Bobb"
      }
    ]
  },
  {
    "code": "NZL",
    "team": "Nueva Zelanda",
    "sourceTeam": "New Zealand",
    "players": [
      {
        "code": "NZL 2",
        "name": "Max Crocombe Payne"
      },
      {
        "code": "NZL 3",
        "name": "Alex Paulsen"
      },
      {
        "code": "NZL 4",
        "name": "Michael Boxall"
      },
      {
        "code": "NZL 5",
        "name": "Liberato Cacace"
      },
      {
        "code": "NZL 6",
        "name": "Tim Payne"
      },
      {
        "code": "NZL 7",
        "name": "Tyler Bindon"
      },
      {
        "code": "NZL 8",
        "name": "Francis de Vries"
      },
      {
        "code": "NZL 9",
        "name": "Finn Surman"
      },
      {
        "code": "NZL 10",
        "name": "Joe Bell"
      },
      {
        "code": "NZL 11",
        "name": "Sarpreet Singh"
      },
      {
        "code": "NZL 12",
        "name": "Ryan Thomas"
      },
      {
        "code": "NZL 14",
        "name": "Matthew Garbett"
      },
      {
        "code": "NZL 15",
        "name": "Marko Stamenić"
      },
      {
        "code": "NZL 16",
        "name": "Ben Old"
      },
      {
        "code": "NZL 17",
        "name": "Chris Wood"
      },
      {
        "code": "NZL 18",
        "name": "Elijah Just"
      },
      {
        "code": "NZL 19",
        "name": "Callum McCowatt"
      },
      {
        "code": "NZL 20",
        "name": "Kosta Barbarouses"
      }
    ]
  },
  {
    "code": "PAN",
    "team": "Panama",
    "sourceTeam": "Panama",
    "players": [
      {
        "code": "PAN 2",
        "name": "Orlando Mosquera"
      },
      {
        "code": "PAN 3",
        "name": "Luis Mejia"
      },
      {
        "code": "PAN 4",
        "name": "Fidel Escobar"
      },
      {
        "code": "PAN 5",
        "name": "Andres Andrade"
      },
      {
        "code": "PAN 6",
        "name": "Michael Amir Murillo"
      },
      {
        "code": "PAN 7",
        "name": "Eric Davis"
      },
      {
        "code": "PAN 8",
        "name": "Jose Cordoba"
      },
      {
        "code": "PAN 9",
        "name": "Cesar Blackman"
      },
      {
        "code": "PAN 10",
        "name": "Cristian Martinez"
      },
      {
        "code": "PAN 11",
        "name": "Aníbal Godoy"
      },
      {
        "code": "PAN 12",
        "name": "Adalberto Carrasquilla"
      },
      {
        "code": "PAN 14",
        "name": "Édgar Bárcenas"
      },
      {
        "code": "PAN 15",
        "name": "Carlos Harvey"
      },
      {
        "code": "PAN 16",
        "name": "Ismael Díaz"
      },
      {
        "code": "PAN 17",
        "name": "Jose Fajardo"
      },
      {
        "code": "PAN 18",
        "name": "Cecilio Waterman"
      },
      {
        "code": "PAN 19",
        "name": "Jose Luiz Rodriguez"
      },
      {
        "code": "PAN 20",
        "name": "Alberto Quintero"
      }
    ]
  },
  {
    "code": "PAR",
    "team": "Paraguay",
    "sourceTeam": "Paraguay",
    "players": [
      {
        "code": "PAR 2",
        "name": "Roberto Fernandez"
      },
      {
        "code": "PAR 3",
        "name": "Orlando Gill"
      },
      {
        "code": "PAR 4",
        "name": "Gustavo Gomez"
      },
      {
        "code": "PAR 5",
        "name": "Fabián Balbuena"
      },
      {
        "code": "PAR 6",
        "name": "Juan José Cáceres"
      },
      {
        "code": "PAR 7",
        "name": "Omar Alderete"
      },
      {
        "code": "PAR 8",
        "name": "Junior Alonso"
      },
      {
        "code": "PAR 9",
        "name": "Mathías Villasanti"
      },
      {
        "code": "PAR 10",
        "name": "Diego Gomez"
      },
      {
        "code": "PAR 11",
        "name": "Damián Bobadilla"
      },
      {
        "code": "PAR 12",
        "name": "Andres Cubas"
      },
      {
        "code": "PAR 14",
        "name": "Matias Galarza Fonda"
      },
      {
        "code": "PAR 15",
        "name": "Julio Enciso"
      },
      {
        "code": "PAR 16",
        "name": "Alejandro Romero Gamarra"
      },
      {
        "code": "PAR 17",
        "name": "Miguel Almirón"
      },
      {
        "code": "PAR 18",
        "name": "Ramon Sosa"
      },
      {
        "code": "PAR 19",
        "name": "Angel Romero"
      },
      {
        "code": "PAR 20",
        "name": "Antonio Sanabria"
      }
    ]
  },
  {
    "code": "POR",
    "team": "Portugal",
    "sourceTeam": "Portugal",
    "players": [
      {
        "code": "POR 2",
        "name": "Diogo Costa"
      },
      {
        "code": "POR 3",
        "name": "Jose Sa"
      },
      {
        "code": "POR 4",
        "name": "Ruben Dias"
      },
      {
        "code": "POR 5",
        "name": "João Cancelo"
      },
      {
        "code": "POR 6",
        "name": "Diogo Dalot"
      },
      {
        "code": "POR 7",
        "name": "Nuno Mendes"
      },
      {
        "code": "POR 8",
        "name": "Gonçalo Inácio"
      },
      {
        "code": "POR 9",
        "name": "Bernardo Silva"
      },
      {
        "code": "POR 10",
        "name": "Bruno Fernandes"
      },
      {
        "code": "POR 11",
        "name": "Ruben Neves"
      },
      {
        "code": "POR 12",
        "name": "Vitinha"
      },
      {
        "code": "POR 14",
        "name": "João Neves"
      },
      {
        "code": "POR 15",
        "name": "Cristiano Ronaldo"
      },
      {
        "code": "POR 16",
        "name": "Francisco Trincao"
      },
      {
        "code": "POR 17",
        "name": "João Felix"
      },
      {
        "code": "POR 18",
        "name": "Gonçalo Ramos"
      },
      {
        "code": "POR 19",
        "name": "Pedro Neto"
      },
      {
        "code": "POR 20",
        "name": "Rafael Leão"
      }
    ]
  },
  {
    "code": "QAT",
    "team": "Catar",
    "sourceTeam": "Qatar",
    "players": [
      {
        "code": "QAT 2",
        "name": "Meshaal Barsham"
      },
      {
        "code": "QAT 3",
        "name": "Sultan Albrake"
      },
      {
        "code": "QAT 4",
        "name": "Lucas Mendes"
      },
      {
        "code": "QAT 5",
        "name": "Homam Ahmed"
      },
      {
        "code": "QAT 6",
        "name": "Boualem Khoukhi"
      },
      {
        "code": "QAT 7",
        "name": "Pedro Miguel"
      },
      {
        "code": "QAT 8",
        "name": "Tarek Salman"
      },
      {
        "code": "QAT 9",
        "name": "Mohamed Al-Mannai"
      },
      {
        "code": "QAT 10",
        "name": "Karim Boudiaf"
      },
      {
        "code": "QAT 11",
        "name": "Assim Madibo"
      },
      {
        "code": "QAT 12",
        "name": "Ahmed Fatehi"
      },
      {
        "code": "QAT 14",
        "name": "Mohammed Waad"
      },
      {
        "code": "QAT 15",
        "name": "Abdulaziz Hatem"
      },
      {
        "code": "QAT 16",
        "name": "Hassan Al-Haydos"
      },
      {
        "code": "QAT 17",
        "name": "Edmilson Junior"
      },
      {
        "code": "QAT 18",
        "name": "Akram Hassan Afif"
      },
      {
        "code": "QAT 19",
        "name": "Ahmed Al Ganehi"
      },
      {
        "code": "QAT 20",
        "name": "Almoez Ali"
      }
    ]
  },
  {
    "code": "RSA",
    "team": "Sudafrica",
    "sourceTeam": "South Africa",
    "players": [
      {
        "code": "RSA 2",
        "name": "Ronwen Williams"
      },
      {
        "code": "RSA 3",
        "name": "Sipho Chaine"
      },
      {
        "code": "RSA 4",
        "name": "Aubrey Modiba"
      },
      {
        "code": "RSA 5",
        "name": "Samukele Kabini"
      },
      {
        "code": "RSA 6",
        "name": "Mbekezeli Mbokazi"
      },
      {
        "code": "RSA 7",
        "name": "Khulumani Ndamane"
      },
      {
        "code": "RSA 8",
        "name": "Siyabonga Ngezana"
      },
      {
        "code": "RSA 9",
        "name": "Khuliso Mudau"
      },
      {
        "code": "RSA 10",
        "name": "Nkosinathi Sibisi"
      },
      {
        "code": "RSA 11",
        "name": "Teboho Mokoena"
      },
      {
        "code": "RSA 12",
        "name": "Thalente Mbatha"
      },
      {
        "code": "RSA 14",
        "name": "Bathasi Aubaas"
      },
      {
        "code": "RSA 15",
        "name": "Yaya Sithole"
      },
      {
        "code": "RSA 16",
        "name": "Sipho Mbule"
      },
      {
        "code": "RSA 17",
        "name": "Lyle Foster"
      },
      {
        "code": "RSA 18",
        "name": "Iqraam Rayners"
      },
      {
        "code": "RSA 19",
        "name": "Mohau Nkota"
      },
      {
        "code": "RSA 20",
        "name": "Oswin Appollis"
      }
    ]
  },
  {
    "code": "SCO",
    "team": "Escocia",
    "sourceTeam": "Scotland",
    "players": [
      {
        "code": "SCO 2",
        "name": "Angus Gunn"
      },
      {
        "code": "SCO 3",
        "name": "Jack Hendry"
      },
      {
        "code": "SCO 4",
        "name": "Kieran Tierney"
      },
      {
        "code": "SCO 5",
        "name": "Aaron Hickey"
      },
      {
        "code": "SCO 6",
        "name": "Andrew Robertson"
      },
      {
        "code": "SCO 7",
        "name": "Scott McKenna"
      },
      {
        "code": "SCO 8",
        "name": "John Souttar"
      },
      {
        "code": "SCO 9",
        "name": "Anthony Ralston"
      },
      {
        "code": "SCO 10",
        "name": "Grant Hanley"
      },
      {
        "code": "SCO 11",
        "name": "Scott McTominay"
      },
      {
        "code": "SCO 12",
        "name": "Billy Gilmour"
      },
      {
        "code": "SCO 14",
        "name": "Lewis Ferguson"
      },
      {
        "code": "SCO 15",
        "name": "Ryan Christie"
      },
      {
        "code": "SCO 16",
        "name": "Kenny McLean"
      },
      {
        "code": "SCO 17",
        "name": "John McGinn"
      },
      {
        "code": "SCO 18",
        "name": "Lyndon Dykes"
      },
      {
        "code": "SCO 19",
        "name": "Che Adams"
      },
      {
        "code": "SCO 20",
        "name": "Ben Gannon-Doak"
      }
    ]
  },
  {
    "code": "SEN",
    "team": "Senegal",
    "sourceTeam": "Senegal",
    "players": [
      {
        "code": "SEN 2",
        "name": "Edouard Mendy"
      },
      {
        "code": "SEN 3",
        "name": "Yehvann Diouf"
      },
      {
        "code": "SEN 4",
        "name": "Moussa Niakhaté"
      },
      {
        "code": "SEN 5",
        "name": "Abdoulaye Seck"
      },
      {
        "code": "SEN 6",
        "name": "Ismail Jakobs"
      },
      {
        "code": "SEN 7",
        "name": "El Hadji Malick Diouf"
      },
      {
        "code": "SEN 8",
        "name": "Kalidou Koulibaly"
      },
      {
        "code": "SEN 9",
        "name": "Idrissa Gana Gueye"
      },
      {
        "code": "SEN 10",
        "name": "Pape Matar Sarr"
      },
      {
        "code": "SEN 11",
        "name": "Pape Gueye"
      },
      {
        "code": "SEN 12",
        "name": "Habib Diarra"
      },
      {
        "code": "SEN 14",
        "name": "Lamine Camara"
      },
      {
        "code": "SEN 15",
        "name": "Sadio Mane"
      },
      {
        "code": "SEN 16",
        "name": "Ismaïla Sarr"
      },
      {
        "code": "SEN 17",
        "name": "Boulaye Dia"
      },
      {
        "code": "SEN 18",
        "name": "Iliman Ndiaye"
      },
      {
        "code": "SEN 19",
        "name": "Nicolas Jackson"
      },
      {
        "code": "SEN 20",
        "name": "Krepin Diatta"
      }
    ]
  },
  {
    "code": "SUI",
    "team": "Suiza",
    "sourceTeam": "Switzerland",
    "players": [
      {
        "code": "SUI 2",
        "name": "Gregor Kobel"
      },
      {
        "code": "SUI 3",
        "name": "Yvon Mvogo"
      },
      {
        "code": "SUI 4",
        "name": "Manuel Akanji"
      },
      {
        "code": "SUI 5",
        "name": "Ricardo Rodriguez"
      },
      {
        "code": "SUI 6",
        "name": "Nico Elvedi"
      },
      {
        "code": "SUI 7",
        "name": "Aurèle Amenda"
      },
      {
        "code": "SUI 8",
        "name": "Silvan Widmer"
      },
      {
        "code": "SUI 9",
        "name": "Granit Xhaka"
      },
      {
        "code": "SUI 10",
        "name": "Denis Zakaria"
      },
      {
        "code": "SUI 11",
        "name": "Remo Freuler"
      },
      {
        "code": "SUI 12",
        "name": "Fabian Rieder"
      },
      {
        "code": "SUI 14",
        "name": "Ardon Jashari"
      },
      {
        "code": "SUI 15",
        "name": "Johan Manzambi"
      },
      {
        "code": "SUI 16",
        "name": "Michel Aebischer"
      },
      {
        "code": "SUI 17",
        "name": "Breel Embolo"
      },
      {
        "code": "SUI 18",
        "name": "Ruben Vargas"
      },
      {
        "code": "SUI 19",
        "name": "Dan Ndoye"
      },
      {
        "code": "SUI 20",
        "name": "Zeki Amdouni"
      }
    ]
  },
  {
    "code": "SWE",
    "team": "Suecia",
    "sourceTeam": "Sweden",
    "players": [
      {
        "code": "SWE 2",
        "name": "Victor Johansson"
      },
      {
        "code": "SWE 3",
        "name": "Isak Hien"
      },
      {
        "code": "SWE 4",
        "name": "Gabriel Gudmundsson"
      },
      {
        "code": "SWE 5",
        "name": "Emil Holm"
      },
      {
        "code": "SWE 6",
        "name": "Victor Nilsson Lindelöf"
      },
      {
        "code": "SWE 7",
        "name": "Gustaf Lagerbielke"
      },
      {
        "code": "SWE 8",
        "name": "Lucas Bergvall"
      },
      {
        "code": "SWE 9",
        "name": "Hugo Larsson"
      },
      {
        "code": "SWE 10",
        "name": "Jesper Karlström"
      },
      {
        "code": "SWE 11",
        "name": "Yasin Ayari"
      },
      {
        "code": "SWE 12",
        "name": "Mattias Svanberg"
      },
      {
        "code": "SWE 14",
        "name": "Daniel Svensson"
      },
      {
        "code": "SWE 15",
        "name": "Ken Sema"
      },
      {
        "code": "SWE 16",
        "name": "Roony Bardghji"
      },
      {
        "code": "SWE 17",
        "name": "Dejan Kulusevski"
      },
      {
        "code": "SWE 18",
        "name": "Anthony Elanga"
      },
      {
        "code": "SWE 19",
        "name": "Alexander Isak"
      },
      {
        "code": "SWE 20",
        "name": "Viktor Gyökeres"
      }
    ]
  },
  {
    "code": "TUN",
    "team": "Tunez",
    "sourceTeam": "Tunisia",
    "players": [
      {
        "code": "TUN 2",
        "name": "Bechir Ben Said"
      },
      {
        "code": "TUN 3",
        "name": "Aymen Dahmen"
      },
      {
        "code": "TUN 4",
        "name": "Yan Valery"
      },
      {
        "code": "TUN 5",
        "name": "Montassar Talbi"
      },
      {
        "code": "TUN 6",
        "name": "Yassine Meriah"
      },
      {
        "code": "TUN 7",
        "name": "Ali Abdi"
      },
      {
        "code": "TUN 8",
        "name": "Dylan Bronn"
      },
      {
        "code": "TUN 9",
        "name": "Ellyes Skhiri"
      },
      {
        "code": "TUN 10",
        "name": "Aissa Laidouni"
      },
      {
        "code": "TUN 11",
        "name": "Ferjani Sassi"
      },
      {
        "code": "TUN 12",
        "name": "Mohamed Ali Ben Romdhane"
      },
      {
        "code": "TUN 14",
        "name": "Hannibal Mejbri"
      },
      {
        "code": "TUN 15",
        "name": "Elias Achouri"
      },
      {
        "code": "TUN 16",
        "name": "Elias Saad"
      },
      {
        "code": "TUN 17",
        "name": "Hazem Mastouri"
      },
      {
        "code": "TUN 18",
        "name": "Ismael Gharbi"
      },
      {
        "code": "TUN 19",
        "name": "Sayfallah Ltaief"
      },
      {
        "code": "TUN 20",
        "name": "Naim Sliti"
      }
    ]
  },
  {
    "code": "TUR",
    "team": "Turquia",
    "sourceTeam": "Turkey",
    "players": [
      {
        "code": "TUR 2",
        "name": "Ugurcan Cakir"
      },
      {
        "code": "TUR 3",
        "name": "Mert Muldur"
      },
      {
        "code": "TUR 4",
        "name": "Zeki Celik"
      },
      {
        "code": "TUR 5",
        "name": "Abdulkerim Bardakci"
      },
      {
        "code": "TUR 6",
        "name": "Caglar Soyuncu"
      },
      {
        "code": "TUR 7",
        "name": "Merih Demiral"
      },
      {
        "code": "TUR 8",
        "name": "Ferdi Kadioglu"
      },
      {
        "code": "TUR 9",
        "name": "Kaan Ayhan"
      },
      {
        "code": "TUR 10",
        "name": "Ismail Yuksek"
      },
      {
        "code": "TUR 11",
        "name": "Hakan Calhanoglu"
      },
      {
        "code": "TUR 12",
        "name": "Orkun Kokcu"
      },
      {
        "code": "TUR 14",
        "name": "Arda Guler"
      },
      {
        "code": "TUR 15",
        "name": "Irfan Can Kahveci"
      },
      {
        "code": "TUR 16",
        "name": "Yunus Akgun"
      },
      {
        "code": "TUR 17",
        "name": "Can Uzun"
      },
      {
        "code": "TUR 18",
        "name": "Baris Alper Yilmaz"
      },
      {
        "code": "TUR 19",
        "name": "Kerem Akturkoglu"
      },
      {
        "code": "TUR 20",
        "name": "Kenan Yildiz"
      }
    ]
  },
  {
    "code": "URU",
    "team": "Uruguay",
    "sourceTeam": "Uruguay",
    "players": [
      {
        "code": "URU 2",
        "name": "Sergio Rochet"
      },
      {
        "code": "URU 3",
        "name": "Santiago Mele"
      },
      {
        "code": "URU 4",
        "name": "Ronald Araujo"
      },
      {
        "code": "URU 5",
        "name": "José María Giménez"
      },
      {
        "code": "URU 6",
        "name": "Sebastian Caceres"
      },
      {
        "code": "URU 7",
        "name": "Mathias Olivera"
      },
      {
        "code": "URU 8",
        "name": "Guillermo Varela"
      },
      {
        "code": "URU 9",
        "name": "Nahitan Nandez"
      },
      {
        "code": "URU 10",
        "name": "Federico Valverde"
      },
      {
        "code": "URU 11",
        "name": "Giorgian De Arrascaeta"
      },
      {
        "code": "URU 12",
        "name": "Rodrigo Bentancur"
      },
      {
        "code": "URU 14",
        "name": "Manuel Ugarte"
      },
      {
        "code": "URU 15",
        "name": "Nicolás de la Cruz"
      },
      {
        "code": "URU 16",
        "name": "Maxi Araujo"
      },
      {
        "code": "URU 17",
        "name": "Darwin Núñez"
      },
      {
        "code": "URU 18",
        "name": "Federico Viñas"
      },
      {
        "code": "URU 19",
        "name": "Rodrigo Aguirre"
      },
      {
        "code": "URU 20",
        "name": "Facundo Pellistri"
      }
    ]
  },
  {
    "code": "USA",
    "team": "Estados Unidos",
    "sourceTeam": "United States",
    "players": [
      {
        "code": "USA 2",
        "name": "Math Freese"
      },
      {
        "code": "USA 3",
        "name": "Chris Richards"
      },
      {
        "code": "USA 4",
        "name": "Tim Ream"
      },
      {
        "code": "USA 5",
        "name": "Mark McKenzie"
      },
      {
        "code": "USA 6",
        "name": "Alex Freeman"
      },
      {
        "code": "USA 7",
        "name": "Antonee Robinson"
      },
      {
        "code": "USA 8",
        "name": "Tyler Adams"
      },
      {
        "code": "USA 9",
        "name": "Tanner Tessmann"
      },
      {
        "code": "USA 10",
        "name": "Weston McKenny"
      },
      {
        "code": "USA 11",
        "name": "Christian Roldan"
      },
      {
        "code": "USA 12",
        "name": "Timothy Weah"
      },
      {
        "code": "USA 14",
        "name": "Diego Luna"
      },
      {
        "code": "USA 15",
        "name": "Malik Tillman"
      },
      {
        "code": "USA 16",
        "name": "Christian Pulisic"
      },
      {
        "code": "USA 17",
        "name": "Brenden Aaronson"
      },
      {
        "code": "USA 18",
        "name": "Ricardo Pepi"
      },
      {
        "code": "USA 19",
        "name": "Haji Wright"
      },
      {
        "code": "USA 20",
        "name": "Folarin Balogun"
      }
    ]
  },
  {
    "code": "UZB",
    "team": "Uzbekistan",
    "sourceTeam": "Uzbekistan",
    "players": [
      {
        "code": "UZB 2",
        "name": "Utkir Yusupov"
      },
      {
        "code": "UZB 3",
        "name": "Farrukh Savfiev"
      },
      {
        "code": "UZB 4",
        "name": "Sherzod Nasrullaev"
      },
      {
        "code": "UZB 5",
        "name": "Umar Eshmurodov"
      },
      {
        "code": "UZB 6",
        "name": "Husniddin Aliqulov"
      },
      {
        "code": "UZB 7",
        "name": "Rustamjon Ashurmatov"
      },
      {
        "code": "UZB 8",
        "name": "Khojiakbar Alijonov"
      },
      {
        "code": "UZB 9",
        "name": "Abdukodir Khusanov"
      },
      {
        "code": "UZB 10",
        "name": "Odiljon Hamrobekov"
      },
      {
        "code": "UZB 11",
        "name": "Otabek Shukurov"
      },
      {
        "code": "UZB 12",
        "name": "Jamshid Iskanderov"
      },
      {
        "code": "UZB 14",
        "name": "Azizbek Turgunboev"
      },
      {
        "code": "UZB 15",
        "name": "Khojimat Erkinov"
      },
      {
        "code": "UZB 16",
        "name": "Eldor Shomurodov"
      },
      {
        "code": "UZB 17",
        "name": "Oston Urunov"
      },
      {
        "code": "UZB 18",
        "name": "Jaloliddin Masharipov"
      },
      {
        "code": "UZB 19",
        "name": "Igor Sergeev"
      },
      {
        "code": "UZB 20",
        "name": "Abbosbek Fayzullaev"
      }
    ]
  }
];

const paniniPlayerDetails = {
  "alexis guendouz": {
    "qid": "Q97349137",
    "name": "Alexis Guendouz",
    "birthDate": "1996-01-26",
    "height": "1.89 m",
    "club": "",
    "position": "guardameta",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Alexis%20Guendouz.png"
  },
  "ramy bensebaini": {
    "qid": "Q17484446",
    "name": "Ramy Bensebaïni",
    "birthDate": "1995-04-16",
    "height": "1.88 m",
    "club": "Borussia Mönchengladbach",
    "position": "defensor central",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Stade%20rennais%20vs%20USM%20Alger%2C%20July%2016th%202016%20-%2025.jpg"
  },
  "youcef atal": {
    "qid": "Q30349597",
    "name": "Youcef Attal",
    "birthDate": "1996-05-17",
    "height": "1.76 m",
    "club": "Adana Demirspor Kulübü",
    "position": "lateral",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Youcef%20Atal.jpg"
  },
  "rayan ait-nouri": {
    "qid": "Q50825738",
    "name": "Rayan Aït-Nouri",
    "birthDate": "2001-06-06",
    "height": "1.80 m",
    "club": "",
    "position": "lateral",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Rayan%20A%C3%AFt-Nouri%20playing%20for%20Algeria%20in%202024%20%28cropped%29.jpg"
  },
  "mohamed amine tougai": {
    "qid": "Q81659662",
    "name": "Mohamed Amine Tougai",
    "birthDate": "2000-01-22",
    "height": "",
    "club": "Espérance Sportive de Tunis",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Mohamed%20Amine%20Tougai.jpg"
  },
  "aissa mandi": {
    "qid": "Q2876432",
    "name": "Aïssa Mandi",
    "birthDate": "1991-10-22",
    "height": "1.86 m",
    "club": "Villarreal Club de Fútbol",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Alg%C3%A9rie%20-%20Arm%C3%A9nie%20-%2020140531%20-%20Aissa%20Mandi.jpg"
  },
  "ismael bennacer": {
    "qid": "",
    "name": "Ismael Bennacer",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "houssem aquar": {
    "qid": "",
    "name": "Houssem Aquar",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "hicham boudaoui": {
    "qid": "Q59306433",
    "name": "Hicham Boudaoui",
    "birthDate": "1999-09-23",
    "height": "1.75 m",
    "club": "Paradou AC",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Boudaoui%20asse%20ogcn%202425.png"
  },
  "ramiz zerrouki": {
    "qid": "Q73149048",
    "name": "Ramiz Zerrouki",
    "birthDate": "1998-05-26",
    "height": "1.83 m",
    "club": "",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Ramiz%20zerrouki-1672746224.jpg"
  },
  "nabil bentalab": {
    "qid": "",
    "name": "Nabil Bentalab",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "fares chaibi": {
    "qid": "",
    "name": "Farés Chaibi",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "riyad mahrez": {
    "qid": "Q8338725",
    "name": "Riyad Mahrez",
    "birthDate": "1991-02-21",
    "height": "1.81 m",
    "club": "Al-Ahli",
    "position": "extremo izquierdo",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Mahrez%202021.jpg"
  },
  "said benrahma": {
    "qid": "",
    "name": "Said Benrahma",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "anis hadj moussa": {
    "qid": "Q121946144",
    "name": "Anis Hadj Moussa",
    "birthDate": "2002-02-11",
    "height": "1.76 m",
    "club": "",
    "position": "",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/MCI%20VS%20FER%202024%20%28Anis%20Hadj%20Moussa%29.jpg"
  },
  "amine gouiri": {
    "qid": "Q30045780",
    "name": "Amine Gouiri",
    "birthDate": "2000-02-16",
    "height": "1.80 m",
    "club": "OGC Niza",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/RC%20Lens%20-%20OGC%20Nice%20%2810-04-2022%29%2025%20Amine%20Gouiri.jpg"
  },
  "baghdad bounedjah": {
    "qid": "Q4841803",
    "name": "Baghdad Bounedjah",
    "birthDate": "1991-11-30",
    "height": "1.83 m",
    "club": "Al-Sadd Sports Club",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/BaghdadBounedjah2018.jpg"
  },
  "mohammed amoura": {
    "qid": "",
    "name": "Mohammed Amoura",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "emiliano martinez": {
    "qid": "",
    "name": "Emiliano Martinez",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "nahuel molina": {
    "qid": "Q22082590",
    "name": "Nahuel Molina Lucero",
    "birthDate": "1998-04-06",
    "height": "1.75 m",
    "club": "Atlético de Madrid",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Nahuel%20Molina%20WC2022.jpg"
  },
  "cristian romero": {
    "qid": "Q107323612",
    "name": "Cristian Romero",
    "birthDate": "1998-04-27",
    "height": "1.88 m",
    "club": "Deportivo Mandiyú",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Cristian%20Romero%20WC2022.jpg"
  },
  "nicolas otamendi": {
    "qid": "",
    "name": "Nicolas Otamendi",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "nicolas tagliafico": {
    "qid": "",
    "name": "Nicolas Tagliafico",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "leonardo balerdi": {
    "qid": "Q50233588",
    "name": "Leonardo Balerdi",
    "birthDate": "1999-01-26",
    "height": "1.87 m",
    "club": "Olympique de Marsella",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Leonardo%20Balerdi%20OM%20%28cropped%29.jpg"
  },
  "enzo fernandez": {
    "qid": "",
    "name": "Enzo Fernandez",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "alexis mac allister": {
    "qid": "Q33297140",
    "name": "Alexis Mac Allister",
    "birthDate": "1998-12-24",
    "height": "1.76 m",
    "club": "",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Alexis%20Mac%20Allister%20WC%202022.jpg"
  },
  "rodrigo de paul": {
    "qid": "Q6110670",
    "name": "Rodrigo De Paul",
    "birthDate": "1994-05-24",
    "height": "1.80 m",
    "club": "Atlético de Madrid",
    "position": "extremo izquierdo",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Rodrigo%20De%20Paul%20NYCFC%20Miami%2024%20Sep%202025-018%20%28cropped%29.jpg"
  },
  "exequiel palacios": {
    "qid": "Q19345715",
    "name": "Exequiel Palacios",
    "birthDate": "1998-10-05",
    "height": "1.77 m",
    "club": "",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Exequiel%20Palacios%2C%202022-07-31%2C%20Saisoner%C3%B6ffnung%20Bayer%2004%2C%20Leverkusen%20%281%29.jpg"
  },
  "leandro paredes": {
    "qid": "Q630170",
    "name": "Leandro Paredes",
    "birthDate": "1994-06-29",
    "height": "1.84 m",
    "club": "Boca Juniors",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Leandro%20Paredes%202018%20%28cropped%29.jpg"
  },
  "nico paz": {
    "qid": "Q111336539",
    "name": "Nico Paz",
    "birthDate": "2004-09-08",
    "height": "1.85 m",
    "club": "Calcio Como 1907",
    "position": "attacking midfielder",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Nico%20Paz%20Como%202025.jpg"
  },
  "franco mastantuono": {
    "qid": "Q123289726",
    "name": "Franco Mastantuono",
    "birthDate": "2007-08-14",
    "height": "1.77 m",
    "club": "Real Madrid Club de Fútbol",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Franco%20Mastantuono%20in%202025%20%28cropped%29.jpg"
  },
  "nico gonzalez": {
    "qid": "",
    "name": "Nico Gonzalez",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "lionel messi": {
    "qid": "Q615",
    "name": "Lionel Messi",
    "birthDate": "1987-06-24",
    "height": "1.69 m",
    "club": "Inter de Miami",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Lionel%20Messi%20White%20House%202026%20%283x4%20cropped%29.jpg"
  },
  "lautaro martinez": {
    "qid": "",
    "name": "Lautaro Martinez",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "julian alvarez": {
    "qid": "Q48687889",
    "name": "Julián Álvarez Escudero",
    "birthDate": "2000-01-01",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "giuliano simeone": {
    "qid": "Q111672750",
    "name": "Giuliano Simeone",
    "birthDate": "2002-12-18",
    "height": "1.73 m",
    "club": "Atlético de Madrid",
    "position": "",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Giuliano%20Simeone%2C%20FC%20Salzburg%20vs.%20Atletico%20Madrid%20%282025-01-29%20UEFA%20Championsleague%29%2053%20%28cropped%29.jpg"
  },
  "mathew ryan": {
    "qid": "Q1587689",
    "name": "Mathew Ryan",
    "birthDate": "1992-04-08",
    "height": "1.84 m",
    "club": "Levante Unión Deportiva",
    "position": "guardameta",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/20180601%20FIFA%20Friendly%20Match%20Czech%20Republic%20vs.%20Australia%20Matthew%20Ryan%20850%200230.jpg"
  },
  "joe gauci": {
    "qid": "Q105944501",
    "name": "Joe Gauci",
    "birthDate": "2000-07-04",
    "height": "1.94 m",
    "club": "",
    "position": "",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Joe%20Gauci%20October%202025.jpg"
  },
  "harry souttar": {
    "qid": "Q24084205",
    "name": "Harry Souttar",
    "birthDate": "1998-10-22",
    "height": "1.98 m",
    "club": "Leicester City Football Club",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/4822293%20AE7I6590%20%28cropped%29.jpg"
  },
  "alessandro circati": {
    "qid": "Q111020508",
    "name": "Alessandro Circati",
    "birthDate": "2003-10-10",
    "height": "1.90 m",
    "club": "",
    "position": "",
    "photo": ""
  },
  "jordan bos": {
    "qid": "Q109768459",
    "name": "Jordan Bos",
    "birthDate": "2002-10-29",
    "height": "1.80 m",
    "club": "Feyenoord Rotterdam",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Jordan%20Bos.JPG"
  },
  "aziz behich": {
    "qid": "Q2947963",
    "name": "Aziz Behich",
    "birthDate": "1990-12-16",
    "height": "1.72 m",
    "club": "",
    "position": "lateral",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Aziz%20Behich.jpg"
  },
  "cameron burgess": {
    "qid": "Q17496350",
    "name": "Cameron Burgess",
    "birthDate": "1995-10-21",
    "height": "1.94 m",
    "club": "Cheltenham Town Football Club",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Cameron%20Burgess%20%28cropped%29.jpg"
  },
  "lewis miller": {
    "qid": "Q2520356",
    "name": "Lewis Miller",
    "birthDate": "1933-09-04",
    "height": "1.87 m",
    "club": "Central Coast Mariners Football Club",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Lewis%20Miller%20%281829-1899%29%2001.jpg"
  },
  "milos degenek": {
    "qid": "",
    "name": "Milos Degenek",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "jackson irvine": {
    "qid": "Q10544594",
    "name": "Jackson Irvine",
    "birthDate": "1993-03-07",
    "height": "1.79 m",
    "club": "FC San Pauli",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Chile%20VS.%20Australia%20%283%29%20%28cropped%29%202.jpg"
  },
  "riley mcgree": {
    "qid": "Q23771429",
    "name": "Riley McGree",
    "birthDate": "1998-11-02",
    "height": "",
    "club": "Adelaide United Football Club",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Riley%20McGree.jpg"
  },
  "aiden o'neill": {
    "qid": "Q26485052",
    "name": "Aiden O'Neill",
    "birthDate": "1998-07-04",
    "height": "1.78 m",
    "club": "Oldham Athletic Association Football Club",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Aiden%20O%27Neill%20CF%20Montreal%20NYCFC%206.28.25-034%20%28cropped%29.jpg"
  },
  "connor metcalfe": {
    "qid": "Q51213832",
    "name": "Connor Metcalfe",
    "birthDate": "1999-11-05",
    "height": "1.83 m",
    "club": "FC San Pauli",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/4822293%20AE7I6590%20-%20Connor%20Metcalfe.jpg"
  },
  "patrick yazbek": {
    "qid": "Q110068139",
    "name": "Patrick Yazbek",
    "birthDate": "2002-04-05",
    "height": "1.83 m",
    "club": "",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Patrick%20Yazbek%20Revolution%20Nashville%206.25.25-035%20%28cropped%29.jpg"
  },
  "craig goodwin": {
    "qid": "Q1138547",
    "name": "Craig Goodwin",
    "birthDate": "1991-12-16",
    "height": "1.80 m",
    "club": "Adelaide United Football Club",
    "position": "lateral",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Craig%20Goodwin.jpg"
  },
  "kusini vengi": {
    "qid": "",
    "name": "Kusini Vengi",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "nestory irankunda": {
    "qid": "",
    "name": "Nestory Irankunda",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "mohamed toure": {
    "qid": "Q95865505",
    "name": "Mohamed Touré",
    "birthDate": "1992-04-27",
    "height": "1.90 m",
    "club": "Cultural y Deportiva Leonesa",
    "position": "base",
    "photo": ""
  },
  "alexander schlager": {
    "qid": "Q20745286",
    "name": "Alexander Schlager",
    "birthDate": "1996-02-01",
    "height": "1.84 m",
    "club": "FC Liefering",
    "position": "guardameta",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Floridsdorfer%20AC%202016%E2%80%9317%20%E2%80%93%20Alexander%20Schlager%20%2801%29.jpg"
  },
  "patrick pentz": {
    "qid": "Q24068400",
    "name": "Patrick Pentz",
    "birthDate": "1997-01-02",
    "height": "1.86 m",
    "club": "FK Austria Viena",
    "position": "guardameta",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Pentz%20%282024%29.png"
  },
  "david alaba": {
    "qid": "Q31981",
    "name": "David Alaba",
    "birthDate": "1992-06-24",
    "height": "1.80 m",
    "club": "Real Madrid Club de Fútbol",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/20180610%20FIFA%20Friendly%20Match%20Austria%20vs.%20Brazil%20David%20Alaba%20850%201632.jpg"
  },
  "kevin danso": {
    "qid": "Q28868192",
    "name": "Kevin Danso",
    "birthDate": "1998-09-19",
    "height": "1.90 m",
    "club": "Reading Football Club",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/RC%20Lens%20-%20Lille%20OSC%20%2817-09-2021%29%2046.jpg"
  },
  "philipp lienhart": {
    "qid": "Q20078774",
    "name": "Philipp Lienhart",
    "birthDate": "1996-07-11",
    "height": "1.89 m",
    "club": "SC Friburgo",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Austria%20national%20under-21%20football%20team%20-%20Teamcamp%20June%202017%20%28057%29.jpg"
  },
  "stefan posch": {
    "qid": "Q15849016",
    "name": "Stefan Posch",
    "birthDate": "1977-01-18",
    "height": "1.89 m",
    "club": "TSG 1899 Hoffenheim",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Austria%20national%20under-21%20football%20team%20-%20Teamcamp%20June%202017%20%28110%29.jpg"
  },
  "phillipp mwene": {
    "qid": "",
    "name": "Phillipp Mwene",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "alexander prass": {
    "qid": "Q62006510",
    "name": "Alexander Prass",
    "birthDate": "2001-05-26",
    "height": "1.80 m",
    "club": "FC Liefering",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/FC%20Liefering%20gegen%20FC%20Juniors%20O%C3%96.%20%2819.%20April%202019%29%2034.jpg"
  },
  "xaver schlager": {
    "qid": "Q20190657",
    "name": "Xaver Schlager",
    "birthDate": "1998-09-28",
    "height": "1.74 m",
    "club": "RB Leipzig",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/FC%20Liefering%20gegen%20Austria%20Lustenau%20SKY%20GO%20Liga%2015.JPG"
  },
  "marcel sabitzer": {
    "qid": "Q472300",
    "name": "Marcel Sabitzer",
    "birthDate": "1994-03-17",
    "height": "1.76 m",
    "club": "Borussia Dortmund",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Marcel%20Sabitzer%202020%20%28cropped%29.jpg"
  },
  "konrad laimer": {
    "qid": "Q18670270",
    "name": "Konrad Laimer",
    "birthDate": "1997-05-27",
    "height": "1.79 m",
    "club": "F. C. Bayern Múnich",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/2022-07-21%20Fu%C3%9Fball%2C%20M%C3%A4nner%2CFreundschaftsspiel%2C%20RB%20Leipzig%20-%20FC%20Liverpool%201DX%202137%20by%20Stepro%20%28cropped%29.jpg"
  },
  "florian grillitsch": {
    "qid": "Q20752635",
    "name": "Florian Grillitsch",
    "birthDate": "1995-08-07",
    "height": "1.86 m",
    "club": "Sporting Clube de Braga",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/20180602%20AUTGER%204687%20%28cropped%29%20Florian%20Grillitsch.jpg"
  },
  "nicolas seiwald": {
    "qid": "Q64010197",
    "name": "Nicolas Seiwald",
    "birthDate": "2001-05-04",
    "height": "1.79 m",
    "club": "RB Leipzig",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/FC%20Liefering%20versus%20WSG%20Wattens%20%2824.%20Mai%202019%29%2004.jpg"
  },
  "romano schmid": {
    "qid": "Q30080273",
    "name": "Romano Schmid",
    "birthDate": "2000-01-27",
    "height": "1.68 m",
    "club": "Werder Bremen",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/FC%20Liefering%20versus%20Blau%20Wei%C3%9F%20Linz%20%2822.%20September%202017%29%2041.jpg"
  },
  "patrick wimmer": {
    "qid": "Q65948837",
    "name": "Patrick Wimmer",
    "birthDate": "2001-05-30",
    "height": "1.82 m",
    "club": "VfL Wolfsburgo",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/UEFA%20Euro%202023%20Qualifiers%20Austria%20vs.%20Finland%20%282022-06-03%29%2029.jpg"
  },
  "christoph baumgartner": {
    "qid": "Q91176390",
    "name": "Christoph Baumgartner",
    "birthDate": "1969-01-01",
    "height": "1.78 m",
    "club": "RB Leipzig",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Austria%20national%20under-21%20football%20team%20-%20Teamcamp%20October%202019%20%2860%29.jpg"
  },
  "michael gregoritsch": {
    "qid": "Q699094",
    "name": "Michael Gregoritsch",
    "birthDate": "1994-04-18",
    "height": "1.94 m",
    "club": "Brøndby IF",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Michael%20Gregoritsch%20U21%20Austria%20vs.%20Albania%202014-03-05%2001.jpg"
  },
  "marko arnautovic": {
    "qid": "Q313575",
    "name": "Marko Arnautović",
    "birthDate": "1989-04-19",
    "height": "1.89 m",
    "club": "Estrella Roja de Belgrado",
    "position": "extremo izquierdo",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/20180610%20FIFA%20Friendly%20Match%20Austria%20vs.%20Brazil%20Marko%20Arnautovi%C4%87%20850%201633.jpg"
  },
  "thibaut courtois": {
    "qid": "Q73360",
    "name": "Thibaut Courtois",
    "birthDate": "1992-05-11",
    "height": "2.00 m",
    "club": "",
    "position": "guardameta",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Courtois%202018%20%28cropped%29.jpg"
  },
  "arthur theate": {
    "qid": "Q97724521",
    "name": "Arthur Theate",
    "birthDate": "2000-05-25",
    "height": "1.86 m",
    "club": "K.V. Oostende",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Arthur%20Theate%20Nations%20League%20Italy%202021.jpg"
  },
  "timothy castagne": {
    "qid": "Q18041089",
    "name": "Timothy Castagne",
    "birthDate": "1995-12-05",
    "height": "1.80 m",
    "club": "Fulham Football Club",
    "position": "lateral",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Timothy%20Castagne%2001.jpg"
  },
  "zeno debast": {
    "qid": "Q106686485",
    "name": "Zeno Debast",
    "birthDate": "2003-10-24",
    "height": "1.91 m",
    "club": "Sporting Clube de Portugal",
    "position": "",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Zeno%20Debast%20USMNT%20v%20Belgium%20Mar%2028%202026-80%20%28cropped%29.jpg"
  },
  "brandon mechele": {
    "qid": "Q13444905",
    "name": "Brandon Mechele",
    "birthDate": "1993-01-28",
    "height": "1.90 m",
    "club": "Club Brujas",
    "position": "defensor central",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Brandon%20Mechele%20Club%20Brugge.jpg"
  },
  "maxim de cuyper": {
    "qid": "Q85928265",
    "name": "Maxim De Cuyper",
    "birthDate": "2000-12-22",
    "height": "1.82 m",
    "club": "Brighton & Hove Albion Football Club",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Maxim%20De%20Cuyper%20USMNT%20v%20Belgium%20Mar%2028%202026-79%20%28cropped%29.jpg"
  },
  "thomas meunier": {
    "qid": "Q2036160",
    "name": "Thomas Meunier",
    "birthDate": "1991-09-12",
    "height": "1.90 m",
    "club": "Lille Olympique Sporting Club",
    "position": "lateral",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/2019-07-17%20SG%20Dynamo%20Dresden%20vs.%20Paris%20Saint-Germain%20by%20Sandro%20Halank%E2%80%93121.jpg"
  },
  "youri tielemans": {
    "qid": "Q14327453",
    "name": "Youri Tielemans",
    "birthDate": "1997-05-07",
    "height": "1.76 m",
    "club": "Aston Villa Football Club",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Youri%20Tielemans%202019.jpg"
  },
  "amadou onana": {
    "qid": "Q99328435",
    "name": "Amadou Onana",
    "birthDate": "2001-08-16",
    "height": "1.92 m",
    "club": "Aston Villa Football Club",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/RC%20Lens%20-%20Lille%20OSC%20%2817-09-2021%29%209%20%28cropped%29.jpg"
  },
  "nicolas raskin": {
    "qid": "Q48525779",
    "name": "Nicolas Raskin",
    "birthDate": "2001-02-23",
    "height": "1.78 m",
    "club": "Standard Lieja",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Nicolas%20Raskin%202023.jpg"
  },
  "alexis saelemaekers": {
    "qid": "Q49166190",
    "name": "Alexis Saelemaekers",
    "birthDate": "1999-06-27",
    "height": "1.80 m",
    "club": "A.C. Milan",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/AlexisSaelemaekers2022Salzburg.jpg"
  },
  "hans vanaken": {
    "qid": "Q2359678",
    "name": "Hans Vanaken",
    "birthDate": "1992-08-24",
    "height": "1.94 m",
    "club": "Club Brujas",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Hans%20Vanaken%20Lommel%20United.jpg"
  },
  "kevin de bruyne": {
    "qid": "Q52835665",
    "name": "Kevin De Bruyne",
    "birthDate": "1991-06-28",
    "height": "1.81 m",
    "club": "Società Sportiva Calcio Napoli",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Kevin%20De%20Bruyne%20USMNT%20v%20Belgium%20Mar%2028%202026-64%20%28cropped%29.jpg"
  },
  "jeremy doku": {
    "qid": "Q59209505",
    "name": "Jérémy Doku",
    "birthDate": "2002-05-27",
    "height": "1.73 m",
    "club": "Manchester City Football Club",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/J%C3%A9r%C3%A9my%20Doku%20USMNT%20v%20Belgium%20Mar%2028%202026-27%20%28cropped%29.jpg"
  },
  "charles de ketelaere": {
    "qid": "Q68607008",
    "name": "Charles De Ketelaere",
    "birthDate": "2001-03-10",
    "height": "1.92 m",
    "club": "Atalanta Bergamasca Calcio",
    "position": "segundo delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Charles%20De%20Ketelaere%202022%20Salzburg%20vs%20AC%20Milan%202022-09-06.jpg"
  },
  "leandro trossard": {
    "qid": "Q6509762",
    "name": "Leandro Trossard",
    "birthDate": "1994-12-04",
    "height": "1.72 m",
    "club": "Arsenal Fútbol Club",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Leandro%20Trossard%202022.jpg"
  },
  "lois openda": {
    "qid": "Q56183407",
    "name": "Loïs Openda",
    "birthDate": "2000-02-16",
    "height": "1.75 m",
    "club": "Club Brujas",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/2023-10-04%20Fu%C3%9Fball%2C%20M%C3%A4nner%2C%20UEFA%20Champions%20League%2C%20RB%20Leipzig%20-%20Manchester%20City%20FC%201DX%202703%20%28Lo%C3%AFs%20Openda%29.jpg"
  },
  "romelu lukaku": {
    "qid": "Q313316",
    "name": "Romelu Lukaku",
    "birthDate": "1993-05-13",
    "height": "1.91 m",
    "club": "Società Sportiva Calcio Napoli",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Romelu%20Lukaku%202021.jpg"
  },
  "nikola vasilj": {
    "qid": "Q77243490",
    "name": "Nikola Vasilj",
    "birthDate": "1995-12-02",
    "height": "1.93 m",
    "club": "FC San Pauli",
    "position": "guardameta",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/2025-04-23%20-%20FC%20St%20Pauli%20-%20Nikola%20Vasilj%20%28cropped%29.jpg"
  },
  "amer dedic": {
    "qid": "",
    "name": "Amer Dedic",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "sead kolasinac": {
    "qid": "",
    "name": "Sead Kolasinac",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "tarik muharemovic": {
    "qid": "Q102399229",
    "name": "Tarik Muharemovic",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "nihad mujakic": {
    "qid": "",
    "name": "Nihad Mujakic",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "nikola katic": {
    "qid": "Q102456640",
    "name": "Nikola Katic",
    "birthDate": "1986-06-01",
    "height": "",
    "club": "Pittsburgh Riverhounds",
    "position": "defensa",
    "photo": ""
  },
  "amir hadziahmetovic": {
    "qid": "",
    "name": "Amir Hadziahmetovic",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "benjamin tahirovic": {
    "qid": "",
    "name": "Benjamin Tahirovic",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "armin gigovic": {
    "qid": "",
    "name": "Armin Gigovic",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "ivan sunjic": {
    "qid": "",
    "name": "Ivan Sunjic",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "ivan basic": {
    "qid": "",
    "name": "Ivan Basic",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "dzenis burnic": {
    "qid": "",
    "name": "Dzenis Burnic",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "esmir bajraktarevic": {
    "qid": "",
    "name": "Esmir Bajraktarevic",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "amar memic": {
    "qid": "",
    "name": "Amar Memic",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "ermedin demirovic": {
    "qid": "",
    "name": "Ermedin Demirovic",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "edin dzeko": {
    "qid": "",
    "name": "Edin Dzeko",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "samed bazdar": {
    "qid": "",
    "name": "Samed Bazdar",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "haris tabakovic": {
    "qid": "",
    "name": "Haris Tabakovic",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "alisson": {
    "qid": "Q54601298",
    "name": "Alisson",
    "birthDate": "1992-10-02",
    "height": "1.77 m",
    "club": "Grêmio Foot-Ball Porto Alegrense",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Alisson%20S%C3%A3o%20Paulo.jpg"
  },
  "bento": {
    "qid": "Q98265925",
    "name": "Bento Matheus Krepski",
    "birthDate": "1999-06-10",
    "height": "1.90 m",
    "club": "",
    "position": "guardameta",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Bento-Athletico-Palmeiras-jul2022%20%28cropped%29.jpg"
  },
  "marquinhos": {
    "qid": "Q39230",
    "name": "Marcos Aoás Corrêa",
    "birthDate": "1994-05-14",
    "height": "1.83 m",
    "club": "Arsenal Fútbol Club",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/FC%20Salzburg%20gegen%20Paris%20Saint-Germain%20UEFA%20Champions%20League%2049%20%28cropped%29.jpg"
  },
  "eder militao": {
    "qid": "Q29950055",
    "name": "Éder Militão",
    "birthDate": "1998-01-18",
    "height": "1.86 m",
    "club": "Real Madrid Club de Fútbol",
    "position": "defensor central",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Eder%20Militao%202021.jpg"
  },
  "gabriel magalhaes": {
    "qid": "Q116269059",
    "name": "Gabriel Magalhães",
    "birthDate": "1983-09-03",
    "height": "1.90 m",
    "club": "Arsenal Fútbol Club",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/GabrielLille2019.png"
  },
  "danilo": {
    "qid": "Q99557093",
    "name": "Danilo dos Santos de Oliveira",
    "birthDate": "2001-04-29",
    "height": "1.77 m",
    "club": "Clube de Regatas do Flamengo",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Danilo-palmeiras-2022.png"
  },
  "wesley": {
    "qid": "Q2074913",
    "name": "Wesley",
    "birthDate": "1986-01-20",
    "height": "1.91 m",
    "club": "Aston Villa Football Club",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Wesley%20Jacobs%20-1769635887.jpg"
  },
  "lucas paqueta": {
    "qid": "Q30089624",
    "name": "Lucas Paquetá",
    "birthDate": "1997-08-27",
    "height": "1.80 m",
    "club": "Clube de Regatas do Flamengo",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Lucas%20Paquet%C3%A1%20of%20West%20Ham%20%28cropped%29.jpeg"
  },
  "casemiro": {
    "qid": "Q616664",
    "name": "Casemiro",
    "birthDate": "1992-02-23",
    "height": "1.88 m",
    "club": "Manchester United Football Club",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/20180610%20FIFA%20Friendly%20Match%20Austria%20vs.%20Brazil%20Casemiro%20850%201575.jpg"
  },
  "bruno guimaraes": {
    "qid": "Q59661515",
    "name": "Bruno Guimarães",
    "birthDate": "1997-11-16",
    "height": "1.82 m",
    "club": "Newcastle United Football Club",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Bruno%20Guimar%C3%A3es.png"
  },
  "luiz henrique": {
    "qid": "Q96391075",
    "name": "Luiz Henrique",
    "birthDate": "1999-03-18",
    "height": "1.72 m",
    "club": "Clube de Regatas do Flamengo",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Luiz%20Henrique%20in%20Zenit%202025.jpg"
  },
  "vinicius junior": {
    "qid": "",
    "name": "Vinicius Júnior",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "rodrygo": {
    "qid": "Q42728914",
    "name": "Rodrygo Goes",
    "birthDate": "2001-01-09",
    "height": "1.74 m",
    "club": "Real Madrid Club de Fútbol",
    "position": "extremo",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Rodrygo%202023%20%28cropped%29.jpg"
  },
  "joao pedro": {
    "qid": "Q64005114",
    "name": "João Pedro Junqueira de Jesús",
    "birthDate": "2001-09-26",
    "height": "1.86 m",
    "club": "Chelsea Football Club",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Jo%C3%A3o%20Pedro%2C%202025%20FIFA%20Club%20World%20Cup%20final%20%2854654843615%29.jpg"
  },
  "matheus cunha": {
    "qid": "Q110882015",
    "name": "Matheus Cunha Queiroz",
    "birthDate": "2001-01-01",
    "height": "1.93 m",
    "club": "Cruzeiro Esporte Clube",
    "position": "atacante",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Matheus%20Cunha%20%28cropped%29%2020180920%20Fussball%2C%20UEFA%20Europa%20League%2C%20RB%20Leipzig%20-%20FC%20Salzburg%20by%20Stepro%20StP%207968%20%28cropped%29.jpg"
  },
  "gabriel martinelli": {
    "qid": "Q61460651",
    "name": "Gabriel Martinelli",
    "birthDate": "2001-06-18",
    "height": "1.80 m",
    "club": "Arsenal Fútbol Club",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/1%20Gabriel%20Martinelli%20arsenal%202025%20%28cropped%29.jpg"
  },
  "raphinha": {
    "qid": "Q24451790",
    "name": "Raphinha",
    "birthDate": "1993-04-21",
    "height": "",
    "club": "Sport Club Internacional",
    "position": "defensa",
    "photo": ""
  },
  "estevao": {
    "qid": "",
    "name": "Estévão",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "dayne st.clair": {
    "qid": "",
    "name": "Dayne St.Clair",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "alphonso davies": {
    "qid": "Q23540953",
    "name": "Alphonso Davies",
    "birthDate": "2000-11-02",
    "height": "1.83 m",
    "club": "F. C. Bayern Múnich",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/2022-07-30%20Fu%C3%9Fball%2C%20M%C3%A4nner%2C%20DFL-Supercup%2C%20RB%20Leipzig%20-%20FC%20Bayern%20M%C3%BCnchen%201DX%203286%20by%20Stepro.jpg"
  },
  "alistair johnston": {
    "qid": "Q81878309",
    "name": "Alistair Johnston",
    "birthDate": "1998-10-08",
    "height": "1.80 m",
    "club": "Celtic Football Club",
    "position": "lateral derecho",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/A%20Johnston%20Canada%20national%20football%20team%20WC2022%20%28cropped%29.jpg"
  },
  "samuel adekugbe": {
    "qid": "",
    "name": "Samuel Adekugbe",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "riche larvea": {
    "qid": "",
    "name": "Riche Larvea",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "derek cornelius": {
    "qid": "Q29901014",
    "name": "Derek Cornelius",
    "birthDate": "1997-11-25",
    "height": "1.87 m",
    "club": "Olympique de Marsella",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/08042023%20BP-MFF%20reportagefotografen%207309.jpg"
  },
  "moise bombito": {
    "qid": "Q116146104",
    "name": "Moïse Bombito",
    "birthDate": "2000-03-30",
    "height": "1.90 m",
    "club": "OGC Niza",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Bombito%20asse%20ogcn%202425.png"
  },
  "kamal miller": {
    "qid": "Q61959630",
    "name": "Kamal Miller",
    "birthDate": "1997-05-16",
    "height": "1.83 m",
    "club": "Portland Timbers",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Inter%20Miami%200-0%20Nashville%20SC%2012%20%28cropped%29.jpg"
  },
  "stephen eustaquio": {
    "qid": "Q35009041",
    "name": "Stephen Eustáquio",
    "birthDate": "1996-12-21",
    "height": "1.78 m",
    "club": "S.C.U. Torreense",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/S%20Eustaqui%20Canada%20national%20football%20team%20WC2022%20%28cropped%29.jpg"
  },
  "ismael kone": {
    "qid": "Q10557278",
    "name": "Ismaël Koné",
    "birthDate": "1988-07-12",
    "height": "1.88 m",
    "club": "Olympique de Marsella",
    "position": "atacante",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/2024%20African%20Championships%20in%20Athletics%2042.jpg"
  },
  "jonathan osorio": {
    "qid": "Q10554558",
    "name": "Jonathan Osorio",
    "birthDate": "1992-06-12",
    "height": "1.75 m",
    "club": "Toronto FC",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Jonathan%20Osorio.jpg"
  },
  "jacob shaffelburg": {
    "qid": "Q64009768",
    "name": "Jacob Shaffelburg",
    "birthDate": "1999-11-26",
    "height": "1.78 m",
    "club": "Toronto FC II",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Jacob%20Shaffleburg%20cropped.png"
  },
  "mathieu choiniere": {
    "qid": "Q55760452",
    "name": "Mathieu Choinière",
    "birthDate": "1999-02-07",
    "height": "1.75 m",
    "club": "Grasshopper Club Zürich",
    "position": "delantero",
    "photo": ""
  },
  "niko sigur": {
    "qid": "Q117830854",
    "name": "Niko Sigur",
    "birthDate": "2003-09-09",
    "height": "1.80 m",
    "club": "",
    "position": "",
    "photo": ""
  },
  "tajon buchanan": {
    "qid": "Q62016194",
    "name": "Tajon Buchanan",
    "birthDate": "1999-02-08",
    "height": "1.83 m",
    "club": "Villarreal Club de Fútbol",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Tajon%20Buchanan%20WC2022.jpg"
  },
  "liam millar": {
    "qid": "Q50505969",
    "name": "Liam Millar",
    "birthDate": "1999-09-27",
    "height": "1.81 m",
    "club": "Fulham Football Club",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Liam%20Millar.jpeg"
  },
  "cyle larin": {
    "qid": "Q16935084",
    "name": "Cyle Larin",
    "birthDate": "1995-04-17",
    "height": "1.88 m",
    "club": "Beşiktaş Jimnastik Kulübü",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Cyle%20Larin%20%282021-22%20S%C3%BCper%20Lig%29%20-%20Resim1.png"
  },
  "jonathan david": {
    "qid": "Q86837531",
    "name": "Jonathan David",
    "birthDate": "2000-01-14",
    "height": "1.75 m",
    "club": "Juventus",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/RC%20Lens%20-%20Lille%20OSC%20%2808-10-2023%29%2042.jpg"
  },
  "yahia fofana": {
    "qid": "Q105161343",
    "name": "Yahia Fofana",
    "birthDate": "2000-08-21",
    "height": "1.94 m",
    "club": "",
    "position": "guardameta",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Fofana%20asse%20sco%202425.png"
  },
  "ghislain konan": {
    "qid": "Q29158696",
    "name": "Ghislain Konan",
    "birthDate": "1995-12-27",
    "height": "1.76 m",
    "club": "ASEC Mimosas",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/FC%20Salzburg%20gegen%20Vit%C3%B3ria%20Guimar%C3%A3es%20%28UEFA%20Euroleague%2023.%20November%202017%29%2042.jpg"
  },
  "wilfried singo": {
    "qid": "Q78255759",
    "name": "Wilfried Singo",
    "birthDate": "2000-12-25",
    "height": "1.90 m",
    "club": "A.S. Monaco F.C.",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Singo%20asse%20asm%202425.png"
  },
  "odilon kossounou": {
    "qid": "Q64009388",
    "name": "Odilon Kossounou",
    "birthDate": "2001-01-04",
    "height": "1.91 m",
    "club": "Atalanta Bergamasca Calcio",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Odilon%20Kossounou%2C%202022-07-31%2C%20Saisoner%C3%B6ffnung%20Bayer%2004%2C%20Leverkusen%20%281%29.jpg"
  },
  "evan ndicka": {
    "qid": "Q28971436",
    "name": "Evan Ndicka",
    "birthDate": "1999-08-20",
    "height": "1.92 m",
    "club": "Association de la Jeunesse Auxerroise",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/2022128151247%202022-05-08%20Fussball%20Eintracht%20Frankfurt%20vs%20Borussia%20M%C3%B6nchengladbach%20-%20Sven%20-%201D%20X%20MK%20II%20-%200370%20-%20B70I6481%20%28Evan%20N%E2%80%99Dicka%20cropped%29.jpg"
  },
  "willy boly": {
    "qid": "Q570983",
    "name": "Willy Boly",
    "birthDate": "1991-02-03",
    "height": "1.95 m",
    "club": "S.C. Braga B",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Shahter-Braga%20%287%29.jpg"
  },
  "emmanuel agbadou": {
    "qid": "Q69523791",
    "name": "Emmanuel Agbadou",
    "birthDate": "1997-06-17",
    "height": "1.92 m",
    "club": "US Monastir",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Emmanuel%20Agbadou.jpg"
  },
  "ousmane diomande": {
    "qid": "Q116753805",
    "name": "Ousmane Diomande",
    "birthDate": "2003-12-04",
    "height": "1.90 m",
    "club": "Sporting Clube de Portugal",
    "position": "defensor central",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/%C3%89quipe%20football%20ivoirien%2003%20%28Ousmane%20Diomande%29.jpg"
  },
  "franck kessie": {
    "qid": "",
    "name": "Franck Kessie",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "seko fofana": {
    "qid": "Q18635274",
    "name": "Seko Fofana",
    "birthDate": "1995-05-07",
    "height": "1.83 m",
    "club": "SC Bastia",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Seko%20Fofana.jpg"
  },
  "ibrahim sangare": {
    "qid": "",
    "name": "Ibrahim Sangare",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "jean-philippe gbamin": {
    "qid": "Q14395948",
    "name": "Jean-Philippe Gbamin",
    "birthDate": "1995-09-25",
    "height": "1.86 m",
    "club": "1. FSV Mainz 05",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Jean-Philippe%20Gbamin%20%28cropped%29.jpg"
  },
  "amad diallo": {
    "qid": "Q72603655",
    "name": "Amad Diallo",
    "birthDate": "2002-07-11",
    "height": "1.73 m",
    "club": "",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Manchester%20United%20v%20BSC%20Young%20Boys%2C%208%20December%202021%20%2817%29%20%28cropped%29.jpg"
  },
  "sebastien haller": {
    "qid": "Q7665927",
    "name": "Sébastien Haller",
    "birthDate": "1994-06-22",
    "height": "1.90 m",
    "club": "FC Utrecht",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/S%C3%A9bastien%20Haller%202.jpg"
  },
  "simon adingra": {
    "qid": "Q107742783",
    "name": "Simon Adingra",
    "birthDate": "2002-01-01",
    "height": "1.75 m",
    "club": "A.S. Monaco F.C.",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Simon%20Adingra%20USG%202023.jpg"
  },
  "yan diomande": {
    "qid": "Q133698867",
    "name": "Yan Diomande",
    "birthDate": "2006-11-14",
    "height": "1.80 m",
    "club": "",
    "position": "",
    "photo": ""
  },
  "evann guessand": {
    "qid": "Q98593672",
    "name": "Evann Guessand",
    "birthDate": "2001-07-01",
    "height": "1.85 m",
    "club": "Aston Villa Football Club",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Guessand%20asse%20ogcn%202425.png"
  },
  "oumar diakite": {
    "qid": "",
    "name": "Oumar Diakite",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "lionel mpasi": {
    "qid": "",
    "name": "Lionel Mpasi",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "aaron wan-bissaka": {
    "qid": "Q50137347",
    "name": "Aaron Wan-Bissaka",
    "birthDate": "1997-11-26",
    "height": "1.83 m",
    "club": "West Ham United Football Club",
    "position": "lateral",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Aaron%20Wan-Bissaka%20of%20West%20Ham%20United.jpeg"
  },
  "axel tuanzebe": {
    "qid": "Q27019988",
    "name": "Axel Tuanzebe",
    "birthDate": "1997-11-14",
    "height": "1.85 m",
    "club": "Aston Villa Football Club",
    "position": "defensor central",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Manchester%20United%20v%20Wigan%20Athletic%2C%20January%202017%20%2833%29.JPG"
  },
  "arthur masuaku": {
    "qid": "Q16010783",
    "name": "Arthur Masuaku",
    "birthDate": "1993-11-07",
    "height": "1.79 m",
    "club": "Olympiacos Fútbol Club",
    "position": "lateral",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Arthur%20Masuaku%2C%202023%20%28cropped%29.jpg"
  },
  "chancel mbemba": {
    "qid": "Q3196721",
    "name": "Chancel Mbemba Mangulu",
    "birthDate": "1994-08-08",
    "height": "1.82 m",
    "club": "Newcastle United Football Club",
    "position": "defensor central",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Chancel%20Mbemba%20Mangulu.JPG"
  },
  "joris kayembe": {
    "qid": "Q16979997",
    "name": "Joris Kayembe",
    "birthDate": "1994-08-08",
    "height": "1.80 m",
    "club": "F.C. Porto B",
    "position": "extremo izquierdo",
    "photo": ""
  },
  "charles pickel": {
    "qid": "Q24256738",
    "name": "Charles Pickel",
    "birthDate": "1997-05-15",
    "height": "1.80 m",
    "club": "Real Club Deportivo Espanyol de Barcelona",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/RC%20Lens%20-%20Grenoble%20Foot%2038%20%2810-02-2020%29%2060.jpg"
  },
  "ngal'ayel mukau": {
    "qid": "Q116151074",
    "name": "Ngal'ayel Mukau",
    "birthDate": "2004-11-03",
    "height": "1.86 m",
    "club": "",
    "position": "",
    "photo": ""
  },
  "edo kayembe": {
    "qid": "Q46699047",
    "name": "Edo Kayembe",
    "birthDate": "1998-08-03",
    "height": "1.83 m",
    "club": "K.A.S. Eupen",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Edo%20Kayembe%202025%20%28cropped%29.jpg"
  },
  "samuel moutoussamy": {
    "qid": "Q37453754",
    "name": "Samuel Moutoussamy",
    "birthDate": "1996-08-12",
    "height": "1.74 m",
    "club": "Football Club Nantes",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Samuel%20Moutoussamy%202018.jpg"
  },
  "noah sadiki": {
    "qid": "Q112112992",
    "name": "Noah Sadiki",
    "birthDate": "2004-12-17",
    "height": "1.73 m",
    "club": "Royale Union Saint-Gilloise",
    "position": "",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Noah%20Sadiki%20versus%20Real%20Betis%202nd%20August%202025.jpg"
  },
  "theo bongonda": {
    "qid": "",
    "name": "Théo Bongonda",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "meschak elia": {
    "qid": "",
    "name": "Meschak Elia",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "yoane wissa": {
    "qid": "Q28101965",
    "name": "Yoane Wissa",
    "birthDate": "1996-09-03",
    "height": "1.76 m",
    "club": "Newcastle United Football Club",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/CAN%202023RD%20Congo%202-1%20Guin%C3%A9e%209939%20%28cropped%29.jpg"
  },
  "brian cipenga": {
    "qid": "Q127271091",
    "name": "Brian Cipenga",
    "birthDate": "1998-01-01",
    "height": "1.72 m",
    "club": "",
    "position": "",
    "photo": ""
  },
  "fiston mayele": {
    "qid": "Q117287348",
    "name": "Fiston Kalala Mayele",
    "birthDate": "1994-06-24",
    "height": "1.85 m",
    "club": "",
    "position": "",
    "photo": ""
  },
  "cedric bakambu": {
    "qid": "Q932982",
    "name": "Cédric Bakambu",
    "birthDate": "1991-04-11",
    "height": "1.83 m",
    "club": "Olympique de Marsella",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/C%C3%A9dric%20Bakambu%202016%20%28cropped%29.jpg"
  },
  "nathanael mbuku": {
    "qid": "Q66363768",
    "name": "Nathanaël Mbuku",
    "birthDate": "2002-03-16",
    "height": "1.70 m",
    "club": "Stade de Reims",
    "position": "delantero",
    "photo": ""
  },
  "camilo vargas": {
    "qid": "Q5026758",
    "name": "Camilo Vargas",
    "birthDate": "1989-03-09",
    "height": "1.85 m",
    "club": "Asociación Atlética Argentinos Juniors",
    "position": "guardameta",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Camilo%20Vargas%202022.jpeg"
  },
  "david ospina": {
    "qid": "Q436987",
    "name": "David Ospina",
    "birthDate": "1988-08-31",
    "height": "1.83 m",
    "club": "Atlético Nacional",
    "position": "guardameta",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Polic%C3%ADa%20de%20Infancia%20y%20Adolescencia%20-%20David%20Ospina%20%28cropped%29.jpeg"
  },
  "davinson sanchez": {
    "qid": "Q20737387",
    "name": "Dávinson Sánchez",
    "birthDate": "1996-06-12",
    "height": "1.88 m",
    "club": "Atlético Nacional",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/D%C3%A1vinson%20S%C3%A1nchez%2C%20POL%20vs%20COL%3B%20FWC%202018.jpg"
  },
  "yerry mina": {
    "qid": "Q16648816",
    "name": "Yerry Mina",
    "birthDate": "1994-09-23",
    "height": "1.95 m",
    "club": "Cagliari Calcio",
    "position": "defensor central",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/FWC%202018%20-%20Round%20of%2016%20-%20COL%20v%20ENG%20-%20Photo%20103%20%28cropped%29.jpg"
  },
  "daniel munoz": {
    "qid": "Q23007975",
    "name": "Daniel Munoz",
    "birthDate": "1989-03-22",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "johan mojica": {
    "qid": "Q5932872",
    "name": "Johan Mojica",
    "birthDate": "1992-08-21",
    "height": "1.82 m",
    "club": "Rayo Vallecano",
    "position": "lateral",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/FWC%202018%20-%20Round%20of%2016%20-%20COL%20v%20ENG%20-%20Photo%20102%20%28cropped%29%202.jpg"
  },
  "jhon lucumi": {
    "qid": "Q21573188",
    "name": "Jhon Lucumí",
    "birthDate": "1998-06-26",
    "height": "1.87 m",
    "club": "Deportivo Cali",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Jhon%20Lucum%C3%AD%20September%202019.jpg"
  },
  "santiago arias": {
    "qid": "Q61756734",
    "name": "Santiago Arias",
    "birthDate": "1992-01-13",
    "height": "1.75 m",
    "club": "Asociación Deportiva Club Alianza Atlético de Sullana",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Santiago%20Arias.jpg"
  },
  "jefferson lerma": {
    "qid": "Q16300824",
    "name": "Jefferson Lerma",
    "birthDate": "1994-10-25",
    "height": "1.79 m",
    "club": "Crystal Palace Football Club",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Jefferson%20Lerma%202018.png"
  },
  "kevin castano": {
    "qid": "Q117289166",
    "name": "Kevin Castaño",
    "birthDate": "2000-09-29",
    "height": "1.77 m",
    "club": "Fútbol Club Krasnodar",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Kevin%20con%20Krasnodar%20en%202023.jpg"
  },
  "richard rios": {
    "qid": "",
    "name": "Richard Rios",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "james rodriguez": {
    "qid": "Q37946987",
    "name": "James Rodriguez",
    "birthDate": "2003-05-18",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "juan fernando quintero": {
    "qid": "Q2092409",
    "name": "Juan Fernando Quintero",
    "birthDate": "1993-01-18",
    "height": "1.69 m",
    "club": "Club Atlético River Plate",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Juan%20Quintero%20%28cropped%29.jpg"
  },
  "jorge carrascal": {
    "qid": "Q19362872",
    "name": "Jorge Carrascal",
    "birthDate": "1998-05-25",
    "height": "1.80 m",
    "club": "Club Atlético River Plate",
    "position": "extremo izquierdo",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Jorge%20Carrascal%20in%202022.jpg"
  },
  "jon arias": {
    "qid": "Q37275475",
    "name": "Jon Arias",
    "birthDate": "1987-01-01",
    "height": "",
    "club": "",
    "position": "",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Seminci%202025%20-%20Jon%20Arias-3%20%28cropped%29.jpg"
  },
  "jhon cordova": {
    "qid": "",
    "name": "Jhon Cordova",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "luis suarez": {
    "qid": "",
    "name": "Luis Suarez",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "luis diaz": {
    "qid": "Q6700476",
    "name": "Luis Diaz",
    "birthDate": "1957-11-06",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "vozinha": {
    "qid": "Q3018091",
    "name": "Vozinha",
    "birthDate": "1986-06-03",
    "height": "1.89 m",
    "club": "FC Zimbru Chișinău",
    "position": "guardameta",
    "photo": ""
  },
  "logan costa": {
    "qid": "Q110184199",
    "name": "Logan Costa",
    "birthDate": "2001-04-01",
    "height": "1.90 m",
    "club": "",
    "position": "defensor central",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Logan%20Costa.jpg"
  },
  "pico": {
    "qid": "",
    "name": "Pico",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "diney": {
    "qid": "Q18637312",
    "name": "Diney",
    "birthDate": "1995-01-17",
    "height": "1.85 m",
    "club": "Club Sport Marítimo",
    "position": "defensa",
    "photo": ""
  },
  "steven moreira": {
    "qid": "Q14371131",
    "name": "Steven Moreira",
    "birthDate": "1994-08-13",
    "height": "1.76 m",
    "club": "Columbus Crew",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Saint-L%C3%B4%20-%20Rennes%20CFA2%2020160409%20-%20Steven%20Moreira.JPG"
  },
  "wagner pina": {
    "qid": "Q123650680",
    "name": "Wagner Pina",
    "birthDate": "2002-11-03",
    "height": "1.80 m",
    "club": "",
    "position": "",
    "photo": ""
  },
  "joao paulo": {
    "qid": "Q59673680",
    "name": "Joao Paulo",
    "birthDate": "1997-07-04",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "yannick semedo": {
    "qid": "Q130465245",
    "name": "Yannick Semedo",
    "birthDate": "1995-12-29",
    "height": "1.71 m",
    "club": "",
    "position": "",
    "photo": ""
  },
  "kevin pina": {
    "qid": "Q108395046",
    "name": "Kevin Pina",
    "birthDate": "1997-01-27",
    "height": "1.81 m",
    "club": "Fútbol Club Krasnodar",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Kevin%20Pina%20%28footballer%29%202022.jpg"
  },
  "patrick andrade": {
    "qid": "Q20065314",
    "name": "Patrick Andrade",
    "birthDate": "1993-02-09",
    "height": "1.90 m",
    "club": "F. K. Partizan Belgrado",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Patrick%20Andrade.jpg"
  },
  "jamiro monteiro": {
    "qid": "Q23541080",
    "name": "Jamiro Monteiro",
    "birthDate": "1993-11-23",
    "height": "1.75 m",
    "club": "Cambuur Leeuwarden",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Jamiro%20Monteiro%20Philadelphia%20Union%202019.jpg"
  },
  "deroy duarte": {
    "qid": "Q39082970",
    "name": "Deroy Duarte",
    "birthDate": "1999-07-04",
    "height": "1.77 m",
    "club": "Sparta Rotterdam",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Deroy%20Duarte.jpg"
  },
  "garry rodrigues": {
    "qid": "",
    "name": "Garry Rodrigues",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "jovane cabral": {
    "qid": "Q26704562",
    "name": "Jovane Cabral",
    "birthDate": "1998-06-14",
    "height": "1.76 m",
    "club": "Sporting Clube de Portugal",
    "position": "extremo izquierdo",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/JovaneCabral%202021.jpg"
  },
  "ryan mendes": {
    "qid": "Q130810263",
    "name": "Ryan Mendes",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "dailon livramento": {
    "qid": "Q110943455",
    "name": "Dailon Livramento",
    "birthDate": "2001-05-04",
    "height": "1.85 m",
    "club": "Roda JC",
    "position": "delantero",
    "photo": ""
  },
  "willy semedo": {
    "qid": "Q44821118",
    "name": "Willy Semedo",
    "birthDate": "1994-04-27",
    "height": "1.85 m",
    "club": "Grenoble Foot 38",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/RC%20Lens%20-%20Grenoble%20Foot%2038%20%2810-02-2020%29%2070.jpg"
  },
  "bebe": {
    "qid": "Q234037",
    "name": "Bebe",
    "birthDate": "1978-05-09",
    "height": "",
    "club": "",
    "position": "",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Bebe%20-%20MN%20Gredos%20-%2002.jpg"
  },
  "dominik livakovic": {
    "qid": "Q18207229",
    "name": "Dominik Livaković",
    "birthDate": "1995-01-09",
    "height": "1.86 m",
    "club": "Fenerbahçe Spor Kulübü",
    "position": "guardameta",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Dominik%20Livakovi%C4%87%202021.jpg"
  },
  "duje caleta-car": {
    "qid": "",
    "name": "Duje Caleta-Car",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "josko gvardiol": {
    "qid": "",
    "name": "Josko Gvardiol",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "josip stanisic": {
    "qid": "Q65950201",
    "name": "Josip Stanišić",
    "birthDate": "2000-04-02",
    "height": "1.86 m",
    "club": "F. C. Bayern Múnich",
    "position": "defensor central",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Josip%20Stani%C5%A1i%C4%87%20during%20an%20Interview%20in%202023.png"
  },
  "luka vuskovic": {
    "qid": "Q115162374",
    "name": "Luka Vušković",
    "birthDate": "2007-02-24",
    "height": "1.93 m",
    "club": "Hamburger SV",
    "position": "defensa",
    "photo": ""
  },
  "josip sutalo": {
    "qid": "",
    "name": "Josip Sutalo",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "kristijan jakic": {
    "qid": "",
    "name": "Kristijan Jakic",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "luka modric": {
    "qid": "Q483837",
    "name": "Luka Modrić",
    "birthDate": "1985-09-09",
    "height": "1.74 m",
    "club": "A.C. Milan",
    "position": "attacking midfielder",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Luka%20Modric%20Interview%202021%20%28cropped%29.jpg"
  },
  "mateo kovacic": {
    "qid": "",
    "name": "Mateo Kovacic",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "martin baturina": {
    "qid": "Q107446975",
    "name": "Martin Baturina",
    "birthDate": "2003-02-16",
    "height": "1.72 m",
    "club": "",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/FC%20Salzburg%20gegen%20GNK%20Dinamo%20Zagreb%20%28UEFA%20Championsleague%202022-10-05%29%2052%20%28cropped%29.jpg"
  },
  "lovro majer": {
    "qid": "Q28137504",
    "name": "Lovro Majer",
    "birthDate": "1998-01-17",
    "height": "1.76 m",
    "club": "VfL Wolfsburgo",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Lovro-Majer.png"
  },
  "mario pasalic": {
    "qid": "",
    "name": "Mario Pasalic",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "petar sucic": {
    "qid": "",
    "name": "Petar Sucic",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "ivan perisic": {
    "qid": "Q161054",
    "name": "Ivan Perišić",
    "birthDate": "1989-02-02",
    "height": "1.86 m",
    "club": "Ceglédi KKSE",
    "position": "extremo izquierdo",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Ivan%20Peri%C5%A1i%C4%87%20%28cropped%29.jpg"
  },
  "marco pasalic": {
    "qid": "",
    "name": "Marco Pasalic",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "ante budimir": {
    "qid": "Q17505049",
    "name": "Ante Budimir",
    "birthDate": "1991-07-22",
    "height": "1.90 m",
    "club": "Club Atlético Osasuna",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Budimir%2C%20Ante%20FCSP%2015-16%20WP%20%28cropped%29.jpg"
  },
  "andrej kramaric": {
    "qid": "Q502898",
    "name": "Andrej Kramarić",
    "birthDate": "1991-06-19",
    "height": "1.80 m",
    "club": "TSG 1899 Hoffenheim",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Andrej%20Kramari%C4%87%202018.jpg"
  },
  "franjo ivanovic": {
    "qid": "",
    "name": "Franjo Ivanovic",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "eloy room": {
    "qid": "Q862963",
    "name": "Eloy Room",
    "birthDate": "1989-02-06",
    "height": "1.88 m",
    "club": "Columbus Crew",
    "position": "guardameta",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Room%20Eloy%20Columbus%20Crew%20SC%20Meet%20the%20Team%202019.jpg"
  },
  "armando obispo": {
    "qid": "Q27514541",
    "name": "Armando Obispo",
    "birthDate": "1999-03-05",
    "height": "1.85 m",
    "club": "PSV Eindhoven",
    "position": "defensor central",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Austria%20U-18%20vs.%20Netherlands%20U-18%202017-03-23%20%28060%29.jpg"
  },
  "sherel floranus": {
    "qid": "Q20972384",
    "name": "Sherel Floranus",
    "birthDate": "1998-08-23",
    "height": "1.81 m",
    "club": "Sparta Rotterdam",
    "position": "lateral",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Sherel%20Floranus%20at%20Antalyaspor%20vs%20Fatih%20Karag%C3%BCmr%C3%BCk%20SK%2020220213.jpg"
  },
  "jurien gaari": {
    "qid": "",
    "name": "Jurien Gaari",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "joshua brenet": {
    "qid": "Q2342765",
    "name": "Joshua Brenet",
    "birthDate": "1994-03-20",
    "height": "1.81 m",
    "club": "Jong PSV",
    "position": "lateral",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/PSV%20Eindhoven%2C%20Teamcamp%20Bad%20Erlach%2C%20July%202014%20%28076%29.jpg"
  },
  "roshon van eijma": {
    "qid": "",
    "name": "Roshon Van Eijma",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "shurandy sambo": {
    "qid": "Q62714742",
    "name": "Shurandy Sambo",
    "birthDate": "2001-08-19",
    "height": "1.74 m",
    "club": "",
    "position": "defensa",
    "photo": ""
  },
  "livano comenencia": {
    "qid": "Q108800542",
    "name": "Livano Comenencia",
    "birthDate": "2004-02-03",
    "height": "1.91 m",
    "club": "Juventus F.C. Next Gen",
    "position": "centrocampista",
    "photo": ""
  },
  "godfried roemeratoe": {
    "qid": "Q60047739",
    "name": "Godfried Roemeratoe",
    "birthDate": "1999-08-19",
    "height": "1.78 m",
    "club": "Football Club Twente",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Godfried%20Roemeratoe.JPG"
  },
  "juninho bacuna": {
    "qid": "Q19280531",
    "name": "Juninho Bacuna",
    "birthDate": "1997-08-07",
    "height": "1.85 m",
    "club": "FC Groningen",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Juninho%20bacuna-1531777726.jpeg"
  },
  "leandro bacuna": {
    "qid": "Q249344",
    "name": "Leandro Bacuna",
    "birthDate": "1991-08-21",
    "height": "1.87 m",
    "club": "Aston Villa Football Club",
    "position": "extremo izquierdo",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Leandro%20Bacuna%20Back%20to%20your%20roots%20Groningen.jpg"
  },
  "tahith chong": {
    "qid": "Q24961840",
    "name": "Tahith Chong",
    "birthDate": "1999-12-04",
    "height": "1.85 m",
    "club": "",
    "position": "extremo",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Tahith%20Chong%20%2838487929362%29.jpg"
  },
  "kenji gorre": {
    "qid": "",
    "name": "Kenji Gorre",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "jearl margaritha": {
    "qid": "Q104780374",
    "name": "Jearl Margaritha",
    "birthDate": "2000-04-10",
    "height": "1.81 m",
    "club": "",
    "position": "",
    "photo": ""
  },
  "jurgen locadia": {
    "qid": "",
    "name": "Jurgen Locadia",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "jeremy antonisse": {
    "qid": "Q104531012",
    "name": "Jeremy Antonisse",
    "birthDate": "2002-03-29",
    "height": "1.84 m",
    "club": "",
    "position": "extremo izquierdo",
    "photo": ""
  },
  "gervane kastaneer": {
    "qid": "Q14517123",
    "name": "Gervane Kastaneer",
    "birthDate": "1996-06-09",
    "height": "1.76 m",
    "club": "1. FC Kaiserslautern",
    "position": "extremo izquierdo",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Gervane-kastaneer.jpg"
  },
  "sontje hansen": {
    "qid": "Q64224437",
    "name": "Sontje Hansen",
    "birthDate": "2002-05-18",
    "height": "1.68 m",
    "club": "Ajax de Ámsterdam",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/GAE%20-%20NEC%20-%2053493469456%20%28Sontje%20Hansen%29.jpg"
  },
  "matej kovar": {
    "qid": "",
    "name": "Matej Kovar",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "jindrich stanek": {
    "qid": "",
    "name": "Jindrich Stanek",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "ladislav krejci": {
    "qid": "Q111956399",
    "name": "Ladislav Krejci",
    "birthDate": "1913-02-07",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "vladimir coufal": {
    "qid": "",
    "name": "Vladimir Coufal",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "jaroslav zeleny": {
    "qid": "",
    "name": "Jaroslav Zeleny",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "tomas holes": {
    "qid": "",
    "name": "Tomas Holes",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "david zima": {
    "qid": "Q84312754",
    "name": "David Zima",
    "birthDate": "2000-11-08",
    "height": "1.90 m",
    "club": "SK Slavia Praga",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/David%20Zima%20CZE-KUW%202021-11-11%20%28cropped%29.jpg"
  },
  "michal sadilek": {
    "qid": "",
    "name": "Michal Sadilek",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "lukas provod": {
    "qid": "",
    "name": "Lukas Provod",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "lukas cerv": {
    "qid": "Q97312966",
    "name": "Lukáš Červ",
    "birthDate": "2001-04-10",
    "height": "1.82 m",
    "club": "FC Viktoria Plzeň",
    "position": "centrocampista",
    "photo": ""
  },
  "tomas soucek": {
    "qid": "",
    "name": "Tomas Soucek",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "pavel sulc": {
    "qid": "Q60791524",
    "name": "Pavel Sulc",
    "birthDate": "2000-12-29",
    "height": "1.77 m",
    "club": "FC Viktoria Plzeň",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Pavel%20%C5%A0ulc%20%28cropped%29.jpg"
  },
  "matej vydra": {
    "qid": "",
    "name": "Matej Vydra",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "vasil kusej": {
    "qid": "",
    "name": "Vasil Kusej",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "tomas chory": {
    "qid": "",
    "name": "Tomas Chory",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "vaclav cerny": {
    "qid": "Q107675731",
    "name": "Vaclav Cerny",
    "birthDate": "1946-01-01",
    "height": "",
    "club": "HC Bílí Tygři Liberec",
    "position": "",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Major%20Vaclav%20Cerny%20%281894-1942%29%20Pred%201940.gif"
  },
  "adam hlozek": {
    "qid": "",
    "name": "Adam Hlozek",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "patrik schick": {
    "qid": "Q16910257",
    "name": "Patrik Schick",
    "birthDate": "1996-01-24",
    "height": "1.87 m",
    "club": "Bayer 04 Leverkusen",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Patrik%20Schick%2020180601%20AUSCZE%203910%20%28cropped%29.jpg"
  },
  "hernan galindez": {
    "qid": "Q5742434",
    "name": "Hernán Galíndez",
    "birthDate": "1987-03-30",
    "height": "1.88 m",
    "club": "Club Atlético Huracán",
    "position": "guardameta",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/HERN%C3%81N%20GAL%C3%8DNDEZ.jpg"
  },
  "gonzalo valle": {
    "qid": "Q87119732",
    "name": "Gonzalo Valle",
    "birthDate": "1996-02-28",
    "height": "1.85 m",
    "club": "",
    "position": "",
    "photo": ""
  },
  "piero hincapie": {
    "qid": "Q101053044",
    "name": "Piero Hincapié",
    "birthDate": "2002-01-09",
    "height": "1.84 m",
    "club": "Arsenal Fútbol Club",
    "position": "defensor central",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Piero%20Hincapi%C3%A9%2C%202022-07-31%2C%20Saisoner%C3%B6ffnung%20Bayer%2004%2C%20Leverkusen%20%281%29.jpg"
  },
  "pervis estupinan": {
    "qid": "Q20994068",
    "name": "Pervis Estupiñán",
    "birthDate": "1998-01-21",
    "height": "1.75 m",
    "club": "A.C. Milan",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Pervis%20Estupi%C3%B1%C3%A1n%20WC2022.jpg"
  },
  "willian pacho": {
    "qid": "Q87767569",
    "name": "Willian Pacho",
    "birthDate": "2001-10-16",
    "height": "1.87 m",
    "club": "Paris Saint-Germain FC",
    "position": "defensor central",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Pacho%20asse%20psg%202425.png"
  },
  "angelo preciado": {
    "qid": "",
    "name": "Ángelo Preciado",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "joel ordonez": {
    "qid": "Q113390994",
    "name": "Joel Ordóñez",
    "birthDate": "2004-04-21",
    "height": "1.88 m",
    "club": "",
    "position": "",
    "photo": ""
  },
  "moises caicedo": {
    "qid": "",
    "name": "Moises Caicedo",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "alan franco": {
    "qid": "Q29005745",
    "name": "Alan Franco",
    "birthDate": "1996-10-11",
    "height": "1.83 m",
    "club": "Club Atlético Independiente",
    "position": "centrocampista",
    "photo": ""
  },
  "kendry paez": {
    "qid": "",
    "name": "Kendry Paez",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "pedro vite": {
    "qid": "Q105920173",
    "name": "Pedro Vite",
    "birthDate": "2002-03-09",
    "height": "1.70 m",
    "club": "",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Inter%20Miami%20CF%203-1%20UNAM%20%286%20August%202025%29%2004%20%28cropped%29.jpg"
  },
  "john veboah": {
    "qid": "",
    "name": "John Veboah",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "leonardo campana": {
    "qid": "Q30899761",
    "name": "Leonardo Campana",
    "birthDate": "2000-07-24",
    "height": "1.88 m",
    "club": "Wolverhampton Wanderers F.C.",
    "position": "atacante",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Leo%20Campana%20Revolution%20Nashville%206.25.25-155%20%28cropped%29.jpg"
  },
  "gonzalo plata": {
    "qid": "Q60842120",
    "name": "Gonzalo Plata",
    "birthDate": "2000-11-01",
    "height": "1.78 m",
    "club": "Independiente del Valle",
    "position": "centrocampista",
    "photo": ""
  },
  "nilson angulo": {
    "qid": "Q109301509",
    "name": "Nilson Angulo",
    "birthDate": "2003-06-19",
    "height": "1.82 m",
    "club": "",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Nilson%20Angulo%20RSC%20Anderlecht%202025.jpg"
  },
  "alan minda": {
    "qid": "Q116054089",
    "name": "Alan Minda",
    "birthDate": "2003-05-14",
    "height": "1.70 m",
    "club": "Círculo de Brujas",
    "position": "centrocampista",
    "photo": ""
  },
  "kevin rodriguez": {
    "qid": "Q62018984",
    "name": "Kevin Rodriguez",
    "birthDate": "1996-09-25",
    "height": "",
    "club": "Northern Illinois Huskies men's soccer",
    "position": "centrocampista",
    "photo": ""
  },
  "enner valencia": {
    "qid": "Q2843080",
    "name": "Enner Valencia",
    "birthDate": "1989-11-04",
    "height": "1.74 m",
    "club": "Club de Fútbol Pachuca",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Enner%20Valencia%2C%20January%202016.jpg"
  },
  "mohamed el shenawy": {
    "qid": "",
    "name": "Mohamed El Shenawy",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "mohamed hany": {
    "qid": "Q18705249",
    "name": "Mohamed Hany",
    "birthDate": "1996-01-25",
    "height": "1.75 m",
    "club": "Al Ahly SC",
    "position": "lateral",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Mohamed%20Hany%20in%202021%20FIFA%20Club%20World%20Cup.jpg"
  },
  "mohamed hamdy": {
    "qid": "Q56756278",
    "name": "Mohamed Hamdy",
    "birthDate": "2003-01-01",
    "height": "1.81 m",
    "club": "",
    "position": "",
    "photo": ""
  },
  "yasser ibrahim": {
    "qid": "Q17386078",
    "name": "Yasser Ibrahim",
    "birthDate": "1993-02-10",
    "height": "1.85 m",
    "club": "El Mansoura SC",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Yasser%20Ibrahim%20in%20FIFA%20Club%20World%20Cup.jpg"
  },
  "khaled sobhi": {
    "qid": "Q136095272",
    "name": "Khaled Sobhi",
    "birthDate": "1995-05-04",
    "height": "",
    "club": "",
    "position": "defensor central",
    "photo": ""
  },
  "ramy rabia": {
    "qid": "Q501274",
    "name": "Ramy Rabia",
    "birthDate": "1993-05-20",
    "height": "1.56 m",
    "club": "Al Ahly SC",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/RamiRabea2020.jpg"
  },
  "hossam abdelmaguid": {
    "qid": "Q98937753",
    "name": "Hossam Abdul-Majeed",
    "birthDate": "2001-04-30",
    "height": "1.93 m",
    "club": "",
    "position": "",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Hossam%20Abdel%20Maguid.jpg"
  },
  "ahmed fatouh": {
    "qid": "",
    "name": "Ahmed Fatouh",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "marwan attia": {
    "qid": "Q116621640",
    "name": "Marwan Attia",
    "birthDate": "1998-08-12",
    "height": "1.76 m",
    "club": "",
    "position": "",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Marwan%20Attia.jpg"
  },
  "zizo": {
    "qid": "Q19941199",
    "name": "Zizo",
    "birthDate": "1986-01-01",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "hamdy fathy": {
    "qid": "",
    "name": "Hamdy Fathy",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "mohamed lasheen": {
    "qid": "",
    "name": "Mohamed Lasheen",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "emam ashour": {
    "qid": "Q64681287",
    "name": "Emam Ashour",
    "birthDate": "1998-02-20",
    "height": "1.82 m",
    "club": "Al Ahly SC",
    "position": "delantero centro",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Emam%20Ashour%20%28cropped%29.jpg"
  },
  "osama faisal": {
    "qid": "Q98400519",
    "name": "Osama Faisal",
    "birthDate": "2001-01-01",
    "height": "1.85 m",
    "club": "",
    "position": "",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Egypt%20vs.%20Morocco%202024%20Summer%20Olympics%20men%27s%20association%20football%2002%20%28cropped1%29.jpg"
  },
  "mohamed salah": {
    "qid": "Q50365713",
    "name": "Mohamed Salah",
    "birthDate": "1994-11-07",
    "height": "1.75 m",
    "club": "DSK Shivajians F.C.",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Mohamed%20Salah%202018.jpg"
  },
  "mostafa mohamed": {
    "qid": "Q6916863",
    "name": "Mostafa Mohamed",
    "birthDate": "1985-08-18",
    "height": "1.66 m",
    "club": "",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Mostafa%20Hassan%20Mohamed.JPG"
  },
  "trezeguet": {
    "qid": "",
    "name": "Trezeguet",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "omar marmoush": {
    "qid": "Q28065104",
    "name": "Omar Marmoush",
    "birthDate": "1999-02-07",
    "height": "1.83 m",
    "club": "Manchester City Football Club",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/OmarMarmoush.png"
  },
  "jordan pickford": {
    "qid": "Q13014035",
    "name": "Jordan Pickford",
    "birthDate": "1994-03-07",
    "height": "1.85 m",
    "club": "Everton F.C.",
    "position": "guardameta",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Jordan%20Pickford%202022-07-16%201.jpg"
  },
  "john stones": {
    "qid": "Q2025900",
    "name": "John Stones",
    "birthDate": "1994-05-28",
    "height": "1.88 m",
    "club": "Manchester City Football Club",
    "position": "defensor central",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/1%20john%20stones%202015%20%28cropped%29.jpg"
  },
  "marc guehi": {
    "qid": "Q44737396",
    "name": "Marc Guéhi",
    "birthDate": "2000-07-13",
    "height": "1.82 m",
    "club": "Manchester City Football Club",
    "position": "defensor central",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Marc%20Guehi%20December%202018.jpg"
  },
  "ezri konsa": {
    "qid": "Q27063854",
    "name": "Ezri Konsa",
    "birthDate": "1997-10-23",
    "height": "1.83 m",
    "club": "Aston Villa Football Club",
    "position": "defensor central",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Ezri%20Konsa.jpg"
  },
  "trent alexander-arnold": {
    "qid": "Q27569376",
    "name": "Trent Alexander-Arnold",
    "birthDate": "1998-10-07",
    "height": "1.75 m",
    "club": "Real Madrid Club de Fútbol",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Trent%20Alexander-Arnold%202018%20%28cropped%29.jpg"
  },
  "reece james": {
    "qid": "Q16235475",
    "name": "Reece James",
    "birthDate": "1993-11-07",
    "height": "1.78 m",
    "club": "Blackburn Rovers Football Club",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Reece%20James%202018.jpg"
  },
  "dan burn": {
    "qid": "Q5213217",
    "name": "Dan Burn",
    "birthDate": "1992-05-09",
    "height": "1.98 m",
    "club": "Newcastle United Football Club",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Dan%20Burn%20BCFC%202013.jpg"
  },
  "jordan henderson": {
    "qid": "Q273715",
    "name": "Jordan Henderson",
    "birthDate": "1990-06-17",
    "height": "1.82 m",
    "club": "Brentford Football Club",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/2022-07-21%20Fu%C3%9Fball%2C%20M%C3%A4nner%2CFreundschaftsspiel%2C%20RB%20Leipzig%20-%20FC%20Liverpool%201DX%202238%20by%20Stepro.jpg"
  },
  "declan rice": {
    "qid": "Q30007142",
    "name": "Declan Rice",
    "birthDate": "1999-01-14",
    "height": "1.88 m",
    "club": "Arsenal Fútbol Club",
    "position": "mediocampista defensivo",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/1%20declan%20rice%20arsenal%202025%20%28cropped%29.jpg"
  },
  "jude bellingham": {
    "qid": "Q66241169",
    "name": "Jude Bellingham",
    "birthDate": "2003-06-29",
    "height": "1.86 m",
    "club": "Real Madrid Club de Fútbol",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/25th%20Laureus%20World%20Sports%20Awards%20-%20Red%20Carpet%20-%20Jude%20Bellingham%20-%20240422%20190551-2%20%28cropped%29.jpg"
  },
  "cole palmer": {
    "qid": "Q99760796",
    "name": "Cole Palmer",
    "birthDate": "2002-05-06",
    "height": "1.85 m",
    "club": "Chelsea Football Club",
    "position": "attacking midfielder",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Cole%20Palmer%202025%20FIFA%20Club%20World%20Cup%20Final.jpg"
  },
  "morgan rogers": {
    "qid": "Q61598452",
    "name": "Morgan Rogers",
    "birthDate": "2002-07-26",
    "height": "1.89 m",
    "club": "Aston Villa Football Club",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/St.%20Louis%20City%20vs%20Aston%20Villa%20%28Jul%202025%29%2018.jpg"
  },
  "anthony gordon": {
    "qid": "Q45179405",
    "name": "Anthony Gordon",
    "birthDate": "2001-02-24",
    "height": "1.83 m",
    "club": "Newcastle United Football Club",
    "position": "extremo",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Gordon%20in%202024.jpg"
  },
  "phil foden": {
    "qid": "Q30729096",
    "name": "Phil Foden",
    "birthDate": "2000-05-28",
    "height": "1.71 m",
    "club": "Manchester City Football Club",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/2023-10-04%20Fu%C3%9Fball%2C%20M%C3%A4nner%2C%20UEFA%20Champions%20League%2C%20RB%20Leipzig%20-%20Manchester%20City%20FC%201DX%202613%2C%20Phil%20Foden.jpg"
  },
  "bukayo saka": {
    "qid": "Q59306386",
    "name": "Bukayo Saka",
    "birthDate": "2001-09-05",
    "height": "1.78 m",
    "club": "Arsenal Fútbol Club",
    "position": "extremo",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/1%20bukayo%20saka%20arsenal%202025%20%28cropped%29.jpg"
  },
  "harry kane": {
    "qid": "Q969725",
    "name": "Harry Kane",
    "birthDate": "1993-07-28",
    "height": "1.88 m",
    "club": "Detroit Tigers",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Harry%20Kane%202023.jpg"
  },
  "marcus rashford": {
    "qid": "Q22951255",
    "name": "Marcus Rashford",
    "birthDate": "1997-10-31",
    "height": "1.88 m",
    "club": "Fútbol Club Barcelona",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Marcus%20Rashford%2C%20FWC%202018%20-%20Round%20of%2016%20-%20COL%20v%20ENG%20-%20Photo%20106%20%28cropped%29.jpg"
  },
  "ollie watkins": {
    "qid": "Q16911979",
    "name": "Ollie Watkins",
    "birthDate": "1995-12-30",
    "height": "1.80 m",
    "club": "",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Manchester%20United%20v%20Aston%20Villa%2C%2025%20September%202021%20%2817%29%20%28cropped%29.jpg"
  },
  "unai simon": {
    "qid": "",
    "name": "Unai Simon",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "robin le normand": {
    "qid": "Q27469970",
    "name": "Robin Le Normand",
    "birthDate": "1996-11-11",
    "height": "1.87 m",
    "club": "Atlético de Madrid",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Le%20Normand%20%28cropped%29.jpg"
  },
  "aymeric laporte": {
    "qid": "Q3855340",
    "name": "Aymeric Laporte",
    "birthDate": "1994-05-27",
    "height": "1.91 m",
    "club": "Athletic Club",
    "position": "defensor central",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Aymeric%20Laporte%202023%20%28cropped%29%202.jpg"
  },
  "dean huijsen": {
    "qid": "Q112184628",
    "name": "Dean Huijsen",
    "birthDate": "2005-04-14",
    "height": "1.97 m",
    "club": "Real Madrid Club de Fútbol",
    "position": "defensor central",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Dean%20Huijsen%202024.jpg"
  },
  "pedro porro": {
    "qid": "",
    "name": "Pedro Porro",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "dani carvajal": {
    "qid": "Q127452",
    "name": "Daniel Carvajal",
    "birthDate": "1992-01-11",
    "height": "1.68 m",
    "club": "Real Madrid Club de Fútbol",
    "position": "",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/UEFA%20EURO%20qualifiers%20Sweden%20vs%20Spain%2020191015%20Dani%20Carvajal%2010%20%28cropped%29.jpg"
  },
  "marc cucurella": {
    "qid": "Q22082505",
    "name": "Marc Cucurella",
    "birthDate": "1998-07-22",
    "height": "1.69 m",
    "club": "Chelsea Football Club",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Spain%20football%20team%20in%20202%20%28Marc%20Cucurella%29.jpg"
  },
  "martin zubimendi": {
    "qid": "Q63384759",
    "name": "Martín Zubimendi",
    "birthDate": "1999-02-02",
    "height": "1.81 m",
    "club": "Arsenal Fútbol Club",
    "position": "mediocentro organizador",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/1%20Mart%C3%ADn%20Zubimendi%20arsenal%202025%20%28cropped%29.jpg"
  },
  "rodri": {
    "qid": "Q2411076",
    "name": "Rodrigo Ríos Lozano",
    "birthDate": "1990-06-06",
    "height": "1.74 m",
    "club": "Fútbol Club Barcelona",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/BCFC%20sign%20Rodri.jpg"
  },
  "pedri": {
    "qid": "Q66606355",
    "name": "Pedri González",
    "birthDate": "2002-11-25",
    "height": "1.74 m",
    "club": "Fútbol Club Barcelona",
    "position": "centerhalf",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Pedri.jpg"
  },
  "fabian ruiz": {
    "qid": "",
    "name": "Fabian Ruiz",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "mikel merino": {
    "qid": "Q17612631",
    "name": "Mikel Merino",
    "birthDate": "1996-06-22",
    "height": "1.88 m",
    "club": "Arsenal Fútbol Club",
    "position": "mediocampista defensivo",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/1%20mikel%20merino%20arsenal%202025%20%28cropped%29.jpg"
  },
  "lamine yamal": {
    "qid": "Q113704154",
    "name": "Lamine Yamal",
    "birthDate": "2007-07-13",
    "height": "1.80 m",
    "club": "Fútbol Club Barcelona",
    "position": "extremo",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Lamine%20Yamal%20in%202025%20%28cropped2%29.jpg"
  },
  "dani olmo": {
    "qid": "Q19560313",
    "name": "Dani Olmo",
    "birthDate": "1998-05-07",
    "height": "1.76 m",
    "club": "Fútbol Club Barcelona",
    "position": "attacking midfielder",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Dani%20Olmo%202022.jpg"
  },
  "nico williams": {
    "qid": "Q104414736",
    "name": "Nico Williams",
    "birthDate": "2002-07-12",
    "height": "1.81 m",
    "club": "Athletic Club",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Spain%20football%20team%20in%202025%20%28Nico%20Williams%29.jpg"
  },
  "ferran torres": {
    "qid": "Q44297797",
    "name": "Ferran Torres",
    "birthDate": "2000-02-29",
    "height": "1.84 m",
    "club": "Fútbol Club Barcelona",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Ferran%20Torres%202019.png"
  },
  "alvaro morata": {
    "qid": "Q48770",
    "name": "Álvaro Morata",
    "birthDate": "1992-10-23",
    "height": "1.87 m",
    "club": "A.C. Milan",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/%C3%81lvaro%20Morata.jpg"
  },
  "mikel oyarzabal": {
    "qid": "Q21195147",
    "name": "Mikel Oyarzabal",
    "birthDate": "1997-04-21",
    "height": "1.81 m",
    "club": "Real Sociedad de Fútbol",
    "position": "media punta",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Oyarzabal%20Spain%20football%20team%20in%202025%20%28cropped%29.jpg"
  },
  "mike maignan": {
    "qid": "Q17274709",
    "name": "Mike Maignan",
    "birthDate": "1995-07-03",
    "height": "1.91 m",
    "club": "",
    "position": "guardameta",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Mike%20Maignan%202022%20Salzburg%20vs%20AC%20Milan%202022-09-06.jpg"
  },
  "theo hernandez": {
    "qid": "",
    "name": "Theo Hernandez",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "william saliba": {
    "qid": "Q56868118",
    "name": "William Saliba",
    "birthDate": "2001-03-24",
    "height": "1.92 m",
    "club": "Arsenal Fútbol Club",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/1%20william%20saliba%20arsenal%202025%20%28cropped%29.jpg"
  },
  "jules kounde": {
    "qid": "",
    "name": "Jules Kounde",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "ibrahima konate": {
    "qid": "Q91906568",
    "name": "Ibrahima Konate",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "dayot upamecano": {
    "qid": "Q20723878",
    "name": "Dayot upamecano",
    "birthDate": "1998-10-27",
    "height": "1.86 m",
    "club": "F. C. Bayern Múnich",
    "position": "defensor central",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/2022-07-30%20Fu%C3%9Fball%2C%20M%C3%A4nner%2C%20DFL-Supercup%2C%20RB%20Leipzig%20-%20FC%20Bayern%20M%C3%BCnchen%201DX%203244%20by%20Stepro%20%28cropped%29.jpg"
  },
  "lucas digne": {
    "qid": "Q72648",
    "name": "Lucas Digne",
    "birthDate": "1993-07-20",
    "height": "1.78 m",
    "club": "Aston Villa Football Club",
    "position": "lateral",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Lucas%20Digne%20Everton%20%28cropped%29.jpg"
  },
  "aurelien tchouameni": {
    "qid": "Q46951844",
    "name": "Aurélien Tchouaméni",
    "birthDate": "2000-01-27",
    "height": "1.87 m",
    "club": "",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Aur%C3%A9lien%20Tchouam%C3%A9ni.jpg"
  },
  "eduardo camavinga": {
    "qid": "Q62960177",
    "name": "Eduardo Camavinga",
    "birthDate": "2002-11-10",
    "height": "1.82 m",
    "club": "Real Madrid Club de Fútbol",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Ofrenda%20de%20la%20Liga%20y%20la%20Champions-13-L.Mill%C3%A1n%20%2852109790215%29%20%28cropped%29.jpg"
  },
  "manu kone": {
    "qid": "",
    "name": "Manu Kone",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "adrien rabiot": {
    "qid": "Q18962",
    "name": "Adrien Rabiot",
    "birthDate": "1995-04-03",
    "height": "1.91 m",
    "club": "A.C. Milan",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Rabiot%20asse%20om%202425.png"
  },
  "michael olise": {
    "qid": "Q62050484",
    "name": "Michael Olise",
    "birthDate": "2001-12-12",
    "height": "1.84 m",
    "club": "F. C. Bayern Múnich",
    "position": "extremo",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/FC%20RB%20Salzburg%20gegen%20FC%20Bayern%20M%C3%BCnchen%20%282026-01-06%20Testspiel%29%2010.jpg"
  },
  "ousmane dembele": {
    "qid": "",
    "name": "Ousmane Dembele",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "bradley barcola": {
    "qid": "Q99670930",
    "name": "Bradley Barcola",
    "birthDate": "2002-09-02",
    "height": "1.82 m",
    "club": "Paris Saint-Germain FC",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Bradley%20Barcola%20vs%20MHSC%207%20May%202023.png"
  },
  "desire doue": {
    "qid": "Q112170256",
    "name": "Désiré Doué",
    "birthDate": "2005-06-03",
    "height": "1.81 m",
    "club": "Paris Saint-Germain FC",
    "position": "extremo",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Doue%20asse%20psg%202425.png"
  },
  "kingsley coman": {
    "qid": "Q6413296",
    "name": "Kingsley Coman",
    "birthDate": "1996-06-13",
    "height": "1.80 m",
    "club": "Al-Nassr",
    "position": "extremo",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Kingsley%20Coman%20%282019%29%20%28cropped%29.jpg"
  },
  "hugo ekitike": {
    "qid": "Q100602910",
    "name": "Hugo Ekitike",
    "birthDate": "2002-06-20",
    "height": "1.90 m",
    "club": "Liverpool Fútbol Club",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Hugo%20Ekitike%20%28PSG%202023%29.jpg"
  },
  "kylian mbappe": {
    "qid": "",
    "name": "Kylian Mbappe",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "marc-andre ter stegen": {
    "qid": "Q160472",
    "name": "Marc-André ter Stegen",
    "birthDate": "1992-04-30",
    "height": "1.87 m",
    "club": "Fútbol Club Barcelona",
    "position": "guardameta",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Marc-Andre%20Ter%20Stegen%20ACCI%20FCBARCELONA%20Turisme%20Catalunya%20gira%20pretemporada%20CATPRESS.jpg"
  },
  "jonathan tah": {
    "qid": "Q14640027",
    "name": "Jonathan Tah",
    "birthDate": "1996-02-11",
    "height": "1.93 m",
    "club": "F. C. Bayern Múnich",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Jonathan%20Tah%202019.jpg"
  },
  "david raum": {
    "qid": "Q28540571",
    "name": "David Raum",
    "birthDate": "1998-04-22",
    "height": "1.80 m",
    "club": "RB Leipzig",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/2023-10-04%20Fu%C3%9Fball%2C%20M%C3%A4nner%2C%20UEFA%20Champions%20League%2C%20RB%20Leipzig%20-%20Manchester%20City%20FC%201DX%202658.jpg"
  },
  "nico schlotterbeck": {
    "qid": "Q62015814",
    "name": "Nico Schlotterbeck",
    "birthDate": "1999-12-01",
    "height": "1.91 m",
    "club": "",
    "position": "defensor central",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/2023-08-12%20TSV%20Schott%20Mainz%20gegen%20Borussia%20Dortmund%20%28DFB-Pokal%202023-24%29%20by%20Sandro%20Halank%E2%80%93069.jpg"
  },
  "antonio rudiger": {
    "qid": "Q96755",
    "name": "Antonio Rüdiger",
    "birthDate": "1993-03-03",
    "height": "1.90 m",
    "club": "",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/20180602%20FIFA%20Friendly%20Match%20Austria%20vs.%20Germany%20Antonio%20R%C3%BCdiger%20850%200711.jpg"
  },
  "waldemar anton": {
    "qid": "Q23559699",
    "name": "Waldemar Anton",
    "birthDate": "1996-07-20",
    "height": "1.82 m",
    "club": "Hannover 96",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Waldemar%20anton%20%28cropped%29.jpg"
  },
  "ridle baku": {
    "qid": "Q46126025",
    "name": "Bote Baku",
    "birthDate": "1998-04-08",
    "height": "1.76 m",
    "club": "1. FSV Mainz 05",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Ridle%20Baku%202020-09-20%20Fu%C3%9Fball%2C%20M%C3%A4nner%2C%201.%20Bundesliga%2C%20RB%20Leipzig%20-%201.%20FSV%20Mainz%2005%201DX%201394%20by%20Stepro%20%28cropped%29.jpg"
  },
  "maximilian mittelstadt": {
    "qid": "",
    "name": "Maximilian Mittelstadt",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "joshua kimmich": {
    "qid": "Q13865408",
    "name": "Joshua Kimmich",
    "birthDate": "1995-02-08",
    "height": "1.77 m",
    "club": "F. C. Bayern Múnich",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/FC%20Red%20Bull%20Salzburg%20gegen%20Bayern%20M%C3%BCnchen%20%282025-01-06%20Testspiel%29%2030.jpg"
  },
  "florian wirtz": {
    "qid": "Q94699949",
    "name": "Florian Wirtz",
    "birthDate": "2003-05-03",
    "height": "1.76 m",
    "club": "Liverpool Fútbol Club",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Florian%20Wirtz%2004012026%20%283%29%20%28extracted%29.jpg"
  },
  "felix nmecha": {
    "qid": "Q60889488",
    "name": "Felix Nmecha",
    "birthDate": "2000-10-10",
    "height": "1.90 m",
    "club": "Manchester City Football Club",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Felix%20Nmecha%202021.jpg"
  },
  "leon goretzka": {
    "qid": "Q520721",
    "name": "Leon Goretzka",
    "birthDate": "1995-02-06",
    "height": "1.89 m",
    "club": "F. C. Bayern Múnich",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/2019-06-11%20Fu%C3%9Fball%2C%20M%C3%A4nner%2C%20L%C3%A4nderspiel%2C%20Deutschland-Estland%20StP%202074%20LR10%20by%20Stepro%20%28cropped%29.jpg"
  },
  "jamal musiala": {
    "qid": "Q96072055",
    "name": "Jamal Musiala",
    "birthDate": "2003-02-26",
    "height": "1.84 m",
    "club": "",
    "position": "attacking midfielder",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Jamal%20Musiala%202022%20%28cropped%29.jpg"
  },
  "serge gnabry": {
    "qid": "Q59490",
    "name": "Serge Gnabry",
    "birthDate": "1995-07-14",
    "height": "1.76 m",
    "club": "",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/2019-06-11%20Fu%C3%9Fball%2C%20M%C3%A4nner%2C%20L%C3%A4nderspiel%2C%20Deutschland-Estland%20StP%202075%20LR10%20by%20Stepro.jpg"
  },
  "kai havertz": {
    "qid": "Q27310755",
    "name": "Kai Havertz",
    "birthDate": "1999-06-11",
    "height": "1.93 m",
    "club": "Arsenal Fútbol Club",
    "position": "attacking midfielder",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/2019-06-11%20Fu%C3%9Fball%2C%20M%C3%A4nner%2C%20L%C3%A4nderspiel%2C%20Deutschland-Estland%20StP%202059%20LR10%20by%20Stepro.jpg"
  },
  "leroy sane": {
    "qid": "",
    "name": "Leroy Sane",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "karim adeyemi": {
    "qid": "",
    "name": "Karim Adeyemi",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "nick woltemade": {
    "qid": "",
    "name": "Nick Woltemade",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "lawrence ati zigi": {
    "qid": "",
    "name": "Lawrence Ati Zigi",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "tariq lamptey": {
    "qid": "Q80197171",
    "name": "Tariq Lamptey",
    "birthDate": "2000-09-30",
    "height": "1.63 m",
    "club": "",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Tariq%20Lamptey%202022.jpg"
  },
  "mohammed salisu": {
    "qid": "Q59915117",
    "name": "Mohammed Salisu",
    "birthDate": "1999-04-17",
    "height": "1.91 m",
    "club": "Real Valladolid Club de Fútbol",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Salisu%20asse%20asm%202425.png"
  },
  "alidu seidu": {
    "qid": "Q102426988",
    "name": "Alidu Seidu",
    "birthDate": "2000-06-04",
    "height": "1.73 m",
    "club": "",
    "position": "defensa",
    "photo": ""
  },
  "alexander djiku": {
    "qid": "Q17385842",
    "name": "Alexander Djiku",
    "birthDate": "1994-08-09",
    "height": "1.82 m",
    "club": "FC Spartak de Moscú",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Ghana%20%281%29%20%28cropped%20Alexander%20Djiku%29.jpg"
  },
  "gideon mensah": {
    "qid": "Q101108371",
    "name": "Gideon Mensah",
    "birthDate": "2000-10-09",
    "height": "1.83 m",
    "club": "FC Red Bull Salzburgo",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/FC%20Liefering%20gegen%20SC%20Wiener%20Neustadt%20%2823.%20September%202016%29%2005.jpg"
  },
  "caleb yirenkyi": {
    "qid": "Q130337999",
    "name": "Caleb Yirenkyi",
    "birthDate": "2006-01-15",
    "height": "1.82 m",
    "club": "",
    "position": "",
    "photo": ""
  },
  "abdul issahaku fatawu": {
    "qid": "",
    "name": "Abdul Issahaku Fatawu",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "thomas partey": {
    "qid": "Q15963873",
    "name": "Yakubu Partey",
    "birthDate": "1993-06-13",
    "height": "1.85 m",
    "club": "Villarreal Club de Fútbol",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/ATL-Madrid-Lokomotiv001-Thomas%20%28cropped%29.jpg"
  },
  "salis abdul samed": {
    "qid": "Q68110291",
    "name": "Salis Abdul Samed",
    "birthDate": "2000-03-26",
    "height": "1.79 m",
    "club": "Racing Club de Lens",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Lens%20-%20Reims%20%2812-05-2023%29%2045.jpg"
  },
  "kamaldeen sulemana": {
    "qid": "Q86269576",
    "name": "Kamal Deen Sulemana",
    "birthDate": "2002-02-15",
    "height": "1.74 m",
    "club": "FC Nordsjælland",
    "position": "extremo izquierdo",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Kamaldeen%20Sulemana%20%28cropped%29.jpg"
  },
  "mohammed kudus": {
    "qid": "Q56877051",
    "name": "Mohammed Kudus",
    "birthDate": "2000-08-02",
    "height": "1.75 m",
    "club": "Tottenham Hotspur Football Club",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Mohammed%20Kudus%2014092024.jpg"
  },
  "inaki williams": {
    "qid": "",
    "name": "Inaki Williams",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "jordan ayew": {
    "qid": "Q367861",
    "name": "Jordan Ayew",
    "birthDate": "1991-09-11",
    "height": "1.82 m",
    "club": "Leicester City Football Club",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/20150331%20Mali%20vs%20Ghana%20023.jpg"
  },
  "andrew ayew": {
    "qid": "",
    "name": "Andrew Ayew",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "joseph paintsil": {
    "qid": "Q38367203",
    "name": "Joseph Paintsil",
    "birthDate": "1998-02-01",
    "height": "1.70 m",
    "club": "KRC Genk",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Joseph%20Paintsil.2020.jpg"
  },
  "osman bukari": {
    "qid": "Q55997480",
    "name": "Osman Bukari",
    "birthDate": "1998-12-13",
    "height": "1.70 m",
    "club": "Widzew Łódź",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Osman%20Bukari.jpg"
  },
  "antoine semenyo": {
    "qid": "Q52990659",
    "name": "Antoine Semenyo",
    "birthDate": "2010-01-07",
    "height": "1.85 m",
    "club": "AFC Bournemouth",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Antoine%20Semenyo%202026.png"
  },
  "johny placide": {
    "qid": "",
    "name": "Johny Placide",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "carlens arcus": {
    "qid": "Q20740578",
    "name": "Carlens Arcus",
    "birthDate": "1996-06-28",
    "height": "1.80 m",
    "club": "Espérance Sportive Troyes Aube Champagne",
    "position": "lateral",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Lens%20B%20-%20Troyes%20B%20%2813-02-2016%29%2048.JPG"
  },
  "martin experience": {
    "qid": "",
    "name": "Martin Expérience",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "jean-kevin duverne": {
    "qid": "",
    "name": "Jean-Kevin Duverne",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "ricardo ade": {
    "qid": "Q28801770",
    "name": "Ricardo Adé",
    "birthDate": "1990-05-21",
    "height": "1.90 m",
    "club": "Club Deportivo Magallanes",
    "position": "centrocampista",
    "photo": ""
  },
  "duke lacroix": {
    "qid": "Q21621771",
    "name": "Duke Lacroix",
    "birthDate": "1993-10-14",
    "height": "",
    "club": "Charlotte Independence",
    "position": "defensa",
    "photo": ""
  },
  "garven metusala": {
    "qid": "Q107370468",
    "name": "Garven Metusala",
    "birthDate": "1999-12-31",
    "height": "1.85 m",
    "club": "",
    "position": "",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Garven%20Metusala.jpg"
  },
  "hannes delcroix": {
    "qid": "Q56011432",
    "name": "Hannes Delcroix",
    "birthDate": "1999-02-28",
    "height": "1.85 m",
    "club": "Royal Sporting Club Anderlecht",
    "position": "defensor central",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/FC%20Red%20Bull%20Salzburg%20gegen%20RSC%20Anderlecht%20%28Testspiel%207.%20Juli%202017%29%2050.jpg"
  },
  "leverton pierre": {
    "qid": "Q49004376",
    "name": "Leverton Pierre",
    "birthDate": "1998-03-09",
    "height": "1.81 m",
    "club": "Athletic Club Ajaccien",
    "position": "delantero",
    "photo": ""
  },
  "danley jean jacques": {
    "qid": "Q113393306",
    "name": "Danley Jean Jacques",
    "birthDate": "2000-05-20",
    "height": "1.80 m",
    "club": "",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Danley%20Jean%20Jacques%20Philadelphia%20Union%20New%20York%20City%20FC%20Nov%2023%202025-062%20%28cropped%29.jpg"
  },
  "jean-ricner bellegarde": {
    "qid": "Q26251607",
    "name": "Jeanricner Bellegarde",
    "birthDate": "1998-06-27",
    "height": "1.72 m",
    "club": "Racing Club de Lens",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Lens%20B%20-%20AC%20Amiens%20%2812-09-2015%29%2064.JPG"
  },
  "christopher attys": {
    "qid": "Q108601088",
    "name": "Christopher Attys",
    "birthDate": "2001-03-13",
    "height": "1.86 m",
    "club": "",
    "position": "",
    "photo": ""
  },
  "derrick etienne jr": {
    "qid": "",
    "name": "Derrick Etienne Jr",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "josue casimir": {
    "qid": "",
    "name": "Josue Casimir",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "ruben providence": {
    "qid": "Q114355328",
    "name": "Ruben Providence",
    "birthDate": "2001-07-07",
    "height": "1.78 m",
    "club": "",
    "position": "",
    "photo": ""
  },
  "duckens nazon": {
    "qid": "Q16916422",
    "name": "Duckens Nazon",
    "birthDate": "1994-04-07",
    "height": "1.81 m",
    "club": "Stade Lavallois Mayenne Football Club",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/2025%20Iran%20Football%20Premier%20League%20Esteghlal%20and%20Zob%20Ahan%20football%20match%203%20Mehr%20%28cropped%29.jpg"
  },
  "louicius deedson": {
    "qid": "",
    "name": "Louicius Deedson",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "frantzdy pierrot": {
    "qid": "Q55820193",
    "name": "Frantzdy Pierrot",
    "birthDate": "1995-03-29",
    "height": "1.94 m",
    "club": "AEK Atenas Fútbol Club",
    "position": "delantero",
    "photo": ""
  },
  "alireza beiranvand": {
    "qid": "Q4726869",
    "name": "Alireza Beiranvand",
    "birthDate": "1992-09-22",
    "height": "1.96 m",
    "club": "Persepolis Football Club",
    "position": "guardameta",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Alireza%20Beiranvand%20-%202018%20FIFA%20World%20Cup.jpg"
  },
  "morteza pouraliganji": {
    "qid": "Q6914597",
    "name": "Morteza Pouraliganji",
    "birthDate": "1992-04-19",
    "height": "1.84 m",
    "club": "",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Morteza%20Pouraliganji%20at%20IK%20Airport.jpg"
  },
  "ehsan hajsafi": {
    "qid": "Q2762113",
    "name": "Ehsan Hajsafi",
    "birthDate": "1990-02-25",
    "height": "1.76 m",
    "club": "Sepahan FC",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Ehsan%20Hajsafi%202018.jpg"
  },
  "milad mohammadi": {
    "qid": "Q60784976",
    "name": "Milad Mohammadi",
    "birthDate": "1986-01-01",
    "height": "1.78 m",
    "club": "Ajmat Grozni",
    "position": "extremo izquierdo",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Milad%20Mohammadi.jpg"
  },
  "shojae khalilzadeh": {
    "qid": "",
    "name": "Shojae Khalilzadeh",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "ramin rezaeian": {
    "qid": "",
    "name": "Ramin Rezaeian",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "hossein kanaani": {
    "qid": "",
    "name": "Hossein Kanaani",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "sadegh moharrami": {
    "qid": "Q17523897",
    "name": "Sadegh Moharrami",
    "birthDate": "1996-03-01",
    "height": "1.74 m",
    "club": "Malavan FC",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Sadegh%20Moharrami%20ACL%202018.jpg"
  },
  "saleh hardani": {
    "qid": "Q70226579",
    "name": "Saleh Hardani",
    "birthDate": "1996-09-14",
    "height": "1.76 m",
    "club": "Foolad FC",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Esteghlal%20Celebrate%20IPL%20Title%20Win%20at%20Azadi%20Stadium%20-%20020.jpg"
  },
  "saeed ezatolahi": {
    "qid": "",
    "name": "Saeed Ezatolahi",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "saman ghoddos": {
    "qid": "Q16632974",
    "name": "Saman Ghoddos",
    "birthDate": "1993-09-06",
    "height": "1.76 m",
    "club": "Brentford Football Club",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Saman%20Ghoddos%20-%202018%20FIFA%20World%20Cup.jpg"
  },
  "omid noorafkan": {
    "qid": "Q17399810",
    "name": "Omid Noorafkan",
    "birthDate": "1997-04-09",
    "height": "1.82 m",
    "club": "Esteghlal FC",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Omid%20Norafkan.jpg"
  },
  "roozbeh cheshmi": {
    "qid": "",
    "name": "Roozbeh Cheshmi",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "mohammad mohebi": {
    "qid": "Q65515898",
    "name": "Mohammad Mohebi",
    "birthDate": "1998-12-20",
    "height": "1.76 m",
    "club": "Clube Desportivo Santa Clara",
    "position": "alero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Mohammad%20Mohebi%2C%20Esteghlal%20FC%20vs%20Gol%20Gohar%20Sirjan%20FC%2C%206%20March%202023.jpg"
  },
  "sardar azmoun": {
    "qid": "Q5298679",
    "name": "Sardar Azmoun",
    "birthDate": "1995-01-01",
    "height": "1.86 m",
    "club": "Al-Ahli Football Club",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/20%20SARDAR%20AZMOUN%20IRN%2003%20%28cropped%29.jpg"
  },
  "mehdi taremi": {
    "qid": "Q17070837",
    "name": "Mehdi Taremi",
    "birthDate": "1992-07-18",
    "height": "1.86 m",
    "club": "Olympiacos Fútbol Club",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Iran%20-%20Japan%2C%20AFC%20Asian%20Cup%202019%2042%20%28cropped%29.jpg"
  },
  "alireza jahanbakhsh": {
    "qid": "Q4406552",
    "name": "Alireza Jahanbakhsh",
    "birthDate": "1993-08-11",
    "height": "1.80 m",
    "club": "FC Verbroedering Dender EH",
    "position": "extremo izquierdo",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Alireza%20Jahanbakhsh%20at%20IRNPOR%20match%202018%20FIFA%20World%20Cup%2002.jpg"
  },
  "ali gholizadeh": {
    "qid": "Q17859780",
    "name": "Ali Gholizadeh",
    "birthDate": "1996-03-10",
    "height": "1.76 m",
    "club": "Lech Poznań",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Ali%20Gholizadeh%20Lech%20Pozna%C5%84%202023%20prezentacja.jpg"
  },
  "jalal hassan": {
    "qid": "",
    "name": "Jalal Hassan",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "rebin sulaka": {
    "qid": "Q18246217",
    "name": "Rebin Sulaka",
    "birthDate": "1992-04-12",
    "height": "1.92 m",
    "club": "Elverum Fotball",
    "position": "defensor central",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/240519%20FC%20%EC%84%9C%EC%9A%B8%20%ED%8F%AC%ED%86%A0%ED%83%80%EC%9E%84%20%28Rebin%20Sulaka%29.jpg"
  },
  "hussein ali": {
    "qid": "Q52832989",
    "name": "Hussein Ali",
    "birthDate": "1982-03-19",
    "height": "1.63 m",
    "club": "Al-Zawraa Sport Club",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Hussein%20Ali%20Al-Saedi.jpg"
  },
  "akam hashem": {
    "qid": "",
    "name": "Akam Hashem",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "merchas doski": {
    "qid": "Q100774865",
    "name": "Merchas Doski",
    "birthDate": "1999-12-07",
    "height": "1.73 m",
    "club": "",
    "position": "",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Merchas%20doski.jpg"
  },
  "zaid tahseen": {
    "qid": "Q114355105",
    "name": "Zaid Tahseen",
    "birthDate": "2001-01-29",
    "height": "1.93 m",
    "club": "Al Quwa Al Jawiya",
    "position": "defensa",
    "photo": ""
  },
  "manaf younis": {
    "qid": "Q110111698",
    "name": "Manaf Younis",
    "birthDate": "1996-12-29",
    "height": "",
    "club": "",
    "position": "defensa",
    "photo": ""
  },
  "zidane iqbal": {
    "qid": "Q107882685",
    "name": "Zidane Iqbal",
    "birthDate": "2003-04-27",
    "height": "1.81 m",
    "club": "",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Zidane%20Iqbal%20debut.jpg"
  },
  "amir al-ammari": {
    "qid": "Q51756997",
    "name": "Amir Al-Ammari",
    "birthDate": "1997-07-27",
    "height": "1.80 m",
    "club": "Halmstads BK",
    "position": "extremo izquierdo",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Amir%20Al-Ammari%20%28Halmstad%20vs%20Degerfors%2C%207%20October%202023%29.jpg"
  },
  "ibrahim bavesh": {
    "qid": "",
    "name": "Ibrahim Bavesh",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "ali jasim": {
    "qid": "Q5880646",
    "name": "Ali Jasim",
    "birthDate": "1987-07-17",
    "height": "1.78 m",
    "club": "Al Quwa Al Jawiya",
    "position": "alero",
    "photo": ""
  },
  "youssef amyn": {
    "qid": "Q106372614",
    "name": "Youssef Amyn",
    "birthDate": "2003-08-21",
    "height": "1.75 m",
    "club": "Feyenoord Academy",
    "position": "",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/4822944%20AE7I9304%20%28cropped%29.jpg"
  },
  "aimar sher": {
    "qid": "Q85040729",
    "name": "Aimar Sher",
    "birthDate": "2002-12-20",
    "height": "1.75 m",
    "club": "Hammarby IF",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/GAE%20-%20FC%20Groningen%20-%2052878021366%20%28cropped%29.jpg"
  },
  "marko farji": {
    "qid": "Q126373302",
    "name": "Marko Farji",
    "birthDate": "2004-03-16",
    "height": "1.84 m",
    "club": "",
    "position": "",
    "photo": ""
  },
  "osama rashid": {
    "qid": "Q2271934",
    "name": "Osama Rashid",
    "birthDate": "1992-01-17",
    "height": "1.78 m",
    "club": "Clube Desportivo Santa Clara",
    "position": "centrocampista",
    "photo": ""
  },
  "ali al-hamadi": {
    "qid": "Q80661874",
    "name": "Ali Al-Hamadi",
    "birthDate": "2002-03-01",
    "height": "1.83 m",
    "club": "Ipswich Town Football Club",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Ali%20Al-Hamadi.jpg"
  },
  "aymen hussein": {
    "qid": "Q21066439",
    "name": "Ayman Hussein",
    "birthDate": "1996-03-22",
    "height": "1.89 m",
    "club": "Al Quwa Al Jawiya",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/4822953%20AE7I9053%20%28cropped2%29.jpg"
  },
  "mohanad ali": {
    "qid": "Q45935415",
    "name": "Mohanad Ali",
    "birthDate": "2000-06-20",
    "height": "1.83 m",
    "club": "Al-Kahraba",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Mohanad%20Ali.jpg"
  },
  "yazeed abulaila": {
    "qid": "Q23772014",
    "name": "Yazeed Abulaila",
    "birthDate": "1993-01-08",
    "height": "1.89 m",
    "club": "Al-Hussein SC",
    "position": "guardameta",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Yazeed%20Abulaila.png"
  },
  "ihsan haddad": {
    "qid": "Q16236181",
    "name": "Ihsan Haddad",
    "birthDate": "1994-02-05",
    "height": "1.81 m",
    "club": "Al Faisaly",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Ihsan%20Haddad.jpg"
  },
  "mohammad abu hashish": {
    "qid": "Q124247293",
    "name": "Mohammad Abu Hashish",
    "birthDate": "1995-05-09",
    "height": "1.77 m",
    "club": "Al-Karma SC",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Mohammad%20Abu%20Hashish.png"
  },
  "yazan al-arab": {
    "qid": "",
    "name": "Yazan Al-Arab",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "abdallah nasib": {
    "qid": "Q124242129",
    "name": "Abdallah Nasib",
    "birthDate": "1994-02-25",
    "height": "1.84 m",
    "club": "Al-Hussein SC",
    "position": "defensor central",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Abdallah%20Nasib.png"
  },
  "saleem obaid": {
    "qid": "",
    "name": "Saleem Obaid",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "mohammad abualnadi": {
    "qid": "",
    "name": "Mohammad Abualnadi",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "ibrahim saadeh": {
    "qid": "",
    "name": "Ibrahim Saadeh",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "nizar al-rashdan": {
    "qid": "Q124302622",
    "name": "Nizar Al-Rashdan",
    "birthDate": "1999-03-23",
    "height": "1.85 m",
    "club": "Al-Zawraa Sport Club",
    "position": "mediocampista defensivo",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Asian%20Nations%20Cup%20-%20Jordan%20and%20South%20Korea%20%2874%29%20%28cropped%29.jpg"
  },
  "noor al-rawabdeh": {
    "qid": "Q106173174",
    "name": "Noor Al-Rawabdeh",
    "birthDate": "1997-02-24",
    "height": "1.82 m",
    "club": "Selangor FA",
    "position": "mediocentro organizador",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Noor%20Al-Rawabdeh.png"
  },
  "mohannad abu taha": {
    "qid": "Q124397380",
    "name": "Mohannad Abu Taha",
    "birthDate": "2003-02-02",
    "height": "1.77 m",
    "club": "Al Quwa Al Jawiya",
    "position": "extremo",
    "photo": ""
  },
  "amer jamous": {
    "qid": "Q130495887",
    "name": "Amer Jamous",
    "birthDate": "2002-07-03",
    "height": "1.74 m",
    "club": "",
    "position": "",
    "photo": ""
  },
  "musa al-taamari": {
    "qid": "Q27909473",
    "name": "Musa Al-Taamari",
    "birthDate": "1997-06-10",
    "height": "1.78 m",
    "club": "APOEL FC",
    "position": "extremo izquierdo",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Al%20taamari%20asse%20mhsc%202425.png"
  },
  "yazan al-naimat": {
    "qid": "Q106173172",
    "name": "Yazan Al-Naimat",
    "birthDate": "1999-06-04",
    "height": "1.81 m",
    "club": "Al-Arabi SC",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Yazan%20Al-Naimat%201.jpg"
  },
  "mahmoud al-mardi": {
    "qid": "Q21621941",
    "name": "Mahmoud Al-Mardi",
    "birthDate": "1993-10-06",
    "height": "",
    "club": "Al-Hussein SC",
    "position": "delantero",
    "photo": ""
  },
  "ali olwan": {
    "qid": "Q107130635",
    "name": "Ali Olwan",
    "birthDate": "2000-03-26",
    "height": "1.83 m",
    "club": "Al-Karma SC",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Ali%20Olwan.png"
  },
  "mohammad abu zrayq": {
    "qid": "Q83787036",
    "name": "Mohammad Abu Zrayq",
    "birthDate": "1997-12-30",
    "height": "",
    "club": "Al Ramtha",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Mohammad%20Abu%20Zrayq.jpg"
  },
  "ibrahim sabra": {
    "qid": "",
    "name": "Ibrahim Sabra",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "zion suzuki": {
    "qid": "Q67498669",
    "name": "Zion Suzuki",
    "birthDate": "2002-08-21",
    "height": "1.90 m",
    "club": "Sint-Truidense",
    "position": "guardameta",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/ZION%20SUZUKI%20-%20JPN%20vs%20THA%20-%20Friendly%20Match%20-%202024.01.01.jpg"
  },
  "henry heroki mochizuki": {
    "qid": "Q124434108",
    "name": "Henry Heroki Mochizuki",
    "birthDate": "2001-09-20",
    "height": "1.92 m",
    "club": "FC Machida Zelvia",
    "position": "defensa",
    "photo": ""
  },
  "ayumu seko": {
    "qid": "Q27990922",
    "name": "Ayumu Seko",
    "birthDate": "2000-06-07",
    "height": "1.85 m",
    "club": "Cerezo Osaka",
    "position": "defensa",
    "photo": ""
  },
  "junnosuke suzuki": {
    "qid": "Q109594121",
    "name": "Jun'nosuke Suzuki",
    "birthDate": "2003-07-12",
    "height": "1.80 m",
    "club": "",
    "position": "",
    "photo": ""
  },
  "shogo taniguchi": {
    "qid": "",
    "name": "Shogo Taniguchi",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "tsuyoshi watanabe": {
    "qid": "Q11562102",
    "name": "Tsuyoshi Watanabe",
    "birthDate": "1968-09-04",
    "height": "1.84 m",
    "club": "KAA Gent",
    "position": "defensa",
    "photo": ""
  },
  "kaishu sano": {
    "qid": "Q65029955",
    "name": "Kaishu Sano",
    "birthDate": "2000-12-30",
    "height": "1.76 m",
    "club": "Kashima Antlers",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Kaishu%20Sano%202024%20%28cropped%29.jpg"
  },
  "yuki soma": {
    "qid": "Q54337208",
    "name": "Yuki Soma",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "ao tanaka": {
    "qid": "Q27920148",
    "name": "Ao Tanaka",
    "birthDate": "1998-09-10",
    "height": "1.77 m",
    "club": "Fortuna Düsseldorf",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Fumio%20Kishida%20with%20Japan%20National%20Football%20Team%20after%20Qatar%20World%20Cup%20%285%29%20%28cropped%29.jpg"
  },
  "daichi kamada": {
    "qid": "Q20039495",
    "name": "Daichi Kamada",
    "birthDate": "1996-08-05",
    "height": "1.80 m",
    "club": "",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/2022128173756%202022-05-08%20Fussball%20Eintracht%20Frankfurt%20vs%20Borussia%20M%C3%B6nchengladbach%20-%20Sven%20-%201D%20X%20MK%20II%20-%200725%20-%20AK8I7460%20%28Daichi%20Kamada%20cropped%29.jpg"
  },
  "takefusa kubo": {
    "qid": "Q27067753",
    "name": "Takefusa Kubo",
    "birthDate": "2001-06-04",
    "height": "1.69 m",
    "club": "Real Sociedad de Fútbol",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Takefusa%20Kubo%201053.jpg"
  },
  "ritsu doan": {
    "qid": "",
    "name": "Ritsu Doan",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "keito nakamura": {
    "qid": "Q115164995",
    "name": "Keito Nakamura",
    "birthDate": "1999-07-15",
    "height": "1.80 m",
    "club": "Gamba Osaka",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/FC%20Red%20Bull%20Salzburg%20gegen%20Linzer%20ASK%20%282022-10-01%29a%2002.jpg"
  },
  "takumi minamino": {
    "qid": "Q776878",
    "name": "Takumi Minamino",
    "birthDate": "1995-01-16",
    "height": "1.72 m",
    "club": "A.S. Monaco F.C.",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Minamino%20asse%20asm%202425.png"
  },
  "shuto machino": {
    "qid": "Q47582288",
    "name": "Shuto Machino",
    "birthDate": "1999-09-30",
    "height": "1.85 m",
    "club": "Giravanz Kitakyushu",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Sh%C5%ABto%20Machino%2020221208.jpg"
  },
  "junya ito": {
    "qid": "Q61089590",
    "name": "Junya Ito",
    "birthDate": "1998-04-12",
    "height": "",
    "club": "FC Tokyo",
    "position": "centrocampista",
    "photo": ""
  },
  "koki ogawa": {
    "qid": "Q96251435",
    "name": "Koki Ogawa",
    "birthDate": "1997-08-08",
    "height": "1.86 m",
    "club": "NEC Nijmegen",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/GAE%20-%20NEC%20-%2053493888105%20%28Koki%20Ogawa%29.jpg"
  },
  "ayase ueda": {
    "qid": "Q62085431",
    "name": "Ayase Ueda",
    "birthDate": "1998-08-28",
    "height": "1.82 m",
    "club": "Feyenoord Rotterdam",
    "position": "atacante",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Go%20Ahead%20Eagles%20-%20Feyenoord%20-%2053679351240%20%28Ayase%20Ueda%29.jpg"
  },
  "hyeon-woo jo": {
    "qid": "",
    "name": "Hyeon-woo Jo",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "seung-gyu kim": {
    "qid": "Q90748895",
    "name": "Seung-Gyu Kim",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "min-jae kim": {
    "qid": "",
    "name": "Min-jae Kim",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "yu-min cho": {
    "qid": "",
    "name": "Yu-min Cho",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "young-woo seol": {
    "qid": "",
    "name": "Young-woo Seol",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "han-beom lee": {
    "qid": "",
    "name": "Han-beom Lee",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "tae-seok lee": {
    "qid": "",
    "name": "Tae-seok Lee",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "myung-jae lee": {
    "qid": "",
    "name": "Myung-jae Lee",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "jae-sung lee": {
    "qid": "",
    "name": "Jae-sung Lee",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "in-beom hwang": {
    "qid": "",
    "name": "In-beom Hwang",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "kang-in lee": {
    "qid": "",
    "name": "Kang-in Lee",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "seung-ho paik": {
    "qid": "",
    "name": "Seung-ho Paik",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "jens castrop": {
    "qid": "Q98829565",
    "name": "Castrop Jens",
    "birthDate": "2003-07-29",
    "height": "1.78 m",
    "club": "VfL Borussia Mönchengladbach",
    "position": "",
    "photo": ""
  },
  "dongg-yeong lee": {
    "qid": "",
    "name": "Dongg-yeong Lee",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "gue-sung cho": {
    "qid": "",
    "name": "Gue-sung Cho",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "heung-min son": {
    "qid": "",
    "name": "Heung-min Son",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "hee-chan hwang": {
    "qid": "",
    "name": "Hee-chan Hwang",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "hyeon-gyu oh": {
    "qid": "",
    "name": "Hyeon-Gyu Oh",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "nawaf alaqidi": {
    "qid": "",
    "name": "Nawaf Alaqidi",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "abdulrahman al-sanbi": {
    "qid": "Q99581714",
    "name": "Abdulrahman Al-Sanbi",
    "birthDate": "2001-02-02",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "saud abdulhamid": {
    "qid": "Q60407856",
    "name": "Saud Abdulhamid",
    "birthDate": "1999-07-18",
    "height": "1.78 m",
    "club": "A.S. Roma",
    "position": "lateral",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Saudi%20Arabia%20v%20Oman%20%282%29%20%28cropped%29.jpg"
  },
  "nawaf bouwashl": {
    "qid": "",
    "name": "Nawaf Bouwashl",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "jihad thakri": {
    "qid": "",
    "name": "Jihad Thakri",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "moteb al-harbi": {
    "qid": "Q97698786",
    "name": "Moteb Al-Harbi",
    "birthDate": "2000-02-19",
    "height": "1.73 m",
    "club": "Al-Shabab",
    "position": "defensa",
    "photo": ""
  },
  "hassan altambakti": {
    "qid": "",
    "name": "Hassan Altambakti",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "musab aljuwayr": {
    "qid": "",
    "name": "Musab Aljuwayr",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "ziyad aljohani": {
    "qid": "",
    "name": "Ziyad Aljohani",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "abdullah alkhaibari": {
    "qid": "",
    "name": "Abdullah Alkhaibari",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "nasser aldawsari": {
    "qid": "",
    "name": "Nasser Aldawsari",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "saleh abu alshamat": {
    "qid": "",
    "name": "Saleh Abu Alshamat",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "marwan alsahafi": {
    "qid": "",
    "name": "Marwan Alsahafi",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "salem aldawsari": {
    "qid": "",
    "name": "Salem Aldawsari",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "abdulrahman al-aboud": {
    "qid": "Q28923551",
    "name": "Abdulrahman Al-Aboud",
    "birthDate": "1995-06-01",
    "height": "1.74 m",
    "club": "Al-Ittihad",
    "position": "extremo izquierdo",
    "photo": ""
  },
  "feras akbrikan": {
    "qid": "",
    "name": "Feras Akbrikan",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "saleh alshehri": {
    "qid": "",
    "name": "Saleh Alshehri",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "abdullah al-hamdan": {
    "qid": "Q47499719",
    "name": "Abdullah Al-Hamdan",
    "birthDate": "1999-09-12",
    "height": "1.84 m",
    "club": "Al-Nassr",
    "position": "delantero",
    "photo": ""
  },
  "yassine bounou": {
    "qid": "Q3571952",
    "name": "Yassine Bounou",
    "birthDate": "1991-04-05",
    "height": "1.95 m",
    "club": "Al-Hilal",
    "position": "guardameta",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Yassine%20bounou%20Interview%202023.jpg"
  },
  "munir el kajoui": {
    "qid": "",
    "name": "Munir El Kajoui",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "achraf hakimi": {
    "qid": "Q26932598",
    "name": "Achraf Hakimi",
    "birthDate": "1998-11-04",
    "height": "1.80 m",
    "club": "Paris Saint-Germain FC",
    "position": "lateral",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Achraf%20Hakimi%20vs%20Niger%2C%205%20Sept%202025.jpg"
  },
  "noussair mazraoui": {
    "qid": "Q26266244",
    "name": "Noussair Mazraoui",
    "birthDate": "1997-11-14",
    "height": "1.83 m",
    "club": "Ajax de Ámsterdam",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Mazraoui.jpg"
  },
  "nayef aguerd": {
    "qid": "Q28872567",
    "name": "Nayef Aguerd",
    "birthDate": "1996-03-30",
    "height": "1.90 m",
    "club": "Real Sociedad de Fútbol",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Nayef%20Aguerd%20vs%20Niger%2C%205%20Sept%202025.jpg"
  },
  "roman saiss": {
    "qid": "",
    "name": "Roman Saiss",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "jawad el yamio": {
    "qid": "",
    "name": "Jawad El Yamio",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "adam masina": {
    "qid": "Q20718823",
    "name": "Adam Masina",
    "birthDate": "1994-01-02",
    "height": "1.89 m",
    "club": "Bologna Football Club 1909",
    "position": "lateral",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Adam%20Masina.jpg"
  },
  "sofyan amrabat": {
    "qid": "Q18428483",
    "name": "Sofyan Amrabat",
    "birthDate": "1996-08-21",
    "height": "1.83 m",
    "club": "Fenerbahçe Spor Kulübü",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Sofyan%20Amrabat%20vs%20Niger%20%28cropped%29.jpg"
  },
  "azzedine ounahi": {
    "qid": "Q108109586",
    "name": "Azzedine Ounahi",
    "birthDate": "2000-04-19",
    "height": "1.82 m",
    "club": "",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Ounahi.jpg"
  },
  "eliesse ben seghir": {
    "qid": "Q113506942",
    "name": "Eliesse Ben Seghir",
    "birthDate": "2005-02-16",
    "height": "1.78 m",
    "club": "",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Eliesse%20Ben%20Seghir%20vs%20Niger%20%28cropped%29%20%28cropped%29.jpg"
  },
  "bilal el khannouss": {
    "qid": "Q105955374",
    "name": "Bilal El Khannouss",
    "birthDate": "2004-05-10",
    "height": "1.80 m",
    "club": "Leicester City Football Club",
    "position": "attacking midfielder",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/ElKhannouss%20%28cropped%29.jpg"
  },
  "ismael saibari": {
    "qid": "Q98784065",
    "name": "Ismael Saibari",
    "birthDate": "2001-01-28",
    "height": "1.85 m",
    "club": "PSV Eindhoven",
    "position": "mediocentro organizador",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Saibari.jpg"
  },
  "youssef en-nesyri": {
    "qid": "Q26262219",
    "name": "Youssef En-Nesyri",
    "birthDate": "1997-06-01",
    "height": "1.88 m",
    "club": "Al-Ittihad",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Ennesyri.jpg"
  },
  "abde ezzalzouli": {
    "qid": "Q109327842",
    "name": "Abde Ezzalzouli",
    "birthDate": "2001-12-17",
    "height": "1.78 m",
    "club": "Real Betis Balompié",
    "position": "extremo izquierdo",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/AbdeEz.jpg"
  },
  "soufiane rahimi": {
    "qid": "Q56247602",
    "name": "Soufiane Rahimi",
    "birthDate": "1996-06-02",
    "height": "1.80 m",
    "club": "Al-Ain Football Club",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Soufiane%20Rahimu%20%28cropped%29.jpg"
  },
  "brahim diaz": {
    "qid": "",
    "name": "Brahim Diaz",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "ayoub el kaabi": {
    "qid": "Q42948040",
    "name": "Pené El Kaabi",
    "birthDate": "1993-06-25",
    "height": "1.82 m",
    "club": "Racing Athlétic Club de Casablanca",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Ayoub%20El%20Kaabi%20vs%20Niger%20%28cropped%29.jpg"
  },
  "luis malagon": {
    "qid": "Q34860677",
    "name": "Luis Malagón",
    "birthDate": "1997-03-02",
    "height": "1.80 m",
    "club": "",
    "position": "guardameta",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Luis%20Malagon.jpg"
  },
  "johan vasquez": {
    "qid": "",
    "name": "Johan Vasquez",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "jorge sanchez": {
    "qid": "Q6278673",
    "name": "Jorge Sánchez",
    "birthDate": "1977-02-09",
    "height": "1.76 m",
    "club": "Club Celaya",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Joti%20.jpg"
  },
  "cesar montes": {
    "qid": "Q108494068",
    "name": "Cesar Montes",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "jesus gallardo": {
    "qid": "",
    "name": "Jesus Gallardo",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "israel reyes": {
    "qid": "Q107739233",
    "name": "Israel Reyes",
    "birthDate": "2000-05-23",
    "height": "1.79 m",
    "club": "",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Israel%20Reyes%202.png"
  },
  "diego lainez": {
    "qid": "Q28861970",
    "name": "Diego Lainez",
    "birthDate": "2000-06-09",
    "height": "1.68 m",
    "club": "Sporting Clube de Braga",
    "position": "extremo izquierdo",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Diego%20lainez%202.jpg"
  },
  "carlos rodriguez": {
    "qid": "Q2180251",
    "name": "Carlos Rodriguez",
    "birthDate": "1964-01-01",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "edson alvarez": {
    "qid": "",
    "name": "Edson Alvarez",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "orbelin pineda": {
    "qid": "",
    "name": "Orbelin Pineda",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "marcel ruiz": {
    "qid": "Q62032222",
    "name": "Marcel Ruiz",
    "birthDate": "2003-07-09",
    "height": "1.79 m",
    "club": "",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Marcel%20ruiz%202019.png"
  },
  "erick sanchez": {
    "qid": "Q129167866",
    "name": "Érick Sánchez",
    "birthDate": "1997-08-26",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "hirving lozano": {
    "qid": "Q17633812",
    "name": "Hirving Lozano",
    "birthDate": "1995-07-30",
    "height": "1.75 m",
    "club": "San Diego FC",
    "position": "extremo izquierdo",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Spartak%20-%20Napoli%20%2816%29.jpg"
  },
  "santiago gimenez": {
    "qid": "Q33296979",
    "name": "Santiago Giménez",
    "birthDate": "2001-04-18",
    "height": "1.82 m",
    "club": "A.C. Milan",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Santiago%20Gim%C3%A9nez.png"
  },
  "raul jimenez": {
    "qid": "Q59704421",
    "name": "Raúl Jiménez",
    "birthDate": "2006-02-16",
    "height": "1.90 m",
    "club": "Fulham Football Club",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Raul%20Jimenez%204.png"
  },
  "alexis vega": {
    "qid": "Q91253670",
    "name": "Alexis Vega",
    "birthDate": "1997-11-25",
    "height": "1.73 m",
    "club": "Club El Porvenir",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Alexis%20Vega%20WC2022.jpg"
  },
  "roberto alvarado": {
    "qid": "Q21004804",
    "name": "Roberto Alvarado",
    "birthDate": "1998-09-07",
    "height": "1.70 m",
    "club": "Tigres de la UANL",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Roberto%20Alvarado.png"
  },
  "cesar huerta": {
    "qid": "",
    "name": "Cesar Huerta",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "bart verbruggen": {
    "qid": "Q15734304",
    "name": "Bart Verbruggen",
    "birthDate": "1988-05-15",
    "height": "1.93 m",
    "club": "",
    "position": "",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Men%27s%20standing%20skier%20number%2036a.JPG"
  },
  "virgil van dijk": {
    "qid": "Q133903",
    "name": "Virgil van Dijk",
    "birthDate": "1991-07-08",
    "height": "1.95 m",
    "club": "",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/20160604%20AUT%20NED%208876%20%28cropped%29.jpg"
  },
  "micky van de ven": {
    "qid": "Q69812902",
    "name": "Micky van de Ven",
    "birthDate": "2001-04-19",
    "height": "1.93 m",
    "club": "Tottenham Hotspur Football Club",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Micky%20Van%20De%20Ven%20pre-match%20training%20%28cropped%29.jpg"
  },
  "jurrien timber": {
    "qid": "",
    "name": "Jurrien Timber",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "denzel dumfries": {
    "qid": "Q19882816",
    "name": "Denzel Dumfries",
    "birthDate": "1996-04-18",
    "height": "1.88 m",
    "club": "SC Heerenveen",
    "position": "lateral",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Edison%20ndreca%20inter%20egnati%20%28cropped%20Denzel%20Dumfries%29.jpg"
  },
  "nathan ake": {
    "qid": "Q1755683",
    "name": "Nathan Aké",
    "birthDate": "1995-02-18",
    "height": "1.80 m",
    "club": "Manchester City Football Club",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Yokohama%20F.%20Marinos%20-%20Manchester%20City%20%283-5%29%20-%2053075276224%20%28Nathan%20Ake%29.jpg"
  },
  "jeremie frimpong": {
    "qid": "Q67198835",
    "name": "Jeremie Frimpong",
    "birthDate": "2000-12-10",
    "height": "1.71 m",
    "club": "Liverpool Fútbol Club",
    "position": "lateral",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Jeremie%20Frimpong%2004012026%20%283%29%20%28cropped%29.jpg"
  },
  "jan paul van hecke": {
    "qid": "Q66828825",
    "name": "Jan Paul van Hecke",
    "birthDate": "2000-06-08",
    "height": "1.89 m",
    "club": "",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Jan%20Paul%20van%20Hecke%2024012026%20%282%29%20%28cropped%29.jpg"
  },
  "tijjani reijnders": {
    "qid": "Q39500352",
    "name": "Tijjani Reijnders",
    "birthDate": "1998-07-29",
    "height": "1.85 m",
    "club": "Manchester City Football Club",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Reijnders%20arriva%20in%20albergo%20%28cropped%29.jpg"
  },
  "ryan gravenberch": {
    "qid": "Q56257870",
    "name": "Ryan Gravenberch",
    "birthDate": "2002-05-16",
    "height": "1.90 m",
    "club": "Liverpool Fútbol Club",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/2022-07-30%20Fu%C3%9Fball%2C%20M%C3%A4nner%2C%20DFL-Supercup%2C%20RB%20Leipzig%20-%20FC%20Bayern%20M%C3%BCnchen%201DX%203342%20by%20Stepro%20%28cropped%29.jpg"
  },
  "teun koopmeiners": {
    "qid": "Q39498277",
    "name": "Teun Koopmeiners",
    "birthDate": "1998-02-28",
    "height": "1.84 m",
    "club": "Juventus",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Teun%20Koopmeiners%20Manchester%20United%20v%20Atalanta%20BC%2C%2020%20October%202021%20%2812%29%20%28cropped%29.jpg"
  },
  "frenkie de jong": {
    "qid": "Q19898898",
    "name": "Frenkie de Jong",
    "birthDate": "1997-05-12",
    "height": "1.80 m",
    "club": "Fútbol Club Barcelona",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/%D0%9C%D0%B0%D1%82%D1%87%20%C2%AB%D0%94%D0%B8%D0%BD%D0%B0%D0%BC%D0%BE%C2%BB%20-%20%C2%AB%D0%91%D0%B0%D1%80%D1%81%D0%B5%D0%BB%D0%BE%D0%BD%D0%B0%C2%BB%200-1.%202%20%D0%BD%D0%BE%D1%8F%D0%B1%D1%80%D1%8F%202021%20%D0%B3%D0%BE%D0%B4%D0%B0.%20II%20%E2%80%94%201289671%20%28cropped%29.jpg"
  },
  "xavi simons": {
    "qid": "Q65925174",
    "name": "Xavi Simons",
    "birthDate": "2003-04-21",
    "height": "1.79 m",
    "club": "Tottenham Hotspur Football Club",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Xavi%20Simons%2C%20Nick%20Verhagen%20in%20duel%20met%20Xavi%20Simons.jpg"
  },
  "justin kluivert": {
    "qid": "Q26934107",
    "name": "Justin Kluivert",
    "birthDate": "1999-05-05",
    "height": "1.71 m",
    "club": "A.S. Roma",
    "position": "attacking midfielder",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Justin%20Kluivert%202023.jpg"
  },
  "memphis depay": {
    "qid": "Q1894",
    "name": "Memphis Depay",
    "birthDate": "1994-02-13",
    "height": "1.78 m",
    "club": "Sport Club Corinthians Paulista",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Memphis%20Depay%202019.jpg"
  },
  "donyell malen": {
    "qid": "Q24084301",
    "name": "Donyell Malen",
    "birthDate": "1999-01-19",
    "height": "1.79 m",
    "club": "A.S. Roma",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/DONYELL%20MALEN%20%E2%80%93%202023.08.12.jpg"
  },
  "wout weghorst": {
    "qid": "Q2210473",
    "name": "Wout Weghorst",
    "birthDate": "1992-08-07",
    "height": "1.97 m",
    "club": "Burnley Football Club",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Wout%20Weghorst%202016.jpg"
  },
  "cody gakpo": {
    "qid": "Q28801927",
    "name": "Cody Gakpo",
    "birthDate": "1999-05-07",
    "height": "1.93 m",
    "club": "Liverpool Fútbol Club",
    "position": "delantero centro",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Austria%20U-18%20vs.%20Netherlands%20U-18%202017-03-23%20%28078%29.jpg"
  },
  "orjan nyland": {
    "qid": "",
    "name": "Orjan Nyland",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "julian ryerson": {
    "qid": "Q28717698",
    "name": "Julian Ryerson",
    "birthDate": "1997-11-17",
    "height": "1.83 m",
    "club": "Borussia Dortmund",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/2023-08-12%20TSV%20Schott%20Mainz%20gegen%20Borussia%20Dortmund%20%28DFB-Pokal%202023-24%29%20by%20Sandro%20Halank%E2%80%93102.jpg"
  },
  "leo ostigard": {
    "qid": "",
    "name": "Leo Ostigård",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "kristoffer vassbakk ajer": {
    "qid": "",
    "name": "Kristoffer Vassbakk Ajer",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "marcus holmgren pedersen": {
    "qid": "Q59268631",
    "name": "Marcus Holmgren Pedersen",
    "birthDate": "2000-07-16",
    "height": "1.84 m",
    "club": "Tromsø IL",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Marcus%20Holmgren%20Pedersen%202022%20FC%20RB%20Salzburg%20gegen%20Feyenoord%20Rotterdam%20%28cropped%29.jpg"
  },
  "david møller wolfe": {
    "qid": "Q101095985",
    "name": "David Møller Wolfe",
    "birthDate": "2002-04-23",
    "height": "1.85 m",
    "club": "Åsane Fotball",
    "position": "lateral",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/David%20M%C3%B8ller%20Wolfe.jpg"
  },
  "torbjørn heggem": {
    "qid": "",
    "name": "Torbjørn Heggem",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "morten thorsby": {
    "qid": "Q16852194",
    "name": "Morten Thorsby",
    "birthDate": "1996-05-05",
    "height": "1.86 m",
    "club": "Genoa Cricket & Football Club",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Norway%20Italy%20-%20June%202025%20E%2024%20%28cropped%29.jpg"
  },
  "martin ødegaard": {
    "qid": "Q16902219",
    "name": "Martin Ødegaard",
    "birthDate": "1998-12-17",
    "height": "1.78 m",
    "club": "Arsenal Fútbol Club",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Norway%20Italy%20-%20June%202025%20E%2004.jpg"
  },
  "sander berge": {
    "qid": "Q20675980",
    "name": "Sander Berge",
    "birthDate": "1998-02-14",
    "height": "1.95 m",
    "club": "Fulham Football Club",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Norway%20Italy%20-%20June%202025%20E%2025%20%28cropped%29.jpg"
  },
  "andreas schjelderup": {
    "qid": "Q106099213",
    "name": "Andreas Schjelderup",
    "birthDate": "2004-06-01",
    "height": "1.76 m",
    "club": "FC Nordsjælland",
    "position": "centrocampista",
    "photo": ""
  },
  "patrick berg": {
    "qid": "Q18066870",
    "name": "Patrick Berg",
    "birthDate": "1997-11-24",
    "height": "1.78 m",
    "club": "F.K. Bodø/Glimt",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Norway%20Italy%20-%20June%202025%20A%2014%20%28cropped%29.jpg"
  },
  "erling haaland": {
    "qid": "Q28967995",
    "name": "Erling Haaland",
    "birthDate": "2000-07-21",
    "height": "1.94 m",
    "club": "Manchester City Football Club",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Erling%20Haaland%20June%202025.jpg"
  },
  "alexander sørloth": {
    "qid": "Q13784739",
    "name": "Alexander Sørloth",
    "birthDate": "1995-12-05",
    "height": "1.94 m",
    "club": "Atlético de Madrid",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Norway%20Italy%20-%20June%202025%20E%2010.jpg"
  },
  "aron dønnum": {
    "qid": "Q35314083",
    "name": "Aron Dønnum",
    "birthDate": "1998-04-20",
    "height": "1.79 m",
    "club": "Toulouse Football Club",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/TFC-FC%20Metz%20%282023-10-01%29%20Aron%20D%C3%B8nnum%20%28cropped%29.jpg"
  },
  "jorgen strand larsen": {
    "qid": "",
    "name": "Jorgen Strand Larsen",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "antonio nusa": {
    "qid": "Q107357509",
    "name": "Antonio Nusa",
    "birthDate": "2005-04-17",
    "height": "1.80 m",
    "club": "RB Leipzig",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Norway%20Italy%20-%20June%202025%20C%2023.jpg"
  },
  "oscar bobb": {
    "qid": "Q110466658",
    "name": "Oscar Bobb",
    "birthDate": "2003-07-12",
    "height": "1.69 m",
    "club": "",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/ManCity20240722-050%20%28Oscar%20Bobb2%29.jpg"
  },
  "max crocombe payne": {
    "qid": "",
    "name": "Max Crocombe Payne",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "alex paulsen": {
    "qid": "Q107558242",
    "name": "Alex Paulsen",
    "birthDate": "2002-07-04",
    "height": "1.93 m",
    "club": "AFC Bournemouth",
    "position": "guardameta",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Alex%20Paulsen.jpg"
  },
  "michael boxall": {
    "qid": "Q524730",
    "name": "Michael Boxall",
    "birthDate": "1988-08-18",
    "height": "1.88 m",
    "club": "Minnesota United Football Club",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Michael%20Boxall%20-%20MNUFC%20-%20MLS%20-%20new%20zealand%20-%20%2852125271279%29.jpg"
  },
  "liberato cacace": {
    "qid": "Q47544166",
    "name": "Liberato Cacace",
    "birthDate": "2000-09-27",
    "height": "1.83 m",
    "club": "Wellington Phoenix Football Club",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Liberato%20Cacace%2030082025%20%281%29.jpg"
  },
  "tim payne": {
    "qid": "Q443117",
    "name": "Tim Payne",
    "birthDate": "1979-04-29",
    "height": "1.85 m",
    "club": "Bristol Rugby",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Tim%20Payne%20cropped.jpg"
  },
  "tyler bindon": {
    "qid": "Q121353909",
    "name": "Tyler Bindon",
    "birthDate": "2005-01-27",
    "height": "1.88 m",
    "club": "Nottingham Forest Football Club",
    "position": "defensor central",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Tyler%20Bindon.jpg"
  },
  "francis de vries": {
    "qid": "Q29113776",
    "name": "Francis de Vries",
    "birthDate": "1994-11-28",
    "height": "1.88 m",
    "club": "IFK Värnamo",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Francis%20de%20Vries.jpg"
  },
  "finn surman": {
    "qid": "Q109968695",
    "name": "Finn Surman",
    "birthDate": "2003-09-23",
    "height": "1.90 m",
    "club": "Portland Timbers",
    "position": "defensor central",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Finn%20Surman.jpg"
  },
  "joe bell": {
    "qid": "Q6208574",
    "name": "Joe Bell",
    "birthDate": "1923-11-27",
    "height": "1.82 m",
    "club": "Brøndby IF",
    "position": "alero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Joe%20Bell%20Portage.png"
  },
  "sarpreet singh": {
    "qid": "Q28800473",
    "name": "Sarpreet Singh",
    "birthDate": "1999-02-20",
    "height": "1.75 m",
    "club": "F. C. Bayern Múnich",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Sarpreet%20Singh%20Training%202019-07-28%20FC%20Bayern%20Munich.png"
  },
  "ryan thomas": {
    "qid": "Q3943100",
    "name": "Ryan Thomas",
    "birthDate": "1994-12-20",
    "height": "1.74 m",
    "club": "American Top Team",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Ryan%20thomas-1444759971.png"
  },
  "matthew garbett": {
    "qid": "Q96091702",
    "name": "Matthew Garbett",
    "birthDate": "2002-04-13",
    "height": "1.88 m",
    "club": "NAC Breda",
    "position": "centrocampista",
    "photo": ""
  },
  "marko stamenic": {
    "qid": "",
    "name": "Marko Stamenić",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "ben old": {
    "qid": "Q106939313",
    "name": "Ben Old",
    "birthDate": "2002-08-13",
    "height": "1.73 m",
    "club": "A.S. Saint-Étienne",
    "position": "alero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Ben%20Old%20playing%20for%20Wellington%20v%20Perth%2C%20March%202022.jpg"
  },
  "chris wood": {
    "qid": "Q2190197",
    "name": "Chris Wood",
    "birthDate": "1987-11-28",
    "height": "1.91 m",
    "club": "Burnley Football Club",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Chris%20Wood%20golfprofessional.JPG"
  },
  "elijah just": {
    "qid": "Q64031850",
    "name": "Elijah Just",
    "birthDate": "2000-05-01",
    "height": "1.74 m",
    "club": "AC Horsens",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Elijah%20Just.jpg"
  },
  "callum mccowatt": {
    "qid": "Q50829202",
    "name": "Callum McCowatt",
    "birthDate": "1999-04-30",
    "height": "1.79 m",
    "club": "Auckland City Football Club",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Callum%20McCowatt%20playing%20for%20New%20Zealand%2C%2026%20March%202023%20%282%29%20%28cropped%29.jpg"
  },
  "kosta barbarouses": {
    "qid": "Q771396",
    "name": "Kosta Barbarouses",
    "birthDate": "1990-02-19",
    "height": "1.71 m",
    "club": "Melbourne Victory Football Club",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/New%20Zealand-Portugal%20%2824%29%20%28cropped%29.jpg"
  },
  "orlando mosquera": {
    "qid": "Q48839143",
    "name": "Orlando Mosquera",
    "birthDate": "1994-12-25",
    "height": "1.91 m",
    "club": "",
    "position": "guardameta",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Partido%20Galicia%20-%20Panam%C3%A1%20en%20Bala%C3%ADdos%20160%20%28Orlando%20Mosquera%29.jpg"
  },
  "luis mejia": {
    "qid": "",
    "name": "Luis Mejia",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "fidel escobar": {
    "qid": "Q20090660",
    "name": "Fidel Escobar",
    "birthDate": "1995-01-09",
    "height": "1.81 m",
    "club": "Agrupación Deportiva Alcorcón SAD",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/ENG-PAN%20%2813%29%202018-6-29%20Fidel%20Escobar.jpg"
  },
  "andres andrade": {
    "qid": "",
    "name": "Andres Andrade",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "michael amir murillo": {
    "qid": "Q27805413",
    "name": "Michael Amir Murillo",
    "birthDate": "1996-02-11",
    "height": "1.83 m",
    "club": "Beşiktaş Jimnastik Kulübü",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Partido%20Galicia%20-%20Panam%C3%A1%20en%20Bala%C3%ADdos%2063.jpg"
  },
  "eric davis": {
    "qid": "Q2943174",
    "name": "Eric Davis",
    "birthDate": "1968-01-26",
    "height": "0.71 m",
    "club": "Baltimore Orioles",
    "position": "Jardinero central",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Eric%20Davis%20at%20Serramonte%20Center%202010-01-30%201.JPG"
  },
  "jose cordoba": {
    "qid": "",
    "name": "Jose Cordoba",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "cesar blackman": {
    "qid": "Q51331558",
    "name": "Cesar Blackman",
    "birthDate": "1998-04-02",
    "height": "1.74 m",
    "club": "DAC 1904 Dunajská Streda",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Partido%20Galicia%20-%20Panam%C3%A1%20en%20Bala%C3%ADdos%20153.jpg"
  },
  "cristian martinez": {
    "qid": "Q100951938",
    "name": "Cristian Martinez",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "anibal godoy": {
    "qid": "Q2759958",
    "name": "Aníbal Godoy",
    "birthDate": "1990-02-10",
    "height": "1.82 m",
    "club": "San Jose Earthquakes",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/ENG-PAN%20%2815%29%20%28cropped%29.jpg"
  },
  "adalberto carrasquilla": {
    "qid": "Q59193510",
    "name": "Adalberto Carrasquilla",
    "birthDate": "1998-11-28",
    "height": "1.70 m",
    "club": "Fútbol Club Cartagena",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Inter%20Miami%20CF%203-1%20UNAM%20%286%20August%202025%29%2027%20%28cropped%29.jpg"
  },
  "edgar barcenas": {
    "qid": "",
    "name": "Édgar Bárcenas",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "carlos harvey": {
    "qid": "Q61990402",
    "name": "Carlos Harvey",
    "birthDate": "2000-02-03",
    "height": "1.84 m",
    "club": "Ventura County FC",
    "position": "centrocampista",
    "photo": ""
  },
  "ismael diaz": {
    "qid": "Q6084985",
    "name": "Ismael Díaz",
    "birthDate": "http://www",
    "height": "1.82 m",
    "club": "Club Barcelona Atlético",
    "position": "centrocampista",
    "photo": ""
  },
  "jose fajardo": {
    "qid": "",
    "name": "Jose Fajardo",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "cecilio waterman": {
    "qid": "Q969014",
    "name": "Cecilio Waterman",
    "birthDate": "1991-04-13",
    "height": "1.81 m",
    "club": "Centro Atlético Fénix",
    "position": "extremo izquierdo",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Cecilio%20Waterman%20Everton%20v%20Cobresal%2020230828%2002.jpg"
  },
  "jose luiz rodriguez": {
    "qid": "",
    "name": "Jose Luiz Rodriguez",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "alberto quintero": {
    "qid": "Q766988",
    "name": "Alberto Quintero Medina",
    "birthDate": "1987-12-18",
    "height": "1.67 m",
    "club": "Club Universitario de Deportes",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Alberto-Quintero.jpg"
  },
  "roberto fernandez": {
    "qid": "Q105200682",
    "name": "Roberto Fernandez",
    "birthDate": "1971-01-01",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "orlando gill": {
    "qid": "Q60842077",
    "name": "Orlando Gill",
    "birthDate": "2000-06-11",
    "height": "1.98 m",
    "club": "Club Sportivo San Lorenzo",
    "position": "",
    "photo": ""
  },
  "gustavo gomez": {
    "qid": "Q57159714",
    "name": "Gustavo Gomez",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "fabian balbuena": {
    "qid": "Q16297591",
    "name": "Fabián Balbuena",
    "birthDate": "1991-08-23",
    "height": "1.88 m",
    "club": "Sport Club Corinthians Paulista",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Fabi%C3%A1n%20Balbuena%202022.jpg"
  },
  "juan jose caceres": {
    "qid": "Q101791178",
    "name": "Juan José Cáceres",
    "birthDate": "2000-06-01",
    "height": "1.73 m",
    "club": "",
    "position": "defensa",
    "photo": ""
  },
  "omar alderete": {
    "qid": "Q41800131",
    "name": "Omar Alderete",
    "birthDate": "1996-12-26",
    "height": "1.88 m",
    "club": "Club de Gimnasia y Esgrima La Plata",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Omar%20Alderete%202019%20%28cropped%29.jpg"
  },
  "junior alonso": {
    "qid": "",
    "name": "Junior Alonso",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "mathias villasanti": {
    "qid": "Q29783600",
    "name": "Mathías Villasanti",
    "birthDate": "1997-01-24",
    "height": "1.78 m",
    "club": "Cerro Porteño",
    "position": "centrocampista",
    "photo": ""
  },
  "diego gomez": {
    "qid": "",
    "name": "Diego Gomez",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "damian bobadilla": {
    "qid": "Q116223348",
    "name": "Damián Bobadilla",
    "birthDate": "2001-07-11",
    "height": "1.81 m",
    "club": "",
    "position": "centrocampista",
    "photo": ""
  },
  "andres cubas": {
    "qid": "",
    "name": "Andres Cubas",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "matias galarza fonda": {
    "qid": "",
    "name": "Matias Galarza Fonda",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "julio enciso": {
    "qid": "",
    "name": "Julio Enciso",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "alejandro romero gamarra": {
    "qid": "Q19319791",
    "name": "Alejandro Romero Gamarra",
    "birthDate": "1995-01-11",
    "height": "1.65 m",
    "club": "New York Red Bulls",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Alejandro%20Romero%2020180612%20%28cropped%29.jpg"
  },
  "miguel almiron": {
    "qid": "Q16145667",
    "name": "Miguel Almirón",
    "birthDate": "1994-02-10",
    "height": "1.74 m",
    "club": "Atlanta United FC",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Miguel%20Almir%C3%B3n%20Red%20Bull%20Atlanta%205.31.25-069%20%28cropped%29.jpg"
  },
  "ramon sosa": {
    "qid": "",
    "name": "Ramon Sosa",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "angel romero": {
    "qid": "",
    "name": "Angel Romero",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "antonio sanabria": {
    "qid": "Q10856523",
    "name": "Antonio Sanabria",
    "birthDate": "1996-03-04",
    "height": "1.80 m",
    "club": "Fútbol Club Barcelona",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Antonio%20Sanabria%2C%202025%20%28cropped%29.jpg"
  },
  "diogo costa": {
    "qid": "Q26255578",
    "name": "Diogo Costa",
    "birthDate": "1999-09-19",
    "height": "1.92 m",
    "club": "Fútbol Club Oporto",
    "position": "guardameta",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Diogo%20Costa.jpg"
  },
  "jose sa": {
    "qid": "",
    "name": "Jose Sa",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "ruben dias": {
    "qid": "Q57907076",
    "name": "Ruben Dias",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "joao cancelo": {
    "qid": "Q6298063",
    "name": "João Cancelo",
    "birthDate": "1994-05-27",
    "height": "1.82 m",
    "club": "Al-Hilal",
    "position": "lateral",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Jo%C3%A3o%20Cancelo%20USMNT%20v%20Portugal%20Mar%2031%202026-30%20%28cropped%29.jpg"
  },
  "diogo dalot": {
    "qid": "Q26255506",
    "name": "Diogo Dalot",
    "birthDate": "1999-03-18",
    "height": "1.85 m",
    "club": "A.C. Milan",
    "position": "lateral",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Diogo%20Dalot%20USMNT%20v%20Portugal%20Mar%2031%202026-12.jpg"
  },
  "nuno mendes": {
    "qid": "Q553611",
    "name": "Nuno Mendes",
    "birthDate": "1984-05-10",
    "height": "1.75 m",
    "club": "Paris Saint-Germain FC",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Nuno%20Mendes%20%28chef%29%20%28cropped%29.jpg"
  },
  "goncalo inacio": {
    "qid": "Q99955331",
    "name": "Gonçalo Inácio",
    "birthDate": "2001-08-25",
    "height": "1.85 m",
    "club": "Sporting Clube de Portugal",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Portugal%20national%20football%20team%200866%20%28Gon%C3%A7alo%20In%C3%A1cio%29.jpg"
  },
  "bernardo silva": {
    "qid": "Q15521306",
    "name": "Bernardo Silva",
    "birthDate": "1994-08-10",
    "height": "1.73 m",
    "club": "Manchester City Football Club",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Por-Mar%20%289%29%20%28cropped%29.jpg"
  },
  "bruno fernandes": {
    "qid": "Q4979316",
    "name": "Bruno Fernandes",
    "birthDate": "1994-09-08",
    "height": "1.83 m",
    "club": "Manchester United Football Club",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Bruno%20Fernandes%20USMNT%20v%20Portugal%20Mar%2031%202026-27%20%28cropped%29.jpg"
  },
  "ruben neves": {
    "qid": "",
    "name": "Ruben Neves",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "vitinha": {
    "qid": "Q60734436",
    "name": "Vitinha",
    "birthDate": "1969-03-16",
    "height": "1.73 m",
    "club": "PFC Ludogorets Razgrad",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Vitinha%202015.jpg"
  },
  "joao neves": {
    "qid": "Q113551733",
    "name": "João Neves",
    "birthDate": "2004-09-27",
    "height": "1.74 m",
    "club": "Paris Saint-Germain FC",
    "position": "mediocampista defensivo",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Jo%C3%A3o%20Neves%20USMNT%20v%20Portugal%20Mar%2031%202026-18%20%28cropped%29.jpg"
  },
  "cristiano ronaldo": {
    "qid": "Q11571",
    "name": "Cristiano Ronaldo",
    "birthDate": "1985-02-05",
    "height": "1.85 m",
    "club": "Al-Nassr",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/2025%20Cristiano%20Ronaldo%20%28cropped%29.jpg"
  },
  "francisco trincao": {
    "qid": "",
    "name": "Francisco Trincao",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "joao felix": {
    "qid": "",
    "name": "João Felix",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "goncalo ramos": {
    "qid": "Q60621615",
    "name": "Gonçalo Ramos",
    "birthDate": "2001-06-20",
    "height": "1.85 m",
    "club": "Paris Saint-Germain FC",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Gon%C3%A7alo%20Ramos%20USMNT%20v%20Portugal%20Mar%2031%202026-32.jpg"
  },
  "pedro neto": {
    "qid": "Q30036972",
    "name": "Pedro Neto",
    "birthDate": "2000-03-09",
    "height": "1.73 m",
    "club": "Chelsea Football Club",
    "position": "extremo izquierdo",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Pedro%20Neto%20USMNT%20v%20Portugal%20Mar%2031%202026-48.jpg"
  },
  "rafael leao": {
    "qid": "Q30055335",
    "name": "Rafael Leão",
    "birthDate": "1999-06-10",
    "height": "1.88 m",
    "club": "A.C. Milan",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/RafaelLe%C3%A3oPortugal23.jpg"
  },
  "meshaal barsham": {
    "qid": "",
    "name": "Meshaal Barsham",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "sultan albrake": {
    "qid": "",
    "name": "Sultan Albrake",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "lucas mendes": {
    "qid": "Q28378557",
    "name": "Lucas Mendes",
    "birthDate": "1997-12-29",
    "height": "1.83 m",
    "club": "Al-Wakrah SC",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Lucas%20mendes.jpg"
  },
  "homam ahmed": {
    "qid": "Q64364375",
    "name": "Homam Ahmed",
    "birthDate": "1999-08-25",
    "height": "1.86 m",
    "club": "Al-Gharafa",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Asian%20Nations%20Cup%20Iran%20-%20Qatar%20%288%29%20%28cropped%29.jpg"
  },
  "boualem khoukhi": {
    "qid": "Q3643114",
    "name": "Boualem Khoukhi",
    "birthDate": "1990-07-09",
    "height": "1.83 m",
    "club": "Al-Sadd Sports Club",
    "position": "extremo izquierdo",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Boualem%20Khoukhi.png"
  },
  "pedro miguel": {
    "qid": "Q3374085",
    "name": "Pedro Miguel",
    "birthDate": "1967-08-23",
    "height": "",
    "club": "Clube Desportivo Feirense",
    "position": "defensa",
    "photo": ""
  },
  "tarek salman": {
    "qid": "Q39525477",
    "name": "Tarek Salman",
    "birthDate": "1997-12-05",
    "height": "1.79 m",
    "club": "Atlético Astorga Club de Fútbol",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Tarek%20Salman.jpg"
  },
  "mohamed al-mannai": {
    "qid": "Q137394484",
    "name": "Mohamed Al-Mannai",
    "birthDate": "2003-10-23",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "karim boudiaf": {
    "qid": "Q3812986",
    "name": "Karim Boudiaf",
    "birthDate": "1990-09-16",
    "height": "1.87 m",
    "club": "Al-Duhail SC",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Karim%20Boudiaf%20WC2022.jpg"
  },
  "assim madibo": {
    "qid": "Q21000530",
    "name": "Assim Madibo",
    "birthDate": "1996-10-22",
    "height": "1.68 m",
    "club": "Cultural y Deportiva Leonesa",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Qatar%20-%20Japan%2C%20AFC%20Asian%20Cup%202019%2058%20-%20Assim%20Madibo.jpg"
  },
  "ahmed fatehi": {
    "qid": "",
    "name": "Ahmed Fatehi",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "mohammed waad": {
    "qid": "Q28674143",
    "name": "Mohammed Waad",
    "birthDate": "1999-09-18",
    "height": "1.83 m",
    "club": "Al-Sadd Sports Club",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Asian%20Nations%20Cup%20Iran%20-%20Qatar%20%2822%29%20%28cropped%29.jpg"
  },
  "abdulaziz hatem": {
    "qid": "Q4665805",
    "name": "Abdulaziz Hatem",
    "birthDate": "1990-10-28",
    "height": "1.79 m",
    "club": "Al-Rayyan",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Abdulaziz%20Hatem%202012%202.jpg"
  },
  "hassan al-haydos": {
    "qid": "",
    "name": "Hassan Al-Haydos",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "edmilson junior": {
    "qid": "Q1957458",
    "name": "Edmilson Junior",
    "birthDate": "1994-08-19",
    "height": "1.83 m",
    "club": "Sint-Truidense",
    "position": "extremo izquierdo",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Edmilson%20Junior%202018.jpg"
  },
  "akram hassan afif": {
    "qid": "",
    "name": "Akram Hassan Afif",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "ahmed al ganehi": {
    "qid": "",
    "name": "Ahmed Al Ganehi",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "almoez ali": {
    "qid": "Q21011188",
    "name": "Almoez Abdulla",
    "birthDate": "1996-08-19",
    "height": "1.84 m",
    "club": "Al-Duhail SC",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Almoez%20Ali.jpg"
  },
  "ronwen williams": {
    "qid": "Q7366080",
    "name": "Ronwen Williams",
    "birthDate": "1992-01-21",
    "height": "1.84 m",
    "club": "Supersport United Football Club",
    "position": "guardameta",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Ronwen%20Williams%20AFCON2025Q%2035.jpg"
  },
  "sipho chaine": {
    "qid": "Q58796434",
    "name": "Sipho Chaine",
    "birthDate": "1996-12-14",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "aubrey modiba": {
    "qid": "Q26405966",
    "name": "Aubrey Modiba",
    "birthDate": "1995-07-22",
    "height": "1.60 m",
    "club": "Orlando Pirates Football Club",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Aubrey%20Modiba%20%28cropped%29.jpg"
  },
  "samukele kabini": {
    "qid": "Q133794425",
    "name": "Samukele Kabini",
    "birthDate": "2004-03-15",
    "height": "1.81 m",
    "club": "",
    "position": "",
    "photo": ""
  },
  "mbekezeli mbokazi": {
    "qid": "Q133464757",
    "name": "Mbekezeli Mbokazi",
    "birthDate": "2005-09-19",
    "height": "1.77 m",
    "club": "",
    "position": "",
    "photo": ""
  },
  "khulumani ndamane": {
    "qid": "Q137299823",
    "name": "Khulumani Ndamane",
    "birthDate": "2004-02-05",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "siyabonga ngezana": {
    "qid": "Q58580035",
    "name": "Siyabonga Ngezana",
    "birthDate": "1997-11-15",
    "height": "1.91 m",
    "club": "Steaua de Bucarest",
    "position": "defensor central",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Siyabonga%20Ngezana%20-%203%20July%202023%20%28cropped%29.jpg"
  },
  "khuliso mudau": {
    "qid": "Q58810793",
    "name": "Khuliso Mudau",
    "birthDate": "1995-04-26",
    "height": "1.81 m",
    "club": "Mamelodi Sundowns Football Club",
    "position": "defensa",
    "photo": ""
  },
  "nkosinathi sibisi": {
    "qid": "Q58580967",
    "name": "Nkosinathi Sibisi",
    "birthDate": "1995-05-22",
    "height": "1.72 m",
    "club": "",
    "position": "",
    "photo": ""
  },
  "teboho mokoena": {
    "qid": "Q58790870",
    "name": "Teboho Mokoena",
    "birthDate": "1997-01-24",
    "height": "1.76 m",
    "club": "",
    "position": "centrocampista",
    "photo": ""
  },
  "thalente mbatha": {
    "qid": "Q130261099",
    "name": "Thalente Mbatha",
    "birthDate": "2000-03-06",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "bathasi aubaas": {
    "qid": "",
    "name": "Bathasi Aubaas",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "yaya sithole": {
    "qid": "",
    "name": "Yaya Sithole",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "sipho mbule": {
    "qid": "Q58790826",
    "name": "Sipho Mbule",
    "birthDate": "1998-03-22",
    "height": "1.77 m",
    "club": "",
    "position": "",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Go%20Ahead%20Eagles%20-%20Mamelodi%20Sundowns%20FC%20-%2053066348370.jpg"
  },
  "lyle foster": {
    "qid": "Q42725482",
    "name": "Lyle Foster",
    "birthDate": "2000-09-03",
    "height": "1.85 m",
    "club": "Orlando Pirates Football Club",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Lyle%20Foster%2029112025%20%286%29.jpg"
  },
  "iqraam rayners": {
    "qid": "Q100565190",
    "name": "Iqraam Rayners",
    "birthDate": "1995-12-19",
    "height": "1.76 m",
    "club": "Mamelodi Sundowns Football Club",
    "position": "delantero",
    "photo": ""
  },
  "mohau nkota": {
    "qid": "Q131686388",
    "name": "Mohau Nkota",
    "birthDate": "2004-11-09",
    "height": "1.67 m",
    "club": "Al-Ettifaq",
    "position": "alero",
    "photo": ""
  },
  "oswin appollis": {
    "qid": "Q64167435",
    "name": "Oswin Appollis",
    "birthDate": "2001-08-25",
    "height": "1.71 m",
    "club": "Orlando Pirates Football Club",
    "position": "centrocampista",
    "photo": ""
  },
  "angus gunn": {
    "qid": "Q20807705",
    "name": "Angus Gunn",
    "birthDate": "1996-01-22",
    "height": "1.96 m",
    "club": "Manchester City Football Club",
    "position": "guardameta",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Angus.gunn.jpg"
  },
  "jack hendry": {
    "qid": "Q10551356",
    "name": "Jack Hendry",
    "birthDate": "1867-01-01",
    "height": "1.88 m",
    "club": "Heanor Town F.C.",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Notts%20county%201894%20%28Hendry%29.jpg"
  },
  "kieran tierney": {
    "qid": "Q19888012",
    "name": "Kieran Tierney",
    "birthDate": "1997-06-05",
    "height": "1.78 m",
    "club": "",
    "position": "defensor central",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Kieran%20Tierney%20%2826938128442%29%20%28cropped%29.jpg"
  },
  "aaron hickey": {
    "qid": "Q64010525",
    "name": "Aaron Hickey",
    "birthDate": "2002-06-10",
    "height": "1.85 m",
    "club": "Heart of Midlothian Football Club",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Aaron%20Hickey%2002082025%20%281%29.jpg"
  },
  "andrew robertson": {
    "qid": "Q2846717",
    "name": "Andrew Robertson",
    "birthDate": "1990-12-17",
    "height": "1.75 m",
    "club": "",
    "position": "",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Andy%20Robertson%202015.jpg"
  },
  "scott mckenna": {
    "qid": "Q24084667",
    "name": "Scott McKenna",
    "birthDate": "1996-11-12",
    "height": "1.89 m",
    "club": "Ayr United Football Club",
    "position": "defensor central",
    "photo": ""
  },
  "john souttar": {
    "qid": "Q3238952",
    "name": "John Souttar",
    "birthDate": "1996-09-25",
    "height": "1.86 m",
    "club": "Heart of Midlothian Football Club",
    "position": "defensor central",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/John%20Souttar%202023.jpg"
  },
  "anthony ralston": {
    "qid": "Q24073962",
    "name": "Tony Ralston",
    "birthDate": "1998-11-16",
    "height": "1.83 m",
    "club": "Celtic Football Club",
    "position": "lateral",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Celtic-20240722-034.jpg"
  },
  "grant hanley": {
    "qid": "Q1362064",
    "name": "Grant Hanley",
    "birthDate": "1991-11-20",
    "height": "1.88 m",
    "club": "Hibernian F.C.",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Grant%20Hanley%20%28cropped%29.jpg"
  },
  "scott mctominay": {
    "qid": "Q29624459",
    "name": "Scott McTominay",
    "birthDate": "1996-12-08",
    "height": "1.90 m",
    "club": "Società Sportiva Calcio Napoli",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Scott%20McTominay%202021.jpg"
  },
  "billy gilmour": {
    "qid": "Q2580983",
    "name": "Billy Gilmour",
    "birthDate": "1885-03-21",
    "height": "1.70 m",
    "club": "Chelsea Football Club",
    "position": "alero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/BIlly%20Gilmour%2C%20Ottawa%20Hockey%20Club.png"
  },
  "lewis ferguson": {
    "qid": "Q47467341",
    "name": "Lewis Ferguson",
    "birthDate": "1999-08-24",
    "height": "1.81 m",
    "club": "Rangers Football Club",
    "position": "centrocampista",
    "photo": ""
  },
  "ryan christie": {
    "qid": "Q16236700",
    "name": "Ryan Christie",
    "birthDate": "1995-02-22",
    "height": "1.78 m",
    "club": "Calgary Flames",
    "position": "alero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Ryan%20Christie%20%28cropped%29.jpg"
  },
  "kenny mclean": {
    "qid": "Q107650271",
    "name": "Kenny McLean",
    "birthDate": "1939-01-01",
    "height": "1.83 m",
    "club": "",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Kenny%20McLean%202021-08-07%201.jpg"
  },
  "john mcginn": {
    "qid": "Q10547335",
    "name": "John McGinn",
    "birthDate": "1994-10-18",
    "height": "1.78 m",
    "club": "Aston Villa Football Club",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/John%20McGinn%202019.jpg"
  },
  "lyndon dykes": {
    "qid": "Q26405109",
    "name": "Lyndon Dykes",
    "birthDate": "1995-10-07",
    "height": "1.88 m",
    "club": "",
    "position": "delantero",
    "photo": ""
  },
  "che adams": {
    "qid": "",
    "name": "Che Adams",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "ben gannon-doak": {
    "qid": "",
    "name": "Ben Gannon-Doak",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "edouard mendy": {
    "qid": "",
    "name": "Edouard Mendy",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "yehvann diouf": {
    "qid": "Q64010489",
    "name": "Yehvann Diouf",
    "birthDate": "1999-11-16",
    "height": "1.90 m",
    "club": "Stade de Reims",
    "position": "guardameta",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Diouf%20asse%20sr%202425.png"
  },
  "moussa niakhate": {
    "qid": "",
    "name": "Moussa Niakhaté",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "abdoulaye seck": {
    "qid": "Q130376071",
    "name": "Abdoulaye Seck",
    "birthDate": "1988-03-10",
    "height": "1.89 m",
    "club": "Maccabi Haifa Football Club",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Abdoulaye%20Seck.jpg"
  },
  "ismail jakobs": {
    "qid": "Q74178822",
    "name": "Ismail Jakobs",
    "birthDate": "1999-08-17",
    "height": "1.84 m",
    "club": "A.S. Monaco F.C.",
    "position": "lateral",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Ismail%20Jakobs.jpg"
  },
  "el hadji malick diouf": {
    "qid": "Q99605647",
    "name": "El Hadji Malick Diouf",
    "birthDate": "2004-12-28",
    "height": "1.83 m",
    "club": "",
    "position": "defensa",
    "photo": ""
  },
  "kalidou koulibaly": {
    "qid": "Q3192187",
    "name": "Kalidou Koulibaly",
    "birthDate": "1991-06-20",
    "height": "1.88 m",
    "club": "Al-Hilal",
    "position": "defensor central",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Joueur%20de%20foot.jpg"
  },
  "idrissa gana gueye": {
    "qid": "",
    "name": "Idrissa Gana Gueye",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "pape matar sarr": {
    "qid": "Q104877690",
    "name": "Pape Matar Sarr",
    "birthDate": "2002-09-14",
    "height": "1.85 m",
    "club": "",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/RC%20Lens%20-%20FC%20Metz%20%2814-03-2021%29%2037.jpg"
  },
  "pape gueye": {
    "qid": "Q45935395",
    "name": "Pape Gueye",
    "birthDate": "1999-01-24",
    "height": "1.89 m",
    "club": "Villarreal Club de Fútbol",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Pape%20Gueye%20Le%20Havre%20AC%202019.jpg"
  },
  "habib diarra": {
    "qid": "Q108924143",
    "name": "Habib Diarra",
    "birthDate": "2004-01-03",
    "height": "1.79 m",
    "club": "",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Diarra%20asse%20rcsa%202425.jpg"
  },
  "lamine camara": {
    "qid": "Q63537079",
    "name": "Lamine Camara",
    "birthDate": "1979-02-27",
    "height": "1.73 m",
    "club": "",
    "position": "",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/5.%20Islamic%20Solidarity%20Games%202021%20Konya%207%20Lamine%20Camara%20%28cropped%29.jpg"
  },
  "sadio mane": {
    "qid": "",
    "name": "Sadio Mane",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "ismaila sarr": {
    "qid": "Q26924482",
    "name": "Ismaïla Sarr",
    "birthDate": "1998-02-25",
    "height": "1.80 m",
    "club": "Watford Football Club",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Ismaila%20Sarr%202022.jpg"
  },
  "boulaye dia": {
    "qid": "Q57603663",
    "name": "Boulaye Dia",
    "birthDate": "1996-11-16",
    "height": "1.80 m",
    "club": "Stade de Reims",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Boulaye%20Dia%20Reims.jpg"
  },
  "iliman ndiaye": {
    "qid": "Q105956269",
    "name": "Iliman Ndiaye",
    "birthDate": "2000-03-06",
    "height": "1.80 m",
    "club": "Olympique de Marsella",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Iliman%20Ndiaye.png"
  },
  "nicolas jackson": {
    "qid": "Q100144350",
    "name": "Nicolás Juanson",
    "birthDate": "2001-06-20",
    "height": "1.87 m",
    "club": "Chelsea Football Club",
    "position": "",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Nicolas%20Jackson%202025%20FIFA%20Club%20World%20Cup%20Final.jpg"
  },
  "krepin diatta": {
    "qid": "Q29168109",
    "name": "Krepin Diatta",
    "birthDate": "1999-02-25",
    "height": "1.75 m",
    "club": "A.S. Monaco F.C.",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Diatta%20asse%20asm%202425.png"
  },
  "gregor kobel": {
    "qid": "Q36184031",
    "name": "Gregor Kobel",
    "birthDate": "1997-12-06",
    "height": "1.94 m",
    "club": "Borussia Dortmund",
    "position": "guardameta",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/2023-08-12%20TSV%20Schott%20Mainz%20gegen%20Borussia%20Dortmund%20%28DFB-Pokal%202023-24%29%20by%20Sandro%20Halank%E2%80%93090.jpg"
  },
  "yvon mvogo": {
    "qid": "Q16236380",
    "name": "Yvon Mvogo",
    "birthDate": "1994-06-06",
    "height": "1.86 m",
    "club": "BSC Young Boys",
    "position": "guardameta",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Yvon%20Mvogo.jpg"
  },
  "manuel akanji": {
    "qid": "Q19938984",
    "name": "Manuel Akanji",
    "birthDate": "1995-07-19",
    "height": "1.87 m",
    "club": "Inter de Milán",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/2023-10-04%20Fu%C3%9Fball%2C%20M%C3%A4nner%2C%20UEFA%20Champions%20League%2C%20RB%20Leipzig%20-%20Manchester%20City%20FC%201DX%202792%20%28Manuel%20Akanji%29.jpg"
  },
  "ricardo rodriguez": {
    "qid": "Q1370915",
    "name": "Jesús Rodríguez",
    "birthDate": "1986-02-17",
    "height": "1.83 m",
    "club": "Real Betis Balompié",
    "position": "lateral",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Ricardo-Rodriguez-WWE-2011.jpg"
  },
  "nico elvedi": {
    "qid": "Q18637339",
    "name": "Nico Elvedi",
    "birthDate": "1996-09-30",
    "height": "1.88 m",
    "club": "Borussia Mönchengladbach",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Wales-Switzerland%20match%20at%20Euro%202020%20in%20Baku%20%28cropped%29.jpg"
  },
  "aurele amenda": {
    "qid": "Q111805882",
    "name": "Aurèle Amenda",
    "birthDate": "2003-07-31",
    "height": "1.94 m",
    "club": "",
    "position": "defensa",
    "photo": ""
  },
  "silvan widmer": {
    "qid": "Q114386",
    "name": "Silvan Widmer",
    "birthDate": "1993-03-05",
    "height": "1.82 m",
    "club": "Udinese Calcio",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/AUT%20vs.%20SUI%202015-11-17%20%28173%29%20Silvan%20Widmer.jpg"
  },
  "granit xhaka": {
    "qid": "Q514427",
    "name": "Granit Xhaka",
    "birthDate": "1992-09-27",
    "height": "1.85 m",
    "club": "Sunderland Association Football Club",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Granit%20Xhaka%20%28cropped%29.jpg"
  },
  "denis zakaria": {
    "qid": "Q21066260",
    "name": "Denis Zakaria",
    "birthDate": "1996-11-20",
    "height": "1.91 m",
    "club": "A.S. Monaco F.C.",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Zakaria%20asse%20asm%202425.png"
  },
  "remo freuler": {
    "qid": "Q16595441",
    "name": "Remo Freuler",
    "birthDate": "1992-04-15",
    "height": "1.80 m",
    "club": "Bologna Football Club 1909",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/RemoFreuler.jpg"
  },
  "fabian rieder": {
    "qid": "Q101033685",
    "name": "Fabian Rieder",
    "birthDate": "2002-02-16",
    "height": "1.81 m",
    "club": "",
    "position": "centrocampista",
    "photo": ""
  },
  "ardon jashari": {
    "qid": "Q98816361",
    "name": "Ardon Jashari",
    "birthDate": "2002-07-30",
    "height": "1.80 m",
    "club": "A.C. Milan",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Ardon%20Jashari.jpg"
  },
  "johan manzambi": {
    "qid": "Q125376751",
    "name": "Johan Manzambi",
    "birthDate": "2005-10-14",
    "height": "1.82 m",
    "club": "SC Freiburg II",
    "position": "delantero",
    "photo": ""
  },
  "michel aebischer": {
    "qid": "Q27469951",
    "name": "Michel Aebischer",
    "birthDate": "1997-01-06",
    "height": "1.83 m",
    "club": "BSC Young Boys",
    "position": "centrocampista",
    "photo": ""
  },
  "breel embolo": {
    "qid": "Q15956282",
    "name": "Breel Embolo",
    "birthDate": "1997-02-14",
    "height": "1.85 m",
    "club": "Stade Rennais Football Club",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/2022128160447%202022-05-08%20Fussball%20Eintracht%20Frankfurt%20vs%20Borussia%20M%C3%B6nchengladbach%20-%20Sven%20-%201D%20X%20MK%20II%20-%201422%20-%20B70I7533%20%28cropped%29.jpg"
  },
  "ruben vargas": {
    "qid": "Q38053896",
    "name": "Ruben Vargas",
    "birthDate": "1998-08-05",
    "height": "1.74 m",
    "club": "Sevilla Fútbol Club",
    "position": "extremo izquierdo",
    "photo": ""
  },
  "dan ndoye": {
    "qid": "Q61439485",
    "name": "Dan Ndoye",
    "birthDate": "2000-10-25",
    "height": "1.84 m",
    "club": "OGC Niza",
    "position": "delantero centro",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Lens%20-%20Nice%20%2823-01-2021%29%2052.jpg"
  },
  "zeki amdouni": {
    "qid": "Q106882153",
    "name": "Zeki Amdouni",
    "birthDate": "2000-12-04",
    "height": "1.75 m",
    "club": "Sport Lisboa e Benfica",
    "position": "delantero",
    "photo": ""
  },
  "victor johansson": {
    "qid": "Q5888107",
    "name": "Victor Johansson",
    "birthDate": "1998-09-13",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "isak hien": {
    "qid": "Q105127935",
    "name": "Isak Hien",
    "birthDate": "1999-01-13",
    "height": "1.91 m",
    "club": "Djurgårdens IF Fotboll",
    "position": "",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Sweden-Slovenia%20Nations%20League%202022-09-27%2032%20%28cropped%29.jpg"
  },
  "gabriel gudmundsson": {
    "qid": "Q29318963",
    "name": "Gabriel Gudmundsson",
    "birthDate": "1999-04-29",
    "height": "1.80 m",
    "club": "Halmstads BK",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Gabriel%20Gudmundsson%20%28Sweden%20vs%20Moldova%2C%2012%20October%202023%29%20%28cropped%29.jpg"
  },
  "emil holm": {
    "qid": "Q2151879",
    "name": "Emil Holm",
    "birthDate": "1877-09-02",
    "height": "1.91 m",
    "club": "IFK Göteborg",
    "position": "lateral",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/EmilHolm.png"
  },
  "victor nilsson lindelof": {
    "qid": "",
    "name": "Victor Nilsson Lindelöf",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "gustaf lagerbielke": {
    "qid": "Q107316383",
    "name": "Gustaf Lagerbielke",
    "birthDate": "2000-04-10",
    "height": "1.93 m",
    "club": "AIK Estocolmo",
    "position": "",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Gustaf%20Lagerbielke%20%28Sweden%20vs%20Moldova%2C%2012%20October%202023%29.jpg"
  },
  "lucas bergvall": {
    "qid": "Q115371638",
    "name": "Lucas Bergvall",
    "birthDate": "2006-02-02",
    "height": "1.87 m",
    "club": "Tottenham Hotspur Football Club",
    "position": "",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Lucas%20Bergvall%20%28Sweden%20U21%20vs%20Moldova%20U21%2C%2013%20October%202023%29.jpg"
  },
  "hugo larsson": {
    "qid": "Q111586862",
    "name": "Hugo Larsson",
    "birthDate": "2004-06-27",
    "height": "1.87 m",
    "club": "Malmö FF",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Hugo%20Larsson%20%282023%29.jpg"
  },
  "jesper karlstrom": {
    "qid": "Q16633144",
    "name": "Jesper Karlström",
    "birthDate": "1995-06-21",
    "height": "1.79 m",
    "club": "Djurgårdens IF Fotboll",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Jesper%20Karlstr%C3%B6m%20%28Djurg%C3%A5rden%2C%202020%2C%20cropped%29.jpg"
  },
  "yasin ayari": {
    "qid": "Q103979811",
    "name": "Yasin Ayari",
    "birthDate": "2003-10-06",
    "height": "1.72 m",
    "club": "AIK Estocolmo",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Yasin%20Ayari%20%28Sweden%20U21%20vs%20Moldova%20U21%2C%2013%20October%202023%29.jpg"
  },
  "mattias svanberg": {
    "qid": "Q23915221",
    "name": "Mattias Svanberg",
    "birthDate": "1999-01-05",
    "height": "1.85 m",
    "club": "Malmö FF",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Mattias%20Svanberg.jpg"
  },
  "daniel svensson": {
    "qid": "Q5218874",
    "name": "Daniel Svensson",
    "birthDate": "1983-01-04",
    "height": "1.83 m",
    "club": "Borussia Dortmund",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Daniel%20Svensson%20Nordsjaelland%20%28Testspiel%202023-07-08%29%2048%20%28cropped%29.jpg"
  },
  "ken sema": {
    "qid": "Q10544852",
    "name": "Ken Sema",
    "birthDate": "1993-09-30",
    "height": "1.77 m",
    "club": "Udinese Calcio",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/UEFA%20EURO%20qualifiers%20Sweden%20vs%20Spain%2020191015%2052%20%28Ken%20Sema%29.jpg"
  },
  "roony bardghji": {
    "qid": "Q109659531",
    "name": "Roony Bardghji",
    "birthDate": "2005-11-15",
    "height": "1.73 m",
    "club": "Fútbol Club Barcelona",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Roony%20Bardghji%2C%20Vejle%20Boldklub%20-%20FC%20K%C3%B8benhavn%2C%2029.%20July%202023%20-%20opvarmning%20%28cropped%29.jpg"
  },
  "dejan kulusevski": {
    "qid": "Q59914139",
    "name": "Dejan Kulusevski",
    "birthDate": "2000-04-25",
    "height": "1.86 m",
    "club": "IF Brommapojkarna",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Sweden-Slovenia%20Nations%20League%202022-09-27%2017%20Kulusevski%20%28cropped%29.jpg"
  },
  "anthony elanga": {
    "qid": "Q106805131",
    "name": "Antonio José Eltanga",
    "birthDate": "2002-04-27",
    "height": "1.78 m",
    "club": "Newcastle United Football Club",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Anthony%20Elanga%20%28Sweden%20vs%20Moldova%2C%2012%20October%202023%29.jpg"
  },
  "alexander isak": {
    "qid": "Q23759917",
    "name": "Alexander Isak",
    "birthDate": "1999-09-21",
    "height": "1.92 m",
    "club": "Liverpool Fútbol Club",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/UEFA%20EURO%20qualifiers%20Sweden%20vs%20Spain%2020191015%20Alexander%20Isak%2056%20%28cropped%29.jpg"
  },
  "viktor gyokeres": {
    "qid": "Q47075606",
    "name": "Viktor Gyökeres",
    "birthDate": "1998-06-04",
    "height": "1.89 m",
    "club": "Arsenal Fútbol Club",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Viktor%20Gy%C3%B6keres%202018.jpg"
  },
  "bechir ben said": {
    "qid": "",
    "name": "Bechir Ben Said",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "aymen dahmen": {
    "qid": "Q64520753",
    "name": "Aymen Dahmen",
    "birthDate": "1997-01-28",
    "height": "1.88 m",
    "club": "Club Sportif Sfaxien",
    "position": "guardameta",
    "photo": ""
  },
  "yan valery": {
    "qid": "Q59268317",
    "name": "Yan Valery",
    "birthDate": "1999-02-22",
    "height": "1.80 m",
    "club": "Southampton Football Club",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Sheffield%20Wednesday%27s%20Starting%20Eleven%2018102025%20%281%29%20%28cropped%29.jpg"
  },
  "montassar talbi": {
    "qid": "Q30118244",
    "name": "Montassar Talbi",
    "birthDate": "1998-05-26",
    "height": "1.90 m",
    "club": "Football Club Lorient-Bretagne Sud",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Montassar%20Talbi%202022.jpg"
  },
  "yassine meriah": {
    "qid": "Q19956607",
    "name": "Yassine Meriah",
    "birthDate": "1993-07-02",
    "height": "1.88 m",
    "club": "Club Sportif Sfaxien",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Yassine%20Meriah.jpg"
  },
  "ali abdi": {
    "qid": "Q64933771",
    "name": "Ali Abdi",
    "birthDate": "1993-12-20",
    "height": "1.83 m",
    "club": "OGC Niza",
    "position": "lateral",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Ali%20Abdi%201402032314005672427763454.jpg"
  },
  "dylan bronn": {
    "qid": "Q26405549",
    "name": "Dylan Bronn",
    "birthDate": "1995-06-19",
    "height": "1.85 m",
    "club": "KAA Gent",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Dylan%20Bronn.jpg"
  },
  "ellyes skhiri": {
    "qid": "Q20641500",
    "name": "Ellyes Skhiri",
    "birthDate": "1995-05-10",
    "height": "1.85 m",
    "club": "Eintracht Frankfurt",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/2021-08-08%20FC%20Carl%20Zeiss%20Jena%20gegen%201.%20FC%20K%C3%B6ln%20%28DFB-Pokal%29%20by%20Sandro%20Halank%E2%80%93182.jpg"
  },
  "aissa laidouni": {
    "qid": "",
    "name": "Aissa Laidouni",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "ferjani sassi": {
    "qid": "Q16636036",
    "name": "Ferjani Sassi",
    "birthDate": "1992-03-18",
    "height": "1.85 m",
    "club": "Al-Gharafa",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Ferjani%20Sassi%202.jpg"
  },
  "mohamed ali ben romdhane": {
    "qid": "Q64593906",
    "name": "Mohamed Ali Ben Romdhane",
    "birthDate": "1999-09-06",
    "height": "1.82 m",
    "club": "Ferencváros T.C.",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Mohamed%20Ali%20Ben%20Romdhane.jpg"
  },
  "hannibal mejbri": {
    "qid": "Q96755704",
    "name": "Hannibal Mejbri",
    "birthDate": "2003-01-21",
    "height": "1.77 m",
    "club": "",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Hannibal%20Mejbri%2026042025%20%281%29.jpg"
  },
  "elias achouri": {
    "qid": "Q64740426",
    "name": "Elias Achouri",
    "birthDate": "1999-02-10",
    "height": "1.77 m",
    "club": "A.S. Saint-Étienne",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Elias%20Achouri%2C%20Vejle%20Boldklub%20-%20FC%20K%C3%B8benhavn%2C%2029.%20July%202023%20-%20opvarmning%20FCK%27s%201.%20hold%20%28cropped%29.jpg"
  },
  "elias saad": {
    "qid": "Q87218261",
    "name": "Elias Saad",
    "birthDate": "1999-12-27",
    "height": "1.85 m",
    "club": "",
    "position": "extremo izquierdo",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/2025-04-23%20-%20FC%20St%20Pauli%20-%20Elias%20Saad.jpg"
  },
  "hazem mastouri": {
    "qid": "Q134699960",
    "name": "Hazem Mastouri",
    "birthDate": "1997-06-18",
    "height": "1.91 m",
    "club": "",
    "position": "delantero",
    "photo": ""
  },
  "ismael gharbi": {
    "qid": "",
    "name": "Ismael Gharbi",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "sayfallah ltaief": {
    "qid": "Q113133277",
    "name": "Sayfallah Ltaief",
    "birthDate": "2000-04-22",
    "height": "1.78 m",
    "club": "",
    "position": "extremo izquierdo",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Sayfallah%20Ltaief.jpg"
  },
  "naim sliti": {
    "qid": "",
    "name": "Naim Sliti",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "ugurcan cakir": {
    "qid": "",
    "name": "Ugurcan Cakir",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "mert muldur": {
    "qid": "",
    "name": "Mert Muldur",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "zeki celik": {
    "qid": "",
    "name": "Zeki Celik",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "abdulkerim bardakci": {
    "qid": "",
    "name": "Abdulkerim Bardakci",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "caglar soyuncu": {
    "qid": "",
    "name": "Caglar Soyuncu",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "merih demiral": {
    "qid": "Q29047921",
    "name": "Merih Demiral",
    "birthDate": "1998-03-05",
    "height": "1.92 m",
    "club": "Al-Ahli",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Demiral%20in%20the%20international%20match%20in%20September%202020%20%28Cropped%29.jpg"
  },
  "ferdi kadioglu": {
    "qid": "",
    "name": "Ferdi Kadioglu",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "kaan ayhan": {
    "qid": "Q3191617",
    "name": "Kaan Ayhan",
    "birthDate": "1994-11-10",
    "height": "1.84 m",
    "club": "Eintracht Frankfurt",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Kaan-Ayhan-08-2019.jpg"
  },
  "ismail yuksek": {
    "qid": "",
    "name": "Ismail Yuksek",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "hakan calhanoglu": {
    "qid": "",
    "name": "Hakan Calhanoglu",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "orkun kokcu": {
    "qid": "",
    "name": "Orkun Kokcu",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "arda guler": {
    "qid": "",
    "name": "Arda Guler",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "irfan can kahveci": {
    "qid": "",
    "name": "Irfan Can Kahveci",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "yunus akgun": {
    "qid": "",
    "name": "Yunus Akgun",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "can uzun": {
    "qid": "Q118799181",
    "name": "Can Uzun",
    "birthDate": "2005-11-11",
    "height": "1.86 m",
    "club": "Eintracht Frankfurt",
    "position": "attacking midfielder",
    "photo": ""
  },
  "baris alper yilmaz": {
    "qid": "",
    "name": "Baris Alper Yilmaz",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "kerem akturkoglu": {
    "qid": "",
    "name": "Kerem Akturkoglu",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "kenan yildiz": {
    "qid": "",
    "name": "Kenan Yildiz",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "sergio rochet": {
    "qid": "Q17086753",
    "name": "Sergio Rochet",
    "birthDate": "1993-03-23",
    "height": "1.90 m",
    "club": "AZ Alkmaar",
    "position": "guardameta",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Sergio%20Rochet%20%282022%29.jpg"
  },
  "santiago mele": {
    "qid": "Q27921765",
    "name": "Santiago Mele",
    "birthDate": "1997-09-06",
    "height": "1.85 m",
    "club": "Ankaraspor",
    "position": "guardameta",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Santiago%20Mele.jpg"
  },
  "ronald araujo": {
    "qid": "",
    "name": "Ronald Araujo",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "jose maria gimenez": {
    "qid": "Q13634114",
    "name": "José María Giménez",
    "birthDate": "1995-01-20",
    "height": "1.85 m",
    "club": "Atlético de Madrid",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Jos%C3%A9%20Mar%C3%ADa%20Gim%C3%A9nez%20%28cropped%29.jpg"
  },
  "sebastian caceres": {
    "qid": "",
    "name": "Sebastian Caceres",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "mathias olivera": {
    "qid": "",
    "name": "Mathias Olivera",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "guillermo varela": {
    "qid": "Q13422031",
    "name": "Guillermo Varela",
    "birthDate": "1993-03-24",
    "height": "1.71 m",
    "club": "FC Copenhague",
    "position": "lateral",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Guillermo%20Varela%202022.jpg"
  },
  "nahitan nandez": {
    "qid": "",
    "name": "Nahitan Nandez",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "federico valverde": {
    "qid": "Q42290597",
    "name": "Federico Valverde",
    "birthDate": "1998-07-22",
    "height": "1.83 m",
    "club": "Real Madrid Club de Fútbol",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Federico%20Valverde%202021%20%28cropped%29.jpg"
  },
  "giorgian de arrascaeta": {
    "qid": "",
    "name": "Giorgian De Arrascaeta",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "rodrigo bentancur": {
    "qid": "Q18817134",
    "name": "Rodrigo Bentancur Colmán",
    "birthDate": "1997-06-25",
    "height": "1.85 m",
    "club": "",
    "position": "volante",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/20171114%20AUT%20URU%204518%20-%20Rodrigo%20Bentancur%20%28cropped%29%202.jpg"
  },
  "manuel ugarte": {
    "qid": "Q507453",
    "name": "Manuel Ugarte",
    "birthDate": "1875-02-27",
    "height": "1.82 m",
    "club": "Manchester United Football Club",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Manuel%20Ugarte.jpg"
  },
  "nicolas de la cruz": {
    "qid": "",
    "name": "Nicolás de la Cruz",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "maxi araujo": {
    "qid": "",
    "name": "Maxi Araujo",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "darwin nunez": {
    "qid": "Q46372260",
    "name": "Darwin Núñez",
    "birthDate": "1999-06-24",
    "height": "1.87 m",
    "club": "Al-Hilal",
    "position": "",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Darwin%20N%C3%BA%C3%B1ez%20%28cropped%29.jpg"
  },
  "federico vinas": {
    "qid": "Q62594816",
    "name": "Federico Viñas",
    "birthDate": "1998-06-30",
    "height": "1.83 m",
    "club": "Club León",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Federico%20Vi%C3%B1as.jpg"
  },
  "rodrigo aguirre": {
    "qid": "Q2070073",
    "name": "Rodrigo Aguirre",
    "birthDate": "1994-10-01",
    "height": "1.86 m",
    "club": "Club Atlético Peñarol",
    "position": "delantero",
    "photo": ""
  },
  "facundo pellistri": {
    "qid": "Q72091732",
    "name": "Facundo Pellistri",
    "birthDate": "2001-12-20",
    "height": "1.74 m",
    "club": "Panathinaikos Fútbol Club",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Facundo%20Pellistri%20WC2022.jpg"
  },
  "math freese": {
    "qid": "",
    "name": "Math Freese",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "chris richards": {
    "qid": "Q60839691",
    "name": "Chris Richards",
    "birthDate": "2000-03-28",
    "height": "1.88 m",
    "club": "F. C. Bayern Múnich",
    "position": "central",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Chris%20Richards%20%28soccer%29.jpg"
  },
  "tim ream": {
    "qid": "Q716113",
    "name": "Tim Ream",
    "birthDate": "1987-10-05",
    "height": "1.86 m",
    "club": "Fulham Football Club",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Tim%20Ream%20NYCFC%20v%20Charlotte%2020%20Sep%202025-021%20%28cropped%29.jpg"
  },
  "mark mckenzie": {
    "qid": "Q1900269",
    "name": "Mark McKenzie",
    "birthDate": "1957-01-01",
    "height": "1.84 m",
    "club": "Escocia A",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/McKenzie%20asse%20tfc%202425.png"
  },
  "alex freeman": {
    "qid": "Q111604014",
    "name": "Alex Freeman",
    "birthDate": "2004-08-09",
    "height": "1.88 m",
    "club": "Villarreal Club de Fútbol",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Alex%20Freeman%20USMNT%20v%20Belgium%20Mar%2028%202026-59%20%28cropped%29.jpg"
  },
  "antonee robinson": {
    "qid": "Q35778151",
    "name": "Antonee Robinson",
    "birthDate": "1997-08-08",
    "height": "1.83 m",
    "club": "Everton F.C.",
    "position": "lateral",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Antonee%20Robinson%20WC2022%20%28cropped%29.jpg"
  },
  "tyler adams": {
    "qid": "Q100718382",
    "name": "Tyler Adams",
    "birthDate": "1999-02-14",
    "height": "1.75 m",
    "club": "AFC Bournemouth",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/2021-11-06%20Fu%C3%9Fball%2C%20M%C3%A4nner%2C%201.%20Bundesliga%2C%20RB%20Leipzig%20-%20Borussia%20Dortmund%201DX%201527%20by%20Stepro%20%28cropped%29.jpg"
  },
  "tanner tessmann": {
    "qid": "Q64009852",
    "name": "Tanner Tessmann",
    "birthDate": "2001-09-24",
    "height": "1.88 m",
    "club": "Olympique de Lyon",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Tessmann%20asse%20ol%202425.png"
  },
  "weston mckenny": {
    "qid": "",
    "name": "Weston McKenny",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "christian roldan": {
    "qid": "",
    "name": "Christian Roldan",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "timothy weah": {
    "qid": "Q31871265",
    "name": "Timothy Weah",
    "birthDate": "2000-02-22",
    "height": "1.83 m",
    "club": "Juventus",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/2022%20FIFA%20World%20Cup%20United%20States%201%E2%80%931%20Wales%20-%20%2817%29%20%28cropped%29.jpg"
  },
  "diego luna": {
    "qid": "Q313044",
    "name": "Diego Luna",
    "birthDate": "1979-12-29",
    "height": "1.84 m",
    "club": "Deportivo La Guaira F.C",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Diego%20Luna%20-%20Andor.jpg"
  },
  "malik tillman": {
    "qid": "Q96391665",
    "name": "Malik Tillman",
    "birthDate": "2002-05-28",
    "height": "1.87 m",
    "club": "Bayer 04 Leverkusen",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Malik-Tillman-2025.jpg"
  },
  "christian pulisic": {
    "qid": "Q22279773",
    "name": "Christian Pulisic",
    "birthDate": "1998-09-18",
    "height": "1.77 m",
    "club": "A.C. Milan",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Christian%20Pulisic%20USMNT%20v%20Belgium%20Mar%2028%202026-73%20%28cropped%29.jpg"
  },
  "brenden aaronson": {
    "qid": "Q33129609",
    "name": "Brendan Aaronson",
    "birthDate": "2000-10-22",
    "height": "1.78 m",
    "club": "Philadelphia Union",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/FC%20RB%20Salzburg%20gegen%20WSG%20Tirol%20%28%20mit%20Meisterteller%C3%BCbergabe%2022.%20Mai%202021%29%2015.jpg"
  },
  "ricardo pepi": {
    "qid": "Q62597239",
    "name": "Ricardo Pepi",
    "birthDate": "2003-01-09",
    "height": "1.85 m",
    "club": "F. C. Augsburgo",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Ricardo%20Pepi%20Football%20Americana%202021%2001.png"
  },
  "haji wright": {
    "qid": "Q19787021",
    "name": "Haji Wright",
    "birthDate": "1998-03-27",
    "height": "1.91 m",
    "club": "Antalyaspor Kulübü",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Haji%20Wright%20at%20Antalyaspor%20vs%20Trabzonspor%2020211211%20%282%29%20%28cropped%29.jpg"
  },
  "folarin balogun": {
    "qid": "Q101035007",
    "name": "Folarin Balogun",
    "birthDate": "2001-07-03",
    "height": "1.78 m",
    "club": "A.S. Monaco F.C.",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Folarin%20Balogun%20USMNT%20v%20Belgium%20Mar%2028%202026-69%20%28cropped%29.jpg"
  },
  "utkir yusupov": {
    "qid": "Q60298555",
    "name": "Utkir Yusupov",
    "birthDate": "1991-01-04",
    "height": "1.85 m",
    "club": "Nasaf Qarshi",
    "position": "guardameta",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/O%CA%BBtkir%20Yusupov%20%28cropped%29.jpg"
  },
  "farrukh savfiev": {
    "qid": "",
    "name": "Farrukh Savfiev",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "sherzod nasrullaev": {
    "qid": "Q124101458",
    "name": "Sherzod Nasrullaev",
    "birthDate": "1998-07-23",
    "height": "1.83 m",
    "club": "",
    "position": "",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Sherzod%20Nasrullayev.jpg"
  },
  "umar eshmurodov": {
    "qid": "Q89047062",
    "name": "Umar Eshmurodov",
    "birthDate": "1992-11-30",
    "height": "1.85 m",
    "club": "",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Umar%20Eshmurodov%202.jpg"
  },
  "husniddin aliqulov": {
    "qid": "Q88969536",
    "name": "Husniddin Aliqulov",
    "birthDate": "1999-04-04",
    "height": "",
    "club": "",
    "position": "",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Husniddin%20Aliqulov%20%28cropped%29.jpg"
  },
  "rustamjon ashurmatov": {
    "qid": "",
    "name": "Rustamjon Ashurmatov",
    "birthDate": "",
    "height": "",
    "club": "",
    "position": "",
    "photo": ""
  },
  "khojiakbar alijonov": {
    "qid": "Q64853255",
    "name": "Khojiakbar Alijonov",
    "birthDate": "1997-04-19",
    "height": "1.80 m",
    "club": "FC Pakhtakor Tashkent",
    "position": "lateral",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/FC%20Pakhtakor%20in%20March%202019%20%28cropped%29.jpg"
  },
  "abdukodir khusanov": {
    "qid": "Q111479885",
    "name": "Abduqodir Husanov",
    "birthDate": "2004-02-29",
    "height": "1.86 m",
    "club": "Manchester City Football Club",
    "position": "defensa",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Abdukodir%20Khusanov%20%28cropped%29.jpg"
  },
  "odiljon hamrobekov": {
    "qid": "Q47501392",
    "name": "Odiljon Hamrobekov",
    "birthDate": "1996-02-13",
    "height": "1.78 m",
    "club": "Nasaf Qarshi",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Odiljon%20Hamrobekov%202020.jpg"
  },
  "otabek shukurov": {
    "qid": "Q26209536",
    "name": "Otabek Shukurov",
    "birthDate": "1996-06-22",
    "height": "1.82 m",
    "club": "FC Bunyodkor",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Otabek%20Shukurov.jpg"
  },
  "jamshid iskanderov": {
    "qid": "Q16235461",
    "name": "Jamshid Iskanderov",
    "birthDate": "1993-10-16",
    "height": "1.68 m",
    "club": "Neftchi Ferghana",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Jamshid%20Iskanderov%20%28cropped%29.jpg"
  },
  "azizbek turgunboev": {
    "qid": "Q60298193",
    "name": "Azizbek Turgunboev",
    "birthDate": "1994-10-01",
    "height": "1.73 m",
    "club": "Navbahor Namangan",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Azizbek%20Turg%CA%BBunboyev%20%28cropped%29.jpg"
  },
  "khojimat erkinov": {
    "qid": "Q98884068",
    "name": "Khojimat Erkinov",
    "birthDate": "2001-05-29",
    "height": "1.73 m",
    "club": "",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Khojimat%20Erkinov%202022%20%281%29.jpg"
  },
  "eldor shomurodov": {
    "qid": "Q20641483",
    "name": "Eldor Shomurodov",
    "birthDate": "1995-06-29",
    "height": "1.90 m",
    "club": "A.S. Roma",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Rostov-DM18%20%282%29.jpg"
  },
  "oston urunov": {
    "qid": "Q65030956",
    "name": "Oston Urunov",
    "birthDate": "2000-12-19",
    "height": "1.81 m",
    "club": "FC Spartak de Moscú",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Oston%20Urunov%202020.jpg"
  },
  "jaloliddin masharipov": {
    "qid": "Q19831829",
    "name": "Jaloliddin Masharipov",
    "birthDate": "1993-09-01",
    "height": "1.78 m",
    "club": "Al-Nassr",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Jaloliddin%20Masharipov%202020.jpg"
  },
  "igor sergeev": {
    "qid": "Q27531791",
    "name": "Igor Sergeev",
    "birthDate": "1955-12-13",
    "height": "1.81 m",
    "club": "FC Aktobe",
    "position": "delantero",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Igor%20Sergeyev%20%28cropped%29.jpg"
  },
  "abbosbek fayzullaev": {
    "qid": "Q117280421",
    "name": "Abbosbek Fayzullaev",
    "birthDate": "2003-10-03",
    "height": "1.67 m",
    "club": "İstanbul Başakşehir CF",
    "position": "centrocampista",
    "photo": "http://commons.wikimedia.org/wiki/Special:FilePath/Abbosbek%20Fayzullaev%20at%20Press%20conference%20of%20the%20national%20football%20teams%20of%20Iran%20and%20Uzbekistan%20%28Mehr%2C%2023%20March%202025%29%20%28cropped%29.jpg"
  }
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
  J: [["Argentina", 0, 0], ["Argelia", 0, 0], ["Austria", 0, 0], ["Jordania", 0, 0]],
  K: [["Portugal", 0, 0], ["Republica Democratica del Congo", 0, 0], ["Uzbekistan", 0, 0], ["Colombia", 0, 0]],
  L: [["Inglaterra", 0, 0], ["Croacia", 0, 0], ["Ghana", 0, 0], ["Panama", 0, 0]]
};

const generatedGroupStageMatches = buildGeneratedGroupStageMatches();
const allGroupStageMatches = [...groupStageMatches, ...generatedGroupStageMatches];
const knockoutMatches = buildKnockoutMatches(allGroupStageMatches.length);
const matches = [...allGroupStageMatches, ...knockoutMatches];
const matchResults = JSON.parse(localStorage.getItem("fifa2026-results") || "{}");

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

let predictions = JSON.parse(localStorage.getItem("fifa2026-predictions") || "[]");

const rules = [
  { name: "Marcador exacto", pts: 5 },
  { name: "Ganador correcto", pts: 3 },
  { name: "Diferencia de goles", pts: 2 },
  { name: "Goleador bonus", pts: 2 },
  { name: "Clasificado", pts: 4 },
  { name: "Campeon acertado", pts: 12 }
];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// --- SERVICIOS DE LÓGICA DE NEGOCIO ---
const TournamentService = {
  calculateStandings(groupMatches) {
    const standings = {};
    // Inicializar tablas basadas en la configuración de grupos
    Object.entries(groups).forEach(([code, teams]) => {
      standings[code] = teams.map(([team]) => ({
        team, played: 0, won: 0, drawn: 0, lost: 0,
        goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0
      }));
    });

    groupMatches.filter(getMatchResult).forEach(match => {
      const table = standings[match.group];
      if (!table) return;
      const home = table.find(r => r.team === match.home);
      const away = table.find(r => r.team === match.away);
      
      this._updateRow(home, match.homeScore, match.awayScore);
      this._updateRow(away, match.awayScore, match.homeScore);
    });

    Object.values(standings).forEach(table => table.sort(compareStandingRows));
    return standings;
  },

  calculateUserPoints() {
    users.forEach(user => {
      let totalPoints = 0;
      let hits = 0;
      const userPreds = predictions.filter(p => p.userEmail === user.email);

      userPreds.forEach(pred => {
        const match = matches.find(m => m.id === pred.matchId);
        if (!match || match.status !== "finalizado") return;

        const actualH = match.homeScore;
        const actualA = match.awayScore;
        const predH = parseInt(pred.homeScore);
        const predA = parseInt(pred.awayScore);

        if (actualH === predH && actualA === predA) {
          totalPoints += rules.find(r => r.name === "Marcador exacto").pts;
          hits++;
        } else {
          const actualWin = actualH > actualA ? "H" : actualH < actualA ? "A" : "D";
          const predWin = predH > predA ? "H" : predH < predA ? "A" : "D";

          if (actualWin === predWin) {
            totalPoints += rules.find(r => r.name === "Ganador correcto").pts;
            hits++;
            if ((actualH - actualA) === (predH - predA)) {
              totalPoints += rules.find(r => r.name === "Diferencia de goles").pts;
            }
          }
        }
      });

      // Lógica de Clasificado (para fases de eliminación directa)
      userPreds.forEach(pred => {
        const match = matches.find(m => m.id === pred.matchId);
        if (!match || match.status !== "finalizado" || match.phase === "Grupos") return;
        
        const actualWinner = getWinner(match);
        const userChoice = pred.qualifier === "Equipo local" ? match.home : (pred.qualifier === "Equipo visitante" ? match.away : null);
        if (actualWinner && userChoice === actualWinner) {
          totalPoints += rules.find(r => r.name === "Clasificado")?.pts || 0;
        }
      });

      user.points = totalPoints;
      user.hits = hits;
      user.accuracy = userPreds.length > 0 ? Math.round((hits / userPreds.length) * 100) : 0;

      // Initialize pointHistory if it doesn't exist
      if (!user.pointHistory) {
        user.pointHistory = [];
      }
      // Add current points to history if different from the last entry
      const lastHistoryEntry = user.pointHistory[user.pointHistory.length - 1];
      if (!lastHistoryEntry || lastHistoryEntry.points !== totalPoints) {
        user.pointHistory.push({ timestamp: new Date().toISOString(), points: totalPoints });
      }
    });

    users.sort((a, b) => b.points - a.points || b.hits - a.hits);
    localStorage.setItem("fifa2026-users", JSON.stringify(users));
    renderRanking();
  },

  simulateRandomResults() {
    const statusDiv = $("#simulationStatus");
    const message = $("#simulationMessage");
    const progress = $("#simulationProgress");
    const button = $("#simulateResults");

    if (!statusDiv || !message || !progress || !button) return;

    // Bloquear UI e iniciar
    button.disabled = true;
    statusDiv.style.display = "block";
    progress.style.width = "0%";

    const steps = [
      {
        msg: "Creando 20 usuarios competidores...",
        fn: () => {
          if (users.length < 10) {
            for (let i = 1; i <= 20; i++) {
              const email = `demo_user_${i}@fifa2026.test`;
              if (!users.some(u => u.email === email)) {
                users.push({
                  name: `Competidor Demo ${i}`,
                  email: email,
                  points: 0, hits: 0, accuracy: 0, trend: "igual",
                  pointHistory: []
                });
              }
            }
          }
        }
      },
      {
        msg: "Generando ~1,500 pronósticos aleatorios...",
        fn: () => {
          predictions.length = 0;
          users.forEach(user => {
            matches.forEach(match => {
              if (Math.random() > 0.15) {
                predictions.push({
                  matchId: match.id,
                  matchLabel: `${match.home} vs ${match.away}`,
                  userEmail: user.email,
                  userName: user.name,
                  homeScore: Math.floor(Math.random() * 4).toString(),
                  awayScore: Math.floor(Math.random() * 4).toString(),
                  qualifier: Math.random() > 0.5 ? "Equipo local" : "Equipo visitante",
                  scorer: "Jugador Random"
                });
              }
            });
          });
          localStorage.setItem("fifa2026-predictions", JSON.stringify(predictions));
        }
      },
      {
        msg: "Simulando resultados oficiales del Mundial...",
        fn: () => {
          matches.forEach(match => {
            const hs = Math.floor(Math.random() * 5);
            const as = Math.floor(Math.random() * 5);
            matchResults[match.id] = { homeScore: hs, awayScore: as };
          });
          localStorage.setItem("fifa2026-results", JSON.stringify(matchResults));
        }
      },
      {
        msg: "Procesando puntuaciones y llaves eliminatorias...",
        fn: () => {
          applyStoredMatchResults();
          updateKnockoutCalendar();
          this.calculateUserPoints();
        }
      },
      {
        msg: "Actualizando todos los tableros y analíticas...",
        fn: () => {
          memoizedSearchIndex = null;
          renderMatches(); renderGroups(); renderBracket(); renderPredictions(); renderResultForm();
          if ($(".page.active")?.id === "page-analitica") drawCharts();
        }
      }
    ];

    let currentStep = 0;

    const runStep = () => {
      if (currentStep < steps.length) {
        const step = steps[currentStep];
        message.textContent = step.msg;
        progress.style.width = `${((currentStep + 1) / steps.length) * 100}%`;
        
        // Usamos un pequeño delay para que el ojo humano perciba el cambio de mensaje
        setTimeout(() => {
          try {
            step.fn();
            currentStep++;
            runStep();
          } catch (error) {
            console.error("Error en la simulacion:", error);
            message.textContent = "La simulacion se detuvo: " + error.message;
            button.disabled = false;
          }
        }, 600);
      } else {
        message.textContent = "¡Simulación completada con éxito!";
        progress.style.width = "100%";
        button.disabled = false;

        // Disparar celebración de confeti con los colores del tema
        if (typeof confetti === 'function') {
          confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#F4B400', '#0057B8', '#2E7D32']
          });
        }

        // Reproducir sonido de aplausos/estadio
        const applauseSound = new Audio('assets/applause.mp3'); // Asegúrate de tener este archivo de sonido en tu proyecto
        applauseSound.volume = Number($("#effectsVolume")?.value || 0.7);
        applauseSound.play().catch(e => console.error("Error al reproducir el sonido:", e));


        setTimeout(() => {
          statusDiv.style.display = "none";
          alert(`Simulación exitosa: 20 usuarios y ${predictions.length} pronósticos procesados.`);
        }, 1000);
      }
    };

    runStep();
  },

  resetApplication() {
    if (confirm("¿Estás seguro de que quieres reiniciar la aplicación? Esto borrará todos los usuarios, pronósticos y resultados guardados.")) {
      localStorage.removeItem("fifa2026-users");
      localStorage.removeItem("fifa2026-predictions");
      localStorage.removeItem("fifa2026-results");
      // Recargar la página para reiniciar completamente la aplicación
      window.location.reload();
    }
  },


  _updateRow(row, gf, ga) {
    row.played++;
    row.goalsFor += gf;
    row.goalsAgainst += ga;
    row.goalDifference = row.goalsFor - row.goalsAgainst;
    if (gf > ga) row.points += 3;
    else if (gf === ga) row.points += 1;
    else row.lost++;
  }
};

function normalizeText(value) {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function matchKey(home, away) {
  return [normalizeText(home), normalizeText(away)].sort().join("|");
}

function formatDateTime(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")} ${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
}

function buildGeneratedGroupStageMatches() {
  const groupPairings = [[0, 1], [2, 3], [0, 2], [1, 3], [0, 3], [1, 2]];
  const scheduledKeys = new Set(groupStageMatches.map((match) => matchKey(match.home, match.away)));
  const missingPairings = Object.entries(groups).flatMap(([groupCode, teams]) =>
    groupPairings
      .map(([homeIndex, awayIndex]) => [teams[homeIndex][0], teams[awayIndex][0]])
      .filter(([home, away]) => !scheduledKeys.has(matchKey(home, away)))
      .map(([home, away]) => ({ home, away, groupCode }))
  );
  const times = ["11:00", "11:00", "14:00", "14:00", "17:00", "17:00", "20:00", "20:00"];

  return missingPairings.map((match, index) => {
    const dayOffset = Math.floor(index / times.length);
    const [hour, minute] = times[index % times.length].split(":").map(Number);
    const date = new Date(2026, 5, 19 + dayOffset, hour, minute);
    return {
      id: groupStageMatches.length + index + 1,
      date: formatDateTime(date),
      home: match.home,
      away: match.away,
      phase: "Grupos",
      group: match.groupCode,
      stadium: "Sede por confirmar",
      city: "Por confirmar",
      status: "pendiente"
    };
  });
}

function buildKnockoutMatches(startId) {
  return knockoutSchedule.flatMap((round, roundIndex) =>
    round.matches.map(([home, away], matchIndex) => {
      const date = new Date(round.date.replace(" ", "T"));
      date.setHours(date.getHours() + matchIndex * 3);
      return {
        id: startId + roundIndex * 4 + matchIndex + 1,
        date: formatDateTime(date),
        home,
        away,
        seedHome: home,
        seedAway: away,
        phase: round.phase,
        stadium: "Sede por confirmar",
        city: "Por confirmar",
        status: "pendiente"
      };
    })
  );
}

function applyStoredMatchResults() {
  matches.forEach((match) => {
    const result = matchResults[match.id];
    if (!result) return;
    match.homeScore = result.homeScore;
    match.awayScore = result.awayScore;
    match.status = "finalizado";
  });
}

function getWinner(match) {
  if (!getMatchResult(match) || match.homeScore === match.awayScore) return "";
  return match.homeScore > match.awayScore ? match.home : match.away;
}

function getLoser(match) {
  if (!getMatchResult(match) || match.homeScore === match.awayScore) return "";
  return match.homeScore > match.awayScore ? match.away : match.home;
}

function getGroupStandings() {
  const standings = Object.fromEntries(Object.entries(groups).map(([groupCode, rows]) => [
    groupCode,
    rows.map(([team]) => ({
      team,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      goalDifference: 0,
      points: 0
    }))
  ]));

  matches
    .filter((match) => match.phase === "Grupos" && getMatchResult(match))
    .forEach((match) => {
      const table = standings[match.group];
      if (!table) return;
      const home = table.find((row) => row.team === match.home);
      const away = table.find((row) => row.team === match.away);
      if (!home || !away) return;

      home.played += 1;
      away.played += 1;
      home.goalsFor += match.homeScore;
      home.goalsAgainst += match.awayScore;
      away.goalsFor += match.awayScore;
      away.goalsAgainst += match.homeScore;
      home.goalDifference = home.goalsFor - home.goalsAgainst;
      away.goalDifference = away.goalsFor - away.goalsAgainst;

      if (match.homeScore > match.awayScore) {
        home.won += 1;
        away.lost += 1;
        home.points += 3;
      } else if (match.homeScore < match.awayScore) {
        away.won += 1;
        home.lost += 1;
        away.points += 3;
      } else {
        home.drawn += 1;
        away.drawn += 1;
        home.points += 1;
        away.points += 1;
      }
    });

  Object.values(standings).forEach((table) => table.sort(compareStandingRows));
  return standings;
}

function compareStandingRows(a, b) {
  return b.points - a.points ||
    b.goalDifference - a.goalDifference ||
    b.goalsFor - a.goalsFor ||
    a.goalsAgainst - b.goalsAgainst ||
    a.team.localeCompare(b.team);
}

function getGroupCodeFromSeed(seed) {
  const groupNumber = Number(seed);
  return Object.keys(groups)[groupNumber - 1] || "";
}

function getQualifiedTeams(standings = getGroupStandings()) {
  const qualifiers = {};
  const thirdPlaced = [];

  Object.entries(standings).forEach(([groupCode, table], groupIndex) => {
    const groupComplete = table.every((row) => row.played === 3);
    if (!groupComplete) return;
    qualifiers[`1G${groupIndex + 1}`] = table[0]?.team || "";
    qualifiers[`2G${groupIndex + 1}`] = table[1]?.team || "";
    if (table[2]) thirdPlaced.push({ ...table[2], groupCode });
  });

  if (thirdPlaced.length === Object.keys(groups).length) {
    thirdPlaced
      .sort(compareStandingRows)
      .slice(0, 8)
      .forEach((row, index) => {
        qualifiers[`3G${index + 1}`] = row.team;
      });
  }

  return qualifiers;
}

function resolveKnockoutSeed(seed, qualifiers) {
  if (qualifiers[seed]) return qualifiers[seed];

  const winnerMatch = seed.match(/^Ganador (D16|OF|CF|SF)-?(\d+)$/);
  if (winnerMatch) {
    return getWinner(findKnockoutMatch(winnerMatch[1], Number(winnerMatch[2]))) || seed;
  }

  const loserMatch = seed.match(/^Perdedor (SF)-?(\d+)$/);
  if (loserMatch) {
    return getLoser(findKnockoutMatch(loserMatch[1], Number(loserMatch[2]))) || seed;
  }

  return seed;
}

function findKnockoutMatch(roundCode, roundMatchNumber) {
  const phaseByCode = {
    D16: "Dieciseisavos",
    OF: "Octavos",
    CF: "Cuartos",
    SF: "Semifinal"
  };
  const phaseMatches = matches.filter((match) => match.phase === phaseByCode[roundCode]);
  return phaseMatches[roundMatchNumber - 1];
}

function updateKnockoutCalendar() {
  const qualifiers = getQualifiedTeams();
  knockoutMatches.forEach((match) => {
    match.home = resolveKnockoutSeed(match.seedHome, qualifiers);
    match.away = resolveKnockoutSeed(match.seedAway, qualifiers);
  });
}

function getDynamicKnockoutRounds() {
  const phaseNames = ["Dieciseisavos", "Octavos", "Cuartos", "Semifinal", "Tercer puesto", "Final"];
  return phaseNames.map((phase) => ({
    name: phase === "Octavos" ? "Octavos de final" : phase === "Cuartos" ? "Cuartos de final" : phase === "Semifinal" ? "Semifinales" : phase,
    matches: matches
      .filter((match) => match.phase === phase)
      .map((match) => [match.home, match.away, match])
  }));
}

function getMatchResult(match) {
  return Number.isInteger(match.homeScore) && Number.isInteger(match.awayScore)
    ? `${match.homeScore}-${match.awayScore}`
    : "";
}

function resultBadge(match) {
  const result = getMatchResult(match);
  return result ? `<strong class="final-result">${result}</strong>` : "";
}

function teamLabel(team) {
  const code = flags[team];
  if (!code) return `<span class="team-label"><span>${team}</span></span>`;
  return `
    <span class="team-label">
      <img class="flag-img" src="https://flagcdn.com/w40/${code}.png" alt="" aria-hidden="true" loading="lazy" width="20" height="15" />
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

let memoizedSearchIndex = null;
function getSearchIndex() {
  const pages = [
    ["Inicio", "Pagina", "inicio"],
    ["Calendario", "Pagina", "calendario"],
    ["Pronosticos", "Pagina", "pronosticos"],
    ["Posiciones", "Pagina", "posiciones"],
    ["Goleadores", "Pagina", "goleadores"],
    ["Jugadores", "Pagina", "jugadores"],
    ["Ranking", "Pagina", "ranking"],
    ["Analitica", "Pagina", "analitica"],
    ["Historial", "Pagina", "historial"],
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
  const playerItems = selectedPlayers.flatMap((player) => [
    [player.commonName, `${player.position} · ${player.team}`, "jugadores"],
    [player.name, `${player.club} · ${player.team}`, "jugadores"]
  ]);
  const historyItems = worldCupHistory.flatMap((item) => [
    [`Mundial ${item.year}`, `${item.host} · campeon ${item.champion}`, "historial"],
    [item.champion, `Campeon ${item.year}`, "historial"]
  ]);
  
  memoizedSearchIndex = [...teams, ...fixtures, ...participants, ...playerItems, ...historyItems, ...pages].map(([label, type, page]) => ({
    label,
    type,
    page,
    key: normalizeText(label)
  }));
  return memoizedSearchIndex;
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
      <span class="score-chip">${getMatchResult(match) || formatDate(match.date)}</span>
      <div class="team-away"><strong>${teamLabel(match.away)}</strong><br><small>${match.phase}</small></div>
    </article>
  `).join("");

  const status = $("#matchStatusFilter")?.value || "todos";
  const phase = $("#phaseFilter")?.value || "todas";
  const filtered = matches.filter((match) =>
    (status === "todos" || match.status === status) &&
    (phase === "todas" || match.phase === phase)
  );
  renderCalendarGrid(filtered);
  $("#calendarRows").innerHTML = filtered.map((match) => `
    <article class="calendar-list-item">
      <strong>${formatDate(match.date)}</strong>
      <div class="fixture-label">${teamLabel(match.home)}<span>vs</span>${teamLabel(match.away)}${resultBadge(match)}</div>
      <small>${match.phase} · ${match.stadium} · ${match.city} · ${match.status}</small>
    </article>
  `).join("");
}

function renderCalendarGrid(filteredMatches) {
  const monthKeys = [...new Set(filteredMatches.map((match) => {
    const date = new Date(match.date.replace(" ", "T"));
    return `${date.getFullYear()}-${date.getMonth()}`;
  }))].sort((a, b) => {
    const [yearA, monthA] = a.split("-").map(Number);
    const [yearB, monthB] = b.split("-").map(Number);
    return yearA - yearB || monthA - monthB;
  });

  $("#calendarGrid").innerHTML = monthKeys.length
    ? monthKeys.map((key) => {
      const [year, month] = key.split("-").map(Number);
      const monthMatches = filteredMatches.filter((match) => {
        const date = new Date(match.date.replace(" ", "T"));
        return date.getFullYear() === year && date.getMonth() === month;
      });
      return renderCalendarMonth(year, month, monthMatches);
    }).join("")
    : `<div class="calendar-empty">No hay partidos para los filtros seleccionados.</div>`;
}

function renderCalendarMonth(year, month, monthMatches) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startOffset = (firstDay.getDay() + 6) % 7;
  const totalCells = Math.ceil((startOffset + lastDay.getDate()) / 7) * 7;
  const dayNames = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];
  const cells = Array.from({ length: totalCells }, (_, index) => {
    const day = index - startOffset + 1;
    if (day < 1 || day > lastDay.getDate()) {
      return `<article class="calendar-cell muted-cell"></article>`;
    }
    const dayMatches = monthMatches.filter((match) => new Date(match.date.replace(" ", "T")).getDate() === day);
    return `
      <article class="calendar-cell">
        <strong class="calendar-day">${day}</strong>
        <div class="calendar-events">
          ${dayMatches.map((match) => `
            <button class="calendar-event" type="button" title="${match.stadium}, ${match.city}">
              <span>${teamLabel(match.home)}</span>
              ${resultBadge(match)}
              <span>${teamLabel(match.away)}</span>
              <small>${getMatchResult(match) ? "Final" : new Date(match.date.replace(" ", "T")).toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit" })}</small>
            </button>
          `).join("")}
        </div>
      </article>
    `;
  });

  const monthName = new Intl.DateTimeFormat("es-CO", { month: "long", year: "numeric" }).format(firstDay);
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

function renderRanking() {
  $("#registeredUsersCount").textContent = users.length;
  $("#sidebarParticipants").textContent = users.length;
  $("#quickRanking").innerHTML = users.length ? users.slice(0, 5).map((user, index) => `
    <div class="rank-row"><strong>${index + 1}</strong><span>${user.name}</span><strong>${user.points}</strong></div>
  `).join("") : `<p class="prediction-card">Aun no hay participantes inscritos.</p>`;

  const term = normalizeText($("#rankingSearch")?.value || "");
  const filteredUsers = users.filter((user) => normalizeText(user.name).includes(term) || normalizeText(user.email).includes(term));
  $("#rankingRows").innerHTML = filteredUsers.length ? filteredUsers
    .map((user, index) => `
      <tr>
        <td data-label="#">${index + 1}</td>
        <td data-label="Usuario"><strong>${user.name}</strong></td>
        <td data-label="Puntos">${user.points}</td>
        <td data-label="Aciertos">${user.hits}</td>
        <td data-label="Efectividad">${user.accuracy}%</td>
        <td data-label="Tendencia" class="trend-neutral">Sin cambios</td>
      </tr>
    `).join("") : `
      <tr>
        <td colspan="6" class="empty-table">No hay usuarios inscritos. Usa el formulario de inscripcion para aparecer en el ranking.</td>
      </tr>
    `;
}

function registerUser(name, email) {
  const normalizedEmail = normalizeText(email);
  if (users.some((user) => normalizeText(user.email) === normalizedEmail)) {
    alert("Este correo ya esta inscrito.");
    return;
  }
  users.push({
    name: name.trim(),
    email: email.trim(),
    points: 0,
    hits: 0,
    accuracy: 0,
    trend: "igual"
  });
  localStorage.setItem("fifa2026-users", JSON.stringify(users));
  renderRanking();
}

function renderPredictions() {
  $("#predictionMatch").innerHTML = matches.map((match) => `<option value="${match.id}">${match.home} vs ${match.away} (${match.phase})</option>`).join("");
  
  // Actualizar la lista de participantes en el selector
  const userSelect = $("#predictionUser");
  if (userSelect) {
    userSelect.innerHTML = users.length 
      ? users.map(u => `<option value="${u.email}">${u.name}</option>`).join("")
      : `<option value="">Registrate en Ranking primero</option>`;
  }

  $("#predictionList").innerHTML = predictions.length ? predictions.map((item) => `
    <article class="prediction-card">
      <strong>${item.userName}: ${item.matchLabel}</strong><br>
      <small>Marcador: ${item.homeScore}-${item.awayScore} · Clasifica: ${item.qualifier || 'N/A'}</small>
    </article>
  `).join("") : `<p class="prediction-card">Todavía no hay pronósticos guardados.</p>`;
  $("#rulesGrid").innerHTML = rules.map((r) => `<article class="rule-card"><strong>${r.pts} pts</strong><p>${r.name}</p></article>`).join("");
  $("#adminRules").innerHTML = rules.map((r) => `
    <label>${r.name}<input type="number" value="${r.pts}" min="0" max="30" /></label>
  `).join("");
}

function renderResultForm() {
  const select = $("#resultMatch");
  if (!select) return;
  const selectedValue = select.value;
  select.innerHTML = matches.map((match) => {
    const result = getMatchResult(match);
    const label = `${formatDate(match.date)} - ${match.home} vs ${match.away}${result ? ` (${result})` : ""}`;
    return `<option value="${match.id}">${label}</option>`;
  }).join("");
  if (selectedValue && matches.some((match) => String(match.id) === selectedValue)) {
    select.value = selectedValue;
  }
  fillResultInputs();
}

function fillResultInputs() {
  const match = matches.find((item) => item.id === Number($("#resultMatch")?.value));
  if (!match) return;
  $("#resultHomeScore").value = Number.isInteger(match.homeScore) ? match.homeScore : "";
  $("#resultAwayScore").value = Number.isInteger(match.awayScore) ? match.awayScore : "";
}

function saveMatchResult(matchId, homeScore, awayScore) {
  const match = matches.find((item) => item.id === matchId);
  if (!match) return;
  match.homeScore = homeScore;
  match.awayScore = awayScore;
  match.status = "finalizado";
  matchResults[match.id] = { homeScore, awayScore };
  localStorage.setItem("fifa2026-results", JSON.stringify(matchResults));
  TournamentService.calculateUserPoints(); // Recalcular puntos al guardar resultado
  updateKnockoutCalendar();
  renderMatches();
  renderPredictions();
  renderResultForm();
  renderGroups();
  renderBracket();
}

function renderGroups() {
  const standings = getGroupStandings();
  const qualifiers = getQualifiedTeams(standings);
  const groupMatches = matches.filter((match) => match.phase === "Grupos");
  const pendingGroupMatches = groupMatches.filter((match) => match.status === "pendiente").length;
  const finishedGroupMatches = groupMatches.filter((match) => match.status === "finalizado").length;
  const totalTeams = Object.values(groups).reduce((total, rows) => total + rows.length, 0);
  const totalGroups = Object.keys(groups).length;
  const qualifiedCount = new Set(Object.values(qualifiers).filter(Boolean)).size;

  $("#groupResultsSummary").innerHTML = [
    ["Partidos de grupos", groupMatches.length, `${pendingGroupMatches} pendientes`],
    ["Resultados oficiales", finishedGroupMatches, `${finishedGroupMatches} cargados`],
    ["Grupos configurados", totalGroups, `${totalTeams} equipos en seguimiento`],
    ["Clasificados", qualifiedCount, qualifiedCount ? "llaves actualizadas automaticamente" : "se definiran al terminar la fase"]
  ].map(([label, value, detail]) => `
    <article class="kpi"><span>${label}</span><strong>${value}</strong><small>${detail}</small></article>
  `).join("");

  $("#groupSummaryGrid").innerHTML = Object.entries(standings).map(([group, rows]) => {
    const groupComplete = rows.every((row) => row.played === 3);
    return `
    <article class="summary-card">
      <strong>Grupo ${group}</strong>
      <div class="compact-team-list">
        ${rows.slice(0, 3).map((row, index) => `
          <span>${index + 1}. ${teamLabel(row.team)}</span>
        `).join("")}
      </div>
      <small>${groupComplete ? "clasificacion calculada" : "clasificacion pendiente"} · ${rows.reduce((total, row) => total + row.goalsFor, 0)} goles</small>
    </article>
  `;
  }).join("");

  $("#groupsGrid").innerHTML = Object.entries(standings).map(([group, rows]) => {
    const groupComplete = rows.every((row) => row.played === 3);
    return `
    <section class="panel group-card mobile-friendly-table">
      <div class="panel-head">
        <h3>Grupo ${group}</h3>
        <span class="status-pill">${groupComplete ? "cerrado" : "en curso"}</span>
      </div>
      <div class="simple-standings">
        ${rows.map((row, index) => `
          <article class="standing-row" data-label="Posición ${index + 1}">
            <span class="team-cell">${index + 1}. ${teamLabel(row.team)}</span>
            <div class="stats-cell">
              <strong>${row.points} pts</strong>
              <small>PJ:${row.played} DG:${row.goalDifference} GF:${row.goalsFor}</small>
            </div>
          </article>
        `).join("")}
      </div>
      <small class="group-note">${groupComplete ? "primeros dos clasificados y tercero en evaluacion global" : "faltan resultados para cerrar el grupo"}</small>
    </section>
  `;
  }).join("");

  $("#knockoutSummary").innerHTML = getDynamicKnockoutRounds().map((round) => `
    <section class="round-summary">
      <h4>${round.name}</h4>
      <div class="round-match-list">
        ${round.matches.map(([home, away, match], index) => `
          <article class="round-match">
            <span>Partido ${index + 1}</span>
            <strong><span>${teamLabel(home)}</span> vs <span>${teamLabel(away)}</span>${resultBadge(match)}</strong>
            <small>${match.status === "finalizado" ? "Resultado cargado" : "Resultado pendiente"} · ${formatDate(match.date)}</small>
          </article>
        `).join("")}
      </div>
    </section>
  `).join("");
}

function renderScorers() {
  $("#scorersRows").innerHTML = scorers.map((row) => `
    <tr><td data-label="Jugador"><strong>${row[0]}</strong></td><td data-label="Equipo">${teamLabel(row[1])}</td><td data-label="Goles">${row[2]}</td><td data-label="Asistencias">${row[3]}</td><td data-label="Minutos">${row[4]}</td></tr>
  `).join("");
}


const curatedPlayerOverrides = {
  Colombia: {
    "camilo vargas": { name: "Camilo Vargas", birthDate: "1989-03-09", height: "1.85 m", club: "Atlas", position: "Guardameta" },
    "david ospina": { name: "David Ospina", birthDate: "1988-08-31", height: "1.83 m", club: "Atlético Nacional", position: "Guardameta" },
    "davinson sanchez": { name: "Dávinson Sánchez", birthDate: "1996-06-12", height: "1.88 m", club: "Galatasaray", position: "Defensa central" },
    "dávinson sánchez": { name: "Dávinson Sánchez", birthDate: "1996-06-12", height: "1.88 m", club: "Galatasaray", position: "Defensa central" },
    "yerry mina": { name: "Yerry Mina", birthDate: "1994-09-23", height: "1.95 m", club: "Cagliari", position: "Defensa central" },
    "daniel munoz": { name: "Daniel Muñoz", birthDate: "1996-05-25", height: "1.80 m", club: "Crystal Palace", position: "Lateral derecho" },
    "daniel muñoz": { name: "Daniel Muñoz", birthDate: "1996-05-25", height: "1.80 m", club: "Crystal Palace", position: "Lateral derecho" },
    "johan mojica": { name: "Johan Mojica", birthDate: "1992-08-21", height: "1.82 m", club: "Mallorca", position: "Lateral izquierdo" },
    "jhon lucumi": { name: "Jhon Lucumí", birthDate: "1998-06-26", height: "1.87 m", club: "Bologna", position: "Defensa central" },
    "jhon lucumí": { name: "Jhon Lucumí", birthDate: "1998-06-26", height: "1.87 m", club: "Bologna", position: "Defensa central" },
    "santiago arias": { name: "Santiago Arias", birthDate: "1992-01-13", height: "1.75 m", club: "Independiente", position: "Lateral derecho" },
    "jefferson lerma": { name: "Jefferson Lerma", birthDate: "1994-10-25", height: "1.79 m", club: "Crystal Palace", position: "Mediocampista" },
    "kevin castano": { name: "Kevin Castaño", birthDate: "2000-09-29", height: "1.77 m", club: "River Plate", position: "Mediocampista" },
    "kevin castaño": { name: "Kevin Castaño", birthDate: "2000-09-29", height: "1.77 m", club: "River Plate", position: "Mediocampista" },
    "richard rios": { name: "Richard Ríos", birthDate: "2000-06-02", height: "1.85 m", club: "Benfica", position: "Mediocampista" },
    "richard ríos": { name: "Richard Ríos", birthDate: "2000-06-02", height: "1.85 m", club: "Benfica", position: "Mediocampista" },
    "james rodriguez": { name: "James Rodríguez", birthDate: "1991-07-12", height: "1.80 m", club: "Minnesota United", position: "Mediocampista ofensivo" },
    "james rodríguez": { name: "James Rodríguez", birthDate: "1991-07-12", height: "1.80 m", club: "Minnesota United", position: "Mediocampista ofensivo" },
    "juan fernando quintero": { name: "Juan Fernando Quintero", birthDate: "1993-01-18", height: "1.68 m", club: "River Plate", position: "Mediocampista ofensivo" },
    "jorge carrascal": { name: "Jorge Carrascal", birthDate: "1998-05-25", height: "1.80 m", club: "Flamengo", position: "Mediocampista ofensivo" },
    "jon arias": { name: "Jhon Arias", birthDate: "1997-09-21", height: "1.68 m", club: "Palmeiras", position: "Extremo" },
    "jhon arias": { name: "Jhon Arias", birthDate: "1997-09-21", height: "1.68 m", club: "Palmeiras", position: "Extremo" },
    "jhon cordova": { name: "Jhon Córdoba", birthDate: "1993-05-11", height: "1.88 m", club: "Krasnodar", position: "Delantero" },
    "jhon córdoba": { name: "Jhon Córdoba", birthDate: "1993-05-11", height: "1.88 m", club: "Krasnodar", position: "Delantero" },
    "luis suarez": { name: "Luis Suárez", birthDate: "1997-12-02", height: "1.85 m", club: "Sporting CP", position: "Delantero" },
    "luis suárez": { name: "Luis Suárez", birthDate: "1997-12-02", height: "1.85 m", club: "Sporting CP", position: "Delantero" },
    "luis diaz": { name: "Luis Díaz", birthDate: "1997-01-13", height: "1.80 m", club: "Bayern Munich", position: "Extremo izquierdo" },
    "luis díaz": { name: "Luis Díaz", birthDate: "1997-01-13", height: "1.80 m", club: "Bayern Munich", position: "Extremo izquierdo" }
  }
};

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
  if (number <= 3) return "Guardameta";
  if (number <= 8) return "Defensa";
  if (number <= 14) return "Mediocampista";
  return "Delantero";
}

function normalizePlayerPosition(position, code) {
  const value = normalizeText(position || "");
  if (!value) return inferPositionFromCode(code);
  if (value.includes("guardameta") || value.includes("arquero") || value.includes("portero")) return "Guardameta";
  if (value.includes("defensor central")) return "Defensa central";
  if (value.includes("central")) return "Defensa central";
  if (value.includes("lateral")) return "Lateral";
  if (value.includes("defensa")) return "Defensa";
  if (value.includes("attacking midfielder")) return "Mediocampista ofensivo";
  if (value === "base" || value.includes("alero") || value.includes("jardinero")) return inferPositionFromCode(code);
  if (value.includes("volante") || value.includes("centrocampista")) return "Mediocampista";
  if (value.includes("extremo izquierdo")) return "Extremo izquierdo";
  if (value.includes("extremo")) return "Extremo";
  if (value.includes("segundo delantero")) return "Segundo delantero";
  if (value.includes("delantero")) return "Delantero";
  return position.charAt(0).toUpperCase() + position.slice(1);
}

function completePlayerField(value, fallback = "Por confirmar") {
  return value && String(value).trim() ? value : fallback;
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
  );
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
  if (teamOverride) return mergePlayerDetails({}, teamOverride);
  const curated = getCuratedPlayerDetails(name, teamName) || {};
  return mergePlayerDetails({}, curated);
}

function getPaniniPlayerRecords() {
  return paniniAlbumTeams.flatMap((team) => team.players.map((player, index) => {
    const details = getFeaturedPlayerDetails(player.name, team.team);
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
      club: completePlayerField(getValidClub(details?.club), "Selección de " + team.team),
      position: normalizePlayerPosition(details?.position, player.code)
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

function renderPlayers() {
  if (!document.querySelector("#playerRows")) return;
  const players = getFilteredPlayers();

  document.querySelector("#playerRows").innerHTML = players.length ? players.map((player) => `
    <tr>
      <td data-label="Nombre"><strong>${player.fullName}</strong><br><small>${player.code} · ${player.commonName}</small></td>
      <td data-label="Selección">${teamLabel(player.team)}</td>
      <td data-label="Edad">${player.age}</td>
      <td data-label="Estatura">${player.height}</td>
      <td data-label="Club">${player.club}</td>
      <td data-label="Posición">${player.position}</td>
    </tr>
  `).join("") : `<tr><td colspan="6" class="empty-table">No hay jugadores que coincidan con los filtros.</td></tr>`;
}


function getWorldCupChampionCounts() {
  return worldCupHistory.reduce((counts, item) => {
    counts[item.champion] = (counts[item.champion] || 0) + 1;
    return counts;
  }, {});
}

function renderWorldCupHistory() {
  if (!$("#worldCupHistoryRows")) return;
  const totalGoals = worldCupHistory.reduce((total, item) => total + item.goals, 0);
  const totalMatches = worldCupHistory.reduce((total, item) => total + item.matches, 0);
  const highestScoring = [...worldCupHistory].sort((a, b) => b.goals - a.goals)[0];
  const biggestGoldenBoot = [...worldCupHistory].sort((a, b) => b.topScorerGoals - a.topScorerGoals)[0];
  const championCounts = getWorldCupChampionCounts();
  const mostTitles = Object.entries(championCounts).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))[0];

  $("#worldCupHistorySummary").innerHTML = `
    <article class="kpi"><span>Ediciones jugadas</span><strong>${worldCupHistory.length}</strong><small>de Uruguay 1930 a Catar 2022</small></article>
    <article class="kpi"><span>Goles totales</span><strong>${totalGoals}</strong><small>${(totalGoals / totalMatches).toFixed(2)} goles por partido</small></article>
    <article class="kpi"><span>Más títulos</span><strong>${mostTitles[0]}</strong><small>${mostTitles[1]} campeonatos mundiales</small></article>
    <article class="kpi"><span>Último campeón</span><strong>${worldCupHistory.at(-1).champion}</strong><small>${worldCupHistory.at(-1).year} · sede ${worldCupHistory.at(-1).host}</small></article>
  `;

  $("#worldCupHistoryRows").innerHTML = worldCupHistory.map((item) => {
    const goalsPerMatch = (item.goals / item.matches).toFixed(2);
    return `
      <tr>
        <td data-label="Año"><strong>${item.year}</strong></td>
        <td data-label="Sede">${item.host}</td>
        <td data-label="Top 4">
          <div class="worldcup-top4">
            <strong>1. ${item.champion}</strong>
            <span>2. ${item.runnerUp}</span>
            <span>3. ${item.third}</span>
            <span>4. ${item.fourth}</span>
          </div>
        </td>
        <td data-label="Equipos">${item.teams}</td>
        <td data-label="Partidos">${item.matches}</td>
        <td data-label="Goles">${item.goals}</td>
        <td data-label="Prom. gol">${goalsPerMatch}</td>
        <td data-label="Goleador">${item.topScorer} <small>(${item.topScorerGoals})</small></td>
        <td data-label="Arquero destacado">${item.keeper}</td>
        <td data-label="Colombia">${item.colombiaPosition}</td>
      </tr>
    `;
  }).join("");

  $("#worldCupChampionList").innerHTML = Object.entries(championCounts)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([team, titles]) => `
      <article class="champion-row">
        <span>${team}</span>
        <strong>${titles}</strong>
      </article>
    `).join("");

  const bestColombiaRun = colombiaWorldCupHistory.find((item) => item.year === 2014);
  $("#colombiaWorldCupNote").innerHTML = `
    <p>Colombia ha disputado ${colombiaWorldCupHistory.length} Copas del Mundo. Su mejor actuación fue en ${bestColombiaRun.year}, cuando llegó a ${bestColombiaRun.result.toLowerCase()} en Brasil.</p>
    <div class="colombia-worldcup-list">
      ${colombiaWorldCupHistory.map((item) => `
        <article>
          <strong>${item.year}</strong>
          <span>${item.host} · ${item.result}</span>
          <small>Puesto final: ${item.position}</small>
          <small>${item.note}</small>
        </article>
      `).join("")}
    </div>
  `;

  $("#worldCupRecords").innerHTML = `
    <article class="history-record"><span>Edición con más goles</span><strong>${highestScoring.year}</strong><small>${highestScoring.goals} goles · ${highestScoring.host}</small></article>
    <article class="history-record"><span>Máximo goleador en una edición</span><strong>${biggestGoldenBoot.topScorer}</strong><small>${biggestGoldenBoot.topScorerGoals} goles · ${biggestGoldenBoot.year}</small></article>
    <article class="history-record"><span>Primer campeón</span><strong>${worldCupHistory[0].champion}</strong><small>${worldCupHistory[0].year} · ${worldCupHistory[0].host}</small></article>
    <article class="history-record"><span>Formato más reciente</span><strong>32 equipos</strong><small>vigente entre 1998 y 2022</small></article>
  `;
}

function getPredictionOutcome(homeScore, awayScore) {
  const home = Number(homeScore);
  const away = Number(awayScore);
  if (!Number.isFinite(home) || !Number.isFinite(away)) return "";
  if (home > away) return "H";
  if (home < away) return "A";
  return "D";
}

function getMatchDifficulty(match) {
  const matchPredictions = predictions.filter((prediction) => prediction.matchId === match.id);
  if (matchPredictions.length < 3) return null;

  const outcomeCounts = { H: 0, D: 0, A: 0 };
  matchPredictions.forEach((prediction) => {
    const outcome = getPredictionOutcome(prediction.homeScore, prediction.awayScore);
    if (outcome) outcomeCounts[outcome] += 1;
  });

  const total = matchPredictions.length;
  const maxShare = Math.max(...Object.values(outcomeCounts)) / total;
  const scoreSpread = matchPredictions.reduce((sum, prediction) => {
    return sum + Math.abs(Number(prediction.homeScore) - Number(prediction.awayScore));
  }, 0) / total;
  const disagreement = 1 - maxShare;
  const difficulty = Math.min(100, Math.round((disagreement * 82) + Math.min(scoreSpread, 4) * 4.5));

  const favorite = Object.entries(outcomeCounts).sort((a, b) => b[1] - a[1])[0];
  const labelByOutcome = { H: "local", D: "empate", A: "visitante" };
  return {
    match,
    total,
    difficulty,
    reason: Math.round(maxShare * 100) + "% eligió " + labelByOutcome[favorite[0]] + "; promedio de diferencia " + scoreSpread.toFixed(1) + " goles"
  };
}

function renderDifficultyList() {
  const container = $("#difficultyList");
  if (!container) return;

  const items = matches
    .map(getMatchDifficulty)
    .filter(Boolean)
    .sort((a, b) => b.difficulty - a.difficulty || b.total - a.total)
    .slice(0, 8);

  if (!items.length) {
    container.innerHTML = '<p class="prediction-card">No hay suficientes pronósticos para calcular dificultad. Se necesitan al menos 3 pronósticos por partido.</p>';
    return;
  }

  container.innerHTML = items.map((item) => `
    <article class="difficulty-row">
      <div class="difficulty-match">
        <strong>${item.match.home} vs ${item.match.away}</strong>
        <small>${item.match.phase} · ${formatDate(item.match.date)}</small>
      </div>
      <div class="difficulty-meter">
        <div class="difficulty-track"><div class="difficulty-fill" style="width: ${item.difficulty}%"></div></div>
        <span class="difficulty-reason">${item.reason} · ${item.total} pronósticos</span>
      </div>
      <strong class="difficulty-score">${item.difficulty}%</strong>
    </article>
  `).join("");
}

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

  const topUser = users.length > 0 ? users[0] : null; // Asumiendo que users ya está ordenado por puntos
  if (!topUser || !topUser.pointHistory || topUser.pointHistory.length < 2) {
    ctx.fillStyle = "rgba(255,255,255,0.65)";
    ctx.font = "12px Inter";
    ctx.fillText("No hay datos suficientes para la evolución del ranking", 24, 22);
    return;
  }

  const historyPoints = topUser.pointHistory.map(entry => entry.points);
  const maxPoints = Math.max(...historyPoints);
  const minPoints = Math.min(...historyPoints);
  const range = maxPoints - minPoints > 0 ? maxPoints - minPoints : 1; // Evitar división por cero

  ctx.strokeStyle = "#d8b75f";
  ctx.lineWidth = 3;
  ctx.beginPath();

  // Definir padding para el área del gráfico
  const paddingX = 24;
  const paddingY = 20;
  const chartWidth = canvas.offsetWidth - 2 * paddingX;
  const chartHeight = 170; // Altura máxima para la línea, dejando espacio para texto y padding

  historyPoints.forEach((point, index) => {
    const x = paddingX + index * (chartWidth / (historyPoints.length - 1));
    // Invertir el eje Y para dibujar de abajo hacia arriba
    const y = (canvas.offsetHeight - paddingY) - ((point - minPoints) / range) * chartHeight;
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();

  // Dibujar puntos como círculos
  ctx.fillStyle = "#d8b75f";
  historyPoints.forEach((point, index) => {
    const x = paddingX + index * (chartWidth / (historyPoints.length - 1));
    const y = (canvas.offsetHeight - paddingY) - ((point - minPoints) / range) * chartHeight;
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.fillStyle = "rgba(255,255,255,0.65)";
  ctx.font = "12px Inter";
  ctx.fillText(`Evolución de puntos (${topUser.name})`, paddingX, paddingY);
}

function drawBarChart(canvas) {
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const width = Math.max(canvas.offsetWidth, 320);
  const height = 220;
  canvas.width = width * devicePixelRatio;
  canvas.height = height * devicePixelRatio;
  ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
  ctx.clearRect(0, 0, width, height);

  const phaseAccuracy = {};
  const phaseOrder = ["Grupos", "Dieciseisavos", "Octavos", "Cuartos", "Semifinal", "Tercer puesto", "Final"];
  phaseOrder.forEach((phase) => {
    phaseAccuracy[phase] = { correct: 0, total: 0 };
  });

  predictions.forEach((pred) => {
    const match = matches.find((m) => m.id === pred.matchId);
    if (!match || match.status !== "finalizado") return;

    const phase = match.phase;
    if (!phaseAccuracy[phase]) phaseAccuracy[phase] = { correct: 0, total: 0 };
    phaseAccuracy[phase].total++;

    const actualH = match.homeScore;
    const actualA = match.awayScore;
    const predH = parseInt(pred.homeScore);
    const predA = parseInt(pred.awayScore);

    if (actualH === predH && actualA === predA) {
      phaseAccuracy[phase].correct++;
    } else {
      const actualOutcome = actualH > actualA ? "home" : actualH < actualA ? "away" : "draw";
      const predOutcome = predH > predA ? "home" : predH < predA ? "away" : "draw";
      if (actualOutcome === predOutcome) phaseAccuracy[phase].correct++;
    }
  });

  const labels = [];
  const values = [];
  phaseOrder.forEach((phase) => {
    if (phaseAccuracy[phase]?.total > 0) {
      labels.push(phase);
      values.push(Math.round((phaseAccuracy[phase].correct / phaseAccuracy[phase].total) * 100));
    }
  });

  if (values.length === 0) {
    ctx.fillStyle = "rgba(255,255,255,0.65)";
    ctx.font = "12px Inter";
    ctx.fillText("No hay pronósticos finalizados para analizar", 24, 22);
    return;
  }

  const chart = {
    left: 28,
    right: 18,
    top: 38,
    bottom: 52
  };
  const chartWidth = width - chart.left - chart.right;
  const chartBottom = height - chart.bottom;
  const maxBarHeight = chartBottom - chart.top;
  const slotWidth = chartWidth / values.length;
  const barWidth = Math.max(18, Math.min(42, slotWidth * 0.48));
  const labelAliases = {
    Dieciseisavos: "D16",
    "Tercer puesto": "3er puesto"
  };

  ctx.fillStyle = "rgba(255,255,255,0.65)";
  ctx.font = "12px Inter";
  ctx.textAlign = "left";
  ctx.textBaseline = "alphabetic";
  ctx.fillText("% acierto", chart.left, 22);

  values.forEach((value, index) => {
    const barHeight = (value / 100) * maxBarHeight;
    const slotX = chart.left + index * slotWidth;
    const barX = slotX + (slotWidth - barWidth) / 2;
    const centerX = slotX + slotWidth / 2;

    ctx.fillStyle = index % 2 ? "#18a05e" : "#0e4d92";
    ctx.fillRect(barX, chartBottom - barHeight, barWidth, barHeight);

    ctx.fillStyle = "rgba(255,255,255,0.86)";
    ctx.font = "10px Inter";
    ctx.textAlign = "center";
    ctx.fillText(`${value}%`, centerX, chartBottom - barHeight - 6);

    drawChartLabel(ctx, labelAliases[labels[index]] || labels[index], centerX, chartBottom + 13, Math.max(34, slotWidth - 6));
  });
}

function drawChartLabel(ctx, label, centerX, y, maxWidth) {
  ctx.fillStyle = "rgba(255,255,255,0.64)";
  ctx.font = "9px Inter";
  ctx.textAlign = "center";
  ctx.textBaseline = "top";

  const words = label.split(" ");
  const lines = [];
  words.forEach((word) => {
    const current = lines[lines.length - 1];
    const candidate = current ? `${current} ${word}` : word;
    if (!current || ctx.measureText(candidate).width <= maxWidth) {
      lines[lines.length - 1] = candidate;
    } else {
      lines.push(word);
    }
  });

  lines.slice(0, 2).forEach((line, index) => {
    ctx.fillText(line, centerX, y + index * 11);
  });
}

function exportCurrentPage() {
  const active = $(".page.active").id.replace("page-", "");
  const rows = active === "ranking"
    ? [["posicion", "usuario", "puntos", "aciertos", "efectividad"], ...users.map((u, i) => [i + 1, u.name, u.points, u.hits, `${u.accuracy}%`])]
    : active === "jugadores"
      ? [["codigo_panini", "nombre", "seleccion", "edad", "fecha_nacimiento", "estatura", "club", "posicion"], ...getFilteredPlayers().map((player) => [player.code, player.fullName, player.team, player.age, player.birthDate, player.height, player.club, player.position])]
      : active === "historial"
        ? [["anio", "sede", "campeon", "finalista", "equipos", "partidos", "goles", "goleador", "goles_goleador"], ...worldCupHistory.map((item) => [item.year, item.host, item.champion, item.runnerUp, item.teams, item.matches, item.goals, item.topScorer, item.topScorerGoals])]
        : [["fecha", "local", "goles_local", "goles_visitante", "visitante", "fase", "estado"], ...matches.map((m) => [m.date, m.home, m.homeScore ?? "", m.awayScore ?? "", m.away, m.phase, m.status])];
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
  $("#resultMatch").addEventListener("change", fillResultInputs);
  $("#rankingSearch").addEventListener("input", renderRanking);
  $("#playerSearch").addEventListener("input", renderPlayers);
  $("#playerTeamFilter").addEventListener("change", renderPlayers);
  $("#playerPositionFilter").addEventListener("change", renderPlayers);
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
  $("#signupForm").addEventListener("submit", (event) => {
    event.preventDefault();
    registerUser($("#signupName").value, $("#signupEmail").value);
    TournamentService.calculateUserPoints(); // Recalcular puntos para el nuevo usuario
    memoizedSearchIndex = null; // Invalidar caché al añadir usuario
    event.target.reset();
  });
  $("#themeSelect").addEventListener("change", (event) => setTheme(event.target.value));
  $("#simulateResults")?.addEventListener("click", () => TournamentService.simulateRandomResults());
  $("#effectsVolume")?.addEventListener("input", (event) => {
    localStorage.setItem("fifa2026-volume", event.target.value);
  });
  $("#resetApp")?.addEventListener("click", () => TournamentService.resetApplication());
  $("#predictionForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const matchId = Number($("#predictionMatch").value);
    const match = matches.find((m) => m.id === matchId);
    const userEmail = $("#predictionUser").value;
    const user = users.find(u => u.email === userEmail);
    
    predictions.unshift({
      matchId,
      matchLabel: `${match.home} vs ${match.away}`,
      userEmail,
      userName: user.name,
      homeScore: $("#homeScore").value,
      awayScore: $("#awayScore").value,
      qualifier: $("#qualifier").value,
      scorer: $("#scorerBonus").value
    });
    localStorage.setItem("fifa2026-predictions", JSON.stringify(predictions));
    TournamentService.calculateUserPoints();
    renderPredictions();
  });
  $("#resultForm").addEventListener("submit", (event) => {
    event.preventDefault();
    saveMatchResult(
      Number($("#resultMatch").value),
      Number($("#resultHomeScore").value),
      Number($("#resultAwayScore").value)
    );
  });
  window.addEventListener("resize", () => $(".page.active").id === "page-analitica" && drawCharts());
}

function init() {
  setTheme(localStorage.getItem("fifa2026-theme") || "classic");
  const savedVolume = localStorage.getItem("fifa2026-volume");
  if (savedVolume !== null && $("#effectsVolume")) {
    $("#effectsVolume").value = savedVolume;
  }
  applyStoredMatchResults();
  updateKnockoutCalendar();
  bindEvents();
  renderCountdown();
  renderMatches();
  renderRanking();
  renderPredictions();
  renderResultForm();
  renderGroups();
  renderScorers();
  renderPlayerFilters();
  renderPlayers();
  renderWorldCupHistory();
  renderDifficultyList();
  renderBracket();
  setInterval(renderCountdown, 1000);
}

init();
