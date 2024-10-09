const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numArr) {
  if(numArr.length <= 0){
    return 0;
  }
	return numArr.reduce((total, item) => {return total += item});
};

const multiply = function(num1) {
  return num1.reduce((total, item) => {return total *= item});
};

const power = function(num, pow) {
	let sum = 1;
  for (let i=0; i< pow; i++) {
    sum *= num;
  }
  return sum;
};

const factorial = function(num) {
	let sum = 1;
  for (let i=num; i > 0; i--) {
    sum *= i;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
