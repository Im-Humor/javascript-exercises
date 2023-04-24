const sumAll = function(num1, num2) {
    let total = 0;
    if (typeof num1 != 'number' || typeof num2 != 'number') {
        console.log("Error 1");
        return 'ERROR';
    }
    else if (num1 < 0 || num2 < 0) {
        console.log("Error 2");
        return 'ERROR';
    }
    else {
        for (let i = Math.min(...arguments); i <= Math.max(...arguments); i++) {
            total += i;
        }
        return total;
    }
};

sumAll(1, 4);

// Do not edit below this line
module.exports = sumAll;
