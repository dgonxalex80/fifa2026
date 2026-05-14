# FIFA 2026 Predictor Hub

Aplicacion web moderna, responsive e interactiva para seguimiento del Mundial FIFA 2026 y competencias de pronosticos entre usuarios.

El MVP actual es una app frontend estatica, sin backend ni base de datos real. Incluye datos demo en memoria para mostrar el flujo completo de dashboard, calendario, pronosticos, ranking, analitica, llaves y administracion.

## Contenido del Proyecto

```text
.
├── index.html
├── styles.css
├── app.js
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
└── docs/
    └── arquitectura.md
```

Archivos principales:

- `index.html`: estructura de la aplicacion y las nueve paginas.
- `styles.css`: estilos responsive tipo dashboard deportivo.
- `app.js`: datos demo, navegacion, filtros, pronosticos, graficos y exportacion CSV.
- `docs/arquitectura.md`: arquitectura propuesta, base de datos, APIs, wireframes, flujos, MVP, roadmap y modelo de puntuacion.

## Requisitos

Para ejecutar localmente sin Docker:

- Navegador moderno: Chrome, Edge, Firefox o Safari.
- Opcional: Node.js si quieres levantar un servidor local simple.

Para ejecutar con Docker:

- Docker 24 o superior.
- Docker Compose v2.

## Instalacion

Clonar o abrir el repositorio:

```bash
cd /home/deg/Documentos/PERSONALES/ESCUELA/repository/fifa2026
```

No hay dependencias npm que instalar en el MVP actual, porque la aplicacion usa HTML, CSS y JavaScript puro.

## Ejecucion Local

Opcion 1: abrir directamente el archivo:

```bash
xdg-open index.html
```

Opcion 2: servir la carpeta con Node.js:

```bash
npx serve . -l 8080
```

Luego abrir:

```text
http://localhost:8080
```

Opcion 3: servir con Python:

```bash
python3 -m http.server 8080
```

Luego abrir:

```text
http://localhost:8080
```

## Ejecucion con Docker

Construir la imagen:

```bash
docker build -t fifa2026-predictor .
```

Ejecutar el contenedor:

```bash
docker run --rm -p 8080:80 --name fifa2026-predictor fifa2026-predictor
```

Abrir en el navegador:

```text
http://localhost:8080
```

Detener el contenedor:

```bash
docker stop fifa2026-predictor
```

## Ejecucion con Docker Compose

Levantar la aplicacion:

```bash
docker compose up --build
```

Abrir:

```text
http://localhost:8080
```

Ejecutar en segundo plano:

```bash
docker compose up --build -d
```

Ver logs:

```bash
docker compose logs -f
```

Detener:

```bash
docker compose down
```

## Operacion de la App

La app se opera desde la barra lateral:

- `Inicio`: muestra KPIs, cuenta regresiva, proximos partidos, ranking rapido y noticias.
- `Calendario`: lista partidos y permite filtrar por estado y fase.
- `Pronosticos`: permite guardar pronosticos demo con marcador, clasificado y goleador bonus.
- `Posiciones`: muestra tablas por grupo con puntos, diferencia de gol y clasificacion.
- `Goleadores`: presenta jugadores, equipos, goles, asistencias y minutos.
- `Ranking`: muestra participantes, puntos, aciertos, efectividad y tendencia.
- `Analitica`: incluye KPIs, evolucion del ranking, barras por fase y mapa de calor.
- `Llaves`: visualiza el arbol eliminatorio.
- `Admin`: simula carga de resultados, edicion de reglas y actividad del sistema.

Funciones disponibles:

- Navegacion responsive para escritorio y movil.
- Busqueda global conectada al ranking.
- Filtros de calendario por estado y fase.
- Registro de pronosticos en memoria durante la sesion del navegador.
- Exportacion CSV desde el boton `Exportar CSV`.
- Graficos renderizados con Canvas.

## Exportaciones

El boton `Exportar CSV` descarga datos segun la pagina activa:

- En `Ranking`, exporta usuarios, puntos, aciertos y efectividad.
- En las demas paginas, exporta informacion base del calendario demo.

Los reportes PDF y Excel estan documentados como funcionalidad futura en `docs/arquitectura.md`.

## Datos y Persistencia

El MVP usa datos locales definidos en `app.js`.

Actualmente:

- No hay autenticacion real.
- No hay base de datos.
- No hay API REST conectada.
- Los pronosticos se pierden al recargar la pagina.

La arquitectura propuesta para produccion contempla PostgreSQL, API REST, JWT, Socket.io, workers y exportaciones asincronas.

## Desarrollo

Editar los archivos principales:

```text
index.html
styles.css
app.js
```

Verificar sintaxis JavaScript:

```bash
node --check app.js
```

Recomendacion para evolucionar el MVP:

1. Migrar el frontend a Next.js.
2. Crear una API REST con Node.js/Express.
3. Agregar PostgreSQL y migraciones.
4. Implementar autenticacion JWT.
5. Extraer el motor de puntuacion a un modulo probado.
6. Agregar Socket.io para ranking y resultados en tiempo real.

## Docker en Produccion

La imagen usa Nginx para servir archivos estaticos. Para un despliegue real:

- Publicar detras de HTTPS.
- Usar un reverse proxy o balanceador.
- Agregar headers de seguridad.
- Versionar la imagen con tags semanticos.
- Externalizar futuras variables de entorno del backend.

Ejemplo de build versionado:

```bash
docker build -t fifa2026-predictor:0.1.0 .
```

## Documentacion Tecnica

Consultar:

```text
docs/arquitectura.md
```

Incluye:

- Arquitectura completa.
- Diseno de base de datos.
- Wireframes.
- Estructura de carpetas propuesta.
- APIs necesarias.
- Flujo de usuarios.
- Propuesta visual.
- MVP inicial.
- Roadmap de desarrollo.
- Modelo de puntuacion configurable.
