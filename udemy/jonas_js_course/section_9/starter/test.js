'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },

  // We are receiving one obj and destructuring it in the argument section of the function below
  orderDelivery: function ({
    startIndex = 1,
    mainIndex = 0,
    time = '11:00',
    address,
  }) {
    console.log(
      `order received! ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is you delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

// Rest pattern
const [a, b, ...others] = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(a, b, others);

// starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
// console.log(pizza, risotto, otherFood);

const add = function (...numbers) {
  // console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  // console.log(sum);
  return sum;
};

add(2, 3);
add(5, 6, 7, 89, 100);
add(10, 10, 10);
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Annandale',
//   mainIndex: 2,
//   startIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Annandale',

//   startIndex: 2,
// });

// // Destructuring objects
// const { name, openingHours, categories } = restaurant;
// // console.log(name, openingHours, categories);

// // Destructuring and also renaming objects
// const { name: restaurantName, openingHours: hours } = restaurant;
// console.log(restaurantName, hours);

// let [first, second] = restaurant.categories;
// // console.log(first, second);

// // to swith them
// [second, first] = [first, second];
// // console.log(first, second);

// let a = 1;
// let b = 3;
// const obj = { a: 27, b: 30, c: 40 };
// ({ a, b } = obj);
// // Out put a = 27, b = 30
// console.log(a, b);

// const {
//   fri: { open, close },
// } = restaurant.openingHours;

// console.log(open, close);

// const { name, openingHours, categories } = restaurant;
// const { menu = [], starterMenu: starters = [] } = restaurant;

// console.log(name, openingHours, categories);
// console.log(menu, starters);

// // Mutating variables
// let a = 1;
// let b = 3;
// const obj = { a: 27, b: 30, c: 40 };
// ({ a, b } = obj);

// const arr = [7, 8, 9];
// const badArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badArr);

// // Spread operator
// const goodArr = [1, 2, ...arr];
// console.log(goodArr);

// const newMenu = [...restaurant.mainMenu, 'Shiro'];
// console.log(newMenu);

// // Copy Array
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// // Iterables: array, strings, maps, sets. Not objects
// const str = 'Amanuel';
// const letter = [...str, ' ', 'H.'];
// console.log(letter);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Let's make pasta! Ingredient 2?"),
//   prompt("Let's make pasta! Ingredient 2?"),
// ];

// Objects
// const newRestaurant = { foundIn: 2022, ...restaurant, founder: 'Amanuel' };
// console.log(newRestaurant);

// Use any data type, return any data type,
// short-circuiting
// console.log(3 || 'Amanuel');
// console.log('' || 'Amanuel');
// console.log(true || 0);
// // console.log(3 || 'Amanuel');
// // console.log(3 || 'Amanuel');

// // Nullish values and undefined are false not 0 or ''
// console.log('---- Test: ?? ---');
// console.log(0 ?? 'Amanuel');
// console.log('' ?? 'Amanuel');
// console.log(true ?? 0);

const rest1 = {
  name: 'capri',
  numGuest: 0,
};
const rest2 = {
  name: 'ricos',
  owner: 'nimo',
};

// rest1.numGuest = rest1.numGuest || 10;
// Creates a new property if doesn't exist and assigns the value 10
// rest2.numGuest = rest2.numGuest || 10;
// OR assignment operator
// rest2.numGuest ||= 10;

// Nullish assignment operator
rest1.numGuest ??= 10;

console.log(rest1);
// console.log(rest2);

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 9.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [player1, player2] = game.players;
const [gk, ...fieldPlayers] = player1;
const allPlayers = [...player1, ...player2];
const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
const { team1, x: draw, team2 } = game.odds;

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

console.log('Goal keeper', gk);
console.log('Players', fieldPlayers);
console.log('All Players', allPlayers);
console.log('Player 1 Final', players1Final);
console.log('ODDS', team1, draw, team2);

printGoals('Amanuel', 'Nimo');
printGoals('Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels');
printGoals(...game.scored);

team1 < team2 && console.log('Team 1 is more likely to win');
team2 < team1 && console.log('Team 2 is more likely to win');
