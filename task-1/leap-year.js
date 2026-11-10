import promptSync from 'prompt-sync';
const prompt = promptSync();


// Write your code here
// Guidance:
// Step 1: prompt the user to enter a year
// Step 2: convert the user input to a number so we can perform calculations
// Step 3: Implement the logic
const userInput = Number(prompt('Please enter a year: '));

if (isNaN(userInput) || userInput <= 0 || userInput > 9999) {
    console.log('Invalid year!');
} else if (userInput % 4 !== 0) {
    console.log(`No, ${userInput} is not a leap year.`)
} else if (userInput % 100 === 0 && userInput % 400 !== 0) {
    console.log(`No, ${userInput} is not a leap year.`)
} else {
    console.log(`Yes, ${userInput} is a leap year.`)
}