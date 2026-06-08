const colombianGlossary = [
  ["Amonestacion", "Tarjeta amarilla. En Colombia tambien se dice que el jugador quedo condicionado."],
  ["Area", "Zona grande frente al arco. Si una falta defensiva sancionable ocurre ahi, normalmente es penal."],
  ["Balon dividido", "Pelota sin dueno claro; los dos equipos llegan a disputarla."],
  ["Cambio", "Sustitucion de un jugador por otro. Desde 2026 hay control estricto contra cambios demorados."],
  ["Cancha", "Terreno de juego. En Colombia se usa mas que campo."],
  ["Corner", "Tiro de esquina. Se cobra desde la esquina cuando el balon sale por linea final tocado por un defensor."],
  ["DOGSO", "Sigla inglesa para negar una ocasion manifiesta de gol. Es una falta que corta una oportunidad clara."],
  ["Fuera de lugar", "Forma comun en Colombia para decir fuera de juego u offside."],
  ["Gol de camerino", "Gol marcado al inicio de un tiempo, cuando el rival apenas se esta acomodando."],
  ["Mano", "Infraccion por tocar el balon con mano o brazo de forma sancionable."],
  ["Palo", "Poste del arco. Tambien se dice 'pego en el palo'."],
  ["Penal", "Tiro desde el punto penal por falta sancionable dentro del area."],
  ["Quemar tiempo", "Demorar reanudaciones o jugadas para gastar minutos. Las reglas 2026 castigan mas estas demoras."],
  ["Saque de banda", "Reanudacion con las manos desde la raya lateral."],
  ["Saque de meta", "Reanudacion desde el area chica cuando el ataque manda el balon por linea final sin gol."],
  ["VAR", "Arbitro asistente de video. Revisa jugadas puntuales segun protocolo."],
  ["Volante", "Mediocampista. En Colombia se usa volante de marca, mixto, creativo o extremo segun funcion."],
  ["Zaguero", "Defensa central. Tambien se dice central."],
  ["Taponazo", "Remate fuerte y seco."],
  ["Achicar", "Accion del arquero o defensa de reducir espacio al atacante."],
  ["Prorroga", "Tiempo extra de 30 minutos en eliminatorias empatadas."],
  ["Tanda de penales", "Definicion por cobros desde el punto penal cuando persiste el empate."],
  ["Rosca", "Tiro con efecto curvo."],
  ["Pase filtrado", "Pase entre lineas para dejar a un companero en ventaja."],
  ["Enganche", "Movimiento para cambiar de direccion y dejar atras al rival."]
].map(([term, definition]) => ({ term, definition }));

function renderGlossary() {
  if (!$("#glossaryCards")) return;
  const term = normalizeText($("#glossarySearch")?.value || "");
  const filtered = colombianGlossary.filter((item) => !term || normalizeText(`${item.term} ${item.definition}`).includes(term));
  $("#glossarySummaryCards").innerHTML = [
    ["Terminos", colombianGlossary.length, "espanol de Colombia"],
    ["Reglas 2026", "incluidas", "VAR, saque, demora"],
    ["Busqueda", filtered.length, "coincidencias visibles"],
    ["Uso", "rapido", "para ver partidos sin enredos"]
  ].map(([label, value, detail]) => `<article class="kpi"><span>${label}</span><strong>${value}</strong><small>${detail}</small></article>`).join("");
  $("#glossaryCards").innerHTML = filtered.length ? filtered.map((item) => `
    <article class="glossary-card"><strong>${item.term}</strong><p>${item.definition}</p></article>
  `).join("") : `<p class="empty-card-grid">No hay terminos que coincidan con la busqueda.</p>`;
}
