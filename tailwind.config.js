const { Component } = require('react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.js", "./components/**/*.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      'Quicksand_Light': ['Quicksand_Light', 'sans-serif', 'ui-sans-serif', 'system-ui'],
      'Quicksand_Medium': ['Quicksand_Medium', 'sans-serif', 'ui-sans-serif', 'system-ui'],
      'Quicksand_Regular': ['Quicksand_Regular', 'sans-serif', 'ui-sans-serif', 'system-ui'],
      'Quicksand_SemiBold': ['Quicksand_SemiBold', 'sans-serif', 'ui-sans-serif', 'system-ui'],
      'Quicksand_Bold': ['Quicksand_Bold', 'sans-serif', 'ui-sans-serif', 'system-ui'],
    },
  },
  plugins: [],
}
