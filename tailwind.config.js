/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",                // for plain HTML
    "./src/**/*.{js,ts,jsx,tsx}",  // for React / Vite
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '2rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '3rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
    "stylelint": {
  "extends": ["stylelint-config-standard"],
  "rules": {
    "at-rule-no-unknown": [true, {
      "ignoreAtRules": ["tailwind", "apply", "variants", "responsive", "screen", "layer"]
    }]
  }
}
