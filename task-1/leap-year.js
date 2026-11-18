import promptSync from 'prompt-sync';
const prompt = promptSync();

// Ask the user to enter a year
const input = prompt('Enter a year: ');
const year = Number(input);

// Check if the year is valid
if (
    input.trim() === '' || !Number.isInteger(year) || year < 1 || year > 9999
) {
    console.log('Invalid year');
// Check if the year is divisible by 400
} else if (year % 400 === 0) {
    console.log(`${year} is a leap year`);

} else if (year % 100 === 0) {
    console.log(`${year} is not a leap year`);
// Check if the year is divisible by 4
} else if (year % 4 === 0) {
    console.log(`${year} is a leap year`);
// If none of the conditions are true
} else {
    console.log(`${year} is not a leap year`);
}
