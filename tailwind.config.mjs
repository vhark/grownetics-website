/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // ── Core backgrounds (Archival warmth + Brand Anti-Flash White blend)
        parchment:       '#F3F0ED',   // warm compromise: #F5F0E8 → #F1F1F2
        'parchment-dark':'#E9E8EE',   // Bright Gray from brand
        // ── Text scale
        'ink':           '#2B2C2E',   // Charleston — primary text
        'ink-2':         '#494A52',   // Dark Gray from brand
        'ink-3':         '#5C5E66',   // Neutral mid-tone
        'ink-4':         '#9799A6',   // Manatee from brand
        // ── Surfaces
        'surface':       '#FFFFFF',
        'surface-2':     '#F1F1F2',   // Anti-Flash White from brand
        // ── Brand greens
        'green':         '#4DB405',   // Primary brand green (replaces #017c32)
        'green-light':   '#C7E55A',   // Lime / Yellow-Green (highlight accent)
        'green-muted':   '#A0AF9A',   // Sage Green from brand
        // ── Accent colors (Archival DNA — kept for identity)
        'terracotta':    '#C4654A',   // Earthy warm accent — retained from Archival
        // ── Label / warm accents
        'gold':          '#9A8860',   // Adjusted warm gold (muted from #C4943A)
        'gold-muted':    '#BFB9AD',   // Warm Gray/Taupe from brand
        // ── Borders
        'border':        '#BFB9AD',   // Warm Gray/Taupe from brand
        'border-light':  '#E9E8EE',   // Bright Gray (light borders)
        // ── Brand accent additions
        'sky':           '#B1D7E4',   // Light Blue / Sky from brand
        'sage':          '#A0AF9A',   // Sage Green alias
        'lime':          '#C7E55A',   // Lime alias
        'dark-sage':     '#748068',   // Dark Sage from brand
        'charleston':    '#2B2C2E',   // Charleston alias
        'manatee':       '#9799A6',   // Manatee alias
      },
      fontFamily: {
        // DM Sans = Articulat CF substitute (geometric, contemporary sans)
        'display': ['"DM Sans"', 'system-ui', 'sans-serif'],
        // IBM Plex Mono retained for § catalog labels and mono elements
        'mono':    ['"IBM Plex Mono"', '"Courier New"', 'monospace'],
        // Inter = Suisse Int'l substitute (Swiss-style grotesque)
        'body':    ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'warm-sm': '0 1px 3px rgba(43, 44, 46, 0.08), 0 1px 2px rgba(43, 44, 46, 0.06)',
        'warm':    '0 4px 16px rgba(43, 44, 46, 0.10), 0 1px 4px rgba(43, 44, 46, 0.08)',
        'warm-lg': '0 8px 32px rgba(43, 44, 46, 0.12), 0 2px 8px rgba(43, 44, 46, 0.08)',
      },
    },
  },
  plugins: [],
};
