let calcFibo = function(a) {
    let n1 = 0;
    let n2 = 1;
    let nextNum;

    for (i = a; i > 0; i--) {
        nextNum = n1 + n2;
        n1 = n2;
        n2 = nextNum;
    }

    return n1;
};


const fibonacci = function(place) {
    place = parseInt(place);
    if (place === 0) {
        return 0;
    } else if (place <= 0) {
        return "OOPS";
    } else {
        return calcFibo(place);
    }
};

// Do not edit below this line
module.exports = fibonacci;
