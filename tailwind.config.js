/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-color': '#4c3398',
        'primary-brand-color': '#5d3ebc;',
        'secondary-brand-color': '#7849f7',
        'brand-yellow': '#ffd300',
      },
      backgroundImage: theme => ({
        'mobile-app': "url('https://cdn.getir.com/getirweb-images/common/illustration/doodle.png')",
        'footer-texture': "url('/src/assets/images/footer-texture.png')",
      }),
    }
  },
  plugins: [],
}
