// Declare a tuple
var myTuple;
// Initialize the tuple
myTuple = ['Hello', 123, true];
// Access elements of the tuple
console.log(myTuple[0]); // Output: Hello
console.log(myTuple[1]); // Output: 123
console.log(myTuple[2]); // Output: true
// Update elements of the tuple
myTuple[0] = 'Updated';
myTuple[1] = 456;
myTuple[2] = false;
// Destructuring tuple
var str = myTuple[0], num = myTuple[1], bool = myTuple[2];
console.log(str); // Output: Updated
console.log(num); // Output: 456
console.log(bool); // Output: false
