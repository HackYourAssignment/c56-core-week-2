import promptSync from 'prompt-sync';
const prompt = promptSync();

let year = Number(prompt("Enter the year: "));
if ((year %4 === 0 && year %100 !== 0) || year % 400 === 0 )
{
    console.log(`Yes, ${year} is a leap year. `)
}
else if (year <= 0 || year % 1 !== 0) {
    console.log("Invalid Year!");
}
else
{
    console.log(`No, ${year} is not a leap year.`);
}
