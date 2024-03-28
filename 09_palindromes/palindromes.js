const palindromes = function (string) {
    string = string.toLowerCase();

    let nudeString = "";
    let regex = /^[a-zA-Z0-9]+$/;
    for (let i = 0; i < string.length; i++) {
        if ((regex.test(string[i]))) {
            nudeString += string[i];
        }
    }

    let reverseString = nudeString;
    reverseString = reverseString.split("").reverse().join("");

    return nudeString === reverseString ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
