const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a, b) {
  let sumA = 0;
  if (Array.isArray(a)) {
    sumA = a.reduce((sum, current) => sum + current, 0);
  }

  let sumB = 0;
  if (Array.isArray(b)) {
    sumB = b.reduce((sum, current) => sum + current, 0);
  }

  return sumA + sumB;
};

const multiply = function(a) {
  let multiplied = a.reduce((total, current) => total *= current, 1);
  return multiplied;
};

const power = function(a, b) {
  let powered = 1;
  if (b === 0) {return powered};
  for (let i = b; i >= 1; i--) {
    console.log(i);
    powered *= a;
  };
  return powered;
};

const factorial = function(a) {
	if (a === 0) {return 1};
  let arr = [];
  for (let i = a; i >= 1; i--) {
    arr.unshift(i);
  };
  return arr.reduce((total, current) => (total *= current)); 
};

// // Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
