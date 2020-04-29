const person = {
  name: "Fresly",
  age: 25,
  // function local
  greet: () => {
    console.log("Hi, I am " + this.name);
  },
  // function global
  greett: function () {
    console.log("Hi, I am " + this.name);
  },
};

const copiedPerson = { ...person };
console.log(copiedPerson);

const hobbies = ["Sports", "Cooking"];
// for (let hobby of hobbies) {
//   console.log(hobby);
// }
// console.log(hobbies.map((hobby) => "Hobby: " + hobby));

// console.log(hobbies);

// copy array
const copiedArray = hobbies.slice();

// not copy array, it's create array on array
// const copiedArray = [hobbies];

// copy with spread operator
const copiedArraySpread = [...hobbies];
console.log(copiedArray);
console.log(copiedArraySpread);

// rest operator
// const toArray = (arg1, arg2, arg3) => {
const toArray = (...args) => {
  return args;
};

console.log(toArray(1, 2, 3, 4));
