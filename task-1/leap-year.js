import promptSync from "prompt-sync";
const prompt = promptSync();

const year = Number(prompt("Write a year here: "));

if (year > 0 && year <= 9999) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log(`Yes, ${year} is a leap year!`);
  } else {
    console.log(`No, ${year} is not a leap year!`);
  }
} else {
  console.log("Invalid year!");
}
