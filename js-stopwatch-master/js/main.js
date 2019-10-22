
var hours = 0;
var min = 0;
var sec = 0;
var timer;

function callTimer() {
    sec++;
    if (sec < 100) {
        if (sec === 99) {
            sec = 0;
            sec++;
            if (min === 60)  {
                min = 0;
                hours++;
            }
        }
    }
    else{
        sec = 0;
    }
    document.getElementById("timer").innerHTML = hours + ":" + min + ":" + sec;
}


function start() {
    document.getElementById("start").disabled = true;
    timer = setInterval(callTimer, 10);
}

function stop() {
    document.getElementById("stop").disabled = false;
    clearInterval(timer);
}

function reset() {
    stop();
    hours = 0;
    min = 0;
    sec = 0;
    document.getElementById("timer").innerHTML = hours + ":" + min + ":" + sec;
}