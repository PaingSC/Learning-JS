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
