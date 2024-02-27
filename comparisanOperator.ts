// Equal To

let num1  = 3;
let num2  = 5;
console.log(num1 == num2);

// Strict Equal To
let name  = "huzaifa";
let name2  = "Aziz";
console.log(name === name2);

// Not Equal to
let num3  = 3;
let num4  = 5;
console.log(num1 != num2);

//Strict Not Equal To
let num6  = 3;
let num7  = "5";
console.log(num1 !== num2);

//Greater Than
let num5  = 3;
let num8  = 5;
console.log(num1 > num2);

//Less than
let num9  = 3;
let num0  = 5;
console.log(num1 < num2);

//Greater Than Or Equal To
let num11  = 3;
let num22  = 5;
console.log(num1 >= num2);

//Less Than Or Equal To
let num13  = 3;
let num14  = 5;
console.log(num1 <= num2);

let myName: string | null = null;
let defaultName: string = 'demon';
let displayName: any = myName ?? defaultName;
console.log(displayName);

export{}