import promptSync from 'prompt-sync';
const prompt = promptSync();

const year = prompt("Enter a year: ");
const convertYear = Number(year);


if (!Number.isInteger(convertYear) || convertYear < 1 || convertYear > 9999) {
  console.log("Invalid year!");
} 

else if ((convertYear % 4 === 0 && convertYear % 100 !== 0) || convertYear % 400 === 0) {
  console.log("Yes " + convertYear + " is a leap year.");
}


else{
        console.log(`The year  ${convertYear } Iis not a leap year because it is not divisible by 4`);
}



