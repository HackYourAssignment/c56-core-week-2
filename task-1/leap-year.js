import promptSync from 'prompt-sync';
const prompt = promptSync();


// Write your code here
// Guidance:
// Step 1: prompt the user to enter a year
// Step 2: convert the user input to a number so we can perform calculations
// Step 3: Implement the logic

let year = Number(prompt('Enter the year: '));

function CheckLeapYear(year) {
    if (year % 400 === 0) {
        return true;
    } else if (year % 100 === 0) {
        return false; 
    } else if (year % 4 === 0) {
        return true;
    } else {
        return false
    }
}

if (CheckLeapYear(year)) {
    console.log(`${year} is a leap year!`);
} else if (year <=1 || year >= 9999) {
    console.log(`${year} Invalid year!`)
} else {
    console.log(`${year} is not the leap year!`);
}
