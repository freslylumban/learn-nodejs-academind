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

person.greet();
person.greett();
