/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'primary': ['Plus_Jakarta_Sans'],
      'secondary': ['SaolDisplay']
    },
    colors: {
      'white': '#FFFFFF',
      'black': '#0000000',
      'blue':'#0C25AE'
    }
  },
  plugins: [],
}
