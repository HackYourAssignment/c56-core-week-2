import promptSync from 'prompt-sync';
const prompt = promptSync();


// Write your code here
// Guidance:
// Step 1: prompt the user to enter a year
// Step 2: convert the user input to a number so we can perform calculations
// Step 3: Implement the logic
const year = parseInt(prompt('Set year: '));
let isLeapYear = false;

if (Number.isNaN(year)) {
  console.log(
    'Please, check the entered data. Looks like it is not a valid number',
  );
} else {
  if (year >= 1 && year <= 9999) {
    if (
      (year % 4 === 0 && year % 100 !== 0) ||
      (year % 4 === 0 && year % 400 === 0)
    ) {
      isLeapYear = true;
    }
    // Print result to console:
    console.log(
      isLeapYear
        ? `Yes, ${year} is a leap year`
        : `No, ${year} is not a leap year`,
    );
  } else {
    console.log('Invalid year!');
  }
}
