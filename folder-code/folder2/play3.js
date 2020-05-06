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

// OBJECT DESTRUCTURING
const printName = ({ name, age }) => {
  console.log(name);
};

printName(person);

const { name, age } = person;
console.log(name, age);

// ARRAY DESTRUCTURING
const hobbies = ["Sports", "Cooking"];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);
