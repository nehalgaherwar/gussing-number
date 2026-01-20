let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('guess-btn').addEventListener('click', function() {
    const guess = parseInt(document.getElementById('guess-input').value);
    const feedback = document.getElementById('feedback');
    const attemptsDisplay = document.getElementById('attempts');
    const trophy = document.getElementById('trophy');

    if (isNaN(guess) || guess < 1 || guess > 10) {
        feedback.textContent = 'Please enter a number between 1 and 10.';
        return;
    }

    attempts++;
    attemptsDisplay.textContent = `Attempts: ${attempts}`;

    if (guess === randomNumber) {
        feedback.textContent = 'Correct! You guessed it!';
        trophy.classList.remove('hidden');
    } else if (guess < randomNumber) {
        feedback.textContent = 'Too low! Try again.';
    } else {
        feedback.textContent = 'Too high! Try again.';
    }
});

document.getElementById('reset-btn').addEventListener('click', function() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('guess-input').value = '';
    document.getElementById('feedback').textContent = '';
    document.getElementById('attempts').textContent = 'Attempts: 0';
    document.getElementById('trophy').classList.add('hidden');
});
