import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#1a1a1a',
        foreground: 'var(--foreground)',
        primary: '#333333',
        secondary: {
          default: '#444444',
          100: '#969595',
        },
        blue: {
          300: '#007bff',
          400: '#0056b2',
        },
      },
    },
  },
  plugins: [],
}
export default config
