//BMI calculator using if-else statements
function calculateBMI(weight, height) {
    let bmi = weight / Math.pow(height, 2);
    let category;
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obesity";
    }
    return category;
}
// Example usage
var weight = 70; // in kilograms
var height = 1.75; // in meters
var bmiCategory = calculateBMI(weight, height);
console.log(`Your BMI category is: ${bmiCategory}`);
// Output: Your BMI category is: Normal weight
// Example usage with different values  
weight = 95; // in kilograms
height = 1.75; // in meters
bmiCategory = calculateBMI(weight, height);
console.log(`Your BMI category is: ${bmiCategory}`);
// Output: Your BMI category is: Obesity
// Example usage with different values  
weight = 50; // in kilograms
height = 1.75; // in meters
bmiCategory = calculateBMI(weight, height);
console.log(`Your BMI category is: ${bmiCategory}`);
// Output: Your BMI category is: Underweight
// Example usage with different values
weight = 80; // in kilograms
height = 1.75; // in meters
bmiCategory = calculateBMI(weight, height);
console.log(`Your BMI category is: ${bmiCategory}`);