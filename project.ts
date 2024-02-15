

// // // function greet(name: string) {
// // //     console.log(`Hello, ${name}!`);
// // // }

// // // greet("Huzaifa Aziz");


// // // Declaring variables with types
// // let num: number = 10;
// // let str: string = "Hello";
// // let bool: boolean = true;

// // // Arrays and tuples
// // let arr: number[] = [1, 2, 3];
// // let tuple: [string, number] = ["Huziafa", 21];

// // // Enum
// // enum Color {
// //     Red,
// //     Green,
// //     Blue
// // }

// // let color: Color = Color.Green;


// // Function with optional parameter
// function greet(name?: string) {
//     if (name) {
//         console.log(`Hello, ${name}!`);
//     } else {
//         console.log("Hello, there!");
//     }
// }

// greet(); // Output: Hello, there!
// greet("Huzaifa Aziz"); // Output: Hello, Alice!

// // Arrow functions
// let add = (a: number, b: number): number => a + b;
// console.log(add(5, 3)); // Output: 8


// Interface
interface Person {
    name: string;
    age: number;
}

// Class implementing the interface
class Student implements Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

// Creating an instance of the class
let student1 = new Student("Huzaifa", 21);
student1.displayInfo(); // Output: Name: Alice, Age: 20
