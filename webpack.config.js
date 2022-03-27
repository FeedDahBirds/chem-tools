const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'chem-tools.js',
    path: path.resolve(__dirname, 'dist'),
  },
};