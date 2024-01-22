// tailwind.config.js

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      height: {
        '300': '300px', // Adicionando a classe h-300 com altura de 300 pixels
      },
      colors:{
        bluegrey: '#333e4f',
        blueblack: '#19202D',
        grey:'#ACB1BA',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      fontSize: {
        '12': '12px',
        '14':'14px',
        '24':'24px',
        '40': '40px',
        '64':'64px',
      },
      width:{
        '600': '600px',
      },
      screens: {
        'mobile':'320px',
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
      margin: {
        '-100': '-100px',
        '-50': '-50px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
