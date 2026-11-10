// Do not change the line below
import { errorMessage, successMessage } from'./app.js';
let incorrectAttempts = 0;

function onLogin(username, password) {
  if (incorrectAttempts >= 4) {
    errorMessage('Login Blocked: Too many failed attempts. Please try again later.');
    return;
  }
  if (username === "admin" && password ==="Hack1234") { 
  console.log(successMessage("Login Successful!"));
  }else if (username === "user" && password ==="7654321") {
    console.log(successMessage("Login Successful!"));
  }else {
    incorrectAttempts++;
    if (incorrectAttempts >= 4) {
      errorMessage('Login Blocked: Too many failed attempts. Please try again later.');}
      else {
        console.log(errorMessage("Incorrect credentials."));
      }
  }
}

export { onLogin };
