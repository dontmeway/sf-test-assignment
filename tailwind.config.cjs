/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['"Inter"', 'Helvetica', 'Arial', 'sans-serif'],
        body: ['"Inter"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        beuge: {
          100: '#F8F8F8',
        },
        brand: {
          secondary: '#C8166A',
          black: '#2E2E2E',
        },
      },
      backgroundImage: {
        header: 'url("/header.png")',
        card: 'url("/card.png")',
        subHeader:
          'linear-gradient(0deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 19.64%)',
        btn: 'linear-gradient(90deg, #F093FB 0%, #F5576C 100%)',
        contactUs: 'url("/contact-us-bg.png")',
      },
      keyframes: {
        firstBall: {
          '0%, 100%': { height: '120px' },
          '20%': { height: '160px' },
          '50%': { transform: 'translateY(-200%)' },
          '95%': { height: '160px' },
        },
        secondBall: {
          '0%, 100%': { height: '100px' },
          '20%': { height: '140px' },
          '50%': { transform: 'translateY(-150%)' },
          '95%': { height: '140px' },
        },
      },
      animation: {
        firstBall: '1.75s 0.5s firstBall infinite ease-in-out',
        secondBall: '1.75s 0.5s firstBall infinite ease-in-out',
      },
    },
  },
  plugins: [],
}
