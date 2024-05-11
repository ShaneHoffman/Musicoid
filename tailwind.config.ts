import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        search: '0 0 0 3.5px rgba(250, 88, 106, 0.65)',
      },
      colors: {
        carnation: '#fa586a',
        'mine-shaft': '#1f1f1f',
        shark: '#252526',
        'ship-gray': '#3B3A3c',
        tuna: '#39393b',
      },
    },
  },
  plugins: [],
};
export default config;
