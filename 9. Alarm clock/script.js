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
