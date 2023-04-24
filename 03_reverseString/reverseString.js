const reverseString = function(strInput) {
    let strArray = strInput.split("");
    let arrOut = [];
    for (let i of strArray) {
        arrOut.unshift(i);
    }
    return arrOut.join("");
};

// Do not edit below this line
module.exports = reverseString;
