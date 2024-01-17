"use strict";

console.log("Closure");

// functions returning function
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers.`);
  };
};

const booker = secureBooking();
//After execution of secureBooking is finished, it's execution content no longer exists in the call stack
console.dir(booker);
console.dir(secureBooking);

// But the booker function can access the variable environment of its birthplace(here in secureBooking);
booker();
booker();
booker();
console.dir(booker);

// Some other examples
// Example 2: function assigning inside a function
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 100;
  f = function () {
    console.log(b * 3);
  };
};

// f(); // Cannot call f bofore defining
g(); // 'f' is assigned as function in the execution content fo the function g
f();
console.dir(f);

h(); // 'f' is re-assigned again in the execution content of the function h
f();
console.dir(f);

// Example 3: callback function inside a timmer that is execute inside an another function
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are bording all ${n} passengers.`);
    console.log(`There are 3 groups, each group with ${perGroup} passengers.`);
    console.dir(this);
  }, wait * 1000);

  console.log(`Will start bording in ${wait} seconds.`);
};

const perGroup = 180;
boardPassengers(150, 3);
