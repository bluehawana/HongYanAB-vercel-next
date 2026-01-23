import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8B1A1A', // Dark red matching Ichiban Sushi menu
          light: '#A52A2A',
          dark: '#6B0F0F',
        },
        secondary: {
          DEFAULT: '#1a1a1a',
          light: '#2d2d2d',
          dark: '#000000',
        },
      },
    },
  },
  plugins: [],
}
export default config