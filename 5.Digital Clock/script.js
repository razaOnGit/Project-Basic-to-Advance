
const date = document.getElementById("date");
const day = document.getElementById("day");
const time = document.getElementById("digital-clock");
const start = document.getElementById("start");
const stop = document.getElementById("stop");


function updateClock() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    date.textContent = now.toLocaleDateString('en-US', options);
    // day.textContent = now.toLocaleDateString('en-US',  { weekday: 'long' });

    //if you print the some word like "today" or "now" it will be printed in the same line

    //date.textContent = `Date: ${now.toLocaleDateString('en-US', options)}`;
    // For the day display
    day.textContent = `Day: ${now.toLocaleDateString('en-US', { weekday: 'long' })}`;

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    time.textContent = `${hours}:${minutes}:${seconds}`;
}
let clockInterval;
function startClock() {
    if (!clockInterval) {
        clockInterval = setInterval(updateClock, 1000);
        updateClock(); // Initial call to display the time immediately
    }
}
function stopClock() {
    if (clockInterval) {
        clearInterval(clockInterval);
        clockInterval = null;
    }
}
start.addEventListener("click", startClock);
stop.addEventListener("click", stopClock);
