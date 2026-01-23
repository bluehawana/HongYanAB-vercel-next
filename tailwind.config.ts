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
          DEFAULT: '#8B1A1A', // Dark red accent
          light: '#A52A2A',
          dark: '#6B0F0F',
        },
        secondary: {
          DEFAULT: '#2C3E50', // Professional dark blue-gray
          light: '#34495E',
          dark: '#1A252F',
        },
        accent: {
          DEFAULT: '#C8E6C9', // Subtle green accent like AFRY
          light: '#E8F5E9',
          dark: '#A5D6A7',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config