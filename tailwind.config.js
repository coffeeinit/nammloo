/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'nammaloo': {
          'red': '#c0392b',
          'navy': '#1a237e',
          'teal': '#00897b',
          'yellow': '#ffd700',
          'green': '#2ecc71',
          'gray': {
            50: '#f9fafb',
            100: '#f3f4f6',
            200: '#e5e7eb',
            300: '#d1d5db',
            400: '#9ca3af',
            500: '#6b7280',
            600: '#4b5563',
            700: '#374151',
            800: '#1f2937',
            900: '#111827',
          }
        },
        'logo-red': '#F44336',
        'logo-navy': '#1A2951',
        'logo-yellow': '#FFD600',
        'logo-blue': '#3CB4E7',
        'logo-pink': '#F500A3',
        'logo-green': '#00B894',
      },
      fontFamily: {
        'heading': ['Poppins', 'sans-serif'],
        'body': ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};