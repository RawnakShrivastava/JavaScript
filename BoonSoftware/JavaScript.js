// //What is Json//
// JSON: JavaScript Object Notation , its a syntax for storing and exchanging data.

// This is a comment in JavaScript '//' is used to comment out code .

// var fruits = [
//   {
//     name: "mango",
//     color: "green",
//   },
//   {
//     name: "apple",
//     color: "red",
//   },
// ];

// addFruit = (fruitName, fruitColor) => {
//   fruits.push({
//     name: fruitName,
//     color: fruitColor,
//   });
// };
// deleteFruit = (fruitName) => {
//   fruits.forEach((fruit) => {
//     if (fruitName === fruit.name) {
//       fruits.pop(fruit);
//     }
//   });
// };
// addFruit("Banana", "Yellow");
// addFruit("Guava", "Green");
// deleteFruit("Guava");

// fruits.forEach((fruit) => {
//   console.log(`Name of Fruit ${fruit.name} and its color is ${fruit.color} `);
//     });

// console.log("Starting with timeout functions..");
// setTimeout(() => {
//   console.log("Printed after 2 secs");
// }, 2000);
// console.log("Ending..?");
// setInterval(() => {
//   console.log("Print this every 3 seconds");
// }, 3000);

var arr = [1, 3, 5, 2, 8, 9];
var newArr = [];
var n = arr.length;

for (var i = n - 1; i >= 0; i--) {
  newArr.push(arr[i]);
}
console.log(newArr);
