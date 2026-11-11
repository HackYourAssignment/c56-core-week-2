import promptSync from 'prompt-sync';
const prompt = promptSync();

const input = prompt('Enter a year: ');
const year = Number(input);

if (input.trim() === '' || !Number.isInteger(year) || year < 1) {
  console.log('Invalid year!');
} else if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
  console.log(`Yes, ${year} is a leap year`);
} else {
  console.log(`No, ${year} is not a leap year`);
} 