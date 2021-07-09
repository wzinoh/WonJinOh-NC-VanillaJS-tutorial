const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  reminder: function (a, b) {
    return a % b;
  },
  powerOf: function (a, b) {
    return a ** b;
  }
};

const plusResult = calculator.add(2, 3);
const minusResult = calculator.subtract(plusResult, 10);
const multiplyResult = calculator.multiply(10, minusResult);

console.log(plusResult);
console.log(minusResult);
console.log(multiplyResult);
