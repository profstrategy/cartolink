import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './hooks/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#3b82f6',
          600: '#2563eb',
        },
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'gray-scale': 'var(--gray-scale)',
        'app-text': 'var(--app-text-color)',
        'global-btn-bg': 'var(--global-btn-bg)',
      },
    },
  },
  plugins: [],
}

export default config