// Primitive Data Types
let num: number = 10; // Number
let str: string = 'Hello'; // String
let isTrue: boolean = true; // Boolean
let n: null = null; // Null
let u: undefined = undefined; // Undefined
let sym: symbol = Symbol('unique'); // Symbol
//let bigInt: bigint = 100n; // BigInt (added in ECMAScript 2020)

// Non-Primitive Data Types
let obj: object = { key: 'value' }; // Object
let arr: number[] = [1, 2, 3]; // Array
let func: Function = () => { console.log('Function called'); }; // Function
let date: Date = new Date(); // Date
let regex: RegExp = /pattern/; // RegExp
let map: Map<string, number> = new Map(); // Map
map.set('key', 123);
let set: Set<number> = new Set(); // Set
set.add(1);
let promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Resolved');
  }, 1000);
}); // Promise
class MyClass {} // Class
interface MyInterface {} // Interface
enum MyEnum { A, B, C } // Enum

// Printing values
console.log(num); // Output: 10
console.log(str); // Output: Hello
console.log(isTrue); // Output: true
console.log(n); // Output: null
console.log(u); // Output: undefined
console.log(sym); // Output: Symbol(unique)
//console.log(bigInt); // Output: 100n
console.log(obj); // Output: { key: 'value' }
console.log(arr); // Output: [1, 2, 3]
func(); // Output: Function called
console.log(date); // Output: Current date and time
console.log(regex); // Output: /pattern/
console.log(map); // Output: Map { 'key' => 123 }
console.log(set); // Output: Set { 1 }
promise.then((value) => console.log(value)); // Output: Resolved
console.log(new MyClass()); // Output: [object Object]
console.log(MyEnum.A); // Output: 0


export{}