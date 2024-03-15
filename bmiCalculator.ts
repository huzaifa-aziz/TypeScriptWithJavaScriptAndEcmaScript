let weightKg: number = 50; // Weight in kilograms
let heightCm: number = 175; // Height in centimeters

// Convert height to meters
let heightM: number = heightCm / 100;

// Calculate BMI
let bmi: number = weightKg / (heightM * heightM);

// Interpret BMI
let Result: string;

if (bmi < 18.5) {
    Result = "Underweight";
} else if (bmi >= 18.5 && bmi < 25) {
    Result = "Normal weight";
} else if (bmi >= 25 && bmi < 30) {
    Result = "Overweight";
} else {
    Result = "Obese";
}

console.log(`BMI: ${bmi.toFixed(2)}`);
console.log(`Result: ${Result}`);
