# FIFA 2026 Info Hub

Aplicacion web estatica, responsive e informativa para consultar datos del Mundial FIFA 2026: calendario, grupos, selecciones, jugadores, historial mundialista, llaves y pronosticos de participantes.

El MVP actual se ejecuta completamente en el navegador con datos locales. Tambien permite que un participante construya su pronostico, lo guarde en el navegador, lo exporte a CSV y genere un reporte PDF desde la opcion de impresion del navegador.

## Contenido del Proyecto

```text
.
├── index.html
├── styles.css
├── app.js
├── js/
│   ├── main.js
│   └── pages/
│       └── pronostico.js
├── Dockerfile
├── docker-compose.yml
└── docs/
    └── arquitectura.md
```

Archivos principales:

- `index.html`: estructura de la aplicacion y paginas informativas.
- `styles.css`: estilos responsive tipo dashboard deportivo.
- `app.js`: datos locales compartidos, calendario, grupos, equipos, jugadores, busqueda global y helpers de torneo.
- `js/main.js`: inicializacion, eventos globales, temas y exportacion CSV por pagina.
- `js/pages/pronostico.js`: flujo de pronostico, guardado local, calculo de clasificados, llaves, CSV y reporte PDF.
- `docs/arquitectura.md`: documentacion tecnica historica del proyecto.

## Requisitos

Para ejecutar localmente sin Docker:

- Navegador moderno: Chrome, Edge, Firefox o Safari.
- Opcional: Node.js o Python si quieres levantar un servidor local simple.

Para ejecutar con Docker:

- Docker 24 o superior.
- Docker Compose v2.

## Ejecucion Local

Abrir directamente el archivo:

```bash
xdg-open index.html
```

O servir la carpeta con Node.js:

```bash
npx serve . -l 8080
```

Luego abrir:

```text
http://localhost:8080
```

O servir con Python:

```bash
python3 -m http.server 8080
```

## Publicacion en GitHub Pages

La app puede publicarse como sitio estatico en GitHub Pages porque no requiere servidor ni proceso de build.

Pasos sugeridos:

1. Subir el repositorio a GitHub.
2. En GitHub, abrir `Settings` > `Pages`.
3. En `Build and deployment`, elegir `Deploy from a branch`.
4. Seleccionar la rama principal y la carpeta raiz `/`.
5. Guardar la configuracion y esperar a que GitHub publique la URL.

Notas para GitHub Pages:

- El sitio sirve archivos estaticos: `index.html`, `styles.css`, `app.js`, `js/` e `img/`.
- El pronostico se guarda en `localStorage` del navegador del participante.
- El boton `Generar PDF` abre un reporte imprimible; el participante debe elegir `Guardar como PDF` en el dialogo de impresion.
- GitHub Pages no puede guardar automaticamente PDFs, CSV ni pronosticos dentro del repositorio. Para almacenamiento centralizado se requeriria un backend o servicio externo.

## Ejecucion con Docker

Construir la imagen:

```bash
docker build -t fifa2026-info .
```

Ejecutar el contenedor:

```bash
docker run --rm -p 8080:80 --name fifa2026-info fifa2026-info
```

Abrir en el navegador:

```text
http://localhost:8080
```

## Operacion de la App

La app se opera desde la barra lateral:

- `Inicio`: KPIs generales, cuenta regresiva, proximos partidos y selecciones con mayor proporción de nacidos en el país representado.
- `Calendario`: lista partidos y permite filtrar por estado y fase.
- `Posiciones`: muestra tablas por grupo y resumen de rondas eliminatorias.
- `Pronostico`: permite registrar participante, elegir gana local/empate/gana visitante en grupos, calcular clasificados, avanzar por llaves y generar campeon.
- `Goleadores`: presenta tabla de goleadores cuando haya datos disponibles.
- `Selecciones`: muestra cajas compactas por seleccion con grupo, Proporción de nacidos en el país representado, porcentaje en clubes del exterior, edad promedio y datos destacados.
- `Jugadores`: muestra fichas individuales estilo Panini con imagenes, codigo, seleccion, edad, estatura, club y posicion.
- `Historial`: resume mundiales anteriores, campeones, Colombia y marcas historicas.
- `Llaves`: visualiza el arbol eliminatorio previsto.

Funciones disponibles:

- Navegacion responsive para escritorio y movil.
- Busqueda global por seleccion, jugador, partido o edicion historica.
- Filtros de calendario por estado y fase.
- Filtros de jugadores por seleccion y completitud de datos.
- Resumen por seleccion con Proporción de nacidos en el país representado, porcentaje de jugadores en clubes del exterior, edad promedio, grupo y datos destacados.
- Album de jugadores en tarjetas visuales con filtros por seleccion y completitud de datos.
- Exportacion CSV desde el boton `Exportar CSV`.
- Generacion de reporte PDF del pronostico desde el navegador usando `Generar PDF`.
- Selector de temas: clasico, claro, cancha, medianoche y dorado.

## Proporción de nacidos en el país representado

La vista `Selecciones` incluye informacion para 48 selecciones. El calculo usa planteles de 26 jugadores:

```text
Proporción de nacidos en el país representado = (26 - jugadores no nacidos alli) / 26
```

La base usada para la tabla es el dato reproducido por Antorcha Deporte: 1.248 jugadores, 289 no nacidos en el pais que representan y 959 nacidos en el pais representado, equivalentes a 76,85%.


## Fuentes de Jugadores

Las fichas de jugadores combinan datos locales del album con detalles enriquecidos desde Wikidata y fotos de Wikimedia Commons. Los registros genericos como `Jugador por confirmar` se mantienen pendientes porque no tienen una identidad verificable para consultar.

Fuentes usadas:

- Wikidata API: https://www.wikidata.org/w/api.php
- Wikimedia Commons `Special:FilePath`: https://commons.wikimedia.org/wiki/Special:FilePath

## Pronostico y PDF

La vista `Pronostico` esta pensada para funcionar en GitHub Pages sin backend:

1. Abrir `Pronostico` desde la barra lateral.
2. Escribir participante, correo o identificador y goleador.
3. En cada partido de grupos marcar una sola opcion: gana local, empate o gana visitante. No se ingresan marcadores.
4. Cuando todos los partidos de grupos tienen seleccion, la app calcula clasificados y muestra las llaves.
5. En cada cruce eliminatorio marcar solo el ganador hasta llegar al campeon.
6. Presionar `Guardar pronostico` para dejarlo almacenado en el navegador.
7. Presionar `Generar PDF` para abrir el reporte imprimible. En el dialogo del navegador elegir `Guardar como PDF` o la impresora PDF equivalente.

Importante para GitHub Pages: la app es estatica y no puede escribir archivos dentro del repositorio ni guardar PDFs en el servidor. El PDF se genera y se guarda desde el navegador del participante.

## Exportaciones

El boton `Exportar CSV` descarga datos segun la pagina activa:

- En `Selecciones`, exporta el resumen por seleccion: grupo, conteo de nacidos en el pais representado, no nacidos alli, Proporción de nacidos en el país representado, porcentaje en clubes del exterior, edad promedio, posicion mas frecuente y club mas repetido.
- En `Jugadores`, exporta las fichas filtradas de jugadores.
- En `Historial`, exporta datos historicos de mundiales.
- En `Pronostico`, exporta participante, identificador, campeon, goleador, selecciones de grupos, llaves y ganadores.
- En las demas paginas, exporta informacion base del calendario.

## Datos y Persistencia

El MVP usa datos locales definidos en `app.js`.

Actualmente:

- No hay autenticacion.
- No hay base de datos.
- No hay API REST conectada.
- Los pronosticos se guardan en `localStorage` del navegador. Si el participante cambia de equipo, navegador o borra datos del sitio, debe conservar el CSV o PDF generado.

## Desarrollo

Editar los archivos principales:

```text
index.html
styles.css
app.js
js/main.js
js/pages/pronostico.js
```

Verificar sintaxis JavaScript:

```bash
node --check app.js
node --check js/main.js
node --check js/pages/pronostico.js
```

Para probar el PDF localmente, servir la carpeta con HTTP, abrir `Pronostico`, completar datos de ejemplo y usar `Generar PDF`. Algunos navegadores bloquean ventanas emergentes; si ocurre, habilitarlas para el sitio local o para la URL de GitHub Pages.

## Docker en Produccion

La imagen usa Nginx para servir archivos estaticos. Para un despliegue real:

- Publicar detras de HTTPS.
- Usar un reverse proxy o balanceador.
- Agregar headers de seguridad.
- Versionar la imagen con tags semanticos.
