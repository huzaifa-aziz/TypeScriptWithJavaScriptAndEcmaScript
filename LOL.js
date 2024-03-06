"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Define a function that calculates the factorial of a number
function factorial(num) {
    var result = 1;
    for (var i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}
// Test the factorial function
console.log("Factorial of 5:", factorial(5));
// Define an array of strings
var fruits = ["Apple", "Banana", "Orange", "Mango"];
// Print each element of the array using a for loop
console.log("Fruits:");
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// Define an object with key-value pairs of different data types
var person = {
    name: "John",
    age: 25,
    isStudent: true,
    hobbies: ["Reading", "Gaming", "Traveling"]
};
// Print the details of the person object
console.log("Person Details:");
console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("Is Student:", person.isStudent);
console.log("Hobbies:");
for (var i = 0; i < person.hobbies.length; i++) {
    console.log("-", person.hobbies[i]);
}
// Define a map of numbers to strings
var numberMap = new Map([
    [1, "One"],
    [2, "Two"],
    [3, "Three"],
    [4, "Four"],
    [5, "Five"]
]);
// Print each key-value pair of the map using a for...of loop
console.log("Number Map:");
for (var _i = 0, numberMap_1 = numberMap; _i < numberMap_1.length; _i++) {
    var _a = numberMap_1[_i], key = _a[0], value = _a[1];
    console.log(key, "->", value);
}
// Define a set of numbers
var numberSet = new Set([1, 2, 3, 4, 5]);
// Print each element of the set using a for...of loop
console.log("Number Set:");
for (var _b = 0, numberSet_1 = numberSet; _b < numberSet_1.length; _b++) {
    var num = numberSet_1[_b];
    console.log(num);
}
