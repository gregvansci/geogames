/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
            "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#111827",
        "secondary-dark": "#1F2937",
      },
    },
    screens: {
      'sm': '600px',
      'md': '900px',
      'lg': '1200px',
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
