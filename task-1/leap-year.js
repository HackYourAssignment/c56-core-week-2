import promptSync from 'prompt-sync';
const prompt = promptSync();

let year = prompt ("What is the year to chack? ");
let leapYear = Number(year);
if(leapYear > 0 && leapYear <= 9999){
    let isLeapYearFirstCheck = leapYear % 4 === 0 ;
    let isLeapYearSecondCheck = leapYear % 400 === 0 ;
    let notLeapYear = leapYear % 100 === 0 ;
    if(isLeapYearSecondCheck || (isLeapYearFirstCheck && !notLeapYear)){
        console.log("Yes," + leapYear + " is a leap year");
    }
    else {
        console.log("No," + leapYear + " is not a leap year");
    }
}else {
    console.log("Invalid year!");
}
