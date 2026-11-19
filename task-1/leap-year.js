import promptSync from 'prompt-sync';
const prompt = promptSync();

let year = Number(prompt("Enter year:"));

if (!Number.isInteger(year) || year < 1 || year > 9999) {
    console.log("Invalid year");
} else if ((year % 400 === 0) ||
    (year % 4 === 0 && year % 100 !== 0)
) {
    console.log(`Yes, the year ${year} is a leap year.`);
} else {
    console.log(`No, year ${year} is not a leap year`);
}

