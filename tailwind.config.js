/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        base: {
          bg: 'var(--bg)',
          panel: 'var(--panel)',
          line: 'var(--line)',
        },
        green: {
          400: 'var(--green)',
          500: 'var(--green-strong)',
        },
        amber: {
          400: 'var(--amber)',
          500: 'var(--amber-strong)',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}