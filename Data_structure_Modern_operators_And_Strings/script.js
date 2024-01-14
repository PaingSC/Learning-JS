'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
// Defining object with object literal
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[5]]: {
    open: 11,
    close: 23,
  },
  [weekdays[6]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // The following is the old school method
  // openingHours: openingHours,
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  orderDeliever({starterIndex = 1, mainIndex = 0, time = '20: 00', address}) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delievered to ${address} at ${time}.`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`);
  },

  orderPizza(firstIngredient, ...restIngredients) {
    console.log(firstIngredient);
    console.log(restIngredients);
  }
};
// -------------------------------------------------------
// Optional Chaining
// Old School method
if(restaurant.openingHours && restaurant.openingHours.mon)
 console.log(restaurant.openingHours.mon.open);

// with optional chaining
console.log(restaurant.openingHours?.mon?.open);

// Example
for (const day of weekdays) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}.`);
}

// optional chaining with methods
console.log(restaurant.order?.(0, 1) ?? "Method doesn't exist!");
console.log(restaurant.orderChicken?.(0, 1) ?? "Method doesn't exist!");

// optional chaining with arrays
const users = [
  {
    name: 'Paing',
    age: '27',
    email: 'hello@paing.io'
  }
];
// let users = [];
// the old school way
if(users.length > 0) console.log(users[0].name);
else console.log("The users array is empty!");

// using optional chaining of ES2020
console.log(users[0]?.name ?? "The users array is empty");





// -------------------------------------------------------

// -------------------------------------------------------
// // The for-of loop (Looping arrays)
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// for(const item of menu) console.log(item);

// // Old school way
// for(const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }
// // Using Destructuring
// for (const [no, item] of menu.entries()) {
//   console.log(`${no + 1}: ${item}`);
// }
// -------------------------------------------------------

// -------------------------------------------------------
// The rest parameters
// // The following is the spread operator because it is on RIGHT side of "="
// const menu = [...restaurant.mainMenu];

// // The following is the rest parameters because it is on LEFT side of "="
// const [Italian, Pizzeria, ...otherTags] = restaurant.categories;
// console.log(Italian, Pizzeria, otherTags);

// // The rest parameters with object
// const {sat, ...weekdays} = restaurant.openingHours;
// console.log(weekdays);

// // The rest pattern with function
// // passing multiple arguments in function using the rest parameters
// const add = function(...numbers) {
//   // console.log(numbers);
//   let sum = 0;
//   for(let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// }
// add(1,2);
// add(1,2,3);
// add(1,2,3,4,5,6);

// const x = [1,2,3,4,5,6];
// add(...x); //Same as 'add(1,2,3,4,5,6);'

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');


// -------------------------------------------------------

// -------------------------------------------------------
// // // Spread Operator
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const nweArr = [1, 2, ...arr];
// console.log(nweArr);

// const nweMenu = [...restaurant.mainMenu, "Cnocci"];
// console.log(nweMenu);

// // Copy An Array
// const mainMeunCopy = [...restaurant.mainMenu];
// console.log(mainMeunCopy);

// // Joining 2 arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// // Iterables: arrays, strings, maps, sets. Not objects
// const str = 'paing';
// const strLetters = [...str, " ", ".S"];
// console.log(strLetters);
// console.log(...str);
// console.log('p', 'a', 'i', 'n', 'g');

// // passing an array as an argument in a function using spread operator
// const ingredients = [prompt("Let's make pasta! Ingredient 1?"), prompt("Let's make pasta! Ingredient 2?"), prompt("Let's make pasta! Ingredient 3?")];
// console.log(ingredients);
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// // Spread operator with objects
// const newRestaurant = {foundedIn: 1990, ...restaurant, founder: "Cuiseppe"};
// console.log(newRestaurant);



// -------------------------------------------------------
// -------------------------------------------------------
// // Destructing Object
// // Destructing and passing Obj in functing parameters
// restaurant.orderDeliever({
//   time: "22: 30",
//   address: "Vel dia Sole, 22",
//   mainIndex: 2,
//   starterIndex: 2
// }
// );
// restaurant.orderDeliever({
//   address: 'Via del Sole, 21',
//   starterIndex: 3
// });


// // Simple Sestructuring
// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories) ;

// // Destructing objects assigning nwe variable name
// const {name: restaurantName, openingHours: hours, categories: tags } = restaurant;
// console.log(restaurantName, hours, tags);

// // Destructing objects with default values
// const {menu = [], starterMenu: starters = []} = restaurant;
// console.log(name, starters);

// // Destructuring and Mutating array
// let a = 222;
// let b = 333;
// const obj = {a: 21, b: 31};
// console.log(a, b);
// ({a, b} = obj);
// console.log(a, b);

// // Destructuring Nested Objects
// const {openingHours: {fri: {open: o, close: c}}} = restaurant;
// console.log(o, c);





// -------------------------------------------------------
// Destructing Array
// Destructuring with function return
// console.log(restaurant.order(2, 0));
// const [starterMenu, mainMenu] = restaurant.order(2, 0);
// console.log(starterMenu, mainMenu);


// -------------------------------------------------------
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// let x = 2;
// let y = 4;

// let a, b;
// [a, b] = [x, y];
// console.log(a, b);
// console.log(x, y);
// [x, y] = [y, x];
// console.log(x, y);

// // Nested array Destructuring
// const nested = [4,7, [3,1]];
// const [j, , k] = nested;
// console.log(j, k);
// // Nested array Destructing
// const [jN, , [kN, k2N]] = nested;
// console.log(jN, kN, k2N);

// // Default Value (Destructing with default value)
// const defaultArr = [2, 4];
// let [dx, dy, dz] = defaultArr;
// console.log(dx, dy, dz);
// [dx = 1, dy =1, dz=1] = defaultArr;
// console.log(dx, dy, dz);
// [dx = 1, , dy =1, dz=1] = defaultArr;
// console.log(dx, dy, dz);




