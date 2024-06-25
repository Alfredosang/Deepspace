/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000E20',
        secondary: {
          100: '#CD4154',
          200: '#888883',
          300: '#F8EFEF',
        }
      },
      fontFamily: {
        body: ['Raleway']
      }
    },
  },
  plugins: [],
}
