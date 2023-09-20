// const userName = prompt("What's your name");

// if (userName === "Bob") {
//   const userAge = prompt("Who old are you");
//   const ageNumber = parseInt(userAge);
//   if (ageNumber === 30) {
//     console.log("Welcome");
//   } else {
//     console.log("Go away");
//   }
// } else {
//   console.log("Go away");
// }

// let userCountry = prompt("Where are you from");

// switch(userCountry){
// 	case "France":
// 		console.log("Bonjour");
// 		break;
// 	case "England":
// 		console.log("Hello");
// 		break;
// 	case "Germany":
// 		console.log("Hallo");
// 		break;
// 	case "Italy":
// 		console.log("Ciao");
// 		break;
// 	case "Spain":
// 		console.log("Hola");
// 		break;
// 	default:
// 		console.log("Hey there");
// 		break;
// }

// const animal = {
//   name: "Lucky",
//   species: "Cat",
//   age: "3",
// };

// animal.name === "Lucky"
//   ? console.log("Welcome Lucky!")
//   : console.log("Wrong Cat detected!");

// function multiply(a, b) {
//   return a * b;
// }

// function sum(a, b) {
//   return a + b;
// }

// function calculator(callback, a, b) {
//   console.log(`The result is, ${callback(a, b)}`);
// }

// calculator(sum, 8, 2);
// function arrayIncludes(array, value) {
//   return array.indexOf(value) !== -1;
// }

// console.log(arrayIncludes(["Lion", "Fish"], "Lion"));
// should be true
// console.log(arrayIncludes(["Fish", "Cat", "Dog"], "Cat"));
// should be true
// console.log(arrayIncludes(["Fish", "Cat", "Dog"], "Parrot"));
// should be false

// const mysteriousString = `iu@zfiz)!uzqzf!snoi??alutargnocze&gfuzyafzygfzmgfu%f`;
// console.log("step 0 : ", mysteriousString);

// step1 : split the myserious string it into an array, so that each letter becomes an item (the separator should be an empty string).
// const step1 = mysteriousString.split(""); // TODO : change this line
// console.log("step 1 : ", step1);

// step2 : get a slice of the array : take elements from the 15th included to the 32nd excluded (remember indexes start at 0 !)
// const step2 = step1.slice(14, 31); // TODO : change this line
// console.log("step 2 : ", step2);

// step3 : Splice the array to replace 2 elements from index 5 with only one element : the letter 't'
// const step3 = step2.slice(); // making a copy
// step3.splice(5, 2, "t");
// TODO : call splice on step3 with the correct arguments
// console.log("step 3 : ", step3);
// step4 : reverse the array
// const step4 = step3.reverse(); // TODO : change this line
// console.log("step 4 : ", step4);

// step5 : each element of the array back into a string (the separator should be an empty string)
// const step5 = step4.join(""); // TODO : change this line
// console.log("step 5 : ", step5);

// Here are our Astro signs provided as a string.

// const aries = `♈`,
//   taurus = `♉`,
//   gemini = `♊`,
//   cancer = `♋`,
//   leo = `♌`,
//   virgo = `♍`,
//   libra = `♎`,
//   scorpio = `♏`,
//   sagittarius = `♐`,
//   capricorn = `♑`,
//   aquarius = `♒`,
//   pisces = `♓︎`;

// In Western Astrology there are 12 signs, organized by Earth Elements (Eart, Water, Air, Fire)
// You are going to manipulate the following arrays along with this challenge:

// const fireSigns = [aries, leo];
// const earthSigns = [taurus, virgo, capricorn, sagittarius];
// const airSigns = [pisces, gemini, libra, aquarius];
// const waterSigns = [scorpio, pisces];

/*  🏁 Add one final element to an array 
    Sagittarius is missing from fire signs please add it at the 
    END of the array and verify the result.
*/

// ✒️ Write your code here
// fireSigns.push("♐");
// console.log(fireSigns);
// console.log(
//   fireSigns[fireSigns.length - 1] === "♐"
//     ? "Good Answer ✅"
//     : "Wrong Answer ❌"
// );

/* 🏁 Remove the last element of an array
      Sagittarius should not be on earth Signs, please remove 
      Sagittarius from the array, and verify the result.
*/

// ✒️ Write your code here
// earthSigns.pop();
// console.log(earthSigns);
// the line below is for testing, don't touch it :)
// console.log(
//   earthSigns[earthSigns.length - 1] !== "♐"
//     ? "Good Answer ✅"
//     : "Wrong Answer ❌"
// );

/* 🏁 Remove one element at the begining of an array
      Pisces should not be on air Signs, please remove Pisces 
      from the array, and verify the result.
*/

// ✒️ Write your code here
// airSigns.shift("`♓︎`");
// console.log(airSigns);
// the line below is for testing, don't touch it :)
// console.log(airSigns[0] !== "♓︎" ? "Good Answer ✅" : "Wrong Answer ❌");

/*  🏁 Add one element at the beginning of an array
    Cancer is missing from water signs please add it at the 
    BEGINNING of the array and verify the result.
*/

// ✒️ Write your code here
// waterSigns.unshift("♋");
// console.log(waterSigns);
// the line below is for testing, don't touch it :)
// console.log(waterSigns[0] === "♋" ? "Good Answer ✅" : "Wrong Answer ❌");

// Given an array of names of people but mixing lower case and upper case letters, you will have to:
// - Create a function that contains the logic to refactor those names so it converts a name like `anTHoNY` to `Anthony`.
// - A function that accepts two parameters: an array and a callback function that is in charge of refactoring all items inside that array
// - Return the original array but with all names properly typed

// const people = [
//   "JoHn",
//   "ChrISTiana",
//   "anThoNY",
//   "MARia",
//   "jaMeS",
//   "MIChaEl",
//   "jeNNIFeR",
// ];

// function capitalize(world) {
//   return world.charAt(0).toUpperCase() + world.slice(1).toLowerCase();
// }

// function refacName(people) {
//   return people.map((name) => capitalize(name));
// }

// const peopleRefac = refacName(people);
// console.log(peopleRefac);

// Welcome to Decode, your mission is to decode the full message. Good luck

// EX 01 -  Use a loop to remove the 'X' and use console.log to reveal the message
const hiddenMessage = [
  "X",
  "X",
  "X",
  "X",
  "W",
  "X",
  "E",
  "X",
  "X",
  "X",
  "X",
  "X",
  "L",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "L",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  " ",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "D",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "O",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "N",
  "X",
  "X",
  "X",
  "X",
  "E",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  ",",
  "X",
  " ",
  "X",
];

// Your code goes here
let revealedMessage = "";
for (let i = 0; i < hiddenMessage.length; i++) {
  if (hiddenMessage[i] !== "X") {
    revealedMessage += hiddenMessage[i];
  }
}
console.log(revealedMessage);

// EX 02 - Remove the 'X' and the even numbers
// Hint: As this is a string you should find a way to convert into an array.

const hiddenCode =
  "XXXXXXXXXXXXXXXXXXXXXXXXXXXCXXXXXXXOXXXXXDXXXXXXXXXXXXXXXEXXXX XXXXXXXXXXXXXXX:X0XXXXXXX2XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX3XXXXXX2XXXXXXXXX2XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX4XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX6XXXXXXXXXXXXXXX6XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX7XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX2XXXXXXXXXX8XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX8XXXXXXXXXXX4XXXXXXXXXXXX6XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX4XXXXXXXXXXXXXXXXXXX9XXXX9XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX2XXX4XXXXXXXXXXX6XXXXXXXXX2XXXXXXXX3XXXXXXXX2XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX4XXXXX";

// Your code goes here

let codeArray = hiddenCode.split("");
let revealedCode = "";
for (let i = 0; i < codeArray.length; i++) {
  if (codeArray[i] !== "X" && Number(codeArray[i]) % 2 !== 0) {
    revealedCode += codeArray[i];
  }
}
console.log(revealedCode);
