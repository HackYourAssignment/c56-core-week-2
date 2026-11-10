import { errorMessage, successMessage } from "./app.js";

let incorrectAttempts = 0;

function onLogin(username, password) {
  if (incorrectAttempts >= 3) {
    errorMessage("Account is blocked");
    return;
  }
  if (
    (username === "admin" && password === "Hack1234") ||
    (username === "user" && password === "7654321")
  ) {
    successMessage("Logged in successfully");
  } else {
    incorrectAttempts++;
    errorMessage("Incorrect credentials");
  }
}

export { onLogin };
