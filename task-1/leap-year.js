import promptSync from 'prompt-sync';
const prompt = promptSync();

const year = prompt("Enter a year: ");
const yearNumber = Number(year);

let result;

if (!Number.isInteger(yearNumber) || yearNumber < 1 || yearNumber > 9999) {
  result = "Invalid year!";
} else if (yearNumber % 400 === 0) {
  result = `Yes, ${yearNumber} is a leap year`;
} else if (yearNumber % 100 === 0) {
  result = `No, ${yearNumber} is not a leap year`;
} else if (yearNumber % 4 === 0) {
  result = `Yes, ${yearNumber} is a leap year`;
} else {
  result = `No, ${yearNumber} is not a leap year`;
}

console.log(result);
