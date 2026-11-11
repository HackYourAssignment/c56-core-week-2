// Do not change the line below
import { errorMessage, successMessage } from './app.js';

let incorrectAttempts = 0;

function onLogin(username, password) {
  // Write your code here.
  // Use the variables 'username' and 'password' to access the input values
  // Use incorrectAttempts to track the number of failed attempts
  if (incorrectAttempts > 3) {
    errorMessage('Login blocked: Too many incorrect attempts');
    return;
  }
  if (username === 'admin' && password === 'Hack1234' || username === 'user' && password === '7654321') {
    successMessage('Logged in successfully');
  } else {
    errorMessage('Incorrect credentials');
    incorrectAttempts++;
  }
}

// Do not change the line below
export { onLogin };
