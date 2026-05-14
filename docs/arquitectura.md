# Arquitectura de FIFA 2026 Predictor Hub

## 1. Arquitectura Completa

La plataforma se plantea como una aplicación modular con frontend web, API REST, motor de puntuación y canal de tiempo real.

```text
Clientes web/mobile
  -> Frontend React/Next.js
  -> API Gateway / Backend Node.js Express
  -> Servicios de dominio
      - Auth y usuarios
      - Competencias
      - Pronósticos
      - Partidos y resultados
      - Ranking y puntuación
      - Reportes
      - Analítica
  -> PostgreSQL
  -> Redis para cache, locks y rankings calientes
  -> Socket.io para eventos en vivo
  -> Workers para recalcular rankings y generar PDF/Excel
  -> Integración futura con APIs deportivas
```

Capas recomendadas:

- Presentación: Next.js, Tailwind CSS, Shadcn/UI, Recharts/Plotly.
- Dominio: reglas de negocio aisladas, especialmente scoring y bloqueo de pronósticos.
- Datos: PostgreSQL como fuente principal, Redis para rankings y jobs.
- Integraciones: adaptadores para proveedores deportivos, correo, WhatsApp/Telegram y almacenamiento de reportes.
- Seguridad: JWT, refresh tokens, RBAC, rate limits, auditoría de acciones administrativas.

## 2. Diseño de Base de Datos

Modelo relacional recomendado en PostgreSQL.

```sql
users(id, name, email, password_hash, avatar_url, country, timezone, role, created_at)
user_stats(user_id, matches_hit, exact_scores, winner_hits, phase_performance_json)

competitions(id, owner_id, name, visibility, invite_code, scoring_rule_id, created_at)
competition_members(id, competition_id, user_id, status, joined_at)

teams(id, fifa_code, name, group_code, flag_url)
players(id, team_id, name, position)
stadiums(id, name, city, country, timezone)

matches(id, home_team_id, away_team_id, phase, group_code, stadium_id, starts_at, status)
match_results(match_id, home_score, away_score, winner_team_id, updated_by, official_at)
match_events(id, match_id, player_id, team_id, type, minute)

predictions(id, user_id, competition_id, match_id, home_score, away_score, winner_team_id, qualifier_team_id, scorer_player_id, locked_at, created_at, updated_at)
prediction_scores(id, prediction_id, points, exact_score_points, winner_points, goal_diff_points, scorer_bonus, champion_bonus, calculated_at)

rankings(id, competition_id, user_id, scope, phase, points, hits, exacts, accuracy, position, trend, calculated_at)
scoring_rules(id, name, exact_score, winner, goal_difference, scorer_bonus, champion_bonus, lock_minutes_before)

exports(id, competition_id, requested_by, type, format, status, file_url, created_at)
audit_logs(id, actor_id, action, entity_type, entity_id, metadata_json, created_at)
```

Indices importantes:

- `predictions(user_id, competition_id, match_id)` único.
- `matches(starts_at, status)`.
- `rankings(competition_id, scope, phase, position)`.
- `competition_members(competition_id, user_id)` único.

## 3. Wireframes

```text
Desktop
+-----------+------------------------------------------------+
| Sidebar   | Topbar: búsqueda, exportar, usuario             |
| Inicio    +------------------------------------------------+
| Calendario| KPI cards                                      |
| Pronóst.  | Próximos partidos        Ranking rápido        |
| Ranking   | Noticias / alertas / analítica compacta        |
+-----------+------------------------------------------------+

Mobile
+------------------------------------------------------------+
| Menu | Título | Exportar                                    |
+------------------------------------------------------------+
| KPI card                                                    |
| Próximo partido                                             |
| Ranking                                                     |
| Navegación lateral desplegable                              |
+------------------------------------------------------------+

Pronósticos
+-----------------------------+------------------------------+
| Formulario marcador          | Mis predicciones             |
| Clasifica / goleador bonus   | Estado editable/bloqueado    |
+-----------------------------+------------------------------+
```

## 4. Estructura de Carpetas

Para el MVP actual:

```text
fifa2026/
  index.html
  styles.css
  app.js
  README.md
  docs/
    arquitectura.md
```

Para la versión productiva:

```text
apps/
  web/
    app/
    components/
    features/
    lib/
    styles/
  api/
    src/
      modules/
        auth/
        users/
        competitions/
        matches/
        predictions/
        rankings/
        reports/
      shared/
      jobs/
      integrations/
packages/
  scoring-engine/
  db/
  ui/
infra/
  docker/
  migrations/
  seed/
docs/
```

## 5. APIs Necesarias

Autenticación:

- `POST /auth/register`
- `POST /auth/login`
- `POST /auth/refresh`
- `POST /auth/forgot-password`
- `GET /users/me`
- `PATCH /users/me`

Competencias:

- `POST /competitions`
- `GET /competitions`
- `GET /competitions/:id`
- `POST /competitions/:id/join`
- `PATCH /competitions/:id/rules`

Partidos y torneo:

- `GET /matches?phase=&status=&from=&to=`
- `GET /matches/:id`
- `GET /standings`
- `GET /bracket`
- `GET /stats/scorers`
- `GET /stats/cards`

Pronósticos:

- `POST /competitions/:id/predictions`
- `PATCH /predictions/:id`
- `GET /competitions/:id/predictions/me`
- `GET /competitions/:id/predictions/aggregate`

Ranking y analítica:

- `GET /competitions/:id/rankings?scope=global|daily|phase`
- `GET /competitions/:id/rankings/history`
- `GET /competitions/:id/analytics`
- `GET /users/:id/stats`

Admin y reportes:

- `POST /admin/matches/:id/result`
- `POST /admin/import-results`
- `POST /exports`
- `GET /exports/:id`

Tiempo real:

- `match.updated`
- `prediction.locked`
- `ranking.updated`
- `export.ready`

## 6. Flujo de Usuarios

1. Registro o inicio de sesión.
2. Creación o ingreso a una competencia.
3. Revisión del calendario y reglas.
4. Carga de pronósticos antes del bloqueo.
5. Inicio del partido: bloqueo automático.
6. Admin o API oficial carga resultado.
7. Worker calcula puntos y actualiza ranking.
8. Cliente recibe evento en vivo por Socket.io.
9. Usuario revisa ranking, estadísticas y reportes.

## 7. Propuesta Visual

Estilo: dashboard deportivo profesional, denso, claro y operativo.

Paleta:

- Fondo principal: negro verdoso `#07120f`.
- Superficie: `#0d1b1a`.
- Acento primario: dorado `#d8b75f`.
- Acento informativo: azul `#0e4d92`.
- Acento deportivo: verde cancha `#18a05e`.
- Texto: blanco `#f7fbfa`.

Componentes:

- Sidebar persistente en escritorio y drawer en móvil.
- Cards de KPI compactas.
- Tablas densas con filtros.
- Formularios con validaciones claras.
- Bracket horizontal desplazable.
- Gráficos de líneas, barras y heatmap.

## 8. MVP Inicial

El MVP implementado cubre:

- Navegación por nueve páginas.
- Inicio con KPIs, próximos partidos, ranking y cuenta regresiva.
- Calendario filtrable por estado y fase.
- Formulario de pronósticos con marcador, clasificado y goleador bonus.
- Tabla de posiciones por grupos.
- Goleadores.
- Ranking de usuarios con búsqueda.
- Analítica con gráficos canvas y mapa de calor.
- Llaves del torneo.
- Admin demo para resultados y reglas.
- Exportación CSV del contexto activo.

Limitaciones actuales:

- Datos en memoria.
- Sin login real.
- Sin persistencia.
- Sin API externa.
- Sin PDF/Excel real; CSV sí está disponible.

## 9. Roadmap de Desarrollo

Fase 1: MVP funcional

- Convertir estático a Next.js.
- Persistir usuarios, competencias, partidos y pronósticos.
- Login JWT.
- Scoring engine unit-tested.
- Ranking global y por competencia.

Fase 2: Tiempo real y reportes

- Socket.io para resultados y ranking.
- Exportaciones CSV, Excel y PDF con workers.
- Panel admin con auditoría.
- Cálculo incremental de rankings.

Fase 3: Analítica avanzada

- Probabilidades implícitas.
- Predicción colectiva.
- Comparación entre usuarios.
- Partidos difíciles de predecir.
- Rendimiento por fase y equipo.

Fase 4: Integraciones

- API deportiva oficial o proveedor comercial.
- Notificaciones push, email, WhatsApp o Telegram.
- Modo oscuro/claro.
- App móvil.

Fase 5: IA y gamificación

- Predicciones asistidas por IA.
- Insignias y premios.
- Simulación Monte Carlo.
- Recomendaciones de pronóstico.

## 10. Modelo de Puntuación Configurable

Regla base:

```json
{
  "exact_score": 5,
  "winner": 3,
  "goal_difference": 2,
  "draw_correct": 3,
  "qualifier": 4,
  "scorer_bonus": 2,
  "champion_bonus": 12,
  "lock_minutes_before": 5,
  "allow_edit_before_lock": true
}
```

Orden de cálculo:

1. Validar que el pronóstico fue creado o editado antes del bloqueo.
2. Si el marcador exacto coincide, asignar `exact_score`.
3. Si no fue exacto, evaluar ganador o empate.
4. Evaluar diferencia de goles si aplica.
5. Evaluar clasificado en fases eliminatorias.
6. Evaluar bonus de goleador.
7. Al final del torneo, evaluar campeón.
8. Registrar desglose por regla para auditoría.

Pseudocódigo:

```text
points = 0
if prediction.home_score == result.home_score and prediction.away_score == result.away_score:
  points += rules.exact_score
else:
  if predicted_outcome == official_outcome:
    points += rules.winner
  if predicted_goal_difference == official_goal_difference:
    points += rules.goal_difference

if prediction.qualifier_team_id == official_qualifier:
  points += rules.qualifier

if predicted_scorer_scored:
  points += rules.scorer_bonus
```

Recomendación técnica: el motor de puntuación debe vivir en un paquete independiente con pruebas unitarias por escenario, porque es la regla de negocio más sensible de la plataforma.
