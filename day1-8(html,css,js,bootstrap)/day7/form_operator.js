 function convertToMiles() {
        var km = document.getElementById("km").value;
        var miles = km * 0.621371;
        document.getElementById("result").innerText = km + " kilometers is equal to " + miles + " miles.";
    }

function convertToFahrenheit() {
        var celsius = document.getElementById("celsius").value;
        var fahrenheit = (celsius * 9 / 5) + 32;
        document.getElementById("resultF").innerText = celsius + " degrees Celsius is equal to " + fahrenheit + " degrees Fahrenheit.";
    }

function convertToKilograms() {
        var pounds = document.getElementById("pounds").value;
        var kilograms = pounds * 0.453592;
        document.getElementById("resultK").innerText = pounds + " pounds is equal to " + kilograms + " kilograms.";
    }

function calculateArea() {
        var radius = document.getElementById("radius").value;
        var area = Math.PI * radius * radius;
        document.getElementById("resultA").innerText = "The area of a circle with radius " + radius + " is " + area + ".";
    }

function calculateSimpleInterest() {
        var principal = document.getElementById("principal").value;
        var rate = document.getElementById("rate").value;
        var time = document.getElementById("time").value;
        var simpleInterest = (principal * rate * time) / 100;
        document.getElementById("resultSI").innerText = "The simple interest on a principal of " + principal + " at a rate of " + rate + "% for " + time + " years is " + simpleInterest + ".";
    }
