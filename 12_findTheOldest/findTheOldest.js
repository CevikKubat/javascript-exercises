const people = [
  {
    name: "Carly",
    yearOfBirth: 1066,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

const findTheOldest = function(people) {
    let age = 0;
    for (let i = 0; i < people.length; i++){
      age = people[i].yearOfDeath - people[i].yearOfBirth;
      if (isNaN(age)){
        people[i].age = 0;
      }
      else {
        people[i].age = age;
      }
      }
    people.sort((a, b) => a.age > b.age ? -1 : 1);
    return people[0];
};
console.log(findTheOldest(people))

// Do not edit below this line
module.exports = findTheOldest;
