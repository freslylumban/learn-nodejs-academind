const name = "Fresly L. Sipahutar";
let age = 25;
const hasHobbies = true;

age = 30;

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
