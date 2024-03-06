// Define a function that calculates the factorial of a number
function factorial(num: number): number {
    let result: number = 1;
    for (let i: number = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

// Test the factorial function
console.log("Factorial of 5:", factorial(5));

// Define an array of strings
const fruits: string[] = ["Apple", "Banana", "Orange", "Mango"];

// Print each element of the array using a for loop
console.log("Fruits:");
for (let i: number = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Define an object with key-value pairs of different data types
const person: { name: string, age: number, isStudent: boolean, hobbies: string[] } = {
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
for (let i: number = 0; i < person.hobbies.length; i++) {
    console.log("-", person.hobbies[i]);
}

// Define a map of numbers to strings
const numberMap: Map<number, string> = new Map([
    [1, "One"],
    [2, "Two"],
    [3, "Three"],
    [4, "Four"],
    [5, "Five"]
]);

// Print each key-value pair of the map using a for...of loop
console.log("Number Map:");
for (const [key, value] of numberMap) {
    console.log(key, "->", value);
}

// Define a set of numbers
const numberSet: Set<number> = new Set([1, 2, 3, 4, 5]);

// Print each element of the set using a for...of loop
console.log("Number Set:");
for (const num of numberSet) {
    console.log(num);
}
export{}