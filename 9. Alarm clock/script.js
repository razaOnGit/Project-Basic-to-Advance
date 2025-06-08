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
    // Remove existing audio block if it exists
    const existingAudioBlock = document.querySelector('.audio-block');
    if (existingAudioBlock) {
        existingAudioBlock.remove(); 
        return; 
    }

    // Create new audio block with radio-style controls
    const audio = document.createElement('div');
    audio.className = 'audio-block';
    audio.innerHTML = `
        <select id="audio-select">
            <option value="">Select a sound</option>
            <option value="assets/alarm-clock-beep.wav">Beep</option>
            <option value="assets/alert-alarm.wav">Alert</option>
            <option value="assets/battleship-alarm.wav">Battleship</option>
            <option value="assets/casino-win-alarm.wav">Casino win</option>
            <option value="assets/casino-jackpot-alarm.wav">Casino Jackpot</option>
            <option value="assets/digital-clock.wav">Clock Tick</option>
            <option value="assets/emergency-alert.wav">Emergency</option>
            <option value="assets/facility-alarm-sound.wav">Facility Alarm</option>
            <option value="assets/morning-clock.wav">Morning Clock</option>
            <option value="assets/retro-game.wav"> Game</option>
            <option value="assets/rooster-crowing.wav">Rooster</option>
            <option value="assets/slot-machine-a.wav">Machine Slot</option>
            <option value="assets/slot-machine.wav">Machine Slot B</option>
            <option value="assets/spaceship-alarm.wav">Siren</option>
        </select>
        <button id="play-btn">▶ Play</button>
        <button id="stop-btn">■ Stop</button>
        <div id="now-playing">No sound selected</div>
    `;
    document.body.appendChild(audio);

    // Create audio element (if it doesn't exist in HTML)
    let radioPlayer = document.getElementById('radio-player');
    if (!radioPlayer) {
        radioPlayer = document.createElement('audio');
        radioPlayer.id = 'radio-player';
        radioPlayer.loop = true; // Make it loop like a radio
        document.body.appendChild(radioPlayer);
    }

    const audioSelect = document.getElementById('audio-select');
    const playBtn = document.getElementById('play-btn');
    const stopBtn = document.getElementById('stop-btn');
    const nowPlayingDisplay = document.getElementById('now-playing');

    // When selection changes
    audioSelect.addEventListener('change', () => {
        const selectedAudio = audioSelect.value;
        if (selectedAudio) {
            radioPlayer.src = selectedAudio;
            radioPlayer.load();
            nowPlayingDisplay.textContent = `Selected: ${audioSelect.options[audioSelect.selectedIndex].text}`;
        } else {
            nowPlayingDisplay.textContent = "No sound selected";
        }
    });

    // Play button
    playBtn.addEventListener('click', () => {
        if (audioSelect.value) {
            radioPlayer.play()
                .then(() => {
                    nowPlayingDisplay.textContent = `Now Playing: ${audioSelect.options[audioSelect.selectedIndex].text}`;
                })
                .catch(e => {
                    console.error("Playback failed:", e);
                    alert("Could not play sound. Please try again.");
                });
        } else {
            alert("Please select a sound first");
        }
    });

    // Stop button
    stopBtn.addEventListener('click', () => {
        radioPlayer.pause();
        radioPlayer.currentTime = 0;
        nowPlayingDisplay.textContent = audioSelect.value 
            ? `Ready: ${audioSelect.options[audioSelect.selectedIndex].text}` 
            : "No sound selected";
    });
});
});