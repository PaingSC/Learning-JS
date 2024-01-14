'use strict';
// Strings are premitive
// but take a look at the following example and checkout the browser console
console.log(new String('Paing'));
console.log(typeof new String('Paing'));

// Strings methods(Working with strings);
const airline = 'Air KBZ Myanmar';
const plane = 'A320';
console.log(plane[0]);
console.log('Paing'[0]);

// The lenght of a string
console.log(airline.length);
console.log('Paing'.length);

// String Methods
// indexOf() & lastIndexOf() methods
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('KBZ'));
console.log(airline.indexOf('kbz')); //Case sensitive and return -1

// slice method
console.log(airline.slice(4));
console.log(airline.slice(0, 1));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' '))); // Catching only the first word 
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Catching only the last word

const checkMiddleSeat = function(seat) {
    const s = seat.slice(-1); // Catching only the lest letter
    // the middle seats ends with B&E
    if(s === 'B' || s === 'E') {
        console.log('Unlucky! You got the middle seat.');
    } else console.log('Great! You get the side seat.');
}
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('22E');

// toLowerCase and toUpperCase
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capatilization in name
const passengerName = 'paInG';
const nameLowerCase = passengerName.toLowerCase();
const nameCorrectCase = nameLowerCase[0].toUpperCase() + nameLowerCase.slice(1);
console.log(nameCorrectCase);

// Comparing Emails
const email = 'hello@paing.io';
const inputEmail = ' Hello@Paing.io '; //Continging some unwaned spaces
const lowerEmail = inputEmail.toLowerCase();
// trim() method (Remove the start and end spaces containing in the string)
const trimEmail = lowerEmail.trim();
console.log(trimEmail);

// replace() method
const weightLb = '100,53Lb';
const weightKg = weightLb.replace('Lb', 'Kg').replace(',', '.');
console.log(weightKg);

// replace() method and the "regular expression"
const announcement = 'Attention! All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'))

// Booleans
const newPlane = 'Airbus A320neo';
console.log(newPlane.includes('A320'));
console.log(newPlane.includes('airbus'));
console.log(newPlane.includes('Airbus A3'));

// Practice exercise
const checkBaggage = function(baggage) {
    if(baggage.includes('knife') || baggage.includes('gun')) console.log('You are not allowed on board!'); 
    else console.log('Welcome aboard');
}
checkBaggage('I have a laptop, some food and a pocket Knife'.toLowerCase());
checkBaggage('Socks and camera'.toLowerCase());
checkBaggage('Got some snacks and a GUN for protection'.toLowerCase());

// split() & join method
console.log("She_is_very_beautiful!".split('_'));
const myName = "Paing Soe Chit";
const myNameSplit = myName.split(' ');
console.log(myNameSplit, myNameSplit.length);

const [firstName, lastName] = "Thae Lay".split(' ');
console.log(firstName, lastName);

const newName = ['Mrs.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

// Practice exercise
const capitalizeName = function(name) {
    const names = name.split( );
    let capitalizeNameArr = [];
    for(const n of names) {
        // capitalizeNameArr.push(n[0].toUpperCase() + n.slice(1));
        capitalizeNameArr.push(n.replace(n[0], n[0].toUpperCase()));
    }
    const finalName = capitalizeNameArr.join(' ');
    console.log(finalName);
}
capitalizeName('Mg Paing Soe Chit');

// padding methods
const message = 'Hello, how are you?';
console.log(message.padStart(30, '_'));
console.log('Hello'.padStart(30, '_'));
console.log(message.padEnd(30, '_'));
console.log(message.padStart(30, '_').padEnd(40, '_'));

// Practice Exercise
const maskCreditCard = function(card) {
    // const str = card + ''; // change to string tpye if card is num type.
    // const str = String(card);
    const str = card.toString();
    const lastStr = str.slice(-4);
    const maskCard = lastStr.padStart(str.length, '*');
    console.log(maskCard);
}
maskCreditCard('82934938023948');
maskCreditCard(837483293);
maskCreditCard('04358984982049582034095');

// repeat() method
const greeting = 'Hello World! ';
console.log(greeting.repeat(4));

// Practice exercise
const planeInline = function(planes) {
    console.log(`There are ${planes} in line ${'✈'.repeat(planes)}.`);
}
planeInline(3);
planeInline(1);
planeInline(5);