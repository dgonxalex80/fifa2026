const groupStageMatches = [
  { id: 1, date: "2026-06-11 14:00", home: "Mexico", away: "Sudafrica", phase: "Grupos", group: "A", stadium: "Estadio Ciudad de Mexico", city: "Ciudad de Mexico", status: "finalizado", homeScore: 2, awayScore: 0 },
  { id: 2, date: "2026-06-11 21:00", home: "Corea del Sur", away: "Republica Checa", phase: "Grupos", group: "A", stadium: "Estadio Guadalajara", city: "Guadalajara", status: "finalizado", homeScore: 2, awayScore: 1 },
  { id: 3, date: "2026-06-12 14:00", home: "Canada", away: "Bosnia y Herzegovina", phase: "Grupos", group: "B", stadium: "Toronto Stadium", city: "Toronto", status: "finalizado", homeScore: 1, awayScore: 1 },
  { id: 4, date: "2026-06-12 20:00", home: "Estados Unidos", away: "Paraguay", phase: "Grupos", group: "D", stadium: "Los Angeles Stadium", city: "Los Angeles", status: "finalizado", homeScore: 4, awayScore: 1 },
  { id: 5, date: "2026-06-13 14:00", home: "Catar", away: "Suiza", phase: "Grupos", group: "B", stadium: "San Francisco Bay Area Stadium", city: "San Francisco Bay Area", status: "finalizado", homeScore: 1, awayScore: 1 },
  { id: 6, date: "2026-06-13 17:00", home: "Brasil", away: "Marruecos", phase: "Grupos", group: "C", stadium: "New York New Jersey Stadium", city: "New York/New Jersey", status: "finalizado", homeScore: 1, awayScore: 1 },
  { id: 7, date: "2026-06-13 20:00", home: "Haiti", away: "Escocia", phase: "Grupos", group: "C", stadium: "Boston Stadium", city: "Boston", status: "finalizado", homeScore: 0, awayScore: 1 },
  { id: 8, date: "2026-06-13 23:00", home: "Australia", away: "Turquia", phase: "Grupos", group: "D", stadium: "BC Place Vancouver", city: "Vancouver", status: "finalizado", homeScore: 2, awayScore: 0 },
  { id: 9, date: "2026-06-14 12:00", home: "Alemania", away: "Curazao", phase: "Grupos", group: "E", stadium: "Houston Stadium", city: "Houston", status: "finalizado", homeScore: 7, awayScore: 1 },
  { id: 10, date: "2026-06-14 15:00", home: "Paises Bajos", away: "Japon", phase: "Grupos", group: "F", stadium: "Dallas Stadium", city: "Dallas", status: "finalizado", homeScore: 2, awayScore: 2 },
  { id: 11, date: "2026-06-14 18:00", home: "Costa de Marfil", away: "Ecuador", phase: "Grupos", group: "E", stadium: "Philadelphia Stadium", city: "Philadelphia", status: "finalizado", homeScore: 1, awayScore: 0 },
  { id: 12, date: "2026-06-14 21:00", home: "Suecia", away: "Tunez", phase: "Grupos", group: "F", stadium: "Estadio Monterrey", city: "Monterrey", status: "finalizado", homeScore: 5, awayScore: 1 },
  { id: 13, date: "2026-06-15 11:00", home: "Espana", away: "Cabo Verde", phase: "Grupos", group: "H", stadium: "Atlanta Stadium", city: "Atlanta", status: "finalizado", homeScore: 0, awayScore: 0 },
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
  { date: "2026-07-19 14:00", phase: "Final", matches: [["Ganador SF1", "Ganador SF2"]] }
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


const scorers = [
  ["Folarin Balogun", "Estados Unidos", 2, 0, 73],
  ["Kai Havertz", "Alemania", 2, 0, 90],
  ["Yasin Ayari", "Suecia", 2, 0, 96],
  ["Felix Nmecha", "Alemania", 1, 0, 90],
  ["Nico Schlotterbeck", "Alemania", 1, 0, 90],
  ["Jamal Musiala", "Alemania", 1, 0, 90],
  ["Virgil van Dijk", "Paises Bajos", 1, 0, 90],
  ["Amad Diallo", "Costa de Marfil", 1, 0, 90],
  ["Keito Nakamura", "Japon", 1, 0, 90],
  ["Crysencio Summerville", "Paises Bajos", 1, 0, 90],
  ["Daichi Kamada", "Japon", 1, 0, 90],
  ["Nathaniel Brown", "Alemania", 1, 0, 90],
  ["Deniz Undav", "Alemania", 1, 0, 90],
  ["Jurien Gaari Comenencia", "Curazao", 1, 0, 90],
  ["John McGinn", "Escocia", 1, 0, 90],
  ["Nestory Irankunda", "Australia", 1, 0, 90],
  ["Connor Metcalfe", "Australia", 1, 0, 90],
  ["Julian Quinones", "Mexico", 1, 0, 79],
  ["Boualem Khoukhi", "Catar", 1, 0, 95],
  ["Breel Embolo", "Suiza", 1, 0, 17],
  ["Ismael Saibari", "Marruecos", 1, 0, 21],
  ["Vinicius Junior", "Brasil", 1, 0, 32],
  ["Raul Jimenez", "Mexico", 1, 0, 76],
  ["Hwang In-beom", "Corea del Sur", 1, 1, 90],
  ["Oh Hyeon-gyu", "Corea del Sur", 1, 0, 21],
  ["Ladislav Krejci", "Republica Checa", 1, 0, 90],
  ["Jovo Lukic", "Bosnia y Herzegovina", 1, 0, 90],
  ["Cyle Larin", "Canada", 1, 0, 14],
  ["Gio Reyna", "Estados Unidos", 1, 0, 16],
  ["Mauricio Magalhães", "Paraguay", 1, 0, 45],
  ["Alexander Isak", "Suecia", 1, 1, 90],
  ["Viktor Gyokeres", "Suecia", 1, 0, 90],
  ["Mattias Svanberg", "Suecia", 1, 0, 7],
  ["Omar Rekik", "Tunez", 1, 0, 90]
];

const birthRepresentationStats = [
  { team: "Alemania", foreignBorn: 1 },
  { team: "Arabia Saudita", foreignBorn: 0 },
  { team: "Argelia", foreignBorn: 16 },
  { team: "Argentina", foreignBorn: 2 },
  { team: "Australia", foreignBorn: 8 },
  { team: "Austria", foreignBorn: 0 },
  { team: "Belgica", foreignBorn: 1 },
  { team: "Bosnia y Herzegovina", foreignBorn: 17 },
  { team: "Brasil", foreignBorn: 0 },
  { team: "Cabo Verde", foreignBorn: 14 },
  { team: "Canada", foreignBorn: 7 },
  { team: "Catar", foreignBorn: 14 },
  { team: "Colombia", foreignBorn: 0 },
  { team: "Corea del Sur", foreignBorn: 1 },
  { team: "Costa de Marfil", foreignBorn: 9 },
  { team: "Croacia", foreignBorn: 8 },
  { team: "Curazao", foreignBorn: 25 },
  { team: "Ecuador", foreignBorn: 3 },
  { team: "Egipto", foreignBorn: 1 },
  { team: "Escocia", foreignBorn: 7 },
  { team: "Espana", foreignBorn: 1 },
  { team: "Estados Unidos", foreignBorn: 6 },
  { team: "Francia", foreignBorn: 3 },
  { team: "Ghana", foreignBorn: 8 },
  { team: "Haiti", foreignBorn: 16 },
  { team: "Inglaterra", foreignBorn: 1 },
  { team: "Irak", foreignBorn: 9 },
  { team: "Iran", foreignBorn: 2 },
  { team: "Japon", foreignBorn: 1 },
  { team: "Jordania", foreignBorn: 3 },
  { team: "Marruecos", foreignBorn: 19 },
  { team: "Mexico", foreignBorn: 5 },
  { team: "Noruega", foreignBorn: 2 },
  { team: "Nueva Zelanda", foreignBorn: 8 },
  { team: "Paises Bajos", foreignBorn: 1 },
  { team: "Panama", foreignBorn: 0 },
  { team: "Paraguay", foreignBorn: 5 },
  { team: "Portugal", foreignBorn: 2 },
  { team: "Republica Checa", foreignBorn: 0 },
  { team: "Republica Democratica del Congo", foreignBorn: 20 },
  { team: "Senegal", foreignBorn: 12 },
  { team: "Sudafrica", foreignBorn: 0 },
  { team: "Suecia", foreignBorn: 0 },
  { team: "Suiza", foreignBorn: 3 },
  { team: "Tunez", foreignBorn: 15 },
  { team: "Turquia", foreignBorn: 10 },
  { team: "Uruguay", foreignBorn: 2 },
  { team: "Uzbekistan", foreignBorn: 1 }
].map((item) => ({
  ...item,
  rosterSize: 26,
  bornInRepresentedCountry: 26 - item.foreignBorn
}));

const domesticClubTerms = {
  Alemania: ["bayern", "dortmund", "leverkusen", "leipzig", "stuttgart", "frankfurt", "wolfsburg", "mainz", "hoffenheim", "werder", "freiburg", "koln", "hamburg", "union berlin", "gladbach"],
  "Arabia Saudita": ["al-hilal", "al hilal", "al-nassr", "al nassr", "al-ittihad", "al ittihad", "al-ahli", "al ahli", "al-shabab", "al shabab", "al-qadsiah", "al qadsiah", "al-fateh", "al fateh", "al-taawoun", "al taawoun"],
  Argelia: ["mc alger", "cr belouizdad", "usm alger", "js kabylie", "paradou", "es setif", "mouloudia", "belouizdad"],
  Argentina: ["boca", "river", "racing", "independiente", "estudiantes", "velez", "talleres", "rosario", "lanus", "huracan", "argentinos", "san lorenzo", "newell"],
  Australia: ["sydney", "melbourne", "brisbane", "adelaide", "perth", "central coast", "western sydney", "newcastle jets", "macarthur"],
  Austria: ["salzburg", "rapid wien", "austria wien", "sturm graz", "lask", "wac", "hartberg"],
  Belgica: ["anderlecht", "club brugge", "brugge", "genk", "gent", "standard", "antwerp", "union saint-gilloise", "charleroi", "mechelen"],
  "Bosnia y Herzegovina": ["sarajevo", "zeljeznicar", "zrinjski", "borac banja", "siroki", "velez mostar"],
  Brasil: ["flamengo", "palmeiras", "fluminense", "sao paulo", "são paulo", "corinthians", "santos", "gremio", "grêmio", "internacional", "botafogo", "vasco", "cruzeiro", "atletico mineiro", "atlético mineiro", "bahia", "fortaleza"],
  "Cabo Verde": ["mindelense", "travadores", "sporting praia", "boavista praia", "santiago", "sal rei"],
  Canada: ["toronto fc", "cf montreal", "montréal", "vancouver whitecaps", "forge fc", "cavalry", "pacific fc", "atletico ottawa"],
  Catar: ["al-sadd", "al sadd", "al-duhail", "al duhail", "al-rayyan", "al rayyan", "al-arabi", "al arabi", "al-gharafa", "al gharafa", "umm salal", "qatar sc"],
  Colombia: ["atletico nacional", "atlético nacional", "millonarios", "america de cali", "américa de cali", "deportivo cali", "junior", "independiente medellin", "independiente medellín", "santa fe", "tolima", "once caldas", "envigado", "aguilas doradas", "boyaca chico"],
  "Corea del Sur": ["ulsan", "jeonbuk", "seoul", "pohang", "suwon", "daegu", "gwangju", "incheon", "gangwon", "gimcheon"],
  "Costa de Marfil": ["asec", "africa sports", "stade d'abidjan", "san pedro", "societe omnisports", "so armée"],
  Croacia: ["dinamo zagreb", "hajduk", "rijeka", "osijek", "lokomotiva", "varazdin", "istra"],
  Curazao: ["jong holland", "centro domingosavio", "scherpenheuvel", "vesta", "un-de-ba", "curacao", "curaçao"],
  Ecuador: ["barcelona sc", "emelec", "liga de quito", "ldu", "independiente del valle", "aucas", "el nacional", "delfin", "orense"],
  Egipto: ["al ahly", "al-ahly", "zamalek", "pyramids", "al masry", "ceramica cleopatra", "ismaily", "enppi"],
  Escocia: ["celtic", "rangers", "hearts", "hibernian", "aberdeen", "dundee", "motherwell", "st mirren", "kilmarnock"],
  Espana: ["real madrid", "barcelona", "atletico madrid", "atlético madrid", "athletic", "real sociedad", "villarreal", "valencia", "sevilla", "betis", "celta", "osasuna", "getafe", "girona"],
  "Estados Unidos": ["inter miami", "la galaxy", "lafc", "los angeles fc", "seattle sounders", "atlanta united", "columbus crew", "new york", "philadelphia union", "fc dallas", "sporting kansas", "orlando city", "real salt lake", "nashville", "austin fc", "houston dynamo"],
  Francia: ["psg", "paris saint", "marseille", "lyon", "monaco", "lille", "rennes", "lens", "nice", "nantes", "toulouse", "strasbourg", "montpellier"],
  Ghana: ["asante kotoko", "hearts of oak", "dreams fc", "medeama", "aduana", "bechem", "legon cities"],
  Haiti: ["violette", "arcahaie", "tempete", "don bosco", "cavaly", "racing club haitien"],
  Inglaterra: ["arsenal", "chelsea", "liverpool", "manchester", "tottenham", "newcastle", "aston villa", "west ham", "everton", "crystal palace", "brighton", "fulham", "brentford", "nottingham", "wolves", "leeds", "burnley", "sunderland"],
  Irak: ["al quwa", "al-quwa", "al shorta", "al-shorta", "al zawraa", "al-zawraa", "al talaba", "al-talaba", "al naft", "al-naft", "erbil"],
  Iran: ["persepolis", "esteghlal", "sepahan", "tractor", "foolad", "gol gohar", "zob ahan", "malavan"],
  Japon: ["kawasaki", "yokohama", "urawa", "kashima", "gamba", "vissel", "cerezo", "sanfrecce", "nagoya", "fc tokyo", "avispa", "machida"],
  Jordania: ["al faisaly", "al-faisaly", "al wehdat", "al-wehdat", "shabab al ordon", "ramtha", "hussein irbid"],
  Marruecos: ["wydad", "raja", "far rabat", "fus rabat", "rs berkane", "moghreb tetouan", "hassania agadir"],
  Mexico: ["america", "américa", "chivas", "guadalajara", "tigres", "monterrey", "cruz azul", "pumas", "toluca", "pachuca", "leon", "león", "santos laguna", "atlas", "necaxa"],
  Noruega: ["bodo/glimt", "bodø/glimt", "molde", "rosenborg", "viking", "brann", "valerenga", "vålerenga", "lillestrom", "lillestrøm"],
  "Nueva Zelanda": ["auckland", "wellington phoenix", "christchurch", "waitakere", "team wellington"],
  "Paises Bajos": ["ajax", "psv", "feyenoord", "az alkmaar", "twente", "utrecht", "heerenveen", "groningen", "vitesse", "sparta rotterdam"],
  Panama: ["tauro", "plaza amador", "arabe unido", "árabe unido", "san francisco", "independiente de la chorrera", "costa del este"],
  Paraguay: ["olimpia", "cerro porteño", "cerro porteno", "libertad", "guarani", "guaraní", "nacional", "sol de america", "tacuary", "general caballero"],
  Portugal: ["benfica", "porto", "sporting cp", "braga", "vitoria guimaraes", "vitória guimarães", "boavista", "famalicao", "famalicão", "estoril", "casa pia"],
  "Republica Checa": ["slavia prague", "sparta prague", "slavia praha", "sparta praha", "plzen", "plzeň", "banik", "baník", "jablonec", "slovacko", "slovácko"],
  "Republica Democratica del Congo": ["tp mazembe", "vita club", "as vita", "maniema", "motema pembe", "lupopo"],
  Senegal: ["generation foot", "génération foot", "diambars", "jaraaf", "casa sports", "teungueth", "pikine"],
  Sudafrica: ["mamelodi", "kaizer chiefs", "orlando pirates", "supersport", "cape town city", "stellenbosch", "amazulu", "sekukhune"],
  Suecia: ["malmo", "malmö", "aik", "djurgarden", "djurgården", "hammarby", "ifk goteborg", "ifk göteborg", "elfsborg", "hacken", "häcken"],
  Suiza: ["young boys", "basel", "zurich", "zürich", "servette", "lugano", "st. gallen", "grasshopper", "lausanne", "luzern"],
  Tunez: ["esperance", "espérance", "club africain", "etoile du sahel", "étoile du sahel", "cs sfaxien", "monastir", "stad tunisien"],
  Turquia: ["galatasaray", "fenerbahce", "fenerbahçe", "besiktas", "beşiktaş", "trabzonspor", "basaksehir", "başakşehir", "konyaspor", "sivasspor", "antalyaspor"],
  Uruguay: ["peñarol", "penarol", "nacional", "defensor", "danubio", "liverpool montevideo", "wanderers", "river plate montevideo"],
  Uzbekistan: ["pakhtakor", "bunyodkor", "nasaf", "navbahor", "neftchi", "lokomotiv tashkent", "agmk", "sogdiana"]
};


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
    "team": "Argelia",
    "code": "ALG",
    "sourceTeam": "Algeria",
    "players": [
      {
        "code": "ALG 1",
        "name": "Luca Zidane",
        "position": "Portero",
        "club": "Granada CF"
      },
      {
        "code": "ALG 2",
        "name": "Oussama Benbot",
        "position": "Portero",
        "club": "USM Alger"
      },
      {
        "code": "ALG 3",
        "name": "Melvin Mastil",
        "position": "Portero",
        "club": "KVC Westerlo"
      },
      {
        "code": "ALG 4",
        "name": "Abdelatif Ramdane",
        "position": "Portero",
        "club": "MC Alger"
      },
      {
        "code": "ALG 5",
        "name": "Rafik Belghali",
        "position": "Defensa",
        "club": "KV Mechelen"
      },
      {
        "code": "ALG 6",
        "name": "Samir Chergui",
        "position": "Defensa",
        "club": "USM Alger"
      },
      {
        "code": "ALG 7",
        "name": "Rayan Aït-Nouri",
        "position": "Defensa",
        "club": "Manchester City"
      },
      {
        "code": "ALG 8",
        "name": "Jaouen Hadjam",
        "position": "Defensa",
        "club": "BSC Young Boys"
      },
      {
        "code": "ALG 9",
        "name": "Aïssa Mandi",
        "position": "Defensa",
        "club": "LOSC Lille"
      },
      {
        "code": "ALG 10",
        "name": "Ramy Bensebaïni",
        "position": "Defensa",
        "club": "Borussia Dortmund"
      },
      {
        "code": "ALG 11",
        "name": "Zineddine Belaïd",
        "position": "Defensa",
        "club": "Saint-Trond VV"
      },
      {
        "code": "ALG 12",
        "name": "Achref Abada",
        "position": "Defensa",
        "club": "MC Alger"
      },
      {
        "code": "ALG 13",
        "name": "Mohamed Amine Tougaï",
        "position": "Defensa",
        "club": "Espérance de Tunis"
      },
      {
        "code": "ALG 14",
        "name": "Nabil Bentaleb",
        "position": "Mediocampista",
        "club": "LOSC Lille"
      },
      {
        "code": "ALG 15",
        "name": "Hicham Boudaoui",
        "position": "Mediocampista",
        "club": "OGC Nice"
      },
      {
        "code": "ALG 16",
        "name": "Houssem Aouar",
        "position": "Mediocampista",
        "club": "Al-Ittihad"
      },
      {
        "code": "ALG 17",
        "name": "Farès Chaïbi",
        "position": "Mediocampista",
        "club": "Eintracht Frankfurt"
      },
      {
        "code": "ALG 18",
        "name": "Ibrahim Maza",
        "position": "Mediocampista",
        "club": "Bayer Leverkusen"
      },
      {
        "code": "ALG 19",
        "name": "Yacine Titraoui",
        "position": "Mediocampista",
        "club": "Charleroi SC"
      },
      {
        "code": "ALG 20",
        "name": "Ramiz Zerrouki",
        "position": "Mediocampista",
        "club": "Feyenoord"
      },
      {
        "code": "ALG 21",
        "name": "Mohamed Amine Amoura",
        "position": "Delantero",
        "club": "VfL Wolfsburg"
      },
      {
        "code": "ALG 22",
        "name": "Nadhir Benbouali",
        "position": "Delantero",
        "club": "Charleroi SC"
      },
      {
        "code": "ALG 23",
        "name": "Adil Boulbina",
        "position": "Delantero",
        "club": "Paradou AC"
      },
      {
        "code": "ALG 24",
        "name": "Farès Ghedjemis",
        "position": "Delantero",
        "club": "FC Vizela"
      },
      {
        "code": "ALG 25",
        "name": "Amine Gouiri",
        "position": "Delantero",
        "club": "Olympique de Marseille"
      },
      {
        "code": "ALG 26",
        "name": "Anis Hadj Moussa",
        "position": "Delantero",
        "club": "Feyenoord"
      },
      {
        "code": "ALG 27",
        "name": "Riyad Mahrez",
        "position": "Delantero",
        "club": "Al-Ahli"
      }
    ]
  },
  {
    "team": "Argentina",
    "code": "ARG",
    "sourceTeam": "Argentina",
    "players": [
      {
        "code": "ARG 1",
        "name": "Dibu Martínez",
        "position": "Portero",
        "club": "Aston Villa"
      },
      {
        "code": "ARG 2",
        "name": "Gerónimo Rulli",
        "position": "Portero",
        "club": "Olympique Marsella"
      },
      {
        "code": "ARG 3",
        "name": "Juan Musso",
        "position": "Portero",
        "club": "Atlético Madrid"
      },
      {
        "code": "ARG 4",
        "name": "Cristian Romero",
        "position": "Defensa",
        "club": "Tottenham"
      },
      {
        "code": "ARG 5",
        "name": "Otamendi",
        "position": "Defensa",
        "club": "Benfica"
      },
      {
        "code": "ARG 6",
        "name": "Nahuel Molina",
        "position": "Defensa",
        "club": "Atlético Madrid"
      },
      {
        "code": "ARG 7",
        "name": "Nicolás Tagliafico",
        "position": "Defensa",
        "club": "Ajax"
      },
      {
        "code": "ARG 8",
        "name": "Gonzalo Montiel",
        "position": "Defensa",
        "club": "River"
      },
      {
        "code": "ARG 9",
        "name": "Leonardo Balerdi",
        "position": "Defensa",
        "club": "Olympique Marsella"
      },
      {
        "code": "ARG 10",
        "name": "Lisandro Martínez",
        "position": "Defensa",
        "club": "Manchester United"
      },
      {
        "code": "ARG 11",
        "name": "Facundo Medina",
        "position": "Defensa",
        "club": "Olympique Marsella"
      },
      {
        "code": "ARG 12",
        "name": "Enzo Fernández",
        "position": "Mediocampista",
        "club": "Chelsea"
      },
      {
        "code": "ARG 13",
        "name": "Rodrigo de Paul",
        "position": "Mediocampista",
        "club": "Inter Miami"
      },
      {
        "code": "ARG 14",
        "name": "Alexis Mac Allister",
        "position": "Mediocampista",
        "club": "Liverpool"
      },
      {
        "code": "ARG 15",
        "name": "Leandro Paredes",
        "position": "Mediocampista",
        "club": "Boca"
      },
      {
        "code": "ARG 16",
        "name": "Exequiel Palacios",
        "position": "Mediocampista",
        "club": "Bayer Leverkusen"
      },
      {
        "code": "ARG 17",
        "name": "Valentín Barco",
        "position": "Mediocampista",
        "club": "Estrasburgo"
      },
      {
        "code": "ARG 18",
        "name": "Giovani Lo Celso",
        "position": "Mediocampista",
        "club": "Real Betis"
      },
      {
        "code": "ARG 19",
        "name": "Lionel Messi",
        "position": "Delantero",
        "club": "Inter Miami"
      },
      {
        "code": "ARG 20",
        "name": "Julián Álvarez",
        "position": "Delantero",
        "club": "Atlético Madrid"
      },
      {
        "code": "ARG 21",
        "name": "Lautaro Martínez",
        "position": "Delantero",
        "club": "Inter"
      },
      {
        "code": "ARG 22",
        "name": "José Manuel López",
        "position": "Delantero",
        "club": "Palmeiras"
      },
      {
        "code": "ARG 23",
        "name": "Nico González",
        "position": "Delantero",
        "club": "Atlético Madrid"
      },
      {
        "code": "ARG 24",
        "name": "Thiago Almada",
        "position": "Delantero",
        "club": "Atlético Madrid"
      },
      {
        "code": "ARG 25",
        "name": "Giuliano Simeone",
        "position": "Delantero",
        "club": "Atlético Madrid"
      },
      {
        "code": "ARG 26",
        "name": "Nico Paz",
        "position": "Delantero",
        "club": "Como"
      }
    ]
  },
  {
    "team": "Australia",
    "code": "AUS",
    "sourceTeam": "Australia",
    "players": [
      {
        "code": "AUS 1",
        "name": "Matthew Ryan",
        "position": "Portero",
        "club": "Levante"
      },
      {
        "code": "AUS 2",
        "name": "Patrick Beach",
        "position": "Portero",
        "club": "Melbourne City"
      },
      {
        "code": "AUS 3",
        "name": "Paul Izzo",
        "position": "Portero",
        "club": "Randers"
      },
      {
        "code": "AUS 4",
        "name": "Harry Souttar",
        "position": "Defensa",
        "club": "Leicester"
      },
      {
        "code": "AUS 5",
        "name": "Alessandro Circati",
        "position": "Defensa",
        "club": "Parma"
      },
      {
        "code": "AUS 6",
        "name": "Jordan Bos",
        "position": "Defensa",
        "club": "Feyenoord"
      },
      {
        "code": "AUS 7",
        "name": "Cameron Burgess",
        "position": "Defensa",
        "club": "Swansea"
      },
      {
        "code": "AUS 8",
        "name": "Milos Degenek",
        "position": "Defensa",
        "club": "APOEL"
      },
      {
        "code": "AUS 9",
        "name": "Aziz Behich",
        "position": "Defensa",
        "club": "Melbourne City"
      },
      {
        "code": "AUS 10",
        "name": "Jason Geria",
        "position": "Defensa",
        "club": "Albirex Niigata"
      },
      {
        "code": "AUS 11",
        "name": "Lucas Herrington",
        "position": "Defensa",
        "club": "Colorado Rapids"
      },
      {
        "code": "AUS 12",
        "name": "Kai Trewin",
        "position": "Defensa",
        "club": "New York City"
      },
      {
        "code": "AUS 13",
        "name": "Jacob Italiano",
        "position": "Defensa",
        "club": "Grazer AK 1902"
      },
      {
        "code": "AUS 14",
        "name": "Jackson Irvine",
        "position": "Mediocampista",
        "club": "St. Pauli"
      },
      {
        "code": "AUS 15",
        "name": "Paul Okon-Engstler",
        "position": "Mediocampista",
        "club": "Sydney FC"
      },
      {
        "code": "AUS 16",
        "name": "Cameron Devlin",
        "position": "Mediocampista",
        "club": "Hearts"
      },
      {
        "code": "AUS 17",
        "name": "Ajdin Hrustic",
        "position": "Mediocampista",
        "club": "Heracles"
      },
      {
        "code": "AUS 18",
        "name": "Connor Metcalfe",
        "position": "Mediocampista",
        "club": "St. Pauli"
      },
      {
        "code": "AUS 19",
        "name": "Aiden O’Neill",
        "position": "Mediocampista",
        "club": "New York City"
      },
      {
        "code": "AUS 20",
        "name": "Mathew Leckie",
        "position": "Delantero",
        "club": "Melbourne City"
      },
      {
        "code": "AUS 21",
        "name": "Nishan Velupillay",
        "position": "Delantero",
        "club": "Melbourne City"
      },
      {
        "code": "AUS 22",
        "name": "Nestoy Irakunda",
        "position": "Delantero",
        "club": "Watford"
      },
      {
        "code": "AUS 23",
        "name": "Awer Mabil",
        "position": "Delantero",
        "club": "Castellón"
      },
      {
        "code": "AUS 24",
        "name": "Mohamed Touré",
        "position": "Delantero",
        "club": "Norwich"
      },
      {
        "code": "AUS 25",
        "name": "Cristian Volpato",
        "position": "Delantero",
        "club": "Sassuolo"
      },
      {
        "code": "AUS 26",
        "name": "Tete Yengi",
        "position": "Delantero",
        "club": "Machida Zelvia"
      }
    ]
  },
  {
    "team": "Austria",
    "code": "AUT",
    "sourceTeam": "Austria",
    "players": [
      {
        "code": "AUT 1",
        "name": "Patrick Pentz",
        "position": "Portero",
        "club": "Brondy IF"
      },
      {
        "code": "AUT 2",
        "name": "Alexander Schlager",
        "position": "Portero",
        "club": "Red Bull Salzburgo"
      },
      {
        "code": "AUT 3",
        "name": "Florian Wiegele",
        "position": "Portero",
        "club": "Viktoria Pilsen"
      },
      {
        "code": "AUT 4",
        "name": "David Affengruber",
        "position": "Defensa",
        "club": "Elche"
      },
      {
        "code": "AUT 5",
        "name": "David Alaba",
        "position": "Defensa",
        "club": "Real Madrid"
      },
      {
        "code": "AUT 6",
        "name": "Kevin Danso",
        "position": "Defensa",
        "club": "Tottenham"
      },
      {
        "code": "AUT 7",
        "name": "Marco Friedl",
        "position": "Defensa",
        "club": "Werder Bremen"
      },
      {
        "code": "AUT 8",
        "name": "Philipp Lienhart",
        "position": "Defensa",
        "club": "Friburgo"
      },
      {
        "code": "AUT 9",
        "name": "Phillipp Mwene",
        "position": "Defensa",
        "club": "Mainz 05"
      },
      {
        "code": "AUT 10",
        "name": "Stefan Posch",
        "position": "Defensa",
        "club": "Mainz 05"
      },
      {
        "code": "AUT 11",
        "name": "Alexander Prass",
        "position": "Defensa",
        "club": "Hoffenheim"
      },
      {
        "code": "AUT 12",
        "name": "Michael Svoboda",
        "position": "Defensa",
        "club": "Venezia"
      },
      {
        "code": "AUT 13",
        "name": "Christoph Baumgartner",
        "position": "Mediocampista",
        "club": "Red Bull Leipzig"
      },
      {
        "code": "AUT 14",
        "name": "Carney Chukwuemeka",
        "position": "Mediocampista",
        "club": "Borussia Dortmund"
      },
      {
        "code": "AUT 15",
        "name": "Florian Grillitsch",
        "position": "Mediocampista",
        "club": "Sporting Braga"
      },
      {
        "code": "AUT 16",
        "name": "Konrad Laimer",
        "position": "Mediocampista",
        "club": "Bayern de Múnich"
      },
      {
        "code": "AUT 17",
        "name": "Marcel Sabitzer",
        "position": "Mediocampista",
        "club": "Borussia Dortmund"
      },
      {
        "code": "AUT 18",
        "name": "Xavier Schlager",
        "position": "Mediocampista",
        "club": "Red Bull Leipzig"
      },
      {
        "code": "AUT 19",
        "name": "Romano Schimid",
        "position": "Mediocampista",
        "club": "Werder Bremen"
      },
      {
        "code": "AUT 20",
        "name": "Alessandro Schöph",
        "position": "Mediocampista",
        "club": "RZ Pellets"
      },
      {
        "code": "AUT 21",
        "name": "Nicolas Seiwald",
        "position": "Mediocampista",
        "club": "Red Bull Leipzig"
      },
      {
        "code": "AUT 22",
        "name": "Paul Wanner",
        "position": "Mediocampista",
        "club": "PSV"
      },
      {
        "code": "AUT 23",
        "name": "Patrick Wimmer",
        "position": "Mediocampista",
        "club": "Wolfsburgo"
      },
      {
        "code": "AUT 24",
        "name": "Marko Arnautovic",
        "position": "Delantero",
        "club": "Estrella Roja"
      },
      {
        "code": "AUT 25",
        "name": "Michael Gregoritsch",
        "position": "Delantero",
        "club": "Augsburgo"
      },
      {
        "code": "AUT 26",
        "name": "Sasa Kalajdzic",
        "position": "Delantero",
        "club": "LASK Linz"
      }
    ]
  },
  {
    "team": "Belgica",
    "code": "BEL",
    "sourceTeam": "Belgium",
    "players": [
      {
        "code": "BEL 1",
        "name": "Thibaut Courtois",
        "position": "Portero",
        "club": "Real Madrid"
      },
      {
        "code": "BEL 2",
        "name": "Senne Lammens",
        "position": "Portero",
        "club": "Manchester United"
      },
      {
        "code": "BEL 3",
        "name": "Mike Penders",
        "position": "Portero",
        "club": "Estrasburgo"
      },
      {
        "code": "BEL 4",
        "name": "Zeno Debast",
        "position": "Defensa",
        "club": "Sporting"
      },
      {
        "code": "BEL 5",
        "name": "Arthur Theate",
        "position": "Defensa",
        "club": "Eintracht"
      },
      {
        "code": "BEL 6",
        "name": "Koni de Winter",
        "position": "Defensa",
        "club": "Milan"
      },
      {
        "code": "BEL 7",
        "name": "Brandon Mechele",
        "position": "Defensa",
        "club": "Brujas"
      },
      {
        "code": "BEL 8",
        "name": "Nathan Ngoy",
        "position": "Defensa",
        "club": "Lille"
      },
      {
        "code": "BEL 9",
        "name": "Thomas Meunir",
        "position": "Defensa",
        "club": "Lille"
      },
      {
        "code": "BEL 10",
        "name": "Timothy Castagne",
        "position": "Defensa",
        "club": "Fulham"
      },
      {
        "code": "BEL 11",
        "name": "Maxim de Cuyper",
        "position": "Defensa",
        "club": "Brighton"
      },
      {
        "code": "BEL 12",
        "name": "Joaquin Seys",
        "position": "Defensa",
        "club": "Brujas"
      },
      {
        "code": "BEL 13",
        "name": "Kevin de Bruyne",
        "position": "Mediocampista",
        "club": "Nápoles"
      },
      {
        "code": "BEL 14",
        "name": "Amadou Onana",
        "position": "Mediocampista",
        "club": "Aston Villa"
      },
      {
        "code": "BEL 15",
        "name": "Youri Tielemans",
        "position": "Mediocampista",
        "club": "Aston Villa"
      },
      {
        "code": "BEL 16",
        "name": "Hans Vanaken",
        "position": "Mediocampista",
        "club": "Brujas"
      },
      {
        "code": "BEL 17",
        "name": "Nicolas Raskin",
        "position": "Mediocampista",
        "club": "Rangers"
      },
      {
        "code": "BEL 18",
        "name": "Axel Witsel",
        "position": "Mediocampista",
        "club": "Girona"
      },
      {
        "code": "BEL 19",
        "name": "Jérémy Doku",
        "position": "Delantero",
        "club": "Manchester City"
      },
      {
        "code": "BEL 20",
        "name": "Leandro Trossard",
        "position": "Delantero",
        "club": "Arsenal"
      },
      {
        "code": "BEL 21",
        "name": "Alexis Saelemaekers",
        "position": "Delantero",
        "club": "Milan"
      },
      {
        "code": "BEL 22",
        "name": "Dodi Lukebakio",
        "position": "Delantero",
        "club": "Benfica"
      },
      {
        "code": "BEL 23",
        "name": "Romelu Lukaku",
        "position": "Delantero",
        "club": "Nápoles"
      },
      {
        "code": "BEL 24",
        "name": "Charles de Ketelaere",
        "position": "Delantero",
        "club": "Atalanta"
      },
      {
        "code": "BEL 25",
        "name": "Matias Fernández-Pardo",
        "position": "Delantero",
        "club": "Lille"
      },
      {
        "code": "BEL 26",
        "name": "Diego Moreira",
        "position": "Delantero",
        "club": "Estrasburgo"
      }
    ]
  },
  {
    "team": "Bosnia y Herzegovina",
    "code": "BIH",
    "sourceTeam": "Bosnia and Herzegovina",
    "players": [
      {
        "code": "BIH 1",
        "name": "Nikola Vasilj",
        "position": "Portero",
        "club": "St Pauli"
      },
      {
        "code": "BIH 2",
        "name": "Martin Zlomislic",
        "position": "Portero",
        "club": "Rijeka"
      },
      {
        "code": "BIH 3",
        "name": "Osman Hadzikic",
        "position": "Portero",
        "club": "Slaven Belupo"
      },
      {
        "code": "BIH 4",
        "name": "Sead Kolasinac",
        "position": "Defensa",
        "club": "Atalanta"
      },
      {
        "code": "BIH 5",
        "name": "Amar Dedic",
        "position": "Defensa",
        "club": "Benfica"
      },
      {
        "code": "BIH 6",
        "name": "Nihad Mujakic",
        "position": "Defensa",
        "club": "Gaziantep"
      },
      {
        "code": "BIH 7",
        "name": "Nikola Katic",
        "position": "Defensa",
        "club": "Schalke 04"
      },
      {
        "code": "BIH 8",
        "name": "Tarik Muharemovic",
        "position": "Defensa",
        "club": "Sassuolo"
      },
      {
        "code": "BIH 9",
        "name": "Stjepan Radeljic",
        "position": "Defensa",
        "club": "Rijeka"
      },
      {
        "code": "BIH 10",
        "name": "Dennis Hadzikadunic",
        "position": "Defensa",
        "club": "Sampdoria"
      },
      {
        "code": "BIH 11",
        "name": "Nidal Celik",
        "position": "Defensa",
        "club": "Lens"
      },
      {
        "code": "BIH 12",
        "name": "Amir Hadziahmetovic",
        "position": "Mediocampista",
        "club": "Hull City"
      },
      {
        "code": "BIH 13",
        "name": "Ivan Sunjic",
        "position": "Mediocampista",
        "club": "Pafos"
      },
      {
        "code": "BIH 14",
        "name": "Ivan Basic",
        "position": "Mediocampista",
        "club": "Astana"
      },
      {
        "code": "BIH 15",
        "name": "Dzenis Burnic",
        "position": "Mediocampista",
        "club": "Karlsruher SC"
      },
      {
        "code": "BIH 16",
        "name": "Ermin Mahmic",
        "position": "Mediocampista",
        "club": "Slovan Liberec"
      },
      {
        "code": "BIH 17",
        "name": "Benjamin Tahirovic",
        "position": "Mediocampista",
        "club": "Brondby"
      },
      {
        "code": "BIH 18",
        "name": "Amar Memic",
        "position": "Mediocampista",
        "club": "Viktoria Plzen"
      },
      {
        "code": "BIH 19",
        "name": "Armin Gigovic",
        "position": "Mediocampista",
        "club": "Young Boys"
      },
      {
        "code": "BIH 20",
        "name": "Kerim Alajbegovic",
        "position": "Mediocampista",
        "club": "RB Salzburg"
      },
      {
        "code": "BIH 21",
        "name": "Esmir Bajraktarevic",
        "position": "Mediocampista",
        "club": "PSV Eindhoven"
      },
      {
        "code": "BIH 22",
        "name": "Ermedin Demirovic",
        "position": "Delantero",
        "club": "VfB Stuttgart"
      },
      {
        "code": "BIH 23",
        "name": "Jovo Lukic",
        "position": "Delantero",
        "club": "Universitatea Cluj"
      },
      {
        "code": "BIH 24",
        "name": "Samed Bazdar",
        "position": "Delantero",
        "club": "Jagiellonia Bialystok"
      },
      {
        "code": "BIH 25",
        "name": "Haris Tabakovic",
        "position": "Delantero",
        "club": "Borussia Moenchengladbach"
      },
      {
        "code": "BIH 26",
        "name": "Edin Dzeko",
        "position": "Delantero",
        "club": "Schalke 04"
      }
    ]
  },
  {
    "team": "Brasil",
    "code": "BRA",
    "sourceTeam": "Brazil",
    "players": [
      {
        "code": "BRA 1",
        "name": "Alisson",
        "position": "Portero",
        "club": "Liverpool"
      },
      {
        "code": "BRA 2",
        "name": "Ederson",
        "position": "Portero",
        "club": "Fenerbahce"
      },
      {
        "code": "BRA 3",
        "name": "Weverton",
        "position": "Portero",
        "club": "Grêmio"
      },
      {
        "code": "BRA 4",
        "name": "Marquinhos",
        "position": "Defensa",
        "club": "PSG"
      },
      {
        "code": "BRA 5",
        "name": "Gabriel Magalhães",
        "position": "Defensa",
        "club": "Arsenal"
      },
      {
        "code": "BRA 6",
        "name": "Bremer",
        "position": "Defensa",
        "club": "Juventus"
      },
      {
        "code": "BRA 7",
        "name": "Ibáñez",
        "position": "Defensa",
        "club": "Al Ahli"
      },
      {
        "code": "BRA 8",
        "name": "Léo Pereira",
        "position": "Defensa",
        "club": "Flamengo"
      },
      {
        "code": "BRA 9",
        "name": "Wesley",
        "position": "Defensa",
        "club": "Roma"
      },
      {
        "code": "BRA 10",
        "name": "Danilo",
        "position": "Defensa",
        "club": "Flamengo"
      },
      {
        "code": "BRA 11",
        "name": "Alex Sandro",
        "position": "Defensa",
        "club": "Flamengo"
      },
      {
        "code": "BRA 12",
        "name": "Douglas Santos",
        "position": "Defensa",
        "club": "Zenit"
      },
      {
        "code": "BRA 13",
        "name": "Casemiro",
        "position": "Mediocampista",
        "club": "Manchester United"
      },
      {
        "code": "BRA 14",
        "name": "Bruno Guimarães",
        "position": "Mediocampista",
        "club": "Newcastle"
      },
      {
        "code": "BRA 15",
        "name": "Fabinho",
        "position": "Mediocampista",
        "club": "Al Ittihad"
      },
      {
        "code": "BRA 16",
        "name": "Danilo",
        "position": "Mediocampista",
        "club": "Botafogo"
      },
      {
        "code": "BRA 17",
        "name": "Lucas Paquetá",
        "position": "Mediocampista",
        "club": "Flamengo"
      },
      {
        "code": "BRA 18",
        "name": "Vinicius Jr.",
        "position": "Delantero",
        "club": "Real Madrid"
      },
      {
        "code": "BRA 19",
        "name": "Raphinha",
        "position": "Delantero",
        "club": "Barcelona"
      },
      {
        "code": "BRA 20",
        "name": "Matheus Cunha",
        "position": "Delantero",
        "club": "Manchester United"
      },
      {
        "code": "BRA 21",
        "name": "Luiz Henrique",
        "position": "Delantero",
        "club": "Zenit"
      },
      {
        "code": "BRA 22",
        "name": "Igor Thiago",
        "position": "Delantero",
        "club": "Brentford"
      },
      {
        "code": "BRA 23",
        "name": "Endrick",
        "position": "Delantero",
        "club": "Lyon/Real Madrid"
      },
      {
        "code": "BRA 24",
        "name": "Martinelli",
        "position": "Delantero",
        "club": "Arsenal"
      },
      {
        "code": "BRA 25",
        "name": "Rayan",
        "position": "Delantero",
        "club": "Bournemouth"
      },
      {
        "code": "BRA 26",
        "name": "Neymar",
        "position": "Delantero",
        "club": "Santos"
      }
    ]
  },
  {
    "team": "Canada",
    "code": "CAN",
    "sourceTeam": "Canada",
    "players": [
      {
        "code": "CAN 1",
        "name": "Maxime Crépau",
        "position": "Portero",
        "club": "Orlando City"
      },
      {
        "code": "CAN 2",
        "name": "Owen Goodman",
        "position": "Portero",
        "club": "Barnsley"
      },
      {
        "code": "CAN 3",
        "name": "Dayne St. Clair",
        "position": "Portero",
        "club": "Inter Miami"
      },
      {
        "code": "CAN 4",
        "name": "Moïse Bombito",
        "position": "Defensa",
        "club": "Nice"
      },
      {
        "code": "CAN 5",
        "name": "Derek Cornelius",
        "position": "Defensa",
        "club": "Olympique Marsella"
      },
      {
        "code": "CAN 6",
        "name": "Alphonso Davies",
        "position": "Defensa",
        "club": "Bayern de Múnich"
      },
      {
        "code": "CAN 7",
        "name": "Luc de Fougerolles",
        "position": "Defensa",
        "club": "Fulham"
      },
      {
        "code": "CAN 8",
        "name": "Alistair Johnston",
        "position": "Defensa",
        "club": "Celtic"
      },
      {
        "code": "CAN 9",
        "name": "Alfie Jones",
        "position": "Defensa",
        "club": "Middlesbrough"
      },
      {
        "code": "CAN 10",
        "name": "Richie Laryea",
        "position": "Defensa",
        "club": "Toronto"
      },
      {
        "code": "CAN 11",
        "name": "Niko Sigur",
        "position": "Defensa",
        "club": "Hajduk Split"
      },
      {
        "code": "CAN 12",
        "name": "Joel Waterman",
        "position": "Defensa",
        "club": "Chicago Fire"
      },
      {
        "code": "CAN 13",
        "name": "Ali Ahmed",
        "position": "Mediocampista",
        "club": "Norwich"
      },
      {
        "code": "CAN 14",
        "name": "Tajon Buchanan",
        "position": "Mediocampista",
        "club": "Villarreal"
      },
      {
        "code": "CAN 15",
        "name": "Mathieu Chounière",
        "position": "Mediocampista",
        "club": "LAFC"
      },
      {
        "code": "CAN 16",
        "name": "Stephen Eustáquio",
        "position": "Mediocampista",
        "club": "Oporto"
      },
      {
        "code": "CAN 17",
        "name": "Marcelo Flores",
        "position": "Mediocampista",
        "club": "lesionado/Tigres"
      },
      {
        "code": "CAN 18",
        "name": "Ismäel Koné",
        "position": "Mediocampista",
        "club": "Sassuolo"
      },
      {
        "code": "CAN 19",
        "name": "Liam Millar",
        "position": "Mediocampista",
        "club": "Hull City"
      },
      {
        "code": "CAN 20",
        "name": "Jonathan Osorio",
        "position": "Mediocampista",
        "club": "Toronto"
      },
      {
        "code": "CAN 21",
        "name": "Nathan Saliba",
        "position": "Mediocampista",
        "club": "Anderlecht"
      },
      {
        "code": "CAN 22",
        "name": "Jacob Shaffelburg",
        "position": "Mediocampista",
        "club": "LAFC"
      },
      {
        "code": "CAN 23",
        "name": "Jonathan David",
        "position": "Delantero",
        "club": "Juventus"
      },
      {
        "code": "CAN 24",
        "name": "Promise David",
        "position": "Delantero",
        "club": "Unión Saint-Gilloise"
      },
      {
        "code": "CAN 25",
        "name": "Cyle Larin",
        "position": "Delantero",
        "club": "Southampton"
      },
      {
        "code": "CAN 26",
        "name": "Tani Oluwaseyi",
        "position": "Delantero",
        "club": "Villarreal"
      }
    ]
  },
  {
    "team": "Costa de Marfil",
    "code": "CIV",
    "sourceTeam": "Côte d'Ivoire",
    "players": [
      {
        "code": "CIV 1",
        "name": "Yahia Fofana",
        "position": "Portero",
        "club": "Çaykur Rizespor"
      },
      {
        "code": "CIV 2",
        "name": "Mohamed Kone",
        "position": "Portero",
        "club": "Charleroi"
      },
      {
        "code": "CIV 3",
        "name": "Alban Lafont",
        "position": "Portero",
        "club": "Panathinaikos"
      },
      {
        "code": "CIV 4",
        "name": "Emmanuel Agbadou",
        "position": "Defensa",
        "club": "Besiktas"
      },
      {
        "code": "CIV 5",
        "name": "Clément Akpa",
        "position": "Defensa",
        "club": "Auxerre"
      },
      {
        "code": "CIV 6",
        "name": "Ousmane Diomande",
        "position": "Defensa",
        "club": "Sporting"
      },
      {
        "code": "CIV 7",
        "name": "Guéla Doué",
        "position": "Defensa",
        "club": "Estrasburgo"
      },
      {
        "code": "CIV 8",
        "name": "Ghislain Konan",
        "position": "Defensa",
        "club": "Gil Vicente"
      },
      {
        "code": "CIV 9",
        "name": "Odilon Kossounou",
        "position": "Defensa",
        "club": "Atalanta"
      },
      {
        "code": "CIV 10",
        "name": "Evan N’Dicka",
        "position": "Defensa",
        "club": "Roma"
      },
      {
        "code": "CIV 11",
        "name": "Wilfried Singo",
        "position": "Defensa",
        "club": "Mónaco"
      },
      {
        "code": "CIV 12",
        "name": "Seko Fofana",
        "position": "Mediocampista",
        "club": "Oporto"
      },
      {
        "code": "CIV 13",
        "name": "Parfait Guiagon",
        "position": "Mediocampista",
        "club": "Charleroi"
      },
      {
        "code": "CIV 14",
        "name": "Christ Inao Oulai",
        "position": "Mediocampista",
        "club": "Trabzonspor"
      },
      {
        "code": "CIV 15",
        "name": "Franck Kessié",
        "position": "Mediocampista",
        "club": "Al Ahli"
      },
      {
        "code": "CIV 16",
        "name": "Ibrahim Sangaré",
        "position": "Mediocampista",
        "club": "Notts. Forest"
      },
      {
        "code": "CIV 17",
        "name": "Jean Michaël Seri",
        "position": "Mediocampista",
        "club": "Maribor"
      },
      {
        "code": "CIV 18",
        "name": "Simón Adingra",
        "position": "Delantero",
        "club": "Mónaco"
      },
      {
        "code": "CIV 19",
        "name": "Ange-Yoan Bonny",
        "position": "Delantero",
        "club": "Inter"
      },
      {
        "code": "CIV 20",
        "name": "Amad Diallo",
        "position": "Delantero",
        "club": "Manchester United"
      },
      {
        "code": "CIV 21",
        "name": "Oumar Diakite",
        "position": "Delantero",
        "club": "Círculo Brujas"
      },
      {
        "code": "CIV 22",
        "name": "Yan Diomande",
        "position": "Delantero",
        "club": "Leipzig"
      },
      {
        "code": "CIV 23",
        "name": "Evann Guessand",
        "position": "Delantero",
        "club": "Crystal Palace"
      },
      {
        "code": "CIV 24",
        "name": "Nicolas Pepe",
        "position": "Delantero",
        "club": "Villarreal"
      },
      {
        "code": "CIV 25",
        "name": "Bazoumana Toure",
        "position": "Delantero",
        "club": "Hoffenheim"
      },
      {
        "code": "CIV 26",
        "name": "Elye Wahi",
        "position": "Delantero",
        "club": "Niza"
      }
    ]
  },
  {
    "team": "Republica Democratica del Congo",
    "code": "COD",
    "sourceTeam": "DR Congo",
    "players": [
      {
        "code": "COD 1",
        "name": "Timothy Fayulu",
        "position": "Portero",
        "club": "FC Noah"
      },
      {
        "code": "COD 2",
        "name": "Lionel Mpasi",
        "position": "Portero",
        "club": "Le Havre"
      },
      {
        "code": "COD 3",
        "name": "Mattieu Epolo",
        "position": "Portero",
        "club": "Standard Lieja"
      },
      {
        "code": "COD 4",
        "name": "Aaron Wan-Bissaka",
        "position": "Defensa",
        "club": "West Ham"
      },
      {
        "code": "COD 5",
        "name": "Gedeon Kalulu",
        "position": "Defensa",
        "club": "Aris"
      },
      {
        "code": "COD 6",
        "name": "Chancel Mbemba",
        "position": "Defensa",
        "club": "LOSC Lille"
      },
      {
        "code": "COD 7",
        "name": "Steve Kapuadi",
        "position": "Defensa",
        "club": "Widzeu Lodz"
      },
      {
        "code": "COD 8",
        "name": "Axel Tuanzebe",
        "position": "Defensa",
        "club": "Burnley"
      },
      {
        "code": "COD 9",
        "name": "Dylan Batubinsika",
        "position": "Defensa",
        "club": "Larissa"
      },
      {
        "code": "COD 10",
        "name": "Rocky Bushiri",
        "position": "Defensa",
        "club": "Hibernian"
      },
      {
        "code": "COD 11",
        "name": "Arthur Masuku",
        "position": "Defensa",
        "club": "Lens"
      },
      {
        "code": "COD 12",
        "name": "Joris Kayembe",
        "position": "Defensa",
        "club": "KRC Genk"
      },
      {
        "code": "COD 13",
        "name": "Samuel Moutoussamy",
        "position": "Mediocampista",
        "club": "Atromitos"
      },
      {
        "code": "COD 14",
        "name": "Ngal’Ayel Mukau",
        "position": "Mediocampista",
        "club": "LOSC Lille"
      },
      {
        "code": "COD 15",
        "name": "Gael Kakuta",
        "position": "Mediocampista",
        "club": "Larissa"
      },
      {
        "code": "COD 16",
        "name": "Charles Pickel",
        "position": "Mediocampista",
        "club": "Espanyol"
      },
      {
        "code": "COD 17",
        "name": "Noah Sadiki",
        "position": "Mediocampista",
        "club": "Sunderland"
      },
      {
        "code": "COD 18",
        "name": "Edo Kayembe",
        "position": "Mediocampista",
        "club": "Watford"
      },
      {
        "code": "COD 19",
        "name": "Théo Bongonda",
        "position": "Delantero",
        "club": "Spartak Moscú"
      },
      {
        "code": "COD 20",
        "name": "Nathanael Mbuku",
        "position": "Delantero",
        "club": "Montpellier"
      },
      {
        "code": "COD 21",
        "name": "Cédric Bakambu",
        "position": "Delantero",
        "club": "Betis"
      },
      {
        "code": "COD 22",
        "name": "Simon Banza",
        "position": "Delantero",
        "club": "Al-Jazira"
      },
      {
        "code": "COD 23",
        "name": "Fiston Mayele",
        "position": "Delantero",
        "club": "Pyramids"
      },
      {
        "code": "COD 24",
        "name": "Brian Cipenga",
        "position": "Delantero",
        "club": "Castellón"
      },
      {
        "code": "COD 25",
        "name": "Yoane Wissa",
        "position": "Delantero",
        "club": "Newcastle"
      },
      {
        "code": "COD 26",
        "name": "Meschack Elia",
        "position": "Delantero",
        "club": "Alanyaspor"
      }
    ]
  },
  {
    "team": "Colombia",
    "code": "COL",
    "sourceTeam": "Colombia",
    "players": [
      {
        "code": "COL 1",
        "name": "Álvaro Montero",
        "position": "Portero",
        "club": "Vélez Sarsfield"
      },
      {
        "code": "COL 2",
        "name": "Camilo Vargas",
        "position": "Portero",
        "club": "Atlas"
      },
      {
        "code": "COL 3",
        "name": "David Ospina",
        "position": "Portero",
        "club": "Atlético Nacional"
      },
      {
        "code": "COL 4",
        "name": "Daniel Muñoz",
        "position": "Defensa",
        "club": "Crystal Palace"
      },
      {
        "code": "COL 5",
        "name": "Santiago Arias",
        "position": "Defensa",
        "club": "Independiente"
      },
      {
        "code": "COL 6",
        "name": "Dávinson Sánchez",
        "position": "Defensa",
        "club": "Galatasaray"
      },
      {
        "code": "COL 7",
        "name": "Jhon Lucumí",
        "position": "Defensa",
        "club": "Bologna"
      },
      {
        "code": "COL 8",
        "name": "Yerry Mina",
        "position": "Defensa",
        "club": "Cagliari"
      },
      {
        "code": "COL 9",
        "name": "Willer Ditta",
        "position": "Defensa",
        "club": "Cruz Azul"
      },
      {
        "code": "COL 10",
        "name": "Déiver Machado",
        "position": "Defensa",
        "club": "FC Nantes"
      },
      {
        "code": "COL 11",
        "name": "Johan Mojica",
        "position": "Defensa",
        "club": "Mallorca"
      },
      {
        "code": "COL 12",
        "name": "Gustavo Puerta",
        "position": "Mediocampista",
        "club": "Racing de Santander"
      },
      {
        "code": "COL 13",
        "name": "James Rodríguez",
        "position": "Mediocampista",
        "club": "Minnesota United"
      },
      {
        "code": "COL 14",
        "name": "Jefferson Lerma",
        "position": "Mediocampista",
        "club": "Crystal Palace"
      },
      {
        "code": "COL 15",
        "name": "Jhon Arias",
        "position": "Mediocampista",
        "club": "Palmeiras"
      },
      {
        "code": "COL 16",
        "name": "Jorge Carrascal",
        "position": "Mediocampista",
        "club": "Flamengo"
      },
      {
        "code": "COL 17",
        "name": "Juan Fernando Quintero",
        "position": "Mediocampista",
        "club": "River Plate"
      },
      {
        "code": "COL 18",
        "name": "Richard Ríos",
        "position": "Mediocampista",
        "club": "Benfica"
      },
      {
        "code": "COL 19",
        "name": "Kevin Castaño",
        "position": "Mediocampista",
        "club": "River Plate"
      },
      {
        "code": "COL 20",
        "name": "Jaminton Campaz",
        "position": "Mediocampista",
        "club": "Rosario Central"
      },
      {
        "code": "COL 21",
        "name": "Juan Portilla",
        "position": "Mediocampista",
        "club": "Paranaense"
      },
      {
        "code": "COL 22",
        "name": "Luis Diaz",
        "position": "Delantero",
        "club": "Bayern Múnich"
      },
      {
        "code": "COL 23",
        "name": "Luis Suárez",
        "position": "Delantero",
        "club": "Sporting"
      },
      {
        "code": "COL 24",
        "name": "Jhon Córdoba",
        "position": "Delantero",
        "club": "Krasnodar"
      },
      {
        "code": "COL 25",
        "name": "Carlos Gómez",
        "position": "Delantero",
        "club": "Vasco da Gama"
      },
      {
        "code": "COL 26",
        "name": "Juan Camilo Hernández",
        "position": "Delantero",
        "club": "Real Betis"
      }
    ]
  },
  {
    "team": "Cabo Verde",
    "code": "CPV",
    "sourceTeam": "Cape Verde",
    "players": [
      {
        "code": "CPV 1",
        "name": "Josimar Dias",
        "position": "Portero",
        "club": "Chaves"
      },
      {
        "code": "CPV 2",
        "name": "Márcio da Rosa",
        "position": "Portero",
        "club": "Montana"
      },
      {
        "code": "CPV 3",
        "name": "Carlos Santos",
        "position": "Portero",
        "club": "San Diego"
      },
      {
        "code": "CPV 4",
        "name": "Steven Moreira",
        "position": "Defensa",
        "club": "Columbus Crew"
      },
      {
        "code": "CPV 5",
        "name": "Wagner Pina",
        "position": "Defensa",
        "club": "Trabzonspor"
      },
      {
        "code": "CPV 6",
        "name": "João Paulo Fernandes",
        "position": "Defensa",
        "club": "FCSB"
      },
      {
        "code": "CPV 7",
        "name": "Sidny Lopes Cabral",
        "position": "Defensa",
        "club": "Benfica"
      },
      {
        "code": "CPV 8",
        "name": "Logan Costa",
        "position": "Defensa",
        "club": "Villarreal"
      },
      {
        "code": "CPV 9",
        "name": "Roberto Lopes",
        "position": "Defensa",
        "club": "Shamrock Rovers"
      },
      {
        "code": "CPV 10",
        "name": "Kelvin Pires",
        "position": "Defensa",
        "club": "SJK Seinäjoki"
      },
      {
        "code": "CPV 11",
        "name": "Ianique Tavares",
        "position": "Defensa",
        "club": "Torreense"
      },
      {
        "code": "CPV 12",
        "name": "Edilson Borges",
        "position": "Defensa",
        "club": "Al-Bataeh CSC"
      },
      {
        "code": "CPV 13",
        "name": "Jamiro Monteiro",
        "position": "Mediocampista",
        "club": "Zwolle"
      },
      {
        "code": "CPV 14",
        "name": "Telmo Arcanjo",
        "position": "Mediocampista",
        "club": "Vitoria Guimarães"
      },
      {
        "code": "CPV 15",
        "name": "Yannick Semedo",
        "position": "Mediocampista",
        "club": "Farense"
      },
      {
        "code": "CPV 16",
        "name": "Laros Duarte",
        "position": "Mediocampista",
        "club": "Puskas AFC"
      },
      {
        "code": "CPV 17",
        "name": "Deroy Duarte",
        "position": "Mediocampista",
        "club": "Ludogorets"
      },
      {
        "code": "CPV 18",
        "name": "Kevin Pina",
        "position": "Mediocampista",
        "club": "Krasnodar"
      },
      {
        "code": "CPV 19",
        "name": "Ryan Mendes",
        "position": "Delantero",
        "club": "Igdir FK"
      },
      {
        "code": "CPV 20",
        "name": "Willy Semedo",
        "position": "Delantero",
        "club": "Omonia Nicosia"
      },
      {
        "code": "CPV 21",
        "name": "Garry Rodrigues",
        "position": "Delantero",
        "club": "Apollon Limassol"
      },
      {
        "code": "CPV 22",
        "name": "Jovane Cabral",
        "position": "Delantero",
        "club": "Estrela Amadora"
      },
      {
        "code": "CPV 23",
        "name": "Nuno da Costa",
        "position": "Delantero",
        "club": "Basaksehir FK"
      },
      {
        "code": "CPV 24",
        "name": "Dailon Livramento",
        "position": "Delantero",
        "club": "Casa Pia"
      },
      {
        "code": "CPV 25",
        "name": "Gilson Benchimol",
        "position": "Delantero",
        "club": "Akron Togliatti"
      },
      {
        "code": "CPV 26",
        "name": "Hélio Varela",
        "position": "Delantero",
        "club": "Maccabi Tel Aviv"
      }
    ]
  },
  {
    "team": "Croacia",
    "code": "CRO",
    "sourceTeam": "Croatia",
    "players": [
      {
        "code": "CRO 1",
        "name": "Dominic Livakovic",
        "position": "Portero",
        "club": "Dinamo"
      },
      {
        "code": "CRO 2",
        "name": "Dominik Kotarski",
        "position": "Portero",
        "club": "Kabenhavn"
      },
      {
        "code": "CRO 3",
        "name": "Ivor Pandur",
        "position": "Portero",
        "club": "Hull City"
      },
      {
        "code": "CRO 4",
        "name": "Josko Gvardiol",
        "position": "Defensa",
        "club": "Man. City"
      },
      {
        "code": "CRO 5",
        "name": "Duje Caleta-Car",
        "position": "Defensa",
        "club": "Real Sociedad"
      },
      {
        "code": "CRO 6",
        "name": "Josip Sutalo",
        "position": "Defensa",
        "club": "Ajax"
      },
      {
        "code": "CRO 7",
        "name": "Josip Stanisic",
        "position": "Defensa",
        "club": "Bayern de Múnich"
      },
      {
        "code": "CRO 8",
        "name": "Marin Pongracic",
        "position": "Defensa",
        "club": "Fiorentina"
      },
      {
        "code": "CRO 9",
        "name": "Martin Erlic",
        "position": "Defensa",
        "club": "Midtjylland"
      },
      {
        "code": "CRO 10",
        "name": "Luka Vuskovic",
        "position": "Defensa",
        "club": "HSV"
      },
      {
        "code": "CRO 11",
        "name": "Luka Modric",
        "position": "Mediocampista",
        "club": "Milan"
      },
      {
        "code": "CRO 12",
        "name": "Mateo Kovacic",
        "position": "Mediocampista",
        "club": "Man. City"
      },
      {
        "code": "CRO 13",
        "name": "Mario Pasalic",
        "position": "Mediocampista",
        "club": "Atalanta"
      },
      {
        "code": "CRO 14",
        "name": "Nikola Vlasic",
        "position": "Mediocampista",
        "club": "Torino"
      },
      {
        "code": "CRO 15",
        "name": "Luka Sucic",
        "position": "Mediocampista",
        "club": "Real Sociedad"
      },
      {
        "code": "CRO 16",
        "name": "Martin Baturina",
        "position": "Mediocampista",
        "club": "Como"
      },
      {
        "code": "CRO 17",
        "name": "Kristijan Jakic",
        "position": "Mediocampista",
        "club": "Augsburg"
      },
      {
        "code": "CRO 18",
        "name": "Petar Sucic",
        "position": "Mediocampista",
        "club": "Inter"
      },
      {
        "code": "CRO 19",
        "name": "Nikola Moro",
        "position": "Mediocampista",
        "club": "Bologna"
      },
      {
        "code": "CRO 20",
        "name": "Toni Fruk",
        "position": "Mediocampista",
        "club": "Rijeka"
      },
      {
        "code": "CRO 21",
        "name": "Ivan Perisic",
        "position": "Delantero",
        "club": "PSV"
      },
      {
        "code": "CRO 22",
        "name": "Andrej Kramaric",
        "position": "Delantero",
        "club": "Hoffenheim"
      },
      {
        "code": "CRO 23",
        "name": "Ante Budimir",
        "position": "Delantero",
        "club": "Osasuna"
      },
      {
        "code": "CRO 24",
        "name": "Marco Pasalic",
        "position": "Delantero",
        "club": "Orlando City"
      },
      {
        "code": "CRO 25",
        "name": "Petar Musa",
        "position": "Delantero",
        "club": "Dallas"
      },
      {
        "code": "CRO 26",
        "name": "Igor Matanovic",
        "position": "Delantero",
        "club": "Friburgo"
      }
    ]
  },
  {
    "team": "Curazao",
    "code": "CUW",
    "sourceTeam": "Curaçao",
    "players": [
      {
        "code": "CUW 1",
        "name": "Tyrick Bodak",
        "position": "Portero",
        "club": "Telsar"
      },
      {
        "code": "CUW 2",
        "name": "Trevor Doornbusch",
        "position": "Portero",
        "club": "VVV Venlo"
      },
      {
        "code": "CUW 3",
        "name": "Eloy Room",
        "position": "Portero",
        "club": "Miami FC"
      },
      {
        "code": "CUW 4",
        "name": "Riechedly Bazoer",
        "position": "Defensa",
        "club": "Konyaspor"
      },
      {
        "code": "CUW 5",
        "name": "Joshua Brenet",
        "position": "Defensa",
        "club": "Kayserispor"
      },
      {
        "code": "CUW 6",
        "name": "Roshon Van Eijma",
        "position": "Defensa",
        "club": "Waalwijk"
      },
      {
        "code": "CUW 7",
        "name": "Sherel Floranus",
        "position": "Defensa",
        "club": "PEC Zwolle"
      },
      {
        "code": "CUW 8",
        "name": "Deveron Fonville",
        "position": "Defensa",
        "club": "Nijmegen"
      },
      {
        "code": "CUW 9",
        "name": "Jurïen Gaari",
        "position": "Defensa",
        "club": "Abha"
      },
      {
        "code": "CUW 10",
        "name": "Armando Obispo",
        "position": "Defensa",
        "club": "PSV"
      },
      {
        "code": "CUW 11",
        "name": "Shurandy Sambo",
        "position": "Defensa",
        "club": "Sparta Rotterdam"
      },
      {
        "code": "CUW 12",
        "name": "Juninho Bacuna",
        "position": "Mediocampista",
        "club": "FC Volendam"
      },
      {
        "code": "CUW 13",
        "name": "Leandro Bacuna",
        "position": "Mediocampista",
        "club": "Igdir FK"
      },
      {
        "code": "CUW 14",
        "name": "Livano Comenencia",
        "position": "Mediocampista",
        "club": "Zurich"
      },
      {
        "code": "CUW 15",
        "name": "Kevin Felida",
        "position": "Mediocampista",
        "club": "Den Bosch"
      },
      {
        "code": "CUW 16",
        "name": "Arjany Martha",
        "position": "Mediocampista",
        "club": "Rotherham"
      },
      {
        "code": "CUW 17",
        "name": "Tyrese Noslin",
        "position": "Mediocampista",
        "club": "Telsar"
      },
      {
        "code": "CUW 18",
        "name": "Godfried Roemeratoe",
        "position": "Mediocampista",
        "club": "Waalwijk"
      },
      {
        "code": "CUW 19",
        "name": "Jeremy Antonisse",
        "position": "Delantero",
        "club": "Kifisia"
      },
      {
        "code": "CUW 20",
        "name": "Tahith Chong",
        "position": "Delantero",
        "club": "Sheffield United"
      },
      {
        "code": "CUW 21",
        "name": "Kenji Gorré",
        "position": "Delantero",
        "club": "Maccabi Haifa"
      },
      {
        "code": "CUW 22",
        "name": "Sontje Hansen",
        "position": "Delantero",
        "club": "Middlesbrough"
      },
      {
        "code": "CUW 23",
        "name": "Gervane Kastaneer",
        "position": "Delantero",
        "club": "Terengganu"
      },
      {
        "code": "CUW 24",
        "name": "Brandley Kuwas",
        "position": "Delantero",
        "club": "FC Volendam"
      },
      {
        "code": "CUW 25",
        "name": "Jürgen Locadia",
        "position": "Delantero",
        "club": "Miami FC"
      },
      {
        "code": "CUW 26",
        "name": "Jearl Margaritha",
        "position": "Delantero",
        "club": "SK Beveren"
      }
    ]
  },
  {
    "team": "Republica Checa",
    "code": "CZE",
    "sourceTeam": "Czechia",
    "players": [
      {
        "code": "CZE 1",
        "name": "Lukas Hornicek",
        "position": "Portero",
        "club": "SC Braga"
      },
      {
        "code": "CZE 2",
        "name": "Matej Kovar",
        "position": "Portero",
        "club": "PSV"
      },
      {
        "code": "CZE 3",
        "name": "Jindrich Stanek",
        "position": "Portero",
        "club": "Slavia Praga"
      },
      {
        "code": "CZE 4",
        "name": "Ladislav Krejci",
        "position": "Defensa",
        "club": "Wolverhampton"
      },
      {
        "code": "CZE 5",
        "name": "Robin Hranac",
        "position": "Defensa",
        "club": "Hoffenheim"
      },
      {
        "code": "CZE 6",
        "name": "Stepan Chaloupek",
        "position": "Defensa",
        "club": "Slavia Praga"
      },
      {
        "code": "CZE 7",
        "name": "David Zima 8Slavia Praga)",
        "position": "Defensa",
        "club": ""
      },
      {
        "code": "CZE 8",
        "name": "Tomas Holes",
        "position": "Defensa",
        "club": "Slavia Praga"
      },
      {
        "code": "CZE 9",
        "name": "Jaroslav Zeleny",
        "position": "Defensa",
        "club": "Sparta Praga"
      },
      {
        "code": "CZE 10",
        "name": "David Jurasek",
        "position": "Defensa",
        "club": "Slavia Praga"
      },
      {
        "code": "CZE 11",
        "name": "Vladimir Coufal",
        "position": "Defensa",
        "club": "Hoffenheim"
      },
      {
        "code": "CZE 12",
        "name": "Tomas Soucek",
        "position": "Mediocampista",
        "club": "West Ham"
      },
      {
        "code": "CZE 13",
        "name": "Michal Sadilek",
        "position": "Mediocampista",
        "club": "Slavia Praga"
      },
      {
        "code": "CZE 14",
        "name": "Lukas Cerv",
        "position": "Mediocampista",
        "club": "Viktoria Plzen"
      },
      {
        "code": "CZE 15",
        "name": "Hugo Sochurek",
        "position": "Mediocampista",
        "club": "Sparta Praga"
      },
      {
        "code": "CZE 16",
        "name": "Alexander Sojka",
        "position": "Mediocampista",
        "club": "Viktoria Plzen"
      },
      {
        "code": "CZE 17",
        "name": "Vladimir Darida",
        "position": "Mediocampista",
        "club": "Hraed Kralove"
      },
      {
        "code": "CZE 18",
        "name": "David Doudera",
        "position": "Mediocampista",
        "club": "Slavia Praga"
      },
      {
        "code": "CZE 19",
        "name": "Pavel Sulc",
        "position": "Mediocampista",
        "club": "Olympique Lyon"
      },
      {
        "code": "CZE 20",
        "name": "Denis Visinsky",
        "position": "Mediocampista",
        "club": "Viktoria Plzen"
      },
      {
        "code": "CZE 21",
        "name": "Patrick Schick",
        "position": "Delantero",
        "club": "Bayer Leverkusen"
      },
      {
        "code": "CZE 22",
        "name": "Lukas Provod",
        "position": "Delantero",
        "club": "Slavia Praga"
      },
      {
        "code": "CZE 23",
        "name": "Adam Hlozek",
        "position": "Delantero",
        "club": "Hoffenheim"
      },
      {
        "code": "CZE 24",
        "name": "Mojmir Chytil",
        "position": "Delantero",
        "club": "Slavia Praga"
      },
      {
        "code": "CZE 25",
        "name": "Jan Kuchta",
        "position": "Delantero",
        "club": "Sparta Praga"
      },
      {
        "code": "CZE 26",
        "name": "Tomas Chory",
        "position": "Delantero",
        "club": "Slavia Praga"
      }
    ]
  },
  {
    "team": "Ecuador",
    "code": "ECU",
    "sourceTeam": "Ecuador",
    "players": [
      {
        "code": "ECU 1",
        "name": "Hernán Galíndez",
        "position": "Portero",
        "club": "Huracán"
      },
      {
        "code": "ECU 2",
        "name": "Moisés Ramírez",
        "position": "Portero",
        "club": "AE Kifisias"
      },
      {
        "code": "ECU 3",
        "name": "Gonzalo Valle",
        "position": "Portero",
        "club": "Liga de Quito"
      },
      {
        "code": "ECU 4",
        "name": "Willian Pacho",
        "position": "Defensa",
        "club": "PSG"
      },
      {
        "code": "ECU 5",
        "name": "Piero Hincapié",
        "position": "Defensa",
        "club": "Arsenal"
      },
      {
        "code": "ECU 6",
        "name": "Joel Ordóñez",
        "position": "Defensa",
        "club": "Brujas"
      },
      {
        "code": "ECU 7",
        "name": "Jackson Porozo",
        "position": "Defensa",
        "club": "Club Tijuana"
      },
      {
        "code": "ECU 8",
        "name": "Félix Torres",
        "position": "Defensa",
        "club": "Internacional"
      },
      {
        "code": "ECU 9",
        "name": "Pervis Estupiñán",
        "position": "Defensa",
        "club": "Milan"
      },
      {
        "code": "ECU 10",
        "name": "Yaimar Medina",
        "position": "Defensa",
        "club": "KRC Genk"
      },
      {
        "code": "ECU 11",
        "name": "Ángelo Preciado",
        "position": "Defensa",
        "club": "Atlético Mineiro"
      },
      {
        "code": "ECU 12",
        "name": "Moisés Caicedo",
        "position": "Mediocampista",
        "club": "Chelsea"
      },
      {
        "code": "ECU 13",
        "name": "Jordi Alcívar",
        "position": "Mediocampista",
        "club": "Independiente del Valle"
      },
      {
        "code": "ECU 14",
        "name": "Denil Castillo",
        "position": "Mediocampista",
        "club": "Midtjylland"
      },
      {
        "code": "ECU 15",
        "name": "Alan Franco",
        "position": "Mediocampista",
        "club": "Atlético Mineiro"
      },
      {
        "code": "ECU 16",
        "name": "Kendry Páez",
        "position": "Mediocampista",
        "club": "River Plate"
      },
      {
        "code": "ECU 17",
        "name": "Nilson Angulo",
        "position": "Mediocampista",
        "club": "Sunderland"
      },
      {
        "code": "ECU 18",
        "name": "Gonzalo Plata",
        "position": "Delantero",
        "club": "Flamengo"
      },
      {
        "code": "ECU 19",
        "name": "John Yeboah",
        "position": "Delantero",
        "club": "Venezia"
      },
      {
        "code": "ECU 20",
        "name": "Enner Valencia",
        "position": "Delantero",
        "club": "Pachuca"
      },
      {
        "code": "ECU 21",
        "name": "Jordy Caicedo",
        "position": "Delantero",
        "club": "Huracán"
      },
      {
        "code": "ECU 22",
        "name": "Jeremy Arévalo",
        "position": "Delantero",
        "club": "Stuttgart"
      },
      {
        "code": "ECU 23",
        "name": "Anthony Valencia",
        "position": "Delantero",
        "club": "Royal Antwerp"
      },
      {
        "code": "ECU 24",
        "name": "Kevin Rodríguez",
        "position": "Delantero",
        "club": "Unión Saint-Gilloise"
      }
    ]
  },
  {
    "team": "Egipto",
    "code": "EGY",
    "sourceTeam": "Egypt",
    "players": [
      {
        "code": "EGY 1",
        "name": "Mohamed El Shenawy",
        "position": "Portero",
        "club": "Al-Ahly SC"
      },
      {
        "code": "EGY 2",
        "name": "Mostafa Shobeir",
        "position": "Portero",
        "club": "Al-Ahly SC"
      },
      {
        "code": "EGY 3",
        "name": "Al-Mahdy Soliman",
        "position": "Portero",
        "club": "Al-Ittihad Alexandria"
      },
      {
        "code": "EGY 4",
        "name": "Mohamed Alaa",
        "position": "Portero",
        "club": "ZED FC"
      },
      {
        "code": "EGY 5",
        "name": "Mohamed Hany",
        "position": "Defensa",
        "club": "Al-Ahly SC"
      },
      {
        "code": "EGY 6",
        "name": "Tarek El Ala",
        "position": "Defensa",
        "club": "Al-Nasr"
      },
      {
        "code": "EGY 7",
        "name": "Hamdi Fathy",
        "position": "Defensa",
        "club": "Al-Wakrah SC"
      },
      {
        "code": "EGY 8",
        "name": "Ramy Rabia",
        "position": "Defensa",
        "club": "Al-Ahly SC"
      },
      {
        "code": "EGY 9",
        "name": "Yasser Ibrahim",
        "position": "Defensa",
        "club": "Al-Ahly SC"
      },
      {
        "code": "EGY 10",
        "name": "Hossam Abdel-Maguid",
        "position": "Defensa",
        "club": "Zamalek SC"
      },
      {
        "code": "EGY 11",
        "name": "Mohamed Abdelmonem",
        "position": "Defensa",
        "club": "OGC Niza"
      },
      {
        "code": "EGY 12",
        "name": "Ahmed Fotouh",
        "position": "Defensa",
        "club": "Zamalek SC"
      },
      {
        "code": "EGY 13",
        "name": "Karim Hafez",
        "position": "Defensa",
        "club": "Pyramids FC"
      },
      {
        "code": "EGY 14",
        "name": "Marwan Attia",
        "position": "Mediocampista",
        "club": "Al-Ahly SC"
      },
      {
        "code": "EGY 15",
        "name": "Mohand Lashin",
        "position": "Mediocampista",
        "club": "Pyramids FC"
      },
      {
        "code": "EGY 16",
        "name": "Nabil Emad Dunga",
        "position": "Mediocampista",
        "club": "Zamalek SC"
      },
      {
        "code": "EGY 17",
        "name": "Mahmoud Saber",
        "position": "Mediocampista",
        "club": "Pyramids FC / Smouha SC"
      },
      {
        "code": "EGY 18",
        "name": "Ahmed Sayed Zizo",
        "position": "Mediocampista",
        "club": "Zamalek SC"
      },
      {
        "code": "EGY 19",
        "name": "Imam Ashour",
        "position": "Mediocampista",
        "club": "Al-Ahly SC"
      },
      {
        "code": "EGY 20",
        "name": "Mostafa Abdel-Raouf Ziko",
        "position": "Mediocampista",
        "club": "ZED FC"
      },
      {
        "code": "EGY 21",
        "name": "Mahmoud Trezeguet",
        "position": "Mediocampista",
        "club": "Al-Rayyan SC"
      },
      {
        "code": "EGY 22",
        "name": "Ibrahim Ade (Pyramids FC)l",
        "position": "Mediocampista",
        "club": ""
      },
      {
        "code": "EGY 23",
        "name": "Haithem Hassan",
        "position": "Mediocampista",
        "club": "Real Oviedo"
      },
      {
        "code": "EGY 24",
        "name": "Mohamed Salah",
        "position": "Delantero",
        "club": "Liverpool FC"
      },
      {
        "code": "EGY 25",
        "name": "Omar Marmoush",
        "position": "Delantero",
        "club": "Manchester City"
      },
      {
        "code": "EGY 26",
        "name": "Aktai Abdullah",
        "position": "Delantero",
        "club": "ZED FC"
      },
      {
        "code": "EGY 27",
        "name": "Hamza Abdelkarim",
        "position": "Delantero",
        "club": "FC Barcelona Atlètic/Al Ahly"
      }
    ]
  },
  {
    "team": "Inglaterra",
    "code": "ENG",
    "sourceTeam": "England",
    "players": [
      {
        "code": "ENG 1",
        "name": "Jordan Pickford",
        "position": "Portero",
        "club": "Everton"
      },
      {
        "code": "ENG 2",
        "name": "Dean Henderson",
        "position": "Portero",
        "club": "Crystal Palace"
      },
      {
        "code": "ENG 3",
        "name": "James Trafford",
        "position": "Portero",
        "club": "Manchester City"
      },
      {
        "code": "ENG 4",
        "name": "Reece James",
        "position": "Defensa",
        "club": "Chelsea"
      },
      {
        "code": "ENG 5",
        "name": "Tino Livramento",
        "position": "Defensa",
        "club": "Newcastle"
      },
      {
        "code": "ENG 6",
        "name": "John Stones",
        "position": "Defensa",
        "club": "Manchester City"
      },
      {
        "code": "ENG 7",
        "name": "Marc Guéhi",
        "position": "Defensa",
        "club": "Manchester City"
      },
      {
        "code": "ENG 8",
        "name": "Ezri Konsa",
        "position": "Defensa",
        "club": "Aston Villa"
      },
      {
        "code": "ENG 9",
        "name": "Dan Burn",
        "position": "Defensa",
        "club": "Newcastle"
      },
      {
        "code": "ENG 10",
        "name": "Jarell Quansah",
        "position": "Defensa",
        "club": "Bayer Leverkusen"
      },
      {
        "code": "ENG 11",
        "name": "Nico O’Reilly",
        "position": "Defensa",
        "club": "Manchester City"
      },
      {
        "code": "ENG 12",
        "name": "Djed Spence",
        "position": "Defensa",
        "club": "Tottenham"
      },
      {
        "code": "ENG 13",
        "name": "Jordan Henderson",
        "position": "Mediocampista",
        "club": "Brentford"
      },
      {
        "code": "ENG 14",
        "name": "Elliot Anderson",
        "position": "Mediocampista",
        "club": "Nottingham Forest"
      },
      {
        "code": "ENG 15",
        "name": "Declan Rice",
        "position": "Mediocampista",
        "club": "Arsenal"
      },
      {
        "code": "ENG 16",
        "name": "Kobbie Mainoo",
        "position": "Mediocampista",
        "club": "Manchester United"
      },
      {
        "code": "ENG 17",
        "name": "Eberechi Eze",
        "position": "Mediocampista",
        "club": "Arsenal"
      },
      {
        "code": "ENG 18",
        "name": "Jude Bellingham",
        "position": "Mediocampista",
        "club": "Real Madrid"
      },
      {
        "code": "ENG 19",
        "name": "Morgan Rogers",
        "position": "Mediocampista",
        "club": "Aston Villa"
      },
      {
        "code": "ENG 20",
        "name": "Bukayo Saka",
        "position": "Delantero",
        "club": "Arsenal"
      },
      {
        "code": "ENG 21",
        "name": "Noni Madueke",
        "position": "Delantero",
        "club": "Arsenal"
      },
      {
        "code": "ENG 22",
        "name": "Marcus Rashford",
        "position": "Delantero",
        "club": "Barcelona"
      },
      {
        "code": "ENG 23",
        "name": "Anthony Gordon",
        "position": "Delantero",
        "club": "Newcastle"
      },
      {
        "code": "ENG 24",
        "name": "Harry Kane",
        "position": "Delantero",
        "club": "Bayern Múnich"
      },
      {
        "code": "ENG 25",
        "name": "Ollie Watkins",
        "position": "Delantero",
        "club": "Aston Villa"
      },
      {
        "code": "ENG 26",
        "name": "Ivan Toney",
        "position": "Delantero",
        "club": "Al-Ahli"
      }
    ]
  },
  {
    "team": "Espana",
    "code": "ESP",
    "sourceTeam": "Spain",
    "players": [
      {
        "code": "ESP 1",
        "name": "Unai Simón",
        "position": "Portero",
        "club": "Athletic Club"
      },
      {
        "code": "ESP 2",
        "name": "David Raya",
        "position": "Portero",
        "club": "Arsenal"
      },
      {
        "code": "ESP 3",
        "name": "Joan García",
        "position": "Portero",
        "club": "FC Barcelona"
      },
      {
        "code": "ESP 4",
        "name": "Pedro Porro",
        "position": "Defensa",
        "club": "Tottenham"
      },
      {
        "code": "ESP 5",
        "name": "Marcos Llorente",
        "position": "Defensa",
        "club": "Atlético de Madrid"
      },
      {
        "code": "ESP 6",
        "name": "Marc Cucurella",
        "position": "Defensa",
        "club": "Chelsea"
      },
      {
        "code": "ESP 7",
        "name": "Alex Grimaldo",
        "position": "Defensa",
        "club": "Bayer Leverkusen"
      },
      {
        "code": "ESP 8",
        "name": "Aymeric Laporte",
        "position": "Defensa",
        "club": "Athletic Club"
      },
      {
        "code": "ESP 9",
        "name": "Pau Cubarsí",
        "position": "Defensa",
        "club": "FC Barcelona"
      },
      {
        "code": "ESP 10",
        "name": "Marc Pubill",
        "position": "Defensa",
        "club": "Atlético de Madrid"
      },
      {
        "code": "ESP 11",
        "name": "Eric García",
        "position": "Defensa",
        "club": "FC Barcelona"
      },
      {
        "code": "ESP 12",
        "name": "Rodri",
        "position": "Mediocampista",
        "club": "Manchester City"
      },
      {
        "code": "ESP 13",
        "name": "Martín Zubimendi",
        "position": "Mediocampista",
        "club": "Arsenal"
      },
      {
        "code": "ESP 14",
        "name": "Fabián Ruiz",
        "position": "Mediocampista",
        "club": "PSG"
      },
      {
        "code": "ESP 15",
        "name": "Pedri",
        "position": "Mediocampista",
        "club": "FC Barcelona"
      },
      {
        "code": "ESP 16",
        "name": "Dani Olmo",
        "position": "Mediocampista",
        "club": "FC Barcelona"
      },
      {
        "code": "ESP 17",
        "name": "Gavi",
        "position": "Mediocampista",
        "club": "FC Barcelona"
      },
      {
        "code": "ESP 18",
        "name": "Alex Baena",
        "position": "Mediocampista",
        "club": "Atlético de Madrid"
      },
      {
        "code": "ESP 19",
        "name": "Mikel Merino",
        "position": "Mediocampista",
        "club": "Arsenal"
      },
      {
        "code": "ESP 20",
        "name": "Lamine Yamal",
        "position": "Delantero",
        "club": "FC Barcelona"
      },
      {
        "code": "ESP 21",
        "name": "Nico Williams",
        "position": "Delantero",
        "club": "Athletic Club"
      },
      {
        "code": "ESP 22",
        "name": "Mikel Oyarzabal",
        "position": "Delantero",
        "club": "Real Sociedad"
      },
      {
        "code": "ESP 23",
        "name": "Ferran Torres",
        "position": "Delantero",
        "club": "FC Barcelona"
      },
      {
        "code": "ESP 24",
        "name": "Yeremi Pino",
        "position": "Delantero",
        "club": "Crystal Palace"
      },
      {
        "code": "ESP 25",
        "name": "Victor Muñoz",
        "position": "Delantero",
        "club": "Osasuna"
      },
      {
        "code": "ESP 26",
        "name": "Borja Iglesias",
        "position": "Delantero",
        "club": "Celta"
      }
    ]
  },
  {
    "team": "Francia",
    "code": "FRA",
    "sourceTeam": "France",
    "players": [
      {
        "code": "FRA 1",
        "name": "Mike Maignan",
        "position": "Portero",
        "club": "AC Milan"
      },
      {
        "code": "FRA 2",
        "name": "Brice Samba",
        "position": "Portero",
        "club": "Rennes"
      },
      {
        "code": "FRA 3",
        "name": "Robin Risser",
        "position": "Portero",
        "club": "Lens"
      },
      {
        "code": "FRA 4",
        "name": "Jules Kounde",
        "position": "Defensa",
        "club": "FC Barcelona"
      },
      {
        "code": "FRA 5",
        "name": "Malo Gusto",
        "position": "Defensa",
        "club": "Chelsea"
      },
      {
        "code": "FRA 6",
        "name": "William Saliba",
        "position": "Defensa",
        "club": "Arsenal"
      },
      {
        "code": "FRA 7",
        "name": "Dayot Upamecano",
        "position": "Defensa",
        "club": "FC Bayern"
      },
      {
        "code": "FRA 8",
        "name": "Ibrahima Konaté",
        "position": "Defensa",
        "club": "Liverpool"
      },
      {
        "code": "FRA 9",
        "name": "Lucas Hernández",
        "position": "Defensa",
        "club": "PSG"
      },
      {
        "code": "FRA 10",
        "name": "Theo Hernández",
        "position": "Defensa",
        "club": "Al Hilal"
      },
      {
        "code": "FRA 11",
        "name": "Lucas Digne",
        "position": "Defensa",
        "club": "Aston Villa"
      },
      {
        "code": "FRA 12",
        "name": "Maxence Lacroix",
        "position": "Defensa",
        "club": "Crystal Palace"
      },
      {
        "code": "FRA 13",
        "name": "Aurélien Tchouaméni",
        "position": "Mediocampista",
        "club": "Real Madrid"
      },
      {
        "code": "FRA 14",
        "name": "Adrien Rabiot",
        "position": "Mediocampista",
        "club": "AC Milan"
      },
      {
        "code": "FRA 15",
        "name": "N’Golo Kanté",
        "position": "Mediocampista",
        "club": "Fenerbache"
      },
      {
        "code": "FRA 16",
        "name": "Warren Zaïre-Emery",
        "position": "Mediocampista",
        "club": "PSG"
      },
      {
        "code": "FRA 17",
        "name": "Manu Koné",
        "position": "Mediocampista",
        "club": "AS Roma"
      },
      {
        "code": "FRA 18",
        "name": "Kylian Mbappé",
        "position": "Delantero",
        "club": "Real Madrid"
      },
      {
        "code": "FRA 19",
        "name": "Michael Olise",
        "position": "Delantero",
        "club": "FC Bayern"
      },
      {
        "code": "FRA 20",
        "name": "Ousmane Dembélé",
        "position": "Delantero",
        "club": "PSG"
      },
      {
        "code": "FRA 21",
        "name": "Désiré Doué",
        "position": "Delantero",
        "club": "PSG"
      },
      {
        "code": "FRA 22",
        "name": "Bradley Barcola",
        "position": "Delantero",
        "club": "PSG"
      },
      {
        "code": "FRA 23",
        "name": "Marcus Thuram",
        "position": "Delantero",
        "club": "Inter"
      },
      {
        "code": "FRA 24",
        "name": "Maghnes Akliouche",
        "position": "Delantero",
        "club": "Mónaco"
      },
      {
        "code": "FRA 25",
        "name": "Jean-Philippe Mateta",
        "position": "Delantero",
        "club": "Crystal Palace"
      },
      {
        "code": "FRA 26",
        "name": "Rayan Cherki",
        "position": "Delantero",
        "club": "Manchester City"
      }
    ]
  },
  {
    "team": "Alemania",
    "code": "GER",
    "sourceTeam": "Germany",
    "players": [
      {
        "code": "GER 1",
        "name": "Manuel Neuer",
        "position": "Portero",
        "club": "Bayern"
      },
      {
        "code": "GER 2",
        "name": "Oliver Baumann",
        "position": "Portero",
        "club": "Hoffenheim"
      },
      {
        "code": "GER 3",
        "name": "Alexander Nübel",
        "position": "Portero",
        "club": "Stuttgart"
      },
      {
        "code": "GER 4",
        "name": "Waldemar Anton",
        "position": "Defensa",
        "club": "Dortmund"
      },
      {
        "code": "GER 5",
        "name": "Nathaniel Brown",
        "position": "Defensa",
        "club": "Frankfurt"
      },
      {
        "code": "GER 6",
        "name": "Pascal Groß",
        "position": "Defensa",
        "club": "Brighton & Hove Albion"
      },
      {
        "code": "GER 7",
        "name": "Joshua Kimmich",
        "position": "Defensa",
        "club": "Bayern"
      },
      {
        "code": "GER 8",
        "name": "David Raum",
        "position": "Defensa",
        "club": "Leipzig"
      },
      {
        "code": "GER 9",
        "name": "Antonio Rüdiger",
        "position": "Defensa",
        "club": "Real Madrid"
      },
      {
        "code": "GER 10",
        "name": "Nico Schlotterbeck",
        "position": "Defensa",
        "club": "Dortmund"
      },
      {
        "code": "GER 11",
        "name": "Jonathan Tah",
        "position": "Defensa",
        "club": "Bayern"
      },
      {
        "code": "GER 12",
        "name": "Malick Thiaw",
        "position": "Defensa",
        "club": "Newcastle"
      },
      {
        "code": "GER 13",
        "name": "Aleksandar Pavlovic",
        "position": "Mediocampista",
        "club": "Bayern"
      },
      {
        "code": "GER 14",
        "name": "Jamal Musiala",
        "position": "Mediocampista",
        "club": "Bayern"
      },
      {
        "code": "GER 15",
        "name": "Nadiem Amiri",
        "position": "Mediocampista",
        "club": "Mainz"
      },
      {
        "code": "GER 16",
        "name": "Jamie Leweling",
        "position": "Mediocampista",
        "club": "Stuttgart"
      },
      {
        "code": "GER 17",
        "name": "Felix Nmecha",
        "position": "Mediocampista",
        "club": "Dortmund"
      },
      {
        "code": "GER 18",
        "name": "Angelo Stiller",
        "position": "Mediocampista",
        "club": "Stuttgart"
      },
      {
        "code": "GER 19",
        "name": "Leon Goretzka",
        "position": "Mediocampista",
        "club": "Bayern"
      },
      {
        "code": "GER 20",
        "name": "Lennart Karl",
        "position": "Mediocampista",
        "club": "Bayern"
      },
      {
        "code": "GER 21",
        "name": "Florian Wirtz",
        "position": "Mediocampista",
        "club": "Liverpool"
      },
      {
        "code": "GER 22",
        "name": "Deniz Undav",
        "position": "Delantero",
        "club": "Stuttgart"
      },
      {
        "code": "GER 23",
        "name": "Kai Havertz",
        "position": "Delantero",
        "club": "Arsenal"
      },
      {
        "code": "GER 24",
        "name": "Maximilian Beier",
        "position": "Delantero",
        "club": "Dortmund"
      },
      {
        "code": "GER 25",
        "name": "Leroy Sané",
        "position": "Delantero",
        "club": "Istanbul"
      },
      {
        "code": "GER 26",
        "name": "Nick Woltemade",
        "position": "Delantero",
        "club": "Newcastle"
      }
    ]
  },
  {
    "team": "Ghana",
    "code": "GHA",
    "sourceTeam": "Ghana",
    "players": [
      {
        "code": "GHA 1",
        "name": "Benjamin Asare",
        "position": "Portero",
        "club": "Hearts of Oak"
      },
      {
        "code": "GHA 2",
        "name": "Lawrence Ati-Zigi",
        "position": "Portero",
        "club": "St. Gallen"
      },
      {
        "code": "GHA 3",
        "name": "Joseph Anang",
        "position": "Portero",
        "club": "St. Patrick Athletic"
      },
      {
        "code": "GHA 4",
        "name": "Baba Abdul Rahman",
        "position": "Defensa",
        "club": "PAOK"
      },
      {
        "code": "GHA 5",
        "name": "Gideon Mensah",
        "position": "Defensa",
        "club": "Auxerre"
      },
      {
        "code": "GHA 6",
        "name": "Marvin Senaya",
        "position": "Defensa",
        "club": "Auxerre"
      },
      {
        "code": "GHA 7",
        "name": "Alidu Seidu",
        "position": "Defensa",
        "club": "Stade Rennais"
      },
      {
        "code": "GHA 8",
        "name": "Abdul Mumin",
        "position": "Defensa",
        "club": "Rayo Vallecano"
      },
      {
        "code": "GHA 9",
        "name": "Jerome Opoku",
        "position": "Defensa",
        "club": "Estambul Basaksehir"
      },
      {
        "code": "GHA 10",
        "name": "Jonas Adjetey",
        "position": "Defensa",
        "club": "Wolsfburgo"
      },
      {
        "code": "GHA 11",
        "name": "Kojo Oppong Peprah",
        "position": "Defensa",
        "club": "Niza"
      },
      {
        "code": "GHA 12",
        "name": "Derrick Luckassen",
        "position": "Defensa",
        "club": "Pafos"
      },
      {
        "code": "GHA 13",
        "name": "Elisha Owusu",
        "position": "Mediocampista",
        "club": "Auxerre"
      },
      {
        "code": "GHA 14",
        "name": "Thomas Partey",
        "position": "Mediocampista",
        "club": "Villarreal"
      },
      {
        "code": "GHA 15",
        "name": "Kwasi Sibo",
        "position": "Mediocampista",
        "club": "Oviedo"
      },
      {
        "code": "GHA 16",
        "name": "Augustine Boakye",
        "position": "Mediocampista",
        "club": "Saint-Ettiene"
      },
      {
        "code": "GHA 17",
        "name": "Caleb Yirenky",
        "position": "Mediocampista",
        "club": "Nordsjaelland"
      },
      {
        "code": "GHA 18",
        "name": "Abdul Fatawu Issahaku",
        "position": "Mediocampista",
        "club": "Leicester City"
      },
      {
        "code": "GHA 19",
        "name": "Kamal Deen Sulemana",
        "position": "Mediocampista",
        "club": "Atalanta"
      },
      {
        "code": "GHA 20",
        "name": "Cristopher Bonsu Baah",
        "position": "Delantero",
        "club": "Al-Qadisiyah"
      },
      {
        "code": "GHA 21",
        "name": "Ernest Nuamah",
        "position": "Delantero",
        "club": "Lyon"
      },
      {
        "code": "GHA 22",
        "name": "Antoine Semenyo",
        "position": "Delantero",
        "club": "Manchester City"
      },
      {
        "code": "GHA 23",
        "name": "Brandon Thomas-Asante",
        "position": "Delantero",
        "club": "Coventry City"
      },
      {
        "code": "GHA 24",
        "name": "Prince Kwabena Adu",
        "position": "Delantero",
        "club": "Viktoria Plzen"
      },
      {
        "code": "GHA 25",
        "name": "Iñaki Williams",
        "position": "Delantero",
        "club": "Athletic Club"
      },
      {
        "code": "GHA 26",
        "name": "Jordan Ayew",
        "position": "Delantero",
        "club": "Leicester City"
      }
    ]
  },
  {
    "team": "Haiti",
    "code": "HAI",
    "sourceTeam": "Haiti",
    "players": [
      {
        "code": "HAI 1",
        "name": "Johnny Placide",
        "position": "Portero",
        "club": "SC Bastia"
      },
      {
        "code": "HAI 2",
        "name": "Alexandre Pierre",
        "position": "Portero",
        "club": "FC Sochaux"
      },
      {
        "code": "HAI 3",
        "name": "Josué Duverger",
        "position": "Portero",
        "club": "FC Cosmos Koblenz"
      },
      {
        "code": "HAI 4",
        "name": "Carlens Arcus",
        "position": "Defensa",
        "club": "Angers SCO"
      },
      {
        "code": "HAI 5",
        "name": "Wilguens Paugain",
        "position": "Defensa",
        "club": "SV Zulte Waregem"
      },
      {
        "code": "HAI 6",
        "name": "Duke Lacroix",
        "position": "Defensa",
        "club": "Colorado Springs"
      },
      {
        "code": "HAI 7",
        "name": "Martin Experience",
        "position": "Defensa",
        "club": "AS Nancy-Lorraine"
      },
      {
        "code": "HAI 8",
        "name": "JK Duverne",
        "position": "Defensa",
        "club": "KAA Gent"
      },
      {
        "code": "HAI 9",
        "name": "Ricardo Adé",
        "position": "Defensa",
        "club": "LDU Quito"
      },
      {
        "code": "HAI 10",
        "name": "Hannes Delcroix",
        "position": "Defensa",
        "club": "FC Lugano"
      },
      {
        "code": "HAI 11",
        "name": "Keeto Thermoncy",
        "position": "Defensa",
        "club": "BSC Young Boys II"
      },
      {
        "code": "HAI 12",
        "name": "Leverton Pierre",
        "position": "Mediocampista",
        "club": "FC Vizela"
      },
      {
        "code": "HAI 13",
        "name": "Carl-Fred Sainthe",
        "position": "Mediocampista",
        "club": "El Paso Locomotive FC"
      },
      {
        "code": "HAI 14",
        "name": "Jean-Jacques Danley",
        "position": "Mediocampista",
        "club": "Philadelphia Union"
      },
      {
        "code": "HAI 15",
        "name": "Jeanricner Bellegarde",
        "position": "Mediocampista",
        "club": "Wolverhampton"
      },
      {
        "code": "HAI 16",
        "name": "Pierre Woodenski",
        "position": "Mediocampista",
        "club": "Violette AC"
      },
      {
        "code": "HAI 17",
        "name": "Dominique Simon",
        "position": "Mediocampista",
        "club": "FC Tatran Prešov"
      },
      {
        "code": "HAI 18",
        "name": "Louicius Deedson",
        "position": "Delantero",
        "club": "FC Dallas"
      },
      {
        "code": "HAI 19",
        "name": "Ruben Providence",
        "position": "Delantero",
        "club": "Almere City FC"
      },
      {
        "code": "HAI 20",
        "name": "Josué Casimir",
        "position": "Delantero",
        "club": "AJ Auxerre"
      },
      {
        "code": "HAI 21",
        "name": "Derrick Etienne",
        "position": "Delantero",
        "club": "Toronto FC"
      },
      {
        "code": "HAI 22",
        "name": "Wilson Isidor",
        "position": "Delantero",
        "club": "Sunderland AFC"
      },
      {
        "code": "HAI 23",
        "name": "Duckens Nazon",
        "position": "Delantero",
        "club": "Esteghlal FC"
      },
      {
        "code": "HAI 24",
        "name": "Frantzdy Pierrot",
        "position": "Delantero",
        "club": "Çaykur Rizespor"
      },
      {
        "code": "HAI 25",
        "name": "Yassin Fortune",
        "position": "Delantero",
        "club": "FC Vizela"
      },
      {
        "code": "HAI 26",
        "name": "Lenny Joseph",
        "position": "Delantero",
        "club": "Ferencváros TC"
      }
    ]
  },
  {
    "team": "Iran",
    "code": "IRN",
    "sourceTeam": "Iran",
    "players": [
      {
        "code": "IRN 1",
        "name": "Alireza Beyranvand",
        "position": "Portero",
        "club": "Tractor FC"
      },
      {
        "code": "IRN 2",
        "name": "Hosein Hoseini",
        "position": "Portero",
        "club": "Sepahan"
      },
      {
        "code": "IRN 3",
        "name": "Payam Niazmand",
        "position": "Portero",
        "club": "Persepolis"
      },
      {
        "code": "IRN 4",
        "name": "Shoja Khalilzadeh",
        "position": "Defensa",
        "club": "Tractor FC"
      },
      {
        "code": "IRN 5",
        "name": "Hosein Kanaani",
        "position": "Defensa",
        "club": "Persepolis"
      },
      {
        "code": "IRN 6",
        "name": "Ali Nemati",
        "position": "Defensa",
        "club": "Foolad FC"
      },
      {
        "code": "IRN 7",
        "name": "Danial Eiri",
        "position": "Defensa",
        "club": "Malavan Bandar Anzali"
      },
      {
        "code": "IRN 8",
        "name": "Ehsan Hajisafi",
        "position": "Defensa",
        "club": "Sepahan"
      },
      {
        "code": "IRN 9",
        "name": "Milad Mohammadi",
        "position": "Defensa",
        "club": "Persepolis"
      },
      {
        "code": "IRN 10",
        "name": "Saleh Hardani",
        "position": "Defensa",
        "club": "Esteghlal"
      },
      {
        "code": "IRN 11",
        "name": "Ramin Rezaeiyan",
        "position": "Defensa",
        "club": "Foolad"
      },
      {
        "code": "IRN 12",
        "name": "Saman Ghodoos",
        "position": "Mediocampista",
        "club": "Kalba"
      },
      {
        "code": "IRN 13",
        "name": "Saeid Ezatollahi",
        "position": "Mediocampista",
        "club": "Shabab Al-Ahli Club"
      },
      {
        "code": "IRN 14",
        "name": "Rouzbeh Cheshmi",
        "position": "Mediocampista",
        "club": "Esteghlal"
      },
      {
        "code": "IRN 15",
        "name": "Amir Mohammad Razagh Niya",
        "position": "Mediocampista",
        "club": "Esteghlal"
      },
      {
        "code": "IRN 16",
        "name": "Mohammad Ghorbani",
        "position": "Mediocampista",
        "club": "Al-Wahda"
      },
      {
        "code": "IRN 17",
        "name": "Mehdi Ghayedi",
        "position": "Mediocampista",
        "club": "Al-Nasr"
      },
      {
        "code": "IRN 18",
        "name": "Ariya Yousefi",
        "position": "Mediocampista",
        "club": "Sepahan"
      },
      {
        "code": "IRN 19",
        "name": "Alireza Jahanbakhsh",
        "position": "Mediocampista",
        "club": "FCV Dender EH"
      },
      {
        "code": "IRN 20",
        "name": "Mehdi Torabi",
        "position": "Mediocampista",
        "club": "Tractor FC"
      },
      {
        "code": "IRN 21",
        "name": "Mohammad Mohebbi",
        "position": "Mediocampista",
        "club": "FK Rostov"
      },
      {
        "code": "IRN 22",
        "name": "Mehdi Taremi",
        "position": "Delantero",
        "club": "Olympiacos"
      },
      {
        "code": "IRN 23",
        "name": "Amirhossein Hosseinzadeh",
        "position": "Delantero",
        "club": "Tractor FC"
      },
      {
        "code": "IRN 24",
        "name": "Denis Dargahi",
        "position": "Delantero",
        "club": "Standard de Lieja"
      },
      {
        "code": "IRN 25",
        "name": "Ali Alipour",
        "position": "Delantero",
        "club": "Persepolis"
      },
      {
        "code": "IRN 26",
        "name": "Shahriyar Moghanloo",
        "position": "Delantero",
        "club": "Kalba"
      }
    ]
  },
  {
    "team": "Irak",
    "code": "IRQ",
    "sourceTeam": "Iraq",
    "players": [
      {
        "code": "IRQ 1",
        "name": "Jalal Hassan",
        "position": "Portero",
        "club": "Al-Zawraa"
      },
      {
        "code": "IRQ 2",
        "name": "Ahmed Basil",
        "position": "Portero",
        "club": "Al-Shorta"
      },
      {
        "code": "IRQ 3",
        "name": "Fahad Talib",
        "position": "Portero",
        "club": "Al-Talaba"
      },
      {
        "code": "IRQ 4",
        "name": "Hussein Ali",
        "position": "Defensa",
        "club": "Pogon Szczecin"
      },
      {
        "code": "IRQ 5",
        "name": "Manaf Younis",
        "position": "Defensa",
        "club": "Al-Shorta"
      },
      {
        "code": "IRQ 6",
        "name": "Zaid Tahseen",
        "position": "Defensa",
        "club": "Pakhtakor Tashkent"
      },
      {
        "code": "IRQ 7",
        "name": "Rebin Sulaka",
        "position": "Defensa",
        "club": "Port FC"
      },
      {
        "code": "IRQ 8",
        "name": "Akam Hashem",
        "position": "Defensa",
        "club": "Al-Zawraa"
      },
      {
        "code": "IRQ 9",
        "name": "Merchas Doski",
        "position": "Defensa",
        "club": "Viktoria Plzen"
      },
      {
        "code": "IRQ 10",
        "name": "Ahmed Yahya",
        "position": "Defensa",
        "club": "Al-Shorta"
      },
      {
        "code": "IRQ 11",
        "name": "Frans Putros",
        "position": "Defensa",
        "club": "PERSIB Bandung"
      },
      {
        "code": "IRQ 12",
        "name": "Mustafa Saadoon",
        "position": "Defensa",
        "club": "Al-Shorta"
      },
      {
        "code": "IRQ 13",
        "name": "Zaid Ismail",
        "position": "Mediocampista",
        "club": "Al-Talaba"
      },
      {
        "code": "IRQ 14",
        "name": "Amir Al Ammari",
        "position": "Mediocampista",
        "club": "Cracovia"
      },
      {
        "code": "IRQ 15",
        "name": "Kevin Yakob",
        "position": "Mediocampista",
        "club": "Aarhus GF"
      },
      {
        "code": "IRQ 16",
        "name": "Zidane Iqbal",
        "position": "Mediocampista",
        "club": "Utrecht"
      },
      {
        "code": "IRQ 17",
        "name": "Aimar Sher",
        "position": "Mediocampista",
        "club": "Sarpsborg 08 FF"
      },
      {
        "code": "IRQ 18",
        "name": "Youssef Amyn",
        "position": "Mediocampista",
        "club": "AEK Larnaca"
      },
      {
        "code": "IRQ 19",
        "name": "Ibrahim Bayesh",
        "position": "Mediocampista",
        "club": "Al-Dhafra"
      },
      {
        "code": "IRQ 20",
        "name": "Ahmed Qasem",
        "position": "Delantero",
        "club": "Nashville SC"
      },
      {
        "code": "IRQ 21",
        "name": "Marko Farji",
        "position": "Delantero",
        "club": "Venezia"
      },
      {
        "code": "IRQ 22",
        "name": "Ali Jasim",
        "position": "Delantero",
        "club": "Al-Najma"
      },
      {
        "code": "IRQ 23",
        "name": "Ali Al Hamadi",
        "position": "Delantero",
        "club": "Luton Town"
      },
      {
        "code": "IRQ 24",
        "name": "Ali Yousif",
        "position": "Delantero",
        "club": "Al-Talaba"
      },
      {
        "code": "IRQ 25",
        "name": "Aymen Hussein",
        "position": "Delantero",
        "club": "Al-Karma"
      },
      {
        "code": "IRQ 26",
        "name": "Mohanad Ali",
        "position": "Delantero",
        "club": "Dibba SCC"
      }
    ]
  },
  {
    "team": "Jordania",
    "code": "JOR",
    "sourceTeam": "Jordan",
    "players": [
      {
        "code": "JOR 1",
        "name": "Nour Bani Attia",
        "position": "Portero",
        "club": "Al-Faisaly"
      },
      {
        "code": "JOR 2",
        "name": "Yazeed Abu Laila",
        "position": "Portero",
        "club": "Al-Hussein"
      },
      {
        "code": "JOR 3",
        "name": "Abdullah Al-Fakhoury",
        "position": "Portero",
        "club": "Al-Wehdat"
      },
      {
        "code": "JOR 4",
        "name": "Abdullah Naseeb",
        "position": "Defensa",
        "club": "Al-Zawraa"
      },
      {
        "code": "JOR 5",
        "name": "Saad Al-Rousan",
        "position": "Defensa",
        "club": "Al-Hussein"
      },
      {
        "code": "JOR 6",
        "name": "Yazan Al-Arab",
        "position": "Defensa",
        "club": "FC Seúl"
      },
      {
        "code": "JOR 7",
        "name": "Saleem Obeid",
        "position": "Defensa",
        "club": "Al-Hussein"
      },
      {
        "code": "JOR 8",
        "name": "Mohammad Abu Al-Nadi",
        "position": "Defensa",
        "club": "Selangor"
      },
      {
        "code": "JOR 9",
        "name": "Hussam Abu Dahab",
        "position": "Defensa",
        "club": "Al-Faisaly"
      },
      {
        "code": "JOR 10",
        "name": "Ihsan Haddad",
        "position": "Defensa",
        "club": "Al-Hussein"
      },
      {
        "code": "JOR 11",
        "name": "Anas Badawi",
        "position": "Defensa",
        "club": "Al-Faisaly"
      },
      {
        "code": "JOR 12",
        "name": "Mohammad Abu Hashish",
        "position": "Defensa",
        "club": "Al-Karma"
      },
      {
        "code": "JOR 13",
        "name": "Nour Al-Rawabdeh",
        "position": "Mediocampista",
        "club": "Selangor"
      },
      {
        "code": "JOR 14",
        "name": "Nizar Al-Rashdan",
        "position": "Mediocampista",
        "club": "Qatar SC"
      },
      {
        "code": "JOR 15",
        "name": "Ibrahim Saadeh",
        "position": "Mediocampista",
        "club": "Al-Karma"
      },
      {
        "code": "JOR 16",
        "name": "Rajai Ayed",
        "position": "Mediocampista",
        "club": "Al-hussein"
      },
      {
        "code": "JOR 17",
        "name": "Amer Jamous",
        "position": "Mediocampista",
        "club": "Al-Zawraa"
      },
      {
        "code": "JOR 18",
        "name": "Muhannad Abu Taha",
        "position": "Mediocampista",
        "club": "Al-Hussein"
      },
      {
        "code": "JOR 19",
        "name": "Mohammad Al-Dawood",
        "position": "Delantero",
        "club": "Al-Wehdat"
      },
      {
        "code": "JOR 20",
        "name": "Mahmoud Mardi",
        "position": "Delantero",
        "club": "Al-Hussein"
      },
      {
        "code": "JOR 21",
        "name": "Awda Al-Fakhoury",
        "position": "Delantero",
        "club": "Pyramids"
      },
      {
        "code": "JOR 22",
        "name": "Mousa Al-Taamari",
        "position": "Delantero",
        "club": "Stade Rennais"
      },
      {
        "code": "JOR 23",
        "name": "Mohammad Abu Zureiq",
        "position": "Delantero",
        "club": "Raja CA"
      },
      {
        "code": "JOR 24",
        "name": "Ali Azayza",
        "position": "Delantero",
        "club": "Al-Shabab"
      },
      {
        "code": "JOR 25",
        "name": "Ibrahim Sabra",
        "position": "Delantero",
        "club": "Lokomotiv Zagreb"
      },
      {
        "code": "JOR 26",
        "name": "Ali Alwan",
        "position": "Delantero",
        "club": "Al-Sailiya"
      }
    ]
  },
  {
    "team": "Japon",
    "code": "JPN",
    "sourceTeam": "Japan",
    "players": [
      {
        "code": "JPN 1",
        "name": "Zion Suzuki",
        "position": "Portero",
        "club": "Parma"
      },
      {
        "code": "JPN 2",
        "name": "Keisuke Osako",
        "position": "Portero",
        "club": "Sanfrecce Hiroshima"
      },
      {
        "code": "JPN 3",
        "name": "Tomoki Hayakawa",
        "position": "Portero",
        "club": "Kashima"
      },
      {
        "code": "JPN 4",
        "name": "Yuto Nagamoto",
        "position": "Defensa",
        "club": "FC Tokyo"
      },
      {
        "code": "JPN 5",
        "name": "Shogo Taniguchi",
        "position": "Defensa",
        "club": "Sint-Truiden"
      },
      {
        "code": "JPN 6",
        "name": "Ko Itakura",
        "position": "Defensa",
        "club": "Ajax"
      },
      {
        "code": "JPN 7",
        "name": "Takehiro Tomisayu",
        "position": "Defensa",
        "club": "Ajax"
      },
      {
        "code": "JPN 8",
        "name": "Ayumu Seko",
        "position": "Defensa",
        "club": "Le Havre"
      },
      {
        "code": "JPN 9",
        "name": "Yukinari Sugawara",
        "position": "Defensa",
        "club": "Werder Bremen"
      },
      {
        "code": "JPN 10",
        "name": "Hiroki Ito",
        "position": "Defensa",
        "club": "Bayern de Múnich"
      },
      {
        "code": "JPN 11",
        "name": "Junnosuke Suzuki",
        "position": "Defensa",
        "club": "Copenhague"
      },
      {
        "code": "JPN 12",
        "name": "Tsuyoshi Watanabe",
        "position": "Defensa",
        "club": "Feyenoord"
      },
      {
        "code": "JPN 13",
        "name": "Kaishu Sano",
        "position": "Mediocampista",
        "club": "Mainz"
      },
      {
        "code": "JPN 14",
        "name": "Wataru Endo",
        "position": "Mediocampista",
        "club": "Liverpool"
      },
      {
        "code": "JPN 15",
        "name": "Ao Tanaka",
        "position": "Mediocampista",
        "club": "Leeds"
      },
      {
        "code": "JPN 16",
        "name": "Daichi Kamada",
        "position": "Mediocampista",
        "club": "Crystal Palace"
      },
      {
        "code": "JPN 17",
        "name": "Junya Ito",
        "position": "Mediocampista",
        "club": "Genk"
      },
      {
        "code": "JPN 18",
        "name": "Kaito Nakamura",
        "position": "Delantero",
        "club": "Stade Reims"
      },
      {
        "code": "JPN 19",
        "name": "Daizen Maeda",
        "position": "Delantero",
        "club": "Celtic"
      },
      {
        "code": "JPN 20",
        "name": "Koki Ogawa",
        "position": "Delantero",
        "club": "NEC"
      },
      {
        "code": "JPN 21",
        "name": "Takefusa Kubo",
        "position": "Delantero",
        "club": "Real Sociedad"
      },
      {
        "code": "JPN 22",
        "name": "Yuito Suzuki",
        "position": "Delantero",
        "club": "Friburgo"
      },
      {
        "code": "JPN 23",
        "name": "Kento Shiogai",
        "position": "Delantero",
        "club": "Wolfsburgo"
      },
      {
        "code": "JPN 24",
        "name": "Keisuke Goto",
        "position": "Delantero",
        "club": "Sint-Truiden"
      },
      {
        "code": "JPN 25",
        "name": "Ritsu Doan",
        "position": "Delantero",
        "club": "Eintracht"
      },
      {
        "code": "JPN 26",
        "name": "Ayase Ueda",
        "position": "Delantero",
        "club": "Feyenoord"
      }
    ]
  },
  {
    "team": "Corea del Sur",
    "code": "KOR",
    "sourceTeam": "South Korea",
    "players": [
      {
        "code": "KOR 1",
        "name": "Kim Seung-Gyu",
        "position": "Portero",
        "club": "FC Tokyo"
      },
      {
        "code": "KOR 2",
        "name": "Song Bum Keun",
        "position": "Portero",
        "club": "Jeonbuk Hyundai"
      },
      {
        "code": "KOR 3",
        "name": "Jo Hyeon-Woo",
        "position": "Portero",
        "club": "Ulsan HD"
      },
      {
        "code": "KOR 4",
        "name": "Kim Moon-Hwan",
        "position": "Defensa",
        "club": "Daejon Hana"
      },
      {
        "code": "KOR 5",
        "name": "Kim Min-Jae",
        "position": "Defensa",
        "club": "Bayern de Múnich"
      },
      {
        "code": "KOR 6",
        "name": "Kim Tae-Hwan",
        "position": "Defensa",
        "club": "Kashima Antlers"
      },
      {
        "code": "KOR 7",
        "name": "Park Jin-Seob",
        "position": "Defensa",
        "club": "Jeonbuk Hyundai"
      },
      {
        "code": "KOR 8",
        "name": "Seol Young-Woo",
        "position": "Defensa",
        "club": "Estrella Roja"
      },
      {
        "code": "KOR 9",
        "name": "Jens Castrop",
        "position": "Defensa",
        "club": "Borussia Mönchengladbach"
      },
      {
        "code": "KOR 10",
        "name": "Lee Ki-Hyuk",
        "position": "Defensa",
        "club": "Gangwon FC"
      },
      {
        "code": "KOR 11",
        "name": "Lee Tae-Seok",
        "position": "Defensa",
        "club": "Austria de Viena"
      },
      {
        "code": "KOR 12",
        "name": "Lee Han-Beom",
        "position": "Defensa",
        "club": "Midtjylland"
      },
      {
        "code": "KOR 13",
        "name": "Cho Yumin",
        "position": "Defensa",
        "club": "Sharjah FC"
      },
      {
        "code": "KOR 14",
        "name": "Kim Jin-Gyu",
        "position": "Mediocampista",
        "club": "Jeonbuk Hyundai"
      },
      {
        "code": "KOR 15",
        "name": "Bae Jun-Ho",
        "position": "Mediocampista",
        "club": "Stoke City"
      },
      {
        "code": "KOR 16",
        "name": "Paik Seung-Ho",
        "position": "Mediocampista",
        "club": "Brimingham City"
      },
      {
        "code": "KOR 17",
        "name": "Yang Hyun-Jun",
        "position": "Mediocampista",
        "club": "Celtic"
      },
      {
        "code": "KOR 18",
        "name": "Eom Ji-Sung",
        "position": "Mediocampista",
        "club": "Swansea City"
      },
      {
        "code": "KOR 19",
        "name": "Lee Kang-In",
        "position": "Mediocampista",
        "club": "PSG"
      },
      {
        "code": "KOR 20",
        "name": "Lee Dong-Gyeong",
        "position": "Mediocampista",
        "club": "Ulsan HD"
      },
      {
        "code": "KOR 21",
        "name": "Lee Jjae-Sung )Mainz 05)",
        "position": "Mediocampista",
        "club": ""
      },
      {
        "code": "KOR 22",
        "name": "Hwang In-Beom",
        "position": "Mediocampista",
        "club": "Feyenoord"
      },
      {
        "code": "KOR 23",
        "name": "Hwang Hee-Chan",
        "position": "Mediocampista",
        "club": "Wolverhampton"
      },
      {
        "code": "KOR 24",
        "name": "Song Heung-Min",
        "position": "Delantero",
        "club": "LA FC"
      },
      {
        "code": "KOR 25",
        "name": "Oh Hyeon-Gyu",
        "position": "Delantero",
        "club": "Besiktas"
      },
      {
        "code": "KOR 26",
        "name": "Cho Gue-Sung",
        "position": "Delantero",
        "club": "Midtjylland"
      }
    ]
  },
  {
    "team": "Arabia Saudita",
    "code": "KSA",
    "sourceTeam": "Saudi Arabia",
    "players": [
      {
        "code": "KSA 1",
        "name": "Ahmed Alkassar",
        "position": "Portero",
        "club": "Al Qadsiah"
      },
      {
        "code": "KSA 2",
        "name": "Mohammed Alowais",
        "position": "Portero",
        "club": "Al Ula"
      },
      {
        "code": "KSA 3",
        "name": "Nawaf Alaqidi",
        "position": "Portero",
        "club": "Al Nassr"
      },
      {
        "code": "KSA 4",
        "name": "Abdulelah Alamri",
        "position": "Defensa",
        "club": "Al Nassr"
      },
      {
        "code": "KSA 5",
        "name": "Ali Lajami",
        "position": "Defensa",
        "club": "Al Hilal"
      },
      {
        "code": "KSA 6",
        "name": "Ali Majrashi",
        "position": "Defensa",
        "club": "Al Ahli"
      },
      {
        "code": "KSA 7",
        "name": "Hassan Kadish",
        "position": "Defensa",
        "club": "Al Ittihad"
      },
      {
        "code": "KSA 8",
        "name": "Hassan Altambakti",
        "position": "Defensa",
        "club": "Al Hilal"
      },
      {
        "code": "KSA 9",
        "name": "Jehad Thikri",
        "position": "Defensa",
        "club": "Al Qadsiah"
      },
      {
        "code": "KSA 10",
        "name": "Mohammed Abualshamat",
        "position": "Defensa",
        "club": "Al Qadsiah"
      },
      {
        "code": "KSA 11",
        "name": "Moteb Alharbi",
        "position": "Defensa",
        "club": "Al Hilal"
      },
      {
        "code": "KSA 12",
        "name": "Nawaf Buwashl",
        "position": "Defensa",
        "club": "Al Nassr"
      },
      {
        "code": "KSA 13",
        "name": "Saud Abdulhamid",
        "position": "Defensa",
        "club": "Lens"
      },
      {
        "code": "KSA 14",
        "name": "Abdullah Alkhaibari",
        "position": "Mediocampista",
        "club": "Al Nassr"
      },
      {
        "code": "KSA 15",
        "name": "Aiman Yahya",
        "position": "Mediocampista",
        "club": "Al Nassr"
      },
      {
        "code": "KSA 16",
        "name": "Khalid Alghannam",
        "position": "Mediocampista",
        "club": "Al Ettifaq"
      },
      {
        "code": "KSA 17",
        "name": "Mohamed Kanno",
        "position": "Mediocampista",
        "club": "Al Hilal"
      },
      {
        "code": "KSA 18",
        "name": "Musab Aljuwayr",
        "position": "Mediocampista",
        "club": "Al Qadsiah"
      },
      {
        "code": "KSA 19",
        "name": "Nasser Aldawsari",
        "position": "Mediocampista",
        "club": "Al Hilal"
      },
      {
        "code": "KSA 20",
        "name": "Salem Aldawsari",
        "position": "Mediocampista",
        "club": "Al Hilal"
      },
      {
        "code": "KSA 21",
        "name": "Sultan Mandash",
        "position": "Mediocampista",
        "club": "Al Hilal"
      },
      {
        "code": "KSA 22",
        "name": "Ziyad Aljohani",
        "position": "Mediocampista",
        "club": "Al Ahli"
      },
      {
        "code": "KSA 23",
        "name": "Alaa Al-Hejji",
        "position": "Mediocampista",
        "club": "Neom"
      },
      {
        "code": "KSA 24",
        "name": "Abdullah Alhamddan",
        "position": "Delantero",
        "club": "Al Nassr"
      },
      {
        "code": "KSA 25",
        "name": "Feras Albrikan",
        "position": "Delantero",
        "club": "Al Ahli"
      },
      {
        "code": "KSA 26",
        "name": "Saleh Alshehri",
        "position": "Delantero",
        "club": "Al Ittihad"
      }
    ]
  },
  {
    "team": "Marruecos",
    "code": "MAR",
    "sourceTeam": "Morocco",
    "players": [
      {
        "code": "MAR 1",
        "name": "Yassine Bounou",
        "position": "Portero",
        "club": "Al Hilal SFC"
      },
      {
        "code": "MAR 2",
        "name": "Munir El Kajoui",
        "position": "Portero",
        "club": "RS Berkane"
      },
      {
        "code": "MAR 3",
        "name": "Ajmed Reda Tagnaouti",
        "position": "Portero",
        "club": "Raja Casablanca"
      },
      {
        "code": "MAR 4",
        "name": "Achraf Hakimi",
        "position": "Defensa",
        "club": "Paris Saint-Germain"
      },
      {
        "code": "MAR 5",
        "name": "Nayef Aguerd",
        "position": "Defensa",
        "club": "West Ham United/Marsella"
      },
      {
        "code": "MAR 6",
        "name": "Noussair Mazraoui",
        "position": "Defensa",
        "club": "Manchester United"
      },
      {
        "code": "MAR 7",
        "name": "Anass Salah-Eddine",
        "position": "Defensa",
        "club": "FC Twente"
      },
      {
        "code": "MAR 8",
        "name": "Chadi Riad",
        "position": "Defensa",
        "club": "Crystal Palace"
      },
      {
        "code": "MAR 9",
        "name": "Youssef Belammari",
        "position": "Defensa",
        "club": "Al Ahly"
      },
      {
        "code": "MAR 10",
        "name": "Issa Diop",
        "position": "Defensa",
        "club": "Fulham"
      },
      {
        "code": "MAR 11",
        "name": "Redouane Hahlal",
        "position": "Defensa",
        "club": "Mechelen"
      },
      {
        "code": "MAR 12",
        "name": "Zakaria El Ouahdi",
        "position": "Defensa",
        "club": "Genk"
      },
      {
        "code": "MAR 13",
        "name": "Sofyan Amrabat",
        "position": "Mediocampista",
        "club": "Fenerbahçe SK/Betis"
      },
      {
        "code": "MAR 14",
        "name": "Ismael Saibari",
        "position": "Mediocampista",
        "club": "PSV Eindhoven"
      },
      {
        "code": "MAR 15",
        "name": "Neil El Aynaoui",
        "position": "Mediocampista",
        "club": "Roma"
      },
      {
        "code": "MAR 16",
        "name": "Bilal El Khannouss",
        "position": "Mediocampista",
        "club": "Stuttgart"
      },
      {
        "code": "MAR 17",
        "name": "Azzedine Ounahi",
        "position": "Mediocampista",
        "club": "Girona"
      },
      {
        "code": "MAR 18",
        "name": "Bouaddi",
        "position": "Mediocampista",
        "club": "Lille"
      },
      {
        "code": "MAR 19",
        "name": "Samir El Mourabet",
        "position": "Mediocampista",
        "club": "Estrasburgo"
      },
      {
        "code": "MAR 20",
        "name": "Brahim Díaz",
        "position": "Delantero",
        "club": "Real Madrid"
      },
      {
        "code": "MAR 21",
        "name": "Chemsdine Talbi",
        "position": "Delantero",
        "club": "Sunderland"
      },
      {
        "code": "MAR 22",
        "name": "Ayoub El Kaabi",
        "position": "Delantero",
        "club": "Olympiacos FC"
      },
      {
        "code": "MAR 23",
        "name": "Soufiane Rahimi",
        "position": "Delantero",
        "club": "Al-Ain FC"
      },
      {
        "code": "MAR 24",
        "name": "Abde Ezzalzouli",
        "position": "Delantero",
        "club": "Real Betis"
      },
      {
        "code": "MAR 25",
        "name": "Ayoube Amaimouni",
        "position": "Delantero",
        "club": "Eintracht Frankfurt"
      },
      {
        "code": "MAR 26",
        "name": "Yassine Gessime",
        "position": "Delantero",
        "club": "Estrasburgo"
      }
    ]
  },
  {
    "team": "Mexico",
    "code": "MEX",
    "sourceTeam": "Mexico",
    "players": [
      {
        "code": "MEX 1",
        "name": "Raúl Rangel",
        "position": "Portero",
        "club": "Chivas"
      },
      {
        "code": "MEX 2",
        "name": "Carlos Acevedo",
        "position": "Portero",
        "club": "Santos Laguna"
      },
      {
        "code": "MEX 3",
        "name": "Guillermo Ochoa",
        "position": "Portero",
        "club": "AEL Limassol"
      },
      {
        "code": "MEX 4",
        "name": "Israel Reyes",
        "position": "Defensa",
        "club": "América"
      },
      {
        "code": "MEX 5",
        "name": "Jorge Sánchez",
        "position": "Defensa",
        "club": "Cruz Azul"
      },
      {
        "code": "MEX 6",
        "name": "César Montes",
        "position": "Defensa",
        "club": "Lokomotiv Moscú"
      },
      {
        "code": "MEX 7",
        "name": "Edsol Álvarez",
        "position": "Defensa",
        "club": "West Ham"
      },
      {
        "code": "MEX 8",
        "name": "Johan Vásquez",
        "position": "Defensa",
        "club": "Genoa"
      },
      {
        "code": "MEX 9",
        "name": "Jesús Gallardo",
        "position": "Defensa",
        "club": "Toluca"
      },
      {
        "code": "MEX 10",
        "name": "Mateo Chávez",
        "position": "Defensa",
        "club": "AZ Alkmaar"
      },
      {
        "code": "MEX 11",
        "name": "Álvaro Fidalgo",
        "position": "Mediocampista",
        "club": "Betis"
      },
      {
        "code": "MEX 12",
        "name": "Brian Gutiérrez",
        "position": "Mediocampista",
        "club": "Chivas"
      },
      {
        "code": "MEX 13",
        "name": "Orbelín Pineda",
        "position": "Mediocampista",
        "club": "AEK Atenas"
      },
      {
        "code": "MEX 14",
        "name": "Erik Lira",
        "position": "Mediocampista",
        "club": "Cruz Azul"
      },
      {
        "code": "MEX 15",
        "name": "Luis Romo",
        "position": "Mediocampista",
        "club": "Chivas"
      },
      {
        "code": "MEX 16",
        "name": "Obed Vargas",
        "position": "Mediocampista",
        "club": "Atlético de Madrid"
      },
      {
        "code": "MEX 17",
        "name": "Gilberto Mora",
        "position": "Mediocampista",
        "club": "Tijuana"
      },
      {
        "code": "MEX 18",
        "name": "Luis Chávez",
        "position": "Mediocampista",
        "club": "Dinamo Moscú"
      },
      {
        "code": "MEX 19",
        "name": "Roberto Alvarado",
        "position": "Delantero",
        "club": "Chivas"
      },
      {
        "code": "MEX 20",
        "name": "César Huerta",
        "position": "Delantero",
        "club": "Anderlecht"
      },
      {
        "code": "MEX 21",
        "name": "Guillermo Martínez",
        "position": "Delantero",
        "club": "Pumas"
      },
      {
        "code": "MEX 22",
        "name": "Armando González",
        "position": "Delantero",
        "club": "Chivas"
      },
      {
        "code": "MEX 23",
        "name": "Santiago Giménez",
        "position": "Delantero",
        "club": "Milan"
      },
      {
        "code": "MEX 24",
        "name": "Raúl Jiménez",
        "position": "Delantero",
        "club": "Fulham"
      },
      {
        "code": "MEX 25",
        "name": "Julián Quiñones",
        "position": "Delantero",
        "club": "Al Qadsiah"
      },
      {
        "code": "MEX 26",
        "name": "Alexis Vega",
        "position": "Delantero",
        "club": "Toluca"
      }
    ]
  },
  {
    "team": "Paises Bajos",
    "code": "NED",
    "sourceTeam": "Netherlands",
    "players": [
      {
        "code": "NED 1",
        "name": "Bart Verbruggen",
        "position": "Portero",
        "club": "Brighton & Hove Albion"
      },
      {
        "code": "NED 2",
        "name": "Robin Roefs",
        "position": "Portero",
        "club": "Sunderland"
      },
      {
        "code": "NED 3",
        "name": "Mark Flekken",
        "position": "Portero",
        "club": "Bayer 04 Leverkusen"
      },
      {
        "code": "NED 4",
        "name": "Nathan Aké",
        "position": "Defensa",
        "club": "Manchester City"
      },
      {
        "code": "NED 5",
        "name": "Virgil van Dijk",
        "position": "Defensa",
        "club": "Liverpool"
      },
      {
        "code": "NED 6",
        "name": "Jorrel Hato",
        "position": "Defensa",
        "club": "Chelsea"
      },
      {
        "code": "NED 7",
        "name": "Jan Paul van Hecke",
        "position": "Defensa",
        "club": "Brighton & Hove Albion"
      },
      {
        "code": "NED 8",
        "name": "Denzel Dumfries",
        "position": "Defensa",
        "club": "Inter"
      },
      {
        "code": "NED 9",
        "name": "Jurriën Timber",
        "position": "Defensa",
        "club": "Arsenal"
      },
      {
        "code": "NED 10",
        "name": "Micky van de Ven",
        "position": "Defensa",
        "club": "Tottenham Hotspur"
      },
      {
        "code": "NED 11",
        "name": "Ryan Gravenberch",
        "position": "Mediocampista",
        "club": "Liverpool"
      },
      {
        "code": "NED 12",
        "name": "Frenkie de Jong",
        "position": "Mediocampista",
        "club": "Barcelona"
      },
      {
        "code": "NED 13",
        "name": "Marten de Roon",
        "position": "Mediocampista",
        "club": "Atalanta"
      },
      {
        "code": "NED 14",
        "name": "Tijjani Reijnders",
        "position": "Mediocampista",
        "club": "Manchester City"
      },
      {
        "code": "NED 15",
        "name": "Teun Koopmeiners",
        "position": "Mediocampista",
        "club": "Juventus"
      },
      {
        "code": "NED 16",
        "name": "Noa Lang",
        "position": "Mediocampista",
        "club": "Galatasaray"
      },
      {
        "code": "NED 17",
        "name": "Mats Wieffer",
        "position": "Mediocampista",
        "club": "Brighton & Hove Albion"
      },
      {
        "code": "NED 18",
        "name": "Quinten Timber",
        "position": "Mediocampista",
        "club": "Olympique de Marseille"
      },
      {
        "code": "NED 19",
        "name": "Crysencio Summerville",
        "position": "Mediocampista",
        "club": "West Ham United"
      },
      {
        "code": "NED 20",
        "name": "Guus Til",
        "position": "Mediocampista",
        "club": "PSV"
      },
      {
        "code": "NED 21",
        "name": "Brian Brobbey",
        "position": "Delantero",
        "club": "Sunderland"
      },
      {
        "code": "NED 22",
        "name": "Memphis Depay",
        "position": "Delantero",
        "club": "Corinthians"
      },
      {
        "code": "NED 23",
        "name": "Cody Gakpo",
        "position": "Delantero",
        "club": "Liverpool"
      },
      {
        "code": "NED 24",
        "name": "Justin Kluivert",
        "position": "Delantero",
        "club": "Bournemouth"
      },
      {
        "code": "NED 25",
        "name": "Donyell Malen",
        "position": "Delantero",
        "club": "AS Roma"
      },
      {
        "code": "NED 26",
        "name": "Wout Weghorst",
        "position": "Delantero",
        "club": "Ajax"
      }
    ]
  },
  {
    "team": "Noruega",
    "code": "NOR",
    "sourceTeam": "Norway",
    "players": [
      {
        "code": "NOR 1",
        "name": "Orjan Haskjold Nyland",
        "position": "Portero",
        "club": "Sevilla"
      },
      {
        "code": "NOR 2",
        "name": "Sander Tangvik",
        "position": "Portero",
        "club": "Hamburgo"
      },
      {
        "code": "NOR 3",
        "name": "Egil Selvik",
        "position": "Portero",
        "club": "Watford"
      },
      {
        "code": "NOR 4",
        "name": "Kristoffer Ajer",
        "position": "Defensa",
        "club": "Brentford"
      },
      {
        "code": "NOR 5",
        "name": "David Moller Wolfe",
        "position": "Defensa",
        "club": "Wolverhampton"
      },
      {
        "code": "NOR 6",
        "name": "Leo Ostigard",
        "position": "Defensa",
        "club": "Génova"
      },
      {
        "code": "NOR 7",
        "name": "Fredrik Bjorkan",
        "position": "Defensa",
        "club": "Bodo-Glimt"
      },
      {
        "code": "NOR 8",
        "name": "Marcus Pedersen",
        "position": "Defensa",
        "club": "Torino"
      },
      {
        "code": "NOR 9",
        "name": "Torbjorn Heggem",
        "position": "Defensa",
        "club": "Bologna"
      },
      {
        "code": "NOR 10",
        "name": "Sondre Langas",
        "position": "Defensa",
        "club": "Derby County"
      },
      {
        "code": "NOR 11",
        "name": "Henrik Falchener",
        "position": "Defensa",
        "club": "Viking FK"
      },
      {
        "code": "NOR 12",
        "name": "Julian Ryerson",
        "position": "Defensa",
        "club": "Borussia Dortmund"
      },
      {
        "code": "NOR 13",
        "name": "Morter Thorsby",
        "position": "Mediocampista",
        "club": "Cremonese"
      },
      {
        "code": "NOR 14",
        "name": "Patrick Berg",
        "position": "Mediocampista",
        "club": "Bodo-Glimt"
      },
      {
        "code": "NOR 15",
        "name": "Sander Berge",
        "position": "Mediocampista",
        "club": "Fulham"
      },
      {
        "code": "NOR 16",
        "name": "Martin Odegaard",
        "position": "Mediocampista",
        "club": "Arsenal"
      },
      {
        "code": "NOR 17",
        "name": "Fredrik Aursnes",
        "position": "Mediocampista",
        "club": "Benfica"
      },
      {
        "code": "NOR 18",
        "name": "Kristian Thorstvedt",
        "position": "Mediocampista",
        "club": "Sassuolo"
      },
      {
        "code": "NOR 19",
        "name": "Thelonious Aasgaard",
        "position": "Mediocampista",
        "club": "Rangers"
      },
      {
        "code": "NOR 20",
        "name": "Antonio Nusa",
        "position": "Mediocampista",
        "club": "RB Leipzig"
      },
      {
        "code": "NOR 21",
        "name": "Andreas Schjelderup",
        "position": "Mediocampista",
        "club": "Benfica"
      },
      {
        "code": "NOR 22",
        "name": "Oscar Bob",
        "position": "Mediocampista",
        "club": "Fulham"
      },
      {
        "code": "NOR 23",
        "name": "Jens Petter Hauge",
        "position": "Mediocampista",
        "club": "Bodo-Glimt"
      },
      {
        "code": "NOR 24",
        "name": "Alexander Sorloth",
        "position": "Delantero",
        "club": "Atlético de Madrid"
      },
      {
        "code": "NOR 25",
        "name": "Erling Haaland",
        "position": "Delantero",
        "club": "Manchester City"
      },
      {
        "code": "NOR 26",
        "name": "Jorgen Strand Larsen",
        "position": "Delantero",
        "club": "Crystal Palace"
      }
    ]
  },
  {
    "team": "Nueva Zelanda",
    "code": "NZL",
    "sourceTeam": "New Zealand",
    "players": [
      {
        "code": "NZL 1",
        "name": "Max Crocombe",
        "position": "Portero",
        "club": "Millwall"
      },
      {
        "code": "NZL 2",
        "name": "Alex Paulsen",
        "position": "Portero",
        "club": "Lechia"
      },
      {
        "code": "NZL 3",
        "name": "Michael Woud",
        "position": "Portero",
        "club": "Auckland FC"
      },
      {
        "code": "NZL 4",
        "name": "Tyler Bindon",
        "position": "Defensa",
        "club": "Sheffield United"
      },
      {
        "code": "NZL 5",
        "name": "Michael Boxall",
        "position": "Defensa",
        "club": "Minnesota United"
      },
      {
        "code": "NZL 6",
        "name": "Liberato Cacace",
        "position": "Defensa",
        "club": "Wrexham"
      },
      {
        "code": "NZL 7",
        "name": "Francis De Vries",
        "position": "Defensa",
        "club": "Auckland FC"
      },
      {
        "code": "NZL 8",
        "name": "Callan Elliot",
        "position": "Defensa",
        "club": "Auckland FC"
      },
      {
        "code": "NZL 9",
        "name": "Tim Payne",
        "position": "Defensa",
        "club": "Wellington"
      },
      {
        "code": "NZL 10",
        "name": "Nando Pijnaker",
        "position": "Defensa",
        "club": "Auckland FC"
      },
      {
        "code": "NZL 11",
        "name": "Tommy Smith",
        "position": "Defensa",
        "club": "Braintree"
      },
      {
        "code": "NZL 12",
        "name": "Finn Surman",
        "position": "Defensa",
        "club": "Portland Timbers"
      },
      {
        "code": "NZL 13",
        "name": "Lachlan Bayliss",
        "position": "Mediocampista",
        "club": "Newcastle"
      },
      {
        "code": "NZL 14",
        "name": "Joe Bell",
        "position": "Mediocampista",
        "club": "Viking"
      },
      {
        "code": "NZL 15",
        "name": "Alex Rufer",
        "position": "Mediocampista",
        "club": "Wellington"
      },
      {
        "code": "NZL 16",
        "name": "Marko Stamenić",
        "position": "Mediocampista",
        "club": "Swansea"
      },
      {
        "code": "NZL 17",
        "name": "Ryan Thomas",
        "position": "Mediocampista",
        "club": "PEC Zwolle"
      },
      {
        "code": "NZL 18",
        "name": "Kosta Barbarouses",
        "position": "Delantero",
        "club": "Western Sydney Wanderers"
      },
      {
        "code": "NZL 19",
        "name": "Matt Garbett",
        "position": "Delantero",
        "club": "Peterborough"
      },
      {
        "code": "NZL 20",
        "name": "Eli Just",
        "position": "Delantero",
        "club": "Motherwell"
      },
      {
        "code": "NZL 21",
        "name": "Callum McCowatt",
        "position": "Delantero",
        "club": "Silkeborg"
      },
      {
        "code": "NZL 22",
        "name": "Ben Old",
        "position": "Delantero",
        "club": "Saint-Étienne"
      },
      {
        "code": "NZL 23",
        "name": "Jesse Randall",
        "position": "Delantero",
        "club": "Auckland FC"
      },
      {
        "code": "NZL 24",
        "name": "Sarpreet Singh",
        "position": "Delantero",
        "club": "Wellington"
      },
      {
        "code": "NZL 25",
        "name": "Ben Waine",
        "position": "Delantero",
        "club": "Port Vale"
      },
      {
        "code": "NZL 26",
        "name": "Chris Wood",
        "position": "Delantero",
        "club": "Nottingham Forest"
      }
    ]
  },
  {
    "team": "Panama",
    "code": "PAN",
    "sourceTeam": "Panama",
    "players": [
      {
        "code": "PAN 1",
        "name": "Orlando Mosquera",
        "position": "Portero",
        "club": "Al Fayha FC"
      },
      {
        "code": "PAN 2",
        "name": "Luis Mejía",
        "position": "Portero",
        "club": "Club Nacional"
      },
      {
        "code": "PAN 3",
        "name": "César Samudio",
        "position": "Portero",
        "club": "CD Marathón"
      },
      {
        "code": "PAN 4",
        "name": "César Blackman",
        "position": "Defensa",
        "club": "Slovan Bratislava"
      },
      {
        "code": "PAN 5",
        "name": "Jorge Gutiérrez",
        "position": "Defensa",
        "club": "Deportivo La Guaira"
      },
      {
        "code": "PAN 6",
        "name": "Amir Murillo",
        "position": "Defensa",
        "club": "Beşiktaş"
      },
      {
        "code": "PAN 7",
        "name": "Fidel Escobar",
        "position": "Defensa",
        "club": "Deportivo Saprissa"
      },
      {
        "code": "PAN 8",
        "name": "Andrés Andrade",
        "position": "Defensa",
        "club": "LASK"
      },
      {
        "code": "PAN 9",
        "name": "Edgardo Fariña",
        "position": "Defensa",
        "club": "FC Pari Nizhniy Novgorod"
      },
      {
        "code": "PAN 10",
        "name": "José Córdoba",
        "position": "Defensa",
        "club": "Norwich City"
      },
      {
        "code": "PAN 11",
        "name": "Eric Davis",
        "position": "Defensa",
        "club": "Plaza Amador"
      },
      {
        "code": "PAN 12",
        "name": "Jiovany Ramos",
        "position": "Defensa",
        "club": "Puerto Cabello"
      },
      {
        "code": "PAN 13",
        "name": "Roderick Miller",
        "position": "Defensa",
        "club": "Turan Tovuz"
      },
      {
        "code": "PAN 14",
        "name": "Aníbal Godoy",
        "position": "Mediocampista",
        "club": "San Diego FC"
      },
      {
        "code": "PAN 15",
        "name": "Adalberto Carrasquilla",
        "position": "Mediocampista",
        "club": "UNAM"
      },
      {
        "code": "PAN 16",
        "name": "Carlos Harvey",
        "position": "Mediocampista",
        "club": "Minnesota United"
      },
      {
        "code": "PAN 17",
        "name": "Cristian Martínez",
        "position": "Mediocampista",
        "club": "Ironi Kiryat Shmona"
      },
      {
        "code": "PAN 18",
        "name": "José Luis Rodríguez",
        "position": "Mediocampista",
        "club": "Juárez"
      },
      {
        "code": "PAN 19",
        "name": "César Yanis",
        "position": "Mediocampista",
        "club": "Cobresal"
      },
      {
        "code": "PAN 20",
        "name": "Yoel Bárcenas",
        "position": "Mediocampista",
        "club": "Mazatlán FC"
      },
      {
        "code": "PAN 21",
        "name": "Alberto Quintero",
        "position": "Mediocampista",
        "club": "CD Plaza Amador"
      },
      {
        "code": "PAN 22",
        "name": "Azarías Londoño",
        "position": "Mediocampista",
        "club": "CD Universidad Católica"
      },
      {
        "code": "PAN 23",
        "name": "Ismael Díaz",
        "position": "Delantero",
        "club": "Club León FC"
      },
      {
        "code": "PAN 24",
        "name": "Cecilio Waterman",
        "position": "Delantero",
        "club": "Universidad de Concepción"
      },
      {
        "code": "PAN 25",
        "name": "José Fajardo",
        "position": "Delantero",
        "club": "CD Universidad Católica"
      },
      {
        "code": "PAN 26",
        "name": "Tomás Rodríguez",
        "position": "Delantero",
        "club": "Deportivo Saprissa"
      }
    ]
  },
  {
    "team": "Paraguay",
    "code": "PAR",
    "sourceTeam": "Paraguay",
    "players": [
      {
        "code": "PAR 1",
        "name": "Orlando Gill",
        "position": "Portero",
        "club": "San Lorenzo"
      },
      {
        "code": "PAR 2",
        "name": "Roberto Fernández",
        "position": "Portero",
        "club": "Cerro Porteño"
      },
      {
        "code": "PAR 3",
        "name": "Gastón Olveira",
        "position": "Portero",
        "club": "Olimpia"
      },
      {
        "code": "PAR 4",
        "name": "Juan Cáceres",
        "position": "Defensa",
        "club": "Dynamo Moscú"
      },
      {
        "code": "PAR 5",
        "name": "Gustavo Velázquez",
        "position": "Defensa",
        "club": "Cerro Porteño"
      },
      {
        "code": "PAR 6",
        "name": "Gustavo Gómez",
        "position": "Defensa",
        "club": "Palmeiras"
      },
      {
        "code": "PAR 7",
        "name": "Junior Alonso",
        "position": "Defensa",
        "club": "Atlético Mineiro"
      },
      {
        "code": "PAR 8",
        "name": "José Canale",
        "position": "Defensa",
        "club": "Lanús"
      },
      {
        "code": "PAR 9",
        "name": "Omar Alderete",
        "position": "Defensa",
        "club": "Getafe"
      },
      {
        "code": "PAR 10",
        "name": "Alessandro Maidana",
        "position": "Defensa",
        "club": "Olimpia"
      },
      {
        "code": "PAR 11",
        "name": "Fabián Balbuena",
        "position": "Defensa",
        "club": "Dinamo Moscú"
      },
      {
        "code": "PAR 12",
        "name": "Mauricio Magalhães",
        "position": "Defensa",
        "club": "Libertad"
      },
      {
        "code": "PAR 13",
        "name": "Damián Bobadilla",
        "position": "Mediocampista",
        "club": "São Paulo"
      },
      {
        "code": "PAR 14",
        "name": "Braian Ojeda",
        "position": "Mediocampista",
        "club": "Real Salt Lake"
      },
      {
        "code": "PAR 15",
        "name": "Andrés Cubas",
        "position": "Mediocampista",
        "club": "Vancouver Whitecaps"
      },
      {
        "code": "PAR 16",
        "name": "Matías Galarza",
        "position": "Mediocampista",
        "club": "Talleres de Córdoba"
      },
      {
        "code": "PAR 17",
        "name": "Alejandro Romero Gamarra",
        "position": "Mediocampista",
        "club": "Al-Ain"
      },
      {
        "code": "PAR 18",
        "name": "Gustavo Caballero",
        "position": "Mediocampista",
        "club": "Nacional"
      },
      {
        "code": "PAR 19",
        "name": "Ramón Sosa",
        "position": "Mediocampista",
        "club": "Palmeiras"
      },
      {
        "code": "PAR 20",
        "name": "Diego Gómez",
        "position": "Mediocampista",
        "club": "Brighton"
      },
      {
        "code": "PAR 21",
        "name": "Alex Arce",
        "position": "Delantero",
        "club": "Liga de Quito"
      },
      {
        "code": "PAR 22",
        "name": "Gabriel Ávalos",
        "position": "Delantero",
        "club": "Independiente"
      },
      {
        "code": "PAR 23",
        "name": "Isidro Pitta",
        "position": "Delantero",
        "club": "Red Bull Bragantino"
      },
      {
        "code": "PAR 24",
        "name": "Miguel Almirón",
        "position": "Delantero",
        "club": "Atlanta United"
      },
      {
        "code": "PAR 25",
        "name": "Julio Enciso",
        "position": "Delantero",
        "club": "Estrasburgo"
      },
      {
        "code": "PAR 26",
        "name": "Antonio Sanabria",
        "position": "Delantero",
        "club": "Torino"
      }
    ]
  },
  {
    "team": "Portugal",
    "code": "POR",
    "sourceTeam": "Portugal",
    "players": [
      {
        "code": "POR 1",
        "name": "Diogo Costa",
        "position": "Portero",
        "club": "Oporto"
      },
      {
        "code": "POR 2",
        "name": "José Sá",
        "position": "Portero",
        "club": "Wolverhampton"
      },
      {
        "code": "POR 3",
        "name": "Rui Silva",
        "position": "Portero",
        "club": "Sporting CP"
      },
      {
        "code": "POR 4",
        "name": "Ricardo Velho",
        "position": "Portero",
        "club": "Farense"
      },
      {
        "code": "POR 5",
        "name": "Diogo Dalot",
        "position": "Defensa",
        "club": "Manchester United"
      },
      {
        "code": "POR 6",
        "name": "Matheus Nunes",
        "position": "Defensa",
        "club": "Manchester City"
      },
      {
        "code": "POR 7",
        "name": "Nélson Semedo",
        "position": "Defensa",
        "club": "Fenerbahçe"
      },
      {
        "code": "POR 8",
        "name": "João Cancelo",
        "position": "Defensa",
        "club": "Barcelona"
      },
      {
        "code": "POR 9",
        "name": "Nuno Mendes",
        "position": "Defensa",
        "club": "PSG"
      },
      {
        "code": "POR 10",
        "name": "Gonçalo Inácio",
        "position": "Defensa",
        "club": "Sporting CP"
      },
      {
        "code": "POR 11",
        "name": "Renato Veiga",
        "position": "Defensa",
        "club": "Villarreal"
      },
      {
        "code": "POR 12",
        "name": "Rúben Dias",
        "position": "Defensa",
        "club": "Manchester City"
      },
      {
        "code": "POR 13",
        "name": "Tomás Araújo",
        "position": "Defensa",
        "club": "Benfica"
      },
      {
        "code": "POR 14",
        "name": "Rúben Neves",
        "position": "Mediocampista",
        "club": "Al Hilal"
      },
      {
        "code": "POR 15",
        "name": "Samu Costa",
        "position": "Mediocampista",
        "club": "Mallorca"
      },
      {
        "code": "POR 16",
        "name": "João Neves",
        "position": "Mediocampista",
        "club": "PSG"
      },
      {
        "code": "POR 17",
        "name": "Vitinha",
        "position": "Mediocampista",
        "club": "PSG"
      },
      {
        "code": "POR 18",
        "name": "Bruno Fernandes",
        "position": "Mediocampista",
        "club": "Manchester United"
      },
      {
        "code": "POR 19",
        "name": "Bernardo Silva",
        "position": "Mediocampista",
        "club": "Manchester City"
      },
      {
        "code": "POR 20",
        "name": "João Félix",
        "position": "Delantero",
        "club": "Al Nassr"
      },
      {
        "code": "POR 21",
        "name": "Francisco Trincão",
        "position": "Delantero",
        "club": "Sporting CP"
      },
      {
        "code": "POR 22",
        "name": "Francisco Conceição",
        "position": "Delantero",
        "club": "Juventus"
      },
      {
        "code": "POR 23",
        "name": "Pedro Neto",
        "position": "Delantero",
        "club": "Chelsea"
      },
      {
        "code": "POR 24",
        "name": "Rafael Leão",
        "position": "Delantero",
        "club": "Milan"
      },
      {
        "code": "POR 25",
        "name": "Gonçalo Guedes",
        "position": "Delantero",
        "club": "Real Sociedad"
      },
      {
        "code": "POR 26",
        "name": "Gonçalo Ramos",
        "position": "Delantero",
        "club": "PSG"
      },
      {
        "code": "POR 27",
        "name": "Cristiano Ronaldo",
        "position": "Delantero",
        "club": "Al Nassr"
      }
    ]
  },
  {
    "team": "Catar",
    "code": "QAT",
    "sourceTeam": "Qatar",
    "players": [
      {
        "code": "QAT 1",
        "name": "Mahmoud Abunada",
        "position": "Portero",
        "club": "Al-Rayyan"
      },
      {
        "code": "QAT 2",
        "name": "Meshaal Barsham",
        "position": "Portero",
        "club": "Al-Sadd"
      },
      {
        "code": "QAT 3",
        "name": "Salah Zakaria",
        "position": "Portero",
        "club": "Al-Duhail"
      },
      {
        "code": "QAT 4",
        "name": "Ayoub Al Alawi",
        "position": "Defensa",
        "club": "Al-Gharafa"
      },
      {
        "code": "QAT 5",
        "name": "Boualem Khoukhi",
        "position": "Defensa",
        "club": "Al-Sadd"
      },
      {
        "code": "QAT 6",
        "name": "Homam Al Amin",
        "position": "Defensa",
        "club": "Cultural Leonesa"
      },
      {
        "code": "QAT 7",
        "name": "Lucas Mendes",
        "position": "Defensa",
        "club": "Al-Wakrah"
      },
      {
        "code": "QAT 8",
        "name": "Issa Laye",
        "position": "Defensa",
        "club": "Al-Arabi"
      },
      {
        "code": "QAT 9",
        "name": "Pedro Miguel",
        "position": "Defensa",
        "club": "Al-Sadd"
      },
      {
        "code": "QAT 10",
        "name": "Alhashmi Alhussain",
        "position": "Defensa",
        "club": "Al-Arabi"
      },
      {
        "code": "QAT 11",
        "name": "Sultan Al Brake",
        "position": "Defensa",
        "club": "Al-Duhail"
      },
      {
        "code": "QAT 12",
        "name": "Assim Madibo",
        "position": "Mediocampista",
        "club": "Al-Wakrah"
      },
      {
        "code": "QAT 13",
        "name": "Abdulaziz Hatem",
        "position": "Mediocampista",
        "club": "Al-Rayyan"
      },
      {
        "code": "QAT 14",
        "name": "Ahmed Fathy",
        "position": "Mediocampista",
        "club": "Al-Arabi"
      },
      {
        "code": "QAT 15",
        "name": "Karim Boudiaf",
        "position": "Mediocampista",
        "club": "Al-Duhail"
      },
      {
        "code": "QAT 16",
        "name": "Jassim Gaber",
        "position": "Mediocampista",
        "club": "Al-Arabi"
      },
      {
        "code": "QAT 17",
        "name": "Mohamed Manai",
        "position": "Mediocampista",
        "club": "Al-Shamal"
      },
      {
        "code": "QAT 18",
        "name": "Ahmed Al Janhi",
        "position": "Delantero",
        "club": "Al-Gharafa"
      },
      {
        "code": "QAT 19",
        "name": "Ahmed Alaa",
        "position": "Delantero",
        "club": "Al-Rayyan"
      },
      {
        "code": "QAT 20",
        "name": "Akram Afif",
        "position": "Delantero",
        "club": "Al-Sadd"
      },
      {
        "code": "QAT 21",
        "name": "Almoez Ali",
        "position": "Delantero",
        "club": "Al-Duhail"
      },
      {
        "code": "QAT 22",
        "name": "Edmilson Junior",
        "position": "Delantero",
        "club": "Al-Duhail"
      },
      {
        "code": "QAT 23",
        "name": "Hassan Al Haydos",
        "position": "Delantero",
        "club": "Al-Sadd"
      },
      {
        "code": "QAT 24",
        "name": "Mohammed Muntari",
        "position": "Delantero",
        "club": "Al-Gharafa"
      },
      {
        "code": "QAT 25",
        "name": "Tahsin Mohammed",
        "position": "Delantero",
        "club": "Al-Duhail"
      },
      {
        "code": "QAT 26",
        "name": "Yusuf Abdurisag",
        "position": "Delantero",
        "club": "Al-Wakrah"
      }
    ]
  },
  {
    "team": "Sudafrica",
    "code": "RSA",
    "sourceTeam": "South Africa",
    "players": [
      {
        "code": "RSA 1",
        "name": "Ronwen Williams",
        "position": "Portero",
        "club": "Mamelodi Sundowns"
      },
      {
        "code": "RSA 2",
        "name": "Ricardo Goss",
        "position": "Portero",
        "club": "Siwelele FC"
      },
      {
        "code": "RSA 3",
        "name": "Sipho Chaine",
        "position": "Portero",
        "club": "Orlando Pirates"
      },
      {
        "code": "RSA 4",
        "name": "Khuliso Mudau",
        "position": "Defensa",
        "club": "Mamelodi Sundowns"
      },
      {
        "code": "RSA 5",
        "name": "Nkosinathi Sibisi",
        "position": "Defensa",
        "club": "Orlando Pirates"
      },
      {
        "code": "RSA 6",
        "name": "Ime Okon",
        "position": "Defensa",
        "club": "Hannover 96"
      },
      {
        "code": "RSA 7",
        "name": "Khulumani Ndamane",
        "position": "Defensa",
        "club": "Mamelodi Sundowns"
      },
      {
        "code": "RSA 8",
        "name": "Aubrey Modiba",
        "position": "Defensa",
        "club": "Mamelodi Sundowns"
      },
      {
        "code": "RSA 9",
        "name": "Samukelo Kabini",
        "position": "Defensa",
        "club": "Molde FK"
      },
      {
        "code": "RSA 10",
        "name": "Thabang Matuludi",
        "position": "Defensa",
        "club": "Polokwane City"
      },
      {
        "code": "RSA 11",
        "name": "Olwethu Makhanya",
        "position": "Defensa",
        "club": "Philadelphia Union"
      },
      {
        "code": "RSA 12",
        "name": "Kamogelo Sebelebele",
        "position": "Defensa",
        "club": "Orlando Pirates"
      },
      {
        "code": "RSA 13",
        "name": "Bradley Cross",
        "position": "Defensa",
        "club": "Kaizer Chiefs"
      },
      {
        "code": "RSA 14",
        "name": "Mbekezeli Mbokazi",
        "position": "Defensa",
        "club": "Chicago Fire"
      },
      {
        "code": "RSA 15",
        "name": "Teboho Mokoena",
        "position": "Mediocampista",
        "club": "Mamelodi Sundowns"
      },
      {
        "code": "RSA 16",
        "name": "Thalente Mbatha",
        "position": "Mediocampista",
        "club": "Orlando Pirates"
      },
      {
        "code": "RSA 17",
        "name": "Sphephelo Sithole",
        "position": "Mediocampista",
        "club": "CD Tondela"
      },
      {
        "code": "RSA 18",
        "name": "Jayden Adams",
        "position": "Mediocampista",
        "club": "Mamelodi Sundowns"
      },
      {
        "code": "RSA 19",
        "name": "Oswin Appollis",
        "position": "Delantero",
        "club": "Orlando Pirates"
      },
      {
        "code": "RSA 20",
        "name": "Iqraam Rayners",
        "position": "Delantero",
        "club": "Mamelodi Sundowns"
      },
      {
        "code": "RSA 21",
        "name": "Tshepang Moremi",
        "position": "Delantero",
        "club": "Orlando Pirates"
      },
      {
        "code": "RSA 22",
        "name": "Relebohile Mofokeng",
        "position": "Delantero",
        "club": "Orlando Pirates"
      },
      {
        "code": "RSA 23",
        "name": "Evidence Makgopa",
        "position": "Delantero",
        "club": "Orlando Pirates"
      },
      {
        "code": "RSA 24",
        "name": "Themba Zwane",
        "position": "Delantero",
        "club": "Mamelodi Sundowns"
      },
      {
        "code": "RSA 25",
        "name": "Lyle Foster",
        "position": "Delantero",
        "club": "Burnley"
      },
      {
        "code": "RSA 26",
        "name": "Thapelo Maseko",
        "position": "Delantero",
        "club": "AEL Limassol"
      }
    ]
  },
  {
    "team": "Escocia",
    "code": "SCO",
    "sourceTeam": "Scotland",
    "players": [
      {
        "code": "SCO 1",
        "name": "Craig Gordon",
        "position": "Portero",
        "club": "Hearts"
      },
      {
        "code": "SCO 2",
        "name": "Angus Gunn",
        "position": "Portero",
        "club": "Nottingham Forest"
      },
      {
        "code": "SCO 3",
        "name": "Liam Kelly",
        "position": "Portero",
        "club": "Rangers"
      },
      {
        "code": "SCO 4",
        "name": "Grant Hanley",
        "position": "Defensa",
        "club": "Hibernian"
      },
      {
        "code": "SCO 5",
        "name": "Jack Hendry",
        "position": "Defensa",
        "club": "Al Ettifaq"
      },
      {
        "code": "SCO 6",
        "name": "Aaron Hickey",
        "position": "Defensa",
        "club": "Brentford"
      },
      {
        "code": "SCO 7",
        "name": "Dom Hyam",
        "position": "Defensa",
        "club": "Wrexham"
      },
      {
        "code": "SCO 8",
        "name": "Scott McKenna",
        "position": "Defensa",
        "club": "Dinamo Zagreb"
      },
      {
        "code": "SCO 9",
        "name": "Nathan Patterson",
        "position": "Defensa",
        "club": "Everton"
      },
      {
        "code": "SCO 10",
        "name": "Anthony Ralston",
        "position": "Defensa",
        "club": "Celtic"
      },
      {
        "code": "SCO 11",
        "name": "Andy Robertson",
        "position": "Defensa",
        "club": "Liverpool"
      },
      {
        "code": "SCO 12",
        "name": "John Souttar",
        "position": "Defensa",
        "club": "Hearts"
      },
      {
        "code": "SCO 13",
        "name": "Kieran Tierney",
        "position": "Defensa",
        "club": "Celtic"
      },
      {
        "code": "SCO 14",
        "name": "Ryan Christie",
        "position": "Mediocampista",
        "club": "Bournemouth"
      },
      {
        "code": "SCO 15",
        "name": "Findlay Curtis",
        "position": "Mediocampista",
        "club": "Rangers"
      },
      {
        "code": "SCO 16",
        "name": "Lewis Ferguson",
        "position": "Mediocampista",
        "club": "Bologna"
      },
      {
        "code": "SCO 17",
        "name": "Ben Gannon-Doak",
        "position": "Mediocampista",
        "club": "Bournemouth"
      },
      {
        "code": "SCO 18",
        "name": "Tyler Fletcher",
        "position": "Mediocampista",
        "club": "Manchester United"
      },
      {
        "code": "SCO 19",
        "name": "John McGinn",
        "position": "Mediocampista",
        "club": "Aston Villa"
      },
      {
        "code": "SCO 20",
        "name": "Kenny McLean",
        "position": "Mediocampista",
        "club": "Norwich City"
      },
      {
        "code": "SCO 21",
        "name": "Scott McTominay",
        "position": "Mediocampista",
        "club": "Nápoles"
      },
      {
        "code": "SCO 22",
        "name": "Ché Adams",
        "position": "Delantero",
        "club": "Torino"
      },
      {
        "code": "SCO 23",
        "name": "Lyndon Dykes",
        "position": "Delantero",
        "club": "Charlton"
      },
      {
        "code": "SCO 24",
        "name": "George Hirst",
        "position": "Delantero",
        "club": "Ipswich Town"
      },
      {
        "code": "SCO 25",
        "name": "Lawrence Shankland",
        "position": "Delantero",
        "club": "Hearts"
      },
      {
        "code": "SCO 26",
        "name": "Ross Stewart",
        "position": "Delantero",
        "club": "Southampton"
      }
    ]
  },
  {
    "team": "Senegal",
    "code": "SEN",
    "sourceTeam": "Senegal",
    "players": [
      {
        "code": "SEN 1",
        "name": "Edouard Mendy",
        "position": "Portero",
        "club": "Al Ahli"
      },
      {
        "code": "SEN 2",
        "name": "Mory Diaw",
        "position": "Portero",
        "club": "Le Havre"
      },
      {
        "code": "SEN 3",
        "name": "Yehvann Diouf",
        "position": "Portero",
        "club": "Niza"
      },
      {
        "code": "SEN 4",
        "name": "Krépin Diatta",
        "position": "Defensa",
        "club": "Mónaco"
      },
      {
        "code": "SEN 5",
        "name": "Antoine Mendy",
        "position": "Defensa",
        "club": "Niza"
      },
      {
        "code": "SEN 6",
        "name": "Kalidou Koulibaly",
        "position": "Defensa",
        "club": "Al Ahli"
      },
      {
        "code": "SEN 7",
        "name": "El Hadji Malick Diouf",
        "position": "Defensa",
        "club": "West Ham"
      },
      {
        "code": "SEN 8",
        "name": "Mamadou Sarr",
        "position": "Defensa",
        "club": "Estrasburgo"
      },
      {
        "code": "SEN 9",
        "name": "Moussa Niakhaté",
        "position": "Defensa",
        "club": "O. Lyon"
      },
      {
        "code": "SEN 10",
        "name": "Moustapha Mbow",
        "position": "Defensa",
        "club": "Paris"
      },
      {
        "code": "SEN 11",
        "name": "Abdoulaye Seck",
        "position": "Defensa",
        "club": "Maccabi Haifa"
      },
      {
        "code": "SEN 12",
        "name": "Ismaïl Jakobs",
        "position": "Defensa",
        "club": "Galatasaray"
      },
      {
        "code": "SEN 13",
        "name": "Ilay Camara",
        "position": "Defensa",
        "club": "Anderlecht"
      },
      {
        "code": "SEN 14",
        "name": "Idrissa Gana Gueye",
        "position": "Mediocampista",
        "club": "Everton"
      },
      {
        "code": "SEN 15",
        "name": "Pape Gueye",
        "position": "Mediocampista",
        "club": "Villarreal"
      },
      {
        "code": "SEN 16",
        "name": "Lamine Camara",
        "position": "Mediocampista",
        "club": "Mónaco"
      },
      {
        "code": "SEN 17",
        "name": "Habib Diarra",
        "position": "Mediocampista",
        "club": "Sunderland"
      },
      {
        "code": "SEN 18",
        "name": "Pathé Ciss",
        "position": "Mediocampista",
        "club": "Rayo Vallecano"
      },
      {
        "code": "SEN 19",
        "name": "Pape Matar Sarr",
        "position": "Mediocampista",
        "club": "Tottenham"
      },
      {
        "code": "SEN 20",
        "name": "Bara Sapoko Ndiaye",
        "position": "Mediocampista",
        "club": "Bayern"
      },
      {
        "code": "SEN 21",
        "name": "Sadio Mané",
        "position": "Delantero",
        "club": "Al Nassr"
      },
      {
        "code": "SEN 22",
        "name": "Ismaïla Sarr",
        "position": "Delantero",
        "club": "Crystal Palace"
      },
      {
        "code": "SEN 23",
        "name": "Iliman Ndiaye",
        "position": "Delantero",
        "club": "Everton"
      },
      {
        "code": "SEN 24",
        "name": "Assane Diao",
        "position": "Delantero",
        "club": "Como"
      },
      {
        "code": "SEN 25",
        "name": "Ibrahim Mbaye",
        "position": "Delantero",
        "club": "PSG"
      },
      {
        "code": "SEN 26",
        "name": "Nicolas Jackson",
        "position": "Delantero",
        "club": "Bayern"
      },
      {
        "code": "SEN 27",
        "name": "Bamba Dieng",
        "position": "Delantero",
        "club": "Lorient"
      },
      {
        "code": "SEN 28",
        "name": "Cherif Ndiaye",
        "position": "Delantero",
        "club": "Samsunspor"
      }
    ]
  },
  {
    "team": "Suiza",
    "code": "SUI",
    "sourceTeam": "Switzerland",
    "players": [
      {
        "code": "SUI 1",
        "name": "Marvin Keller",
        "position": "Portero",
        "club": "Young Boys"
      },
      {
        "code": "SUI 2",
        "name": "Gregor Kobel",
        "position": "Portero",
        "club": "Borussia Dortmund"
      },
      {
        "code": "SUI 3",
        "name": "Yvon Mvogo",
        "position": "Portero",
        "club": "Lorient"
      },
      {
        "code": "SUI 4",
        "name": "Manuel Akanji",
        "position": "Defensa",
        "club": "Inter"
      },
      {
        "code": "SUI 5",
        "name": "Aurèle Amenda",
        "position": "Defensa",
        "club": "Eintracht"
      },
      {
        "code": "SUI 6",
        "name": "Eray Cömert",
        "position": "Defensa",
        "club": "Valencia"
      },
      {
        "code": "SUI 7",
        "name": "Nico Elvedi",
        "position": "Defensa",
        "club": "Borussia Mönchengladbach"
      },
      {
        "code": "SUI 8",
        "name": "Luca Jaquez",
        "position": "Defensa",
        "club": "Stuttgart"
      },
      {
        "code": "SUI 9",
        "name": "Miro Muheim",
        "position": "Defensa",
        "club": "Hamburgo"
      },
      {
        "code": "SUI 10",
        "name": "Ricardo Rodriguez",
        "position": "Defensa",
        "club": "Betis"
      },
      {
        "code": "SUI 11",
        "name": "Silvan Widmer",
        "position": "Defensa",
        "club": "Mainz 05"
      },
      {
        "code": "SUI 12",
        "name": "Gran Xhaka",
        "position": "Mediocampista",
        "club": "Sunderland"
      },
      {
        "code": "SUI 13",
        "name": "Denis Zakaria",
        "position": "Mediocampista",
        "club": "Mónaco"
      },
      {
        "code": "SUI 14",
        "name": "Michel Aebischer",
        "position": "Mediocampista",
        "club": "Pisa"
      },
      {
        "code": "SUI 15",
        "name": "Christian Fassnacht",
        "position": "Mediocampista",
        "club": "Young Boys"
      },
      {
        "code": "SUI 16",
        "name": "Remo Freuler",
        "position": "Mediocampista",
        "club": "Bologna"
      },
      {
        "code": "SUI 17",
        "name": "Ardon Jashari",
        "position": "Mediocampista",
        "club": "Milan"
      },
      {
        "code": "SUI 18",
        "name": "Johan Manzambi",
        "position": "Mediocampista",
        "club": "Friburgo"
      },
      {
        "code": "SUI 19",
        "name": "Fabian Rieder",
        "position": "Mediocampista",
        "club": "Augsburgo"
      },
      {
        "code": "SUI 20",
        "name": "Djibril Sow",
        "position": "Mediocampista",
        "club": "Sevilla"
      },
      {
        "code": "SUI 21",
        "name": "Zeki Amdouni",
        "position": "Delantero",
        "club": "Burnley"
      },
      {
        "code": "SUI 22",
        "name": "Breel Embolo",
        "position": "Delantero",
        "club": "Stade Rennes"
      },
      {
        "code": "SUI 23",
        "name": "Cedric Itten",
        "position": "Delantero",
        "club": "Fortuna Düsseldorf"
      },
      {
        "code": "SUI 24",
        "name": "Dan Ndoye",
        "position": "Delantero",
        "club": "Nottingham Forest"
      },
      {
        "code": "SUI 25",
        "name": "Noah Okafor",
        "position": "Delantero",
        "club": "Leeds"
      },
      {
        "code": "SUI 26",
        "name": "Ruben Vargas",
        "position": "Delantero",
        "club": "Sevilla"
      }
    ]
  },
  {
    "team": "Suecia",
    "code": "SWE",
    "sourceTeam": "Sweden",
    "players": [
      {
        "code": "SWE 1",
        "name": "Jacob Zetterström",
        "position": "Portero",
        "club": "Derby County"
      },
      {
        "code": "SWE 2",
        "name": "Viktor Johansson",
        "position": "Portero",
        "club": "Stoke City"
      },
      {
        "code": "SWE 3",
        "name": "Kristoffer Nordfeldt",
        "position": "Portero",
        "club": "AIK"
      },
      {
        "code": "SWE 4",
        "name": "Gustav Lagerbielke",
        "position": "Defensa",
        "club": "SC Braga"
      },
      {
        "code": "SWE 5",
        "name": "Viktor Lindelöf",
        "position": "Defensa",
        "club": "Aston Villa"
      },
      {
        "code": "SWE 6",
        "name": "Isak Hien",
        "position": "Defensa",
        "club": "Atalanta"
      },
      {
        "code": "SWE 7",
        "name": "Gabriel Gudmundsson",
        "position": "Defensa",
        "club": "Leeds"
      },
      {
        "code": "SWE 8",
        "name": "Herman Johansson",
        "position": "Defensa",
        "club": "FC Dallas"
      },
      {
        "code": "SWE 9",
        "name": "Daniel Svensson",
        "position": "Defensa",
        "club": "Borussia Dortmund"
      },
      {
        "code": "SWE 10",
        "name": "Hjalmar Ekdal",
        "position": "Defensa",
        "club": "Burnley"
      },
      {
        "code": "SWE 11",
        "name": "Carl Starfelt",
        "position": "Defensa",
        "club": "Celta"
      },
      {
        "code": "SWE 12",
        "name": "Eric Smith",
        "position": "Defensa",
        "club": "St. Pauli"
      },
      {
        "code": "SWE 13",
        "name": "Elliot Stroud",
        "position": "Defensa",
        "club": "Mjällby"
      },
      {
        "code": "SWE 14",
        "name": "Lucas Begvall",
        "position": "Mediocampista",
        "club": "Tottenham"
      },
      {
        "code": "SWE 15",
        "name": "Ken Sema",
        "position": "Mediocampista",
        "club": "Pafos"
      },
      {
        "code": "SWE 16",
        "name": "Jesper Kalström",
        "position": "Mediocampista",
        "club": "Udinese"
      },
      {
        "code": "SWE 17",
        "name": "Yasin Ayari",
        "position": "Mediocampista",
        "club": "Brighton"
      },
      {
        "code": "SWE 18",
        "name": "Mattias Svanberg",
        "position": "Mediocampista",
        "club": "Wolfsburgo"
      },
      {
        "code": "SWE 19",
        "name": "Besfort Zeneli",
        "position": "Mediocampista",
        "club": "Unión Saint-Gilloise"
      },
      {
        "code": "SWE 20",
        "name": "Alexander Isak",
        "position": "Delantero",
        "club": "Liverpool"
      },
      {
        "code": "SWE 21",
        "name": "Viktor Gyökeres",
        "position": "Delantero",
        "club": "Arsenal"
      },
      {
        "code": "SWE 22",
        "name": "Benjamin Nygren",
        "position": "Delantero",
        "club": "Celtic"
      },
      {
        "code": "SWE 23",
        "name": "Anthony Elanga",
        "position": "Delantero",
        "club": "Newcastle"
      },
      {
        "code": "SWE 24",
        "name": "Alexander Bernhardsson",
        "position": "Delantero",
        "club": "Holstein Kiel"
      },
      {
        "code": "SWE 25",
        "name": "Gustaf Nilsson",
        "position": "Delantero",
        "club": "Brujas"
      },
      {
        "code": "SWE 26",
        "name": "Taha Ali",
        "position": "Delantero",
        "club": "Malmö"
      }
    ]
  },
  {
    "team": "Tunez",
    "code": "TUN",
    "sourceTeam": "Tunisia",
    "players": [
      {
        "code": "TUN 1",
        "name": "Aymen Dahmen",
        "position": "Portero",
        "club": "CS Sfaxien"
      },
      {
        "code": "TUN 2",
        "name": "A. Chamakh",
        "position": "Portero",
        "club": "Club Africain"
      },
      {
        "code": "TUN 3",
        "name": "Sabri Ben Hassen",
        "position": "Portero",
        "club": "Etoile du Sahel"
      },
      {
        "code": "TUN 4",
        "name": "Van Valery",
        "position": "Defensa",
        "club": "Young Boys"
      },
      {
        "code": "TUN 5",
        "name": "Moutaz Neffati",
        "position": "Defensa",
        "club": "Norrköping"
      },
      {
        "code": "TUN 6",
        "name": "Dylan Bronn",
        "position": "Defensa",
        "club": "Servette"
      },
      {
        "code": "TUN 7",
        "name": "Montassar Talbi",
        "position": "Defensa",
        "club": "Lorient"
      },
      {
        "code": "TUN 8",
        "name": "Omar Rekik",
        "position": "Defensa",
        "club": "Maribor"
      },
      {
        "code": "TUN 9",
        "name": "Adem Arous",
        "position": "Defensa",
        "club": "Kasimpasa"
      },
      {
        "code": "TUN 10",
        "name": "Raed Chikhaoui",
        "position": "Defensa",
        "club": "Monastir"
      },
      {
        "code": "TUN 11",
        "name": "Ali Abdi",
        "position": "Defensa",
        "club": "Niza"
      },
      {
        "code": "TUN 12",
        "name": "M.A Ben Hmida",
        "position": "Defensa",
        "club": "Espérance de Tunis"
      },
      {
        "code": "TUN 13",
        "name": "Ellyes Skhiri",
        "position": "Mediocampista",
        "club": "Eintracht de Frankfurt"
      },
      {
        "code": "TUN 14",
        "name": "M. Hadj Mahmoud",
        "position": "Mediocampista",
        "club": "Lugano"
      },
      {
        "code": "TUN 15",
        "name": "Rani Khedira",
        "position": "Mediocampista",
        "club": "Union Berlin"
      },
      {
        "code": "TUN 16",
        "name": "Anis Ben Slimane",
        "position": "Mediocampista",
        "club": "Norwich"
      },
      {
        "code": "TUN 17",
        "name": "Mortadha Ben Ouanes",
        "position": "Mediocampista",
        "club": "Kasimpasa"
      },
      {
        "code": "TUN 18",
        "name": "Ismaël Gharbi",
        "position": "Mediocampista",
        "club": "Augsburgo"
      },
      {
        "code": "TUN 19",
        "name": "Hannibal Mejbri",
        "position": "Mediocampista",
        "club": "Burnley"
      },
      {
        "code": "TUN 20",
        "name": "Khalil Ayari",
        "position": "Delantero",
        "club": "PSG"
      },
      {
        "code": "TUN 21",
        "name": "Elias Achouri",
        "position": "Delantero",
        "club": "Copenhague"
      },
      {
        "code": "TUN 22",
        "name": "Elias Saad",
        "position": "Delantero",
        "club": "Hannover 96"
      },
      {
        "code": "TUN 23",
        "name": "Firas Chaouat",
        "position": "Delantero",
        "club": "Club Africain"
      },
      {
        "code": "TUN 24",
        "name": "Hazem Mastouri",
        "position": "Delantero",
        "club": "Dynamo Makhachkala"
      },
      {
        "code": "TUN 25",
        "name": "Rayan Elloumi",
        "position": "Delantero",
        "club": "Vancouver Whitecaps"
      },
      {
        "code": "TUN 26",
        "name": "Sebastian Tounekti",
        "position": "Delantero",
        "club": "Celtic"
      }
    ]
  },
  {
    "team": "Turquia",
    "code": "TUR",
    "sourceTeam": "Turkey",
    "players": [
      {
        "code": "TUR 1",
        "name": "Bayindir",
        "position": "Portero",
        "club": "Manchester United"
      },
      {
        "code": "TUR 2",
        "name": "Cakir",
        "position": "Portero",
        "club": "Galatasaray"
      },
      {
        "code": "TUR 3",
        "name": "Gunok",
        "position": "Portero",
        "club": "Besiktas"
      },
      {
        "code": "TUR 4",
        "name": "Kadioglu",
        "position": "Defensa",
        "club": "Brighton"
      },
      {
        "code": "TUR 5",
        "name": "Demiral",
        "position": "Defensa",
        "club": "Al Ahli"
      },
      {
        "code": "TUR 6",
        "name": "Celik",
        "position": "Defensa",
        "club": "Roma"
      },
      {
        "code": "TUR 7",
        "name": "Ozan Kabak",
        "position": "Defensa",
        "club": "Hoffenheim"
      },
      {
        "code": "TUR 8",
        "name": "Mert Muldur",
        "position": "Defensa",
        "club": "Fenerbahce"
      },
      {
        "code": "TUR 9",
        "name": "Abdulkerim Bardakci",
        "position": "Defensa",
        "club": "Galatasaray"
      },
      {
        "code": "TUR 10",
        "name": "Eren Elmali",
        "position": "Defensa",
        "club": "Galatasaray"
      },
      {
        "code": "TUR 11",
        "name": "Caglar Soyuncu",
        "position": "Defensa",
        "club": "Fenerbahce"
      },
      {
        "code": "TUR 12",
        "name": "Samet Akaydin",
        "position": "Defensa",
        "club": "Rizespor"
      },
      {
        "code": "TUR 13",
        "name": "Arda Guler",
        "position": "Mediocampista",
        "club": "Real Madrid"
      },
      {
        "code": "TUR 14",
        "name": "Can Uzun",
        "position": "Mediocampista",
        "club": "Eintracht Frankfurt"
      },
      {
        "code": "TUR 15",
        "name": "Orkun Kokcu",
        "position": "Mediocampista",
        "club": "Besiktas"
      },
      {
        "code": "TUR 16",
        "name": "Hakan Calhanoglu",
        "position": "Mediocampista",
        "club": "Inter de Milán"
      },
      {
        "code": "TUR 17",
        "name": "Ismail Yuksek",
        "position": "Mediocampista",
        "club": "Fenerbahce"
      },
      {
        "code": "TUR 18",
        "name": "Kaan Ayhan",
        "position": "Mediocampista",
        "club": "Galatasaray"
      },
      {
        "code": "TUR 19",
        "name": "Salih Ozcan",
        "position": "Mediocampista",
        "club": "Borussia Dortmund"
      },
      {
        "code": "TUR 20",
        "name": "Kenan Yildiz",
        "position": "Delantero",
        "club": "Juventus"
      },
      {
        "code": "TUR 21",
        "name": "Baris Yilmaz",
        "position": "Delantero",
        "club": "Galatasaray"
      },
      {
        "code": "TUR 22",
        "name": "Kerem Akturkoglu",
        "position": "Delantero",
        "club": "Fenerbahce"
      },
      {
        "code": "TUR 23",
        "name": "Yunus Akgun",
        "position": "Delantero",
        "club": "Galatasaray"
      },
      {
        "code": "TUR 24",
        "name": "Oguz Aydin",
        "position": "Delantero",
        "club": "Fenerbahce"
      },
      {
        "code": "TUR 25",
        "name": "Deniz Gul",
        "position": "Delantero",
        "club": "Porto"
      },
      {
        "code": "TUR 26",
        "name": "Irfan Can Kahveci",
        "position": "Delantero",
        "club": "Fenerbahce"
      }
    ]
  },
  {
    "team": "Uruguay",
    "code": "URU",
    "sourceTeam": "Uruguay",
    "players": [
      {
        "code": "URU 1",
        "name": "Sergio Rochet",
        "position": "Portero",
        "club": "Internacional"
      },
      {
        "code": "URU 2",
        "name": "Fernando Muslera",
        "position": "Portero",
        "club": "Estudiantes de La Plata"
      },
      {
        "code": "URU 3",
        "name": "Santiago Mele",
        "position": "Portero",
        "club": "Monterrey"
      },
      {
        "code": "URU 4",
        "name": "Guillermo Varela",
        "position": "Defensa",
        "club": "Flamengo"
      },
      {
        "code": "URU 5",
        "name": "Ronald Araújo",
        "position": "Defensa",
        "club": "FC Barcelona"
      },
      {
        "code": "URU 6",
        "name": "José María Giménez",
        "position": "Defensa",
        "club": "Atlético de Madrid"
      },
      {
        "code": "URU 7",
        "name": "Santiago Bueno",
        "position": "Defensa",
        "club": "Wolverhampton Wanderers"
      },
      {
        "code": "URU 8",
        "name": "Sebastián Cáceres",
        "position": "Defensa",
        "club": "Club América"
      },
      {
        "code": "URU 9",
        "name": "Mathías Olivera",
        "position": "Defensa",
        "club": "Napoli"
      },
      {
        "code": "URU 10",
        "name": "Joaquín Piquerez",
        "position": "Defensa",
        "club": "Palmeiras"
      },
      {
        "code": "URU 11",
        "name": "Matías Viña",
        "position": "Defensa",
        "club": "Flamengo"
      },
      {
        "code": "URU 12",
        "name": "Manuel Ugarte",
        "position": "Mediocampista",
        "club": "Manchester United"
      },
      {
        "code": "URU 13",
        "name": "Emiliano Martínez",
        "position": "Mediocampista",
        "club": "Palmeiras"
      },
      {
        "code": "URU 14",
        "name": "Rodrigo Bentancur",
        "position": "Mediocampista",
        "club": "Tottenham Hotspur"
      },
      {
        "code": "URU 15",
        "name": "Federico Valverde",
        "position": "Mediocampista",
        "club": "Real Madrid"
      },
      {
        "code": "URU 16",
        "name": "Agustín Canobbio",
        "position": "Mediocampista",
        "club": "Fluminense"
      },
      {
        "code": "URU 17",
        "name": "Juan Manuel Sanabria",
        "position": "Mediocampista",
        "club": "Atlético de San Luis"
      },
      {
        "code": "URU 18",
        "name": "Giorgian De Arrascaeta",
        "position": "Mediocampista",
        "club": "Flamengo"
      },
      {
        "code": "URU 19",
        "name": "Nicolás de la Cruz",
        "position": "Mediocampista",
        "club": "Flamengo"
      },
      {
        "code": "URU 20",
        "name": "Rodrigo Zalazar",
        "position": "Mediocampista",
        "club": "SC Braga"
      },
      {
        "code": "URU 21",
        "name": "Facundo Pellistri",
        "position": "Mediocampista",
        "club": "Panathinaikos"
      },
      {
        "code": "URU 22",
        "name": "Maximiliano Araújo",
        "position": "Mediocampista",
        "club": "Sporting CP"
      },
      {
        "code": "URU 23",
        "name": "Brian Rodríguez",
        "position": "Mediocampista",
        "club": "Club América"
      },
      {
        "code": "URU 24",
        "name": "Rodrigo Aguirre",
        "position": "Delantero",
        "club": "Club América"
      },
      {
        "code": "URU 25",
        "name": "Federico Viñas",
        "position": "Delantero",
        "club": "Real Oviedo"
      },
      {
        "code": "URU 26",
        "name": "Darwin Núñez",
        "position": "Delantero",
        "club": "Al-Hilal"
      }
    ]
  },
  {
    "team": "Estados Unidos",
    "code": "USA",
    "sourceTeam": "United States",
    "players": [
      {
        "code": "USA 1",
        "name": "Matt Freese",
        "position": "Portero",
        "club": "New York City"
      },
      {
        "code": "USA 2",
        "name": "Matt Turner",
        "position": "Portero",
        "club": "New England Revolution"
      },
      {
        "code": "USA 3",
        "name": "Chris Brady",
        "position": "Portero",
        "club": "Chicago Fire"
      },
      {
        "code": "USA 4",
        "name": "Max Arfsten",
        "position": "Defensa",
        "club": "Columbus Crew"
      },
      {
        "code": "USA 5",
        "name": "Sergiño Dest",
        "position": "Defensa",
        "club": "PSV"
      },
      {
        "code": "USA 6",
        "name": "Alex Freeman",
        "position": "Defensa",
        "club": "Villarreal"
      },
      {
        "code": "USA 7",
        "name": "Mark McKenzie",
        "position": "Defensa",
        "club": "Toulouse"
      },
      {
        "code": "USA 8",
        "name": "Tim Ream",
        "position": "Defensa",
        "club": "Charlotte FC"
      },
      {
        "code": "USA 9",
        "name": "Chris Richards",
        "position": "Defensa",
        "club": "Crystal Palace"
      },
      {
        "code": "USA 10",
        "name": "Antonee Robinson",
        "position": "Defensa",
        "club": "Fulham"
      },
      {
        "code": "USA 11",
        "name": "Miles Robinson",
        "position": "Defensa",
        "club": "FC Cincinnati"
      },
      {
        "code": "USA 12",
        "name": "Joe Scally",
        "position": "Defensa",
        "club": "Borussia Mönchengladbach"
      },
      {
        "code": "USA 13",
        "name": "Auston Trusty",
        "position": "Defensa",
        "club": "Celtic"
      },
      {
        "code": "USA 14",
        "name": "Tyler Adams",
        "position": "Mediocampista",
        "club": "AFC Bournemouth"
      },
      {
        "code": "USA 15",
        "name": "Sebastian Berhalter",
        "position": "Mediocampista",
        "club": "Vancouver Whitecaps"
      },
      {
        "code": "USA 16",
        "name": "Weston McKennie",
        "position": "Mediocampista",
        "club": "Vancouver Whitecaps"
      },
      {
        "code": "USA 17",
        "name": "Cristian Roldán",
        "position": "Mediocampista",
        "club": "Seattle Sounders"
      },
      {
        "code": "USA 18",
        "name": "Brenden Aaronson",
        "position": "Mediocampista",
        "club": "Leeds United"
      },
      {
        "code": "USA 19",
        "name": "Christian Pulisic",
        "position": "Mediocampista",
        "club": "Milan"
      },
      {
        "code": "USA 20",
        "name": "Gio Reyna",
        "position": "Mediocampista",
        "club": "Borussia Mönchengladbach"
      },
      {
        "code": "USA 21",
        "name": "Malik Tillman",
        "position": "Mediocampista",
        "club": "Bayer Leverkusen"
      },
      {
        "code": "USA 22",
        "name": "Tim Weah",
        "position": "Mediocampista",
        "club": "Olympique Marseille"
      },
      {
        "code": "USA 23",
        "name": "Alejandro Zendejas",
        "position": "Mediocampista",
        "club": "Club América"
      },
      {
        "code": "USA 24",
        "name": "Folarin Balogun",
        "position": "Delantero",
        "club": "Monaco"
      },
      {
        "code": "USA 25",
        "name": "Ricardo Pepi",
        "position": "Delantero",
        "club": "PSV"
      },
      {
        "code": "USA 26",
        "name": "Haji Wright",
        "position": "Delantero",
        "club": "Coventry City"
      }
    ]
  },
  {
    "team": "Uzbekistan",
    "code": "UZB",
    "sourceTeam": "Uzbekistan",
    "players": [
      {
        "code": "UZB 1",
        "name": "O’tkir Yusupov",
        "position": "Portero",
        "club": "Navbahor"
      },
      {
        "code": "UZB 2",
        "name": "Botirali Ergashev",
        "position": "Portero",
        "club": "Neftchi Fergana"
      },
      {
        "code": "UZB 3",
        "name": "Abduvohid Ne’matov",
        "position": "Portero",
        "club": "Nasaf Qarshi"
      },
      {
        "code": "UZB 4",
        "name": "Abdukodir Khusanov",
        "position": "Defensa",
        "club": "Manchester City"
      },
      {
        "code": "UZB 5",
        "name": "Alijonov",
        "position": "Defensa",
        "club": ""
      },
      {
        "code": "UZB 6",
        "name": "Farrukh Sayfiev",
        "position": "Defensa",
        "club": "Neftchi Fergana"
      },
      {
        "code": "UZB 7",
        "name": "Rustam Ashurmatov",
        "position": "Defensa",
        "club": "Esteghlal"
      },
      {
        "code": "UZB 8",
        "name": "Sherzod Nasrullaev",
        "position": "Defensa",
        "club": "Pakhtakor Tashkent"
      },
      {
        "code": "UZB 9",
        "name": "Umar Eshmurodov",
        "position": "Defensa",
        "club": "Nasaf Qarshi"
      },
      {
        "code": "UZB 10",
        "name": "Avazbek O’Imasaliev",
        "position": "Defensa",
        "club": ""
      },
      {
        "code": "UZB 11",
        "name": "Jahongir Orozov",
        "position": "Defensa",
        "club": "Dinamo Samarqand"
      },
      {
        "code": "UZB 12",
        "name": "Behruzjon Karimoov",
        "position": "Defensa",
        "club": "Surkhon Termiz"
      },
      {
        "code": "UZB 13",
        "name": "Abdulla Abdullaev",
        "position": "Defensa",
        "club": "Dibba Al-Fujairah Club"
      },
      {
        "code": "UZB 14",
        "name": "Akmal Mozgovoy",
        "position": "Mediocampista",
        "club": "Pajtakor Tashkent"
      },
      {
        "code": "UZB 15",
        "name": "Otabek Shukurov",
        "position": "Mediocampista",
        "club": "Baniyas Club"
      },
      {
        "code": "UZB 16",
        "name": "Jamshid Iskanderov",
        "position": "Mediocampista",
        "club": "Neftchi Fergana"
      },
      {
        "code": "UZB 17",
        "name": "Odil Hamrobekov",
        "position": "Mediocampista",
        "club": "Tractor S.C."
      },
      {
        "code": "UZB 18",
        "name": "Jaloliddin Masharipov",
        "position": "Mediocampista",
        "club": "Esteghlal Tehran"
      },
      {
        "code": "UZB 19",
        "name": "Aziz Ganiev",
        "position": "Mediocampista",
        "club": "Nasaf Qarshi"
      },
      {
        "code": "UZB 20",
        "name": "Sherzod Esanov",
        "position": "Mediocampista",
        "club": "Bukhara"
      },
      {
        "code": "UZB 21",
        "name": "Abbosbek Fayzullaev",
        "position": "Mediocampista",
        "club": "Basaksehir"
      },
      {
        "code": "UZB 22",
        "name": "Eldor Shomurodov",
        "position": "Delantero",
        "club": "Basaksehir"
      },
      {
        "code": "UZB 23",
        "name": "Igor Sergeev",
        "position": "Delantero",
        "club": "Persépolis"
      },
      {
        "code": "UZB 24",
        "name": "Azizbek Amonov",
        "position": "Delantero",
        "club": "Dinamo Samarcanda"
      },
      {
        "code": "UZB 25",
        "name": "Oston Urunov",
        "position": "Delantero",
        "club": "Persépolis"
      },
      {
        "code": "UZB 26",
        "name": "Doston Khamdamov",
        "position": "Delantero",
        "club": "Pakhtakor Tashkent"
      }
    ]
  }
];

const localPlayerImages = {
	"byCode": {
		"ALG 1": "img/figuras/fifa2026.png",
		"ALG 2": "img/figuras/fifa2026.png",
		"ALG 3": "img/figuras/fifa2026.png",
		"ALG 4": "img/figuras/fifa2026.png",
		"ALG 5": "img/figuras/fifa2026.png",
		"ALG 6": "img/figuras/fifa2026.png",
		"ALG 7": "img/figuras/fifa2026.png",
		"ALG 8": "img/figuras/fifa2026.png",
		"ALG 9": "img/figuras/ALG9.png",
		"ALG 10": "img/figuras/ALG10.png",
		"ALG 11": "img/figuras/fifa2026.png",
		"ALG 12": "img/figuras/fifa2026.png",
		"ALG 13": "img/figuras/fifa2026.png",
		"ALG 14": "img/figuras/ALG14.png",
		"ALG 15": "img/figuras/fifa2026.png",
		"ALG 16": "img/figuras/ALG16.png",
		"ALG 17": "img/figuras/ALG17.png",
		"ALG 18": "img/figuras/fifa2026.png",
		"ALG 19": "img/figuras/fifa2026.png",
		"ALG 20": "img/figuras/fifa2026.png",
		"ALG 21": "img/figuras/fifa2026.png",
		"ALG 22": "img/figuras/fifa2026.png",
		"ALG 23": "img/figuras/fifa2026.png",
		"ALG 24": "img/figuras/fifa2026.png",
		"ALG 25": "img/figuras/fifa2026.png",
		"ALG 26": "img/figuras/ALG26.png",
		"ALG 27": "img/figuras/ALG27.png",
		"ARG 1": "img/figuras/ARG1.png",
		"ARG 2": "img/figuras/fifa2026.png",
		"ARG 3": "img/figuras/fifa2026.png",
		"ARG 4": "img/figuras/ARG4.png",
		"ARG 5": "img/figuras/ARG5.png",
		"ARG 6": "img/figuras/ARG6.png",
		"ARG 7": "img/figuras/ARG7.png",
		"ARG 8": "img/figuras/fifa2026.png",
		"ARG 9": "img/figuras/ARG9.png",
		"ARG 10": "img/figuras/fifa2026.png",
		"ARG 11": "img/figuras/fifa2026.png",
		"ARG 12": "img/figuras/ARG12.png",
		"ARG 13": "img/figuras/ARG13.png",
		"ARG 14": "img/figuras/ARG14.png",
		"ARG 15": "img/figuras/ARG15.png",
		"ARG 16": "img/figuras/ARG16.png",
		"ARG 17": "img/figuras/fifa2026.png",
		"ARG 18": "img/figuras/fifa2026.png",
		"ARG 19": "img/figuras/ARG19.png",
		"ARG 20": "img/figuras/ARG20.png",
		"ARG 21": "img/figuras/ARG21.png",
		"ARG 22": "img/figuras/fifa2026.png",
		"ARG 23": "img/figuras/ARG23.png",
		"ARG 24": "img/figuras/fifa2026.png",
		"ARG 25": "img/figuras/ARG25.png",
		"ARG 26": "img/figuras/ARG26.png",
		"AUS 1": "img/figuras/fifa2026.png",
		"AUS 2": "img/figuras/fifa2026.png",
		"AUS 3": "img/figuras/fifa2026.png",
		"AUS 4": "img/figuras/fifa2026.png",
		"AUS 5": "img/figuras/fifa2026.png",
		"AUS 6": "img/figuras/fifa2026.png",
		"AUS 7": "img/figuras/fifa2026.png",
		"AUS 8": "img/figuras/fifa2026.png",
		"AUS 9": "img/figuras/fifa2026.png",
		"AUS 10": "img/figuras/fifa2026.png",
		"AUS 11": "img/figuras/fifa2026.png",
		"AUS 12": "img/figuras/fifa2026.png",
		"AUS 13": "img/figuras/fifa2026.png",
		"AUS 14": "img/figuras/fifa2026.png",
		"AUS 15": "img/figuras/fifa2026.png",
		"AUS 16": "img/figuras/fifa2026.png",
		"AUS 17": "img/figuras/fifa2026.png",
		"AUS 18": "img/figuras/fifa2026.png",
		"AUS 19": "img/figuras/fifa2026.png",
		"AUS 20": "img/figuras/fifa2026.png",
		"AUS 21": "img/figuras/fifa2026.png",
		"AUS 22": "img/figuras/fifa2026.png",
		"AUS 23": "img/figuras/fifa2026.png",
		"AUS 24": "img/figuras/fifa2026.png",
		"AUS 25": "img/figuras/fifa2026.png",
		"AUS 26": "img/figuras/fifa2026.png",
		"AUT 1": "img/figuras/fifa2026.png",
		"AUT 2": "img/figuras/fifa2026.png",
		"AUT 3": "img/figuras/fifa2026.png",
		"AUT 4": "img/figuras/fifa2026.png",
		"AUT 5": "img/figuras/fifa2026.png",
		"AUT 6": "img/figuras/fifa2026.png",
		"AUT 7": "img/figuras/fifa2026.png",
		"AUT 8": "img/figuras/fifa2026.png",
		"AUT 9": "img/figuras/fifa2026.png",
		"AUT 10": "img/figuras/fifa2026.png",
		"AUT 11": "img/figuras/fifa2026.png",
		"AUT 12": "img/figuras/fifa2026.png",
		"AUT 13": "img/figuras/fifa2026.png",
		"AUT 14": "img/figuras/fifa2026.png",
		"AUT 15": "img/figuras/fifa2026.png",
		"AUT 16": "img/figuras/fifa2026.png",
		"AUT 17": "img/figuras/fifa2026.png",
		"AUT 18": "img/figuras/fifa2026.png",
		"AUT 19": "img/figuras/fifa2026.png",
		"AUT 20": "img/figuras/fifa2026.png",
		"AUT 21": "img/figuras/fifa2026.png",
		"AUT 22": "img/figuras/fifa2026.png",
		"AUT 23": "img/figuras/fifa2026.png",
		"AUT 24": "img/figuras/fifa2026.png",
		"AUT 25": "img/figuras/fifa2026.png",
		"AUT 26": "img/figuras/fifa2026.png",
		"BEL 1": "img/figuras/fifa2026.png",
		"BEL 2": "img/figuras/fifa2026.png",
		"BEL 3": "img/figuras/fifa2026.png",
		"BEL 4": "img/figuras/fifa2026.png",
		"BEL 5": "img/figuras/fifa2026.png",
		"BEL 6": "img/figuras/fifa2026.png",
		"BEL 7": "img/figuras/fifa2026.png",
		"BEL 8": "img/figuras/fifa2026.png",
		"BEL 9": "img/figuras/fifa2026.png",
		"BEL 10": "img/figuras/fifa2026.png",
		"BEL 11": "img/figuras/fifa2026.png",
		"BEL 12": "img/figuras/fifa2026.png",
		"BEL 13": "img/figuras/fifa2026.png",
		"BEL 14": "img/figuras/fifa2026.png",
		"BEL 15": "img/figuras/fifa2026.png",
		"BEL 16": "img/figuras/fifa2026.png",
		"BEL 17": "img/figuras/fifa2026.png",
		"BEL 18": "img/figuras/fifa2026.png",
		"BEL 19": "img/figuras/fifa2026.png",
		"BEL 20": "img/figuras/fifa2026.png",
		"BEL 21": "img/figuras/fifa2026.png",
		"BEL 22": "img/figuras/fifa2026.png",
		"BEL 23": "img/figuras/fifa2026.png",
		"BEL 24": "img/figuras/fifa2026.png",
		"BEL 25": "img/figuras/fifa2026.png",
		"BEL 26": "img/figuras/fifa2026.png",
		"BIH 1": "img/figuras/BIH1.png",
		"BIH 2": "img/figuras/fifa2026.png",
		"BIH 3": "img/figuras/fifa2026.png",
		"BIH 4": "img/figuras/BIH4.png",
		"BIH 5": "img/figuras/fifa2026.png",
		"BIH 6": "img/figuras/BIH6.png",
		"BIH 7": "img/figuras/BIH7.png",
		"BIH 8": "img/figuras/fifa2026.png",
		"BIH 9": "img/figuras/fifa2026.png",
		"BIH 10": "img/figuras/fifa2026.png",
		"BIH 11": "img/figuras/fifa2026.png",
		"BIH 12": "img/figuras/BIH12.png",
		"BIH 13": "img/figuras/BIH13.png",
		"BIH 14": "img/figuras/BIH14.png",
		"BIH 15": "img/figuras/BIH15.png",
		"BIH 16": "img/figuras/fifa2026.png",
		"BIH 17": "img/figuras/BIH17.png",
		"BIH 18": "img/figuras/BIH18.png",
		"BIH 19": "img/figuras/BIH19.png",
		"BIH 20": "img/figuras/fifa2026.png",
		"BIH 21": "img/figuras/BIH21.png",
		"BIH 22": "img/figuras/fifa2026.png",
		"BIH 23": "img/figuras/fifa2026.png",
		"BIH 24": "img/figuras/BIH24.png",
		"BIH 25": "img/figuras/BIH25.png",
		"BIH 26": "img/figuras/BIH26.png",
		"BRA 1": "img/figuras/BRA1.png",
		"BRA 2": "img/figuras/BRA2.png",
		"BRA 3": "img/figuras/fifa2026.png",
		"BRA 4": "img/figuras/BRA4.png",
		"BRA 5": "img/figuras/BRA5.png",
		"BRA 6": "img/figuras/fifa2026.png",
		"BRA 7": "img/figuras/BRA7.png",
		"BRA 8": "img/figuras/fifa2026.png",
		"BRA 9": "img/figuras/BRA9.png",
		"BRA 10": "img/figuras/BRA10.png",
		"BRA 11": "img/figuras/fifa2026.png",
		"BRA 12": "img/figuras/fifa2026.png",
		"BRA 13": "img/figuras/BRA13.png",
		"BRA 14": "img/figuras/BRA14.png",
		"BRA 15": "img/figuras/fifa2026.png",
		"BRA 16": "img/figuras/BRA16.png",
		"BRA 17": "img/figuras/BRA17.png",
		"BRA 18": "img/figuras/BRA18.png",
		"BRA 19": "img/figuras/BRA19.png",
		"BRA 20": "img/figuras/BRA20.png",
		"BRA 21": "img/figuras/fifa2026.png",
		"BRA 22": "img/figuras/fifa2026.png",
		"BRA 23": "img/figuras/fifa2026.png",
		"BRA 24": "img/figuras/BRA24.png",
		"BRA 25": "img/figuras/BRA25.png",
		"BRA 26": "img/figuras/fifa2026.png",
		"CAN 1": "img/figuras/fifa2026.png",
		"CAN 2": "img/figuras/fifa2026.png",
		"CAN 3": "img/figuras/CAN3.png",
		"CAN 4": "img/figuras/CAN4.png",
		"CAN 5": "img/figuras/fifa2026.png",
		"CAN 6": "img/figuras/fifa2026.png",
		"CAN 7": "img/figuras/fifa2026.png",
		"CAN 8": "img/figuras/CAN8.png",
		"CAN 9": "img/figuras/fifa2026.png",
		"CAN 10": "img/figuras/fifa2026.png",
		"CAN 11": "img/figuras/CAN11.png",
		"CAN 12": "img/figuras/fifa2026.png",
		"CAN 13": "img/figuras/fifa2026.png",
		"CAN 14": "img/figuras/CAN14.png",
		"CAN 15": "img/figuras/fifa2026.png",
		"CAN 16": "img/figuras/CAN16.png",
		"CAN 17": "img/figuras/fifa2026.png",
		"CAN 18": "img/figuras/CAN18.png",
		"CAN 19": "img/figuras/CAN19.png",
		"CAN 20": "img/figuras/CAN20.png",
		"CAN 21": "img/figuras/fifa2026.png",
		"CAN 22": "img/figuras/CAN22.png",
		"CAN 23": "img/figuras/CAN23.png",
		"CAN 24": "img/figuras/fifa2026.png",
		"CAN 25": "img/figuras/CAN25.png",
		"CAN 26": "img/figuras/fifa2026.png",
		"CIV 1": "img/figuras/CIV1.png",
		"CIV 2": "img/figuras/fifa2026.png",
		"CIV 3": "img/figuras/fifa2026.png",
		"CIV 4": "img/figuras/CIV4.png",
		"CIV 5": "img/figuras/fifa2026.png",
		"CIV 6": "img/figuras/CIV6.png",
		"CIV 7": "img/figuras/fifa2026.png",
		"CIV 8": "img/figuras/fifa2026.png",
		"CIV 9": "img/figuras/CIV9.png",
		"CIV 10": "img/figuras/fifa2026.png",
		"CIV 11": "img/figuras/CIV11.png",
		"CIV 12": "img/figuras/CIV12.png",
		"CIV 13": "img/figuras/fifa2026.png",
		"CIV 14": "img/figuras/fifa2026.png",
		"CIV 15": "img/figuras/CIV15.png",
		"CIV 16": "img/figuras/CIV16.png",
		"CIV 17": "img/figuras/fifa2026.png",
		"CIV 18": "img/figuras/CIV18.png",
		"CIV 19": "img/figuras/fifa2026.png",
		"CIV 20": "img/figuras/CIV20.png",
		"CIV 21": "img/figuras/CIV21.png",
		"CIV 22": "img/figuras/fifa2026.png",
		"CIV 23": "img/figuras/CIV23.png",
		"CIV 24": "img/figuras/fifa2026.png",
		"CIV 25": "img/figuras/fifa2026.png",
		"CIV 26": "img/figuras/fifa2026.png",
		"COD 1": "img/figuras/fifa2026.png",
		"COD 2": "img/figuras/fifa2026.png",
		"COD 3": "img/figuras/fifa2026.png",
		"COD 4": "img/figuras/fifa2026.png",
		"COD 5": "img/figuras/fifa2026.png",
		"COD 6": "img/figuras/fifa2026.png",
		"COD 7": "img/figuras/fifa2026.png",
		"COD 8": "img/figuras/fifa2026.png",
		"COD 9": "img/figuras/fifa2026.png",
		"COD 10": "img/figuras/fifa2026.png",
		"COD 11": "img/figuras/fifa2026.png",
		"COD 12": "img/figuras/fifa2026.png",
		"COD 13": "img/figuras/fifa2026.png",
		"COD 14": "img/figuras/fifa2026.png",
		"COD 15": "img/figuras/fifa2026.png",
		"COD 16": "img/figuras/fifa2026.png",
		"COD 17": "img/figuras/fifa2026.png",
		"COD 18": "img/figuras/fifa2026.png",
		"COD 19": "img/figuras/fifa2026.png",
		"COD 20": "img/figuras/fifa2026.png",
		"COD 21": "img/figuras/fifa2026.png",
		"COD 22": "img/figuras/fifa2026.png",
		"COD 23": "img/figuras/fifa2026.png",
		"COD 24": "img/figuras/fifa2026.png",
		"COD 25": "img/figuras/fifa2026.png",
		"COD 26": "img/figuras/fifa2026.png",
		"COL 1": "img/figuras/COL1.png",
		"COL 2": "img/figuras/COL2.png",
		"COL 3": "img/figuras/COL3.png",
		"COL 4": "img/figuras/COL4.png",
		"COL 5": "img/figuras/COL5.png",
		"COL 6": "img/figuras/COL6.png",
		"COL 7": "img/figuras/COL7.png",
		"COL 8": "img/figuras/COL8.png",
		"COL 9": "img/figuras/COL9.png",
		"COL 10": "img/figuras/COL10.png",
		"COL 11": "img/figuras/COL11.png",
		"COL 12": "img/figuras/COL12.png",
		"COL 13": "img/figuras/COL13.png",
		"COL 14": "img/figuras/COL14.png",
		"COL 15": "img/figuras/COL15.png",
		"COL 16": "img/figuras/COL16.png",
		"COL 17": "img/figuras/COL17.png",
		"COL 18": "img/figuras/COL18.png",
		"COL 19": "img/figuras/COL19.png",
		"COL 20": "img/figuras/COL20.png",
		"COL 21": "img/figuras/COL21.png",
		"COL 22": "img/figuras/COL22.png",
		"COL 23": "img/figuras/COL23.png",
		"COL 24": "img/figuras/COL24.png",
		"COL 25": "img/figuras/COL25.png",
		"COL 26": "img/figuras/COL26.png",
		"CPV 1": "img/figuras/fifa2026.png",
		"CPV 2": "img/figuras/fifa2026.png",
		"CPV 3": "img/figuras/fifa2026.png",
		"CPV 4": "img/figuras/fifa2026.png",
		"CPV 5": "img/figuras/fifa2026.png",
		"CPV 6": "img/figuras/fifa2026.png",
		"CPV 7": "img/figuras/fifa2026.png",
		"CPV 8": "img/figuras/fifa2026.png",
		"CPV 9": "img/figuras/fifa2026.png",
		"CPV 10": "img/figuras/fifa2026.png",
		"CPV 11": "img/figuras/fifa2026.png",
		"CPV 12": "img/figuras/fifa2026.png",
		"CPV 13": "img/figuras/fifa2026.png",
		"CPV 14": "img/figuras/fifa2026.png",
		"CPV 15": "img/figuras/fifa2026.png",
		"CPV 16": "img/figuras/fifa2026.png",
		"CPV 17": "img/figuras/fifa2026.png",
		"CPV 18": "img/figuras/fifa2026.png",
		"CPV 19": "img/figuras/fifa2026.png",
		"CPV 20": "img/figuras/fifa2026.png",
		"CPV 21": "img/figuras/fifa2026.png",
		"CPV 22": "img/figuras/fifa2026.png",
		"CPV 23": "img/figuras/fifa2026.png",
		"CPV 24": "img/figuras/fifa2026.png",
		"CPV 25": "img/figuras/fifa2026.png",
		"CPV 26": "img/figuras/fifa2026.png",
		"CRO 1": "img/figuras/fifa2026.png",
		"CRO 2": "img/figuras/fifa2026.png",
		"CRO 3": "img/figuras/fifa2026.png",
		"CRO 4": "img/figuras/CRO4.png",
		"CRO 5": "img/figuras/fifa2026.png",
		"CRO 6": "img/figuras/CRO6.png",
		"CRO 7": "img/figuras/CRO7.png",
		"CRO 8": "img/figuras/fifa2026.png",
		"CRO 9": "img/figuras/fifa2026.png",
		"CRO 10": "img/figuras/CRO10.png",
		"CRO 11": "img/figuras/CRO11.png",
		"CRO 12": "img/figuras/CRO12.png",
		"CRO 13": "img/figuras/CRO13.png",
		"CRO 14": "img/figuras/fifa2026.png",
		"CRO 15": "img/figuras/fifa2026.png",
		"CRO 16": "img/figuras/CRO16.png",
		"CRO 17": "img/figuras/fifa2026.png",
		"CRO 18": "img/figuras/fifa2026.png",
		"CRO 19": "img/figuras/fifa2026.png",
		"CRO 20": "img/figuras/fifa2026.png",
		"CRO 21": "img/figuras/fifa2026.png",
		"CRO 22": "img/figuras/CRO22.png",
		"CRO 23": "img/figuras/fifa2026.png",
		"CRO 24": "img/figuras/CRO24.png",
		"CRO 25": "img/figuras/fifa2026.png",
		"CRO 26": "img/figuras/fifa2026.png",
		"CUW 1": "img/figuras/fifa2026.png",
		"CUW 2": "img/figuras/fifa2026.png",
		"CUW 3": "img/figuras/fifa2026.png",
		"CUW 4": "img/figuras/fifa2026.png",
		"CUW 5": "img/figuras/fifa2026.png",
		"CUW 6": "img/figuras/fifa2026.png",
		"CUW 7": "img/figuras/fifa2026.png",
		"CUW 8": "img/figuras/fifa2026.png",
		"CUW 9": "img/figuras/fifa2026.png",
		"CUW 10": "img/figuras/fifa2026.png",
		"CUW 11": "img/figuras/fifa2026.png",
		"CUW 12": "img/figuras/fifa2026.png",
		"CUW 13": "img/figuras/fifa2026.png",
		"CUW 14": "img/figuras/fifa2026.png",
		"CUW 15": "img/figuras/fifa2026.png",
		"CUW 16": "img/figuras/fifa2026.png",
		"CUW 17": "img/figuras/fifa2026.png",
		"CUW 18": "img/figuras/fifa2026.png",
		"CUW 19": "img/figuras/fifa2026.png",
		"CUW 20": "img/figuras/fifa2026.png",
		"CUW 21": "img/figuras/fifa2026.png",
		"CUW 22": "img/figuras/fifa2026.png",
		"CUW 23": "img/figuras/fifa2026.png",
		"CUW 24": "img/figuras/fifa2026.png",
		"CUW 25": "img/figuras/fifa2026.png",
		"CUW 26": "img/figuras/fifa2026.png",
		"CZE 1": "img/figuras/fifa2026.png",
		"CZE 2": "img/figuras/CZE2.png",
		"CZE 3": "img/figuras/CZE3.png",
		"CZE 4": "img/figuras/fifa2026.png",
		"CZE 5": "img/figuras/fifa2026.png",
		"CZE 6": "img/figuras/fifa2026.png",
		"CZE 7": "img/figuras/CZE7.png",
		"CZE 8": "img/figuras/CZE8.png",
		"CZE 9": "img/figuras/fifa2026.png",
		"CZE 10": "img/figuras/fifa2026.png",
		"CZE 11": "img/figuras/CZE11.png",
		"CZE 12": "img/figuras/CZE12.png",
		"CZE 13": "img/figuras/CZE13.png",
		"CZE 14": "img/figuras/CZE14.png",
		"CZE 15": "img/figuras/fifa2026.png",
		"CZE 16": "img/figuras/fifa2026.png",
		"CZE 17": "img/figuras/fifa2026.png",
		"CZE 18": "img/figuras/fifa2026.png",
		"CZE 19": "img/figuras/CZE19.png",
		"CZE 20": "img/figuras/fifa2026.png",
		"CZE 21": "img/figuras/fifa2026.png",
		"CZE 22": "img/figuras/CZE22.png",
		"CZE 23": "img/figuras/CZE23.png",
		"CZE 24": "img/figuras/fifa2026.png",
		"CZE 25": "img/figuras/fifa2026.png",
		"CZE 26": "img/figuras/CZE26.png",
		"ECU 1": "img/figuras/ECU1.png",
		"ECU 2": "img/figuras/fifa2026.png",
		"ECU 3": "img/figuras/ECU3.png",
		"ECU 4": "img/figuras/ECU4.png",
		"ECU 5": "img/figuras/ECU5.png",
		"ECU 6": "img/figuras/ECU6.png",
		"ECU 7": "img/figuras/fifa2026.png",
		"ECU 8": "img/figuras/fifa2026.png",
		"ECU 9": "img/figuras/ECU9.png",
		"ECU 10": "img/figuras/fifa2026.png",
		"ECU 11": "img/figuras/ECU11.png",
		"ECU 12": "img/figuras/ECU12.png",
		"ECU 13": "img/figuras/fifa2026.png",
		"ECU 14": "img/figuras/fifa2026.png",
		"ECU 15": "img/figuras/ECU15.png",
		"ECU 16": "img/figuras/ECU16.png",
		"ECU 17": "img/figuras/ECU17.png",
		"ECU 18": "img/figuras/ECU18.png",
		"ECU 19": "img/figuras/fifa2026.png",
		"ECU 20": "img/figuras/ECU20.png",
		"ECU 21": "img/figuras/fifa2026.png",
		"ECU 22": "img/figuras/fifa2026.png",
		"ECU 23": "img/figuras/fifa2026.png",
		"ECU 24": "img/figuras/ECU24.png",
		"EGY 1": "img/figuras/fifa2026.png",
		"EGY 2": "img/figuras/fifa2026.png",
		"EGY 3": "img/figuras/fifa2026.png",
		"EGY 4": "img/figuras/fifa2026.png",
		"EGY 5": "img/figuras/fifa2026.png",
		"EGY 6": "img/figuras/fifa2026.png",
		"EGY 7": "img/figuras/fifa2026.png",
		"EGY 8": "img/figuras/fifa2026.png",
		"EGY 9": "img/figuras/fifa2026.png",
		"EGY 10": "img/figuras/fifa2026.png",
		"EGY 11": "img/figuras/fifa2026.png",
		"EGY 12": "img/figuras/fifa2026.png",
		"EGY 13": "img/figuras/fifa2026.png",
		"EGY 14": "img/figuras/fifa2026.png",
		"EGY 15": "img/figuras/fifa2026.png",
		"EGY 16": "img/figuras/fifa2026.png",
		"EGY 17": "img/figuras/fifa2026.png",
		"EGY 18": "img/figuras/fifa2026.png",
		"EGY 19": "img/figuras/fifa2026.png",
		"EGY 20": "img/figuras/fifa2026.png",
		"EGY 21": "img/figuras/fifa2026.png",
		"EGY 22": "img/figuras/fifa2026.png",
		"EGY 23": "img/figuras/fifa2026.png",
		"EGY 24": "img/figuras/fifa2026.png",
		"EGY 25": "img/figuras/fifa2026.png",
		"EGY 26": "img/figuras/fifa2026.png",
		"EGY 27": "img/figuras/fifa2026.png",
		"ENG 1": "img/figuras/ENG1.png",
		"ENG 2": "img/figuras/fifa2026.png",
		"ENG 3": "img/figuras/fifa2026.png",
		"ENG 4": "img/figuras/ENG4.png",
		"ENG 5": "img/figuras/fifa2026.png",
		"ENG 6": "img/figuras/ENG6.png",
		"ENG 7": "img/figuras/ENG7.png",
		"ENG 8": "img/figuras/ENG8.png",
		"ENG 9": "img/figuras/ENG9.png",
		"ENG 10": "img/figuras/fifa2026.png",
		"ENG 11": "img/figuras/fifa2026.png",
		"ENG 12": "img/figuras/fifa2026.png",
		"ENG 13": "img/figuras/ENG13.png",
		"ENG 14": "img/figuras/fifa2026.png",
		"ENG 15": "img/figuras/ENG15.png",
		"ENG 16": "img/figuras/fifa2026.png",
		"ENG 17": "img/figuras/fifa2026.png",
		"ENG 18": "img/figuras/ENG18.png",
		"ENG 19": "img/figuras/ENG19.png",
		"ENG 20": "img/figuras/ENG20.png",
		"ENG 21": "img/figuras/fifa2026.png",
		"ENG 22": "img/figuras/ENG22.png",
		"ENG 23": "img/figuras/ENG23.png",
		"ENG 24": "img/figuras/ENG24.png",
		"ENG 25": "img/figuras/ENG25.png",
		"ENG 26": "img/figuras/fifa2026.png",
		"ESP 1": "img/figuras/ESP1.png",
		"ESP 2": "img/figuras/fifa2026.png",
		"ESP 3": "img/figuras/fifa2026.png",
		"ESP 4": "img/figuras/ESP4.png",
		"ESP 5": "img/figuras/fifa2026.png",
		"ESP 6": "img/figuras/ESP6.png",
		"ESP 7": "img/figuras/fifa2026.png",
		"ESP 8": "img/figuras/ESP8.png",
		"ESP 9": "img/figuras/fifa2026.png",
		"ESP 10": "img/figuras/fifa2026.png",
		"ESP 11": "img/figuras/fifa2026.png",
		"ESP 12": "img/figuras/ESP12.png",
		"ESP 13": "img/figuras/ESP13.png",
		"ESP 14": "img/figuras/ESP14.png",
		"ESP 15": "img/figuras/ESP15.png",
		"ESP 16": "img/figuras/ESP16.png",
		"ESP 17": "img/figuras/fifa2026.png",
		"ESP 18": "img/figuras/fifa2026.png",
		"ESP 19": "img/figuras/ESP19.png",
		"ESP 20": "img/figuras/ESP20.png",
		"ESP 21": "img/figuras/ESP21.png",
		"ESP 22": "img/figuras/fifa2026.png",
		"ESP 23": "img/figuras/ESP23.png",
		"ESP 24": "img/figuras/fifa2026.png",
		"ESP 25": "img/figuras/fifa2026.png",
		"ESP 26": "img/figuras/fifa2026.png",
		"FRA 1": "img/figuras/FRA1.png",
		"FRA 2": "img/figuras/fifa2026.png",
		"FRA 3": "img/figuras/fifa2026.png",
		"FRA 4": "img/figuras/FRA4.png",
		"FRA 5": "img/figuras/fifa2026.png",
		"FRA 6": "img/figuras/FRA6.png",
		"FRA 7": "img/figuras/FRA7.png",
		"FRA 8": "img/figuras/FRA8.png",
		"FRA 9": "img/figuras/fifa2026.png",
		"FRA 10": "img/figuras/FRA10.png",
		"FRA 11": "img/figuras/FRA11.png",
		"FRA 12": "img/figuras/fifa2026.png",
		"FRA 13": "img/figuras/FRA13.png",
		"FRA 14": "img/figuras/FRA14.png",
		"FRA 15": "img/figuras/fifa2026.png",
		"FRA 16": "img/figuras/fifa2026.png",
		"FRA 17": "img/figuras/FRA17.png",
		"FRA 18": "img/figuras/FRA18.png",
		"FRA 19": "img/figuras/FRA19.png",
		"FRA 20": "img/figuras/FRA20.png",
		"FRA 21": "img/figuras/FRA21.png",
		"FRA 22": "img/figuras/FRA22.png",
		"FRA 23": "img/figuras/fifa2026.png",
		"FRA 24": "img/figuras/fifa2026.png",
		"FRA 25": "img/figuras/fifa2026.png",
		"FRA 26": "img/figuras/fifa2026.png",
		"GER 1": "img/figuras/fifa2026.png",
		"GER 2": "img/figuras/fifa2026.png",
		"GER 3": "img/figuras/fifa2026.png",
		"GER 4": "img/figuras/GER4.png",
		"GER 5": "img/figuras/fifa2026.png",
		"GER 6": "img/figuras/fifa2026.png",
		"GER 7": "img/figuras/GER7.png",
		"GER 8": "img/figuras/GER8.png",
		"GER 9": "img/figuras/GER9.png",
		"GER 10": "img/figuras/GER10.png",
		"GER 11": "img/figuras/GER11.png",
		"GER 12": "img/figuras/fifa2026.png",
		"GER 13": "img/figuras/fifa2026.png",
		"GER 14": "img/figuras/GER14.png",
		"GER 15": "img/figuras/fifa2026.png",
		"GER 16": "img/figuras/fifa2026.png",
		"GER 17": "img/figuras/fifa2026.png",
		"GER 18": "img/figuras/fifa2026.png",
		"GER 19": "img/figuras/GER19.png",
		"GER 20": "img/figuras/fifa2026.png",
		"GER 21": "img/figuras/GER21.png",
		"GER 22": "img/figuras/fifa2026.png",
		"GER 23": "img/figuras/fifa2026.png",
		"GER 24": "img/figuras/fifa2026.png",
		"GER 25": "img/figuras/GER25.png",
		"GER 26": "img/figuras/GER26.png",
		"GHA 1": "img/figuras/fifa2026.png",
		"GHA 2": "img/figuras/fifa2026.png",
		"GHA 3": "img/figuras/fifa2026.png",
		"GHA 4": "img/figuras/fifa2026.png",
		"GHA 5": "img/figuras/fifa2026.png",
		"GHA 6": "img/figuras/fifa2026.png",
		"GHA 7": "img/figuras/fifa2026.png",
		"GHA 8": "img/figuras/fifa2026.png",
		"GHA 9": "img/figuras/fifa2026.png",
		"GHA 10": "img/figuras/fifa2026.png",
		"GHA 11": "img/figuras/fifa2026.png",
		"GHA 12": "img/figuras/fifa2026.png",
		"GHA 13": "img/figuras/fifa2026.png",
		"GHA 14": "img/figuras/fifa2026.png",
		"GHA 15": "img/figuras/fifa2026.png",
		"GHA 16": "img/figuras/fifa2026.png",
		"GHA 17": "img/figuras/fifa2026.png",
		"GHA 18": "img/figuras/fifa2026.png",
		"GHA 19": "img/figuras/fifa2026.png",
		"GHA 20": "img/figuras/fifa2026.png",
		"GHA 21": "img/figuras/fifa2026.png",
		"GHA 22": "img/figuras/fifa2026.png",
		"GHA 23": "img/figuras/fifa2026.png",
		"GHA 24": "img/figuras/fifa2026.png",
		"GHA 25": "img/figuras/fifa2026.png",
		"GHA 26": "img/figuras/fifa2026.png",
		"HAI 1": "img/figuras/fifa2026.png",
		"HAI 2": "img/figuras/fifa2026.png",
		"HAI 3": "img/figuras/fifa2026.png",
		"HAI 4": "img/figuras/HAI4.png",
		"HAI 5": "img/figuras/fifa2026.png",
		"HAI 6": "img/figuras/HAI6.png",
		"HAI 7": "img/figuras/HAI7.png",
		"HAI 8": "img/figuras/fifa2026.png",
		"HAI 9": "img/figuras/HAI9.png",
		"HAI 10": "img/figuras/HAI10.png",
		"HAI 11": "img/figuras/fifa2026.png",
		"HAI 12": "img/figuras/HAI12.png",
		"HAI 13": "img/figuras/fifa2026.png",
		"HAI 14": "img/figuras/HAI14.png",
		"HAI 15": "img/figuras/fifa2026.png",
		"HAI 16": "img/figuras/fifa2026.png",
		"HAI 17": "img/figuras/fifa2026.png",
		"HAI 18": "img/figuras/HAI18.png",
		"HAI 19": "img/figuras/HAI19.png",
		"HAI 20": "img/figuras/HAI20.png",
		"HAI 21": "img/figuras/HAI21.png",
		"HAI 22": "img/figuras/fifa2026.png",
		"HAI 23": "img/figuras/HAI23.png",
		"HAI 24": "img/figuras/HAI24.png",
		"HAI 25": "img/figuras/fifa2026.png",
		"HAI 26": "img/figuras/fifa2026.png",
		"IRN 1": "img/figuras/fifa2026.png",
		"IRN 2": "img/figuras/fifa2026.png",
		"IRN 3": "img/figuras/fifa2026.png",
		"IRN 4": "img/figuras/fifa2026.png",
		"IRN 5": "img/figuras/fifa2026.png",
		"IRN 6": "img/figuras/fifa2026.png",
		"IRN 7": "img/figuras/fifa2026.png",
		"IRN 8": "img/figuras/fifa2026.png",
		"IRN 9": "img/figuras/fifa2026.png",
		"IRN 10": "img/figuras/fifa2026.png",
		"IRN 11": "img/figuras/fifa2026.png",
		"IRN 12": "img/figuras/fifa2026.png",
		"IRN 13": "img/figuras/fifa2026.png",
		"IRN 14": "img/figuras/fifa2026.png",
		"IRN 15": "img/figuras/fifa2026.png",
		"IRN 16": "img/figuras/fifa2026.png",
		"IRN 17": "img/figuras/fifa2026.png",
		"IRN 18": "img/figuras/fifa2026.png",
		"IRN 19": "img/figuras/fifa2026.png",
		"IRN 20": "img/figuras/fifa2026.png",
		"IRN 21": "img/figuras/fifa2026.png",
		"IRN 22": "img/figuras/fifa2026.png",
		"IRN 23": "img/figuras/fifa2026.png",
		"IRN 24": "img/figuras/fifa2026.png",
		"IRN 25": "img/figuras/fifa2026.png",
		"IRN 26": "img/figuras/fifa2026.png",
		"IRQ 1": "img/figuras/fifa2026.png",
		"IRQ 2": "img/figuras/fifa2026.png",
		"IRQ 3": "img/figuras/fifa2026.png",
		"IRQ 4": "img/figuras/fifa2026.png",
		"IRQ 5": "img/figuras/fifa2026.png",
		"IRQ 6": "img/figuras/fifa2026.png",
		"IRQ 7": "img/figuras/fifa2026.png",
		"IRQ 8": "img/figuras/fifa2026.png",
		"IRQ 9": "img/figuras/fifa2026.png",
		"IRQ 10": "img/figuras/fifa2026.png",
		"IRQ 11": "img/figuras/fifa2026.png",
		"IRQ 12": "img/figuras/fifa2026.png",
		"IRQ 13": "img/figuras/fifa2026.png",
		"IRQ 14": "img/figuras/fifa2026.png",
		"IRQ 15": "img/figuras/fifa2026.png",
		"IRQ 16": "img/figuras/fifa2026.png",
		"IRQ 17": "img/figuras/fifa2026.png",
		"IRQ 18": "img/figuras/fifa2026.png",
		"IRQ 19": "img/figuras/fifa2026.png",
		"IRQ 20": "img/figuras/fifa2026.png",
		"IRQ 21": "img/figuras/fifa2026.png",
		"IRQ 22": "img/figuras/fifa2026.png",
		"IRQ 23": "img/figuras/fifa2026.png",
		"IRQ 24": "img/figuras/fifa2026.png",
		"IRQ 25": "img/figuras/fifa2026.png",
		"IRQ 26": "img/figuras/fifa2026.png",
		"JOR 1": "img/figuras/fifa2026.png",
		"JOR 2": "img/figuras/fifa2026.png",
		"JOR 3": "img/figuras/fifa2026.png",
		"JOR 4": "img/figuras/fifa2026.png",
		"JOR 5": "img/figuras/fifa2026.png",
		"JOR 6": "img/figuras/fifa2026.png",
		"JOR 7": "img/figuras/fifa2026.png",
		"JOR 8": "img/figuras/fifa2026.png",
		"JOR 9": "img/figuras/fifa2026.png",
		"JOR 10": "img/figuras/fifa2026.png",
		"JOR 11": "img/figuras/fifa2026.png",
		"JOR 12": "img/figuras/fifa2026.png",
		"JOR 13": "img/figuras/fifa2026.png",
		"JOR 14": "img/figuras/fifa2026.png",
		"JOR 15": "img/figuras/fifa2026.png",
		"JOR 16": "img/figuras/fifa2026.png",
		"JOR 17": "img/figuras/fifa2026.png",
		"JOR 18": "img/figuras/fifa2026.png",
		"JOR 19": "img/figuras/fifa2026.png",
		"JOR 20": "img/figuras/fifa2026.png",
		"JOR 21": "img/figuras/fifa2026.png",
		"JOR 22": "img/figuras/fifa2026.png",
		"JOR 23": "img/figuras/fifa2026.png",
		"JOR 24": "img/figuras/fifa2026.png",
		"JOR 25": "img/figuras/fifa2026.png",
		"JOR 26": "img/figuras/fifa2026.png",
		"JPN 1": "img/figuras/JPN1.png",
		"JPN 2": "img/figuras/fifa2026.png",
		"JPN 3": "img/figuras/fifa2026.png",
		"JPN 4": "img/figuras/fifa2026.png",
		"JPN 5": "img/figuras/JPN5.png",
		"JPN 6": "img/figuras/fifa2026.png",
		"JPN 7": "img/figuras/fifa2026.png",
		"JPN 8": "img/figuras/JPN8.png",
		"JPN 9": "img/figuras/fifa2026.png",
		"JPN 10": "img/figuras/fifa2026.png",
		"JPN 11": "img/figuras/JPN11.png",
		"JPN 12": "img/figuras/fifa2026.png",
		"JPN 13": "img/figuras/JPN13.png",
		"JPN 14": "img/figuras/fifa2026.png",
		"JPN 15": "img/figuras/JPN15.png",
		"JPN 16": "img/figuras/JPN16.png",
		"JPN 17": "img/figuras/JPN17.png",
		"JPN 18": "img/figuras/fifa2026.png",
		"JPN 19": "img/figuras/fifa2026.png",
		"JPN 20": "img/figuras/JPN20.png",
		"JPN 21": "img/figuras/JPN21.png",
		"JPN 22": "img/figuras/fifa2026.png",
		"JPN 23": "img/figuras/fifa2026.png",
		"JPN 24": "img/figuras/fifa2026.png",
		"JPN 25": "img/figuras/JPN25.png",
		"JPN 26": "img/figuras/JPN26.png",
		"KOR 1": "img/figuras/KOR1.png",
		"KOR 2": "img/figuras/fifa2026.png",
		"KOR 3": "img/figuras/fifa2026.png",
		"KOR 4": "img/figuras/fifa2026.png",
		"KOR 5": "img/figuras/KOR5.png",
		"KOR 6": "img/figuras/fifa2026.png",
		"KOR 7": "img/figuras/fifa2026.png",
		"KOR 8": "img/figuras/fifa2026.png",
		"KOR 9": "img/figuras/KOR9.png",
		"KOR 10": "img/figuras/fifa2026.png",
		"KOR 11": "img/figuras/fifa2026.png",
		"KOR 12": "img/figuras/fifa2026.png",
		"KOR 13": "img/figuras/fifa2026.png",
		"KOR 14": "img/figuras/fifa2026.png",
		"KOR 15": "img/figuras/fifa2026.png",
		"KOR 16": "img/figuras/fifa2026.png",
		"KOR 17": "img/figuras/fifa2026.png",
		"KOR 18": "img/figuras/fifa2026.png",
		"KOR 19": "img/figuras/fifa2026.png",
		"KOR 20": "img/figuras/fifa2026.png",
		"KOR 21": "img/figuras/fifa2026.png",
		"KOR 22": "img/figuras/fifa2026.png",
		"KOR 23": "img/figuras/fifa2026.png",
		"KOR 24": "img/figuras/fifa2026.png",
		"KOR 25": "img/figuras/fifa2026.png",
		"KOR 26": "img/figuras/fifa2026.png",
		"KSA 1": "img/figuras/fifa2026.png",
		"KSA 2": "img/figuras/fifa2026.png",
		"KSA 3": "img/figuras/fifa2026.png",
		"KSA 4": "img/figuras/fifa2026.png",
		"KSA 5": "img/figuras/fifa2026.png",
		"KSA 6": "img/figuras/fifa2026.png",
		"KSA 7": "img/figuras/fifa2026.png",
		"KSA 8": "img/figuras/fifa2026.png",
		"KSA 9": "img/figuras/fifa2026.png",
		"KSA 10": "img/figuras/fifa2026.png",
		"KSA 11": "img/figuras/fifa2026.png",
		"KSA 12": "img/figuras/fifa2026.png",
		"KSA 13": "img/figuras/fifa2026.png",
		"KSA 14": "img/figuras/fifa2026.png",
		"KSA 15": "img/figuras/fifa2026.png",
		"KSA 16": "img/figuras/fifa2026.png",
		"KSA 17": "img/figuras/fifa2026.png",
		"KSA 18": "img/figuras/fifa2026.png",
		"KSA 19": "img/figuras/fifa2026.png",
		"KSA 20": "img/figuras/fifa2026.png",
		"KSA 21": "img/figuras/fifa2026.png",
		"KSA 22": "img/figuras/fifa2026.png",
		"KSA 23": "img/figuras/fifa2026.png",
		"KSA 24": "img/figuras/fifa2026.png",
		"KSA 25": "img/figuras/fifa2026.png",
		"KSA 26": "img/figuras/fifa2026.png",
		"MAR 1": "img/figuras/MAR1.png",
		"MAR 2": "img/figuras/MAR2.png",
		"MAR 3": "img/figuras/fifa2026.png",
		"MAR 4": "img/figuras/MAR4.png",
		"MAR 5": "img/figuras/fifa2026.png",
		"MAR 6": "img/figuras/MAR6.png",
		"MAR 7": "img/figuras/fifa2026.png",
		"MAR 8": "img/figuras/fifa2026.png",
		"MAR 9": "img/figuras/fifa2026.png",
		"MAR 10": "img/figuras/fifa2026.png",
		"MAR 11": "img/figuras/fifa2026.png",
		"MAR 12": "img/figuras/fifa2026.png",
		"MAR 13": "img/figuras/MAR13.png",
		"MAR 14": "img/figuras/fifa2026.png",
		"MAR 15": "img/figuras/fifa2026.png",
		"MAR 16": "img/figuras/MAR16.png",
		"MAR 17": "img/figuras/fifa2026.png",
		"MAR 18": "img/figuras/fifa2026.png",
		"MAR 19": "img/figuras/fifa2026.png",
		"MAR 20": "img/figuras/MAR20.png",
		"MAR 21": "img/figuras/fifa2026.png",
		"MAR 22": "img/figuras/MAR22.png",
		"MAR 23": "img/figuras/MAR23.png",
		"MAR 24": "img/figuras/MAR24.png",
		"MAR 25": "img/figuras/fifa2026.png",
		"MAR 26": "img/figuras/fifa2026.png",
		"MEX 1": "img/figuras/fifa2026.png",
		"MEX 2": "img/figuras/fifa2026.png",
		"MEX 3": "img/figuras/fifa2026.png",
		"MEX 4": "img/figuras/MEX4.png",
		"MEX 5": "img/figuras/fifa2026.png",
		"MEX 6": "img/figuras/MEX6.png",
		"MEX 7": "img/figuras/fifa2026.png",
		"MEX 8": "img/figuras/MEX8.png",
		"MEX 9": "img/figuras/MEX9.png",
		"MEX 10": "img/figuras/fifa2026.png",
		"MEX 11": "img/figuras/fifa2026.png",
		"MEX 12": "img/figuras/fifa2026.png",
		"MEX 13": "img/figuras/MEX13.png",
		"MEX 14": "img/figuras/fifa2026.png",
		"MEX 15": "img/figuras/fifa2026.png",
		"MEX 16": "img/figuras/fifa2026.png",
		"MEX 17": "img/figuras/fifa2026.png",
		"MEX 18": "img/figuras/fifa2026.png",
		"MEX 19": "img/figuras/MEX19.png",
		"MEX 20": "img/figuras/MEX20.png",
		"MEX 21": "img/figuras/fifa2026.png",
		"MEX 22": "img/figuras/fifa2026.png",
		"MEX 23": "img/figuras/MEX23.png",
		"MEX 24": "img/figuras/MEX24.png",
		"MEX 25": "img/figuras/fifa2026.png",
		"MEX 26": "img/figuras/MEX26.png",
		"NED 1": "img/figuras/NED1.png",
		"NED 2": "img/figuras/fifa2026.png",
		"NED 3": "img/figuras/fifa2026.png",
		"NED 4": "img/figuras/NED4.png",
		"NED 5": "img/figuras/NED5.png",
		"NED 6": "img/figuras/fifa2026.png",
		"NED 7": "img/figuras/NED7.png",
		"NED 8": "img/figuras/NED8.png",
		"NED 9": "img/figuras/NED9.png",
		"NED 10": "img/figuras/NED10.png",
		"NED 11": "img/figuras/NED11.png",
		"NED 12": "img/figuras/NED12.png",
		"NED 13": "img/figuras/fifa2026.png",
		"NED 14": "img/figuras/fifa2026.png",
		"NED 15": "img/figuras/NED15.png",
		"NED 16": "img/figuras/fifa2026.png",
		"NED 17": "img/figuras/fifa2026.png",
		"NED 18": "img/figuras/fifa2026.png",
		"NED 19": "img/figuras/fifa2026.png",
		"NED 20": "img/figuras/fifa2026.png",
		"NED 21": "img/figuras/fifa2026.png",
		"NED 22": "img/figuras/NED22.png",
		"NED 23": "img/figuras/NED23.png",
		"NED 24": "img/figuras/NED24.png",
		"NED 25": "img/figuras/fifa2026.png",
		"NED 26": "img/figuras/NED26.png",
		"NOR 1": "img/figuras/fifa2026.png",
		"NOR 2": "img/figuras/fifa2026.png",
		"NOR 3": "img/figuras/fifa2026.png",
		"NOR 4": "img/figuras/NOR4.png",
		"NOR 5": "img/figuras/fifa2026.png",
		"NOR 6": "img/figuras/fifa2026.png",
		"NOR 7": "img/figuras/fifa2026.png",
		"NOR 8": "img/figuras/NOR8.png",
		"NOR 9": "img/figuras/NOR9.png",
		"NOR 10": "img/figuras/fifa2026.png",
		"NOR 11": "img/figuras/fifa2026.png",
		"NOR 12": "img/figuras/NOR12.png",
		"NOR 13": "img/figuras/fifa2026.png",
		"NOR 14": "img/figuras/NOR14.png",
		"NOR 15": "img/figuras/NOR15.png",
		"NOR 16": "img/figuras/fifa2026.png",
		"NOR 17": "img/figuras/fifa2026.png",
		"NOR 18": "img/figuras/fifa2026.png",
		"NOR 19": "img/figuras/fifa2026.png",
		"NOR 20": "img/figuras/NOR20.png",
		"NOR 21": "img/figuras/fifa2026.png",
		"NOR 22": "img/figuras/NOR22.png",
		"NOR 23": "img/figuras/fifa2026.png",
		"NOR 24": "img/figuras/NOR24.png",
		"NOR 25": "img/figuras/NOR25.png",
		"NOR 26": "img/figuras/fifa2026.png",
		"NZL 1": "img/figuras/fifa2026.png",
		"NZL 2": "img/figuras/fifa2026.png",
		"NZL 3": "img/figuras/fifa2026.png",
		"NZL 4": "img/figuras/fifa2026.png",
		"NZL 5": "img/figuras/fifa2026.png",
		"NZL 6": "img/figuras/fifa2026.png",
		"NZL 7": "img/figuras/fifa2026.png",
		"NZL 8": "img/figuras/fifa2026.png",
		"NZL 9": "img/figuras/fifa2026.png",
		"NZL 10": "img/figuras/fifa2026.png",
		"NZL 11": "img/figuras/fifa2026.png",
		"NZL 12": "img/figuras/fifa2026.png",
		"NZL 13": "img/figuras/fifa2026.png",
		"NZL 14": "img/figuras/fifa2026.png",
		"NZL 15": "img/figuras/fifa2026.png",
		"NZL 16": "img/figuras/fifa2026.png",
		"NZL 17": "img/figuras/fifa2026.png",
		"NZL 18": "img/figuras/fifa2026.png",
		"NZL 19": "img/figuras/fifa2026.png",
		"NZL 20": "img/figuras/fifa2026.png",
		"NZL 21": "img/figuras/fifa2026.png",
		"NZL 22": "img/figuras/fifa2026.png",
		"NZL 23": "img/figuras/fifa2026.png",
		"NZL 24": "img/figuras/fifa2026.png",
		"NZL 25": "img/figuras/fifa2026.png",
		"NZL 26": "img/figuras/fifa2026.png",
		"PAN 1": "img/figuras/fifa2026.png",
		"PAN 2": "img/figuras/fifa2026.png",
		"PAN 3": "img/figuras/fifa2026.png",
		"PAN 4": "img/figuras/fifa2026.png",
		"PAN 5": "img/figuras/fifa2026.png",
		"PAN 6": "img/figuras/fifa2026.png",
		"PAN 7": "img/figuras/fifa2026.png",
		"PAN 8": "img/figuras/fifa2026.png",
		"PAN 9": "img/figuras/fifa2026.png",
		"PAN 10": "img/figuras/fifa2026.png",
		"PAN 11": "img/figuras/fifa2026.png",
		"PAN 12": "img/figuras/fifa2026.png",
		"PAN 13": "img/figuras/fifa2026.png",
		"PAN 14": "img/figuras/fifa2026.png",
		"PAN 15": "img/figuras/fifa2026.png",
		"PAN 16": "img/figuras/fifa2026.png",
		"PAN 17": "img/figuras/fifa2026.png",
		"PAN 18": "img/figuras/fifa2026.png",
		"PAN 19": "img/figuras/fifa2026.png",
		"PAN 20": "img/figuras/fifa2026.png",
		"PAN 21": "img/figuras/fifa2026.png",
		"PAN 22": "img/figuras/fifa2026.png",
		"PAN 23": "img/figuras/fifa2026.png",
		"PAN 24": "img/figuras/fifa2026.png",
		"PAN 25": "img/figuras/fifa2026.png",
		"PAN 26": "img/figuras/fifa2026.png",
		"PAR 1": "img/figuras/PAR1.png",
		"PAR 2": "img/figuras/fifa2026.png",
		"PAR 3": "img/figuras/fifa2026.png",
		"PAR 4": "img/figuras/PAR4.png",
		"PAR 5": "img/figuras/fifa2026.png",
		"PAR 6": "img/figuras/PAR6.png",
		"PAR 7": "img/figuras/PAR7.png",
		"PAR 8": "img/figuras/fifa2026.png",
		"PAR 9": "img/figuras/PAR9.png",
		"PAR 10": "img/figuras/fifa2026.png",
		"PAR 11": "img/figuras/PAR11.png",
		"PAR 12": "img/figuras/fifa2026.png",
		"PAR 13": "img/figuras/PAR13.png",
		"PAR 14": "img/figuras/fifa2026.png",
		"PAR 15": "img/figuras/PAR15.png",
		"PAR 16": "img/figuras/PAR16.png",
		"PAR 17": "img/figuras/PAR17.png",
		"PAR 18": "img/figuras/fifa2026.png",
		"PAR 19": "img/figuras/PAR19.png",
		"PAR 20": "img/figuras/PAR20.png",
		"PAR 21": "img/figuras/fifa2026.png",
		"PAR 22": "img/figuras/fifa2026.png",
		"PAR 23": "img/figuras/fifa2026.png",
		"PAR 24": "img/figuras/PAR24.png",
		"PAR 25": "img/figuras/PAR25.png",
		"PAR 26": "img/figuras/PAR26.png",
		"POR 1": "img/figuras/POR1.png",
		"POR 2": "img/figuras/POR2.png",
		"POR 3": "img/figuras/fifa2026.png",
		"POR 4": "img/figuras/fifa2026.png",
		"POR 5": "img/figuras/POR5.png",
		"POR 6": "img/figuras/fifa2026.png",
		"POR 7": "img/figuras/fifa2026.png",
		"POR 8": "img/figuras/POR8.png",
		"POR 9": "img/figuras/POR9.png",
		"POR 10": "img/figuras/fifa2026.png",
		"POR 11": "img/figuras/fifa2026.png",
		"POR 12": "img/figuras/POR12.png",
		"POR 13": "img/figuras/fifa2026.png",
		"POR 14": "img/figuras/POR14.png",
		"POR 15": "img/figuras/fifa2026.png",
		"POR 16": "img/figuras/POR16.png",
		"POR 17": "img/figuras/POR17.png",
		"POR 18": "img/figuras/POR18.png",
		"POR 19": "img/figuras/POR19.png",
		"POR 20": "img/figuras/POR20.png",
		"POR 21": "img/figuras/POR21.png",
		"POR 22": "img/figuras/fifa2026.png",
		"POR 23": "img/figuras/POR23.png",
		"POR 24": "img/figuras/POR24.png",
		"POR 25": "img/figuras/fifa2026.png",
		"POR 26": "img/figuras/fifa2026.png",
		"POR 27": "img/figuras/POR27.png",
		"QAT 1": "img/figuras/fifa2026.png",
		"QAT 2": "img/figuras/QAT2.png",
		"QAT 3": "img/figuras/fifa2026.png",
		"QAT 4": "img/figuras/fifa2026.png",
		"QAT 5": "img/figuras/QAT5.png",
		"QAT 6": "img/figuras/fifa2026.png",
		"QAT 7": "img/figuras/fifa2026.png",
		"QAT 8": "img/figuras/fifa2026.png",
		"QAT 9": "img/figuras/QAT9.png",
		"QAT 10": "img/figuras/fifa2026.png",
		"QAT 11": "img/figuras/fifa2026.png",
		"QAT 12": "img/figuras/QAT12.png",
		"QAT 13": "img/figuras/fifa2026.png",
		"QAT 14": "img/figuras/fifa2026.png",
		"QAT 15": "img/figuras/QAT15.png",
		"QAT 16": "img/figuras/fifa2026.png",
		"QAT 17": "img/figuras/fifa2026.png",
		"QAT 18": "img/figuras/fifa2026.png",
		"QAT 19": "img/figuras/fifa2026.png",
		"QAT 20": "img/figuras/QAT20.png",
		"QAT 21": "img/figuras/QAT21.png",
		"QAT 22": "img/figuras/QAT22.png",
		"QAT 23": "img/figuras/fifa2026.png",
		"QAT 24": "img/figuras/fifa2026.png",
		"QAT 25": "img/figuras/fifa2026.png",
		"QAT 26": "img/figuras/fifa2026.png",
		"RSA 1": "img/figuras/RSA1.png",
		"RSA 2": "img/figuras/fifa2026.png",
		"RSA 3": "img/figuras/RSA3.png",
		"RSA 4": "img/figuras/RSA4.png",
		"RSA 5": "img/figuras/fifa2026.png",
		"RSA 6": "img/figuras/fifa2026.png",
		"RSA 7": "img/figuras/RSA7.png",
		"RSA 8": "img/figuras/RSA8.png",
		"RSA 9": "img/figuras/fifa2026.png",
		"RSA 10": "img/figuras/fifa2026.png",
		"RSA 11": "img/figuras/fifa2026.png",
		"RSA 12": "img/figuras/fifa2026.png",
		"RSA 13": "img/figuras/fifa2026.png",
		"RSA 14": "img/figuras/RSA14.png",
		"RSA 15": "img/figuras/RSA15.png",
		"RSA 16": "img/figuras/RSA16.png",
		"RSA 17": "img/figuras/fifa2026.png",
		"RSA 18": "img/figuras/fifa2026.png",
		"RSA 19": "img/figuras/RSA19.png",
		"RSA 20": "img/figuras/fifa2026.png",
		"RSA 21": "img/figuras/fifa2026.png",
		"RSA 22": "img/figuras/fifa2026.png",
		"RSA 23": "img/figuras/fifa2026.png",
		"RSA 24": "img/figuras/fifa2026.png",
		"RSA 25": "img/figuras/RSA25.png",
		"RSA 26": "img/figuras/fifa2026.png",
		"SCO 1": "img/figuras/fifa2026.png",
		"SCO 2": "img/figuras/SCO2.png",
		"SCO 3": "img/figuras/fifa2026.png",
		"SCO 4": "img/figuras/SCO4.png",
		"SCO 5": "img/figuras/SCO5.png",
		"SCO 6": "img/figuras/SCO6.png",
		"SCO 7": "img/figuras/fifa2026.png",
		"SCO 8": "img/figuras/SCO8.png",
		"SCO 9": "img/figuras/fifa2026.png",
		"SCO 10": "img/figuras/SCO10.png",
		"SCO 11": "img/figuras/fifa2026.png",
		"SCO 12": "img/figuras/SCO12.png",
		"SCO 13": "img/figuras/SCO13.png",
		"SCO 14": "img/figuras/SCO14.png",
		"SCO 15": "img/figuras/fifa2026.png",
		"SCO 16": "img/figuras/SCO16.png",
		"SCO 17": "img/figuras/SCO17.png",
		"SCO 18": "img/figuras/fifa2026.png",
		"SCO 19": "img/figuras/SCO19.png",
		"SCO 20": "img/figuras/SCO20.png",
		"SCO 21": "img/figuras/SCO21.png",
		"SCO 22": "img/figuras/SCO22.png",
		"SCO 23": "img/figuras/SCO23.png",
		"SCO 24": "img/figuras/fifa2026.png",
		"SCO 25": "img/figuras/fifa2026.png",
		"SCO 26": "img/figuras/fifa2026.png",
		"SEN 1": "img/figuras/SEN1.png",
		"SEN 2": "img/figuras/fifa2026.png",
		"SEN 3": "img/figuras/SEN3.png",
		"SEN 4": "img/figuras/SEN4.png",
		"SEN 5": "img/figuras/fifa2026.png",
		"SEN 6": "img/figuras/fifa2026.png",
		"SEN 7": "img/figuras/fifa2026.png",
		"SEN 8": "img/figuras/fifa2026.png",
		"SEN 9": "img/figuras/fifa2026.png",
		"SEN 10": "img/figuras/fifa2026.png",
		"SEN 11": "img/figuras/fifa2026.png",
		"SEN 12": "img/figuras/fifa2026.png",
		"SEN 13": "img/figuras/fifa2026.png",
		"SEN 14": "img/figuras/fifa2026.png",
		"SEN 15": "img/figuras/fifa2026.png",
		"SEN 16": "img/figuras/SEN16.png",
		"SEN 17": "img/figuras/fifa2026.png",
		"SEN 18": "img/figuras/fifa2026.png",
		"SEN 19": "img/figuras/fifa2026.png",
		"SEN 20": "img/figuras/fifa2026.png",
		"SEN 21": "img/figuras/SEN21.png",
		"SEN 22": "img/figuras/fifa2026.png",
		"SEN 23": "img/figuras/fifa2026.png",
		"SEN 24": "img/figuras/fifa2026.png",
		"SEN 25": "img/figuras/fifa2026.png",
		"SEN 26": "img/figuras/fifa2026.png",
		"SEN 27": "img/figuras/fifa2026.png",
		"SEN 28": "img/figuras/fifa2026.png",
		"SUI 1": "img/figuras/fifa2026.png",
		"SUI 2": "img/figuras/SUI2.png",
		"SUI 3": "img/figuras/SUI3.png",
		"SUI 4": "img/figuras/SUI4.png",
		"SUI 5": "img/figuras/SUI5.png",
		"SUI 6": "img/figuras/fifa2026.png",
		"SUI 7": "img/figuras/SUI7.png",
		"SUI 8": "img/figuras/fifa2026.png",
		"SUI 9": "img/figuras/fifa2026.png",
		"SUI 10": "img/figuras/fifa2026.png",
		"SUI 11": "img/figuras/fifa2026.png",
		"SUI 12": "img/figuras/fifa2026.png",
		"SUI 13": "img/figuras/SUI13.png",
		"SUI 14": "img/figuras/fifa2026.png",
		"SUI 15": "img/figuras/fifa2026.png",
		"SUI 16": "img/figuras/SUI16.png",
		"SUI 17": "img/figuras/SUI17.png",
		"SUI 18": "img/figuras/SUI18.png",
		"SUI 19": "img/figuras/fifa2026.png",
		"SUI 20": "img/figuras/fifa2026.png",
		"SUI 21": "img/figuras/fifa2026.png",
		"SUI 22": "img/figuras/SUI22.png",
		"SUI 23": "img/figuras/fifa2026.png",
		"SUI 24": "img/figuras/fifa2026.png",
		"SUI 25": "img/figuras/fifa2026.png",
		"SUI 26": "img/figuras/SUI26.png",
		"SWE 1": "img/figuras/fifa2026.png",
		"SWE 2": "img/figuras/SWE2.png",
		"SWE 3": "img/figuras/fifa2026.png",
		"SWE 4": "img/figuras/fifa2026.png",
		"SWE 5": "img/figuras/fifa2026.png",
		"SWE 6": "img/figuras/fifa2026.png",
		"SWE 7": "img/figuras/SWE7.png",
		"SWE 8": "img/figuras/fifa2026.png",
		"SWE 9": "img/figuras/SWE9.png",
		"SWE 10": "img/figuras/fifa2026.png",
		"SWE 11": "img/figuras/fifa2026.png",
		"SWE 12": "img/figuras/fifa2026.png",
		"SWE 13": "img/figuras/fifa2026.png",
		"SWE 14": "img/figuras/fifa2026.png",
		"SWE 15": "img/figuras/fifa2026.png",
		"SWE 16": "img/figuras/fifa2026.png",
		"SWE 17": "img/figuras/fifa2026.png",
		"SWE 18": "img/figuras/SWE18.png",
		"SWE 19": "img/figuras/fifa2026.png",
		"SWE 20": "img/figuras/SWE20.png",
		"SWE 21": "img/figuras/SWE21.png",
		"SWE 22": "img/figuras/fifa2026.png",
		"SWE 23": "img/figuras/SWE23.png",
		"SWE 24": "img/figuras/fifa2026.png",
		"SWE 25": "img/figuras/fifa2026.png",
		"SWE 26": "img/figuras/fifa2026.png",
		"TUN 1": "img/figuras/fifa2026.png",
		"TUN 2": "img/figuras/fifa2026.png",
		"TUN 3": "img/figuras/fifa2026.png",
		"TUN 4": "img/figuras/fifa2026.png",
		"TUN 5": "img/figuras/fifa2026.png",
		"TUN 6": "img/figuras/fifa2026.png",
		"TUN 7": "img/figuras/fifa2026.png",
		"TUN 8": "img/figuras/fifa2026.png",
		"TUN 9": "img/figuras/fifa2026.png",
		"TUN 10": "img/figuras/fifa2026.png",
		"TUN 11": "img/figuras/fifa2026.png",
		"TUN 12": "img/figuras/fifa2026.png",
		"TUN 13": "img/figuras/fifa2026.png",
		"TUN 14": "img/figuras/fifa2026.png",
		"TUN 15": "img/figuras/fifa2026.png",
		"TUN 16": "img/figuras/fifa2026.png",
		"TUN 17": "img/figuras/fifa2026.png",
		"TUN 18": "img/figuras/fifa2026.png",
		"TUN 19": "img/figuras/fifa2026.png",
		"TUN 20": "img/figuras/fifa2026.png",
		"TUN 21": "img/figuras/fifa2026.png",
		"TUN 22": "img/figuras/fifa2026.png",
		"TUN 23": "img/figuras/fifa2026.png",
		"TUN 24": "img/figuras/fifa2026.png",
		"TUN 25": "img/figuras/fifa2026.png",
		"TUN 26": "img/figuras/fifa2026.png",
		"TUR 1": "img/figuras/fifa2026.png",
		"TUR 2": "img/figuras/TUR2.png",
		"TUR 3": "img/figuras/fifa2026.png",
		"TUR 4": "img/figuras/TUR4.png",
		"TUR 5": "img/figuras/TUR5.png",
		"TUR 6": "img/figuras/TUR6.png",
		"TUR 7": "img/figuras/fifa2026.png",
		"TUR 8": "img/figuras/fifa2026.png",
		"TUR 9": "img/figuras/TUR9.png",
		"TUR 10": "img/figuras/fifa2026.png",
		"TUR 11": "img/figuras/TUR11.png",
		"TUR 12": "img/figuras/fifa2026.png",
		"TUR 13": "img/figuras/TUR13.png",
		"TUR 14": "img/figuras/TUR14.png",
		"TUR 15": "img/figuras/fifa2026.png",
		"TUR 16": "img/figuras/TUR16.png",
		"TUR 17": "img/figuras/fifa2026.png",
		"TUR 18": "img/figuras/TUR18.png",
		"TUR 19": "img/figuras/fifa2026.png",
		"TUR 20": "img/figuras/fifa2026.png",
		"TUR 21": "img/figuras/TUR21.png",
		"TUR 22": "img/figuras/TUR22.png",
		"TUR 23": "img/figuras/TUR23.png",
		"TUR 24": "img/figuras/fifa2026.png",
		"TUR 25": "img/figuras/fifa2026.png",
		"TUR 26": "img/figuras/TUR26.png",
		"URU 1": "img/figuras/URU1.png",
		"URU 2": "img/figuras/fifa2026.png",
		"URU 3": "img/figuras/URU3.png",
		"URU 4": "img/figuras/URU4.png",
		"URU 5": "img/figuras/URU5.png",
		"URU 6": "img/figuras/URU6.png",
		"URU 7": "img/figuras/fifa2026.png",
		"URU 8": "img/figuras/URU8.png",
		"URU 9": "img/figuras/URU9.png",
		"URU 10": "img/figuras/fifa2026.png",
		"URU 11": "img/figuras/fifa2026.png",
		"URU 12": "img/figuras/URU12.png",
		"URU 13": "img/figuras/fifa2026.png",
		"URU 14": "img/figuras/URU14.png",
		"URU 15": "img/figuras/URU15.png",
		"URU 16": "img/figuras/fifa2026.png",
		"URU 17": "img/figuras/fifa2026.png",
		"URU 18": "img/figuras/URU18.png",
		"URU 19": "img/figuras/fifa2026.png",
		"URU 20": "img/figuras/fifa2026.png",
		"URU 21": "img/figuras/URU21.png",
		"URU 22": "img/figuras/fifa2026.png",
		"URU 23": "img/figuras/fifa2026.png",
		"URU 24": "img/figuras/URU24.png",
		"URU 25": "img/figuras/URU25.png",
		"URU 26": "img/figuras/uru-11-darwin nunez.jpg",
		"USA 1": "img/figuras/USA1.png",
		"USA 2": "img/figuras/fifa2026.png",
		"USA 3": "img/figuras/fifa2026.png",
		"USA 4": "img/figuras/fifa2026.png",
		"USA 5": "img/figuras/fifa2026.png",
		"USA 6": "img/figuras/USA6.png",
		"USA 7": "img/figuras/USA7.png",
		"USA 8": "img/figuras/USA8.png",
		"USA 9": "img/figuras/USA9.png",
		"USA 10": "img/figuras/USA10.png",
		"USA 11": "img/figuras/fifa2026.png",
		"USA 12": "img/figuras/fifa2026.png",
		"USA 13": "img/figuras/fifa2026.png",
		"USA 14": "img/figuras/USA14.png",
		"USA 15": "img/figuras/fifa2026.png",
		"USA 16": "img/figuras/USA16.png",
		"USA 17": "img/figuras/USA17.png",
		"USA 18": "img/figuras/USA18.png",
		"USA 19": "img/figuras/USA19.png",
		"USA 20": "img/figuras/fifa2026.png",
		"USA 21": "img/figuras/USA21.png",
		"USA 22": "img/figuras/fifa2026.png",
		"USA 23": "img/figuras/fifa2026.png",
		"USA 24": "img/figuras/USA24.png",
		"USA 25": "img/figuras/USA25.png",
		"USA 26": "img/figuras/USA26.png",
		"UZB 1": "img/figuras/fifa2026.png",
		"UZB 2": "img/figuras/fifa2026.png",
		"UZB 3": "img/figuras/fifa2026.png",
		"UZB 4": "img/figuras/fifa2026.png",
		"UZB 5": "img/figuras/fifa2026.png",
		"UZB 6": "img/figuras/fifa2026.png",
		"UZB 7": "img/figuras/fifa2026.png",
		"UZB 8": "img/figuras/fifa2026.png",
		"UZB 9": "img/figuras/fifa2026.png",
		"UZB 10": "img/figuras/fifa2026.png",
		"UZB 11": "img/figuras/fifa2026.png",
		"UZB 12": "img/figuras/fifa2026.png",
		"UZB 13": "img/figuras/fifa2026.png",
		"UZB 14": "img/figuras/fifa2026.png",
		"UZB 15": "img/figuras/fifa2026.png",
		"UZB 16": "img/figuras/fifa2026.png",
		"UZB 17": "img/figuras/fifa2026.png",
		"UZB 18": "img/figuras/fifa2026.png",
		"UZB 19": "img/figuras/fifa2026.png",
		"UZB 20": "img/figuras/fifa2026.png",
		"UZB 21": "img/figuras/fifa2026.png",
		"UZB 22": "img/figuras/fifa2026.png",
		"UZB 23": "img/figuras/fifa2026.png",
		"UZB 24": "img/figuras/fifa2026.png",
		"UZB 25": "img/figuras/fifa2026.png",
		"UZB 26": "img/figuras/fifa2026.png"
	},
	"byName": {
		"BRA:ederson": "img/figuras/BRA2.png",
		"BRA:ibanez": "img/figuras/BRA7.png",
		"BRA:rayan": "img/figuras/BRA25.png",
		"HAI:jean jacques danley": "img/figuras/HAI14.png",
		"NOR:kristoffer ajer": "img/figuras/NOR4.png",
		"NOR:marcus pedersen": "img/figuras/NOR8.png",
		"PAR:juan caceres": "img/figuras/PAR4.png",
		"TUR:baris yilmaz": "img/figuras/TUR21.png",
		"USA:cristian roldan": "img/figuras/USA17.png",
		"ARG:dibu martinez": "img/figuras/ARG1.png",
		"ARG:alexis mac allister": "img/figuras/ARG14.png",
		"URU:rodrigo aguirre": "img/figuras/URU24.png",
		"ALG:aissa mandi": "img/figuras/ALG9.png",
		"ALG:anis hadj moussa": "img/figuras/ALG26.png",
		"ALG:fares chaibi": "img/figuras/ALG17.png",
		"ALG:houssem aouar": "img/figuras/ALG16.png",
		"ALG:nabil bentaleb": "img/figuras/ALG14.png",
		"ALG:ramy bensebaini": "img/figuras/ALG10.png",
		"ALG:riyad mahrez": "img/figuras/ALG27.png",
		"ARG:cristian romero": "img/figuras/ARG4.png",
		"ARG:enzo fernandez": "img/figuras/ARG12.png",
		"ARG:exequiel palacios": "img/figuras/ARG16.png",
		"ARG:giuliano simeone": "img/figuras/ARG25.png",
		"ARG:julian alvarez": "img/figuras/ARG20.png",
		"ARG:lautaro martinez": "img/figuras/ARG21.png",
		"ARG:leandro paredes": "img/figuras/ARG15.png",
		"ARG:leonardo balerdi": "img/figuras/ARG9.png",
		"ARG:lionel messi": "img/figuras/ARG19.png",
		"ARG:nahuel molina": "img/figuras/ARG6.png",
		"ARG:nico gonzalez": "img/figuras/ARG23.png",
		"ARG:nico paz": "img/figuras/ARG26.png",
		"ARG:nicolas tagliafico": "img/figuras/ARG7.png",
		"ARG:otamendi": "img/figuras/ARG5.png",
		"ARG:rodrigo de paul": "img/figuras/ARG13.png",
		"BIH:amar memic": "img/figuras/BIH18.png",
		"BIH:amir hadziahmetovic": "img/figuras/BIH12.png",
		"BIH:armin gigovic": "img/figuras/BIH19.png",
		"BIH:benjamin tahirovic": "img/figuras/BIH17.png",
		"BIH:dzenis burnic": "img/figuras/BIH15.png",
		"BIH:edin dzeko": "img/figuras/BIH26.png",
		"BIH:esmir bajraktarevic": "img/figuras/BIH21.png",
		"BIH:haris tabakovic": "img/figuras/BIH25.png",
		"BIH:ivan basic": "img/figuras/BIH14.png",
		"BIH:ivan sunjic": "img/figuras/BIH13.png",
		"BIH:nihad mujakic": "img/figuras/BIH6.png",
		"BIH:nikola katic": "img/figuras/BIH7.png",
		"BIH:nikola vasilj": "img/figuras/BIH1.png",
		"BIH:samed bazdar": "img/figuras/BIH24.png",
		"BIH:sead kolasinac": "img/figuras/BIH4.png",
		"BRA:alisson": "img/figuras/BRA1.png",
		"BRA:bruno guimaraes": "img/figuras/BRA14.png",
		"BRA:casemiro": "img/figuras/BRA13.png",
		"BRA:danilo": "img/figuras/BRA10.png",
		"BRA:gabriel magalhaes": "img/figuras/BRA5.png",
		"BRA:lucas paqueta": "img/figuras/BRA17.png",
		"BRA:marquinhos": "img/figuras/BRA4.png",
		"BRA:martinelli": "img/figuras/BRA24.png",
		"BRA:matheus cunha": "img/figuras/BRA20.png",
		"BRA:raphinha": "img/figuras/BRA19.png",
		"BRA:vinicius jr": "img/figuras/BRA18.png",
		"BRA:vinicius junior": "img/figuras/BRA18.png",
		"BRA:wesley": "img/figuras/BRA9.png",
		"CAN:alistair johnston": "img/figuras/CAN8.png",
		"CAN:cyle larin": "img/figuras/CAN25.png",
		"CAN:dayne st clair": "img/figuras/CAN3.png",
		"CAN:ismael kone": "img/figuras/CAN18.png",
		"CAN:jacob shaffelburg": "img/figuras/CAN22.png",
		"CAN:jonathan david": "img/figuras/CAN23.png",
		"CAN:jonathan osorio": "img/figuras/CAN20.png",
		"CAN:liam millar": "img/figuras/CAN19.png",
		"CAN:moise bombito": "img/figuras/CAN4.png",
		"CAN:niko sigur": "img/figuras/CAN11.png",
		"CAN:stephen eustaquio": "img/figuras/CAN16.png",
		"CAN:tajon buchanan": "img/figuras/CAN14.png",
		"CIV:amad diallo": "img/figuras/CIV20.png",
		"CIV:emmanuel agbadou": "img/figuras/CIV4.png",
		"CIV:evann guessand": "img/figuras/CIV23.png",
		"CIV:franck kessie": "img/figuras/CIV15.png",
		"CIV:ibrahim sangare": "img/figuras/CIV16.png",
		"CIV:odilon kossounou": "img/figuras/CIV9.png",
		"CIV:oumar diakite": "img/figuras/CIV21.png",
		"CIV:ousmane diomande": "img/figuras/CIV6.png",
		"CIV:seko fofana": "img/figuras/CIV12.png",
		"CIV:simon adingra": "img/figuras/CIV18.png",
		"CIV:wilfried singo": "img/figuras/CIV11.png",
		"CIV:yahia fofana": "img/figuras/CIV1.png",
		"COL:alvaro montero": "img/figuras/COL1.png",
		"COL:alvaro montero": "img/figuras/COL1.png",
		"COL:camilo vargas": "img/figuras/COL2.png",
		"COL:carlos gomez": "img/figuras/COL25.png",
		"COL:daniel munoz": "img/figuras/COL4.png",
		"COL:david ospina": "img/figuras/COL3.png",
		"COL:davinson sanchez": "img/figuras/COL6.png",
		"COL:deiver machado": "img/figuras/COL10.png",
		"COL:gustavo puerta": "img/figuras/COL12.png",
		"COL:jaminton campaz": "img/figuras/COL20.png",
		"COL:james rodriguez": "img/figuras/COL13.png",
		"COL:jefferson lerma": "img/figuras/COL14.png",
		"COL:jhon arias": "img/figuras/COL15.png",
		"COL:jhon cordoba": "img/figuras/COL24.png",
		"COL:jhon lucumi": "img/figuras/COL7.png",
		"COL:johan mojica": "img/figuras/COL11.png",
		"COL:jorge carrascal": "img/figuras/COL16.png",
		"COL:juan camilo hernandez": "img/figuras/COL26.png",
		"COL:juan fernando quintero": "img/figuras/COL17.png",
		"COL:juan portilla": "img/figuras/COL21.png",
		"COL:kevin castano": "img/figuras/COL19.png",
		"COL:luis diaz": "img/figuras/COL22.png",
		"COL:luis suarez": "img/figuras/COL23.png",
		"COL:richard rios": "img/figuras/COL18.png",
		"COL:santiago arias": "img/figuras/COL5.png",
		"COL:willer ditta": "img/figuras/COL9.png",
		"COL:willer ditta": "img/figuras/COL9.png",
		"COL:yerry mina": "img/figuras/COL8.png",
		"CRO:andrej kramaric": "img/figuras/CRO22.png",
		"CRO:josip stanisic": "img/figuras/CRO7.png",
		"CRO:josip sutalo": "img/figuras/CRO6.png",
		"CRO:josko gvardiol": "img/figuras/CRO4.png",
		"CRO:luka modric": "img/figuras/CRO11.png",
		"CRO:luka vuskovic": "img/figuras/CRO10.png",
		"CRO:marco pasalic": "img/figuras/CRO24.png",
		"CRO:mario pasalic": "img/figuras/CRO13.png",
		"CRO:martin baturina": "img/figuras/CRO16.png",
		"CRO:mateo kovacic": "img/figuras/CRO12.png",
		"CZE:adam hlozek": "img/figuras/CZE23.png",
		"CZE:david zima 8slavia praga": "img/figuras/CZE7.png",
		"CZE:jindrich stanek": "img/figuras/CZE3.png",
		"CZE:lukas cerv": "img/figuras/CZE14.png",
		"CZE:lukas provod": "img/figuras/CZE22.png",
		"CZE:matej kovar": "img/figuras/CZE2.png",
		"CZE:michal sadilek": "img/figuras/CZE13.png",
		"CZE:pavel sulc": "img/figuras/CZE19.png",
		"CZE:tomas chory": "img/figuras/CZE26.png",
		"CZE:tomas holes": "img/figuras/CZE8.png",
		"CZE:tomas soucek": "img/figuras/CZE12.png",
		"CZE:vladimir coufal": "img/figuras/CZE11.png",
		"ECU:alan franco": "img/figuras/ECU15.png",
		"ECU:angelo preciado": "img/figuras/ECU11.png",
		"ECU:enner valencia": "img/figuras/ECU20.png",
		"ECU:gonzalo plata": "img/figuras/ECU18.png",
		"ECU:gonzalo valle": "img/figuras/ECU3.png",
		"ECU:hernan galindez": "img/figuras/ECU1.png",
		"ECU:joel ordonez": "img/figuras/ECU6.png",
		"ECU:kendry paez": "img/figuras/ECU16.png",
		"ECU:kevin rodriguez": "img/figuras/ECU24.png",
		"ECU:moises caicedo": "img/figuras/ECU12.png",
		"ECU:nilson angulo": "img/figuras/ECU17.png",
		"ECU:pervis estupinan": "img/figuras/ECU9.png",
		"ECU:piero hincapie": "img/figuras/ECU5.png",
		"ECU:willian pacho": "img/figuras/ECU4.png",
		"ENG:anthony gordon": "img/figuras/ENG23.png",
		"ENG:bukayo saka": "img/figuras/ENG20.png",
		"ENG:dan burn": "img/figuras/ENG9.png",
		"ENG:declan rice": "img/figuras/ENG15.png",
		"ENG:ezri konsa": "img/figuras/ENG8.png",
		"ENG:harry kane": "img/figuras/ENG24.png",
		"ENG:john stones": "img/figuras/ENG6.png",
		"ENG:jordan henderson": "img/figuras/ENG13.png",
		"ENG:jordan pickford": "img/figuras/ENG1.png",
		"ENG:jude bellingham": "img/figuras/ENG18.png",
		"ENG:marc guehi": "img/figuras/ENG7.png",
		"ENG:marcus rashford": "img/figuras/ENG22.png",
		"ENG:morgan rogers": "img/figuras/ENG19.png",
		"ENG:ollie watkins": "img/figuras/ENG25.png",
		"ENG:reece james": "img/figuras/ENG4.png",
		"ESP:aymeric laporte": "img/figuras/ESP8.png",
		"ESP:dani olmo": "img/figuras/ESP16.png",
		"ESP:fabian ruiz": "img/figuras/ESP14.png",
		"ESP:ferran torres": "img/figuras/ESP23.png",
		"ESP:lamine yamal": "img/figuras/ESP20.png",
		"ESP:marc cucurella": "img/figuras/ESP6.png",
		"ESP:martin zubimendi": "img/figuras/ESP13.png",
		"ESP:mikel merino": "img/figuras/ESP19.png",
		"ESP:nico williams": "img/figuras/ESP21.png",
		"ESP:pedri": "img/figuras/ESP15.png",
		"ESP:pedro porro": "img/figuras/ESP4.png",
		"ESP:rodri": "img/figuras/ESP12.png",
		"ESP:unai simon": "img/figuras/ESP1.png",
		"FRA:adrien rabiot": "img/figuras/FRA14.png",
		"FRA:aurelien tchouameni": "img/figuras/FRA13.png",
		"FRA:bradley barcola": "img/figuras/FRA22.png",
		"FRA:dayot upamecano": "img/figuras/FRA7.png",
		"FRA:desire doue": "img/figuras/FRA21.png",
		"FRA:ibrahima konate": "img/figuras/FRA8.png",
		"FRA:jules kounde": "img/figuras/FRA4.png",
		"FRA:kylian mbappe": "img/figuras/FRA18.png",
		"FRA:lucas digne": "img/figuras/FRA11.png",
		"FRA:manu kone": "img/figuras/FRA17.png",
		"FRA:michael olise": "img/figuras/FRA19.png",
		"FRA:mike maignan": "img/figuras/FRA1.png",
		"FRA:ousmane dembele": "img/figuras/FRA20.png",
		"FRA:theo hernandez": "img/figuras/FRA10.png",
		"FRA:william saliba": "img/figuras/FRA6.png",
		"GER:antonio rudiger": "img/figuras/GER9.png",
		"GER:david raum": "img/figuras/GER8.png",
		"GER:florian wirtz": "img/figuras/GER21.png",
		"GER:jamal musiala": "img/figuras/GER14.png",
		"GER:jonathan tah": "img/figuras/GER11.png",
		"GER:joshua kimmich": "img/figuras/GER7.png",
		"GER:leon goretzka": "img/figuras/GER19.png",
		"GER:leroy sane": "img/figuras/GER25.png",
		"GER:nick woltemade": "img/figuras/GER26.png",
		"GER:waldemar anton": "img/figuras/GER4.png",
		"HAI:carlens arcus": "img/figuras/HAI4.png",
		"HAI:derrick etienne": "img/figuras/HAI21.png",
		"HAI:duckens nazon": "img/figuras/HAI23.png",
		"HAI:duke lacroix": "img/figuras/HAI6.png",
		"HAI:frantzdy pierrot": "img/figuras/HAI24.png",
		"HAI:hannes delcroix": "img/figuras/HAI10.png",
		"HAI:josue casimir": "img/figuras/HAI20.png",
		"HAI:leverton pierre": "img/figuras/HAI12.png",
		"HAI:louicius deedson": "img/figuras/HAI18.png",
		"HAI:martin experience": "img/figuras/HAI7.png",
		"HAI:ricardo ade": "img/figuras/HAI9.png",
		"HAI:ruben providence": "img/figuras/HAI19.png",
		"JPN:ao tanaka": "img/figuras/JPN15.png",
		"JPN:ayase ueda": "img/figuras/JPN26.png",
		"JPN:ayumu seko": "img/figuras/JPN8.png",
		"JPN:daichi kamada": "img/figuras/JPN16.png",
		"JPN:junnosuke suzuki": "img/figuras/JPN11.png",
		"JPN:junya ito": "img/figuras/JPN17.png",
		"JPN:kaishu sano": "img/figuras/JPN13.png",
		"JPN:koki ogawa": "img/figuras/JPN20.png",
		"JPN:ritsu doan": "img/figuras/JPN25.png",
		"JPN:shogo taniguchi": "img/figuras/JPN5.png",
		"JPN:takefusa kubo": "img/figuras/JPN21.png",
		"JPN:zion suzuki": "img/figuras/JPN1.png",
		"KOR:jens castrop": "img/figuras/KOR9.png",
		"MAR:abde ezzalzouli": "img/figuras/MAR24.png",
		"MAR:achraf hakimi": "img/figuras/MAR4.png",
		"MAR:ayoub el kaabi": "img/figuras/MAR22.png",
		"MAR:bilal el khannouss": "img/figuras/MAR16.png",
		"MAR:brahim diaz": "img/figuras/MAR20.png",
		"MAR:munir el kajoui": "img/figuras/MAR2.png",
		"MAR:noussair mazraoui": "img/figuras/MAR6.png",
		"MAR:sofyan amrabat": "img/figuras/MAR13.png",
		"MAR:soufiane rahimi": "img/figuras/MAR23.png",
		"MAR:yassine bounou": "img/figuras/MAR1.png",
		"MEX:alexis vega": "img/figuras/MEX26.png",
		"MEX:cesar huerta": "img/figuras/MEX20.png",
		"MEX:cesar montes": "img/figuras/MEX6.png",
		"MEX:israel reyes": "img/figuras/MEX4.png",
		"MEX:jesus gallardo": "img/figuras/MEX9.png",
		"MEX:johan vasquez": "img/figuras/MEX8.png",
		"MEX:orbelin pineda": "img/figuras/MEX13.png",
		"MEX:raul jimenez": "img/figuras/MEX24.png",
		"MEX:roberto alvarado": "img/figuras/MEX19.png",
		"MEX:santiago gimenez": "img/figuras/MEX23.png",
		"NED:bart verbruggen": "img/figuras/NED1.png",
		"NED:cody gakpo": "img/figuras/NED23.png",
		"NED:denzel dumfries": "img/figuras/NED8.png",
		"NED:frenkie de jong": "img/figuras/NED12.png",
		"NED:jan paul van hecke": "img/figuras/NED7.png",
		"NED:justin kluivert": "img/figuras/NED24.png",
		"NED:memphis depay": "img/figuras/NED22.png",
		"NED:micky van de ven": "img/figuras/NED10.png",
		"NED:nathan ake": "img/figuras/NED4.png",
		"NED:ryan gravenberch": "img/figuras/NED11.png",
		"NED:teun koopmeiners": "img/figuras/NED15.png",
		"NED:virgil van dijk": "img/figuras/NED5.png",
		"NED:wout weghorst": "img/figuras/NED26.png",
		"NOR:alexander sorloth": "img/figuras/NOR24.png",
		"NOR:antonio nusa": "img/figuras/NOR20.png",
		"NOR:erling haaland": "img/figuras/NOR25.png",
		"NOR:julian ryerson": "img/figuras/NOR12.png",
		"NOR:oscar bob": "img/figuras/NOR22.png",
		"NOR:patrick berg": "img/figuras/NOR14.png",
		"NOR:sander berge": "img/figuras/NOR15.png",
		"NOR:torbjorn heggem": "img/figuras/NOR9.png",
		"PAR:alejandro romero gamarra": "img/figuras/PAR17.png",
		"PAR:andres cubas": "img/figuras/PAR15.png",
		"PAR:antonio sanabria": "img/figuras/PAR26.png",
		"PAR:damian bobadilla": "img/figuras/PAR13.png",
		"PAR:diego gomez": "img/figuras/PAR20.png",
		"PAR:fabian balbuena": "img/figuras/PAR11.png",
		"PAR:gustavo gomez": "img/figuras/PAR6.png",
		"PAR:jr alonso": "img/figuras/PAR7.png",
		"PAR:julio enciso": "img/figuras/PAR25.png",
		"PAR:junior alonso": "img/figuras/PAR7.png",
		"PAR:matias galarza": "img/figuras/PAR16.png",
		"PAR:miguel almiron": "img/figuras/PAR24.png",
		"PAR:omar alderete": "img/figuras/PAR9.png",
		"PAR:orlando gill": "img/figuras/PAR1.png",
		"PAR:ramon sosa": "img/figuras/PAR19.png",
		"POR:bernardo silva": "img/figuras/POR19.png",
		"POR:bruno fernandes": "img/figuras/POR18.png",
		"POR:cristiano ronaldo": "img/figuras/POR27.png",
		"POR:diogo costa": "img/figuras/POR1.png",
		"POR:diogo dalot": "img/figuras/POR5.png",
		"POR:francisco trincao": "img/figuras/POR21.png",
		"POR:joao cancelo": "img/figuras/POR8.png",
		"POR:joao felix": "img/figuras/POR20.png",
		"POR:joao neves": "img/figuras/POR16.png",
		"POR:jose sa": "img/figuras/POR2.png",
		"POR:nuno mendes": "img/figuras/POR9.png",
		"POR:pedro neto": "img/figuras/POR23.png",
		"POR:rafael leao": "img/figuras/POR24.png",
		"POR:ruben dias": "img/figuras/POR12.png",
		"POR:ruben neves": "img/figuras/POR14.png",
		"POR:vitinha": "img/figuras/POR17.png",
		"QAT:almoez ali": "img/figuras/QAT21.png",
		"QAT:assim madibo": "img/figuras/QAT12.png",
		"QAT:boualem khoukhi": "img/figuras/QAT5.png",
		"QAT:edmilson jr": "img/figuras/QAT22.png",
		"QAT:edmilson junior": "img/figuras/QAT22.png",
		"QAT:karim boudiaf": "img/figuras/QAT15.png",
		"QAT:meshaal barsham": "img/figuras/QAT2.png",
		"QAT:pedro miguel": "img/figuras/QAT9.png",
		"RSA:aubrey modiba": "img/figuras/RSA8.png",
		"RSA:khuliso mudau": "img/figuras/RSA4.png",
		"RSA:khulumani ndamane": "img/figuras/RSA7.png",
		"RSA:lyle foster": "img/figuras/RSA25.png",
		"RSA:mbekezeli mbokazi": "img/figuras/RSA14.png",
		"RSA:oswin appollis": "img/figuras/RSA19.png",
		"RSA:ronwen williams": "img/figuras/RSA1.png",
		"RSA:sipho chaine": "img/figuras/RSA3.png",
		"RSA:teboho mokoena": "img/figuras/RSA15.png",
		"RSA:thalente mbatha": "img/figuras/RSA16.png",
		"SCO:aaron hickey": "img/figuras/SCO6.png",
		"SCO:angus gunn": "img/figuras/SCO2.png",
		"SCO:anthony ralston": "img/figuras/SCO10.png",
		"SCO:ben gannon doak": "img/figuras/SCO17.png",
		"SCO:che adams": "img/figuras/SCO22.png",
		"SCO:grant hanley": "img/figuras/SCO4.png",
		"SCO:jack hendry": "img/figuras/SCO5.png",
		"SCO:john mcginn": "img/figuras/SCO19.png",
		"SCO:john souttar": "img/figuras/SCO12.png",
		"SCO:kenny mclean": "img/figuras/SCO20.png",
		"SCO:kieran tierney": "img/figuras/SCO13.png",
		"SCO:lewis ferguson": "img/figuras/SCO16.png",
		"SCO:lyndon dykes": "img/figuras/SCO23.png",
		"SCO:ryan christie": "img/figuras/SCO14.png",
		"SCO:scott mckenna": "img/figuras/SCO8.png",
		"SCO:scott mctominay": "img/figuras/SCO21.png",
		"SEN:edouard mendy": "img/figuras/SEN1.png",
		"SEN:krepin diatta": "img/figuras/SEN4.png",
		"SEN:lamine camara": "img/figuras/SEN16.png",
		"SEN:sadio mane": "img/figuras/SEN21.png",
		"SEN:yehvann diouf": "img/figuras/SEN3.png",
		"SUI:ardon jashari": "img/figuras/SUI17.png",
		"SUI:aurele amenda": "img/figuras/SUI5.png",
		"SUI:breel embolo": "img/figuras/SUI22.png",
		"SUI:denis zakaria": "img/figuras/SUI13.png",
		"SUI:gregor kobel": "img/figuras/SUI2.png",
		"SUI:johan manzambi": "img/figuras/SUI18.png",
		"SUI:manuel akanji": "img/figuras/SUI4.png",
		"SUI:nico elvedi": "img/figuras/SUI7.png",
		"SUI:remo freuler": "img/figuras/SUI16.png",
		"SUI:ruben vargas": "img/figuras/SUI26.png",
		"SUI:yvon mvogo": "img/figuras/SUI3.png",
		"SWE:alexander isak": "img/figuras/SWE20.png",
		"SWE:anthony elanga": "img/figuras/SWE23.png",
		"SWE:daniel svensson": "img/figuras/SWE9.png",
		"SWE:gabriel gudmundsson": "img/figuras/SWE7.png",
		"SWE:mattias svanberg": "img/figuras/SWE18.png",
		"SWE:viktor gyokeres": "img/figuras/SWE21.png",
		"SWE:viktor johansson": "img/figuras/SWE2.png",
		"TUR:abdulkerim bardakci": "img/figuras/TUR9.png",
		"TUR:arda guler": "img/figuras/TUR13.png",
		"TUR:caglar soyuncu": "img/figuras/TUR11.png",
		"TUR:cakir": "img/figuras/TUR2.png",
		"TUR:can uzun": "img/figuras/TUR14.png",
		"TUR:celik": "img/figuras/TUR6.png",
		"TUR:demiral": "img/figuras/TUR5.png",
		"TUR:hakan calhanoglu": "img/figuras/TUR16.png",
		"TUR:irfan can kahveci": "img/figuras/TUR26.png",
		"TUR:kaan ayhan": "img/figuras/TUR18.png",
		"TUR:kadioglu": "img/figuras/TUR4.png",
		"TUR:kerem akturkoglu": "img/figuras/TUR22.png",
		"TUR:yunus akgun": "img/figuras/TUR23.png",
		"URU:darwin nunez": "img/figuras/uru-11-darwin nunez.jpg",
		"URU:facundo pellistri": "img/figuras/URU21.png",
		"URU:federico valverde": "img/figuras/URU15.png",
		"URU:federico vinas": "img/figuras/URU25.png",
		"URU:giorgian de arrascaeta": "img/figuras/URU18.png",
		"URU:guillermo varela": "img/figuras/URU4.png",
		"URU:jose maria gimenez": "img/figuras/URU6.png",
		"URU:manuel ugarte": "img/figuras/URU12.png",
		"URU:rodrigo bentancur": "img/figuras/URU14.png",
		"URU:ronald araujo": "img/figuras/URU5.png",
		"URU:santiago mele": "img/figuras/URU3.png",
		"URU:sebastian caceres": "img/figuras/URU8.png",
		"URU:sergio rochet": "img/figuras/URU1.png",
		"USA:alex freeman": "img/figuras/USA6.png",
		"USA:antonee robinson": "img/figuras/USA10.png",
		"USA:brenden aaronson": "img/figuras/USA18.png",
		"USA:chris richards": "img/figuras/USA9.png",
		"USA:christian pulisic": "img/figuras/USA19.png",
		"USA:folarin balogun": "img/figuras/USA24.png",
		"USA:mark mckenzie": "img/figuras/USA7.png",
		"USA:ricardo pepi": "img/figuras/USA25.png",
		"USA:tyler adams": "img/figuras/USA14.png",
		"USA:weston mckennie": "img/figuras/USA16.png"
	}
};

const verifiedPlayerImagesByName = {
	"ALG:aissa mandi": "img/figuras/ALG9.png",
	"ALG:alexis guendouz": "img/figuras/alg-21-alexis-guendouz.png",
	"ALG:anis hadj moussa": "img/figuras/ALG26.png",
	"ALG:anthony mandrea": "img/figuras/alg-23-anthony-mandrea.png",
	"ALG:fares chaibi": "img/figuras/ALG17.png",
	"ALG:nabil bentaleb": "img/figuras/ALG14.png",
	"ALG:said benrahma": "img/figuras/alg-14-said-benrahma.png",
	"ALG:youcef atal": "img/figuras/alg-15-youcef-atal.png",
	"ALG:zinedine belaid": "img/figuras/alg-18-zinedine-belaid.png",
	"ARG:cristian romero": "img/figuras/ARG4.png",
	"ARG:emiliano martinez": "img/figuras/ARG1.png",
	"ARG:leandro paredes": "img/figuras/ARG15.png",
	"ARG:leonardo balerdi": "img/figuras/ARG9.png",
	"ARG:nahuel molina": "img/figuras/ARG6.png",
	"ARG:nicolas otamendi": "img/figuras/ARG5.png",
	"ARG:nicolas tagliafico": "img/figuras/ARG7.png",
	"BIH:armin gigovic": "img/figuras/BIH19.png",
	"BIH:benjamin tahirovic": "img/figuras/BIH17.png",
	"BIH:dzenis burnic": "img/figuras/BIH15.png",
	"BIH:edin dzeko": "img/figuras/BIH26.png",
	"BIH:esmir bajraktarevic": "img/figuras/BIH21.png",
	"BIH:haris tabakovic": "img/figuras/BIH25.png",
	"BIH:nikola katic": "img/figuras/BIH7.png",
	"BIH:nikola vasilj": "img/figuras/BIH1.png",
	"BIH:samed bazdar": "img/figuras/BIH24.png",
	"BRA:alisson": "img/figuras/BRA1.png",
	"BRA:bruno guimaraes": "img/figuras/BRA14.png",
	"BRA:casemiro": "img/figuras/BRA13.png",
	"BRA:danilo": "img/figuras/BRA10.png",
	"BRA:gabriel magalhaes": "img/figuras/BRA5.png",
	"BRA:gabriel martinelli": "img/figuras/BRA24.png",
	"BRA:marquinhos": "img/figuras/BRA4.png",
	"BRA:matheus cunha": "img/figuras/BRA20.png",
	"BRA:paqueta": "img/figuras/BRA17.png",
	"BRA:raphinha": "img/figuras/BRA19.png",
	"BRA:vinicius junior": "img/figuras/BRA18.png",
	"BRA:wesley": "img/figuras/BRA9.png",
	"CAN:cyle larin": "img/figuras/CAN25.png",
	"CAN:dayne st clair": "img/figuras/CAN3.png",
	"CAN:jonathan david": "img/figuras/CAN23.png",
	"CAN:tajon buchanan": "img/figuras/CAN14.png",
	"CIV:amad diallo": "img/figuras/CIV20.png",
	"CIV:emmanuel agbadou": "img/figuras/CIV4.png",
	"CIV:evann guessand": "img/figuras/CIV23.png",
	"CIV:franck kessie": "img/figuras/CIV15.png",
	"CIV:ibrahim sangare": "img/figuras/CIV16.png",
	"CIV:oumar diakite": "img/figuras/CIV21.png",
	"CIV:ousmane diomande": "img/figuras/CIV6.png",
	"CIV:seko fofana": "img/figuras/CIV12.png",
	"CIV:simon adingra": "img/figuras/CIV18.png",
	"CIV:wilfried singo": "img/figuras/CIV11.png",
	"COL:camilo vargas": "img/figuras/COL2.png",
	"COL:daniel munoz": "img/figuras/COL4.png",
	"COL:david ospina": "img/figuras/COL3.png",
	"COL:davinson sanchez": "img/figuras/COL6.png",
	"COL:james rodriguez": "img/figuras/COL13.png",
	"COL:jefferson lerma": "img/figuras/COL14.png",
	"COL:jhon arias": "img/figuras/COL15.png",
	"COL:jhon cordoba": "img/figuras/COL24.png",
	"COL:jhon lucumi": "img/figuras/COL7.png",
	"COL:johan mojica": "img/figuras/COL11.png",
	"COL:jorge carrascal": "img/figuras/COL16.png",
	"COL:juan fernando quintero": "img/figuras/COL17.png",
	"COL:kevin castano": "img/figuras/COL19.png",
	"COL:luis diaz": "img/figuras/COL22.png",
	"COL:luis suarez": "img/figuras/COL23.png",
	"COL:richard rios": "img/figuras/COL18.png",
	"COL:santiago arias": "img/figuras/COL5.png",
	"CRO:dominik livakovic": "img/figuras/cro_01_dominik-livakovi.png",
	"CRO:josip stanisic": "img/figuras/CRO7.png",
	"CRO:josko gvardiol": "img/figuras/CRO4.png",
	"CRO:luka modric": "img/figuras/CRO11.png",
	"CRO:marco pasalic": "img/figuras/CRO24.png",
	"CRO:mario pasalic": "img/figuras/CRO13.png",
	"CRO:martin baturina": "img/figuras/CRO16.png",
	"CZE:david zima": "img/figuras/CZE7.png",
	"CZE:jindrich stanek": "img/figuras/CZE3.png",
	"CZE:lukas provod": "img/figuras/CZE22.png",
	"CZE:matej kovar": "img/figuras/CZE2.png",
	"CZE:michal sadilek": "img/figuras/CZE13.png",
	"CZE:pavel ulc": "img/figuras/CZE19.png",
	"CZE:toma chory": "img/figuras/CZE26.png",
	"CZE:toma soucek": "img/figuras/CZE12.png",
	"CZE:tomas holes": "img/figuras/CZE8.png",
	"CZE:vladimir coufal": "img/figuras/CZE11.png",
	"ECU:alan franco": "img/figuras/ECU15.png",
	"ECU:alan minda": "img/figuras/ecu_05_alan-minda.png",
	"ECU:angelo preciado": "img/figuras/ECU11.png",
	"ECU:enner valencia": "img/figuras/ECU20.png",
	"ECU:gonzalo plata": "img/figuras/ECU18.png",
	"ECU:gonzalo valle": "img/figuras/ECU3.png",
	"ECU:joel ordonez": "img/figuras/ECU6.png",
	"ECU:john veboah": "img/figuras/ecu_15_john-veboah.png",
	"ECU:kendry paez": "img/figuras/ECU16.png",
	"ECU:kevin rodriguez": "img/figuras/ECU24.png",
	"ECU:leonardo campana": "img/figuras/ecu_08_leonardo-campana.png",
	"ECU:moises caicedo": "img/figuras/ECU12.png",
	"ECU:nilson angulo": "img/figuras/ECU17.png",
	"ECU:pervis estupinan": "img/figuras/ECU9.png",
	"ECU:piero hincapie": "img/figuras/ECU5.png",
	"ECU:willian pacho": "img/figuras/ECU4.png",
	"ENG:anthony gordon": "img/figuras/ENG23.png",
	"ENG:bukayo saka": "img/figuras/ENG20.png",
	"ENG:dan burn": "img/figuras/ENG9.png",
	"ENG:declan rice": "img/figuras/ENG15.png",
	"ENG:ezri konsa": "img/figuras/ENG8.png",
	"ENG:harry kane": "img/figuras/ENG24.png",
	"ENG:john stones": "img/figuras/ENG6.png",
	"ENG:jordan henderson": "img/figuras/ENG13.png",
	"ENG:jordan pickford": "img/figuras/ENG1.png",
	"ENG:jude bellingham": "img/figuras/ENG18.png",
	"ENG:marc guehi": "img/figuras/ENG7.png",
	"ENG:marcus rashford": "img/figuras/ENG22.png",
	"ENG:morgan rogers": "img/figuras/ENG19.png",
	"ENG:ollie watkins": "img/figuras/ENG25.png",
	"ENG:reece james": "img/figuras/ENG4.png",
	"ESP:aymeric laporte": "img/figuras/ESP8.png",
	"ESP:dani olmo": "img/figuras/ESP16.png",
	"ESP:fabian ruiz": "img/figuras/ESP14.png",
	"ESP:ferran torres": "img/figuras/ESP23.png",
	"ESP:lamine yamal": "img/figuras/ESP20.png",
	"ESP:marc cucurella": "img/figuras/ESP6.png",
	"ESP:martin zubimendi": "img/figuras/ESP13.png",
	"ESP:mikel merino": "img/figuras/ESP19.png",
	"ESP:nico williams": "img/figuras/ESP21.png",
	"ESP:pedri": "img/figuras/ESP15.png",
	"ESP:pedro porro": "img/figuras/ESP4.png",
	"FRA:bradley barcola": "img/figuras/FRA22.png",
	"FRA:desire doue": "img/figuras/FRA21.png",
	"FRA:kylian mbappe": "img/figuras/FRA18.png",
	"FRA:mike maignan": "img/figuras/FRA1.png",
	"FRA:ousmane dembele": "img/figuras/FRA20.png",
	"GER:david raum": "img/figuras/GER8.png",
	"GER:florian wirtz": "img/figuras/GER21.png",
	"GER:jamal musiala": "img/figuras/GER14.png",
	"GER:jonathan tah": "img/figuras/GER11.png",
	"GER:joshua kimmich": "img/figuras/ger_10_joshua-kimmich.png",
	"GER:leon goretzka": "img/figuras/GER19.png",
	"GER:nico schlotterbeck": "img/figuras/GER10.png",
	"GER:waldemar anton": "img/figuras/GER4.png",
	"HAI:carlens arcus": "img/figuras/HAI4.png",
	"HAI:danley jean jacques": "img/figuras/HAI14.png",
	"HAI:derrick etienne": "img/figuras/HAI21.png",
	"HAI:duckens nazon": "img/figuras/HAI23.png",
	"HAI:duke lacroix": "img/figuras/HAI6.png",
	"HAI:frantzdy pierrot": "img/figuras/HAI24.png",
	"HAI:hannes delcroix": "img/figuras/HAI10.png",
	"HAI:jean kevin duverne": "img/figuras/hai_15_jean-kevin-duverne.png",
	"HAI:jean ricner bellegarde": "img/figuras/hai_16_jean-ricner-bellegarde.png",
	"HAI:leverton pierre": "img/figuras/HAI12.png",
	"HAI:martin experience": "img/figuras/HAI7.png",
	"HAI:ricardo ade": "img/figuras/HAI9.png",
	"HAI:ruben providence": "img/figuras/HAI19.png",
	"JPN:ayase ueda": "img/figuras/JPN26.png",
	"JPN:ayumu seko": "img/figuras/JPN8.png",
	"JPN:junya ito": "img/figuras/JPN17.png",
	"JPN:kaishu sano": "img/figuras/JPN13.png",
	"JPN:keito nakamura": "img/figuras/jpn_02_keito-nakamura.png",
	"JPN:ritsu doan": "img/figuras/JPN25.png",
	"JPN:shogo taniguchi": "img/figuras/JPN5.png",
	"JPN:takefusa kubo": "img/figuras/JPN21.png",
	"JPN:zion suzuki": "img/figuras/JPN1.png",
	"KOR:dong gyeong lee": "img/figuras/kor_12_donggyeong-lee.png",
	"KOR:han beom lee": "img/figuras/kor_05_hanbeom-lee.png",
	"KOR:hee chan hwang": "img/figuras/kor_18_heechan-hwang.png",
	"KOR:heung min son": "img/figuras/kor_03_heungmin-son.png",
	"KOR:hyeon gyu oh": "img/figuras/kor_17_hyeongyu-oh.png",
	"KOR:hyeon woo jo": "img/figuras/kor_01_hyeonwoo-jo.png",
	"KOR:in beom hwang": "img/figuras/kor_09_inbeom-hwang.png",
	"KOR:jae sung lee": "img/figuras/kor_08_jaesung-lee.png",
	"KOR:jens castrop": "img/figuras/KOR9.png",
	"KOR:kang in lee": "img/figuras/kor_10_kangin-lee.png",
	"KOR:kim min jae": "img/figuras/KOR5.png",
	"KOR:kim seung gyu": "img/figuras/KOR1.png",
	"KOR:seung ho paik": "img/figuras/kor_16_seungho-paik.png",
	"KOR:tae seok lee": "img/figuras/kor_06_taeseok-lee.png",
	"KOR:young woo seol": "img/figuras/kor_14_youngwoo0-seol.png",
	"MAR:achraf hakimi": "img/figuras/MAR4.png",
	"MAR:ayoub el kaabi": "img/figuras/MAR22.png",
	"MAR:bilal el khannouss": "img/figuras/MAR16.png",
	"MAR:brahim diaz": "img/figuras/MAR20.png",
	"NED:bart verbruggen": "img/figuras/NED1.png",
	"NED:denzel dumfries": "img/figuras/NED8.png",
	"NED:frenkie de jong": "img/figuras/NED12.png",
	"NED:jan paul van hecke": "img/figuras/NED7.png",
	"NED:jurrien timber": "img/figuras/NED9.png",
	"NED:micky van de ven": "img/figuras/NED10.png",
	"NED:nathan ake": "img/figuras/NED4.png",
	"NED:ryan gravenberch": "img/figuras/NED11.png",
	"NED:teun koopmeiners": "img/figuras/NED15.png",
	"NED:virgil van dijk": "img/figuras/NED5.png",
	"NOR:julian ryerson": "img/figuras/NOR12.png",
	"NOR:kristoffer vassbakk ajer": "img/figuras/NOR4.png",
	"NOR:marcus holmgren": "img/figuras/NOR8.png",
	"NOR:morten thorsby": "img/figuras/nor_09_morten-thorsby.png",
	"NOR:oscar bobb": "img/figuras/NOR22.png",
	"NOR:patrick berg": "img/figuras/NOR14.png",
	"NOR:sander berge": "img/figuras/NOR15.png",
	"PAR:andres cubas": "img/figuras/PAR15.png",
	"PAR:angel romero": "img/figuras/par_04_angel-romero.png",
	"PAR:antonio sanabria": "img/figuras/PAR26.png",
	"PAR:damian bobadilla": "img/figuras/PAR13.png",
	"PAR:diego gomez": "img/figuras/PAR20.png",
	"PAR:fabian balbuena": "img/figuras/PAR11.png",
	"PAR:gustavo gomez": "img/figuras/PAR6.png",
	"PAR:jr alonso": "img/figuras/PAR7.png",
	"PAR:juan jose caceres": "img/figuras/PAR4.png",
	"PAR:julio enciso": "img/figuras/PAR25.png",
	"PAR:mathias villasanti": "img/figuras/par_08_mathias-villasanti.png",
	"PAR:matias galarza fonda": "img/figuras/PAR16.png",
	"PAR:miguel almiron": "img/figuras/PAR24.png",
	"PAR:omar alderete": "img/figuras/PAR9.png",
	"POR:diogo costa": "img/figuras/POR1.png",
	"POR:joao cancelo": "img/figuras/POR8.png",
	"POR:joao felix": "img/figuras/POR20.png",
	"POR:joao neves": "img/figuras/POR16.png",
	"POR:jose sa": "img/figuras/POR2.png",
	"POR:pedro neto": "img/figuras/POR23.png",
	"POR:rafael leao": "img/figuras/POR24.png",
	"POR:trincao": "img/figuras/POR21.png",
	"QAT:akram afif": "img/figuras/QAT20.png",
	"QAT:boualem khoukhi": "img/figuras/QAT5.png",
	"QAT:meshaal barsham": "img/figuras/QAT2.png",
	"QAT:mohammed waad": "img/figuras/qat_08_mohammed waad.png",
	"RSA:khuliso mudau": "img/figuras/RSA4.png",
	"RSA:khulumani ndamane": "img/figuras/RSA7.png",
	"RSA:lyle foster": "img/figuras/RSA25.png",
	"RSA:mbekezeli mbokazi": "img/figuras/RSA14.png",
	"RSA:oswin appollis": "img/figuras/RSA19.png",
	"RSA:ronwen williams": "img/figuras/RSA1.png",
	"RSA:samukele kabini": "img/figuras/rsa_02_samukele-kabini.png",
	"RSA:sipho chaine": "img/figuras/RSA3.png",
	"RSA:teboho mokoena": "img/figuras/RSA15.png",
	"RSA:thalente mbatha": "img/figuras/RSA16.png",
	"SCO:angus gunn": "img/figuras/SCO2.png",
	"SCO:ben gannon doak": "img/figuras/SCO17.png",
	"SCO:billy gilmour": "img/figuras/sco_15_billy-gilmour.png",
	"SCO:che adams": "img/figuras/SCO22.png",
	"SCO:jack hendry": "img/figuras/SCO5.png",
	"SCO:john mcginn": "img/figuras/SCO19.png",
	"SCO:john souttar": "img/figuras/SCO12.png",
	"SCO:kenny mclean": "img/figuras/SCO20.png",
	"SCO:kieran tierney": "img/figuras/SCO13.png",
	"SCO:lewis ferguson": "img/figuras/SCO16.png",
	"SCO:scott mckenna": "img/figuras/SCO8.png",
	"SEN:sadio mane": "img/figuras/SEN21.png",
	"SUI:denis zakaria": "img/figuras/SUI13.png",
	"SUI:gregor kobel": "img/figuras/SUI2.png",
	"SUI:johan manzambi": "img/figuras/SUI18.png",
	"SUI:ruben vargas": "img/figuras/SUI26.png",
	"SUI:yvon mvogo": "img/figuras/SUI3.png",
	"SWE:alexander isak": "img/figuras/SWE20.png",
	"SWE:anthony elanga": "img/figuras/SWE23.png",
	"SWE:daniel svensson": "img/figuras/SWE9.png",
	"SWE:emil holm": "img/figuras/swe_14_emil-holm.png",
	"SWE:gabriel gudmundsson": "img/figuras/SWE7.png",
	"SWE:gustaf lagerbielke": "img/figuras/swe_17_gustaf-lagerbielke.png",
	"SWE:jesper karlstrom": "img/figuras/swe_06_jesper-karlstrom.png",
	"SWE:lucas bergvall": "img/figuras/swe_01_lucas-bergvall.png",
	"SWE:mattias svanberg": "img/figuras/SWE18.png",
	"SWE:victor lindelof": "img/figuras/swe_10_victor-nilsson-lindelof.png",
	"SWE:viktor johansson": "img/figuras/SWE2.png",
	"TUR:yunus akgun": "img/figuras/TUR23.png",
	"URU:darwin nunez": "img/figuras/uru-11-darwin nunez.jpg",
	"URU:federico valverde": "img/figuras/URU15.png",
	"URU:federico vinas": "img/figuras/URU25.png",
	"URU:giorgian de arrascaeta": "img/figuras/URU18.png",
	"URU:guillermo varela": "img/figuras/URU4.png",
	"URU:jose maria gimenez": "img/figuras/URU6.png",
	"URU:manuel ugarte": "img/figuras/URU12.png",
	"URU:mathias olivera": "img/figuras/URU9.png",
	"URU:nahitan nandez": "img/figuras/uru_14_nahitan-nandez.png",
	"URU:rodrigo aguirre": "img/figuras/URU24.png",
	"URU:rodrigo bentancur": "img/figuras/URU14.png",
	"URU:ronald araujo": "img/figuras/URU5.png",
	"URU:santiago mele": "img/figuras/URU3.png",
	"URU:sebastian caceres": "img/figuras/URU8.png",
	"USA:alex freeman": "img/figuras/USA6.png",
	"USA:antonee robinson": "img/figuras/USA10.png",
	"USA:chris richards": "img/figuras/USA9.png",
	"USA:christian pulisic": "img/figuras/USA19.png",
	"USA:folarin balogun": "img/figuras/USA24.png",
	"USA:haji wright": "img/figuras/USA26.png",
	"USA:malik tillman": "img/figuras/USA21.png",
	"USA:mark mckenzie": "img/figuras/USA7.png",
	"USA:matt freese": "img/figuras/USA1.png",
	"USA:ricardo pepi": "img/figuras/USA25.png",
	"USA:tim ream": "img/figuras/USA8.png",
	"USA:tyler adams": "img/figuras/USA14.png",
	"USA:weston mckennie": "img/figuras/USA16.png"
};

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

const livePlayerDetails = {
  "anthony mandrea": {
    "name": "Anthony Mandrea",
    "birthDate": "1996-12-25",
    "height": "1.86 m",
    "club": "OGC Nice",
    "position": "goalkeeper"
  },
  "luca zidane": {
    "name": "Luca Zidane",
    "birthDate": "1998-05-13",
    "height": "1.83 m",
    "club": "Granada CF",
    "position": "goalkeeper",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Real_Madrid_C.F._the_Winner_Of_The_Champions_League_in_2018_(1)_(Luca).jpg"
  },
  "kilian belazzoug": {
    "name": "Kilian Belazzoug",
    "birthDate": "2006-07-18"
  },
  "ramy bensebaini": {
    "name": "Ramy Bensebaini",
    "birthDate": "1995-04-16",
    "height": "1.88 m",
    "club": "Borussia Mönchengladbach",
    "position": "centre-back",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Stade_rennais_vs_USM_Alger,_July_16th_2016_-_25.jpg"
  },
  "rayan ait-nouri": {
    "name": "Rayan Aït-Nouri",
    "birthDate": "2001-06-06",
    "height": "1.80 m",
    "club": "France national under-21 association football team",
    "position": "full-back",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Rayan_Aït-Nouri_playing_for_Algeria_in_2024_(cropped).jpg"
  },
  "mohamed amine tougai": {
    "name": "Mohamed Amine Tougai",
    "birthDate": "2000-01-22",
    "club": "Espérance Sportive de Tunis",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Mohamed_Amine_Tougai.jpg"
  },
  "jaouen hadjam": {
    "name": "Jaouen Hadjam",
    "birthDate": "2003-03-26",
    "height": "1.84 m",
    "club": "BSC Young Boys",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/RC_Lens_-_FC_Nantes_(28-10-2023)_10.jpg"
  },
  "mohamed farsi": {
    "name": "Mohamed Farsi",
    "birthDate": "1999-12-16",
    "height": "1.78 m",
    "club": "Columbus Crew",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Mohamed_Farsi_NYCFC_v_Columbus_10_May_2026-35_(cropped).jpg"
  },
  "ismael bennacer": {
    "name": "Ismaël Bennacer",
    "birthDate": "1997-12-01",
    "height": "1.75 m",
    "club": "Algeria men's national football team",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/BennacerLeB2022.jpg"
  },
  "houssem aouar": {
    "name": "Houssem Aouar",
    "birthDate": "1998-06-30",
    "height": "1.75 m",
    "club": "AS Roma",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Houssem_Aouar_2017.jpg"
  },
  "hicham boudaoui": {
    "name": "Hicham Boudaoui",
    "birthDate": "1999-09-23",
    "height": "1.75 m",
    "club": "Paradou AC",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Boudaoui_asse_ogcn_2425.png"
  },
  "ramiz zerrouki": {
    "name": "Ramiz Zerrouki",
    "birthDate": "1998-05-26",
    "height": "1.83 m",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Ramiz_zerrouki-1672746224.jpg"
  },
  "nabil bentaleb": {
    "name": "Nabil Bentaleb",
    "birthDate": "1994-11-24",
    "height": "1.87 m",
    "club": "Algeria men's national football team",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Nabil_Bentaleb.jpg"
  },
  "ibrahim maza": {
    "name": "Ibrahim Maza",
    "birthDate": "2005-11-24",
    "height": "1.77 m",
    "position": "forward"
  },
  "fares chaibi": {
    "name": "Farès Chaïbi",
    "birthDate": "2002-11-28",
    "height": "1.83 m",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/World_Cup_Qualification_Africa_Guinea_v_Algeria_14_(Farès_Chaïbi).jpg"
  },
  "riyad mahrez": {
    "name": "Riyad Mahrez",
    "birthDate": "1991-02-21",
    "height": "1.81 m",
    "club": "Algeria men's national football team",
    "position": "wing half",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Mahrez_2021.jpg"
  },
  "said benrahma": {
    "name": "Saïd Benrahma",
    "birthDate": "1995-08-10",
    "height": "1.72 m",
    "club": "West Ham United F.C.",
    "position": "wing half",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Saïd_Benrahma_-_20240326.jpg"
  },
  "amine gouiri": {
    "name": "Amine Gouiri",
    "birthDate": "2000-02-16",
    "height": "1.80 m",
    "club": "OGC Nice",
    "position": "forward",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/RC_Lens_-_OGC_Nice_(10-04-2022)_25_Amine_Gouiri.jpg"
  },
  "baghdad bounedjah": {
    "name": "Baghdad Bounedjah",
    "birthDate": "1991-11-24",
    "height": "1.83 m",
    "club": "Al Sadd Sports Club",
    "position": "forward",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/BaghdadBounedjah2018.jpg"
  },
  "mohamed amoura": {
    "name": "Mohamed Amoura",
    "birthDate": "2000-05-09",
    "height": "1.68 m",
    "club": "VfL Wolfsburg",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Mohammed_Amoura_training_against_Mozambique.png"
  },
  "amin chiakha": {
    "name": "Amin Chiakha",
    "birthDate": "2006-03-12",
    "height": "1.91 m"
  },
  "emiliano martinez": {
    "name": "Emiliano Martínez",
    "birthDate": "1992-09-01",
    "height": "1.95 m",
    "club": "Aston Villa F.C.",
    "position": "goalkeeper",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/St._Louis_City_vs_Aston_Villa_(Jul_2025)_14_(Emiliano_Martínez).jpg"
  },
  "geronimo rulli": {
    "name": "Gerónimo Rulli",
    "birthDate": "1992-05-20",
    "height": "1.89 m",
    "club": "Olympique de Marseille",
    "position": "goalkeeper",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Rulli_asse_om_2425.png"
  },
  "juan musso": {
    "name": "Juan Musso",
    "birthDate": "1994-05-06",
    "height": "1.91 m",
    "club": "Atlético Madrid",
    "position": "goalkeeper",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Musso_Udinese.png"
  },
  "walter benitez": {
    "name": "Walter Benítez",
    "birthDate": "1993-01-19",
    "height": "1.91 m",
    "club": "OGC Nice",
    "position": "goalkeeper",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Walter_benitez_2016.jpg"
  },
  "facundo cambeses": {
    "name": "Facundo Cambeses",
    "birthDate": "1997-04-09",
    "height": "1.85 m",
    "club": "Club Atlético Banfield",
    "position": "goalkeeper",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Facundo_Cambeses_(cropped).jpg"
  },
  "santiago beltran": {
    "name": "Santiago Beltrán",
    "birthDate": "2004-10-04"
  },
  "agustin giay": {
    "name": "Agustín Giay",
    "birthDate": "2004-01-16",
    "height": "1.80 m",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Entrenamiento_Argentina_Sub20_previo_al_mundial_-_BugWarp_(36).jpg"
  },
  "gonzalo montiel": {
    "name": "Gonzalo Montiel",
    "birthDate": "1997-01-01",
    "height": "1.75 m",
    "club": "Club Atlético River Plate",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Palestino_-_River_Plate_20190424_05.jpg"
  },
  "nicolas capaldo": {
    "name": "Nicolás Capaldo",
    "birthDate": "1997-09-14",
    "height": "1.77 m",
    "club": "Boca Juniors",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/RB_Salzburg_gegen_DAC_Dunajská_Streda_(Testspiel_25._Juni_2021)_10.jpg"
  },
  "kevin mac allister": {
    "name": "Kevin Mac Allister",
    "birthDate": "1997-11-07",
    "height": "1.75 m",
    "club": "Royale Union Saint-Gilloise",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Go_Ahead_Eagles_-_Royale_Union_Saint-Gillloise_-_53852891619_(Kevin_Mac_Allister).jpg"
  },
  "lucas martinez quarta": {
    "name": "Lucas Martínez Quarta",
    "birthDate": "1996-05-10",
    "height": "1.81 m",
    "club": "Club Atlético River Plate",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Lucas_Martínez_Quarta_2022.jpg"
  },
  "marcos senesi": {
    "name": "Marcos Senesi",
    "birthDate": "1997-05-10",
    "height": "1.84 m",
    "club": "San Lorenzo de Almagro",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Marcos_Senesi_2022.jpg"
  },
  "lisandro martinez": {
    "name": "Lisandro Martínez",
    "birthDate": "1998-01-18",
    "height": "1.75 m",
    "club": "Manchester United F.C.",
    "position": "centre-back",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Lisandro_Martinez_2022.jpg"
  },
  "nicolas otamendi": {
    "name": "Nicolás Otamendi",
    "birthDate": "1988-02-12",
    "height": "1.83 m",
    "club": "S.L. Benfica",
    "position": "centre-back",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Argentina_team_in_St._Petersburg_(cropped)_Otamendi.jpg"
  },
  "german pezzella": {
    "name": "Germán Pezzella",
    "birthDate": "1991-06-27",
    "height": "1.87 m",
    "club": "Real Betis Balompié",
    "position": "centre-back",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Germán_Pezella_en_los_premios_Jorge_Newbery_2024_(cropped).jpg"
  },
  "lautaro di lollo": {
    "name": "Lautaro Di Lollo",
    "birthDate": "2004-03-10",
    "height": "1.87 m",
    "club": "Boca Juniors",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Lautaro_Di_Lollo_(cropped).jpg"
  },
  "zaid romero": {
    "name": "Zaid Romero",
    "birthDate": "1999-12-15",
    "height": "1.95 m",
    "club": "Godoy Cruz Antonio Tomba",
    "position": "defender"
  },
  "facundo medina": {
    "name": "Facundo Medina",
    "birthDate": "1999-05-28",
    "height": "1.84 m",
    "club": "R.C. Lens",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Entraînement_du_RC_Lens_-_15_juillet_2020_21.jpg"
  },
  "marcos acuna": {
    "name": "Marcos Acuña",
    "birthDate": "1991-10-28",
    "height": "1.72 m",
    "club": "Boca Juniors",
    "position": "wing half",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Argentina_-_Colombia_2022_(52)_(cropped).jpg"
  },
  "nicolas tagliafico": {
    "name": "Nicolás Tagliafico",
    "birthDate": "1992-08-31",
    "height": "1.72 m",
    "club": "Olympique Lyonnais",
    "position": "full-back",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Argentina_team_in_St._Petersburg_(cropped).jpg"
  },
  "gabriel rojas": {
    "name": "Gabriel Rojas",
    "birthDate": "1997-06-22",
    "height": "1.78 m",
    "club": "San Lorenzo de Almagro",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Gabriel_Rojas_2017.jpg"
  },
  "maximo perrone": {
    "name": "Máximo Perrone",
    "birthDate": "2003-01-07",
    "height": "1.78 m",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Entrenamiento_Argentina_Sub20_previo_al_mundial_-_BugWarp_(14)_(cropped).jpg"
  },
  "mathew ryan": {
    "name": "Mathew Ryan",
    "birthDate": "1992-04-08",
    "height": "1.84 m",
    "club": "Levante UD",
    "position": "goalkeeper",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/20180601_FIFA_Friendly_Match_Czech_Republic_vs._Australia_Matthew_Ryan_850_0230.jpg"
  },
  "joe gauci": {
    "name": "Joe Gauci",
    "birthDate": "2000-07-04",
    "height": "1.94 m",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Joe_Gauci_October_2025.jpg"
  },
  "harry souttar": {
    "name": "Harry Souttar",
    "birthDate": "1998-10-22",
    "height": "1.98 m",
    "club": "Leicester City F.C.",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/4822293_AE7I6590_(cropped).jpg"
  },
  "alessandro circati": {
    "name": "Alessandro Circati",
    "birthDate": "2003-10-10",
    "height": "1.90 m"
  },
  "jordan bos": {
    "name": "Jordan Bos",
    "birthDate": "2002-10-29",
    "height": "1.80 m",
    "club": "Feyenoord Rotterdam",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/4822286_AE7I6649_-_Jordan_Bos.jpg"
  },
  "aziz behich": {
    "name": "Aziz Behich",
    "birthDate": "1990-12-16",
    "height": "1.72 m",
    "club": "Australia men's national soccer team",
    "position": "full-back",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Aziz_Behich.jpg"
  },
  "cameron burgess": {
    "name": "Cameron Burgess",
    "birthDate": "1995-10-21",
    "height": "1.94 m",
    "club": "Cheltenham Town F.C.",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Cameron_Burgess_(cropped).jpg"
  },
  "lewis miller": {
    "name": "Lewis Miller",
    "birthDate": "2000-08-24",
    "height": "1.87 m",
    "club": "Central Coast Mariners FC",
    "position": "defender"
  },
  "milos degenek": {
    "name": "Miloš Degenek",
    "birthDate": "1994-04-28",
    "height": "1.87 m",
    "club": "FK Crvena zvezda",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Milos_degenek.jpg"
  },
  "jackson irvine": {
    "name": "Jackson Irvine",
    "birthDate": "1993-03-07",
    "height": "1.79 m",
    "club": "Australia men's national soccer team",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Chile_VS._Australia_(3)_(cropped)_2.jpg"
  },
  "riley mcgree": {
    "name": "Riley McGree",
    "birthDate": "1998-11-02",
    "club": "Adelaide United Football Club",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Riley_McGree.jpg"
  },
  "aiden o'neill": {
    "name": "Aiden O'Neill",
    "birthDate": "1998-07-04",
    "height": "1.78 m",
    "club": "Oldham Athletic A.F.C.",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Aiden_O'Neill_CF_Montreal_NYCFC_6.28.25-034_(cropped).jpg"
  },
  "connor metcalfe": {
    "name": "Connor Metcalfe",
    "birthDate": "1999-11-05",
    "height": "1.83 m",
    "club": "FC St. Pauli",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/4822293_AE7I6590_-_Connor_Metcalfe.jpg"
  },
  "patrick yazbek": {
    "name": "Patrick Yazbek",
    "birthDate": "2002-04-05",
    "height": "1.83 m",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Patrick_Yazbek_Revolution_Nashville_6.25.25-035_(cropped).jpg"
  },
  "craig goodwin": {
    "name": "Craig Goodwin",
    "birthDate": "1991-12-16",
    "height": "1.80 m",
    "club": "Australia men's national soccer team",
    "position": "full-back",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Craig_Goodwin.jpg"
  },
  "nestory irankunda": {
    "name": "Nestor Irankunda",
    "birthDate": "2006-02-09",
    "height": "1.75 m",
    "club": "Grasshopper Club Zürich",
    "position": "forward",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Nestory_Irankunda_and_Kwadwo_Baah_09082025_(1)_(cropped).jpg"
  },
  "mohamed toure": {
    "name": "Mohamed Touré",
    "birthDate": "1997-03-30",
    "height": "1.79 m",
    "club": "Cultural y Deportiva Leonesa",
    "position": "midfielder"
  },
  "patrick pentz": {
    "name": "Patrick Pentz",
    "birthDate": "1997-01-02",
    "height": "1.86 m",
    "club": "FK Austria Wien",
    "position": "goalkeeper",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Pentz_(2024).png"
  },
  "alexander schlage": {
    "name": "Alexander Schlager",
    "birthDate": "1996-02-01",
    "height": "1.84 m",
    "club": "SV Grödig",
    "position": "goalkeeper",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Floridsdorfer_AC_2016–17_–_Alexander_Schlager_(01).jpg"
  },
  "florian wiegele": {
    "name": "Florian Wiegele",
    "birthDate": "2001-03-21"
  },
  "david affengruber": {
    "name": "David Affengruber",
    "birthDate": "2001-03-19",
    "height": "1.85 m",
    "club": "FC Liefering",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/FC_Liefering_versus_Young_Violets_Austria_Wien_(30._August_2019)_28.jpg"
  },
  "david alaba": {
    "name": "David Alaba",
    "birthDate": "1992-06-24",
    "height": "1.80 m",
    "club": "Austria men's national football team",
    "position": "centre-back",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/20180610_FIFA_Friendly_Match_Austria_vs._Brazil_David_Alaba_850_1632.jpg"
  },
  "kevin danso": {
    "name": "Kevin Danso",
    "birthDate": "1998-09-19",
    "height": "1.90 m",
    "club": "Reading F.C.",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/RC_Lens_-_Lille_OSC_(17-09-2021)_46.jpg"
  },
  "marco friedl": {
    "name": "Marco Friedl",
    "birthDate": "1998-03-16",
    "height": "1.87 m",
    "club": "Austria men's national football team",
    "position": "centre-back",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Austria_national_under-21_football_team_-_Teamcamp_June_2017_(053).jpg"
  },
  "philipp lienhart": {
    "name": "Philipp Lienhart",
    "birthDate": "1996-07-11",
    "height": "1.89 m",
    "club": "SC Freiburg",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Austria_national_under-21_football_team_-_Teamcamp_June_2017_(057).jpg"
  },
  "phillipp mwene": {
    "name": "Philipp Mwene",
    "birthDate": "1994-01-29",
    "height": "1.70 m",
    "club": "Austria national under-21 football team",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Phillipp-mwene.jpg"
  },
  "stefan posch": {
    "name": "Stefan Posch",
    "birthDate": "1997-05-14",
    "height": "1.89 m",
    "club": "TSG 1899 Hoffenheim",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Austria_national_under-21_football_team_-_Teamcamp_June_2017_(110).jpg"
  },
  "alexander prass": {
    "name": "Alexander Prass",
    "birthDate": "2001-05-26",
    "height": "1.80 m",
    "club": "FC Liefering",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/FC_Liefering_gegen_FC_Juniors_OÖ._(19._April_2019)_34.jpg"
  },
  "michael svoboda": {
    "name": "Michael Svoboda",
    "birthDate": "1998-10-15",
    "height": "1.95 m",
    "club": "SV Schwechat",
    "position": "defender"
  },
  "christoph baumgartner": {
    "name": "Christoph Baumgartner",
    "birthDate": "1999-08-01",
    "height": "1.78 m",
    "club": "RB Leipzig",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Austria_national_under-21_football_team_-_Teamcamp_October_2019_(60).jpg"
  },
  "carney chukwuemeka": {
    "name": "Carney Chukwuemeka",
    "birthDate": "2003-10-20",
    "height": "1.87 m",
    "club": "Borussia Dortmund",
    "position": "midfielder"
  },
  "konrad laimer": {
    "name": "Konrad Laimer",
    "birthDate": "1997-05-27",
    "height": "1.79 m",
    "club": "FC Bayern Munich",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/2022-07-21_Fußball,_Männer,Freundschaftsspiel,_RB_Leipzig_-_FC_Liverpool_1DX_2137_by_Stepro_(cropped).jpg"
  },
  "marcel sabitzer": {
    "name": "Marcel Sabitzer",
    "birthDate": "1994-03-17",
    "height": "1.76 m",
    "club": "Borussia Dortmund",
    "position": "forward",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Marcel_Sabitzer_2020_(cropped).jpg"
  },
  "xaver schlager": {
    "name": "Xaver Schlager",
    "birthDate": "1997-09-28",
    "height": "1.74 m",
    "club": "RB Leipzig",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/FC_Liefering_gegen_Austria_Lustenau_SKY_GO_Liga_15.JPG"
  },
  "romano schmid": {
    "name": "Romano Schmid",
    "birthDate": "2000-01-27",
    "height": "1.68 m",
    "club": "Austria men's national football team",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/FC_Liefering_versus_Blau_Weiß_Linz_(22._September_2017)_41.jpg"
  },
  "alessandro schopf": {
    "name": "Alessandro Schöpf",
    "birthDate": "1994-02-07",
    "height": "1.78 m",
    "club": "Schalke 04",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/20140905_U21_AUT_BIH_AT08_1103.jpg"
  },
  "nicolas seiwald": {
    "name": "Nicolas Seiwald",
    "birthDate": "2001-05-04",
    "height": "1.79 m",
    "club": "RB Leipzig",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/FC_Liefering_versus_WSG_Wattens_(24._Mai_2019)_04.jpg"
  },
  "paul wanner": {
    "name": "Paul Wanner",
    "birthDate": "2005-12-23",
    "height": "1.85 m",
    "club": "FC Bayern Munich",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Paul_wanner-1772636856_(cropped).JPG"
  },
  "patrick wimmer": {
    "name": "Patrick Wimmer",
    "birthDate": "2001-05-30",
    "height": "1.82 m",
    "club": "VfL Wolfsburg",
    "position": "forward",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/UEFA_Euro_2023_Qualifiers_Austria_vs._Finland_(2022-06-03)_29.jpg"
  },
  "marko arnautovic": {
    "name": "Marko Arnautović",
    "birthDate": "1989-04-19",
    "height": "1.89 m",
    "club": "FK Crvena zvezda",
    "position": "wing half",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/20180610_FIFA_Friendly_Match_Austria_vs._Brazil_Marko_Arnautović_850_1633.jpg"
  },
  "sasa kalajdzic": {
    "name": "Sasa Kalajdzic",
    "birthDate": "1997-07-07",
    "height": "2.00 m",
    "club": "First Vienna FC",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Sasa_kalajdzic.jpg"
  },
  "thibaut courtois": {
    "name": "Juan Pablo",
    "birthDate": "1992-05-11",
    "height": "2.00 m",
    "club": "Belgium men's national football team",
    "position": "goalkeeper",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Courtois_2018_(cropped).jpg"
  },
  "timothy castagne": {
    "name": "Timothy Castagne",
    "birthDate": "1995-12-05",
    "height": "1.80 m",
    "club": "Fulham F.C.",
    "position": "full-back",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Timothy_Castagne_01.jpg"
  },
  "maxim de cuyper": {
    "name": "Maxim De Cuyper",
    "birthDate": "2000-12-22",
    "height": "1.82 m",
    "club": "Brighton & Hove Albion F.C.",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Maxim_De_Cuyper_USMNT_v_Belgium_Mar_28_2026-79_(cropped).jpg"
  },
  "koni de winter": {
    "name": "Koni De Winter",
    "birthDate": "2002-06-12",
    "height": "1.91 m",
    "club": "AC Milan",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Koni_De_Winter_USMNT_v_Belgium_Mar_28_2026-36_(cropped).jpg"
  },
  "brandon mechele": {
    "name": "Brandon Mechele",
    "birthDate": "1993-01-28",
    "height": "1.90 m",
    "club": "Club Brugge K.V.",
    "position": "centre-back",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Brandon_Mechele_Club_Brugge.jpg"
  },
  "thomas meunier": {
    "name": "Thomas Meunier",
    "birthDate": "1991-09-12",
    "height": "1.90 m",
    "club": "Lille OSC",
    "position": "full-back",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank–121.jpg"
  },
  "nathan ngoy": {
    "name": "Nathan Ngoy",
    "birthDate": "2003-06-10",
    "height": "1.83 m"
  },
  "joaquin seys": {
    "name": "Joaquin Seys",
    "birthDate": "2005-03-28",
    "height": "1.78 m",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/FC_Salzburg_gegen_Club_Brügge_(2025-08-06_Championsleague_Qualifikation_Dritte_Runde)_63_(Joaquin_Seys).jpg"
  },
  "teatro arthur": {
    "name": "Teatro Arthur Azevedo",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Teatro_Arthur_Azevedo.JPG"
  },
  "kevin de bruyne": {
    "name": "Kevin De Bruyne",
    "birthDate": "1991-06-28",
    "height": "1.81 m",
    "club": "SSC Napoli",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Kevin_De_Bruyne_USMNT_v_Belgium_Mar_28_2026-64_(cropped).jpg"
  },
  "amadou onana": {
    "name": "Amadou Onana",
    "birthDate": "2001-08-16",
    "height": "1.92 m",
    "club": "Aston Villa F.C.",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/RC_Lens_-_Lille_OSC_(17-09-2021)_9_(cropped).jpg"
  },
  "nicolas raskin": {
    "name": "Nicolas Raskin",
    "birthDate": "2001-02-23",
    "height": "1.78 m",
    "club": "Standard Liège",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Nicolas_Raskin_2023.jpg"
  },
  "youri tielemans": {
    "name": "Youri Tielemans",
    "birthDate": "1997-05-07",
    "height": "1.76 m",
    "club": "Aston Villa F.C.",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Youri_Tielemans_USMNT_v_Belgium_Mar_28_2026-20_(cropped).jpg"
  },
  "hans vanaken": {
    "name": "Hans Vanaken",
    "birthDate": "1992-08-24",
    "height": "1.94 m",
    "club": "Club Brugge K.V.",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Hans_Vanaken_Lommel_United.jpg"
  },
  "axel witsel": {
    "name": "Axel Witsel",
    "birthDate": "1989-01-12",
    "height": "1.86 m",
    "club": "Girona FC",
    "position": "defensive midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Witsel_celebrating_bronze_(cropped).jpg"
  },
  "charles de ketelaere": {
    "name": "Charles De Ketelaere",
    "birthDate": "2001-03-10",
    "height": "1.92 m",
    "club": "Atalanta BC",
    "position": "second striker",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Charles_De_Ketelaere_2022_Salzburg_vs_AC_Milan_2022-09-06.jpg"
  },
  "jeremy doku": {
    "name": "Jérémy Doku",
    "birthDate": "2002-05-27",
    "height": "1.73 m",
    "club": "Manchester City F.C.",
    "position": "forward",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Jérémy_Doku_USMNT_v_Belgium_Mar_28_2026-27_(cropped).jpg"
  },
  "matias fernandez pardo": {
    "name": "Matias Fernandez-Pardo",
    "birthDate": "2005-02-03",
    "height": "1.88 m",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Pardo_asselosc_2425_(cropped).jpg"
  },
  "romelu lukaku": {
    "name": "Romelu Lukaku",
    "birthDate": "1993-05-13",
    "height": "1.91 m",
    "club": "SSC Napoli",
    "position": "forward",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Romelu_Lukaku_2021.jpg"
  },
  "dodi lukebakio": {
    "name": "Dodi Lukebakio",
    "birthDate": "1997-09-24",
    "height": "1.84 m",
    "club": "Watford F.C.",
    "position": "wing half",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Dodi_Lukebakio_2021.jpg"
  },
  "diego moreira": {
    "name": "Diego Moreira",
    "birthDate": "2004-08-06",
    "height": "1.79 m",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Diego_Moreira.jpg"
  },
  "alexis saelemaekers": {
    "name": "Alexis Saelemaekers",
    "birthDate": "1999-06-27",
    "height": "1.80 m",
    "club": "AC Milan",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Alexis_Saelemaekers_USMNT_v_Belgium_Mar_28_2026-13_(cropped).jpg"
  },
  "leandro trossard": {
    "name": "Leandro Trossard",
    "birthDate": "1994-12-04",
    "height": "1.72 m",
    "club": "Arsenal F.C.",
    "position": "forward",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Leandro_Trossard_2022.jpg"
  },
  "martin zlomislic": {
    "name": "Martin Zlomislić",
    "birthDate": "1998-08-16",
    "height": "1.90 m",
    "club": "Bosnia and Herzegovina men's national football team",
    "position": "goalkeeper"
  },
  "osman hadzikic": {
    "name": "Osman Hadzikic",
    "birthDate": "1996-03-12",
    "height": "1.83 m",
    "club": "NK Slaven Belupo",
    "position": "goalkeeper",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Austria_national_under-21_football_team_-_Teamcamp_June_2017_(Osman).jpg"
  },
  "sead kolasinac": {
    "name": "Sead Kolašinac",
    "birthDate": "1993-06-20",
    "height": "1.83 m",
    "club": "Atalanta BC",
    "position": "full-back",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/1_Sead_Kolašinac_2018_(cropped2).jpg"
  },
  "amar dedic": {
    "name": "Amar Dedić",
    "birthDate": "2002-08-18",
    "height": "1.80 m",
    "club": "S.L. Benfica",
    "position": "full-back",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/(2024-09-10_)_FC_RB_Salzburg_gegen_SCR_Altach_24.jpg"
  },
  "nihad mujakic": {
    "name": "Nihad Mujakić",
    "birthDate": "1998-04-15",
    "height": "1.89 m",
    "club": "Gaziantep F.K.",
    "position": "centre-back"
  },
  "nikola katic": {
    "name": "Nikola Katić",
    "birthDate": "1996-10-10",
    "height": "1.94 m",
    "club": "Schalke 04",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/SM-Rangers18_(16).jpg"
  },
  "tarik muharemovic": {
    "name": "Tarik Muharemović",
    "birthDate": "2003-02-28",
    "height": "1.87 m",
    "club": "US Sassuolo Calcio"
  },
  "stjepan radeljic": {
    "name": "Stjepan Radeljić",
    "birthDate": "1997-09-05",
    "height": "1.89 m",
    "club": "Bosnia and Herzegovina men's national football team"
  },
  "dennis hadzikadunic": {
    "name": "Dennis Hadžikadunić",
    "birthDate": "1998-07-09",
    "height": "1.90 m",
    "club": "U.C. Sampdoria",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Dennis_Hadžikadunić_2021.jpg"
  },
  "nidal celik": {
    "name": "Nidal Čelik",
    "birthDate": "2006-07-17",
    "club": "R.C. Lens",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Čelik_rcl_asse_2425.png"
  },
  "amir hadziahmetovic": {
    "name": "Amir Hadžiahmetović",
    "birthDate": "1997-03-08",
    "height": "1.79 m",
    "club": "Hull City A.F.C.",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Amir_Hadžiahmetović_playing_for_Beşiktaş_(cropped).jpg"
  },
  "ivan sunjic": {
    "name": "Ivan Šunjić",
    "birthDate": "1996-10-09",
    "height": "1.84 m",
    "club": "Bosnia and Herzegovina men's national football team",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Ivan_Sunjic_Birmingham_2019.jpg"
  },
  "ivan basic": {
    "name": "Ivan Bašić",
    "birthDate": "2002-04-30",
    "height": "1.78 m",
    "club": "FC Astana",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Ivan_Bašić_2022.jpg"
  },
  "dzenis burnic": {
    "name": "Dženis Burnić",
    "birthDate": "1998-05-22",
    "height": "1.81 m",
    "club": "Bosnia and Herzegovina men's national football team",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Dženis_Burnić.jpg"
  },
  "ermin mahmic": {
    "name": "Ermin Mahmić",
    "birthDate": "2005-03-14",
    "height": "1.82 m",
    "club": "Bosnia and Herzegovina men's national football team"
  },
  "benjamin tahirovic": {
    "name": "Benjamin Tahirović",
    "birthDate": "2003-03-03",
    "height": "1.93 m",
    "club": "Brøndby IF",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Benjamin_Tahirović_-_GAE_-_Ajax_(53465349575).jpg"
  },
  "amar memic": {
    "name": "Amar Memić",
    "birthDate": "2001-01-20",
    "height": "1.76 m",
    "club": "FC Viktoria Plzeň"
  },
  "armin gigovic": {
    "name": "Armin Gigović",
    "birthDate": "2002-04-06",
    "height": "1.87 m",
    "club": "BSC Young Boys",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Armin_Gigović_2021.jpg"
  },
  "kerim alajbegovic": {
    "name": "Kerim Alajbegović",
    "birthDate": "2007-09-21",
    "height": "1.78 m",
    "club": "FC Red Bull Salzburg",
    "position": "forward",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Jahresbeginnfeier_FC_RB_Salzburg_(2026-01-25_RB_Arena)_10.jpg"
  },
  "esmir bajraktarevic": {
    "name": "Esmir Bajraktarević",
    "birthDate": "2005-03-10",
    "height": "1.75 m",
    "club": "PSV Eindhoven",
    "position": "midfielder"
  },
  "ermedin demirovic": {
    "name": "Ermedin Demirović",
    "birthDate": "1998-03-25",
    "height": "1.85 m",
    "club": "VfB Stuttgart",
    "position": "forward"
  },
  "jovo lukic": {
    "name": "Jovo Lukić",
    "birthDate": "1998-11-28",
    "height": "1.90 m",
    "club": "FC Universitatea Cluj",
    "position": "centre-forward"
  },
  "samed bazdar": {
    "name": "Samed Baždar",
    "birthDate": "2004-01-31",
    "height": "1.86 m",
    "club": "Jagiellonia Białystok"
  },
  "haris tabakovic": {
    "name": "Haris Tabaković",
    "birthDate": "1994-06-20",
    "height": "1.94 m",
    "club": "Borussia Mönchengladbach",
    "position": "forward",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/FC_RB_Salzburg_vs._FK_Austria_Wien_(2023-04-09)_55.jpg"
  },
  "edin dzeko": {
    "name": "Edin Džeko",
    "birthDate": "1986-03-17",
    "height": "1.93 m",
    "club": "Schalke 04",
    "position": "forward",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/20150331_2026_AUT_BIH_2177_Edin_Džeko_(cropped).jpg"
  },
  "ederson": {
    "name": "Éderson José dos Santos Lourenço da Silva",
    "birthDate": "1999-07-07",
    "height": "1.82 m",
    "club": "Cruzeiro E.C.",
    "position": "midfielder"
  },
  "weverton": {
    "name": "Weverton",
    "birthDate": "1993-08-25"
  },
  "leo pereira": {
    "name": "Léo Pereira",
    "birthDate": "1996-01-31",
    "height": "1.86 m",
    "club": "Brazil national under-20 football team",
    "position": "defender"
  },
  "alex sandro": {
    "name": "Alex Sandro",
    "birthDate": "1991-01-26",
    "height": "1.80 m",
    "club": "Clube de Regatas do Flamengo",
    "position": "full-back",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/FC_Zenit_Saint_Petersburg_vs._Juventus,_20_October_2021_28_-_Alex_Sandro_(cropped2).jpg"
  },
  "douglas santos": {
    "name": "Douglas Santos",
    "birthDate": "1994-03-22",
    "height": "1.73 m",
    "club": "Brazil men's national football team",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Brasil_estreia_contra_a_África_do_Sul_no_Mané_Garrincha_—_копия_(7).jpg"
  },
  "fabinho": {
    "name": "Fabinho",
    "birthDate": "1993-10-23",
    "height": "1.88 m",
    "club": "Brazil men's national football team",
    "position": "defensive midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Fabinho_(43934382122)_(cropped).jpg"
  },
  "paqueta": {
    "name": "Paquetá",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Mário_Navarro_da_Costa_-_Paquetá,_1917.jpg"
  },
  "vinicius jr": {
    "name": "Vinícius Júnior",
    "birthDate": "2000-07-12",
    "height": "1.76 m",
    "club": "Brazil men's national football team",
    "position": "wing half",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Vinicius_Jr_2021.jpg"
  },
  "neymar jr": {
    "name": "Neymar",
    "birthDate": "1992-02-05",
    "height": "1.75 m",
    "club": "Santos F.C.",
    "position": "wing half",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/20180610_FIFA_Friendly_Match_Austria_vs._Brazil_Neymar_850_1705.jpg"
  },
  "raphinha": {
    "name": "Raphinha",
    "birthDate": "1996-12-14",
    "height": "1.77 m",
    "club": "Futbol Club Barcelona",
    "position": "forward",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Raphael_Dias_Belloli_2023.jpg"
  },
  "igor thiago": {
    "name": "Igor Thiago",
    "birthDate": "2001-06-26",
    "height": "1.93 m",
    "club": "Brentford F.C.",
    "position": "forward",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Brentford_Players_27122025_(4)_(cropped).jpg"
  },
  "luiz henrique": {
    "name": "Luiz Henrique",
    "birthDate": "2001-01-02",
    "height": "1.82 m",
    "position": "forward",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Luiz_Henrique_in_Zenit_2025.jpg"
  },
  "endrick": {
    "name": "Endrick",
    "birthDate": "2006-07-21",
    "height": "1.73 m",
    "club": "Olympique Lyonnais",
    "position": "forward",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Endrick_seleção_vs_inglaterra.jpg"
  },
  "alphonso davies": {
    "name": "Alphonso Davies",
    "birthDate": "2000-11-02",
    "height": "1.83 m",
    "club": "FC Bayern Munich",
    "position": "wing half",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/2022-07-30_Fußball,_Männer,_DFL-Supercup,_RB_Leipzig_-_FC_Bayern_München_1DX_3286_by_Stepro.jpg"
  },
  "alistair johnston": {
    "name": "Alistair Johnston",
    "birthDate": "1998-10-08",
    "height": "1.80 m",
    "club": "Celtic F.C.",
    "position": "right-back",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/A_Johnston_Canada_national_football_team_WC2022_(cropped).jpg"
  },
  "samuel adekugbe": {
    "name": "Sam Adekugbe",
    "birthDate": "1995-01-16",
    "height": "1.75 m",
    "club": "Hatayspor",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Sam_Adekugbe_WC2022.jpg"
  },
  "derek cornelius": {
    "name": "Derek Cornelius",
    "birthDate": "1997-11-25",
    "height": "1.87 m",
    "club": "Rangers F.C.",
    "position": "forward",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/08042023_BP-MFF_reportagefotografen_7309.jpg"
  },
  "moise bombito": {
    "name": "Moïse Bombito",
    "birthDate": "2000-03-30",
    "height": "1.90 m",
    "club": "OGC Nice",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Bombito_asse_ogcn_2425.png"
  },
  "kamal miller": {
    "name": "Kamal Miller",
    "birthDate": "1997-05-16",
    "height": "1.83 m",
    "club": "Portland Timbers",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Inter_Miami_0-0_Nashville_SC_12_(cropped).jpg"
  },
  "stephen eustaquio": {
    "name": "Stephen Eustáquio",
    "birthDate": "1996-12-21",
    "height": "1.78 m",
    "club": "S.C.U. Torreense",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/S_Eustaqui_Canada_national_football_team_WC2022_(cropped).jpg"
  },
  "ismael kone": {
    "name": "Ismaël Koné",
    "birthDate": "2002-06-16",
    "height": "1.88 m",
    "club": "Olympique de Marseille",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Ismaël_Koné_WC2022_(cropped_2).jpg"
  },
  "jonathan osorio": {
    "name": "Jonathan Osorio",
    "birthDate": "1992-06-12",
    "height": "1.75 m",
    "club": "Toronto FC",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Jonathan_Osorio.jpg"
  },
  "jacob shaffelburg": {
    "name": "Jacob Shaffelburg",
    "birthDate": "1999-11-26",
    "height": "1.78 m",
    "club": "Toronto FC II",
    "position": "forward",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Jacob_Shaffleburg_cropped.png"
  },
  "mathieu choiniere": {
    "name": "Mathieu Choinière",
    "birthDate": "1999-02-07",
    "height": "1.75 m",
    "club": "Los Angeles FC",
    "position": "forward"
  },
  "niko sigur": {
    "name": "Niko Sigur",
    "birthDate": "2003-09-09",
    "height": "1.80 m"
  },
  "liam millar": {
    "name": "Liam Millar",
    "birthDate": "1999-09-27",
    "height": "1.81 m",
    "club": "Canadian men's national soccer team",
    "position": "forward",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Liam_Millar.jpeg"
  },
  "yahia fofana": {
    "name": "Yahia Fofana",
    "birthDate": "2000-08-21",
    "height": "1.94 m",
    "position": "goalkeeper",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Fofana_asse_sco_2425.png"
  },
  "mohamed kone": {
    "name": "Mohamed Koné",
    "birthDate": "2003-08-21",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/KapfenbergJudenburg15.jpg"
  },
  "alban lafont": {
    "name": "Alban Lafont",
    "birthDate": "1999-01-23",
    "height": "1.93 m",
    "club": "FC Nantes",
    "position": "goalkeeper",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Alban_Lafont_-_entrainement_-_9_mai_2018_1.jpg"
  },
  "clement akpa": {
    "name": "Clément Akpa",
    "birthDate": "2001-11-24",
    "height": "1.81 m",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Akpro_aja_asse_2425.png"
  },
  "guela doue": {
    "name": "Guéla Doué",
    "birthDate": "2002-10-17",
    "height": "1.87 m",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Lens_-_Stade_Rennais_(20-08-2023)_34.jpg"
  },
  "ghislain konan": {
    "name": "Ghislain Konan",
    "birthDate": "1995-12-27",
    "height": "1.76 m",
    "club": "ASEC Mimosas",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/FC_Salzburg_gegen_Vitória_Guimarães_(UEFA_Euroleague_23._November_2017)_42.jpg"
  },
  "odilon kossounou": {
    "name": "Odilon Kossounou",
    "birthDate": "2001-01-04",
    "height": "1.91 m",
    "club": "Atalanta BC",
    "position": "centre-back",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Odilon_Kossounou,_2022-07-31,_Saisoneröffnung_Bayer_04,_Leverkusen_(1).jpg"
  },
  "evan ndicka": {
    "name": "Evan Ndicka",
    "birthDate": "1999-08-20",
    "height": "1.92 m",
    "club": "AJ Auxerre",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/2022128151247_2022-05-08_Fussball_Eintracht_Frankfurt_vs_Borussia_Mönchengladbach_-_Sven_-_1D_X_MK_II_-_0370_-_B70I6481_(Evan_N’Dicka_cropped).jpg"
  },
  "parfait guiagon": {
    "name": "Parfait Guiagon",
    "birthDate": "2001-02-22",
    "height": "1.69 m",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/פארפה_גויאגון_-_Parfait_Guiagon.jpg"
  },
  "christ inao oulai": {
    "name": "Christ Inao Oulaï",
    "birthDate": "2006-04-06",
    "height": "1.73 m"
  },
  "franck kessie": {
    "name": "Franck Kessié",
    "birthDate": "1996-12-19",
    "height": "1.83 m",
    "club": "Al Ahli FC",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Franck_Yannick_Kessié.jpg"
  },
  "ibrahim sangare": {
    "name": "Ibrahim Sangaré",
    "birthDate": "1997-12-02",
    "height": "1.91 m",
    "club": "Toulouse FC",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Ibrahim_Sangaré_(2018-05-09).jpg"
  },
  "jean michael seri": {
    "name": "Jean Seri",
    "birthDate": "1991-07-19",
    "height": "1.68 m",
    "club": "OGC Nice",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Jean_Seri.jpg"
  },
  "ange-yoan bonny": {
    "name": "Ange-Yoan Bonny",
    "birthDate": "2003-10-25",
    "height": "1.89 m",
    "position": "centre-forward"
  },
  "oumar diakite": {
    "name": "Oumar Diakité",
    "birthDate": "2003-12-20",
    "height": "1.82 m",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/FC_Liefering_gegen_Grazer_AK_(2022-04-29)_43.jpg"
  },
  "yan diomande": {
    "name": "Yan Diomande",
    "birthDate": "2006-11-14",
    "height": "1.80 m"
  },
  "nicolas pepe": {
    "name": "Nicolas Pépé",
    "birthDate": "1995-05-29",
    "height": "1.83 m",
    "club": "Ivory Coast men's national football team",
    "position": "winger",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Nicolas_Pepe_LOSC_(cropped2).jpg"
  },
  "bazoumana toure": {
    "name": "Bazoumana Touré",
    "birthDate": "2006-03-02",
    "height": "1.75 m",
    "club": "Hammarby Fotboll"
  },
  "elye wahi": {
    "name": "Elye Wahi",
    "birthDate": "2003-01-02",
    "height": "1.81 m",
    "position": "forward",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Elye_Wahi_2022.jpg"
  },
  "matthieu epolo": {
    "name": "Matthieu Epolo",
    "birthDate": "2005-01-15",
    "height": "1.85 m"
  },
  "timothy fayulu": {
    "name": "Timothy Fayulu",
    "birthDate": "1999-07-24",
    "height": "1.92 m",
    "club": "FC Sion",
    "position": "goalkeeper"
  },
  "lionel mpasi": {
    "name": "Lionnel Mpasi",
    "birthDate": "1994-08-01",
    "height": "1.82 m",
    "position": "goalkeeper",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Lionel_Mpasi).jpg"
  },
  "dylan batubinsika": {
    "name": "Dylan Batubinsika",
    "birthDate": "1996-02-15",
    "height": "1.84 m",
    "club": "Royal Antwerp F.C.",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Batubinsika_asse_fcn_2425.png"
  },
  "rocky bushiri": {
    "name": "Rocky Bushiri",
    "birthDate": "1999-11-30",
    "height": "1.86 m",
    "club": "KV Mechelen",
    "position": "defender"
  },
  "steve kapuadi": {
    "name": "Steve Kapuadi",
    "birthDate": "1998-04-30",
    "height": "1.93 m",
    "club": "FK Inter Bratislava"
  },
  "arthur masuaku": {
    "name": "Arthur Masuaku",
    "birthDate": "1993-11-07",
    "height": "1.79 m",
    "club": "Olympiacos F.C.",
    "position": "full-back",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Arthur_Masuaku,_2023_(cropped).jpg"
  },
  "chancel mbemba": {
    "name": "Chancel Mbemba",
    "birthDate": "1994-08-08",
    "height": "1.82 m",
    "club": "Newcastle United F.C.",
    "position": "centre-back",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Chancel_Mbemba_Mangulu.JPG"
  },
  "axel tuanzebe": {
    "name": "Axel Tuanzebe",
    "birthDate": "1997-11-14",
    "height": "1.85 m",
    "club": "Manchester United F.C.",
    "position": "centre-back",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Manchester_United_v_Wigan_Athletic,_January_2017_(33).JPG"
  },
  "aaron wan-bissaka": {
    "name": "Aaron Wan-Bissaka",
    "birthDate": "1997-11-26",
    "height": "1.83 m",
    "club": "West Ham United F.C.",
    "position": "full-back",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Aaron_Wan-Bissaka_of_West_Ham_United.jpeg"
  },
  "theo bongonda": {
    "name": "Theo Bongonda",
    "birthDate": "1995-11-20",
    "height": "1.77 m",
    "club": "Spartak Moscow",
    "position": "wing half",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Theo_Bongonda_in_2025.jpg"
  },
  "brian cipenga": {
    "name": "Brian Cipenga",
    "birthDate": "1998-01-01",
    "height": "1.72 m"
  },
  "gael kakuta": {
    "name": "Gaël Kakuta",
    "birthDate": "1991-06-21",
    "height": "1.73 m",
    "club": "Hebei F.C.",
    "position": "wing half",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Entraînement_du_RC_Lens_-_15_juillet_2020_24.jpg"
  },
  "edo kayembe": {
    "name": "Edo Kayembe",
    "birthDate": "1998-08-03",
    "height": "1.83 m",
    "club": "K.A.S. Eupen",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Edo_Kayembe_2025_(cropped).jpg"
  },
  "nathanael mbuku": {
    "name": "Nathanaël Mbuku",
    "birthDate": "2002-03-16",
    "height": "1.70 m",
    "club": "Stade de Reims",
    "position": "forward"
  },
  "samuel moutoussamy": {
    "name": "Samuel Moutoussamy",
    "birthDate": "1996-08-12",
    "height": "1.74 m",
    "club": "FC Nantes",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Samuel_Moutoussamy_2018.jpg"
  },
  "ngal'ayel mukau": {
    "name": "Ngal'ayel Mukau",
    "birthDate": "2004-11-03",
    "height": "1.86 m"
  },
  "charles pickel": {
    "name": "Charles Pickel",
    "birthDate": "1997-05-15",
    "height": "1.80 m",
    "club": "RCD Espanyol de Barcelona",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/RC_Lens_-_Grenoble_Foot_38_(10-02-2020)_60.jpg"
  },
  "noah sadiki": {
    "name": "Noah Sadiki",
    "birthDate": "2004-12-17",
    "height": "1.73 m",
    "club": "Royale Union Saint-Gilloise",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Noah_Sadiki_USG_2024.jpg"
  },
  "cedric bakambu": {
    "name": "Cédric Bakambu",
    "birthDate": "1991-04-11",
    "height": "1.83 m",
    "club": "Olympique de Marseille",
    "position": "forward",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Cédric_Bakambu_2016_(cropped).jpg"
  },
  "simon banza": {
    "name": "Simon Banza",
    "birthDate": "1996-08-13",
    "height": "1.89 m",
    "club": "Trabzonspor",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Entraînement_RC_Lens_-_2_juillet_2019_65.jpg"
  },
  "fiston mayele": {
    "name": "Fiston Mayele",
    "birthDate": "1994-06-24",
    "height": "1.85 m"
  },
  "yoane wissa": {
    "name": "Yoane Wissa",
    "birthDate": "1996-09-03",
    "height": "1.76 m",
    "club": "Newcastle United F.C.",
    "position": "forward",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/CAN_2023RD_Congo_2-1_Guinée_9939_(cropped).jpg"
  },
  "alvaro montero": {
    "name": "Álvaro Montero",
    "birthDate": "1989-11-05",
    "club": "UD Almería B",
    "position": "Guardameta"
  },
  "alvaro angulo": {
    "name": "Álvaro Angulo",
    "birthDate": "1997-03-06",
    "height": "1.73 m",
    "club": "Gold Eagles",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Inter_Miami_CF_3-1_UNAM_(6_August_2025)_23_(cropped).jpg"
  },
  "willer ditta": {
    "name": "Willer Ditta",
    "birthDate": "1997-01-23",
    "height": "1.80 m",
    "club": "Junior de Barranquilla",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Willer_Ditta_en_Newell's_Old_Boys.jpg"
  },
  "deiver machado": {
    "name": "Déiver Machado",
    "birthDate": "1993-09-02",
    "height": "1.72 m",
    "club": "Millonarios",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Lens_-_Reims_(12-05-2023)_33.jpg"
  },
  "jhon cordoba": {
    "name": "Jhon Córdoba",
    "birthDate": "1993-05-11",
    "height": "1.88 m",
    "club": "1. FSV Mainz 05",
    "position": "forward",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Jhon_Córdoba,_FC_Köln;_29_Jul_2018.jpg"
  },
  "jaminton campaz": {
    "name": "Jaminton Campaz",
    "birthDate": "2000-05-24",
    "height": "1.65 m",
    "club": "Grêmio FBPA",
    "position": "midfielder"
  },
  "cucho hernandez": {
    "name": "Cucho Hernández",
    "birthDate": "1999-04-22",
    "height": "1.75 m",
    "club": "Watford F.C.",
    "position": "wing half",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Hernandez_Cucho_Columbus_Crew_Meet_the_Team_2022.jpg"
  },
  "josimar dias": {
    "name": "Vozinha",
    "birthDate": "1986-06-03",
    "height": "1.89 m",
    "club": "FC Zimbru Chișinău",
    "position": "goalkeeper"
  },
  "steven moreira": {
    "name": "Steven Moreira",
    "birthDate": "1994-08-13",
    "height": "1.76 m",
    "club": "Columbus Crew",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Steven_Moreira_NYCFC_v_Columbus_10_May_2026-67_(cropped).jpg"
  },
  "wagner pina": {
    "name": "Wagner Pina",
    "birthDate": "2002-11-03",
    "height": "1.80 m"
  },
  "joao fernandes": {
    "name": "João Fernandes",
    "birthDate": "2000-11-14"
  },
  "sidny lopes": {
    "name": "Sidny Lopes Cabral",
    "birthDate": "2002-09-18",
    "height": "1.76 m"
  },
  "logan costa": {
    "name": "Logan Costa",
    "birthDate": "2001-04-01",
    "height": "1.90 m",
    "position": "centre-back",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Logan_Costa.jpg"
  },
  "roberto lopes": {
    "name": "Roberto Lopes",
    "birthDate": "1992-06-17",
    "height": "1.86 m",
    "club": "Shamrock Rovers F.C.",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Phase_de_match_(cropped).jpg"
  },
  "kelvin pires": {
    "name": "Kelvin Pires",
    "birthDate": "2000-06-05",
    "height": "1.93 m"
  },
  "edilson borges": {
    "name": "Diney",
    "birthDate": "1995-01-17",
    "height": "1.85 m",
    "club": "C.S. Marítimo",
    "position": "defender"
  },
  "jamiro monteiro": {
    "name": "Jamiro Monteiro",
    "birthDate": "1993-11-23",
    "height": "1.75 m",
    "club": "Cape Verde men's national football team",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Jamiro_Monteiro_Philadelphia_Union_2019.jpg"
  },
  "telmo arcanjo": {
    "name": "Telmo Arcanjo",
    "birthDate": "2001-06-21",
    "height": "1.80 m"
  },
  "yannick semedo": {
    "name": "Yannick Semedo",
    "birthDate": "1995-12-29",
    "height": "1.71 m"
  },
  "laros duarte": {
    "name": "Laros Duarte",
    "birthDate": "1997-02-28",
    "height": "1.80 m",
    "club": "PSV Eindhoven",
    "position": "midfielder"
  },
  "deroy duarte": {
    "name": "Deroy Duarte",
    "birthDate": "1999-07-04",
    "height": "1.77 m",
    "club": "Sparta Rotterdam",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Deroy_Duarte.jpg"
  },
  "kevin pina": {
    "name": "Kevin Pina",
    "birthDate": "1997-01-27",
    "height": "1.81 m",
    "club": "FC Krasnodar",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Kevin_Pina_(footballer)_2022.jpg"
  },
  "ryan mendes": {
    "name": "Ryan Mendes da Graça",
    "birthDate": "1990-01-08",
    "height": "1.78 m",
    "club": "Nottingham Forest F.C.",
    "position": "wing half",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Ryan_Mendes_(LOSC_Lille).JPG"
  },
  "willy semedo": {
    "name": "Willy Semedo",
    "birthDate": "1994-04-27",
    "height": "1.85 m",
    "club": "Grenoble Foot 38",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/RC_Lens_-_Grenoble_Foot_38_(10-02-2020)_70.jpg"
  },
  "garry rodrigues": {
    "name": "Garry Mendes Rodrigues",
    "birthDate": "1990-11-27",
    "height": "1.73 m",
    "club": "PAOK FC",
    "position": "wing half",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Garry_Rodrigues_2013_Catalonia.jpg"
  },
  "jovane cabral": {
    "name": "Jovane Cabral",
    "birthDate": "1998-06-14",
    "height": "1.76 m",
    "club": "Sporting CP",
    "position": "wing half",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/JovaneCabral_2021.jpg"
  },
  "nuno da costa": {
    "name": "Nuno da Costa",
    "birthDate": "1991-02-10",
    "height": "1.82 m",
    "club": "Valenciennes F.C.",
    "position": "forward",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Valenciennes_-_UNFP_FC_(02-07-2016)_40_(cropped).jpg"
  },
  "dailon livramento": {
    "name": "Dailon Livramento",
    "birthDate": "2001-05-04",
    "height": "1.85 m",
    "club": "Roda JC Kerkrade",
    "position": "forward"
  },
  "gilson benchimol": {
    "name": "Gilson Tavares",
    "birthDate": "2001-12-29",
    "height": "1.87 m",
    "position": "forward",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Benchimol_2024.jpg"
  },
  "helio varela": {
    "name": "Hélio Varela",
    "birthDate": "2002-05-03",
    "height": "1.76 m"
  },
  "josko gvardiol": {
    "name": "Joško Gvardiol",
    "birthDate": "2002-01-23",
    "height": "1.85 m",
    "club": "Manchester City F.C.",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/2021_Joško_Gvardiol_2_(cropped2).jpg"
  },
  "duje caleta-car": {
    "name": "Duje Ćaleta-Car",
    "birthDate": "1996-09-17",
    "height": "1.93 m",
    "club": "Real Sociedad",
    "position": "centre-back",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Duje_Ćaleta-Car.jpg"
  },
  "marin pongracic": {
    "name": "Marin Pongračić",
    "birthDate": "1997-09-11",
    "height": "1.93 m",
    "club": "FC Bayern Munich",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/FC_Admira_Wacker_Mödling_vs._FC_Red_Bull_Salzburg_2018-04-15_(071).jpg"
  },
  "martin erlic": {
    "name": "Martin Erlić",
    "birthDate": "1998-01-24",
    "height": "1.93 m",
    "club": "Parma Calcio 1913",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Martin-Erlic.png"
  },
  "mateo kovacic": {
    "name": "Mateo Kovačić",
    "birthDate": "1994-05-06",
    "height": "1.77 m",
    "club": "Manchester City F.C.",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Chelsea_vs._Arsenal,_29_May_2019_18_Kovacic.jpg"
  },
  "mario pasalic": {
    "name": "Mario Pašalić",
    "birthDate": "1995-02-09",
    "height": "1.88 m",
    "club": "Atalanta BC",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Pasalic_6459_(cropped).jpg"
  },
  "nikola vlasic": {
    "name": "Nikola Vlašić",
    "birthDate": "1997-10-04",
    "height": "1.78 m",
    "club": "Torino FC",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Nikola_Vlašić_(CSKA_Moscow,_19.08.2019).jpg"
  },
  "luka sucic": {
    "name": "Luka Sučić",
    "birthDate": "2002-09-08",
    "height": "1.85 m",
    "club": "FC Liefering",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/FC_Red_Bull_Salzburg_gegen_Wolfsberger_AC_(2022-02-20)_32.jpg"
  },
  "martin baturina": {
    "name": "Martin Baturina",
    "birthDate": "2003-02-16",
    "height": "1.72 m",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/FC_Salzburg_gegen_GNK_Dinamo_Zagreb_(UEFA_Championsleague_2022-10-05)_52_(cropped).jpg"
  },
  "kristijan jakic": {
    "name": "Kristijan Jakić",
    "birthDate": "1997-05-14",
    "height": "1.81 m",
    "club": "NK Lokomotiva",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Kristijan-Jakic.png"
  },
  "petar sucic": {
    "name": "Petar Sučić",
    "birthDate": "2003-10-25",
    "height": "1.83 m",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Petar_Sučić.png"
  },
  "nikola moro": {
    "name": "Nikola Moro",
    "birthDate": "1998-03-12",
    "height": "1.85 m",
    "club": "GNK Dinamo Zagreb",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Nikola_Moro_2020.jpg"
  },
  "toni fruk": {
    "name": "Toni Fruk",
    "birthDate": "2001-03-09",
    "height": "1.74 m",
    "position": "midfielder"
  },
  "ivan perisic": {
    "name": "Ivan Perišić",
    "birthDate": "1989-02-02",
    "height": "1.86 m",
    "club": "PSV Eindhoven",
    "position": "wing half",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Ivan_Perišić_(cropped).jpg"
  },
  "andrej kramaric": {
    "name": "Andrej Kramarić",
    "birthDate": "1991-06-19",
    "height": "1.80 m",
    "club": "TSG 1899 Hoffenheim",
    "position": "forward",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Andrej_Kramarić_2018.jpg"
  },
  "ante budimir": {
    "name": "Ante Budimir",
    "birthDate": "1991-07-22",
    "height": "1.90 m",
    "club": "Club Atlético Osasuna",
    "position": "forward",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Budimir,_Ante_FCSP_15-16_WP_(cropped).jpg"
  },
  "marco pasalic": {
    "name": "Marco Pašalić",
    "birthDate": "2000-09-14",
    "height": "1.77 m",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Inter_Miami_CF_0-3_Orlando_City_SC_(18_May_2025)_83_(cropped).jpg"
  },
  "eloy room": {
    "name": "Eloy Room",
    "birthDate": "1989-02-06",
    "height": "1.88 m",
    "club": "Columbus Crew",
    "position": "goalkeeper",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Room_Eloy_Columbus_Crew_SC_Meet_the_Team_2019.jpg"
  },
  "tyrick bodak": {
    "name": "Tyrick Bodak",
    "birthDate": "2002-02-15",
    "height": "1.90 m",
    "club": "SC Telstar",
    "position": "goalkeeper"
  },
  "trevor doornbusch": {
    "name": "Trevor Doornbusch",
    "birthDate": "1999-07-06",
    "height": "1.88 m",
    "club": "VVV-Venlo",
    "position": "goalkeeper",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Austria_U-18_vs._Netherlands_U-18_2017-03-23_(095)_(cropped).jpg"
  },
  "joshua brenet": {
    "name": "Joshua Brenet",
    "birthDate": "1994-03-20",
    "height": "1.81 m",
    "club": "Jong PSV",
    "position": "full-back",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/PSV_Eindhoven,_Teamcamp_Bad_Erlach,_July_2014_(076).jpg"
  },
  "roshon van eijma": {
    "name": "Roshon van Eijma",
    "birthDate": "1998-06-09",
    "height": "1.86 m",
    "club": "Roda JC Kerkrade",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Roshon_van_Eijma_2025_profile_photo_(cropped).png"
  },
  "sherel floranus": {
    "name": "Sherel Floranus",
    "birthDate": "1998-08-23",
    "height": "1.81 m",
    "club": "Sparta Rotterdam",
    "position": "full-back",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Sherel_Floranus_at_Antalyaspor_vs_Fatih_Karagümrük_SK_20220213.jpg"
  },
  "deveron fonville": {
    "name": "Deveron Fonville",
    "birthDate": "2003-05-16",
    "height": "1.88 m",
    "club": "N.E.C.",
    "position": "centre-back"
  },
  "jurien gaari": {
    "name": "Juriën Gaari",
    "birthDate": "1993-12-23",
    "height": "1.81 m",
    "club": "Kozakken Boys",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Go_Ahead_Eagles_-_RKC_Waalwijk_-_52830811567_(cropped).jpg"
  },
  "armando obispo": {
    "name": "Armando Obispo",
    "birthDate": "1999-03-05",
    "height": "1.85 m",
    "club": "SBV Vitesse",
    "position": "centre-back",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Austria_U-18_vs._Netherlands_U-18_2017-03-23_(060).jpg"
  },
  "shurandy sambo": {
    "name": "Shurandy Sambo",
    "birthDate": "2001-08-19",
    "height": "1.74 m",
    "position": "defender"
  },
  "leandro bacuna": {
    "name": "Leandro Bacuna",
    "birthDate": "1991-08-21",
    "height": "1.87 m",
    "club": "Curaçao men's national football team",
    "position": "wing half",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Leandro_Bacuna_Back_to_your_roots_Groningen.jpg"
  },
  "juninho bacuna": {
    "name": "Juninho Bacuna",
    "birthDate": "1997-08-07",
    "height": "1.85 m",
    "club": "FC Groningen",
    "position": "forward",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Juninho_bacuna-1531777726.jpeg"
  },
  "livano comenencia": {
    "name": "Livano Comenencia",
    "birthDate": "2004-02-03",
    "height": "1.91 m",
    "club": "Juventus F.C. Next Gen",
    "position": "midfielder"
  },
  "kevin felida": {
    "name": "Kevin Felida",
    "birthDate": "1999-11-11",
    "height": "1.72 m",
    "club": "FC Den Bosch",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Kevin_felida-1571753982.jpg"
  },
  "ar'jany martha": {
    "name": "Ar'jany Martha",
    "birthDate": "2003-09-04",
    "height": "1.80 m"
  },
  "tyrese noslin": {
    "name": "Nils Rossen",
    "birthDate": "2002-09-11",
    "height": "1.82 m",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Tyrese_Noslin-1751620543.jpg"
  },
  "godfried roemeratoe": {
    "name": "Godfried Roemeratoe",
    "birthDate": "1999-08-19",
    "height": "1.78 m",
    "club": "FC Twente",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Godfried_Roemeratoe.JPG"
  },
  "tahith chong": {
    "name": "Tahith Chong",
    "birthDate": "1999-12-04",
    "height": "1.85 m",
    "club": "Manchester United F.C.",
    "position": "winger",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Tahith_Chong_(38487929362).jpg"
  },
  "kenji gorre": {
    "name": "Kenji Gorré",
    "birthDate": "1994-09-29",
    "height": "1.78 m",
    "club": "Swansea City A.F.C.",
    "position": "wing half",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Kenji_Gorré_(2015).jpg"
  },
  "sontje hansen": {
    "name": "Sontje Hansen",
    "birthDate": "2002-05-18",
    "height": "1.68 m",
    "club": "AFC Ajax",
    "position": "forward",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/GAE_-_NEC_-_53493469456_(Sontje_Hansen).jpg"
  },
  "gervane kastaneer": {
    "name": "Gervane Kastaneer",
    "birthDate": "1996-06-09",
    "height": "1.76 m",
    "club": "FC Eindhoven",
    "position": "wing half",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Gervane-kastaneer.jpg"
  },
  "brandley kuwas": {
    "name": "Brandley Kuwas",
    "birthDate": "1992-09-19",
    "height": "1.78 m",
    "club": "Excelsior Rotterdam",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Brandley_Kuwas.png"
  },
  "jurgen locadia": {
    "name": "Jürgen Locadia",
    "birthDate": "1993-11-07",
    "height": "1.91 m",
    "club": "Brighton & Hove Albion F.C.",
    "position": "forward",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/PSV_Eindhoven,_Teamcamp_Bad_Erlach,_July_2014_(082).jpg"
  },
  "jearl margaritha": {
    "name": "Jearl Margaritha",
    "birthDate": "2000-04-10",
    "height": "1.81 m"
  },
  "lukas hornicek": {
    "name": "Lukáš Horníček",
    "birthDate": "2002-07-13",
    "height": "1.94 m"
  },
  "matej kovar": {
    "name": "Matěj Kovář",
    "birthDate": "2000-05-17",
    "height": "1.83 m",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Matj_kova-1772635856.JPG"
  },
  "jindrich stanek": {
    "name": "Jindřich Staněk",
    "birthDate": "1996-04-27",
    "height": "1.91 m",
    "club": "SK Slavia Prague",
    "position": "goalkeeper",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Jindřich_Staněk_brankář_FK_Viktorie_Plzeň_(r._2023)_(cropped).jpg"
  },
  "vladimir coufal": {
    "name": "Vladimír Coufal",
    "birthDate": "1992-08-22",
    "height": "1.74 m",
    "club": "Czech Republic national under-21 football team",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Vladimír_Coufal,_CZE-KUW_2021-11-11.jpg"
  },
  "david doudera": {
    "name": "David Douděra",
    "birthDate": "1998-05-31",
    "height": "1.75 m",
    "club": "Czechia men's national football team",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/David_Douděra,_U21_CZE-GRE_2019-10-10.jpg"
  },
  "tomas holes": {
    "name": "Tomáš Holeš",
    "birthDate": "1993-03-31",
    "height": "1.80 m",
    "club": "Czechia men's national football team",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Tomáš_Holeš_Jablonec-Ostrava.jpg"
  },
  "robin hranac": {
    "name": "Robin Hranáč",
    "birthDate": "2000-01-29",
    "height": "1.90 m",
    "club": "Czechia men's national football team",
    "position": "centre-back"
  },
  "david jurasek": {
    "name": "David Jurásek",
    "birthDate": "2000-08-07",
    "height": "1.83 m",
    "position": "midfielder"
  },
  "ladislav krejci": {
    "name": "Ladislav Krejčí",
    "birthDate": "1999-04-20",
    "height": "1.91 m",
    "club": "Wolverhampton Wanderers F.C.",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Ladislav_Krejčí_01112025_(3).jpg"
  },
  "jaroslav zeleny": {
    "name": "Jaroslav Zelený",
    "birthDate": "1992-08-20",
    "height": "1.90 m",
    "club": "AC Sparta Prague",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Открытая_тренировка_«Славии»_перед_матчем_с_«Динамо»._13_августа_2018_года_—_895565.jpg"
  },
  "pavel bucha": {
    "name": "Pavel Bucha",
    "birthDate": "1998-03-11",
    "height": "1.74 m",
    "club": "SK Slavia Prague",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Pavel_Bucha_NYCFC_v_Cincinnati_22_Apr_26-167.jpg"
  },
  "lukas cerv": {
    "name": "Lukas Cerv",
    "birthDate": "2001-04-10",
    "height": "1.82 m",
    "club": "Czechia men's national football team",
    "position": "midfielder"
  },
  "vladimir darida": {
    "name": "Vladimír Darida",
    "birthDate": "1990-08-08",
    "height": "1.70 m",
    "club": "FC Hradec Králové",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Vladimír_Darida_02.jpg"
  },
  "tomas ladra": {
    "name": "Tomáš Ladra",
    "birthDate": "1997-04-24",
    "height": "1.78 m",
    "club": "FK Mladá Boleslav",
    "position": "forward"
  },
  "lukas provod": {
    "name": "Lukáš Provod",
    "birthDate": "1996-10-23",
    "height": "1.89 m",
    "club": "SK Slavia Prague",
    "position": "forward"
  },
  "michal sadilek": {
    "name": "Michal Sadílek",
    "birthDate": "1999-05-31",
    "height": "1.69 m",
    "club": "Jong PSV",
    "position": "forward",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Michal_Sadílek,_U21_CZE-GRE_2019-10-10_(2).jpg"
  },
  "hugo sochurek": {
    "name": "Hugo Sochůrek",
    "birthDate": "2008-06-07"
  },
  "alexandr sojka": {
    "name": "Alexandr Sojka",
    "birthDate": "2003-00-00"
  },
  "mojmir chytil": {
    "name": "Mojmír Chytil",
    "birthDate": "1999-04-29",
    "height": "1.87 m",
    "club": "SK Sigma Olomouc",
    "position": "forward"
  },
  "hernan galindez": {
    "name": "Hernán Galíndez",
    "birthDate": "1987-03-30",
    "height": "1.88 m",
    "club": "Club Atlético Huracán",
    "position": "goalkeeper",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/HERNÁN_GALÍNDEZ.jpg"
  },
  "gonzalo valle": {
    "name": "Gonzalo Valle",
    "birthDate": "1996-02-28",
    "height": "1.85 m"
  },
  "angelo preciado": {
    "name": "Angelo Preciado",
    "birthDate": "1998-02-18",
    "height": "1.73 m",
    "club": "AC Sparta Prague",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Angelo_Preciado.jpg"
  },
  "joel ordonez": {
    "name": "Joel Ordóñez",
    "birthDate": "2004-04-21",
    "height": "1.88 m"
  },
  "moises caicedo": {
    "name": "Moisés Caicedo",
    "birthDate": "2001-11-02",
    "height": "1.78 m",
    "club": "Chelsea F.C.",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Moisés_Caicedo_20042025_(1).jpg"
  },
  "kendry paez": {
    "name": "Kendry Páez",
    "birthDate": "2007-05-04",
    "height": "1.77 m",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Kendry_Paez_2023_Sudamericano_Sub_17_(cropped).jpg"
  },
  "pedro vite": {
    "name": "Pedro Vite",
    "birthDate": "2002-03-09",
    "height": "1.70 m",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Inter_Miami_CF_3-1_UNAM_(6_August_2025)_04_(cropped).jpg"
  },
  "nilson angulo": {
    "name": "Nilson Angulo",
    "birthDate": "2003-06-19",
    "height": "1.82 m",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Nilson_Angulo_RSC_Anderlecht_2025.jpg"
  },
  "kevin rodriguez": {
    "name": "Kevin Rodriguez",
    "birthDate": "1996-09-25",
    "club": "Rio Grande Valley FC Toros",
    "position": "midfielder"
  },
  "mostafa shobeir": {
    "name": "Mostafa Shobeir",
    "birthDate": "2000-03-01",
    "height": "1.85 m",
    "position": "goalkeeper"
  },
  "el mahdy soliman": {
    "name": "Al-Mahdy Soliman",
    "birthDate": "1986-11-30",
    "club": "Smouha SC",
    "position": "goalkeeper"
  },
  "mohamed hany": {
    "name": "Mohamed Hany",
    "birthDate": "1996-01-25",
    "height": "1.75 m",
    "club": "Al Ahly SC",
    "position": "full-back",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Mohamed_Hany_in_2021_FIFA_Club_World_Cup.jpg"
  },
  "tarek alaa": {
    "name": "Tarek Alaa",
    "birthDate": "2002-01-05",
    "position": "defender"
  },
  "hamdi fathi": {
    "name": "Hamdi Fathi",
    "birthDate": "1994-09-29",
    "height": "1.80 m",
    "club": "ENPPI SC",
    "position": "forward",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Hamdy_Fathy.png"
  },
  "ramy rabia": {
    "name": "Ramy Rabia",
    "birthDate": "1993-05-20",
    "height": "1.56 m",
    "club": "Al Ahly SC",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/RamiRabea2020.jpg"
  },
  "yasser ibrahim": {
    "name": "Yasser Ibrahim",
    "birthDate": "1989-05-08",
    "height": "1.85 m",
    "club": "Smouha SC",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Yasser_Ibrahim_in_FIFA_Club_World_Cup.jpg"
  },
  "hossam abdelmaguid": {
    "name": "Hossam Abdelmaguid",
    "birthDate": "2001-04-30",
    "height": "1.93 m",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Hossam_Abdel_Maguid.jpg"
  },
  "karim hafez": {
    "name": "Karim Hafez",
    "birthDate": "1995-03-12",
    "height": "1.75 m",
    "club": "AC Omonia",
    "position": "full-back",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Karim_Hafez_(RC_Lens).jpg"
  },
  "marwan attia": {
    "name": "Marwan Attia",
    "birthDate": "1998-08-12",
    "height": "1.76 m",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Marwan_Attia.jpg"
  },
  "mahmoud saber": {
    "name": "Mahmoud Saber",
    "birthDate": "2001-07-30",
    "height": "1.70 m",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Egypt_vs._Morocco_2024_Summer_Olympics_men's_association_football_02_(cropped4).jpg"
  },
  "ahmed sayed zizo": {
    "name": "Ahmed Sayed",
    "birthDate": "1996-01-10",
    "height": "1.80 m",
    "club": "Al Ahly SC",
    "position": "winger",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Zizo_zsc.jpg"
  },
  "mahmoud trezeguet": {
    "name": "Trézéguet",
    "birthDate": "1994-10-01",
    "height": "1.80 m",
    "club": "İstanbul Başakşehir F.K.",
    "position": "forward",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Mahmoud_Trézéguet_in_world_cup_2018.jpg"
  },
  "ibrahim adel": {
    "name": "Ibrahim Adel",
    "birthDate": "2001-04-23",
    "height": "1.78 m",
    "club": "Egypt men's national football team",
    "position": "forward",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Ibrahim_Adel_2025.jpg"
  },
  "haitham hassan": {
    "name": "Haitham Hassan",
    "birthDate": "1986-01-01"
  },
  "mohamed salah": {
    "name": "Mohamed Salah",
    "birthDate": "1992-06-15",
    "height": "1.75 m",
    "club": "Liverpool F.C.",
    "position": "wing half",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Mohamed_Salah_2018.jpg"
  },
  "omar marmoush": {
    "name": "Omar Marmoush",
    "birthDate": "1999-02-07",
    "height": "1.83 m",
    "club": "Manchester City F.C.",
    "position": "forward",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/OmarMarmoush.png"
  },
  "dean henderson": {
    "name": "Dean Henderson",
    "birthDate": "1997-03-12",
    "height": "1.88 m",
    "club": "Crystal Palace F.C.",
    "position": "goalkeeper",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Fredrikstad_Fotballklubb_v_Crystal_Palace_FC,_28_August_2025_A11_(Dean_Henderson).jpg"
  },
  "james trafford": {
    "name": "Steppe Trafford",
    "birthDate": "2002-10-10",
    "height": "1.97 m",
    "club": "Manchester City F.C.",
    "position": "goalkeeper",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Queen_Park_Rangers_v_Burnley_26042025_(25)_(James_Trafford).jpg"
  },
  "tino livramento": {
    "name": "Tino Livramento",
    "birthDate": "2002-11-12",
    "height": "1.73 m",
    "club": "Newcastle United F.C.",
    "position": "defender"
  },
  "nico o'reilly": {
    "name": "Nico O'Reilly",
    "birthDate": "2005-03-21",
    "height": "1.93 m",
    "club": "England men's national association football team",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/ManCity20240722-020.jpg"
  },
  "jarell quansah": {
    "name": "Jarell Quansah",
    "birthDate": "2003-01-29",
    "height": "1.90 m",
    "club": "Bayer 04 Leverkusen",
    "position": "centre-back",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Jarell_Quansah_06042025_(1).jpg"
  },
  "djed spence": {
    "name": "Djed Spence",
    "birthDate": "2000-08-09",
    "height": "1.85 m",
    "club": "Tottenham Hotspur F.C.",
    "position": "full-back"
  },
  "elliot anderson": {
    "name": "Elliot Anderson",
    "birthDate": "2002-11-06",
    "height": "1.79 m",
    "club": "England men's national association football team",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Elliot_Anderson_Bristol_Rovers.jpg"
  },
  "eberechi eze": {
    "name": "Eberechi Eze",
    "birthDate": "1998-06-29",
    "height": "1.78 m",
    "club": "Arsenal F.C.",
    "position": "attacking midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/1_Eberechi_Eze_2026.jpg"
  },
  "kobbie mainoo": {
    "name": "Kobbie Mainoo",
    "birthDate": "2005-04-19",
    "height": "1.75 m",
    "club": "Manchester United F.C.",
    "position": "midfielder"
  },
  "noni madueke": {
    "name": "Noni Madueke",
    "birthDate": "2002-03-10",
    "height": "1.82 m",
    "club": "Arsenal F.C.",
    "position": "winger",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/1_Noni_Madueke.jpg"
  },
  "ivan toney": {
    "name": "Ivan Toney",
    "birthDate": "1996-03-16",
    "height": "1.79 m",
    "club": "Al Ahli FC",
    "position": "forward",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Ivan_Toney_2021_(cropped).jpg"
  },
  "ollie watkins": {
    "name": "Ollie Watkins",
    "birthDate": "1995-12-30",
    "height": "1.80 m",
    "club": "England men's national association football team",
    "position": "forward",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Manchester_United_v_Aston_Villa,_25_September_2021_(17)_(cropped).jpg"
  },
  "unai simon": {
    "name": "Unai Simón",
    "birthDate": "1997-06-11",
    "height": "1.92 m",
    "club": "Athletic Club",
    "position": "goalkeeper",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Unai_Simón_Mendibil.jpg"
  },
  "david raya": {
    "name": "David Raya",
    "birthDate": "1995-09-15",
    "height": "1.84 m",
    "club": "Arsenal F.C.",
    "position": "goalkeeper",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/David_Raya_in_2025_(cropped).jpg"
  },
  "joan garcia": {
    "name": "Joan Garcia",
    "birthDate": "2001-05-04",
    "height": "1.94 m",
    "club": "Futbol Club Barcelona",
    "position": "goalkeeper"
  },
  "alejandro grimaldo": {
    "name": "Álex Grimaldo",
    "birthDate": "1995-09-20",
    "height": "1.70 m",
    "club": "Bayer 04 Leverkusen",
    "position": "full-back",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Alex_Grimaldo_2020.png"
  },
  "pau cubarsi": {
    "name": "Pau Cubarsí",
    "birthDate": "2007-01-22",
    "height": "1.84 m",
    "club": "Futbol Club Barcelona",
    "position": "centre-back",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Pau_Cubarsí_(cropped).jpg"
  },
  "marc pubill": {
    "name": "Marc Pubill",
    "birthDate": "2003-06-30",
    "height": "1.91 m",
    "club": "Atlético Madrid",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Uzbekistan_vs._Spain,_2024_Summer_Olympic_men's_association_football,_2024-07-24_(250)_-_Marc_Pubill.jpg"
  },
  "eric garcia": {
    "name": "Eric García",
    "birthDate": "2001-01-09",
    "height": "1.82 m",
    "club": "Futbol Club Barcelona",
    "position": "centre-back",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Eric_Garcia_autographs_2022_(cropped).jpg"
  },
  "marcos llorente": {
    "name": "Marcos Llorente",
    "birthDate": "1995-01-30",
    "height": "1.84 m",
    "club": "Atlético Madrid",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Marcos_Llorente_2019.jpg"
  },
  "pedro porro": {
    "name": "Pedro Porrero",
    "birthDate": "1999-09-13",
    "height": "1.76 m",
    "club": "Tottenham Hotspur F.C.",
    "position": "wing half",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Pedro_Porro_2021.png"
  },
  "fabian ruiz": {
    "name": "Fabián Ruiz",
    "birthDate": "1996-04-03",
    "height": "1.89 m",
    "club": "Paris Saint-Germain FC",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/UEFA_EURO_qualifiers_Sweden_vs_Spain_20191015_Fabian_Ruiz_6_(cropped).jpg"
  },
  "gavi": {
    "name": "Gavi",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Gavi_panorama.jpg"
  },
  "rodrigo hernandez": {
    "name": "Rodri",
    "birthDate": "1996-06-22",
    "height": "1.90 m",
    "club": "Manchester City F.C.",
    "position": "defensive midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/RODRI_-_SWE_vs_ESP_-_UEFA_EURO_2020_QUALIFIERS_-_2019.10.15_(cropped).jpg"
  },
  "alex baena": {
    "name": "Álex Baena",
    "birthDate": "2001-07-20",
    "height": "1.74 m",
    "club": "Atlético Madrid",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Álex_Baena_2019.jpg"
  },
  "mikel oyarzabal": {
    "name": "Mikel Oyarzabal",
    "birthDate": "1997-04-21",
    "height": "1.81 m",
    "club": "Spain men's national football team",
    "position": "forward",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Oyarzabal_Spain_football_team_in_2025_(cropped).jpg"
  },
  "yeremy pino": {
    "name": "Yéremy Pino",
    "birthDate": "2002-10-20",
    "height": "1.72 m",
    "club": "Crystal Palace F.C.",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Manchester_United_v_Villarreal_CF,_29_September_2021_(07)_(cropped).jpg"
  },
  "borja iglesias": {
    "name": "Borja Iglesias",
    "birthDate": "1993-01-17",
    "height": "1.87 m",
    "club": "RC Celta de Vigo",
    "position": "forward",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Borja_iglesias_2019001_(cropped).jpg"
  },
  "victor munoz": {
    "name": "Víctor Muñoz",
    "height": "1.69 m",
    "club": "St. Mirren F.C.",
    "position": "midfielder"
  },
  "mike maignan": {
    "name": "Mike Maignan",
    "birthDate": "1995-07-03",
    "height": "1.91 m",
    "club": "AC Milan",
    "position": "goalkeeper",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Mike_Maignan_2022_Salzburg_vs_AC_Milan_2022-09-06.jpg"
  },
  "robin risser": {
    "name": "Robin Risser",
    "birthDate": "2004-12-02",
    "height": "1.93 m",
    "club": "RC Strasbourg Alsace",
    "position": "goalkeeper",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Montpellier-Strasbourg_18-08-24,_Robin_Risser_(cropped).jpg"
  },
  "brice samba": {
    "name": "Brice Samba",
    "birthDate": "1994-04-25",
    "height": "1.86 m",
    "club": "Nottingham Forest F.C.",
    "position": "goalkeeper",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Brice_Samba_asse_rcl_23_24.jpg"
  },
  "lucas digne": {
    "name": "Lucas Digne",
    "birthDate": "1993-07-20",
    "height": "1.78 m",
    "club": "Aston Villa F.C.",
    "position": "full-back",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Lucas_Digne_Everton_(cropped).jpg"
  },
  "malo gusto": {
    "name": "Malo Gusto",
    "birthDate": "2003-05-19",
    "height": "1.79 m",
    "club": "Chelsea F.C.",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Olympique_lyonnais_-_ES_Troyes_AC_L1_19-08-2022_-_Malo_Gusto.jpg"
  },
  "lucas hernandez": {
    "name": "Lucas Hernandez",
    "birthDate": "1996-02-14",
    "height": "1.84 m",
    "club": "Paris Saint-Germain FC",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Hernandez_asse_psg_2425.png"
  },
  "theo hernandez": {
    "name": "Théo Hernandez",
    "birthDate": "1997-10-06",
    "height": "1.84 m",
    "club": "Al Hilal SFC",
    "position": "full-back",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/FC_Salzburg_vs._AC_Mailand_(UEFA_Championsleague_2022-09-06)_Théo_Hernandez.jpg"
  },
  "ibrahima konate": {
    "name": "Ibrahima Konaté",
    "birthDate": "1999-05-25",
    "height": "1.94 m",
    "club": "Liverpool F.C.",
    "position": "centre-back",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Liverpool_FC_gegen_1._FSV_Mainz_05_(Testspiel_23._Juli_2021)_15_(cropped).jpg"
  },
  "jules kounde": {
    "name": "Jules Koundé",
    "birthDate": "1998-11-12",
    "height": "1.80 m",
    "club": "Futbol Club Barcelona",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Jules_Koundé_2020.jpg"
  },
  "maxence lacroix": {
    "name": "Maxence Lacroix",
    "birthDate": "2000-04-06",
    "height": "1.90 m",
    "club": "Crystal Palace F.C.",
    "position": "centre-back",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Fredrikstad_Fotballklubb_v_Crystal_Palace_FC,_28_August_2025_A34_(Maxence_Lacroix).jpg"
  },
  "william saliba": {
    "name": "William Saliba",
    "birthDate": "2001-03-24",
    "height": "1.92 m",
    "club": "Arsenal F.C.",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/1_william_saliba_arsenal_2025_(cropped).jpg"
  },
  "dayot upamecano": {
    "name": "Dayot Upamecano",
    "birthDate": "1998-10-27",
    "height": "1.86 m",
    "club": "FC Bayern Munich",
    "position": "centre-back",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/2022-07-30_Fußball,_Männer,_DFL-Supercup,_RB_Leipzig_-_FC_Bayern_München_1DX_3244_by_Stepro_(cropped).jpg"
  },
  "n'golo kante": {
    "name": "N'Golo Kanté",
    "birthDate": "1991-03-29",
    "height": "1.71 m",
    "club": "Fenerbahçe Istanbul",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/N'Golo_Kanté_at_Baku_before_2019_UEFA_Europe_League_Final.jpg"
  },
  "manu kone": {
    "name": "Manu Koné",
    "birthDate": "2001-05-17",
    "height": "1.85 m",
    "club": "Toulouse FC",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Kouadio_Manu_Koné_(2019-08-31)_(cropped).jpg"
  },
  "adrien rabiot": {
    "name": "Adrien Rabiot",
    "birthDate": "1995-04-03",
    "height": "1.91 m",
    "club": "AC Milan",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Rabiot_asse_om_2425.png"
  },
  "aurelien tchouameni": {
    "name": "Aurélien Tchouaméni",
    "birthDate": "2000-01-27",
    "height": "1.87 m",
    "club": "Real Madrid Club de Fútbol",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Aurélien_Tchouaméni.jpg"
  },
  "warren zaire-emery": {
    "name": "Warren Zaïre-Emery",
    "birthDate": "2006-03-08",
    "height": "1.78 m",
    "club": "Paris Saint-Germain FC",
    "position": "defensive midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Zaire_asse_psg_2425.png"
  },
  "maghnes akliouche": {
    "name": "Maghnes Akliouche",
    "birthDate": "2002-02-25",
    "height": "1.83 m",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Akliouche2_asse_asm_2425.png"
  },
  "rayan cherki": {
    "name": "Rayan Cherki",
    "birthDate": "2003-08-17",
    "height": "1.76 m",
    "club": "Manchester City F.C.",
    "position": "forward",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Cherki_asse_ol_2425.png"
  },
  "ousmane dembele": {
    "name": "Ousmane Dembélé",
    "birthDate": "1997-05-15",
    "height": "1.79 m",
    "club": "Paris Saint-Germain FC",
    "position": "forward",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Ousmane_Dembélé_2018_(cropped).jpg"
  },
  "jean-philippe mateta": {
    "name": "Jean-Philippe Mateta",
    "birthDate": "1997-06-28",
    "height": "1.92 m",
    "club": "Crystal Palace F.C.",
    "position": "wing half",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Fredrikstad_Fotballklubb_v_Crystal_Palace_FC,_28_August_2025_B11_(JP_Mateta).jpg"
  },
  "michael olise": {
    "name": "Michael Olise",
    "birthDate": "2001-12-12",
    "height": "1.84 m",
    "club": "FC Bayern Munich",
    "position": "winger",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/FC_RB_Salzburg_gegen_FC_Bayern_München_(2026-01-06_Testspiel)_10.jpg"
  },
  "marcus thuram": {
    "name": "Marcus Thuram",
    "birthDate": "1997-08-06",
    "height": "1.92 m",
    "club": "Inter Milan",
    "position": "forward",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/MARCUS_THURAM_-_INTER_MILAN_vs_SALZBURG.jpg"
  },
  "oliver baumann": {
    "name": "Oliver Baumann",
    "birthDate": "1990-06-02",
    "height": "1.87 m",
    "club": "TSG 1899 Hoffenheim",
    "position": "goalkeeper",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/OliverBaumann_(cropped).jpg"
  },
  "manuel neuer": {
    "name": "Manuel Neuer",
    "birthDate": "1986-03-27",
    "height": "1.93 m",
    "club": "FC Bayern Munich",
    "position": "goalkeeper",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/20180602_FIFA_Friendly_Match_Austria_vs._Germany_Team_Germany_850_0740.jpg"
  },
  "alexander nubel": {
    "name": "Alexander Nübel",
    "birthDate": "1996-09-30",
    "height": "1.93 m",
    "club": "Germany national under-21 football team",
    "position": "goalkeeper",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Alexander_nuebel.jpg"
  },
  "antonio rudiger": {
    "name": "Antonio Rüdiger",
    "birthDate": "1993-03-03",
    "height": "1.90 m",
    "club": "Germany men's national association football team",
    "position": "centre-back",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/20180602_FIFA_Friendly_Match_Austria_vs._Germany_Antonio_Rüdiger_850_0711.jpg"
  },
  "nico schlotterbeck": {
    "name": "Nico Schlotterbeck",
    "birthDate": "1999-12-01",
    "height": "1.91 m",
    "club": "Borussia Dortmund",
    "position": "centre-back",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/2023-08-12_TSV_Schott_Mainz_gegen_Borussia_Dortmund_(DFB-Pokal_2023-24)_by_Sandro_Halank–069.jpg"
  },
  "malick thiaw": {
    "name": "Malick Thiaw",
    "birthDate": "2001-08-08",
    "height": "1.94 m",
    "club": "Newcastle United F.C.",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Milan_Lecce_2023_Thiaw.jpg"
  },
  "pascal gross": {
    "name": "Pascal Groß",
    "birthDate": "1991-06-15",
    "height": "1.81 m",
    "club": "Brighton & Hove Albion F.C.",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/PASCAL_GROSS.jpg"
  },
  "felix nmecha": {
    "name": "Felix Nmecha",
    "birthDate": "2000-10-10",
    "height": "1.90 m",
    "club": "Manchester City F.C.",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Felix_Nmecha_2021.jpg"
  },
  "angelo stiller": {
    "name": "Angelo Stiller",
    "birthDate": "2001-04-04",
    "height": "1.83 m",
    "club": "VfB Stuttgart",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Angelo_Stiller_2023.jpg"
  },
  "lennart karl": {
    "name": "Lennart Karl",
    "birthDate": "2008-02-22",
    "height": "1.68 m"
  },
  "maximilian beier": {
    "name": "Maximilian Beier",
    "birthDate": "2002-10-17",
    "height": "1.82 m",
    "club": "Borussia Dortmund",
    "position": "forward",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Maximilian_Beier_training_with_Borussia_Dortmund_(2026).jpg"
  },
  "jamie leweling": {
    "name": "Jamie Leweling",
    "birthDate": "2001-02-26",
    "height": "1.84 m",
    "club": "SpVgg Greuther Fürth",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Jamie_leweling.jpg"
  },
  "leroy sane": {
    "name": "Leroy Sané",
    "birthDate": "1996-01-11",
    "height": "1.83 m",
    "club": "Galatasaray S.K.",
    "position": "winger",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/20180602_FIFA_Friendly_Match_Austria_vs._Germany_Leroy_Sané_850_0668.jpg"
  },
  "deniz undav": {
    "name": "Deniz Undav",
    "birthDate": "1996-07-19",
    "height": "1.78 m",
    "club": "VfB Stuttgart",
    "position": "forward",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Deniz_undav.jpg"
  },
  "nick woltemade": {
    "name": "Nick Woltemade",
    "birthDate": "2002-02-14",
    "height": "1.98 m",
    "club": "Newcastle United F.C.",
    "position": "forward",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Nick_Woltemade_24052026_(5).jpg"
  },
  "lawrence ati zigi": {
    "name": "Lawrence Ati-Zigi",
    "birthDate": "1996-11-29",
    "height": "1.88 m",
    "club": "FC Liefering",
    "position": "goalkeeper",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/FC_Liefering_gegen_Kapfenberger_SV_35.JPG"
  },
  "tariq lamptey": {
    "name": "Tariq Lamptey",
    "birthDate": "2000-09-30",
    "height": "1.63 m",
    "club": "Brighton & Hove Albion F.C.",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Tariq_Lamptey_2022.jpg"
  },
  "mohammed salisu": {
    "name": "Mohammed Salisu",
    "birthDate": "1999-04-17",
    "height": "1.91 m",
    "club": "Real Valladolid",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Salisu_asse_asm_2425.png"
  },
  "alidu seidu": {
    "name": "Alidu Seidu",
    "birthDate": "2000-06-04",
    "height": "1.73 m",
    "position": "defender"
  },
  "alexander djiku": {
    "name": "Alexander Djiku",
    "birthDate": "1994-08-09",
    "height": "1.82 m",
    "club": "Spartak Moscow",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Ghana_(1)_(cropped_Alexander_Djiku).jpg"
  },
  "gideon mensah": {
    "name": "Gideon Mensah",
    "birthDate": "1998-07-18",
    "height": "1.78 m",
    "club": "FC Red Bull Salzburg",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/FC_Liefering_gegen_SC_Wiener_Neustadt_(23._September_2016)_05.jpg"
  },
  "caleb yirenkyi": {
    "name": "Caleb Yirenkyi",
    "birthDate": "2006-01-15",
    "height": "1.82 m"
  },
  "thomas partey": {
    "name": "Thomas Partey",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/ATL-Madrid-Lokomotiv001-Thomas_(cropped).jpg"
  },
  "salis abdul samed": {
    "name": "Salis Abdul Samed",
    "birthDate": "2000-03-26",
    "height": "1.79 m",
    "club": "R.C. Lens",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Lens_-_Reims_(12-05-2023)_45.jpg"
  },
  "kamaldeen sulemana": {
    "name": "Kamaldeen Sulemana",
    "birthDate": "2002-02-15",
    "height": "1.74 m",
    "club": "FC Nordsjælland",
    "position": "wing half",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Kamaldeen_Sulemana_(cropped).jpg"
  },
  "mohammed kudus": {
    "name": "Mohammed Kudus",
    "birthDate": "2000-08-02",
    "height": "1.75 m",
    "club": "Tottenham Hotspur F.C.",
    "position": "forward",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/GAE_-_Ajax_-_52788309814_(Mohammed_Kudus).jpg"
  },
  "inaki williams": {
    "name": "Iñaki Williams",
    "birthDate": "1994-06-15",
    "height": "1.86 m",
    "club": "Ghana men's national football team",
    "position": "forward",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Iñaki_Williams.png"
  },
  "jordan ayew": {
    "name": "Jordan Ayew",
    "birthDate": "1991-09-11",
    "height": "1.82 m",
    "club": "Leicester City F.C.",
    "position": "forward",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/20150331_Mali_vs_Ghana_023.jpg"
  },
  "joseph paintsil": {
    "name": "Joseph Paintsil",
    "birthDate": "1998-02-01",
    "height": "1.70 m",
    "club": "K.R.C. Genk",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Joseph_Paintsil.2020.jpg"
  },
  "osman bukari": {
    "name": "Osman Bukari",
    "birthDate": "1998-12-13",
    "height": "1.70 m",
    "club": "RTS Widzew Łódź",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Osman_Bukari.jpg"
  },
  "antoine semenyo": {
    "name": "Antoine Semenyo",
    "birthDate": "2000-01-07",
    "height": "1.85 m",
    "club": "Manchester City F.C.",
    "position": "forward",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Antoine_Semenyo_2026.png"
  },
  "alexandre pierre": {
    "name": "Alexandre Pierre",
    "birthDate": "2001-02-25",
    "height": "1.90 m",
    "club": "Stade Lavallois B",
    "position": "goalkeeper"
  },
  "josue duverger": {
    "name": "Josué Duverger",
    "birthDate": "2000-04-27",
    "club": "Vitória F.C.",
    "position": "goalkeeper"
  },
  "wilguens paugain": {
    "name": "Wilguens Paugain",
    "birthDate": "2001-08-24",
    "height": "1.80 m",
    "position": "defender"
  },
  "duke lacroix": {
    "name": "Duke Lacroix",
    "birthDate": "1993-10-14",
    "club": "Indy Eleven",
    "position": "forward"
  },
  "martin experience": {
    "name": "Martin Experiénce",
    "birthDate": "1998-03-09",
    "height": "1.78 m",
    "position": "defender"
  },
  "jean-kevin duverne": {
    "name": "Jean-Kévin Duverne",
    "birthDate": "1997-07-12",
    "height": "1.84 m",
    "club": "R.C. Lens",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/RC_Lens_-_FC_Nantes_(28-10-2023)_-_Duverne.jpg"
  },
  "keeto thermoncy": {
    "name": "Keeto Thermoncy",
    "birthDate": "2006-03-29"
  },
  "carl fred sainte": {
    "name": "Carl Sainté",
    "birthDate": "2002-08-09",
    "height": "1.85 m",
    "position": "midfielder"
  },
  "danley jean jacques": {
    "name": "Danley Jean Jacques",
    "birthDate": "2000-05-20",
    "height": "1.80 m",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Danley_Jean_Jacques_Philadelphia_Union_New_York_City_FC_Nov_23_2025-062_(cropped).jpg"
  },
  "woodensky pierre": {
    "name": "Woodensky Pierre",
    "birthDate": "2004-12-30"
  },
  "dominique simon": {
    "name": "Dominique Simon",
    "birthDate": "2000-07-29"
  },
  "don deedson louicius": {
    "name": "Louicius Don Deedson",
    "birthDate": "2001-02-11",
    "height": "1.78 m",
    "club": "Hobro IK",
    "position": "forward"
  },
  "josue casimir": {
    "name": "Josué Casimir",
    "birthDate": "2001-09-24",
    "height": "1.78 m"
  },
  "derrick etienne": {
    "name": "Derrick Etienne",
    "club": "Long Island Rough Riders",
    "position": "forward"
  },
  "ruben providence": {
    "name": "Ruben Providence",
    "birthDate": "2001-07-07",
    "height": "1.78 m"
  },
  "wilson isidor": {
    "name": "Wilson Isidor",
    "birthDate": "2000-08-27",
    "height": "1.86 m",
    "club": "AS Monaco FC",
    "position": "forward",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Wilson_Isidor_in_2022.jpg"
  },
  "yassin fortune": {
    "name": "Yassin Fortuné",
    "birthDate": "1999-01-30",
    "height": "1.84 m",
    "club": "FC Sion",
    "position": "wing half"
  },
  "lenny joseph": {
    "name": "Lenny Joseph",
    "birthDate": "2000-10-12",
    "height": "1.83 m"
  },
  "alireza beiranvand": {
    "name": "Alireza Beiranvand",
    "birthDate": "1992-09-21",
    "height": "1.96 m",
    "club": "Persepolis F.C.",
    "position": "goalkeeper",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Alireza_Beiranvand_-_2018_FIFA_World_Cup.jpg"
  },
  "morteza pouraliganji": {
    "name": "Morteza Pouraliganji",
    "birthDate": "1992-04-19",
    "height": "1.84 m",
    "club": "Iran men's national football team",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Morteza_Pouraliganji_at_IK_Airport.jpg"
  },
  "ehsan hajsafi": {
    "name": "Ehsan Hajsafi",
    "birthDate": "1990-02-25",
    "height": "1.76 m",
    "club": "Sepahan F.C.",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Ehsan_Hajsafi_2018.jpg"
  },
  "milad mohammadi": {
    "name": "Milad Mohammadi",
    "birthDate": "1993-09-29",
    "height": "1.78 m",
    "club": "FC Akhmat Grozny",
    "position": "wing half",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Milad_Mohammadi.jpg"
  },
  "shojae khalilzadeh": {
    "name": "Shoja' Khalilzadeh",
    "birthDate": "1989-05-14",
    "height": "1.83 m",
    "club": "Al Ahli SC",
    "position": "centre-back",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Shoja_Khalilzadeh3.jpg"
  },
  "ramin rezaeian": {
    "name": "Ramin Rezaian",
    "birthDate": "1990-03-21",
    "height": "1.85 m",
    "club": "Persepolis F.C.",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Ramin_Rezaeian_at_the_2018_FIFA_World_Cup.jpg"
  },
  "hossein kanaani": {
    "name": "Mohammad Hossein Kanaanizadegan",
    "birthDate": "1994-03-23",
    "height": "1.88 m",
    "club": "Al Ahli SC",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Hossein_Kanaanizadegan_2018_1.jpg"
  },
  "sadegh moharrami": {
    "name": "Sadegh Moharrami",
    "birthDate": "1996-03-01",
    "height": "1.74 m",
    "club": "Iran national under-20 football team",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Sadegh_Moharrami_ACL_2018.jpg"
  },
  "saleh hardani": {
    "name": "Saleh Hardani",
    "birthDate": "1996-09-14",
    "height": "1.76 m",
    "club": "Foolad F.C.",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Esteghlal_Celebrate_IPL_Title_Win_at_Azadi_Stadium_-_020.jpg"
  },
  "saeed ezatolahi": {
    "name": "Saeid Ezzatollahi",
    "birthDate": "1996-10-01",
    "height": "1.90 m",
    "club": "Shabab AlAhli Dubai Club",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Saeid_Ezatolahi_at_Iran_training_2018.jpg"
  },
  "saman ghoddos": {
    "name": "Saman Ghoddos",
    "birthDate": "1993-09-06",
    "height": "1.76 m",
    "club": "Brentford F.C.",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Saman_Ghoddos_-_2018_FIFA_World_Cup.jpg"
  },
  "omid noorafkan": {
    "name": "Omid Noorafkan",
    "birthDate": "1997-04-09",
    "height": "1.82 m",
    "club": "Esteghlal F.C.",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Omid_Norafkan.jpg"
  },
  "roozbeh cheshmi": {
    "name": "Rouzbeh Cheshmi",
    "birthDate": "1993-07-24",
    "height": "1.95 m",
    "club": "Esteghlal F.C.",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Esteghlal_FC_in_training,_24_July_2022_-_22.jpg"
  },
  "mohammad mohebi": {
    "name": "Mohammad Mohebi",
    "birthDate": "1998-12-20",
    "height": "1.76 m",
    "club": "Esteghlal F.C.",
    "position": "winger",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Mohammad_Mohebi,_Esteghlal_FC_vs_Gol_Gohar_Sirjan_FC,_6_March_2023.jpg"
  },
  "sardar azmoun": {
    "name": "Sardar Azmoun",
    "birthDate": "1995-01-01",
    "height": "1.86 m",
    "club": "Shabab AlAhli Dubai Club",
    "position": "wing half",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/2018_FIFA_World_Cup_Asian_Qualifiers_-_Sardar_Azmoun_and_Iman_Farzin.jpg"
  },
  "mehdi taremi": {
    "name": "Mehdi Taremi",
    "birthDate": "1992-07-18",
    "height": "1.86 m",
    "club": "Olympiacos F.C.",
    "position": "forward",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Iran_-_Japan,_AFC_Asian_Cup_2019_42_(cropped).jpg"
  },
  "alireza jahanbakhsh": {
    "name": "Alireza Jahanbakhsh",
    "birthDate": "1993-08-11",
    "height": "1.80 m",
    "club": "F.C. Verbroedering Dender Eendracht Hekelgem",
    "position": "wing half",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Alireza_Jahanbakhsh_at_IRNPOR_match_2018_FIFA_World_Cup_02.jpg"
  },
  "ali gholizadeh": {
    "name": "Ali Gholizadeh",
    "birthDate": "1996-03-10",
    "height": "1.76 m",
    "club": "Lech Poznań",
    "position": "forward",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Ali_Gholizadeh_Lech_Poznań_2023_prezentacja.jpg"
  },
  "jalal hassan": {
    "name": "Jalal Hasan",
    "birthDate": "1991-05-18",
    "club": "Al-Zawra'a SC",
    "position": "goalkeeper",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Jalal12.JPG"
  },
  "rebin sulaka": {
    "name": "Rebin Sulaka",
    "birthDate": "1992-04-12",
    "height": "1.92 m",
    "club": "Elverum Fotball",
    "position": "centre-back",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/240519_FC_서울_포토타임_(Rebin_Sulaka).jpg"
  },
  "hussein ali": {
    "name": "Hussein Ali",
    "birthDate": "2002-03-01",
    "height": "1.80 m",
    "club": "Örebro SK",
    "position": "defender",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/GAE_-_SC_Heerenveen_-Hussein_Ali.jpg"
  },
  "merchas doski": {
    "name": "Merchas Doski",
    "birthDate": "1999-12-07",
    "height": "1.73 m",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Merchas_doski.jpg"
  },
  "zaid tahseen": {
    "name": "Zaid Tahseen",
    "birthDate": "2001-01-29",
    "height": "1.93 m",
    "club": "Iraq men's national football team",
    "position": "defender"
  },
  "manaf younis": {
    "name": "Manaf Younis",
    "birthDate": "1996-12-29",
    "position": "defender"
  },
  "zidane iqbal": {
    "name": "Zidane Iqbal",
    "birthDate": "2003-04-27",
    "height": "1.81 m",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Zidane_Iqbal_debut.jpg"
  },
  "amir al-ammari": {
    "name": "Amir Al-Ammari",
    "birthDate": "1997-07-27",
    "height": "1.80 m",
    "club": "Husqvarna FF",
    "position": "wing half",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Amir_Al-Ammari_(Halmstad_vs_Degerfors,_7_October_2023).jpg"
  },
  "ali jasim": {
    "name": "Ali Jasim",
    "birthDate": "1987-07-17",
    "club": "Umeå FC"
  },
  "youssef amyn": {
    "name": "Youssef Amyn",
    "birthDate": "2003-08-21",
    "height": "1.75 m",
    "club": "Feyenoord Academy",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/4822944_AE7I9304_(cropped).jpg"
  },
  "aimar sher": {
    "name": "Aimar Sher",
    "birthDate": "2002-12-20",
    "height": "1.75 m",
    "club": "Hammarby Fotboll",
    "position": "midfielder",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/GAE_-_FC_Groningen_-_52878021366_(cropped).jpg"
  },
  "marko farji": {
    "name": "Marko Farji",
    "birthDate": "2004-03-16",
    "height": "1.84 m"
  },
  "osama rashid": {
    "name": "Osama Rashid",
    "birthDate": "1992-01-13",
    "height": "1.78 m",
    "club": "S.C. Farense",
    "position": "midfielder"
  },
  "ali al-hamadi": {
    "name": "Ali Al-Hamadi",
    "birthDate": "2002-03-01",
    "height": "1.83 m",
    "club": "Stoke City F.C.",
    "position": "forward",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/Ali_Al-Hamadi.jpg"
  },
  "aymen hussein": {
    "name": "Aymen Hussein",
    "birthDate": "1996-03-22",
    "height": "1.89 m",
    "club": "Al-Quwa Al-Jawiya",
    "position": "forward",
    "photo": "https://commons.wikimedia.org/wiki/Special:FilePath/4822953_AE7I9053_(cropped2).jpg"
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
const calendarEvents = [
  {
    id: "ceremonia-inaugural",
    type: "event",
    date: "2026-06-11 12:30",
    title: "Ceremonia inaugural",
    phase: "Ceremonias",
    stadium: "Estadio Ciudad de Mexico",
    city: "Ciudad de Mexico",
    status: "pendiente",
    description: "Antes de Mexico vs Sudafrica"
  },
  {
    id: "ceremonia-clausura",
    type: "event",
    date: "2026-07-19 12:30",
    title: "Ceremonia de clausura",
    phase: "Ceremonias",
    stadium: "New York New Jersey Stadium",
    city: "New York/New Jersey",
    status: "pendiente",
    description: "Antes de la final"
  }
];
const matchResults = JSON.parse(localStorage.getItem("fifa2026-results") || "{}");
const colombiaBroadcastPlatforms = [
  { id: "caracol", label: "Caracol", detail: "TV abierta", shortLabel: "CAR" },
  { id: "rcn", label: "RCN", detail: "TV abierta", shortLabel: "RCN" },
  { id: "winsports", label: "Win Sports", detail: "TV paga", shortLabel: "WIN" },
  { id: "dsports", label: "DSports", detail: "DirecTV / DGO", shortLabel: "DSP" },
  { id: "disney", label: "Disney+", detail: "streaming", shortLabel: "D+" }
];
const colombiaBroadcastByMatchId = {
  1: ["dsports", "caracol", "rcn", "disney"],
  2: ["dsports", "winsports"],
  3: ["dsports", "winsports", "disney"],
  4: ["dsports", "caracol", "rcn", "disney"],
  5: ["dsports", "winsports"],
  6: ["dsports", "caracol", "rcn", "disney"],
  7: ["dsports"],
  8: ["dsports"],
  9: ["dsports"],
  10: ["dsports", "caracol", "rcn", "disney"],
  11: ["dsports", "winsports", "disney"],
  12: ["dsports"],
  13: ["dsports", "caracol", "rcn", "disney"],
  14: ["dsports"],
  15: ["dsports", "winsports", "disney"],
  16: ["dsports"],
  17: ["dsports"],
  18: ["dsports", "winsports"],
  19: ["dsports", "caracol", "rcn", "disney"],
  20: ["dsports"],
  21: ["dsports"],
  22: ["dsports", "winsports"],
  23: ["dsports"],
  24: ["dsports", "caracol", "rcn", "disney"],
  25: ["dsports"],
  26: ["dsports", "caracol", "rcn", "disney"],
  27: ["dsports"],
  28: ["dsports", "winsports"],
  29: ["dsports", "winsports"],
  30: ["dsports"],
  31: ["dsports", "caracol", "rcn"],
  32: ["dsports"],
  33: ["dsports"],
  34: ["dsports", "winsports"],
  35: ["dsports", "caracol", "rcn", "disney"],
  36: ["dsports", "winsports", "disney"],
  37: ["dsports", "winsports", "disney"],
  38: ["dsports", "caracol", "rcn", "disney"],
  39: ["dsports"],
  40: ["dsports"],
  41: ["dsports", "caracol", "rcn", "disney"],
  42: ["dsports"],
  43: ["dsports", "winsports"],
  44: ["dsports"],
  45: ["dsports", "winsports"],
  46: ["dsports"],
  47: ["dsports"],
  48: ["dsports", "caracol", "rcn", "disney"],
  49: ["dsports"],
  50: ["dsports"],
  51: ["dsports", "caracol", "rcn", "disney"],
  52: ["dsports"],
  53: ["dsports", "winsports"],
  54: ["dsports"],
  55: ["dsports", "caracol", "rcn", "disney"],
  56: ["dsports"],
  57: ["dsports", "winsports"],
  58: ["dsports"],
  59: ["dsports"],
  60: ["dsports"],
  61: ["dsports", "winsports"],
  62: ["dsports"],
  63: ["dsports", "caracol", "rcn", "disney"],
  64: ["dsports"],
  65: ["dsports"],
  66: ["dsports"],
  67: ["dsports"],
  68: ["dsports"],
  69: ["dsports", "caracol", "rcn", "disney"],
  70: ["dsports"],
  71: ["dsports", "winsports", "disney"],
  72: ["dsports"],
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

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const TournamentService = {
  calculateStandings(groupMatches) {
    const standings = {};
    Object.entries(groups).forEach(([code, teams]) => {
      standings[code] = teams.map(([team]) => ({
        team, played: 0, won: 0, drawn: 0, lost: 0,
        goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0
      }));
    });

    groupMatches.filter(getMatchResult).forEach((match) => {
      const table = standings[match.group];
      if (!table) return;
      const home = table.find((row) => row.team === match.home);
      const away = table.find((row) => row.team === match.away);
      this._updateRow(home, match.homeScore, match.awayScore);
      this._updateRow(away, match.awayScore, match.homeScore);
    });

    Object.values(standings).forEach((table) => table.sort(compareStandingRows));
    return standings;
  },

  _updateRow(row, gf, ga) {
    row.played++;
    row.goalsFor += gf;
    row.goalsAgainst += ga;
    row.goalDifference = row.goalsFor - row.goalsAgainst;
    if (gf > ga) row.won++, row.points += 3;
    else if (gf === ga) row.drawn++, row.points += 1;
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
  return date.getFullYear() + "-" +
    String(date.getMonth() + 1).padStart(2, "0") + "-" +
    String(date.getDate()).padStart(2, "0") + " " +
    String(date.getHours()).padStart(2, "0") + ":" +
    String(date.getMinutes()).padStart(2, "0");
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

function parseTournamentDate(value) {
  return new Date(value.replace(" ", "T") + "-05:00");
}

function getTournamentDateParts(value) {
  const [datePart, timePart = "00:00"] = value.split(" ");
  const [year, month, day] = datePart.split("-").map(Number);
  const [hour, minute] = timePart.split(":").map(Number);
  return { year, month: month - 1, day, hour, minute };
}

function getCalendarItems() {
  return [...matches, ...calendarEvents].sort((a, b) => parseTournamentDate(a.date) - parseTournamentDate(b.date));
}

function isCalendarEvent(item) {
  return item.type === "event";
}

function getCalendarItemLabel(item) {
  return isCalendarEvent(item) ? item.title : item.home + " vs " + item.away;
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

function isGroupComplete(table) {
  return table.length > 0 && table.every((row) => row.played === 3);
}

function getQualifiedTeams(standings = getGroupStandings()) {
  const qualifiers = {};
  const allThirds = [];
  const completeGroupCount = Object.values(standings).filter(isGroupComplete).length;
  if (completeGroupCount !== Object.keys(groups).length) return qualifiers;

  Object.entries(standings).forEach(([groupCode, table], groupIndex) => {
    const groupNum = groupIndex + 1;
    qualifiers[`1G${groupNum}`] = table[0]?.team || "";
    qualifiers[`2G${groupNum}`] = table[1]?.team || "";
    
    if (table[2]) {
      allThirds.push({ ...table[2], groupCode });
    }
  });

  // Ordenamos todos los terceros para encontrar los 8 mejores
  const sortedThirds = [...allThirds].sort(compareStandingRows);
  sortedThirds.slice(0, 8).forEach((row, index) => {
    qualifiers[`3G${index + 1}`] = row.team;
  });

  return qualifiers;
}

function getThirdsRanking() {
  const standings = getGroupStandings();
  const allThirds = [];
  Object.entries(standings).forEach(([groupCode, table]) => {
    if (table[2]) {
      allThirds.push({ ...table[2], groupCode });
    }
  });
  return allThirds.sort(compareStandingRows);
}

function getSeedLabel(seed) {
  const directSeed = seed.match(/^([123])G(\d+)$/);
  if (directSeed) {
    const ordinal = directSeed[1] === "1" ? "1o" : directSeed[1] === "2" ? "2o" : "3o";
    return `${ordinal} Grupo ${getGroupCodeFromSeed(directSeed[2]) || directSeed[2]}`;
  }

  const thirdPlaceGroupSeed = seed.match(/^3G_([A-Z]+)$/);
  if (thirdPlaceGroupSeed) return `Mejor 3o (${thirdPlaceGroupSeed[1].split("").join("/")})`;

  const thirdRankSeed = seed.match(/^3G(\d+)$/);
  if (thirdRankSeed) return `${thirdRankSeed[1]}o mejor tercero`;

  return seed;
}

function resolveKnockoutSeed(seed, qualifiers) {
  if (qualifiers[seed]) return qualifiers[seed];

  // Mapeo de placeholders de mejores terceros (3G_ABC, etc) a la posicion en el ranking
  const thirdPlaceMapping = {
    "3G_ABC": "3G1",
    "3G_DEF": "3G2",
    "3G_GHI": "3G3",
    "3G_JKL": "3G4",
    "3G_MNO": "3G5" // Expandible segun necesites en data.js
  };

  const effectiveSeed = thirdPlaceMapping[seed] || seed;
  if (qualifiers[effectiveSeed]) return qualifiers[effectiveSeed];
  if (/^[123]G\d+$/.test(seed) || /^3G_[A-Z]+$/.test(seed)) return getSeedLabel(seed);

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

function getColombiaBroadcastPlatforms(match) {
  const ids = colombiaBroadcastByMatchId[match.id] || [];
  return ids
    .map((id) => colombiaBroadcastPlatforms.find((platform) => platform.id === id))
    .filter(Boolean);
}

function getBroadcastSummary(match) {
  return getColombiaBroadcastPlatforms(match)
    .map((platform) => `${platform.label} (${platform.detail})`)
    .join(" | ");
}

function broadcastDetail(match) {
  const summary = getBroadcastSummary(match);
  return summary ? `<small class="broadcast-detail">Transmision Colombia: ${summary}</small>` : "";
}

function broadcastBadge(match, options = {}) {
  const platforms = getColombiaBroadcastPlatforms(match);
  if (!platforms.length) return "";

  return `<span class="match-broadcast-icons">` +
    platforms.map(p => `
      <span class="bc-pill bc-${p.id}${options.compact ? ' compact' : ''}" title="${p.label}: ${p.detail}">
        ${p.shortLabel}
      </span>
    `).join("") +
    `</span>`;
}

function renderBroadcastLegend() {
  return `
    <div class="broadcast-legend-container panel">
      <h3>Canales de Transmisión en Colombia:</h3>
      <div class="broadcast-legend-items">
        ${colombiaBroadcastPlatforms.map(p => `
          <span class="bc-pill bc-${p.id}" title="${p.label}: ${p.detail}">
            ${p.shortLabel}
          </span>
        `).join("")}
      </div>
    </div>
  `;
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
    ["Resultados", "Pagina", "resultados"],
    ["Descanso", "Pagina", "descanso"],
    ["Reglas", "Pagina", "reglas"],
    ["Sedes", "Pagina", "sedes"],
    ["Ranking FIFA", "Pagina", "ranking"],
    ["Glosario", "Pagina", "glosario"],
    ["Posiciones", "Pagina", "posiciones"],
    ["Pronostico", "Pagina", "pronostico"],
    ["Goleadores", "Pagina", "goleadores"],
    ["Selecciones", "Pagina", "selecciones"],
    ["Jugadores", "Pagina", "jugadores"],
    ["Clubes", "Pagina", "clubes"],
    ["Historial", "Pagina", "historial"],
    ["Llaves", "Pagina", "llaves"]
  ];
  const teams = [...new Set([
    ...Object.keys(flags),
    ...matches.flatMap((match) => [match.home, match.away]),
    ...Object.values(groups).flatMap((rows) => rows.map(([team]) => team))
  ])]
    .filter((team) => !team.startsWith("Ganador"))
    .map((team) => [team, "Seleccion", "selecciones"]);
  const fixtures = getCalendarItems().map((item) => [getCalendarItemLabel(item), item.phase + " · " + formatDate(item.date), "calendario"]);
  const playerItems = selectedPlayers.flatMap((player) => [
    [player.commonName, `${player.position} · ${player.team}`, "jugadores"],
    [player.name, `${player.club} · ${player.team}`, "jugadores"]
  ]);
  const historyItems = worldCupHistory.flatMap((item) => [
    [`Mundial ${item.year}`, `${item.host} · campeon ${item.champion}`, "historial"],
    [item.champion, `Campeon ${item.year}`, "historial"]
  ]);
  
  memoizedSearchIndex = [...teams, ...fixtures, ...playerItems, ...historyItems, ...pages].map(([label, type, page]) => ({
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
    "gustavo puerta": { name: "Gustavo Puerta", club: "Racing de Santander", position: "Mediocampista" },
    "jaminton campaz": { name: "Jaminton Campaz", club: "Rosario Central", position: "Mediocampista" },
    "juan portilla": { name: "Juan Portilla", club: "Paranaense", position: "Mediocampista" },
    "juan camilo portilla": { name: "Juan Portilla", club: "Paranaense", position: "Mediocampista" },
    "carlos gomez": { name: "Carlos Gómez", club: "Vasco da Gama", position: "Delantero" },
    "carlos gómez": { name: "Carlos Gómez", club: "Vasco da Gama", position: "Delantero" },
    "juan camilo hernandez": { name: "Juan Camilo Hernández", birthDate: "1999-04-22", height: "1.75 m", club: "Real Betis", position: "Delantero" },
    "juan camilo hernández": { name: "Juan Camilo Hernández", birthDate: "1999-04-22", height: "1.75 m", club: "Real Betis", position: "Delantero" },
    "cucho hernandez": { name: "Juan Camilo Hernández", birthDate: "1999-04-22", height: "1.75 m", club: "Real Betis", position: "Delantero" },
    "cucho hernández": { name: "Juan Camilo Hernández", birthDate: "1999-04-22", height: "1.75 m", club: "Real Betis", position: "Delantero" },
    "luis diaz": { name: "Luis Díaz", birthDate: "1997-01-13", height: "1.80 m", club: "Bayern Munich", position: "Extremo izquierdo" },
    "luis díaz": { name: "Luis Díaz", birthDate: "1997-01-13", height: "1.80 m", club: "Bayern Munich", position: "Extremo izquierdo" }
  }
};
