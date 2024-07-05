const user1 = {
  id: 1,
  firstName: "Marina",
  role: "Program Manager",
  isAdmin: true,
  hobbies: ["Taylor Swift", "Cats", "Chocolate"],
  address: {
    street: "Pamplona",
    city: "Barcelona",
    number: 98,
    school: "Ironhack",
  },
};

// we can access to an specific key with dot notation:

console.log(user1.firstName);

// we can also do it like this

console.log(user1["hobbies"]);

// this way is useful to check keys that are stored in variables
// const userInput = prompt("What do you want to know about the user?");
let userInput;

if (!user1[userInput]) {
  console.error("We don't have this info, sorry");
} else {
  console.log(user1[userInput]);
}

// SAME THING BUT THE LOGIC IS REVERSED
if (user1[userInput]) {
  console.log(user1[userInput]);
} else {
  console.error("We don't have this info, sorry");
}

user1.age = 27;

user1.firstName = "Valentina";

console.log(user1);

// This gives us an error
// user1 = { name: "Marcel" };

// check if an object has a key
console.log("surname" in user1);

delete user1.age;

console.log(user1);

console.log(Object.keys(user1));

// Iterate over an object

for (dittoKey in user1) {
  console.log("THIS IS THE KEY: ", dittoKey);
  console.log("THIS IS THE VALUE: ", user1[dittoKey]);
}

console.log(Object.values(user1));
