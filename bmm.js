
const add = (number1, number2) => {
  return parseInt(number1, 10) + parseInt(number2, 10);
};

const multiply = (number1, number2) => {
  return parseInt(number1, 10) * parseInt(number2, 10);
};

const factorial = (number) => {
  if (number === 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
};
exports.add = add;
exports.multiply = multiply;
exports.factorial = factorial;
exports.now = Date.now();