// Do not change the line below
import { errorMessage, successMessage } from './app.js';

let incorrectAttempts = 0;

function onLogin(username, password) {
  const isValidUser =
    (username === 'admin' && password === 'Hack1234') ||
    (username === 'user' && password === '7654321');

  if (incorrectAttempts >= 4) {
    errorMessage('Login blocked: Too many incorrect attempts');
  } else if (isValidUser) {
    successMessage('Logged in successfully');
  } else {
    incorrectAttempts++;
    errorMessage('Incorrect credentials');
  }
}

// Do not change the line below
export { onLogin };