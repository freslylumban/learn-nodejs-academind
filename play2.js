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

const hobbies = ["Sports", "Cooking"];
// for (let hobby of hobbies) {
//   console.log(hobby);
// }
console.log(hobbies.map((hobby) => "Hobby: " + hobby));

console.log(hobbies);
