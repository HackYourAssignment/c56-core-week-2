// Do not change the line below
import { errorMessage, successMessage } from './app.js';

let incorrectAttempts = 0;

function onLogin(username, password) {
    if (incorrectAttempts >= 4) {
        errorMessage("Login blocked: Too many incorrect attempts");
        return;
    }
    if (username === "admin" && password === "Hack1234") {
        successMessage("Logged in successfully");
        return;
    }
    if (username === "user" && password === "7654321") {
        successMessage("Logged in successfully");
        return;  
    } 
    incorrectAttempts++;

    if (incorrectAttempts >= 4) {
        errorMessage("Login blocked: Too many incorrect attempts");
    } else {
        errorMessage("Incorrect credentials");
    }
}

// Do not change the line below
export { onLogin };