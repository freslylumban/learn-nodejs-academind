var name = "Fresly L. Sipahutar";
var age = 25;
var hasHobbies = true;

function summerizeUser(userName, userAge, userHasHobby) {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and the user has hobbies " +
    userHasHobby
  );
}

console.log(summerizeUser(name, age, hasHobbies));
