const findTheOldest = function(people){
  let age = 0;
  let dead = false;
  for (let i = 0; i < people.length; i++){
    if ('yearOfDeath' in people[i]){
      age = people[i].yearOfDeath - people[i].yearOfBirth; 
    }
    else {
      age = 2024 - people[i].yearOfBirth;
    }
    people[i].age = age;
  }
  people.sort((a, b) => a.age > b.age ? -1 : 1);
  return people[0];
}

// Do not edit below this line
module.exports = findTheOldest;
