// Higher order Functions vs Callback functions
function oneWord(str) {
  return str.replace(/ /g, "").toLowerCase();
}
const str = "Javascript is the best for web development.";
const oneWordStr = oneWord(str);
oneWordStr;

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

const upperFirstWordStr = upperFirstWord(str);
upperFirstWordStr;

// Creating Higher Order Function
const transformWord = function (str, fn) {
  return `Transformed string: ${fn(str)}`;
};

const str1 = transformWord(str, oneWord);
console.log(str1);
const str2 = transformWord(str, upperFirstWord);
console.log(str2);
// ------------------------------------------------------

// ------------------------------------------------------
// Functions returning functions
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting}, ${name}!`);
//   };
// };
const greet = (greeting) => (name) => console.log(`${greeting}, ${name}!`); // Same as the code above commented!

const greeter = greet("Hey");
console.log(greeter);

greeter("Paing");
greet("Hello")("Thae");
// ------------------------------------------------------

// ------------------------------------------------------
// Function Methods: call & apply methods
const lufthansa = {
  airline: "Lufthanasa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}.`
    );
    this.bookings.push({
      flight: `${this.airline}${this.flightNum}`,
      name,
    });
  },
};

lufthansa.book(239, "Paing Soe Chit");

// Same as the lufthanasa object without book() method
const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;
console.log(lufthansa);

// Does not work
// book(239, "Paing Soe Chit");

// The call method of functions
book.call(eurowings, 27, "Thae Lay"); // the first argument is the object that 'this' keyword will be defined!
book.call(lufthansa, 239, "Thae Lay");
console.log(eurowings);

// The apply method of functions
const flightData = [358, "Win Oo"];
book.apply(eurowings, flightData); //The apply method accept the second argument as array

book.call(eurowings, ...flightData); // Same as the above apply method
// ------------------------------------------------------

// ------------------------------------------------------
// the bind() method of functions
// book.call(eurowings, 27, "Thae Lay");

const bookEW = book.bind(eurowings);
bookEW(27, "Thae Lay");
const bookEW27 = book.bind(eurowings, 27);
bookEW27("Ma Mya Win");

// bind() method with event listener
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();
// console.log(lufthansa.plane);
document
  .querySelector("body")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// Partial application (pre-setting arguments);
const addTXT = (rate, value) => value + value * rate;
console.log(addTXT(0.1, 300));

const addVAT = addTXT.bind(null, 0.25); // 'null' for skipping 'this'
console.log(addVAT(300));

// Code Challenge
const addVatCom = (rate) => (value) => console.log(value + value * rate);
const addVat25 = addVatCom(0.25);
addVat25(300);
