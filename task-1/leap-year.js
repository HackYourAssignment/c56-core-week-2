import promptSync from "prompt-sync";
const prompt = promptSync();
var user_option = true;
function is_valid_year(y) {
  return Number.isInteger(y) && y >= 1 && y <= 9999;
}
while (user_option) {
  var year = prompt("Enter a year:");
  year = Number(year);
  console.log(`year is ${year}`);

  if (!is_valid_year(year)) {
    console.log(`${year} is invalid year.`);
  } else if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`Yes, ${year} is a leap year.`);
  } else {
    console.log(`No, ${year} is not a leap year.`);
  }

  var user_option = prompt("Press any key to continue or type N/n to quit:");
  if (user_option.toLowerCase() === "n") {
    console.log("Good Bye!");
    break;
  }
  user_option = true;
}
