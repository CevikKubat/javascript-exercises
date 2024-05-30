const convertToCelsius = function(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
};

const convertToFahrenheit = function(celsius) {
  return (celsius * 9 / 5) + 32;
};

console.log(convertToCelsius(32));
console.log(convertToFahrenheit(0));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
