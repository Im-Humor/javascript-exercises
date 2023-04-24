const leapYears = function(yearInput) {
    if (yearInput % 4 != 0) {
        return false;
    }
    else if (yearInput % 100 == 0 && yearInput % 400 != 0) {
        return false;
    }
    else {
        return true;
    }
};

// Do not edit below this line
module.exports = leapYears;
