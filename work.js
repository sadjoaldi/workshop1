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

const mysteriousString = `iu@zfiz)!uzqzf!snoi??alutargnocze&gfuzyafzygfzmgfu%f`;
console.log("step 0 : ", mysteriousString);

// step1 : split the myserious string it into an array, so that each letter becomes an item (the separator should be an empty string).
const step1 = mysteriousString.split(""); // TODO : change this line
console.log("step 1 : ", step1);

// step2 : get a slice of the array : take elements from the 15th included to the 32nd excluded (remember indexes start at 0 !)
const step2 = step1.slice(14, 31); // TODO : change this line
console.log("step 2 : ", step2);

// step3 : Splice the array to replace 2 elements from index 5 with only one element : the letter 't'
const step3 = step2.slice(); // making a copy
// step3.splice(5, 2, "t");
// TODO : call splice on step3 with the correct arguments
console.log("step 3 : ", step3);
// step4 : reverse the array
const step4 = step3.reverse(); // TODO : change this line
console.log("step 4 : ", step4);

// step5 : each element of the array back into a string (the separator should be an empty string)
const step5 = step4.join(""); // TODO : change this line
console.log("step 5 : ", step5);
