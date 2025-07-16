const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        medieval: ['"IM Fell English"', ...fontFamily.serif],
        gothic:  ['"MedievalSharp"',    ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};