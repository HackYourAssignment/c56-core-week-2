
import promptSync from 'prompt-sync';

const prompt = promptSync();

// Exchange rate from EUR to USD
const EUR_USD_RATE = 1.1643;

// Show Menu
console.log("Hello and welcome to the currency converter. Please choose:");
console.log("1: Convert EUR to USD");
console.log("2: Convert USD to EUR");
console.log("3: Display the current exchange rate");

// Ask user to choose an option
const menuSelection = prompt("Select your option [1, 2, or 3]: ");

console.log("\n");

if (menuSelection === "1") {

    // Convert EUR to USD
    const eurAmountInput = prompt("Enter amount in EUR: ");
    const eurAmountNum = Number(eurAmountInput);
    // Check if the amount is valid
    if (eurAmountInput.trim() === "" ||
        !Number.isFinite(eurAmountNum) ||
        eurAmountNum < 0) {

        console.log("Please enter a valid non-negative number for the amount.");

    } else {
        // Calculate the amount in USD
        const usdAmount = eurAmountNum * EUR_USD_RATE;
        // Show the result
        console.log(
            `${eurAmountNum.toFixed(2)} EUR is equal to ${usdAmount.toFixed(2)} USD.`
        );
    }

} else if (menuSelection === "2") {

    // Convert USD to EUR
    const usdAmountInput = prompt("Enter amount in USD: ");
    const usdAmountNum = Number(usdAmountInput);
    // Check if the amount is valid
    if (usdAmountInput.trim() === "" ||
        !Number.isFinite(usdAmountNum) ||
        usdAmountNum < 0) {

        console.log("Please enter a valid non-negative number for the amount.");

    } else {
        // Calculate the amount in EUR
        const eurAmount = usdAmountNum / EUR_USD_RATE;
        // Show the result
        console.log(
            `${usdAmountNum.toFixed(2)} USD is equal to ${eurAmount.toFixed(2)} EUR.`
        );
    }

} else if (menuSelection === "3") {

    // Show exchange rate
    console.log(`The current exchange rate is 1 EUR = ${EUR_USD_RATE} USD.`);

} else {
    // Wrong option
    console.log("Invalid selection. Please choose 1, 2, or 3.");
}
