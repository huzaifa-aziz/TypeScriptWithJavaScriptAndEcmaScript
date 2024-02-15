// // // function greet(name: string) {
// // //     console.log(`Hello, ${name}!`);
// // // }
// Class implementing the interface
var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    Student.prototype.displayInfo = function () {
        console.log("Name: ".concat(this.name, ", Age: ").concat(this.age));
    };
    return Student;
}());
// Creating an instance of the class
var student1 = new Student("Huzaifa", 21);
student1.displayInfo(); // Output: Name: Alice, Age: 20
