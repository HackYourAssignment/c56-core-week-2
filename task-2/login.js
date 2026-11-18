// Do not change the line below
import { errorMessage, successMessage } from './app.js';

let incorrectAttempts = 0;

function onLogin(username, password) {
  if(username === "admin"&& password ==="Hack1234"){
    successMessage("logged in successfully")

  }
  else if(username === "user" && password === "7654321"){
      successMessage("logged in successfully")
    }
  
    else {
    incorrectAttempts++;
    if (incorrectAttempts > 3) {
      errorMessage("Login blocked: Too many incorrect attempts");
    } else {
      errorMessage("Incorrect credentials");
    }
  }
}

// Do not change the line below
export { onLogin };
