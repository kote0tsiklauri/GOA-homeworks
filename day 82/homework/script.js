let timerInterval;
let currentCount = 0;
let isRunning = false;

const startStopButton = document.getElementById('start-stop-btn');
const inputTime = document.getElementById('input-time');
const timerDisplay = document.getElementById('timer-display');
const message = document.getElementById('message');

startStopButton.addEventListener('click', () => {
    if (isRunning) {
        stopTimer();
    } else {
        startTimer();
    }
});

function startTimer() {
    const time = parseInt(inputTime.value);
    if (time < 0 || time > 10000) {
        alert("Please enter a valid time between 0 and 10000.");
        return;
    }

    currentCount = 0;
    timerDisplay.innerText = '';
    message.innerText = '';
    isRunning = true;
    startStopButton.innerText = 'Stop';

    timerInterval = setInterval(() => {
        if (currentCount < time) {
            currentCount++;
            timerDisplay.innerText = currentCount;
        } else {
            clearInterval(timerInterval);
            message.innerText = "Time's up!";
            isRunning = false;
            startStopButton.innerText = 'Start';
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    startStopButton.innerText = 'Start';
    message.innerText = '';
    timerDisplay.innerText = '';
}