const findTheOldest = function(peopleArr) {
    // let oldest =0;
    // peopleArr.reduce(( oldest, people) => {
    //     let age = people["yearOfDeath"] - people["yearOfBirth"];
    //     oldest = age > oldest? age: oldest;
    //     console.log(people);
    //     console.log(oldest);
    //     return people;
    //  }, 0);


  return peopleArr.reduce(
    (oldestPerson, people) =>  getAge(people) > getAge(oldestPerson) ? people : oldestPerson
    , peopleArr[0]
   );
};

function getAge(people) {
    let yearOfDeath = 0;
    if( people.hasOwnProperty("yearOfDeath")) {
        yearOfDeath = people["yearOfDeath"];
    } else {
        yearOfDeath = new Date().getFullYear();
    }


    return  yearOfDeath - people["yearOfBirth"];
}

// Do not edit below this line
module.exports = findTheOldest;
