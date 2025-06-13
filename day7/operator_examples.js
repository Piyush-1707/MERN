//kilometers to miles conversion
var km=10
var miles=km*0.621371;
console.log("Converting kilometers to miles:");
console.log(km + " kilometers is equal to " + miles + " miles.");
console.log("");

//celsius to fahrenheit conversion
var celsius=25;
var fahrenheit=(celsius * 9/5) + 32;
console.log("Converting Celsius to Fahrenheit:");
console.log(celsius + " degrees Celsius is equal to " + fahrenheit + " degrees Fahrenheit.");
console.log("");

//pounds to kilograms conversion
var pounds=150;     
var kilograms=pounds*0.453592;
console.log("Converting pounds to kilograms:");
console.log(pounds + " pounds is equal to " + kilograms + " kilograms.");
console.log("");

//area of a circle
var radius=5;
var area=Math.PI*radius*radius;
console.log("Calculating the area of a circle:");
console.log("The area of a circle with radius " + radius + " is " + area + ".");
console.log("");

//simple interest calculation
var principal=1000; 
var rate=5; 
var time=3; 
var simpleInterest=(principal * rate * time) / 100;
console.log("Calculating simple interest:");
console.log("The simple interest on a principal of " + principal + " at a rate of " + rate + "% for " + time + " years is " + simpleInterest + ".");