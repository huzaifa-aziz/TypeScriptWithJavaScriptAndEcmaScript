"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Primitive Data Types
var num = 10; // Number
var str = 'Hello'; // String
var isTrue = true; // Boolean
var n = null; // Null
var u = undefined; // Undefined
var sym = Symbol('unique'); // Symbol
//let bigInt: bigint = 100n; // BigInt (added in ECMAScript 2020)
// Non-Primitive Data Types
var obj = { key: 'value' }; // Object
var arr = [1, 2, 3]; // Array
var func = function () { console.log('Function called'); }; // Function
var date = new Date(); // Date
var regex = /pattern/; // RegExp
var map = new Map(); // Map
map.set('key', 123);
var set = new Set(); // Set
set.add(1);
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Resolved');
    }, 1000);
}); // Promise
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    return MyClass;
}()); // Class
var MyEnum;
(function (MyEnum) {
    MyEnum[MyEnum["A"] = 0] = "A";
    MyEnum[MyEnum["B"] = 1] = "B";
    MyEnum[MyEnum["C"] = 2] = "C";
})(MyEnum || (MyEnum = {})); // Enum
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
promise.then(function (value) { return console.log(value); }); // Output: Resolved
console.log(new MyClass()); // Output: [object Object]
console.log(MyEnum.A); // Output: 0
