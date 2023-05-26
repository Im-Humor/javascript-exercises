const palindromes = function (str1) {
    let forArr = [];
    let backArr = [];
    for (x = 0; x < str1.length; x++) {
        if (str1[x].toLowerCase() != str1[x].toUpperCase()) {
            forArr.push(str1[x].toLowerCase());
        }
    }
    for (x = forArr.length-1; x >= 0; x--) {
        backArr.push(forArr[x]);
    }
    for (x = 0; x < forArr.length; x++) {
        if (forArr[x] != backArr[x]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
