/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'aseorange': '#F15A24',
        'aseorangedark': '#CB3900',
        'asegrey': '#969696',
        'asegreydark': '#393939',
        'success': '#BAFFA9',
        'failed': '#FF5B7A',
        'disabled': '#ABA0A6',
        'warning': '#FFF1A9'
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

