# Oxymoron — Feel Smart

Landing one-page para Oxymoron, construida en base al manual de identidad
visual (isotipo engranaje + ojo, laberinto como elemento gráfico, tipografías
Galano Grotesque / Diodrum, paleta 100% blanco y negro).

## Stack

- **Vite + React + TypeScript** — sin Next.js: es un sitio estático de una
  sola página, no necesita SSR ni ruteo, así que Next hubiera sido overhead
  innecesario.
- **Tailwind CSS v4** (vía `@tailwindcss/vite`, configuración por CSS con `@theme`).
- **GSAP + ScrollTrigger** para las animaciones ligadas al scroll (rotación
  del engranaje, dibujado del laberinto, reveals de secciones).
- **Lenis** para el smooth scroll, sincronizado con ScrollTrigger.

No usa Node/backend propio: el formulario de contacto está armado y listo
para conectar a un servicio como [Formspree](https://formspree.io),
[Web3Forms](https://web3forms.com) o a tu propia API — ver
`src/components/sections/Contact.tsx`, función `handleSubmit`.

## Fuentes

El manual de marca especifica **Galano Grotesque** (marca/titulares) y
**Diodrum** (texto). Son fuentes de pago, así que este proyecto usa
alternativas gratuitas de Google Fonts con una personalidad muy similar:
**Space Grotesk** (titulares) y **Plus Jakarta Sans** (texto). Si contás con
las licencias de Galano Grotesque y Diodrum, reemplazalas en:

- `index.html` (quitar el `<link>` a Google Fonts, o dejarlo como fallback)
- `src/index.css` → variables `--font-display` y `--font-body` dentro de `@theme`

## Cómo correrlo

```bash
npm install
npm run dev       # desarrollo, http://localhost:5173
npm run build     # build de producción a /dist
npm run preview   # sirve /dist localmente para probar el build
```

## Estructura

```
src/
  components/
    Gear.tsx            → isotipo engranaje+ojo, SVG generado por fórmula (rotable)
    MazePattern.tsx      → laberinto SVG (path único, animable con dash-offset)
    Logo.tsx, Nav.tsx, Footer.tsx
    sections/
      Hero.tsx, Stats.tsx, Practice.tsx, Philosophy.tsx,
      Team.tsx, Methodology.tsx, Contact.tsx
  hooks/
    useSmoothScroll.ts   → setup de Lenis + GSAP ticker
    useGearScroll.ts     → rota un engranaje proporcional al scroll total
    useMazeReveal.ts     → "dibuja" un laberinto al entrar en viewport
    useReveal.ts         → fade/slide-in genérico por sección
  data/content.ts         → todo el copy (servicios, equipo, stats, metodología)
  assets/mazePaths.ts     → laberintos precalculados (algoritmo recursive-backtracker)
```

## Contenido

El copy (áreas de práctica, equipo, stats, metodología, datos de contacto)
está centralizado en `src/data/content.ts` — para actualizar textos, nombres
del equipo, teléfonos, etc. alcanza con editar ese archivo, no hace falta
tocar los componentes.

## Animaciones clave

- **Engranaje ligado al scroll**: `useGearScroll` rota el SVG del isotipo en
  proporción directa al progreso de scroll de toda la página (no es solo un
  giro infinito en loop — gira más cuanto más scrolleás).
- **Laberinto que se dibuja**: `useMazeReveal` usa el truco clásico de
  `stroke-dasharray` / `stroke-dashoffset` para que el laberinto se "trace"
  a medida que su sección entra en el viewport.
- Todo respeta `prefers-reduced-motion`: si el usuario tiene animaciones
  reducidas activadas en su sistema, el smooth scroll se desactiva.

## Deploy

Es un sitio 100% estático — el resultado de `npm run build` (carpeta
`dist/`) se puede subir directo a Vercel, Netlify, Cloudflare Pages o
cualquier hosting estático.
