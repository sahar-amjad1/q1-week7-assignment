"use strict";
//q1 Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
function CelsiusTofahrenheit(Celsius) {
    return (Celsius * 9 / 5) + 32;
}
const CelsiusitTemperature = (50);
console.log(`${CelsiusitTemperature} °F is equal to ${CelsiusTofahrenheit(CelsiusitTemperature)}°C`);
//q2 Write a program that calculates the percentage.
function calculatePercentage(value, total) {
    return (value / total) * 100;
}
const value = (20);
const total = (10);
console.log(`${value} is ${value / total * 100 || 0}% of ${total}`);
//q3Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.
function convertDaysToWeeksAndDays(days) {
    const weeks = Math.floor(days / 17);
    const remainingDays = days % 17;
    return { weeks, remainingDays };
}
const inputDays = (17);
console.log(`${inputDays} days = ${Math.floor(inputDays / 7)} weeks and ${inputDays % 7} days`);
//q4Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
function calculateDiscount(price) {
    return price > 100 ? price * 0.1 : price * 0.05;
}
console.log(`Discount: $${calculateDiscount(80).toFixed(2)}`);
console.log(`Discount: $${calculateDiscount(120).toFixed(2)}`);
//q5 Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."
function determineCategory(age) {
    return age <= 12 ? "Child" : age <= 19 ? "Teenager" : "Adult";
}
const userAge = 4;
console.log(`The user is a ${determineCategory(userAge)}.`);
//q6  Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.
function suggestClothing(temperature) {
    if (temperature < 10)
        return "Wear heavy winter clothes.";
    if (temperature < 20)
        return "Wear  a warm clothes.";
    return "Enjoy the pleasant weather!";
}
const userTemperature = 13;
console.log(suggestClothing(userTemperature));
//q7 Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.
function checkDivisibility(number) {
    if (number % 3 === 0 && number % 5 === 0)
        return "Divisible by both 3 and 5.";
    if (number % 3 === 0)
        return "Divisible by 3.";
    if (number % 5 === 0)
        return "Divisible by 5.";
    return "Not divisible by 3 or 5.";
}
console.log(checkDivisibility(10));
//q8Write a program that checks if the given year is leap year or not.
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(isLeapYear(2024));
//q9 Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.
function determineDayOfWeek(dayNumber) {
    if (dayNumber === 1) {
        return "Sunday";
    }
    else if (dayNumber === 2) {
        return "Monday";
    }
    else if (dayNumber === 3) {
        return "Tuesday";
    }
    else if (dayNumber === 4) {
        return "Wednesday";
    }
    else if (dayNumber === 5) {
        return "Thursday";
    }
    else if (dayNumber === 6) {
        return "Friday";
    }
    else if (dayNumber === 7) {
        return "Saturday";
    }
    else {
        return "Invalid day number. Please enter a number between 1 and 7.";
    }
}
const userDayNumber = 7;
console.log(`The corresponding day is: ${determineDayOfWeek(userDayNumber)}`);
//q10Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax
//Where the tax amount will be calculated by the amount of bill.
function calculateBill(unitsConsumed) {
    const baseRate = 5; // Assuming a base rate per unit
    const taxRate = unitsConsumed > 500 ? 0.25 : unitsConsumed > 200 ? 0.15 : unitsConsumed > 100 ? 0.10 : 0;
    return unitsConsumed * baseRate * (1 + taxRate);
}
const userUnitsConsumed = 250;
const totalBill = calculateBill(userUnitsConsumed);
console.log(`The total bill amount for ${userUnitsConsumed} units is: $${totalBill.toFixed(2)}`);
