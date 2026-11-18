import { errorMessage, successMessage } from './app.js';
// Count incorrect login attempts
let incorrectAttempts = 0;

function onLogin(username, password) {
      // Check if login is already blocked
      if (incorrectAttempts > 4) {
        errorMessage('To many incorrect attemps: your account is blocked');
        return;
     
    } 
        // Check if username and password are correct
      if(
         (username === 'admin' && password === 'Hack1234') || (username === 'user' && password === '7654321')
      ) {
        successMessage('Logged in successfully');
    } else {
        // Add one incorrect attempt
        incorrectAttempts++;

        // Block login after 4 incorrect attempts
        if(incorrectAttempts >= 4) {
            errorMessage('Login blocked: To many inccorect attempts');
        } else { 
            errorMessage('Inccorrect credentials');

            }
        }
    }
export { onLogin };
