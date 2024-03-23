const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    };
    let finalString = "";
    for (; num > 0; num--) {
        finalString += string;
    } return finalString;
}

// Do not edit below this line
module.exports = repeatString;
