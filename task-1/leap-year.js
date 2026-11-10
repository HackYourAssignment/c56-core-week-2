import promptSync from 'prompt-sync';
const prompt = promptSync();

let yearInput = Number (prompt ('please enter a year:'));


 if (!Number.isInteger(yearInput) || yearInput < 0){
    console.log("Invalid year.");
 }else if (yearInput % 400 === 0){
    console.log("Yes " + yearInput + " is a leap year.");
 } else if (yearInput % 4 !== 0){
    console.log("No " + yearInput + " is not a leap year.");
 }  else if (yearInput % 100 === 0){
    console.log("No " + yearInput + " is not a leap year.");
 } else {
    console.log("Yes " + yearInput + " is a leap year.");
 }


