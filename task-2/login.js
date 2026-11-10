// Do not change the line below
import { errorMessage, successMessage } from './app.js';

let incorrectAttempts = 0;

function onLogin(username, password) {
  if (incorrectAttempts >= 3) {
    errorMessage('Login blocked: Too many incorrect attempts');
    return;
  }

  const ADMIN = { userName: 'admin', password: 'Hack1234' };
  const USER = { userName: 'user', password: '7654321' };

  const isAdmin = username === ADMIN.userName && password === ADMIN.password;
  const isUser = username === USER.userName && password === USER.password;

  if (isUser || isAdmin) {
    incorrectAttempts = 0;
    successMessage('Logged in successfully');
  } else {
    incorrectAttempts++;
    errorMessage('Incorrect credentials');
  }
}

// Do not change the line below
export { onLogin };
