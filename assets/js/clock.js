/* Javascript UTC - 7 hour countdown clock
Javascript repeating countdown clock code modified from source https://vincoding.com/weekly-repeating-countdown-timer-javascript*/
let curday;
let secTime;
let ticker;

function getSeconds() {
    let nowDate = new Date();
    let dy = 0; //Days of the week Sunday through Saturday defined as 0 to 6
    let countertime = new Date(
        Date.UTC(
            nowDate.getUTCFullYear(),
            nowDate.getUTCMonth(),
            nowDate.getUTCDate(),
            7,
            0,
            0
        )
    ); //7 out of 24 hours = 0700, the equivalent weekly reset time in UTC.

    let curtime = nowDate.getTime(); //current time
    let atime = countertime.getTime(); //countdown time
    let diff = parseInt((atime - curtime) / 1000);
    if (diff > 0) {
        curday = dy - nowDate.getDay();
    } else {
        curday = dy - nowDate.getDay() - 1;
    } //after countdown time
    if (curday < 0) {
        curday += 7;
    } //already after countdown time, switch to next week
    if (diff <= 0) {
        diff += 86400 * 7;
    }
    startTimer(diff);
}

function startTimer(secs) {
    secTime = parseInt(secs);
    ticker = setInterval('tick()', 1000);
    tick(); //initial count display
}

function tick() {
    let secs = secTime;
    if (secs > 0) {
        secTime--;
    } else {
        clearInterval(ticker);
        getSeconds(); //start over
    }

    let days = Math.floor(secs / 86400);
    secs %= 86400;
    let hours = Math.floor(secs / 3600);
    secs %= 3600;
    let mins = Math.floor(secs / 60);
    secs %= 60;

    //update the time display
    document.getElementById('days').innerHTML = curday;
    document.getElementById('hours').innerHTML =
        (hours < 10 ? '0' : '') + hours;
    document.getElementById('minutes').innerHTML =
        (mins < 10 ? '0' : '') + mins;
    document.getElementById('seconds').innerHTML =
        (secs < 10 ? '0' : '') + secs;
}
