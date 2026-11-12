// Do not change the line below
import { errorMessage, successMessage } from "./app.js";

let incorrectAttempts = 0;
// admin = "Hack1234";
// user = 7654321

function lockWindow(seconds) {
  document.body.inert = true;
  document.body.style.opacity = "0.5";

  setTimeout(() => {
    document.body.inert = false;
    document.body.style.opacity = "1";
  }, seconds * 1000);
  incorrectAttempts = 0; // Reset the incorrect attempts counter after the lock period
}
function onLogin(username, password) {
  if (
    (username === "admin" && password === "Hack1234") ||
    (username === "user" && password === "7654321")
  ) {
    successMessage("Login successful!");
  } else {
    errorMessage("Incorrect credentials.");
  }
  incorrectAttempts++;
  if (incorrectAttempts >= 4) {
    errorMessage("Login blocked: Too many incorrect attempts");
    lockWindow(5); // Lock the window for 5 seconds on 4th incorrect attempt
  }
}
export { onLogin };
