import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        'text-primary': '#ffffff',
        'text-secondary': '#aaaaaa',
        accent: '#00a3ff',
        'accent-light': '#7dd3fc',
      },
      animation: {
        'pulse-slow': 'pulse 3s infinite',
        'shine': 'shine 2s linear infinite',
      },
      keyframes: {
        shine: {
          '0%': { 'background-position': '0% 0%' },
          '100%': { 'background-position': '200% 0%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config; 