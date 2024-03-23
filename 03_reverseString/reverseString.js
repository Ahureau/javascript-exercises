const reverseString = function(string) {
    let stringArray = string.split("");
    stringArray.reverse();
    string = "";
    for (const letter in stringArray) {
        string += stringArray[letter];
    }
    return string;
    }

// Do not edit below this line
module.exports = reverseString;
