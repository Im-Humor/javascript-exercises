const getTheTitles = function(array1) {
    array2 = [];
    for (x = 0; x < array1.length; x++) {
        array2.push(array1[x].title);
    }
    return array2;
};

// Do not edit below this line
module.exports = getTheTitles;
