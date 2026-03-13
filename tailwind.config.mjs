/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        parchment: '#F5F0E8',
        'parchment-dark': '#EDE6D8',
        'ink': '#1A1A1A',
        'ink-2': '#3D3530',
        'ink-3': '#5A5040',
        'ink-4': '#8A7D6E',
        'surface': '#FFFFFF',
        'surface-2': '#FAF7F2',
        'green': '#017c32',
        'green-light': '#2A7A4B',
        'green-muted': '#4E9E6A',
        'terracotta': '#C4654A',
        'gold': '#C4943A',
        'gold-muted': '#B89254',
        'border': '#D8D0C4',
        'border-light': '#E8E0D4',
      },
      fontFamily: {
        'display': ['"Playfair Display"', 'Georgia', 'serif'],
        'mono': ['"IBM Plex Mono"', '"Courier New"', 'monospace'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'warm-sm': '0 1px 3px rgba(90, 70, 40, 0.08), 0 1px 2px rgba(90, 70, 40, 0.06)',
        'warm': '0 4px 16px rgba(90, 70, 40, 0.10), 0 1px 4px rgba(90, 70, 40, 0.08)',
        'warm-lg': '0 8px 32px rgba(90, 70, 40, 0.12), 0 2px 8px rgba(90, 70, 40, 0.08)',
      },
    },
  },
  plugins: [],
};
