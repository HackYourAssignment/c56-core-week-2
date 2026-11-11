import promptSync from 'prompt-sync';

const prompt = promptSync();

let year = Number(prompt('Enter a year: '));

if (isNaN(year) || year < 1 || year > 9999 || !Number.isInteger(year)) {
    console.log('Invalid year!');
}
else if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log(`Yes, ${year} is a leap year`);
}
else {
    console.log(`No, ${year} is not a leap year`);
}