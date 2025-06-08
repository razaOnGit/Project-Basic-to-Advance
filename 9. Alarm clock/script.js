const timeDisplay=document.getElementById('time');
const startbtn =document.getElementById('start');
const stopbtn = document.getElementById('stop');
const resetbtn = document.getElementById('reset');
let timer;
let seconds=0;
function updatetime()
{
    seconds++;
 const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
   // const milliseconds = Math.floor((seconds % 1) * 100);
    timeDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}    
startbtn.addEventListener('click',()=>{
 if(!timer){
    timer = setInterval( updatetime, 1000);
 }
});
stopbtn.addEventListener('click',() =>{
    clearInterval(timer);
    timer=null;
}
);
resetbtn.addEventListener('click',()=>{
    clearInterval(timer);
    timer=null;
    seconds=0;
    timeDisplay.textContent='00:00:00'
});

const currentTimeDisplay = document.getElementById('current-time');
const alarmInput = document.getElementById('alarm-time'); // pehle se visible input
const setAlarmBtn = document.getElementById('set-alarm');
const clearAlarmBtn = document.getElementById('clear-alarm');
const alarmSound = document.getElementById('alarm-audio');
const addAlarm = document.getElementById('add-btn');
const alarmContainer = document.getElementById('alarm-container');

let alarmTime = null;
let alarmTimeout = null;
let alarm = JSON.parse(localStorage.getItem('alarm')) || [];

function updateCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    currentTimeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

function setAlarm() {
    const alarmValue = alarmInput.value;
    if (alarmValue) {
        const [hours, minutes] = alarmValue.split(':').map(Number);
        const now = new Date();
        now.setHours(hours, minutes, 0, 0);
        alarmTime = now.getTime();
        if (alarmTimeout) {
            clearTimeout(alarmTimeout);
        }
        const timeToAlarm = alarmTime - Date.now();
        if (timeToAlarm > 0) {
            alarmTimeout = setTimeout(() => {
                alarmSound.play();
                alert('Alarm ringing!');
            }, timeToAlarm);
        }
        setAlarmBtn.disabled = true;
        alarmInput.disabled = true;
    }
}

function clearAlarm() {
    if (alarmTimeout) {
        clearTimeout(alarmTimeout);
        alarmTimeout = null;
    }
    alarmTime = null;
    alarmInput.value = '';
    setAlarmBtn.disabled = false;
    alarmInput.disabled = false;
}


function displayAlarms() {
    const alarmInputBlock = document.createElement('div');
    alarmInputBlock.className = 'alarm-block';

    alarmInputBlock.innerHTML = `
        <input type="time" class="alarm-time" />
        <button class="set-alarm-btn">Set</button>
        <button class="delete-alarm-btn">Delete</button>
    `;

    alarmContainer.appendChild(alarmInputBlock);

    const input = alarmInputBlock.querySelector('.alarm-time');
    const setBtn = alarmInputBlock.querySelector('.set-alarm-btn');
    const deleteBtn = alarmInputBlock.querySelector('.delete-alarm-btn');

    // Set alarm
    setBtn.addEventListener('click', () => {
        const alarmValue = input.value;
        if (!alarmValue) return;

        const [hours, minutes] = alarmValue.split(':').map(Number);
        const now = new Date();
        now.setHours(hours, minutes, 0, 0);
        const alarmTime = now.getTime();
        const timeToAlarm = alarmTime - Date.now();

        if (timeToAlarm > 0) {
            setTimeout(() => {
                alarmSound.play();
                alert(`⏰ Alarm for ${alarmValue} is ringing!`);
            }, timeToAlarm);
        }

        input.disabled = true;
        setBtn.disabled = true;

        alarm.push({ time: alarmValue });
        localStorage.setItem('alarm', JSON.stringify(alarm));
    });

    // Delete alarm block
    deleteBtn.addEventListener('click', () => {
        alarmContainer.removeChild(alarmInputBlock);
    });
}


window.onload = function () {
    updateCurrentTime();
    setInterval(updateCurrentTime, 1000);

    setAlarmBtn.addEventListener('click', setAlarm);
    clearAlarmBtn.addEventListener('click', clearAlarm);
    

    addAlarm.addEventListener('click', () => {
        displayAlarms(); // <- Har baar naya input block create karega
    });
}
const dashBoard = document.getElementById('radix-«rnb»');
dashBoard.addEventListener('click', () => {
     const existing = document.querySelector('.show-block');
    if (existing) {
        existing.remove(); // Close if already open
        return;
    }
    const showBlock=document.createElement('div');
    showBlock.className = 'show-block';
    showBlock.innerHTML = `
        <button id="setting">Settings</button>
        <button id="music">Audio</button>`;
    document.body.appendChild(showBlock);
    const settingbtn = document.getElementById('setting');
    const musicbtn= document.getElementById('music');

    settingbtn.addEventListener('click', () => {
        alert('Settings are not available yet.');
    });
    musicbtn.addEventListener('click', () => {
        alert('Audio is playing.');
    });
});