const findTheOldest = function(persons) {
    currentYear = new Date().getFullYear();
    let oldest;
    let agePrevious = 0;
    for (let person of persons) {
        let age;
        if (person.yearOfDeath) {
            age = person.yearOfDeath - person.yearOfBirth;
        } else {
            age = currentYear - person.yearOfBirth;
        }
        if (age > agePrevious) {
            oldest = person;
            agePrevious = age;
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
