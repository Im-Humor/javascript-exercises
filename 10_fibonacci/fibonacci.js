const fibonacci = function(input1) {
    if (typeof parseInt(input1) != 'number' || parseInt(input1) < 0) {
        return "OOPS";
    }
    let a = 0;
    let b = 1;
    let c = 0;
    for (x = 0; x < input1; x++) {
        a = b;
        b = c;
        c = a + b;
    }
    return c;
};

// Do not edit below this line
module.exports = fibonacci;
