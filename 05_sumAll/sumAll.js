const sumAll = function(num1, num2) {
    if ( //Check for positive number
        num1 >= 0 && num2 >= 0 &&
        typeof num1 == "number" && typeof num2 == "number"
    ) { // Could be its own function?
        let numArrayInitial = [num1, num2];
        numArrayInitial.sort((a, b) => a - b);
        let numArrayFinal = [];
        for (let i = numArrayInitial[numArrayInitial.length - 1]; i >= numArrayInitial[0]; i--) {
            numArrayFinal.splice(0, 0, i);
        }
        return numArrayFinal.reduce((acc, n) => acc + n);
    } else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = sumAll;
