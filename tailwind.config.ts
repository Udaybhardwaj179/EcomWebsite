import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'royal-blue': {
          DEFAULT: '#002366',
          light: '#1A3C80',
          dark: '#00143D',
        },
        'bright-orange': {
          DEFAULT: '#FF8C00',
          light: '#FFA500',
          dark: '#E67E00',
        },
        'deep-black': {
          DEFAULT: '#0A0A0A',
          rich: '#050505',
          soft: '#1F1F1F',
        },
        'soft-white': {
          DEFAULT: '#FFFFFF',
          off: '#F5F5F5',
          smoke: '#F0F0F0',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'scroll-slow': 'scroll 40s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
