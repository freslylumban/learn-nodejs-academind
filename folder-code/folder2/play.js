const name = "Fresly L. Sipahutar";
let age = 25;
const hasHobbies = true;

age = 30;

const summerizeUser = (userName, userAge, userHasHobby) => {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and the user has hobbies " +
    userHasHobby
  );
};

const add = (a, b) => a + b;

const addOne = (a) => a + 1;

const addRandom = () => 5 + 6;

console.log(summerizeUser(name, age, hasHobbies));

console.log(add(1, 2));

console.log(addOne(3));

console.log(addRandom());
