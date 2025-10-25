module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xs': ['0.5rem'],
        'sm': ['0.75rem'],
        'base': ['0.875rem'],
        'lg': ['1rem'],
        'xl': ['1.25rem'],
        '2xl': ['1.5rem'],
      },
    },
  },
  plugins: [],
};