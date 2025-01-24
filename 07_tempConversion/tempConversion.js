const convertToCelsius = function(tempFar) {
  const calcCel = (tempFar -32) * 5/9;
const resultCel = Math.round(calcCel*10)/10;
  return resultCel;
};

const convertToFahrenheit = function(tempCel) {
  const calcFar = (tempCel * (9/5)) +32;
  const resultFar = Math.round(calcFar*10)/10;
  return resultFar;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
