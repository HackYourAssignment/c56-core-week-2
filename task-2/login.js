// Do not change the line below
import { errorMessage, successMessage } from './app.js';
let incorrectAttempts = 0;

function onLogin(username, password) {
  if (incorrectAttempts >= 3) {
    console.log(errorMessage("Login blocked: Too many incorrect attempts"));
    return;
  }
  else if ((username === "admin" && password === "Hack1234") || (username === "user" && password === "7654321")) {
    console.log(successMessage("Logged in successfully"));
    return;
  }
  else {
    console.log(errorMessage("Incorrect credentials"));
    incorrectAttempts++;
  }
}
// Do not change the line below
export { onLogin };
