const numberArrayToString = require('./numberArrayToString')
const factorial = require('./factorial')

module.exports = (str) => {
    return str.split("").map((char) => parseInt(char));
  }