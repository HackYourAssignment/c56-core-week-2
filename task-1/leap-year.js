import promptSync from 'prompt-sync';
const prompt = promptSync();

let year = Number(prompt("Enter year:"));

if (year >= 0 && year <= 9999) {
    if (year % 400 === 0) {
        console.log(`Yes, year ${year} is leap`);
    } else if (year % 4 === 0 && year % 100 !== 0) {
        console.log(`Yes, year ${year} is leap`);
    } else {
        console.log(`No, year ${year} is not leap`);
    }
} else {
    console.log("Invalid year");
}

