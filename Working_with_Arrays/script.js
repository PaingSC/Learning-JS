'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];

// method: slice
// unmutable: the 'slice' method is unmutable with the origin method
console.log('____SLICE____');
console.log(arr.slice(1));
console.log(arr.slice(-1));
console.log(arr.slice(1, 3));
console.log(arr.slice(1, -1));
console.log(arr.slice()); // same as the original array
console.log([...arr]); // same as the original array

// method: splice
// mutable: cut the desire lenght of array from the original one
console.log('____SPLICE____');
console.log(`arr: ${arr}`);

arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.splice(1));
console.log(`arr: ${arr}`);

arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.splice(-1));
console.log(`arr: ${arr}`);

arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.splice(1, 3));
console.log(`arr: ${arr}`);

arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.splice(1, 2));
console.log(`arr: ${arr}`);
// Check the borwser console to see the results

// method: reverse
// mutable: return the new array in reverse order and also in the original array
arr = ['a', 'b', 'c', 'd', 'e'];
let arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(`arr2: ${arr2}`);

// method: concat (the abbreviation of concatinate)
const letters = arr.concat(arr2); // concatinating the arr with arr2
console.log(letters);
console.log([...arr, ...arr2]); // same result as concat method

// method: join
// return a string combining the elements of array with the desire character
console.log(letters.join(''));
console.log(letters.join('-'));
console.log(letters.join("'"));

// method: at
// selecting an element of array with the specific index
const num = [11, 22, 33, 44];
console.log(num[0]);
console.log(num.at(0));

// getting the last array element
console.log(num[num.length - 1]);
console.log(num.slice(-1)[0]);
console.log(num.at(-1));

// 'at' method also work on 'string'
console.log('paing'.at(0));
console.log('paing'.at(-1));

// Looping Arrays: forEach loop
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Firt look at for-of loop
console.log('____for-of____');

for (const [i, movment] of movements.entries()) {
  if (movment > 0) console.log(`Movment ${i + 1}: You deposited ${movment}.`);
  else console.log(`Movment ${i + 1}: You withdrew ${Math.abs(movment)}.`);
}

// forEach
console.log('____forEach____');
movements.forEach((mov, i, arr) => {
  if (mov > 0) console.log(`Movment ${i + 1}: You deposited ${mov}.`);
  else console.log(`Movment ${i + 1}: You withdrew ${Math.abs(mov)}.`);
  console.log();
});

// method: map
// immutable
const euroToUsd = 1.1;
const movmentsUSD = movements.map(mov => mov * euroToUsd);
console.log(movements);
console.log(movmentsUSD);

let movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * euroToUsd);
}
console.log(movementsUSDfor);

const movementsDetails = movements.map((mov, i) => {
  return `Movement ${i + 1}: You ${
    mov > 0 ? 'deposited' : 'withdrew'
  }: ${Math.abs(mov)}.`;
});
console.log(movementsDetails);

// method: filter
// immutable

const withdrewFilter = movements.filter(mov => mov < 0);
console.log(withdrewFilter);

// with for-of
let withdrewFilterForof = [];
for (const mov of movements) if (mov < 0) withdrewFilterForof.push(mov);

// method: reduce
// immutable
const globalBalance = movements.reduce((acc, cur, i) => {
  console.log(`Iteration ${i}: ${acc}.`);
  return acc + cur;
}, 0);
console.log(globalBalance);

// with for-of
let globalBalanceForof = 0;
for (const cur of movements) globalBalanceForof += cur;
console.log(globalBalanceForof);

// Chaining all methods
const eurToUsd = 1.1;
const totalDepositedUsd = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositedUsd);

// method: find
// unmutable
// find() method return only the first element that satstify the callback function
const firstWithdraw = movements.find(mov => mov < 0);
console.log(`firstWithdraw: ${Math.abs(firstWithdraw)}.`);

// method: find
// unmutable
// find() method return the index of the first element that satstify the callback function
const firstWithdrawIndex = movements.findIndex(mov => mov < 0);
console.log(`firstWithdrawIndex: ${firstWithdrawIndex}.`);
