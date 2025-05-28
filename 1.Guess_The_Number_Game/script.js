const secretNumber=Math.floor(Math.random() * 100) + 1;
let guesses = 0;
const maxScore = 100;
const guessInput = document.getElementById("guessInput");
const submitGuess = document.getElementById("submitGuess");
const resultMessage = document.getElementById("resultMessage");
const score= document.getElementById("score");

submitGuess.addEventListener('click', checkGuess);
        guessInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkGuess();
            }
        });

 function checkGuess() {
            const userGuess = parseInt(guessInput.value);
            
            // Validate input
            if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
                resultMessage.textContent = 'Please enter a valid number between 1 and 100';
                return;
            }
             guesses++;
               const currentScore = Math.max(0, maxScore - guesses);
            resultMessage.textContent = `Attempts left: ${currentScore}`;
            resultMessage.textContent += ` (Secret number: ${secretNumber})`;
            if (userGuess === secretNumber) {
                resultMessage.textContent = `Congratulations! You guessed the correct number in ${guesses} tries!`;
                resultMessage.style.color = 'green';
                guessInput.disabled = true;
                submitGuess.disabled = true;
                score.textContent = `Your final score is: ${currentScore}`;

            } else if (userGuess < secretNumber) {
                resultMessage.textContent = 'Too low! Try a higher number.';
                resultMessage.style.color = 'blue';
                score.textContent += ` (Secret number: ${secretNumber})`;
            } else {
                resultMessage.textContent = 'Too high! Try a lower number.';
                resultMessage.style.color = 'red';
                score.textContent += ` (Secret number: ${secretNumber})`;
            }     
            guessInput.value = '';
            guessInput.focus();
        }
