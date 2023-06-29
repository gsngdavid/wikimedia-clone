/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      colors: {
        "primary": "#3a25ff",
        "primary-dark": "#3200be",
        "light-blue": "#eeeaff",
        "danger": "#d40356",
        "yellow": "#f0bc00",
        "gray": "#c8ccd1",
        "light-gray": "#72777d",
      },
      fontFamily: {
        "body": '-apple-system,"BlinkMacSystemFont","Segoe UI","Roboto","Lato","Helvetica","Arial",sans-serif'
      },
      animation: {
        "slide": "hero-home-animation 300s linear infinite"
      },
      keyframes: {
        'hero-home-animation': {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(calc(-4237px + 100vw))' },
          '100%': { transform: 'translateX(0)' }
        }
      }
    },
  },
  plugins: [],
}

