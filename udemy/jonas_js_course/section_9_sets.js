"use strict";

// Sets
const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);

// a set only contains unique values
console.log(ordersSet);
// output: Set(3) {"Pasta", "Pizza", "Risotto"}

const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];

// Create a set from an array staff. Which will only contain unique values
const staffUnique = [...new Set(staff)];
