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
