const path = require('path');

module.exports = {
  entry: {
    menu: './src/js/menu.js',
    flights: './src/js/flights.js',
    flight: './src/js/flight.js',
    buy: './src/js/buy.js',
    contact: './src/js/contact.js',
    information: './src/js/information.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve('dist/js')
  },
  mode: 'production'
}