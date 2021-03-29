let daysn = document.querySelector('#days')
let hoursn = document.querySelector('#hours')
let minsn = document.querySelector('#mins')
let secsn = document.querySelector('#secs')
let newYears = '1 Jan 2022';
function countDown() {
    let newYearDate = new Date(newYears);
    let currentDate = new Date();

    let totalSeconds = (newYearDate - currentDate) / 1000
    let days = Math.floor(totalSeconds / 3600 / 24)
    let hours = Math.floor(totalSeconds / 3600 % 24)
    let minutes = Math.floor(totalSeconds / 60) % 60
    let seconds = Math.floor(totalSeconds) % 60
    daysn.innerHTML = days
    hoursn.innerHTML = formatTime(hours)
    minsn.innerHTML = formatTime(minutes)
    secsn.innerHTML = formatTime(seconds)

    // console.log(currentDate, newYearDate, days, hours, minutes, seconds);
}
function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}
countDown()
setInterval(countDown, 1000)
