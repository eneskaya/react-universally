/* eslint-disable import/no-extraneous-dependencies */
// PostCSS-Loader config options
var tailwind = require('tailwindcss');

module.exports = {
  plugins: [
    require('postcss-simple-vars'),
    require('postcss-cssnext'),
    require('postcss-import'),
    tailwind('./tailwind.js'),
  ],
};
