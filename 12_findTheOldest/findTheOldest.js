const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    let ageComp = 0;
// first we iterate through the list of people
// to find the oldest person's age and set equal to ageComp
    for(x = 0; x < people.length; x++) {
        let age = 0;
        if (people[x].hasOwnProperty("yearOfDeath") == false) {
            age = currentYear - people[x].yearOfBirth;
        }
        else {
            age = (people[x].yearOfDeath - people[x].yearOfBirth);
        }
        if (age > ageComp) {
            ageComp = age;
        }
    }
    // then we find the specific user based on the oldest age
    // making sure to account for deathyear not provided
    return people.find(person => {
        let age = 0;
        if (person.hasOwnProperty("yearOfDeath") == false) {
            age = currentYear - person.yearOfBirth;
            return (age == ageComp);
        }
        else {
            age = (person.yearOfDeath - person.yearOfBirth);
            return (age == ageComp);
        }
    });
};

// Do not edit below this line
module.exports = findTheOldest;
