"use strict";

// The biggest difference between maps and objects is that maps can have any type of key, not just strings
const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
rest.set(2, "Lisbon, Portugal");

// We can also chain the set method since it returns the map itself
rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :(");

// Get the value by key. The type of the key matters, 1 is not the same as "1"
console.log(rest.get("name"));
console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));
rest.delete(2);
console.log(rest);
console.log(rest.clear());
console.log(rest.size);

// Sample | Using objects for map e
const arr = [1, 2];
rest.set(arr, "Test");
console.log(rest.get(arr));

// Map Iteration
const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JS"],
  ["Correct", 3],
  [true, "Correct 🎉"],
  [false, "Wrong ❌"],
]);

for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt("Your Answer"));
const answer = 3;
console.log(answer);

// if (answer === question.get("Correct")) {
//   console.log(question.get(true));
// }

console.log(question.get(question.get("Correct") === answer));

// Convert map to array
console.log([...question]);

// sources of data:
// 1. User input
// 2. API
// 3. DB

// Four built-in data structures in JS:
// 1. Object
// 2. Array
// 3. Map
// 4. Set

// Data structure to use for simple list of data:
// Array or set

// Data structure to use for key-value pairs:
// Object or map

// Which data structure to use:
// 1. Array:
//    - When you need order
//    - When you need fast access / insertion and removal (sort, splice, unshift, push)
// 2. Set:
//    - When you need unique values
//    - When you high performance tasks like searching

// 3. Object:
//    - When you need fast access / insertion and removal
//    - When you need to include functions
// 4. Map:
//    - When you need to iterate over data
//    - When you need fast access / insertion and removal
//    - When you need keys that are not strings
