var weightKg = 50; // Weight in kilograms
var heightCm = 175; // Height in centimeters
// Convert height to meters
var heightM = heightCm / 100;
// Calculate BMI
var bmi = weightKg / (heightM * heightM);
// Interpret BMI
var Result;
if (bmi < 18.5) {
    Result = "Underweight";
}
else if (bmi >= 18.5 && bmi < 25) {
    Result = "Normal weight";
}
else if (bmi >= 25 && bmi < 30) {
    Result = "Overweight";
}
else {
    Result = "Obese";
}
console.log("BMI: ".concat(bmi.toFixed(3)));
console.log("Result: ".concat(Result));
