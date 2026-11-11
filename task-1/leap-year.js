import promptSync from 'prompt-sync';
const prompt = promptSync();

const year = prompt("Enter a year: ");
const convertYear = Number(year);


if(convertYear < 1 || convertYear > 9999){
    console.log("Invalid year!");
}

 else if (convertYear  %400===0){

    console.log(`The year  ${convertYear } It's a leap year because it is divisible by 400`);

}
else if(convertYear %100===0)
{
    console.log(`The year ${convertYear}  It's not leap year because it is divisible by 100`);

}

else if(convertYear  %4===0){

    console.log(`The year ${convertYear } It's a leap year because it is divisible by 4`);

}


else{
        console.log(`The year  ${convertYear } Iis not a leap year because it is not divisible by 4`);

}

