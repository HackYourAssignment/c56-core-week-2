import promptSync from 'prompt-sync';
const prompt = promptSync();

let yearInput = prompt ('please enter a year:');
 yearInput= Number ;

 if (yearInput % 4 === 0 && yearInput % 100 !== 0 || yearInput % 400 === 0) {
    console.log(`${yearInput} is a leap year.`);
 } else {
    console.log(`${yearInput} is not a leap year.`);
 }  


// Write your code here
// Guidance:
// Step 1: prompt the user to enter a year
// Step 2: convert the user input to a number so we can perform calculations
// Step 3: Implement the logic
